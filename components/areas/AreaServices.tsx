import Link from "next/link";
import { Fragment } from "react";
import { ServiceTiles } from "@/components/sections/ServiceTiles";
import { Arrow } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { areaServiceTiles } from "@/lib/data/services";
import type { ServiceArea } from "@/types/content";

const tiles = areaServiceTiles.map((tile) => ({
  title: tile.name,
  body: tile.tagline,
  icon: tile.icon,
  href: tile.href,
}));

export function AreaServices({ area }: { area: ServiceArea }) {
  return (
    <section className="svc-section">
      <div className="wrap">
        <div className="svc-headrow">
          <SectionHead eyebrow="Our Services" title={`Our painting services in ${area.name}.`} />
          <Link className="btn-ghost" href="/services">
            View all services <Arrow />
          </Link>
        </div>
        <p className="svc-lead">
          The full range of residential and commercial painting, delivered by a crew that works in{" "}
          {area.name} every month.
        </p>
        <ServiceTiles tiles={tiles} className="svc-compact--spaced" />
        <p className="popular">
          <span className="pop-label">Popular in {area.name}:</span>{" "}
          {area.popular.map((link, index) => (
            <Fragment key={link.label}>
              {index > 0 ? " · " : null}
              <Link href={link.href}>{link.label}</Link>
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}
