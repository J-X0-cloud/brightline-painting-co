import { createHmac } from "node:crypto";
import { areaForZip, areaHref, getServiceArea } from "@/lib/data/areas";
import type { QuoteRequest } from "@/lib/validation/quote";

export type LeadPriority = "hot" | "warm" | "nurture";

export type QuoteReceipt = {
  reference: string;
  message: string;
  area: { name: string; href: string } | null;
};

/** Timing drives how fast the office calls back; the CRM sorts on this. */
export function leadPriority(lead: QuoteRequest): LeadPriority {
  if (lead.timing === "As soon as possible") return "hot";
  if (lead.timing === "Just pricing it out" || lead.timing === "In 3 months or more") return "nurture";
  return "warm";
}

function createReference(): string {
  const stamp = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BL-${stamp}-${suffix}`;
}

async function deliver(payload: Record<string, unknown>) {
  const url = process.env.LEADS_WEBHOOK_URL;
  if (!url) {
    console.info("[leads] LEADS_WEBHOOK_URL not set, lead logged", payload);
    return;
  }

  const body = JSON.stringify(payload);
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const secret = process.env.LEADS_WEBHOOK_SECRET;
  if (secret) headers["X-Brightline-Signature"] = createHmac("sha256", secret).update(body).digest("hex");

  const response = await fetch(url, { method: "POST", headers, body });
  if (!response.ok) throw new Error(`Lead webhook responded ${response.status}`);
}

/**
 * Records a quote request: matches the ZIP to a neighborhood page, scores urgency and hands
 * the lead to the CRM so the office can book the walkthrough without a back-and-forth.
 */
export async function submitQuoteRequest(lead: QuoteRequest): Promise<QuoteReceipt> {
  const reference = createReference();
  const zipArea = lead.zip ? areaForZip(lead.zip) : undefined;
  const pageArea = lead.area ? getServiceArea(lead.area) : undefined;
  const area = zipArea ?? pageArea;

  await deliver({
    reference,
    receivedAt: new Date().toISOString(),
    priority: leadPriority(lead),
    serviceArea: area?.slug ?? null,
    sourcePage: pageArea ? areaHref(pageArea.slug) : null,
    name: lead.name,
    phone: lead.phone,
    email: lead.email,
    zip: lead.zip ?? null,
    service: lead.service ?? null,
    timing: lead.timing ?? null,
    details: lead.details,
  });

  return {
    reference,
    message: "Thanks! We will reach out within one business day to schedule your walkthrough.",
    area: area ? { name: area.name, href: areaHref(area.slug) } : null,
  };
}
