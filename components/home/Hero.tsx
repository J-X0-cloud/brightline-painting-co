import Image from "next/image";
import { TrustRow } from "@/components/sections/TrustRow";
import { ButtonLink } from "@/components/ui/Button";
import { QUOTE_ANCHOR, siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero">
      <Image
        className="hero-img"
        src="/images/hero-white-home.webp"
        alt="White two-story home with dark trim freshly painted at golden hour"
        width={1672}
        height={941}
        sizes="100vw"
        priority
      />
      <div className="hero-ovl" />
      <div className="wrap">
        <div className="hero-content">
          <h1>
            Los Angeles Painters
            <br />
            Who Leave Clean Lines
            <span className="h1-sub">Residential &amp; commercial, backed by a 5-year warranty</span>
          </h1>
          <p className="hero-sub">
            Interior, exterior, cabinet, and commercial painting for homes and buildings across LA.
            One crew lead from walkthrough to final touch-up, an itemized written quote, and low-VOC
            paints as standard. Serving the Eastside, the Westside, and the San Gabriel Valley since{" "}
            {siteConfig.foundingYear}.
          </p>
          <div className="hero-cta">
            <ButtonLink href={QUOTE_ANCHOR} size="lg">
              Get Your Free Quote
            </ButtonLink>
            <ButtonLink href={siteConfig.phone.href} variant="ghost" size="lg" onPhoto>
              Call {siteConfig.phone.display}
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className="trust-strip">
        <div className="wrap">
          <TrustRow />
        </div>
      </div>
    </section>
  );
}
