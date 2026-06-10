import {
  getHeritageResponseMeta,
  isGreetingOnly,
  isRealQuestion,
} from "@/lib/heritage-knowledge";
import {
  formatBookResponse,
  searchBooks,
} from "@/lib/book-search";
import {
  fetchWebSources,
  formatVerificationBlock,
  formatWebPrimaryResponse,
} from "@/lib/web-verification";

export type ResponseSource =
  | "heritage"
  | "books"
  | "verified"
  | "web"
  | "greeting";

export interface VerifiedResponse {
  text: string;
  source: ResponseSource;
}

const BOOK_SCORE_MIN = 3;

export async function getVerifiedResponse(
  query: string
): Promise<VerifiedResponse> {
  const trimmed = query.trim();
  const heritage = getHeritageResponseMeta(trimmed);

  if (
    !trimmed ||
    isGreetingOnly(trimmed) ||
    heritage.matchType === "greeting" ||
    heritage.matchType === "identity"
  ) {
    return {
      text: heritage.text,
      source: heritage.matchType === "identity" ? "heritage" : "greeting",
    };
  }

  const bookResult = await searchBooks(trimmed);
  const hasBook = bookResult.score >= BOOK_SCORE_MIN && bookResult.chunks.length > 0;

  const hasHeritage =
    heritage.matchType === "knowledge" || heritage.matchType === "archive";

  let webSources: Awaited<ReturnType<typeof fetchWebSources>> = [];

  if (isRealQuestion(trimmed) && !hasBook) {
    try {
      webSources = await fetchWebSources(trimmed);
    } catch {
      webSources = [];
    }
  }

  if (hasBook && hasHeritage) {
    return {
      text:
        formatBookResponse(bookResult, heritage.lang) +
        "\n\n---\n📚 **Xog dheeraad ah (Kaydka Dhaxalka):**\n" +
        heritage.text,
      source: "verified",
    };
  }

  if (hasBook) {
    let text = formatBookResponse(bookResult, heritage.lang);

    if (isRealQuestion(trimmed)) {
      try {
        const web = await fetchWebSources(trimmed);
        if (web.length > 0) {
          text += formatVerificationBlock(web, heritage.lang);
        }
      } catch {
        // Skip web verification
      }
    }

    return { text, source: "books" };
  }

  if (hasHeritage && webSources.length > 0) {
    return {
      text: heritage.text + formatVerificationBlock(webSources, heritage.lang),
      source: "verified",
    };
  }

  if (hasHeritage) {
    return { text: heritage.text, source: "heritage" };
  }

  if (webSources.length > 0) {
    return {
      text: formatWebPrimaryResponse(webSources, heritage.lang),
      source: "web",
    };
  }

  return { text: heritage.text, source: "heritage" };
}
