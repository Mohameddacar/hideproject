"use client";

import { Copy, Mic, Share2, Trash2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const DEFAULT_SOMALI =
  "Guri aan buulo ahayn, biyo laguma dhaansado.";

const LITERAL_TRANSLATION =
  "In a house that isn't a hut, water isn't fetched.";

const CULTURAL_CONTEXT =
  "This proverb speaks to self-sufficiency and preparation. In a well-built home with proper infrastructure, one doesn't need to go far for basic necessities. It emphasizes the importance of building strong foundations — both literally and metaphorically — in life and community.";

export function HeritageTranslator() {
  const [text, setText] = useState(DEFAULT_SOMALI);

  return (
    <section id="translator" className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Heritage Translator
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Translate Somali idioms, dialects, and poetic structures with
            cultural context. Our AI understands nuance beyond literal meaning.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#121212]">
          <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                Somali
              </span>
              <svg
                className="size-4 text-zinc-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
              <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                English
              </span>
            </div>
            <span className="text-xs text-zinc-500">
              Precision Level:{" "}
              <span className="text-amber-500">Poetic</span>
            </span>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="flex flex-col border-b border-white/5 md:border-r md:border-b-0">
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[220px] resize-none rounded-none border-0 bg-transparent p-6 text-white focus-visible:ring-0"
                placeholder="Enter Somali text..."
              />
              <div className="flex items-center justify-between border-t border-white/5 px-6 py-3">
                <span className="text-xs text-zinc-500">
                  {text.length} / 2000 characters
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="text-zinc-500 hover:text-white"
                  >
                    <Mic className="size-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="text-zinc-500 hover:text-white"
                    onClick={() => setText("")}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-zinc-900/50">
              <div className="flex-1 p-6">
                <p className="mb-2 text-[10px] font-semibold tracking-wider text-amber-500 uppercase">
                  Literal Translation
                </p>
                <p className="mb-6 text-sm italic text-zinc-300">
                  &ldquo;{LITERAL_TRANSLATION}&rdquo;
                </p>

                <p className="mb-2 text-[10px] font-semibold tracking-wider text-amber-500 uppercase">
                  Cultural Context
                </p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {CULTURAL_CONTEXT}
                </p>
              </div>

              <div className="flex justify-end gap-2 border-t border-white/5 px-6 py-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zinc-400 hover:text-white"
                >
                  <Copy className="size-4" />
                  Copy
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zinc-400 hover:text-white"
                >
                  <Share2 className="size-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
