import { portfolioData } from "@/data/portfolio";

export default function TechStack() {
  return (
    <section id="stack" className="section-wrap py-16">
      <h2 className="section-title">Technology Stack</h2>
      <p className="section-subtitle">
        A dual-specialization stack focused on enterprise workflow automation and modern application engineering.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-1 md:grid-cols-2">
        {portfolioData.skillGroups.map((group) => (
          <div key={group.title} className="card-surface p-6 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-lg font-semibold text-indigo-400">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1.5 text-sm rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
