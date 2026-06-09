import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { stories } from '@/lib/content';

export function StoryGrid() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {stories.map((story, index) => (
            <Card key={story.title} className="group overflow-hidden border-white/10 bg-slate-900/60 transition-transform duration-300 hover:-translate-y-1">
              <div
                className="h-44 border-b border-white/8 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"
                style={{
                  backgroundImage:
                    index % 3 === 0
                      ? 'radial-gradient(circle at 30% 20%, rgba(188,110,34,0.42), transparent 28%), linear-gradient(135deg, rgba(15,23,42,0.92), rgba(17,24,39,1))'
                      : index % 3 === 1
                      ? 'radial-gradient(circle at 20% 10%, rgba(79,109,255,0.42), transparent 30%), linear-gradient(135deg, rgba(20,20,24,0.96), rgba(9,12,21,1))'
                      : 'radial-gradient(circle at 70% 20%, rgba(240,209,166,0.34), transparent 24%), linear-gradient(135deg, rgba(17,24,39,0.96), rgba(3,7,18,1))',
                }}
              />
              <CardHeader className="space-y-4">
                <Badge className="w-fit border-white/10 bg-white/5 text-sand-100">{story.category}</Badge>
                <CardTitle className="text-2xl leading-8">{story.title}</CardTitle>
                <CardDescription>{story.summary}</CardDescription>
              </CardHeader>
              <CardFooter className="justify-between text-sm text-slate-400">
                <span>By {story.author}</span>
                <Link href="/archive" className="inline-flex items-center gap-2 text-brand-100 transition group-hover:translate-x-0.5">
                  View
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
