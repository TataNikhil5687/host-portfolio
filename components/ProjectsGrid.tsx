import ProjectCard from "@/components/ProjectCard";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="section-wrap py-16">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Real implementations spanning full-stack web systems, embedded hardware integrations, and secure Python data workflows.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
