import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 py-24 text-center">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/50 px-4 py-1.5 text-xs tracking-widest text-amber-500 uppercase">
        <span className="size-1.5 rounded-full bg-amber-500" />
        Digital Futurism Initiative
      </div>

      <h1 className="max-w-4xl text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Preserving Somali Heritage Through Artificial Intelligence
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
        Archiving the past, empowering the future. Explore the digital bridge
        between Somali culture and advanced technology.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button
          nativeButton={false}
          render={<Link href="/archive" />}
          className="h-11 rounded-full bg-[#c7d2fe] px-6 text-zinc-900 hover:bg-[#a5b4fc]"
        >
          Explore Archive
          <ArrowRight className="size-4" />
        </Button>
        <Button
          nativeButton={false}
          render={<Link href="/ai-assistant" />}
          variant="outline"
          className="h-11 rounded-full border-amber-600/50 bg-transparent px-6 text-white hover:bg-amber-600/10"
        >
          Talk to AI Assistant
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="size-5 animate-bounce text-zinc-600" />
      </div>
    </section>
  );
}
