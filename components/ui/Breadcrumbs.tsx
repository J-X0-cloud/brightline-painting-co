import Link from "next/link";
import { Fragment } from "react";
import type { Link as Crumb } from "@/types/content";

export function Breadcrumbs({ trail, current }: { trail: Crumb[]; current: string }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {trail.map((crumb) => (
        <Fragment key={crumb.href}>
          <Link href={crumb.href}>{crumb.label}</Link>
          <span>/</span>
        </Fragment>
      ))}
      <b aria-current="page">{current}</b>
    </nav>
  );
}
