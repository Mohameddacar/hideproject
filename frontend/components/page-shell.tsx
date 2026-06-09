import { ReactNode } from 'react';

import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark bg-[length:24px_24px] opacity-[0.14]" />
      <div className="pointer-events-none absolute inset-0 bg-brand-radial" />
      <SiteHeader />
      <main className="relative">{children}</main>
      <SiteFooter />
    </div>
  );
}
