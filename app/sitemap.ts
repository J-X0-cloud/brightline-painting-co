import type { MetadataRoute } from "next";
import { areaHref, serviceAreas } from "@/lib/data/areas";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...serviceAreas.map((area) => ({
      url: absoluteUrl(areaHref(area.slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...["/privacy", "/terms", "/accessibility"].map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
