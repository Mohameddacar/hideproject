import { Send, Sparkles, Languages, History } from 'lucide-react';

import { FeaturePage } from '@/components/feature-page';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const prompts = [
  ['History', 'Who was Sayyid Mohamed Abdullah Hassan?'],
  ['Literature', 'Explain Somali folktales and oral traditions.'],
  ['Archaeology', 'What is the significance of the Laas Geel rock art?'],
];

export default function AssistantPage() {
  return (
    <FeaturePage
      eyebrow="AI Assistant"
      title="Hiddo AI: Your heritage guide"
      description="A polished assistant experience for cultural questions, source-aware responses, and multilingual guidance."
      summary="A responsive, source-friendly assistant for heritage discovery and conversation."
      primaryAction="Start Chatting"
      secondaryAction="Browse Topics"
    >
      <div className="grid gap-6 xl:grid-cols-[0.28fr_1fr]">
        <Card className="border-white/10 bg-white/5 p-6">
          <CardHeader className="p-0">
            <CardTitle className="text-xl">Chat History</CardTitle>
            <CardDescription>Recent sessions and pinned topics.</CardDescription>
          </CardHeader>
          <div className="mt-6 space-y-3 text-sm text-slate-400">
            <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">Sayyid Mohamed histor...</div>
            <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">Nomadic poetry styles</div>
          </div>
          <div className="mt-6 space-y-2">
            <Badge className="text-brand-100">Heritage topics</Badge>
            <div className="flex flex-wrap gap-2">
              <Badge className="text-slate-300">Poetry</Badge>
              <Badge className="text-slate-300">Architecture</Badge>
              <Badge className="text-slate-300">Cuisine</Badge>
            </div>
          </div>
        </Card>

        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-glow sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-2xl font-semibold text-white">Ask about Somali history and culture</h3>
              <p className="mt-1 text-sm text-slate-400">Balanced, conversational, and designed for real research workflows.</p>
            </div>
            <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
              <Badge className="bg-brand-100/20 text-brand-100">Af-Soomaali</Badge>
              <Badge className="border-0 bg-transparent text-slate-400">English</Badge>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {prompts.map(([label, prompt]) => (
              <Card key={prompt} className="border-white/10 bg-white/5 p-4">
                <CardHeader className="p-0">
                  <Badge className="w-fit text-sand-100">{label}</Badge>
                  <CardTitle className="text-base">{prompt}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="border-white/10 bg-white/5 p-5">
            <CardDescription className="flex items-start gap-3 text-base text-slate-200">
              <Sparkles className="mt-1 h-4 w-4 text-brand-100" />
              As-salamu alaykum. I am your Hiddo AI cultural assistant. I can guide you through Somali heritage topics, translate phrases, or explain archive items with source-aware context.
            </CardDescription>
          </Card>

          <div className="flex flex-col gap-3 rounded-[1.6rem] border border-white/10 bg-white/5 p-4 md:flex-row md:items-end">
            <div className="flex-1">
              <Input placeholder="Ask Hiddo AI about Somali heritage..." className="bg-slate-950/40" />
            </div>
            <Button className="gap-2">
              Send
              <Send className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <Card className="border-white/10 bg-white/5 p-4">
              <CardTitle className="flex items-center gap-2 text-base"><History className="h-4 w-4 text-sand-100" /> Historical grounding</CardTitle>
              <CardDescription>Keep responses connected to archive citations and clear dates.</CardDescription>
            </Card>
            <Card className="border-white/10 bg-white/5 p-4">
              <CardTitle className="flex items-center gap-2 text-base"><Languages className="h-4 w-4 text-sand-100" /> Multilingual support</CardTitle>
              <CardDescription>Support Somali, English, and contextual transliteration.</CardDescription>
            </Card>
          </div>
        </div>
      </div>
    </FeaturePage>
  );
}
