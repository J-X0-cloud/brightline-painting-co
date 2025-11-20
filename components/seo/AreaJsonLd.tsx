import { JsonLd } from "@/components/seo/JsonLd";
import { buildAreaSchema } from "@/lib/schema";
import type { ServiceArea } from "@/types/content";

export function AreaJsonLd({ area }: { area: ServiceArea }) {
  return <JsonLd data={buildAreaSchema(area)} />;
}
