import Link from 'next/link';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-slate-950/80">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr] lg:px-8">
        <div className="space-y-4">
          <div className="text-2xl font-semibold text-white">HiddoAI</div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            Bridging Somali heritage with cultural futurism. We design for archives, translators, and restoration teams that need clarity and trust.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><Link href="/archive">Archive</Link></li>
            <li><Link href="/assistant">AI Assistant</Link></li>
            <li><Link href="/translator">Translator</Link></li>
            <li><Link href="/photo-restoration">Photo Restoration</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">Legal</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Newsletter</h3>
          <p className="text-sm leading-6 text-slate-400">Stay updated on new archive discoveries and product releases.</p>
          <div className="flex gap-2">
            <Input type="email" placeholder="Email address" className="bg-slate-900/60" />
            <Button variant="sand" className="shrink-0">Join</Button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 py-6 text-center text-xs uppercase tracking-[0.2em] text-slate-500">
        © 2026 HiddoAI. Preserving Somali heritage through modern product design.
      </div>
    </footer>
  );
}
