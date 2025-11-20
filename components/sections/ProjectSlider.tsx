"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Icon } from "@/components/ui/Icon";
import type { Project } from "@/types/content";

/** Scroll-snap carousel with prev/next buttons that disable at either end. */
export function ProjectSlider({ projects }: { projects: Project[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const page = (direction: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth * 0.8 });
  };

  return (
    <>
      <div className="proj-viewport">
        <div className="proj-slider" ref={track} onScroll={update}>
          {projects.map((project) => (
            <ProjectCard key={`${project.title}-${project.location}`} project={project} />
          ))}
        </div>
      </div>
      <div className="proj-foot">
        <div className="proj-ctrls">
          <button
            className="proj-arrow proj-prev"
            type="button"
            aria-label="Previous projects"
            disabled={atStart}
            onClick={() => page(-1)}
          >
            <Icon name="chevron-left" />
          </button>
          <button
            className="proj-arrow proj-next"
            type="button"
            aria-label="Next projects"
            disabled={atEnd}
            onClick={() => page(1)}
          >
            <Icon name="chevron-right" />
          </button>
        </div>
      </div>
    </>
  );
}
