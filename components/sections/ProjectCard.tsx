import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="proj-card" href={project.href}>
      <div className="proj-photo">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(max-width: 600px) 85vw, 400px"
        />
        <span className="proj-loc">{project.location}</span>
        <span className="proj-open" aria-hidden="true">
          <Icon name="arrow-up-right" />
        </span>
        <div className="proj-overlay">
          <h3>{project.title}</h3>
          <p>{project.body}</p>
        </div>
      </div>
    </Link>
  );
}
