import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { TrustBand } from "@/components/sections/TrustRow";
import { AnswerCard } from "@/components/services/AnswerCard";
import { Callouts } from "@/components/services/Callouts";
import { ServiceCategorySection } from "@/components/services/ServiceCategorySection";
import { serviceFaqs } from "@/lib/data/content";
import { serviceSections } from "@/lib/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Painting Services in Los Angeles",
  description:
    "Interior, exterior, cabinet, commercial, and HOA painting in Los Angeles, plus stucco repair, wood repair, and color consultation. Itemized quotes and a 5-year warranty.",
  path: "/services",
  image: "/images/living-room-windows.webp",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }]}
        current="Services"
        eyebrow="Our Services"
        title="Painting services for LA homes and buildings."
        lede="From a single bedroom to a 40-unit building, Brightline handles interior and exterior painting, cabinets, stucco and wood repair, and color consultation. Every job comes with an itemized written quote, one crew lead, and a 5-year workmanship warranty on residential work."
        image={{
          src: "/images/living-room-windows.webp",
          alt: "Open living room with tall windows and freshly painted walls",
          width: 2048,
          height: 1228,
        }}
      />
      <TrustBand />
      <AnswerCard />
      {serviceSections.map((section, index) => (
        <ServiceCategorySection
          key={section.id}
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
          alt={index % 2 === 1}
        >
          {section.id === "specialty" ? <Callouts /> : null}
        </ServiceCategorySection>
      ))}
      <ProcessSection />
      <FaqSection title="Service questions, answered." faqs={serviceFaqs} />
      <QuoteSection />
    </>
  );
}
