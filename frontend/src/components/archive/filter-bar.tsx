"use client";

import { SlidersHorizontal, Upload } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ARCHIVE_CATEGORIES, type ArchiveCategory } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  onCategoryChange?: (category: ArchiveCategory) => void;
}

export function FilterBar({ onCategoryChange }: FilterBarProps) {
  const [activeCategory, setActiveCategory] =
    useState<ArchiveCategory>("All Records");

  const handleCategoryClick = (category: ArchiveCategory) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <svg
            className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-zinc-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <Input
            placeholder="Search the legend of Araweelo, oral histories..."
            className="h-12 border-white/10 bg-zinc-900/80 pl-11 text-white placeholder:text-zinc-500"
          />
        </div>
        <Button
          variant="outline"
          className="h-12 border-white/10 bg-zinc-900/80 text-zinc-300 hover:bg-zinc-800"
        >
          <SlidersHorizontal className="size-4" />
          Advanced Filters
        </Button>
        <Button className="h-12 bg-[#c7d2fe] text-zinc-900 hover:bg-[#a5b4fc]">
          <Upload className="size-4" />
          Upload Your Story
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {ARCHIVE_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryClick(category)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              activeCategory === category
                ? "border-[#c7d2fe]/50 bg-[#c7d2fe]/10 text-[#c7d2fe]"
                : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
