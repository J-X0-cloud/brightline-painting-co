import { LegalPage } from "@/components/legal/LegalPage";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Accessibility",
  description: "Our commitment to an accessible website for every Brightline customer.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility" updated="January 2026">
      <p>
        We want everyone to be able to learn about our services and request a quote. This site
        uses semantic HTML, a skip link, labeled form fields, native disclosure widgets for FAQs
        and visible focus states, and we test with keyboard navigation and screen readers.
      </p>
      <h2>Need a hand?</h2>
      <p>
        If anything on the site gets in your way, call{" "}
        <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a> or email{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> and we will take your
        request directly.
      </p>
    </LegalPage>
  );
}
