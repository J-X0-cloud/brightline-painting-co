import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="legal legal--center">
      <div className="wrap">
        <span className="eyebrow">Page not found</span>
        <h1>We couldn’t find that page.</h1>
        <p>It may have moved when we rebuilt the site. The services and neighborhood pages are a click away.</p>
        <div className="hero-cta">
          <ButtonLink href="/#free-estimate" size="lg">
            Get Your Free Quote
          </ButtonLink>
          <ButtonLink href={siteConfig.phone.href} variant="ghost" size="lg">
            Call {siteConfig.phone.display}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
