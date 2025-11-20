import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import { processSteps } from "@/lib/data/content";

export function ProcessSection() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="proc-grid">
          <div className="proc-lead">
            <span className="eyebrow">Our Process</span>
            <h2>Six steps, one crew lead, zero guesswork.</h2>
            <Link className="btn-ghost btn-ghost--on-photo" href="/#free-estimate">
              Start with a walkthrough <Arrow />
            </Link>
          </div>
          <ol className="proc-timeline drawn">
            {processSteps.map((step, index) => (
              <li className="proc-step" key={step.title}>
                <div className="proc-num">{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
