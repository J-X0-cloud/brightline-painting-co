import { ProjectSlider } from "@/components/sections/ProjectSlider";
import { Arrow } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { recentProjects } from "@/lib/data/content";

export function RecentWork() {
  return (
    <section className="projects" id="work">
      <div className="wrap">
        <div className="proj-head">
          <SectionHead
            eyebrow="Our Work"
            title="Recent projects around Los Angeles."
            lede="Spanish Revival stucco, Craftsman trim, modern kitchens, and busy commercial spaces. Here is a sample of what careful prep looks like when it is finished."
          />
          <a className="btn-ghost" href="#free-estimate">
            Plan your project <Arrow />
          </a>
        </div>
        <ProjectSlider projects={recentProjects} />
      </div>
    </section>
  );
}
