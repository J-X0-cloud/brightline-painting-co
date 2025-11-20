import { QuoteForm } from "@/components/quote/QuoteForm";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site";

type QuoteSectionProps = {
  /** Neighborhood name, appended to the heading on area pages. */
  areaName?: string;
  /** Area slug, sent with the lead for attribution. */
  areaSlug?: string;
};

export function QuoteSection({ areaName, areaSlug }: QuoteSectionProps) {
  return (
    <section className="cta" id="free-estimate">
      <div className="wrap">
        <div className="cta-grid">
          <div className="cta-text">
            <span className="eyebrow">Free Quote</span>
            <h2>Get a clear, written quote{areaName ? ` in ${areaName}` : ""}.</h2>
            <p>
              Tell us about the project and we will set up a walkthrough within a few days. You get
              an itemized quote, a real start date, and a crew lead who stays with your job until
              the final walkthrough.
            </p>
            <div className="cta-phone">
              <Icon name="phone" /> Prefer to talk?{" "}
              <a href={siteConfig.phone.href}>Call {siteConfig.phone.display}</a>
            </div>
            <div className="cta-trust">
              <span>Licensed, bonded, insured</span>
              <span>5-year workmanship warranty</span>
            </div>
          </div>
          <QuoteForm areaSlug={areaSlug} />
        </div>
      </div>
    </section>
  );
}
