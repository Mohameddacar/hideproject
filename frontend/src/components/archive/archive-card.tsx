"use client";

import { ArrowRight, BookOpen, Music } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  CATEGORY_COLORS,
  type ArchiveItem,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ArchiveCardProps {
  item: ArchiveItem;
}

export function ArchiveCard({ item }: ArchiveCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-white/5 bg-[#121212] transition-all hover:border-white/10 hover:shadow-lg hover:shadow-black/20">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-800 to-zinc-900 p-6">
            {item.icon === "book" && (
              <BookOpen className="size-10 text-zinc-600" />
            )}
            {item.icon === "music" && (
              <Music className="size-10 text-zinc-600" />
            )}
            {item.quote && (
              <p className="text-center text-xs italic text-zinc-500">
                {item.quote}
              </p>
            )}
          </div>
        )}
        <Badge
          className={cn(
            "absolute top-3 left-3 border-0 text-[10px] font-semibold tracking-wider uppercase",
            CATEGORY_COLORS[item.category]
          )}
        >
          {item.category}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-white">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
          {item.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-zinc-500">By {item.author}</span>
          <ArrowRight className="size-4 text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-zinc-400" />
        </div>
      </div>
    </article>
  );
}
