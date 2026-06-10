import fs from "fs";
import path from "path";

export interface BookChunk {
  bookId: string;
  bookTitle: string;
  fileName: string;
  sourcePath: string;
  chunkIndex: number;
  text: string;
}

export interface BookSearchResult {
  chunks: BookChunk[];
  score: number;
}

const SUPPORTED_EXTENSIONS = new Set([".txt", ".md", ".pdf"]);
const CHUNK_SIZE = 700;
const CHUNK_OVERLAP = 120;
const CACHE_TTL_MS =
  process.env.NODE_ENV === "development" ? 30_000 : 10 * 60_000;
const TEXT_CACHE_DIR = path.join(process.cwd(), ".cache", "books");

const STOP_WORDS = new Set([
  "waa", "maxay", "maxaa", "sidee", "yaa", "miyaa", "ma", "ii", "sheeg",
  "wax", "aad", "ugu", "ka", "ku", "iyo", "ama", "haddii", "sida", "the",
  "what", "who", "how", "about", "tell", "me", "is", "are", "a", "an",
]);

let cachedChunks: BookChunk[] | null = null;
let cacheLoadedAt = 0;
let loadingPromise: Promise<BookChunk[]> | null = null;

function getBooksDirs(): string[] {
  const dirs: string[] = [path.join(process.cwd(), "resources", "books")];

  if (process.env.BOOKS_PATH) {
    for (const entry of process.env.BOOKS_PATH.split(";")) {
      const trimmed = entry.trim();
      if (trimmed && fs.existsSync(trimmed)) dirs.push(trimmed);
    }
  }

  return [...new Set(dirs.map((d) => path.resolve(d)))];
}

function getBookTitle(fileName: string): string {
  return fileName
    .replace(/\s*\(\d+\)/g, "")
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function chunkText(
  text: string,
  fileName: string,
  sourcePath: string
): BookChunk[] {
  const bookTitle = getBookTitle(fileName);
  const bookId = `${sourcePath}::${fileName}`;
  const normalized = text.replace(/\r\n/g, "\n").replace(/\s+/g, " ").trim();

  const paragraphs = normalized
    .split(/(?<=[.!?])\s+|\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 40);

  const chunks: BookChunk[] = [];
  let buffer = "";
  let chunkIndex = 0;

  const pushChunk = (chunk: string) => {
    if (chunk.trim().length < 40) return;
    chunks.push({
      bookId,
      bookTitle,
      fileName,
      sourcePath,
      chunkIndex: chunkIndex++,
      text: chunk.trim(),
    });
  };

  for (const paragraph of paragraphs) {
    if ((buffer + " " + paragraph).length <= CHUNK_SIZE) {
      buffer = buffer ? `${buffer} ${paragraph}` : paragraph;
      continue;
    }

    if (buffer) pushChunk(buffer);

    if (paragraph.length <= CHUNK_SIZE) {
      buffer = paragraph;
      continue;
    }

    let start = 0;
    while (start < paragraph.length) {
      const end = Math.min(start + CHUNK_SIZE, paragraph.length);
      pushChunk(paragraph.slice(start, end));
      if (end >= paragraph.length) break;
      start = end - CHUNK_OVERLAP;
    }
    buffer = "";
  }

  if (buffer) pushChunk(buffer);
  return chunks;
}

async function extractPdfText(fullPath: string): Promise<string> {
  const stat = fs.statSync(fullPath);
  const cacheKey = path.basename(fullPath).replace(/[^\w.-]/g, "_") + ".txt";
  const cacheFile = path.join(TEXT_CACHE_DIR, cacheKey);

  if (fs.existsSync(cacheFile)) {
    const cacheStat = fs.statSync(cacheFile);
    if (cacheStat.mtimeMs >= stat.mtimeMs) {
      return fs.readFileSync(cacheFile, "utf-8");
    }
  }

  const buffer = fs.readFileSync(fullPath);
  const { PDFParse } = await import("pdf-parse");
  const parser = new PDFParse({ data: buffer });
  const result = await parser.getText();
  await parser.destroy();
  const text = result.text?.trim() ?? "";

  fs.mkdirSync(TEXT_CACHE_DIR, { recursive: true });
  fs.writeFileSync(cacheFile, text, "utf-8");

  return text;
}

async function readFileContent(fullPath: string): Promise<string> {
  const ext = path.extname(fullPath).toLowerCase();

  if (ext === ".pdf") {
    return extractPdfText(fullPath);
  }

  return fs.readFileSync(fullPath, "utf-8");
}

async function readBooksFromDisk(): Promise<BookChunk[]> {
  const allChunks: BookChunk[] = [];
  const dirs = getBooksDirs();

  for (const booksDir of dirs) {
    if (!fs.existsSync(booksDir)) {
      if (booksDir.endsWith(path.join("resources", "books"))) {
        fs.mkdirSync(booksDir, { recursive: true });
      }
      continue;
    }

    const walk = async (dir: string) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          await walk(fullPath);
          continue;
        }

        const ext = path.extname(entry.name).toLowerCase();
        const baseName = entry.name.toLowerCase();

        if (
          !SUPPORTED_EXTENSIONS.has(ext) ||
          entry.name.startsWith(".") ||
          baseName.startsWith("readme")
        ) {
          continue;
        }

        try {
          const content = await readFileContent(fullPath);
          if (content.length < 50) continue;
          allChunks.push(...chunkText(content, entry.name, fullPath));
          console.log(`[books] Loaded: ${entry.name} (${content.length} chars)`);
        } catch (err) {
          console.error(`Failed to read book: ${fullPath}`, err);
        }
      }
    };

    await walk(booksDir);
  }

  return allChunks;
}

