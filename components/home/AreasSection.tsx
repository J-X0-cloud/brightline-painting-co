import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import { areaGroups } from "@/lib/data/areaGroups";
import { serviceAreas } from "@/lib/data/areas";

const guideNames = serviceAreas.map((area) => area.name);
const guideList = `${guideNames.slice(0, -1).join(", ")}, and ${guideNames.at(-1)}`;

export function AreasSection() {
  return (
    <section className="areas" id="areas">
      <div className="wrap">
        <div className="areas-grid">
          <div className="areas-lead">
            <span className="eyebrow">Service Area</span>
            <h2>Painting homes across Los Angeles.</h2>
            <p>
              From Silver Lake hillsides and Pasadena Craftsmans to Westside bungalows near the
              beach, our crews know the housing stock, the parking, and the permits in every part of
              town.
            </p>
            <a className="btn-ghost btn-ghost--on-photo" href="#free-estimate">
              Check your neighborhood <Arrow />
            </a>
            <p className="area-note">Neighborhood guides: {guideList}.</p>
          </div>
          <div className="areas-cols">
            {areaGroups.map((group) => (
              <div className="areas-col" key={group.region}>
                <h5>{group.region}</h5>
                {group.areas.map((area) => (
                  <Link key={area.name} href={area.href}>
                    {area.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
