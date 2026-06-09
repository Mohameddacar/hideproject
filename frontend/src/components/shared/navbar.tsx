"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavbarProps {
  showSearch?: boolean;
}

export function Navbar({ showSearch = true }: NavbarProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 text-lg font-bold tracking-tight text-white"
        >
          HiddoAI
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href === "/translator" &&
                pathname === "/photo-restoration");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm text-zinc-400 transition-colors hover:text-white",
                  isActive && "text-white underline decoration-white/60 underline-offset-8"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {showSearch && (
            <div className="relative hidden sm:block">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-zinc-500" />
              <Input
                placeholder="Search heritage..."
                className="h-9 w-44 border-white/10 bg-zinc-900/80 pl-9 text-sm text-white placeholder:text-zinc-500 lg:w-52"
              />
            </div>
          )}
          <Button
            size="sm"
            className="rounded-full bg-[#c7d2fe] px-4 text-zinc-900 hover:bg-[#a5b4fc]"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
