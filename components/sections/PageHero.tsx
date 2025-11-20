import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { QUOTE_ANCHOR, siteConfig } from "@/lib/site";
import type { ImageAsset, Link } from "@/types/content";

type PageHeroProps = {
  crumbs: Link[];
  current: string;
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  image: ImageAsset;
};

/** Split hero used by the services page and every neighborhood page. */
export function PageHero({ crumbs, current, eyebrow, title, lede, image }: PageHeroProps) {
  return (
    <section className="svc-hero">
      <div className="wrap">
        <Breadcrumbs trail={crumbs} current={current} />
        <div className="svc-hero-grid">
          <div className="svc-hero-text">
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p className="svc-sub">{lede}</p>
            <div className="hero-cta">
              <ButtonLink href={QUOTE_ANCHOR} size="lg">
                Get Your Free Quote
              </ButtonLink>
              <ButtonLink href={siteConfig.phone.href} variant="ghost" size="lg">
                Call {siteConfig.phone.display}
              </ButtonLink>
            </div>
          </div>
          <figure className="svc-hero-media">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 900px) 100vw, 620px"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
