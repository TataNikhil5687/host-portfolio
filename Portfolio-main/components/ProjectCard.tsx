import { Project } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const githubUrl = `https://github.com/${project.githubRepo}`;

  return (
    <article className="card-surface p-6 hover:-translate-y-2 transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-zinc-300 hover:text-emerald-400 transition-colors"
          aria-label={`Open ${project.title} repository`}
        >
          <Github size={16} />
          <ExternalLink size={14} />
        </a>
      </div>

      <p className="mt-3 text-zinc-400">{project.description}</p>

      <p className="mt-4 text-sm text-zinc-300">
        <span className="text-emerald-400 font-medium">Impact:</span> {project.impact}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs rounded-full border border-zinc-700 text-zinc-300 bg-zinc-900/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
