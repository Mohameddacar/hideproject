import { ArrowDownToLine, CloudUpload, Contrast, Droplets, ScanFace, Sparkles } from 'lucide-react';

import { FeaturePage } from '@/components/feature-page';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const restorationTools = [
  ['Denoising', 'Remove film grain and dust.'],
  ['Colorize', 'Breathe life into B&W scenes.'],
  ['4K Upscaling', 'Print-ready resolution.'],
  ['Face Recovery', 'Restore delicate features.'],
];

export default function PhotoRestorationPage() {
  return (
    <FeaturePage
      eyebrow="Photo Restoration"
      title="AI photo restoration with careful visual control"
      description="Designed for family archives and cultural collections that need accurate, tasteful enhancement rather than aggressive editing."
      summary="Compare original and restored imagery with a polished, review-friendly UI."
      primaryAction="Upload Archive Photo"
      secondaryAction="Download Sample"
    >
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <Card className="overflow-hidden border-white/10 bg-slate-900/70">
          <div className="grid min-h-[380px] grid-cols-2">
            <div className="relative border-r border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.25),rgba(255,255,255,0.05)),linear-gradient(135deg,rgba(10,12,20,0.96),rgba(24,28,42,1))]">
              <Badge className="absolute bottom-4 left-4 text-slate-300">Original</Badge>
            </div>
            <div className="relative bg-[radial-gradient(circle_at_25%_20%,rgba(188,110,34,0.34),transparent_28%),linear-gradient(135deg,rgba(8,12,20,0.98),rgba(31,21,12,1))]">
              <Badge className="absolute bottom-4 left-4 text-brand-100">Restored</Badge>
            </div>
          </div>
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl">Visual comparison tool</CardTitle>
              <CardDescription>Move between original and restored states with a controlled workflow.</CardDescription>
            </div>
            <Button variant="secondary" className="gap-2"><ArrowDownToLine className="h-4 w-4" /> Download restored</Button>
          </CardHeader>
        </Card>

        <div className="space-y-4">
          <Card className="border-dashed border-white/15 bg-white/5 p-8 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-slate-950 shadow-glow">
              <CloudUpload className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">Upload Archive Photo</h3>
            <p className="mt-2 text-sm text-slate-400">Drag and drop or click to browse. Supports JPG, PNG, and TIFF.</p>
            <Button className="mt-6">Browse files</Button>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2">
            {restorationTools.map(([title, description], index) => (
              <Card key={title} className="border-white/10 bg-white/5 p-4">
                <CardTitle className="flex items-center gap-2 text-base">
                  {[Droplets, Contrast, Sparkles, ScanFace][index]({ className: 'h-4 w-4 text-sand-100' })}
                  {title}
                </CardTitle>
                <CardDescription className="mt-1">{description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </FeaturePage>
  );
}
