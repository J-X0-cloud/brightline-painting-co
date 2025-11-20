import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

type LegalPageProps = { title: string; updated: string; children: ReactNode };

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <section className="legal">
      <div className="wrap">
        <Breadcrumbs trail={[{ label: "Home", href: "/" }]} current={title} />
        <h1>{title}</h1>
        <p className="legal-updated">Last updated {updated}</p>
        <div className="legal-body">{children}</div>
      </div>
    </section>
  );
}
