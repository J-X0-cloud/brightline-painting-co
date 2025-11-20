import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";

type Tile = { title: string; body: string; icon: IconName; href: string };

/** Compact icon tiles (`.svc-mini`) used on the home page and neighborhood pages. */
export function ServiceTiles({ tiles, className }: { tiles: Tile[]; className?: string }) {
  return (
    <div className={className ? `svc-compact ${className}` : "svc-compact"}>
      {tiles.map((tile) => (
        <Link className="svc-mini" href={tile.href} key={tile.title}>
          <Icon name={tile.icon} size={26} />
          <h4>{tile.title}</h4>
          <p>{tile.body}</p>
        </Link>
      ))}
    </div>
  );
}
