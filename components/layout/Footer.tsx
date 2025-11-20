import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { FacebookIcon, Icon } from "@/components/ui/Icon";
import { areaHref, serviceAreas } from "@/lib/data/areas";
import { menuServices, serviceHref } from "@/lib/data/services";
import { siteConfig } from "@/lib/site";

const footerServices = menuServices.filter(
  (service) => service.category === "painting" || service.slug === "stucco-repair",
);

const company = [
  { label: "Why Brightline", href: "/#why" },
  { label: "Recent Work", href: "/#work" },
  { label: "Our Process", href: "/#process" },
  { label: "Reviews", href: "/#reviews" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export function Footer() {
  const { phone, email } = siteConfig;

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo tone="dark" className="f-logo" />
            <p>
              Residential and commercial painters for Los Angeles. Clean prep, crisp lines, clear
              quotes, and a 5-year workmanship warranty on every home we paint.
            </p>
            <div className="f-nap">
              <div>
                <Icon name="map-pin" />
                <span>{siteConfig.shop.label}</span>
              </div>
              <div>
                <Icon name="phone" strokeWidth={1.9} />
                <a href={phone.href}>{phone.display}</a>
              </div>
              <div>
                <Icon name="mail" />
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div>
                <Icon name="clock" />
                <span>{siteConfig.hours.label}</span>
              </div>
            </div>
            <div className="f-social">
              <a href={siteConfig.social.instagram} aria-label="Instagram" rel="noopener noreferrer" target="_blank">
                <Icon name="instagram" />
              </a>
              <a href={siteConfig.social.facebook} aria-label="Facebook" rel="noopener noreferrer" target="_blank">
                <FacebookIcon />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h6>Services</h6>
            {footerServices.map((service) => (
              <Link key={service.slug} href={serviceHref(service)}>
                {service.name}
              </Link>
            ))}
            <Link href="/services">All services</Link>
          </div>
          <div className="footer-col">
            <h6>Service Areas</h6>
            {serviceAreas.map((area) => (
              <Link key={area.slug} href={areaHref(area.slug)}>
                {area.name}
              </Link>
            ))}
            <Link href="/#areas">All neighborhoods</Link>
          </div>
          <div className="footer-col">
            <h6>Company</h6>
            {company.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h6>Get Started</h6>
            <Link href="/#free-estimate">Free Quote</Link>
            <a href={phone.href}>Call {phone.display}</a>
            <a href={`mailto:${email}`}>Email Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name} {siteConfig.license}. Bonded and
            insured.
          </span>
          <div className="footer-legal">
            {legal.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
