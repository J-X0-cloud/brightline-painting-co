import { ButtonLink } from "@/components/ui/Button";
import { QUOTE_ANCHOR } from "@/lib/site";
import type { ServiceArea } from "@/types/content";

export function LocalExpertise({ area }: { area: ServiceArea }) {
  return (
    <section className="svc-section alt">
      <div className="wrap">
        <div className="lc-prose-grid">
          <div className="lc-lead">
            <span className="eyebrow">Local Expertise</span>
            <h2>{area.expertiseTitle}</h2>
            <div className="lc-chips">
              {area.highlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
            <ButtonLink href={QUOTE_ANCHOR} size="lg">
              Get Your Free Quote
            </ButtonLink>
          </div>
          <div className="lc-prose">
            {area.prose.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
