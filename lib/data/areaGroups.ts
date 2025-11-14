import { areaHref } from "@/lib/data/areas";
import { QUOTE_ANCHOR } from "@/lib/site";

type AreaLink = { name: string; href: string };

const quote = `/${QUOTE_ANCHOR}`;

/**
 * Every neighborhood we cover, grouped the way customers think about LA. Areas with a
 * dedicated page link to it; the rest send people straight to the quote form.
 */
export const areaGroups: { region: string; areas: AreaLink[] }[] = [
  {
    region: "Eastside",
    areas: [
      { name: "Silver Lake", href: areaHref("silver-lake") },
      { name: "Echo Park", href: quote },
      { name: "Los Feliz", href: quote },
      { name: "Atwater Village", href: quote },
      { name: "Highland Park", href: quote },
      { name: "Eagle Rock", href: quote },
    ],
  },
  {
    region: "San Gabriel Valley",
    areas: [
      { name: "Pasadena", href: areaHref("pasadena") },
      { name: "South Pasadena", href: quote },
      { name: "Altadena", href: quote },
      { name: "San Marino", href: quote },
    ],
  },
  {
    region: "Westside",
    areas: [
      { name: "Santa Monica", href: areaHref("santa-monica") },
      { name: "Culver City", href: areaHref("culver-city") },
      { name: "Venice", href: quote },
      { name: "Mar Vista", href: quote },
      { name: "Palms", href: quote },
    ],
  },
  {
    region: "Valley & Verdugos",
    areas: [
      { name: "Glendale", href: quote },
      { name: "Burbank", href: quote },
      { name: "Studio City", href: quote },
      { name: "Sherman Oaks", href: quote },
    ],
  },
];

export const allAreaNames = areaGroups.flatMap((group) => group.areas.map((area) => area.name));
