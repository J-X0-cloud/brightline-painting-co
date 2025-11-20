import { Icon } from "@/components/ui/Icon";
import { trustBadges } from "@/lib/data/content";

export function TrustRow() {
  return (
    <div className="trust-row">
      {trustBadges.map((badge) => (
        <div className="trust-item" key={badge.label}>
          <Icon name={badge.icon} /> {badge.label}
        </div>
      ))}
    </div>
  );
}

/** Trust band under inner-page heroes. */
export function TrustBand() {
  return (
    <div className="svc-trustband">
      <div className="wrap">
        <TrustRow />
      </div>
    </div>
  );
}
