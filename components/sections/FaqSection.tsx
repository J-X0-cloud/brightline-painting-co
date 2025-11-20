import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site";
import type { Faq } from "@/types/content";

/** Exclusive accordion (native `<details name>`), first item open. */
export function FaqSection({ title, faqs }: { title: string; faqs: Faq[] }) {
  return (
    <section className="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div className="faq-lead">
            <span className="eyebrow">FAQ</span>
            <h2>{title}</h2>
            <p>
              Still weighing your project? Call, text, or send a note and a real person on our team
              will get back to you the same business day.
            </p>
            <a className="btn-ghost" href={`mailto:${siteConfig.email}`}>
              Email us <Arrow />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" name="faq" open={index === 0} key={faq.question}>
                <summary>
                  <span className="faq-q">{faq.question}</span>
                  <Icon name="chevron-down" className="faq-chev" />
                </summary>
                <div className="faq-a">
                  {faq.answer}
                  {faq.link ? (
                    <>
                      {" "}
                      <Link href={faq.link.href}>{faq.link.label}</Link>.
                    </>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
