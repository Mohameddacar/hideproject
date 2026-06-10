import { ArchiveGrid } from "@/components/archive/archive-grid";
import { SiteLayout } from "@/components/shared/site-layout";

export default function ArchivePage() {
  return (
    <SiteLayout footerVariant="archive" showSearch={false}>
      <div className="pattern-bg">
        <section className="px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            The Somali{" "}
            <span className="text-[#c7d2fe] italic">Cultural Archive</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Preserving the heartbeat of a nation through AI-powered archiving.
            Discover centuries of wisdom, poetry, and art reimagined for the
            digital age.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <ArchiveGrid />
        </section>
      </div>
    </SiteLayout>
  );
}
