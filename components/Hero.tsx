import { portfolioData } from "@/data/portfolio";
import { ArrowRight, BadgeCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="section-wrap pt-20 pb-16">
      <div className="card-surface p-8 sm:p-10 lg:p-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-xs mb-6">
          <BadgeCheck size={14} />
          ServiceNow CSA + CAD Certified
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">{portfolioData.fullName}</h1>

        <p className="mt-4 text-lg sm:text-xl text-zinc-300 max-w-3xl">{portfolioData.role}</p>

        <p className="mt-4 text-zinc-400 max-w-3xl">{portfolioData.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-400 text-zinc-900 font-medium hover:bg-emerald-300 transition-colors"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl border border-zinc-700 text-zinc-200 hover:border-indigo-500 hover:text-indigo-300 transition-colors"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
