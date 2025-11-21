import { submitQuoteRequest } from "@/lib/leads";
import { fail, ok, readJson, validationFailed } from "@/lib/http";
import { siteConfig } from "@/lib/site";
import { quoteRequestSchema } from "@/lib/validation/quote";

/** POST /api/quote — free quote requests from every page's quote form. */
export async function POST(request: Request) {
  const parsed = quoteRequestSchema.safeParse(await readJson(request));
  if (!parsed.success) return validationFailed(parsed.error);

  // Honeypot filled in: answer like a success so bots learn nothing, but drop the lead.
  if (parsed.data.company) {
    return ok({ reference: "BL-RECEIVED", message: "Thanks! We will be in touch.", area: null }, 201);
  }

  try {
    return ok(await submitQuoteRequest(parsed.data), 201);
  } catch (error) {
    console.error("quote request failed", error);
    return fail(`We couldn’t send your request. Please call ${siteConfig.phone.display}.`, 502);
  }
}
