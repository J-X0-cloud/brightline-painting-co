import { LegalPage } from "@/components/legal/LegalPage";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Brightline Painting Co. handles the information you share in a quote request.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="January 2026">
      <p>
        When you request a quote we collect your name, phone number, email address, project ZIP
        code and the project details you choose to share. We use them only to schedule your
        walkthrough, prepare your quote and keep you updated during the job.
      </p>
      <h2>Who sees your information</h2>
      <p>
        Our office team and the crew lead assigned to your project. We do not sell or rent your
        information, and we do not share it with other contractors.
      </p>
      <h2>Your choices</h2>
      <p>
        To update or delete your information, email{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> and we will confirm within
        one business day.
      </p>
    </LegalPage>
  );
}
