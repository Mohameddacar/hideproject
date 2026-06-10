import { Star } from "lucide-react";

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <div className="h-px w-24 bg-white/10" />
      <Star className="size-3 fill-amber-500/60 text-amber-500/60" />
      <div className="h-px w-24 bg-white/10" />
    </div>
  );
}
