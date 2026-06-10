import { SYSTEM_PROMPT } from "@/lib/heritage-knowledge";
import {
  getVerifiedResponse,
  type ResponseSource,
} from "@/lib/verified-response";

export const runtime = "nodejs";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

async function getOpenAIResponse(
  messages: ChatMessage[],
  webContext: string
): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const systemWithContext = webContext
    ? `${SYSTEM_PROMPT}\n\nXogta la helay (buugga, kaydka, ama internetka — isticmaal kaliya haddii ay sax tahay):\n${webContext}`
    : SYSTEM_PROMPT;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        { role: "system", content: systemWithContext },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
      temperature: 0.5,
      max_tokens: 1500,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("OpenAI API error:", error);
    return null;
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? null;
}

function createStream(
  text: string,
  source: ResponseSource | "ai"
): ReadableStream {
  const encoder = new TextEncoder();

  return new ReadableStream({
    async start(controller) {
      const metadata = JSON.stringify({ source }) + "\n";
      controller.enqueue(encoder.encode(metadata));

      const chunkSize = 3;
      for (let i = 0; i < text.length; i += chunkSize) {
        const chunk = text.slice(i, i + chunkSize);
        controller.enqueue(encoder.encode(chunk));
        await new Promise((r) => setTimeout(r, 12));
      }

      controller.close();
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages ?? [];

    if (!messages.length) {
      return Response.json({ error: "No messages provided" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== "user" || !lastMessage.content.trim()) {
      return Response.json({ error: "Invalid message" }, { status: 400 });
    }

    const verified = await getVerifiedResponse(lastMessage.content);

    let responseText = verified.text;
    let source: ResponseSource | "ai" = verified.source;

    const webContext =
      verified.source === "verified" || verified.source === "web"
        ? verified.text
        : "";

    const aiResponse = await getOpenAIResponse(messages, webContext);
    if (aiResponse) {
      responseText = aiResponse;
      source = "ai";
    }

    const stream = createStream(responseText, source);

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "X-Chat-Source": source,
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json({ error: "Failed to process chat" }, { status: 500 });
  }
}
