import { Plus } from "lucide-react";

export function ContributeCard() {
  return (
    <article className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-transparent p-8 text-center transition-colors hover:border-[#c7d2fe]/40 hover:bg-[#c7d2fe]/5">
      <div className="mb-4 flex size-14 items-center justify-center rounded-full border border-dashed border-white/20">
        <Plus className="size-6 text-zinc-500" />
      </div>
      <h3 className="font-semibold text-white">Contribute</h3>
      <p className="mt-2 text-sm text-zinc-500">
        Share a piece of history with the diaspora community.
      </p>
    </article>
  );
}
