"use client";

import {
  Bot,
  Copy,
  Check,
  RotateCcw,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SUGGESTED_PROMPTS } from "@/lib/heritage-knowledge";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  source?: "ai" | "heritage" | "books" | "verified" | "web" | "greeting";
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Assalaamu calaykum! So dhawoow — waxaan ahay **HiddoAI**. Maxaa ku qabta?",
};

function formatTime(date: Date) {
  return date.toLocaleTimeString("so-SO", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function renderMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function TypingIndicator() {
  return (
    <div className="flex items-start gap-3">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#c7d2fe]/20 to-amber-500/20 ring-1 ring-[#c7d2fe]/30">
        <Bot className="size-4 text-[#c7d2fe]" />
      </div>
      <div className="rounded-2xl rounded-tl-sm bg-zinc-800/80 px-4 py-3">
        <span className="mr-2 text-xs text-zinc-500">HiddoAI wuxuu qorayaa</span>
        <span className="inline-flex gap-1 align-middle">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="size-1.5 animate-bounce rounded-full bg-[#c7d2fe]/60"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}

export function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [chatSource, setChatSource] = useState<
    "ai" | "heritage" | "books" | "verified" | "web" | "greeting" | null
  >(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: trimmed,
      };

      const history = [...messages.filter((m) => m.id !== "welcome"), userMessage];
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: history.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!response.ok) throw new Error("Chat request failed");

        const source = (response.headers.get("X-Chat-Source") as Message["source"]) ?? "heritage";
        setChatSource(source);

        const reader = response.body?.getReader();
        if (!reader) throw new Error("No response stream");

        const decoder = new TextDecoder();
        let fullText = "";
        let isFirstChunk = true;
        const assistantId = crypto.randomUUID();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          let chunk = decoder.decode(value, { stream: true });

          if (isFirstChunk) {
            const newlineIndex = chunk.indexOf("\n");
            if (newlineIndex !== -1) {
              chunk = chunk.slice(newlineIndex + 1);
            }
            isFirstChunk = false;
          }

          fullText += chunk;

          setMessages((prev) => {
            const existing = prev.find((m) => m.id === assistantId);
            if (existing) {
              return prev.map((m) =>
                m.id === assistantId
                  ? { ...m, content: fullText, source }
                  : m
              );
            }
            return [
              ...prev,
              {
                id: assistantId,
                role: "assistant",
                content: fullText,
                source,
              },
            ];
          });
        }
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
              "Waan ka xumahay — waxbaa qaldamay. Fadlan isku day mar kale.",
          },
        ]);
      } finally {
        setIsLoading(false);
        textareaRef.current?.focus();
      }
    },
    [isLoading, messages]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleCopy = async (id: string, content: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClear = () => {
    setMessages([WELCOME_MESSAGE]);
    setChatSource(null);
    setInput("");
  };

  const showSuggestions = messages.length <= 1 && !isLoading;

  return (
    <div className="flex flex-col">
      <div className="mb-8 text-center">
        <div className="relative mx-auto mb-4 flex size-16 items-center justify-center">
          <div className="absolute inset-0 animate-pulse rounded-full bg-[#c7d2fe]/10" />
          <div className="relative flex size-14 items-center justify-center rounded-full border border-[#c7d2fe]/20 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-lg shadow-[#c7d2fe]/10">
            <Bot className="size-7 text-[#c7d2fe]" />
          </div>
          <Sparkles className="absolute -top-1 -right-1 size-4 text-amber-500" />
        </div>
        <h1 className="text-3xl font-bold text-white">Kaaliyaha AI</h1>
        <p className="mt-3 text-sm text-zinc-400">
          La sheekee HiddoAI — weydii wax ku saabsan dhaqanka, luqadda, iyo
          taariikhda Soomaalida
        </p>
        {chatSource && chatSource !== "greeting" && (
          <p className="mt-2 text-xs text-zinc-600">
            Ilaha xogta:{" "}
            <span className="text-[#c7d2fe]/80">
              {chatSource === "ai" && "OpenAI"}
              {chatSource === "books" && "Buugaagta (Resources) 📖"}
              {chatSource === "heritage" && "Kaydka Dhaxalka (Heritage)"}
              {chatSource === "verified" && "Buug + Heritage / Wikipedia ✓"}
              {chatSource === "web" && "Wikipedia (Internet)"}
            </span>
          </p>
        )}
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#121212] shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-zinc-400">Khadka sare</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="text-zinc-500 hover:text-white"
          >
            <RotateCcw className="size-3.5" />
            Sheeko cusub
          </Button>
        </div>

        <div
          ref={scrollRef}
          className="max-h-[min(520px,60vh)] space-y-5 overflow-y-auto p-5 scroll-smooth"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "group flex gap-3",
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full",
                  message.role === "user"
                    ? "bg-[#c7d2fe]/20 ring-1 ring-[#c7d2fe]/30"
                    : "bg-gradient-to-br from-[#c7d2fe]/20 to-amber-500/10 ring-1 ring-[#c7d2fe]/20"
                )}
              >
                {message.role === "user" ? (
                  <User className="size-4 text-[#c7d2fe]" />
                ) : (
                  <Bot className="size-4 text-[#c7d2fe]" />
                )}
              </div>

              <div
                className={cn(
                  "flex max-w-[80%] flex-col gap-1",
                  message.role === "user" ? "items-end" : "items-start"
                )}
              >
                <div
                  className={cn(
                    "relative rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    message.role === "user"
                      ? "rounded-tr-sm bg-[#c7d2fe] text-zinc-900"
                      : "rounded-tl-sm bg-zinc-800/90 text-zinc-300"
                  )}
                >
                  <div className="whitespace-pre-wrap">
                    {message.role === "assistant"
                      ? renderMarkdown(message.content)
                      : message.content}
                  </div>

                  {message.role === "assistant" && message.id !== "welcome" && (
                    <button
                      onClick={() => handleCopy(message.id, message.content)}
                      className="absolute -right-2 -bottom-2 flex size-7 items-center justify-center rounded-full border border-white/10 bg-zinc-900 opacity-0 transition-opacity group-hover:opacity-100"
                      title="Nuqul ka qaad"
                    >
                      {copiedId === message.id ? (
                        <Check className="size-3 text-emerald-400" />
                      ) : (
                        <Copy className="size-3 text-zinc-400" />
                      )}
                    </button>
                  )}
                </div>
                {message.id !== "welcome" && (
                  <span className="px-1 text-[10px] text-zinc-600">
                    {formatTime(new Date())}
                  </span>
                )}
              </div>
            </div>
          ))}

          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <TypingIndicator />
          )}
        </div>

        {showSuggestions && (
          <div className="flex flex-wrap gap-2 border-t border-white/5 px-5 py-4">
            {SUGGESTED_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                className="rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-400 transition-all hover:border-[#c7d2fe]/30 hover:bg-[#c7d2fe]/10 hover:text-[#c7d2fe]"
              >
                {prompt}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex items-end gap-3 border-t border-white/5 p-4"
        >
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Weydii wax ku saabsan dhaxalka Soomaalida..."
            rows={1}
            disabled={isLoading}
            className="max-h-32 min-h-[44px] resize-none border-white/10 bg-zinc-900 text-white placeholder:text-zinc-500 focus-visible:ring-[#c7d2fe]/30"
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || isLoading}
            className="size-11 shrink-0 rounded-xl bg-[#c7d2fe] text-zinc-900 hover:bg-[#a5b4fc] disabled:opacity-40"
            title="Dir"
          >
            <Send className="size-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
