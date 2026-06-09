import { ArrowRight, Sparkles } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type HeroProps = {
  kicker: string;
  title: string;
  titleAccent?: string;
  description: string;
};

export function Hero({ kicker, title, titleAccent, description }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Badge className="mb-6 gap-2 text-brand-100">
            <Sparkles className="h-3.5 w-3.5" />
            {kicker}
          </Badge>
          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            {title}
            {titleAccent ? <span className="mt-2 block text-brand-100">{titleAccent}</span> : null}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="gap-2">
              Explore Archive
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Talk to AI Assistant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
