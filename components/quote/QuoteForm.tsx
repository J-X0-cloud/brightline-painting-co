"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { postJson } from "@/lib/api-client";
import { quoteServiceOptions, quoteTimingOptions } from "@/lib/data/services";
import type { QuoteReceipt } from "@/lib/leads";
import { siteConfig } from "@/lib/site";
import { quoteRequestSchema } from "@/lib/validation/quote";

type Errors = Partial<Record<string, string>>;

const firstErrors = (fieldErrors: Record<string, string[] | undefined> = {}): Errors =>
  Object.fromEntries(Object.entries(fieldErrors).map(([key, messages]) => [key, messages?.[0]]));

export function QuoteForm({ areaSlug }: { areaSlug?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [receipt, setReceipt] = useState<QuoteReceipt | null>(null);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    const parsed = quoteRequestSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(firstErrors(parsed.error.flatten().fieldErrors));
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setStatus("sending");
    const result = await postJson<QuoteReceipt>("/api/quote", values);
    if (result.ok) {
      setStatus("sent");
      setReceipt(result.data);
      form.reset();
    } else {
      setErrors(firstErrors(result.fieldErrors));
      setStatus("error");
      setMessage(result.error);
    }
  }

  const invalid = (field: string) =>
    errors[field] ? { "aria-invalid": true, "aria-describedby": `quote-${field}-error` } : {};

  const fieldError = (field: string) =>
    errors[field] ? (
      <span className="cta-error" id={`quote-${field}-error`}>
        {errors[field]}
      </span>
    ) : null;

  return (
    <form className="cta-form" onSubmit={handleSubmit} noValidate>
      <h3>Request your free quote</h3>
      <div className="frow">
        <div className="cta-cell">
          <input className="cta-field" type="text" name="name" placeholder="Name" aria-label="Name" autoComplete="name" required {...invalid("name")} />
          {fieldError("name")}
        </div>
        <div className="cta-cell">
          <input className="cta-field" type="tel" name="phone" placeholder="Phone" aria-label="Phone" autoComplete="tel" required {...invalid("phone")} />
          {fieldError("phone")}
        </div>
      </div>
      <div className="frow">
        <div className="cta-cell">
          <input className="cta-field" type="email" name="email" placeholder="Email" aria-label="Email" autoComplete="email" required {...invalid("email")} />
          {fieldError("email")}
        </div>
        <div className="cta-cell">
          <input
            className="cta-field"
            type="text"
            name="zip"
            inputMode="numeric"
            maxLength={5}
            placeholder="ZIP code"
            aria-label="Project ZIP code"
            autoComplete="postal-code"
            {...invalid("zip")}
          />
          {fieldError("zip")}
        </div>
      </div>
      <select className="cta-field" name="service" aria-label="Service needed" defaultValue="">
        <option value="" disabled>
          Service needed
        </option>
        {quoteServiceOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <select className="cta-field" name="timing" aria-label="When would you like to start?" defaultValue="">
        <option value="" disabled>
          When would you like to start?
        </option>
        {quoteTimingOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <textarea className="cta-field" name="details" rows={3} placeholder="Tell us about your project" aria-label="Project details" />
      {areaSlug ? <input type="hidden" name="area" value={areaSlug} /> : null}
      <div className="hp" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button className="cta-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request my free quote"}
      </button>
      <p className="cta-note" role="status">
        {status === "sent" && receipt ? (
          <>
            {receipt.message} Your reference is {receipt.reference}.
            {receipt.area ? (
              <>
                {" "}
                While you wait, see our <Link href={receipt.area.href}>work in {receipt.area.name}</Link>.
              </>
            ) : null}
          </>
        ) : status === "error" ? (
          message
        ) : (
          <>
            We reply within one business day. Prefer email?{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </>
        )}
      </p>
    </form>
  );
}
