import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/lib/utils';

type FeaturePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  primaryAction: string;
  secondaryAction: string;
  children?: ReactNode;
};

export function FeaturePage({
  eyebrow,
  title,
  description,
  summary,
  primaryAction,
  secondaryAction,
  children,
}: FeaturePageProps) {
  return (
    <div className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-14">
        <div className="text-center">
          <Badge className="mx-auto mb-6 gap-2 text-brand-100">
            <Sparkles className="h-3.5 w-3.5" />
            {eyebrow}
          </Badge>
          <SectionHeading title={title} description={description} align="center" />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Card className="overflow-hidden border-white/10 bg-slate-900/70">
            <div className="aspect-[4/3] bg-[radial-gradient(circle_at_30%_20%,rgba(79,109,255,0.25),transparent_22%),linear-gradient(135deg,rgba(10,13,23,0.98),rgba(20,24,39,0.98))]" />
            <CardHeader className="space-y-4">
              <Badge className="w-fit border-white/10 bg-white/5 text-sand-100">Product Preview</Badge>
              <CardTitle className="text-3xl">{summary}</CardTitle>
              <CardDescription>
                Built for teams that need a trustworthy, polished experience with clear review states and modern interaction patterns.
              </CardDescription>
            </CardHeader>
            <div className="flex flex-wrap gap-3 px-6 pb-6">
              <Button className="gap-2">
                {primaryAction}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline">{secondaryAction}</Button>
            </div>
          </Card>

          <div className="space-y-4">
            <Card className="border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-100 text-slate-950">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Trust-first workflow</div>
                  <div className="text-sm text-slate-400">Built for curation, editing, and review.</div>
                </div>
              </div>
            </Card>
            <Card className="border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-sand-100 text-slate-950">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Reusable components</div>
                  <div className="text-sm text-slate-400">Every page shares the same design system.</div>
                </div>
              </div>
            </Card>
            <Card className="border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Modern visual language</div>
                  <div className="text-sm text-slate-400">Soft borders, luminous accents, and a calm dark canvas.</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {children ? <div>{children}</div> : null}

        <div className="flex justify-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-brand-100 transition hover:text-white">
            Back to landing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
