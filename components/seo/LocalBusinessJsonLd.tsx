import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema } from "@/lib/schema";

export function LocalBusinessJsonLd() {
  return <JsonLd data={buildLocalBusinessSchema()} />;
}
