export const siteConfig = {
  name: "Brightline Painting Co.",
  shortName: "Brightline",
  description:
    "Brightline Painting Co. paints homes and businesses across Los Angeles. Interior, exterior, cabinet, and commercial painting with itemized quotes and a 5-year warranty.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.brightlinepainting.com",
  foundingYear: 2016,
  phone: { display: "(213) 555-0142", href: "tel:+12135550142", e164: "+12135550142" },
  email: "hello@brightlinepainting.com",
  shop: {
    label: "Atwater Village shop, serving all of Los Angeles",
    locality: "Los Angeles",
    neighborhood: "Atwater Village",
    region: "CA",
    postalCode: "90039",
    country: "US",
    geo: { latitude: 34.1187, longitude: -118.2626 },
  },
  hours: { label: "Monday to Saturday, 7 AM to 5 PM", opens: "07:00", closes: "17:00" },
  license: "Licensed C-33 painting contractor",
  rating: { value: 4.9, count: 212 },
  social: {
    instagram: "https://www.instagram.com/brightlinepainting",
    facebook: "https://www.facebook.com/brightlinepainting",
  },
  themeColor: "#17423a",
} as const;

export const QUOTE_ANCHOR = "#free-estimate";

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();
