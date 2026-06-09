import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Hero } from '@/components/hero';
import { MetricRow } from '@/components/metric-row';
import { SectionHeading } from '@/components/section-heading';
import { StoryGrid } from '@/components/story-grid';
import { features } from '@/lib/content';

export default function HomePage() {
  return (
    <div>
      <Hero
        kicker="Cultural Futurism Initiated"
        title="Preserving Somali Heritage Through"
        titleAccent="Artificial Intelligence"
        description="HiddoAI blends archival discovery, multilingual assistance, and restoration tools into one polished platform for heritage teams, creators, and diaspora communities."
      />

      <section className="px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur-md lg:flex-row lg:items-center lg:justify-between lg:p-6">
          <div className="flex flex-1 items-center gap-3 rounded-full border border-white/10 bg-slate-900/70 px-4 py-3">
            <Search className="h-4 w-4 text-slate-500" />
            <Input
              aria-label="Search heritage"
              placeholder="Search the legend of Araweelo, oral histories, and archives..."
              className="border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" className="gap-2">
              Advanced Filters
            </Button>
            <Button className="gap-2">
              Upload Your Story
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {['All Records', 'Poetry', 'History', 'Folktales', 'Music', 'Textiles'].map((item, index) => (
            <Link
              key={item}
              href={index === 0 ? '/' : '/archive'}
              className={[
                'rounded-full border px-4 py-2 text-sm transition',
                index === 0
                  ? 'border-brand-100/30 bg-brand-100/12 text-brand-100'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:bg-white/8 hover:text-white',
              ].join(' ')}
            >
              {item}
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-sand-100/20 bg-white/5 text-sand-100 shadow-glow">✦</div>
        </div>
      </section>

      <section className="px-4 pb-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Collections"
            title="A modern vault for ancestral knowledge"
            description="Designing an archive should feel precise, generous, and trustworthy. HiddoAI makes discovery feel like a premium product while keeping the heritage center stage."
          />
        </div>
      </section>

      <StoryGrid />
      <MetricRow />

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-glow">
          <SectionHeading
            align="center"
            eyebrow="Community"
            title="Join the Diaspora Digital Community"
            description="Stay updated on archive drops, restoration launches, and cultural tools built with care."
          />
          <div className="mx-auto mt-8 flex max-w-xl gap-3">
            <Input type="email" placeholder="Enter your email" className="bg-slate-900/65" />
            <Button variant="sand" className="px-6">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
