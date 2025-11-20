import Link from "next/link";
import { Fragment } from "react";
import { ArrowLink } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { areaHref } from "@/lib/data/areas";
import type { ServiceArea } from "@/types/content";

export function Neighborhoods({ area }: { area: ServiceArea }) {
  return (
    <section className="svc-section svc-navy">
      <div className="wrap">
        <SectionHead eyebrow="Neighborhoods" title={`Where we paint in ${area.name}.`} />
        <p className="svc-lead svc-lead--wide">{area.neighborhoodsLead}</p>
        <div className="hoods">
          {area.neighborhoods.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
        <p className="nearby">
          Nearby, we also paint in{" "}
          {area.nearby.map((place, index) => (
            <Fragment key={place.name}>
              {index > 0 ? ", " : null}
              {place.slug ? <Link href={areaHref(place.slug)}>{place.name}</Link> : place.name}
            </Fragment>
          ))}
          .
        </p>
        <ArrowLink href="/#areas">See all service areas</ArrowLink>
      </div>
    </section>
  );
}
