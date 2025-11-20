import Image from "next/image";
import Link from "next/link";
import { Arrow, ArrowLink } from "@/components/ui/Button";
import { areaGroups } from "@/lib/data/areaGroups";
import { areaHref } from "@/lib/data/areas";
import { menuServices, serviceHref } from "@/lib/data/services";

export function ServicesMega() {
  return (
    <div className="mega mega-services">
      <div className="mega-inner">
        <div className="svc-cols">
          <div className="svc-head">
            <h3>What we paint</h3>
            <p>One crew lead, one written quote, and a 5-year workmanship warranty on every residential job.</p>
            <ArrowLink href="/services">View all services</ArrowLink>
          </div>
          {menuServices.map((service) => (
            <Link className="svc-item" href={serviceHref(service)} key={service.slug}>
              {service.name}
              <span>{service.menuTagline}</span>
            </Link>
          ))}
        </div>
        <Link className="svc-feature" href={areaHref("pasadena")}>
          <Image
            src="/images/craftsman-green-facade.webp"
            alt="Freshly repainted Craftsman bungalow with a green facade and white trim"
            width={1200}
            height={896}
            sizes="320px"
          />
          <div className="ovl" />
          <div className="ft-body">
            <span className="badge-lead">★ EPA Lead-Safe Certified</span>
            <h4>Older homes, handled safely</h4>
            <p>Most LA homes were built before 1978. Our crews follow lead-safe practices on every one of them.</p>
            <span className="ft-link">
              Painting in Pasadena <Arrow />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function AreasMega() {
  return (
    <div className="mega mega-areas">
      <div className="mega-inner">
        <div className="area-cols">
          {areaGroups.map((group) => (
            <div className="area-col" key={group.region}>
              <h5>{group.region}</h5>
              {group.areas.map((area) => (
                <Link key={area.name} href={area.href}>
                  {area.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="area-panel">
          <div>
            <h4>Across Los Angeles, one local crew</h4>
            <p>From the Eastside hills to the Westside and the San Gabriel Valley.</p>
            <div className="area-trust">
              <span>Licensed C-33 painting contractor</span>
              <span>Bonded and insured</span>
              <span>5-year workmanship warranty</span>
            </div>
          </div>
          <Link className="btn-ghost" href="/#areas">
            See all areas <Arrow />
          </Link>
        </div>
      </div>
    </div>
  );
}