export async function getBookIndex(): Promise<BookChunk[]> {
  const now = Date.now();

  if (cachedChunks && now - cacheLoadedAt <= CACHE_TTL_MS) {
    return cachedChunks;
  }

  if (!loadingPromise) {
    loadingPromise = readBooksFromDisk()
      .then((chunks) => {
        cachedChunks = chunks;
        cacheLoadedAt = Date.now();
        loadingPromise = null;
        console.log(`[books] Index ready: ${chunks.length} chunks`);
        return chunks;
      })
      .catch((err) => {
        loadingPromise = null;
        throw err;
      });
  }

  return loadingPromise;
}

export async function getBooksCount(): Promise<number> {
  const chunks = await getBookIndex();
  return new Set(chunks.map((c) => c.bookId)).size;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

function scoreChunk(query: string, chunk: BookChunk): number {
  const queryTokens = tokenize(query);
  if (!queryTokens.length) return 0;

  const chunkLower = chunk.text.toLowerCase();
  const titleLower = chunk.bookTitle.toLowerCase();
  let score = 0;

  for (const token of queryTokens) {
    if (chunkLower.includes(token)) score += 2;
    if (titleLower.includes(token)) score += 4;
  }

  const queryLower = query.toLowerCase().trim();
  if (queryLower.length > 5 && chunkLower.includes(queryLower)) {
    score += 10;
  }

  const phrase = queryTokens.slice(0, 4).join(" ");
  if (phrase.length > 6 && chunkLower.includes(phrase)) {
    score += 6;
  }

  return score;
}

export async function searchBooks(
  query: string,
  limit = 3
): Promise<BookSearchResult> {
  const chunks = await getBookIndex();
  if (!chunks.length) return { chunks: [], score: 0 };

  const scored = chunks
    .map((chunk) => ({ chunk, score: scoreChunk(query, chunk) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!scored.length) return { chunks: [], score: 0 };

  const topScore = scored[0].score;
  const topChunks = scored
    .filter((item) => item.score >= topScore * 0.55)
    .slice(0, limit)
    .map((item) => item.chunk);

  return { chunks: topChunks, score: topScore };
}

export function formatBookResponse(
  result: BookSearchResult,
  lang: "so" | "en"
): string {
  if (!result.chunks.length) return "";

  const primary = result.chunks[0];
  const excerpts = result.chunks
    .map((c) => c.text)
    .filter((text, i, arr) => arr.indexOf(text) === i)
    .slice(0, 2)
    .join("\n\n");

  if (lang === "so") {
    return `**Jawaab laga helay buugga: ${primary.bookTitle}**

${excerpts}

---
📖 **Isha buugga:** \`${primary.fileName}\``;
  }

  return `**Answer from book: ${primary.bookTitle}**

${excerpts}

---
📖 **Source:** \`${primary.fileName}\``;
}
