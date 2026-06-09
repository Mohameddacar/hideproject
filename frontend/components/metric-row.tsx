import { metrics } from '@/lib/content';

export function MetricRow() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-glow">
            <div className="text-3xl font-semibold tracking-tight text-white">{metric.value}</div>
            <div className="mt-2 text-sm uppercase tracking-[0.18em] text-brand-100">{metric.label}</div>
            <p className="mt-3 text-sm leading-6 text-slate-400">{metric.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
