import clsx from "clsx";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { SectionHead } from "@/components/ui/SectionHead";
import { servicesIn } from "@/lib/data/services";
import type { ServiceCategory } from "@/types/content";

type Props = {
  id: ServiceCategory;
  eyebrow: string;
  title: string;
  alt?: boolean;
  children?: ReactNode;
};

export function ServiceCategorySection({ id, eyebrow, title, alt = false, children }: Props) {
  const services = servicesIn(id);

  return (
    <section className={clsx("svc-section", alt && "alt")} id={id}>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className={clsx("cost-grid", services.length === 2 && "cost-grid--2")}>
          {services.map((service) => (
            <div className="cost-card svc-link-card" key={service.slug} id={service.slug}>
              <span className="cost-ico">
                <Icon name={service.icon} size={22} />
              </span>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
