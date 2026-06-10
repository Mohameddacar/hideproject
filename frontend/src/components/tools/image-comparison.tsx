"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

export function ImageComparison() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-col-resize overflow-hidden rounded-xl select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&sat=-100"
          alt="Original photo"
          fill
          className="object-cover grayscale"
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            alt="Restored photo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable={false}
          />
        </div>

        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-white/80"
          style={{ left: `${position}%` }}
        >
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <div className="flex size-8 cursor-col-resize items-center justify-center rounded-full border-2 border-white bg-zinc-900 shadow-lg">
              <div className="flex gap-0.5">
                <div className="h-3 w-0.5 rounded-full bg-white/70" />
                <div className="h-3 w-0.5 rounded-full bg-white/70" />
              </div>
            </div>
          </div>
        </div>

        <span className="absolute top-3 left-3 rounded bg-black/60 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-zinc-300 uppercase">
          Original
        </span>
        <span className="absolute top-3 right-3 rounded bg-black/60 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-zinc-300 uppercase">
          Restored
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-500">Visual Comparison Tool</span>
        <Button
          variant="outline"
          size="sm"
          className="border-white/10 text-zinc-300 hover:bg-zinc-800"
        >
          <Download className="size-4" />
          Download Restored
        </Button>
      </div>
    </div>
  );
}
