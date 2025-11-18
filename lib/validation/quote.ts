import { z } from "zod";
import { quoteServiceOptions, quoteTimingOptions } from "@/lib/data/services";

/** Unselected <select>s and empty inputs arrive as "", which should mean "not provided". */
const optional = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((value) => (value === "" ? undefined : value), schema.optional());

export const quoteRequestSchema = z.object({
  name: z.string().trim().min(2, "Please add your name").max(80),
  phone: z
    .string()
    .trim()
    .transform((value) => value.replace(/[^\d+]/g, ""))
    .refine((digits) => /^\+?1?\d{10}$/.test(digits), "Enter a 10-digit phone number"),
  email: z.string().trim().toLowerCase().email("Enter a valid email address"),
  zip: optional(z.string().trim().regex(/^\d{5}$/, "Enter a 5-digit ZIP code")),
  service: optional(z.enum(quoteServiceOptions)),
  timing: optional(z.enum(quoteTimingOptions)),
  details: z.string().trim().max(2000, "Keep it under 2,000 characters").default(""),
  /** Neighborhood page the request came from, for lead attribution. */
  area: optional(z.string().max(40)),
  /** Honeypot: real visitors never see or fill this field. */
  company: z.string().optional(),
});

export type QuoteRequestInput = z.input<typeof quoteRequestSchema>;
export type QuoteRequest = z.output<typeof quoteRequestSchema>;
