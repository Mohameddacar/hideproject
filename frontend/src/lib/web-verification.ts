export interface WebSource {
  title: string;
  url: string;
  excerpt: string;
  wiki: "so" | "en";
}

const WIKI_USER_AGENT = "HiddoAI/1.0 (Somali heritage platform)";

const SEARCH_HINTS: Record<string, string> = {
  araweelo: "Araweelo Somali queen folklore",
  "laas geel": "Laas Geel rock art Somaliland",
  laasgeel: "Laas Geel",
  gabay: "Somali poetry gabay",
  maanso: "Somali poetry",
  berbera: "Berbera port Somalia history",
  xeer: "Xeer Somali customary law",
  dirac: "Somali traditional dress dirac",
  guntiino: "Somali guntiino clothing",
  buraanbur: "Buraanbur Somali wedding poetry",
  hadraawi: "Hadraawi Somali poet",
  gaarriye: "Gaarriye Somali poet",
  ajuran: "Ajuran Sultanate Somalia",
  saylac: "Zeila Somalia history",
  zeila: "Zeila Somalia",
  somaliland: "Somaliland history culture",
  soomaaliya: "Somalia history culture",
  somalia: "Somalia history culture",
  "horn of africa": "Horn of Africa Somalia",
  geel: "Somali camel pastoralism",
  aroos: "Somali wedding traditions",
  qurbajoog: "Somali diaspora",
  diaspora: "Somali diaspora",
};

function buildSearchQuery(userQuery: string): string {
  const normalized = userQuery.toLowerCase().trim();

  for (const [hint, search] of Object.entries(SEARCH_HINTS)) {
    if (normalized.includes(hint)) return search;
  }

  return userQuery
    .replace(
      /\b(waa maxay|maxaa|maxay|sidee|ii sheeg|sharax|sheeg|turjum|ma|miyaa|about|what is|tell me|explain)\b/gi,
      ""
    )
    .replace(/[?!.]/g, "")
    .trim();
}

async function searchWikipedia(
  query: string,
  wiki: "so" | "en"
): Promise<{ title: string; pageid: number }[]> {
  const base = wiki === "so" ? "https://so.wikipedia.org" : "https://en.wikipedia.org";
  const params = new URLSearchParams({
    action: "query",
    list: "search",
    srsearch: query,
    format: "json",
    srlimit: "3",
    origin: "*",
  });

  const res = await fetch(`${base}/w/api.php?${params}`, {
    headers: { "User-Agent": WIKI_USER_AGENT },
    signal: AbortSignal.timeout(8000),
  });

  if (!res.ok) return [];

  const data = await res.json();
  return (data.query?.search ?? []).map(
    (item: { title: string; pageid: number }) => ({
      title: item.title,
      pageid: item.pageid,
    })
  );
}

async function fetchWikipediaSummary(
  title: string,
  wiki: "so" | "en"
): Promise<WebSource | null> {
  const base = wiki === "so" ? "https://so.wikipedia.org" : "https://en.wikipedia.org";
  const encoded = encodeURIComponent(title.replace(/ /g, "_"));

  try {
    const res = await fetch(`${base}/api/rest_v1/page/summary/${encoded}`, {
      headers: { "User-Agent": WIKI_USER_AGENT },
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) return null;

    const data = await res.json();
    if (data.type === "disambiguation" || !data.extract) return null;

    return {
      title: data.title,
      url: data.content_urls?.desktop?.page ?? `${base}/wiki/${encoded}`,
      excerpt: data.extract.slice(0, 500),
      wiki,
    };
  } catch {
    return null;
  }
}

function isRelevant(source: WebSource, query: string): boolean {
  const combined = `${source.title} ${source.excerpt}`.toLowerCase();
  const terms = buildSearchQuery(query).toLowerCase().split(/\s+/).filter((t) => t.length > 3);

  if (terms.length === 0) return true;

  const matches = terms.filter((term) => combined.includes(term)).length;
  return matches >= 1 || combined.includes("somali") || combined.includes("soomaal");
}

export async function fetchWebSources(query: string): Promise<WebSource[]> {
  const searchQuery = buildSearchQuery(query);
  if (!searchQuery || searchQuery.length < 2) return [];

  const sources: WebSource[] = [];
  const seen = new Set<string>();

  for (const wiki of ["so", "en"] as const) {
    try {
      const results = await searchWikipedia(searchQuery, wiki);

      for (const result of results.slice(0, 2)) {
        const summary = await fetchWikipediaSummary(result.title, wiki);
        if (!summary || seen.has(summary.url)) continue;
        if (!isRelevant(summary, query)) continue;

        seen.add(summary.url);
        sources.push(summary);
        if (sources.length >= 2) return sources;
      }
    } catch {
      // Continue to next wiki
    }
  }

  return sources;
}

export function formatVerificationBlock(
  sources: WebSource[],
  lang: "so" | "en"
): string {
  if (!sources.length) return "";

  if (lang === "so") {
    const lines = sources.map(
      (s) =>
        `• **${s.title}** (${s.wiki === "so" ? "Wikipedia Soomaali" : "Wikipedia Ingiriis"}): ${s.excerpt}\n  🔗 ${s.url}`
    );
    return `\n\n---\n📚 **Xaqiijiyay internetka (Wikipedia):**\n${lines.join("\n")}`;
  }

  const lines = sources.map(
    (s) => `• **${s.title}**: ${s.excerpt}\n  🔗 ${s.url}`
  );
  return `\n\n---\n📚 **Verified online (Wikipedia):**\n${lines.join("\n")}`;
}

export function formatWebPrimaryResponse(
  sources: WebSource[],
  lang: "so" | "en"
): string {
  const primary = sources[0];

  if (lang === "so") {
    return `Waxaan ka helay xog **internetka** oo la hubo:

**${primary.title}**
${primary.excerpt}

🔗 **Isha:** ${primary.url}

*Xusuusin:* Kani waa jawaab laga soo qaaday Wikipedia. HiddoAI wuxuu weli ku darayaa xog dheeraad ah oo dhaxal ah marka la helo.`;
  }

  return `Here's verified information from the web:

**${primary.title}**
${primary.excerpt}

🔗 **Source:** ${primary.url}`;
}
