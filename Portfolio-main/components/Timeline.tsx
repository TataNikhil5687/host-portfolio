import { portfolioData } from "@/data/portfolio";

export default function Timeline() {
  return (
    <section id="timeline" className="section-wrap py-16">
      <h2 className="section-title">Professional Timeline</h2>
      <p className="section-subtitle">
        Academic progression, ServiceNow credential milestones, and cybersecurity training journey.
      </p>

      <div className="mt-10 relative border-l border-zinc-800 pl-6 space-y-8">
        {portfolioData.timeline.map((item) => (
          <article key={item.title} className="relative">
            <span className="absolute -left-[33px] top-1 h-3.5 w-3.5 rounded-full bg-emerald-400 ring-4 ring-zinc-950" />
            <div className="card-surface p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-xs text-zinc-400">{item.period}</p>
              </div>
              <p className="mt-1 text-sm text-indigo-300">{item.organization}</p>
              <p className="mt-3 text-zinc-400">{item.description}</p>
              <ul className="mt-3 list-disc list-inside text-sm text-zinc-300 space-y-1">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
