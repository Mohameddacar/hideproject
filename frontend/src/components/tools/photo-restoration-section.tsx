import { ImageComparison } from "@/components/tools/image-comparison";
import { RestorationFeatureGrid } from "@/components/tools/restoration-feature-grid";
import { UploadCard } from "@/components/tools/upload-card";

export function PhotoRestorationSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            AI Photo Restoration
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Restore archival Somali photography with neural networks trained on
            heritage imagery. Denoise, colorize, upscale, and recover faces from
            damaged historical photographs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <ImageComparison />
          <div className="space-y-4">
            <UploadCard />
            <RestorationFeatureGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
