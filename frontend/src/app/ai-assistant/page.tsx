import { Bot, MessageSquare, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiteLayout } from "@/components/shared/site-layout";

const SAMPLE_MESSAGES = [
  {
    role: "assistant" as const,
    content:
      "Salaam! I'm the HiddoAI cultural assistant. Ask me about Somali history, poetry, proverbs, or traditions — I'm here to help preserve and share our heritage.",
  },
  {
    role: "user" as const,
    content: "Tell me about the legend of Araweelo.",
  },
  {
    role: "assistant" as const,
    content:
      "Araweelo (also spelled Ebla Awarkaba) is one of Somalia's most famous legendary queens. According to oral tradition, she was a powerful ruler who established laws promoting gender equality and justice. Her story has been passed down through generations of Somali storytellers and remains a symbol of female strength in Somali culture.",
  },
];

export default function AIAssistantPage() {
  return (
    <SiteLayout showSearch={false}>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full border border-white/10 bg-zinc-900">
            <Bot className="size-7 text-[#c7d2fe]" />
          </div>
          <h1 className="text-3xl font-bold text-white">AI Assistant</h1>
          <p className="mt-3 text-sm text-zinc-400">
            Chat with an AI trained on Somali culture, language, and history.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#121212]">
          <div className="max-h-[480px] space-y-4 overflow-y-auto p-6">
            {SAMPLE_MESSAGES.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-[#c7d2fe] text-zinc-900"
                      : "bg-zinc-800 text-zinc-300"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 border-t border-white/5 p-4">
            <MessageSquare className="size-5 shrink-0 text-zinc-600" />
            <Input
              placeholder="Ask about Somali heritage..."
              className="border-white/10 bg-zinc-900 text-white placeholder:text-zinc-500"
            />
            <Button
              size="icon"
              className="shrink-0 bg-[#c7d2fe] text-zinc-900 hover:bg-[#a5b4fc]"
            >
              <Send className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
