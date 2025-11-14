import type { IconName } from "@/components/ui/Icon";
import type { Service, ServiceCategory } from "@/types/content";

type CatalogEntry = Service & {
  /** Short label under the name in the header mega menu. */
  menuTagline?: string;
  /** Compact tile on neighborhood pages. */
  areaTile?: { name?: string; tagline: string; icon: IconName };
};

export const serviceCatalog: CatalogEntry[] = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    category: "painting",
    icon: "building",
    tagline: "Walls, ceilings, trim, and doors",
    menuTagline: "Walls, ceilings, trim, doors",
    description:
      "Walls, ceilings, trim, and doors, with furniture and floors fully protected and a clean site at the end of each day.",
    areaTile: { tagline: "Walls, ceilings, trim, and doors", icon: "window" },
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    category: "painting",
    icon: "house-outline",
    tagline: "Stucco, siding, trim, and eaves",
    menuTagline: "Stucco, siding, trim, eaves",
    description:
      "Stucco, wood siding, trim, and eaves coated in UV-resistant systems made for Southern California sun.",
    areaTile: { tagline: "Stucco, siding, trim, and eaves", icon: "home" },
  },
  {
    slug: "whole-home-repaint",
    name: "Whole-Home Repaint",
    category: "painting",
    icon: "house-door",
    tagline: "Inside and out on one schedule",
    menuTagline: "Inside and out, one schedule",
    description:
      "Inside and out on one schedule, with one crew lead and one quote. Ideal before a sale or after a move-in.",
    areaTile: { tagline: "Inside and out on one schedule", icon: "home" },
  },
  {
    slug: "cabinet-refinishing",
    name: "Cabinet Refinishing",
    category: "painting",
    icon: "cabinet",
    tagline: "Sprayed, factory-smooth finish",
    menuTagline: "Sprayed kitchen and bath cabinets",
    description:
      "Doors removed, degreased, sanded, primed, and sprayed off-site for a durable, factory-smooth finish.",
    areaTile: { tagline: "Sprayed, factory-smooth finish", icon: "cabinet" },
  },
  {
    slug: "commercial-painting",
    name: "Commercial Painting",
    category: "painting",
    icon: "office",
    tagline: "Offices, retail, and restaurants",
    menuTagline: "Offices, retail, restaurants",
    description:
      "Offices, retail, restaurants, and tenant improvements painted after hours so your doors stay open.",
    areaTile: { tagline: "Offices, retail, and restaurants", icon: "storefront" },
  },
  {
    slug: "hoa-multifamily",
    name: "HOA & Multifamily",
    category: "painting",
    icon: "apartments",
    tagline: "Buildings and common areas",
    menuTagline: "Buildings and common areas",
    description:
      "Exterior and common-area repaints planned around residents, with notices, phasing, and board-ready bids.",
    areaTile: { tagline: "Buildings and common areas", icon: "stucco" },
  },
  {
    slug: "stucco-repair",
    name: "Stucco Repair & Elastomeric",
    category: "prep",
    icon: "shield",
    tagline: "Crack repair and weatherproofing",
    menuTagline: "Crack repair and weatherproofing",
    description:
      "Hairline and settlement cracks filled and patched, then sealed with flexible elastomeric coatings that bridge future movement.",
    areaTile: { name: "Stucco Repair", tagline: "Cracks patched and sealed", icon: "bricks" },
  },
  {
    slug: "wood-trim-repair",
    name: "Wood & Trim Repair",
    category: "prep",
    icon: "pencil",
    tagline: "Dry rot, fascia, and sills",
    menuTagline: "Dry rot, fascia, window trim",
    description:
      "Dry rot in fascia, rafter tails, sills, and window trim cut out and replaced before any paint goes on.",
    areaTile: { tagline: "Dry rot, fascia, and sills", icon: "wrench" },
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    category: "prep",
    icon: "drywall",
    tagline: "Patching and texture matching",
    menuTagline: "Patching and texture matching",
    description:
      "Holes, cracks, and water stains patched, textured to match, and primed so repairs disappear under the finish.",
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    category: "prep",
    icon: "spray",
    tagline: "Soft-washing and pressure-washing",
    description:
      "Gentle soft-washing for stucco and siding, and pressure-washing for decks, walkways, and block walls.",
  },
  {
    slug: "color-consultation",
    name: "Color Consultation",
    category: "specialty",
    icon: "palette",
    tagline: "Samples and finish guidance",
    menuTagline: "Samples and finish guidance",
    description:
      "Large painted samples on your actual walls, viewed in morning and evening light, so you choose with confidence.",
  },
  {
    slug: "specialty-coatings",
    name: "Specialty & Protective Coatings",
    category: "specialty",
    icon: "shield",
    tagline: "Limewash, anti-graffiti, and sealers",
    description:
      "Limewash, anti-graffiti coatings, metal and railing enamels, and concrete and block-wall sealers.",
  },
];

export const serviceSections: {
  id: ServiceCategory;
  eyebrow: string;
  title: string;
}[] = [
  { id: "painting", eyebrow: "Painting", title: "Interior, exterior, and everything in between." },
  { id: "prep", eyebrow: "Prep & Repair", title: "The work that makes paint last." },
  { id: "specialty", eyebrow: "Specialty", title: "Color help and specialty finishes." },
];

export const serviceHref = (service: Pick<Service, "category">) => `/services#${service.category}`;

export const servicesIn = (category: ServiceCategory) =>
  serviceCatalog.filter((service) => service.category === category);

/** Header mega menu and mobile menu. */
export const menuServices = serviceCatalog.filter((service) => service.menuTagline);

/** Compact tiles on every neighborhood page, in display order. */
const AREA_TILE_ORDER = [
  "interior-painting",
  "exterior-painting",
  "cabinet-refinishing",
  "whole-home-repaint",
  "wood-trim-repair",
  "stucco-repair",
  "commercial-painting",
  "hoa-multifamily",
];

export const areaServiceTiles = AREA_TILE_ORDER.map((slug) => {
  const service = serviceCatalog.find((entry) => entry.slug === slug);
  if (!service?.areaTile) throw new Error(`Missing area tile for ${slug}`);
  return {
    name: service.areaTile.name ?? service.name,
    tagline: service.areaTile.tagline,
    icon: service.areaTile.icon,
    href: serviceHref(service),
  };
});

export const quoteServiceOptions = [
  "Interior painting",
  "Exterior painting",
  "Whole-home repaint",
  "Cabinet refinishing",
  "Stucco repair & elastomeric",
  "Commercial painting",
  "HOA & multifamily",
  "Something else",
] as const;

export const quoteTimingOptions = [
  "As soon as possible",
  "Within 1 to 2 months",
  "In 3 months or more",
  "Just pricing it out",
] as const;
