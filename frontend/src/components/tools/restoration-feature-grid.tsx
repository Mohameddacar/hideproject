import {
  Palette,
  ScanSearch,
  User,
  Wand2,
} from "lucide-react";

import { RESTORATION_FEATURES } from "@/lib/constants";

const iconMap = {
  wand: Wand2,
  palette: Palette,
  zoom: ScanSearch,
  user: User,
};

export function RestorationFeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {RESTORATION_FEATURES.map((feature) => {
        const Icon = iconMap[feature.icon];
        return (
          <div
            key={feature.title}
            className="rounded-xl border border-white/5 bg-zinc-900/50 p-4 transition-colors hover:border-white/10"
          >
            <Icon className="mb-3 size-5 text-zinc-400" />
            <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
            <p className="mt-1 text-xs text-zinc-500">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}
