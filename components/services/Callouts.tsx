import { ArrowLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Callouts() {
  return (
    <div className="callouts">
      <div className="callout">
        <Icon name="shield-tick" className="c-ico" />
        <div>
          <h4>EPA Lead-Safe Certified</h4>
          <p>Containment, cleanup, and verification on every home built before 1978.</p>
          <ArrowLink href="/service-areas/pasadena">Older homes in Pasadena</ArrowLink>
        </div>
      </div>
      <div className="callout">
        <Icon name="medal" className="c-ico" />
        <div>
          <h4>5-Year Workmanship Warranty</h4>
          <p>Every residential project is backed in writing, with no surprise change orders.</p>
          <ArrowLink href="/#why">Why Brightline</ArrowLink>
        </div>
      </div>
    </div>
  );
}
