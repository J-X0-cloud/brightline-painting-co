import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { whyPoints } from "@/lib/data/content";

const media = [
  {
    className: "m-tall",
    src: "/images/coastal-white-home.webp",
    alt: "Two-story home with fresh white paint and black trim behind a tall hedge",
    width: 1376,
    height: 768,
  },
  {
    src: "/images/entry-hall-staircase.webp",
    alt: "Bright entry hall and staircase with freshly painted white walls",
    width: 1620,
    height: 1080,
  },
  {
    src: "/images/craftsman-green-cream.webp",
    alt: "Craftsman bungalow painted deep green with cream trim",
    width: 1376,
    height: 768,
  },
];

export function WhySection() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="why-grid">
          <div className="why-lead">
            <span className="eyebrow">Why Brightline</span>
            <h2>The careful quote beats the cheap one.</h2>
            <p className="why-intro">
              Most painting headaches start with a low number that skips the prep. Then the crew
              goes quiet, the schedule slips, and the extras pile up. We built Brightline to work the
              other way around.
            </p>
            <div className="why-points">
              {whyPoints.map((point) => (
                <div className="why-point" key={point.title}>
                  <span className="pico">
                    <Icon name={point.icon} />
                  </span>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </div>
              ))}
            </div>
            <div className="why-foot">
              <p>
                Every residential job is backed by a{" "}
                <a className="warr" href="#free-estimate">
                  5-year workmanship warranty
                </a>{" "}
                covering peeling, blistering, and flaking caused by our work.
              </p>
              <Link className="btn-ghost" href="/services">
                See what we paint <Arrow />
              </Link>
            </div>
          </div>
          <div className="why-media">
            {media.map(({ className, ...image }) => (
              <figure className={className} key={image.src}>
                <Image {...image} sizes="(max-width: 900px) 50vw, 640px" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
