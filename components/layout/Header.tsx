"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Logo } from "@/components/layout/Logo";
import { Icon } from "@/components/ui/Icon";
import { serviceAreas, areaHref } from "@/lib/data/areas";
import { menuServices, serviceHref } from "@/lib/data/services";
import { QUOTE_ANCHOR, siteConfig } from "@/lib/site";

/** Services listed in the mobile menu (the mega menu also shows drywall and color). */
const mobileServices = menuServices.filter(
  (service) => service.category !== "specialty" && service.slug !== "drywall-repair",
);

type HeaderProps = {
  /** Server-rendered mega menu panels, slotted under their nav items. */
  servicesMega: ReactNode;
  areasMega: ReactNode;
};

export function Header({ servicesMega, areasMega }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Section links point at the home page from every other route.
  const onHome = pathname === "/";
  const section = (hash: string) => (onHome ? hash : `/${hash}`);
  const quoteHref = QUOTE_ANCHOR;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", open);
    return () => document.body.classList.remove("nav-locked");
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = () => setOpen(false);

  return (
    <header className={clsx("nav", scrolled && "scrolled", open && "menu-open")} id="nav">
      <div className="wrap">
        <Logo />
        <nav className="links" aria-label="Primary">
          <div className="has-mega">
            <Link className="navlink" href="/services">
              Services <span className="caret" aria-hidden="true" />
            </Link>
            {servicesMega}
          </div>
          <div className="has-mega">
            <Link className="navlink" href={section("#areas")}>
              Areas We Serve <span className="caret" aria-hidden="true" />
            </Link>
            {areasMega}
          </div>
          <Link className="navlink" href={section("#work")}>
            Our Work
          </Link>
          <Link className="navlink" href={section("#process")}>
            Process
          </Link>
          <Link className="navlink" href={section("#reviews")}>
            Reviews
          </Link>
        </nav>
        <div className="nav-right">
          <a className="phone" href={siteConfig.phone.href}>
            <Icon name="phone" /> {siteConfig.phone.display}
          </a>
          <a className="btn-cta nav-cta-desktop" href={quoteHref}>
            Get a Quote
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobileNav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
      </div>

      <div className={clsx("mobile-nav", open && "is-open")} id="mobileNav" hidden={!open}>
        <nav className="mnav-inner" aria-label="Mobile">
          <details className="mnav-group">
            <summary>
              Services <Icon name="chevron-down" />
            </summary>
            <div className="mnav-sub">
              {mobileServices.map((service) => (
                <Link key={service.slug} href={serviceHref(service)} onClick={close}>
                  {service.name}
                </Link>
              ))}
              <Link className="mnav-all" href="/services" onClick={close}>
                View all services
              </Link>
            </div>
          </details>
          <details className="mnav-group">
            <summary>
              Areas We Serve <Icon name="chevron-down" />
            </summary>
            <div className="mnav-sub">
              {serviceAreas.map((area) => (
                <Link key={area.slug} href={areaHref(area.slug)} onClick={close}>
                  {area.name}
                </Link>
              ))}
              <Link className="mnav-all" href={section("#areas")} onClick={close}>
                See all areas
              </Link>
            </div>
          </details>
          <Link className="mnav-link" href={section("#work")} onClick={close}>
            Our Work
          </Link>
          <Link className="mnav-link" href={section("#process")} onClick={close}>
            Process
          </Link>
          <Link className="mnav-link" href={section("#reviews")} onClick={close}>
            Reviews
          </Link>
          <div className="mnav-cta">
            <a className="btn-cta btn-lg" href={quoteHref} onClick={close}>
              Get Your Free Quote
            </a>
            <a className="mnav-phone" href={siteConfig.phone.href}>
              Call {siteConfig.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
