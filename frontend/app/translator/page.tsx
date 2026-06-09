import { ArrowLeftRight, Copy, Mic, Sparkles } from 'lucide-react';

import { FeaturePage } from '@/components/feature-page';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function TranslatorPage() {
  return (
    <FeaturePage
      eyebrow="Translator"
      title="Heritage translation with cultural nuance"
      description="A translation experience built for clarity, context, and respectful handling of Somali expressions and literary tone."
      summary="Translate with literal meaning, contextual notes, and an elegant review workflow."
      primaryAction="Launch Tools"
      secondaryAction="View Glossary"
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="overflow-hidden border-white/10 bg-slate-900/70">
          <CardHeader className="border-b border-white/8">
            <div className="flex items-center justify-between gap-3">
              <Badge className="text-brand-100">Somali</Badge>
              <Button variant="ghost" className="gap-2 text-slate-300">
                <ArrowLeftRight className="h-4 w-4" />
                Swap
              </Button>
              <Badge className="text-brand-100">English</Badge>
            </div>
          </CardHeader>
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="border-b border-white/8 p-6 lg:border-b-0 lg:border-r lg:border-white/8">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-500">Source</p>
              <textarea
                className="min-h-[220px] w-full resize-none rounded-[1.25rem] border border-white/8 bg-white/5 p-4 text-sm text-white outline-none placeholder:text-slate-500"
                defaultValue="Guri aan buulo ahayn, biyu laguma dhaansado."
              />
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>38 / 2000 characters</span>
                <Button variant="ghost" className="gap-2 px-0 text-slate-300">
                  <Mic className="h-4 w-4" />
                  Dictate
                </Button>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-500">Translation</p>
              <div className="rounded-[1.25rem] border border-white/8 bg-white/5 p-4 text-sm leading-7 text-slate-200">
                <div className="text-xs uppercase tracking-[0.2em] text-brand-100">Literal translation</div>
                <p className="mt-2">“In a house that isn’t a hut, water isn’t fetched.”</p>
                <div className="mt-5 text-xs uppercase tracking-[0.2em] text-sand-100">Cultural context</div>
                <p className="mt-2 text-slate-300">
                  The proverb emphasizes self-sufficiency, preparation, and the importance of the proper tools before beginning a task.
                </p>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="secondary" className="gap-2"><Copy className="h-4 w-4" /> Copy</Button>
                <Button variant="ghost" className="gap-2 text-slate-300"><Sparkles className="h-4 w-4" /> Share</Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          {[
            ['Literal mode', 'Straightforward meaning for archival reference.'],
            ['Poetic mode', 'Preserves rhythm and literary intent.'],
            ['Context notes', 'Adds lineage, proverb usage, and dialect hints.'],
          ].map(([title, description]) => (
            <Card key={title} className="border-white/10 bg-white/5 p-5">
              <CardTitle className="text-base">{title}</CardTitle>
              <CardDescription className="mt-1">{description}</CardDescription>
            </Card>
          ))}
          <Card className="border-white/10 bg-white/5 p-5">
            <CardTitle className="text-base">Quick add glossary terms</CardTitle>
            <div className="mt-4 flex flex-wrap gap-2">
              {['xigmad', 'maahmaah', 'dhaqan', 'hal-abuur'].map((term) => (
                <Badge key={term} className="text-slate-300">{term}</Badge>
              ))}
            </div>
          </Card>
          <Card className="border-white/10 bg-white/5 p-5">
            <CardTitle className="text-base">Request translation review</CardTitle>
            <CardDescription className="mt-1">Route sensitive content to a curator before publishing.</CardDescription>
            <Button className="mt-4">Add to review queue</Button>
          </Card>
        </div>
      </div>
    </FeaturePage>
  );
}
