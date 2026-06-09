import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageShell } from '@/components/page-shell';
import './globals.css';

export const metadata: Metadata = {
  title: 'HiddoAI',
  description: 'A modern Somali cultural intelligence platform for archive, translation, restoration, and AI assistance.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
