import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaProjects } from "@/components/areas/AreaProjects";
import { AreaServices } from "@/components/areas/AreaServices";
import { LocalExpertise } from "@/components/areas/LocalExpertise";
import { Neighborhoods } from "@/components/areas/Neighborhoods";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Reviews } from "@/components/sections/Reviews";
import { TrustBand } from "@/components/sections/TrustRow";
import { AreaJsonLd } from "@/components/seo/AreaJsonLd";
import { areaHref, getServiceArea, serviceAreas } from "@/lib/data/areas";
import { pageMetadata } from "@/lib/metadata";

type Params = Promise<{ area: string }>;

/** Only the neighborhoods in lib/data/areas.ts exist; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const area = getServiceArea((await params).area);
  if (!area) return {};
  return pageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: areaHref(area.slug),
    image: area.heroImage.src,
  });
}

export default async function ServiceAreaPage({ params }: { params: Params }) {
  const area = getServiceArea((await params).area);
  if (!area) notFound();

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/#areas" },
        ]}
        current={area.name}
        eyebrow="Service Area"
        title={`Painters in ${area.name}`}
        lede={area.intro}
        image={area.heroImage}
      />
      <TrustBand />
      <LocalExpertise area={area} />
      <AreaServices area={area} />
      <AreaProjects area={area} />
      <Reviews title={`What ${area.name} clients say.`} />
      <Neighborhoods area={area} />
      <FaqSection title={`${area.name} painting questions.`} faqs={area.faqs} />
      <QuoteSection areaName={area.name} areaSlug={area.slug} />
      <AreaJsonLd area={area} />
    </>
  );
}
