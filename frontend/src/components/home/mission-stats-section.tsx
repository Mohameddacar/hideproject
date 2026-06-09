import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HOME_STATS } from "@/lib/constants";

export function MissionStatsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="aspect-[4/3] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1566127444979-b3d2a6452792?w=800&h=600&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 p-6">
              <p className="text-xs tracking-wider text-zinc-400 uppercase">
                Featured Project
              </p>
              <h3 className="mt-1 text-xl font-bold text-white">
                Mogadishu Archive Digitalization
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                Project 01: Restoration of 1980s urban photography using HiddoAI
                Neural Engine.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Technological Precision, Cultural Respect
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Our AI models are trained in collaboration with historians,
              linguists, and community elders to ensure every translation,
              restoration, and archival record honors the nuance and dignity of
              Somali culture.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {HOME_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button
              nativeButton={false}
              render={<Link href="#" />}
              variant="secondary"
              className="mt-8 w-fit rounded-full bg-zinc-800 px-6 text-white hover:bg-zinc-700"
            >
              Learn About Our Mission
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
