import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  variant?: "cta" | "ghost";
  size?: "md" | "lg";
  /** Ghost button sitting on a photo or dark band. */
  onPhoto?: boolean;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "cta",
  size = "md",
  onPhoto = false,
  className,
  children,
}: ButtonLinkProps) {
  const classes = clsx(
    variant === "cta" ? "btn-cta" : "btn-ghost",
    size === "lg" && "btn-lg",
    onPhoto && "btn-ghost--on-photo",
    className,
  );
  if (/^(tel:|mailto:|https?:)/.test(href)) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }
  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}

/** Text link with a trailing arrow. */
export function ArrowLink({ href, className = "arrow-link", children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <Link className={className} href={href}>
      {children} <Arrow />
    </Link>
  );
}

export function Arrow() {
  return <span className="arr">→</span>;
}
