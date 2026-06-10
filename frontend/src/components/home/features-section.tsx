import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Camera,
  Languages,
} from "lucide-react";

import { HOME_FEATURES } from "@/lib/constants";

const iconMap = {
  book: BookOpen,
  bot: Bot,
  languages: Languages,
  camera: Camera,
};

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              A Modern Vault for Ancestral Knowledge
            </h2>
            <p className="mt-3 max-w-xl text-sm text-zinc-400">
              Four powerful modules designed to preserve, explore, and celebrate
              Somali heritage through cutting-edge AI technology.
            </p>
          </div>
          <Link
            href="/archive"
            className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-amber-500 uppercase transition-colors hover:text-amber-400"
          >
            View All Modules
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-white/5 bg-[#121212] p-6 transition-colors hover:border-white/10"
              >
                <div className="mb-6 h-px w-full bg-gradient-to-r from-amber-600/50 to-transparent" />
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-white/10 bg-zinc-900">
                  <Icon className="size-5 text-zinc-400" />
                </div>
                <h3 className="mb-2 font-semibold text-white">{feature.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-1 text-sm text-zinc-300 transition-colors group-hover:text-white"
                >
                  {feature.linkText}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
