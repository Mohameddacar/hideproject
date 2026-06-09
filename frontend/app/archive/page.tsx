import { ArrowRight, BookOpen, Filter, Grid2x2, Search } from 'lucide-react';

import { FeaturePage } from '@/components/feature-page';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const archiveFilters = ['Manuscripts', 'Oral History', 'Poetry', 'Photography', 'Textiles'];

export default function ArchivePage() {
  return (
    <FeaturePage
      eyebrow="Archive"
      title="The Somali Cultural Archive"
      description="Discover a refined archive experience with search, filters, and editorial curation for oral histories, manuscripts, and heritage media."
      summary="Discover century-spanning collections through a carefully designed interface."
      primaryAction="Explore Records"
      secondaryAction="Upload a Story"
    >
      <div className="grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
        <Card className="border-white/10 bg-white/5 p-6">
          <CardHeader className="p-0">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Filter className="h-4 w-4 text-sand-100" />
              Filters
            </CardTitle>
            <CardDescription>Curate by medium, era, or contribution status.</CardDescription>
          </CardHeader>
          <div className="mt-5 flex flex-wrap gap-2">
            {archiveFilters.map((filter, index) => (
              <Badge
                key={filter}
                className={index === 0 ? 'border-brand-100/30 bg-brand-100/12 text-brand-100' : 'text-slate-300'}
              >
                {filter}
              </Badge>
            ))}
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-400">
            <div className="flex items-center gap-3"><Search className="h-4 w-4 text-brand-100" /> Semantic search across transcripts</div>
            <div className="flex items-center gap-3"><Grid2x2 className="h-4 w-4 text-brand-100" /> Grid and list views</div>
            <div className="flex items-center gap-3"><BookOpen className="h-4 w-4 text-brand-100" /> Editorial annotations and citations</div>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {['Laas Geel Oral History', 'Araweelo Manuscript', 'Zeila Trade Routes', 'Golis Folklore Recordings'].map((title, index) => (
            <Card key={title} className="overflow-hidden border-white/10 bg-slate-900/70">
              <div className="h-44 bg-[radial-gradient(circle_at_30%_20%,rgba(188,110,34,0.32),transparent_26%),linear-gradient(135deg,rgba(8,11,20,0.98),rgba(20,24,40,1))]" />
              <CardHeader>
                <Badge className="w-fit text-sand-100">{index % 2 === 0 ? 'History' : 'Folktales'}</Badge>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                  A premium archive card with metadata, provenance, and a clean call to action for further research.
                </CardDescription>
                <Button variant="ghost" className="mt-2 w-fit gap-2 px-0 text-brand-100">
                  Open record
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </FeaturePage>
  );
}
