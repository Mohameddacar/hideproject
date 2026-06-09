import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/content';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/6 text-sm font-black text-brand-100 shadow-glow">HA</span>
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">HiddoAI</div>
            <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Cultural Intelligence Platform</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/4 px-2 py-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn('rounded-full px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-white/8 hover:text-white')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/8 md:inline-flex" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <Button variant="default" size="sm" className="gap-2">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
