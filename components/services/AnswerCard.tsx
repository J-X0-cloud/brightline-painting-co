import { Icon } from "@/components/ui/Icon";

/** Plain-language summary near the top of the page, written to be quotable by search. */
export function AnswerCard() {
  return (
    <section className="svc-answer">
      <div className="wrap">
        <div className="answer-card">
          <span className="a-label">
            <Icon name="info" size={16} /> What Brightline does
          </span>
          <p>
            Brightline Painting Co. offers interior, exterior, whole-home, cabinet, commercial, and
            HOA and multifamily painting, plus stucco repair and elastomeric coatings, wood and trim
            repair, drywall repair, pressure washing, and color consultation across Los Angeles.
            Every project is run by a dedicated crew lead and priced with an itemized written quote,
            and residential work is backed by a <strong>5-year workmanship warranty</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
