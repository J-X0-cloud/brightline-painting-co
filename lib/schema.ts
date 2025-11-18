import { allAreaNames } from "@/lib/data/areaGroups";
import { areaHref } from "@/lib/data/areas";
import { serviceCatalog } from "@/lib/data/services";
import { absoluteUrl, siteConfig } from "@/lib/site";
import type { Faq, ServiceArea } from "@/types/content";

const BUSINESS_ID = absoluteUrl("/#business");

/** HousePainter is schema.org's LocalBusiness subtype for painting contractors. */
export function buildLocalBusinessSchema() {
  const { shop } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": BUSINESS_ID,
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.svg"),
    image: [absoluteUrl("/images/hero-white-home.webp"), absoluteUrl("/images/craftsman-green-cream.webp")],
    telephone: siteConfig.phone.e164,
    email: siteConfig.email,
    foundingDate: String(siteConfig.foundingYear),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: shop.locality,
      addressRegion: shop.region,
      postalCode: shop.postalCode,
      addressCountry: shop.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: shop.geo.latitude, longitude: shop.geo.longitude },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    ],
    areaServed: allAreaNames.map((name) => ({ "@type": "Place", name: `${name}, CA` })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
    },
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "California C-33 Painting and Decorating Contractor License" },
      { "@type": "EducationalOccupationalCredential", name: "EPA Lead-Safe Certified Firm" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting services",
      itemListElement: serviceCatalog.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.name, description: service.description },
      })),
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };
}

function faqPage(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Neighborhood page graph: the local service, its breadcrumb trail and the page's FAQs. */
export function buildAreaSchema(area: ServiceArea) {
  const url = absoluteUrl(areaHref(area.slug));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `House painting in ${area.name}`,
        serviceType: "House painting",
        description: area.metaDescription,
        url,
        provider: { "@id": BUSINESS_ID },
        areaServed: {
          "@type": "Place",
          name: `${area.name}, CA`,
          geo: { "@type": "GeoCoordinates", latitude: area.geo.latitude, longitude: area.geo.longitude },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: absoluteUrl("/#areas") },
          { "@type": "ListItem", position: 3, name: area.name, item: url },
        ],
      },
      { ...faqPage(area.faqs), "@id": `${url}#faq` },
    ],
  };
}
