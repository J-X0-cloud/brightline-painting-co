import Link from "next/link";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Arrow } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import type { ServiceArea } from "@/types/content";

export function AreaProjects({ area }: { area: ServiceArea }) {
  return (
    <section className="svc-section alt">
      <div className="wrap">
        <div className="svc-headrow">
          <SectionHead eyebrow="Recent Work" title={`Recent projects in ${area.name}.`} />
          <Link className="btn-ghost" href="/#work">
            See more of our work <Arrow />
          </Link>
        </div>
        <p className="svc-lead">{area.projectsLead}</p>
        <div className="proj-grid">
          {area.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
