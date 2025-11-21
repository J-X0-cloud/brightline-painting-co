import { LegalPage } from "@/components/legal/LegalPage";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms",
  description: "Terms for using the Brightline Painting Co. website and requesting a quote.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms" updated="January 2026">
      <p>
        Information on this site describes our services in general terms. The scope, price,
        schedule and warranty for your project are set out in your written quote and contract,
        which take precedence over anything on this site.
      </p>
      <h2>Quotes</h2>
      <p>
        Quotes are free and carry no obligation. Prices are based on the walkthrough and remain
        valid for 30 days unless the quote says otherwise.
      </p>
      <h2>Warranty</h2>
      <p>
        Residential projects include a 5-year written workmanship warranty covering peeling,
        blistering and flaking caused by our work. Commercial warranties are defined in each quote.
      </p>
      <h2>Licensing</h2>
      <p>
        {siteConfig.name} is a {siteConfig.license.toLowerCase()}, bonded and insured in the State
        of California.
      </p>
    </LegalPage>
  );
}
