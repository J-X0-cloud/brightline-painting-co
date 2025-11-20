import Image from "next/image";
import Link from "next/link";
import { ServiceTiles } from "@/components/sections/ServiceTiles";
import { Arrow } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { featuredServices, moreServices } from "@/lib/data/content";

export function ServicesOverview() {
  return (
    <section className="services">
      <div className="wrap">
        <div className="svc-headrow">
          <SectionHead
            eyebrow="Our Services"
            title="Every surface in your home or building, handled by one crew."
          />
          <Link className="btn-ghost" href="/services">
            View all services <Arrow />
          </Link>
        </div>
        <div className="svc-featured">
          {featuredServices.map((service) => (
            <Link className="svc-tile" href="/services#painting" key={service.title}>
              <Image
                src={service.image.src}
                alt={service.image.alt}
                width={service.image.width}
                height={service.image.height}
                sizes="(max-width: 900px) 100vw, 400px"
              />
              <div className="svc-tile-body">
                <h3>
                  {service.title} <Arrow />
                </h3>
                <p>{service.body}</p>
              </div>
            </Link>
          ))}
        </div>
        <ServiceTiles tiles={moreServices} />
      </div>
    </section>
  );
}
