import type { CSSProperties } from "react";
import { Arrow } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { reviewStats, reviews } from "@/lib/data/content";
import { QUOTE_ANCHOR, siteConfig } from "@/lib/site";
import type { Review } from "@/types/content";

const STARS = "★★★★★";

function ReviewCard({ review, hidden = false }: { review: Review; hidden?: boolean }) {
  return (
    <div className="rev-card" aria-hidden={hidden || undefined}>
      <div className="rc-stars">{STARS}</div>
      <p>{review.body}</p>
      <div className="rc-meta">
        <span className="rc-name">{review.name}</span>
        <span className="rc-src">{review.source}</span>
      </div>
    </div>
  );
}

/** Rating stats plus an infinite marquee; the second copy of the row is hidden from AT. */
export function Reviews({ title = "Trusted by LA homeowners and property managers." }: { title?: string }) {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <div className="rev-head">
          <SectionHead eyebrow="Reviews" title={title} />
          <a className="btn-ghost" href={QUOTE_ANCHOR}>
            Get your own quote <Arrow />
          </a>
        </div>
        <div className="rev-stats">
          <div className="rev-score">
            <b>{siteConfig.rating.value}</b>
            <span className="rev-stars">{STARS}</span>
          </div>
          {reviewStats.map((stat) => (
            <div className="rev-stat" key={stat.value}>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rev-marquee">
        <div className="rev-row" style={{ "--rev-dur": "90s" } as CSSProperties}>
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
          {reviews.map((review) => (
            <ReviewCard key={`${review.name}-loop`} review={review} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
