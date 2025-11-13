import type { ReactNode } from "react";

type SectionHeadProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
};

export function SectionHead({ eyebrow, title, lede }: SectionHeadProps) {
  return (
    <div className="sec-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lede ? <p>{lede}</p> : null}
    </div>
  );
}
