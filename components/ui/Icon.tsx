import type { ReactNode, SVGProps } from "react";

/** Line icons used across the site, drawn on a 24px grid. */
const icons = {
  phone: {
    strokeWidth: 2.2,
    body: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </>
    ),
  },
  "chevron-down": {
    strokeWidth: 2,
    body: (
      <>
        <path d="M6 9l6 6 6-6" />
      </>
    ),
  },
  "chevron-left": {
    strokeWidth: 2,
    body: (
      <>
        <path d="M15 18l-6-6 6-6" />
      </>
    ),
  },
  "chevron-right": {
    strokeWidth: 2,
    body: (
      <>
        <path d="M9 6l6 6-6 6" />
      </>
    ),
  },
  "arrow-up-right": {
    strokeWidth: 2.2,
    body: (
      <>
        <path d="M7 17 17 7M9 7h8v8" />
      </>
    ),
  },
  star: {
    strokeWidth: 1.7,
    body: (
      <>
        <path d="M12 3.5l2.5 5.1 5.6.8-4.05 3.95.95 5.55L12 16.85l-5.05 2.55.95-5.55L3.85 9.4l5.6-.8z" />
      </>
    ),
  },
  "shield-check": {
    strokeWidth: 1.7,
    body: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6z" />
        <path d="M8.8 12l2.2 2.2 4.2-4.4" />
      </>
    ),
  },
  award: {
    strokeWidth: 1.7,
    body: (
      <>
        <circle cx="12" cy="9.5" r="6" />
        <path d="M9.3 9.5l1.9 1.9 3.6-3.8" />
        <path d="M8.4 14.7 6.6 21 12 18.2 17.4 21l-1.8-6.3" />
      </>
    ),
  },
  trophy: {
    strokeWidth: 1.7,
    body: (
      <>
        <path d="M7 4h10v4a5 5 0 0 1-10 0z" />
        <path d="M7 6H4.5v1.4A3.5 3.5 0 0 0 8 10.9M17 6h2.5v1.4A3.5 3.5 0 0 1 16 10.9" />
        <path d="M12 13v3.5M8.5 20.5h7l-.6-2.4a1 1 0 0 0-1-.75h-3.8a1 1 0 0 0-1 .75z" />
      </>
    ),
  },
  "leaf-building": {
    strokeWidth: 1.7,
    body: (
      <>
        <path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17M3 21h18M10 7h.01M14 7h.01M10 11h.01M14 11h.01M10.5 21v-3.5h3V21" />
      </>
    ),
  },
  home: {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M3 10.5 12 3l9 7.5M5 9.5V20h14V9.5M10 20v-5h4v5" />
      </>
    ),
  },
  cabinet: {
    strokeWidth: 1.6,
    body: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M12 3v18M9.3 8.5h.01M14.7 8.5h.01" />
      </>
    ),
  },
  stucco: {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M3 21h18M5 21V7l6-3v17M11 21V11l6-2v12" />
      </>
    ),
  },
  fence: {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M4.5 21V8M9.5 21V8M14.5 21V8M19.5 21V8" />
        <path d="M3 8l1.5-2 1.5 2M8 8l1.5-2 1.5 2M13 8l1.5-2 1.5 2M18 8l1.5-2 1.5 2" />
        <path d="M2 13h20M2 17h20" />
      </>
    ),
  },
  "clipboard-check": {
    strokeWidth: 1.6,
    body: (
      <>
        <rect x="5.5" y="4" width="13" height="16" rx="2" />
        <path d="M9 4.5h6" />
        <path d="M9 13l2 2 4-4.2" />
      </>
    ),
  },
  message: {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M5 5h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9l-4 4V6a1 1 0 0 1 1-1Z" />
        <path d="M8.5 9h7M8.5 12h4" />
      </>
    ),
  },
  roller: {
    strokeWidth: 1.6,
    body: (
      <>
        <rect x="3.5" y="4.5" width="12" height="5" rx="1.2" />
        <path d="M15.5 7H19a1.5 1.5 0 0 1 1.5 1.5V10a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 0 10.5 13v1.6" />
        <rect x="9" y="14.6" width="3" height="4.4" rx=".8" />
      </>
    ),
  },
  tag: {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M20.5 13.3 13.3 20.5a1.6 1.6 0 0 1-2.26 0l-7.04-7.04a1.6 1.6 0 0 1-.47-1.13V5.6A1.6 1.6 0 0 1 5.13 4h6.73a1.6 1.6 0 0 1 1.13.47l7.51 7.51a1.6 1.6 0 0 1 0 2.26Z" />
        <circle cx="8" cy="8" r="1.3" />
      </>
    ),
  },
  "map-pin": {
    strokeWidth: 1.8,
    body: (
      <>
        <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  mail: {
    strokeWidth: 1.8,
    body: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  clock: {
    strokeWidth: 1.8,
    body: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  instagram: {
    strokeWidth: 1.8,
    body: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  info: {
    strokeWidth: 1.8,
    body: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 16v-4M12 8h.01" />
      </>
    ),
  },
  building: {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6" />
      </>
    ),
  },
  "house-outline": {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M3 10.5 12 3l9 7.5M5 9.5V20h14V9.5" />
      </>
    ),
  },
  "house-door": {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </>
    ),
  },
  office: {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M3 21h18M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M10 8h.01M14 8h.01M10 12h.01M14 12h.01" />
      </>
    ),
  },
  apartments: {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M3 21h18M5 21V7l6-3v17M11 21V11l6-2v12M8 10h.01M8 14h.01" />
      </>
    ),
  },
  shield: {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7z" />
      </>
    ),
  },
  pencil: {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M14 4l6 6M3 21l1-4L16 5l3 3L7 20z" />
      </>
    ),
  },
  drywall: {
    strokeWidth: 1.6,
    body: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M3 9h18M9 3v18" />
      </>
    ),
  },
  spray: {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M12 3v3" />
        <path d="M7 6h10l-1.5 3.5h-7z" />
        <path d="M9 13l-.6 2.2M12 14v2.2M15 13l.6 2.2M10.5 17.2l-.4 1.8M13.5 17.2l.4 1.8" />
      </>
    ),
  },
  palette: {
    strokeWidth: 1.6,
    body: (
      <>
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="10.5" r="2.5" />
        <circle cx="8.5" cy="7.5" r="2.5" />
        <circle cx="6.5" cy="12.5" r="2.5" />
        <path d="M12 22a10 10 0 1 1 0-20c5 0 9 4 9 8 0 3-2 4-4 4h-2a2 2 0 0 0-1.5 3.3A2 2 0 0 1 12 22z" />
      </>
    ),
  },
  "shield-tick": {
    strokeWidth: 1.7,
    body: (
      <>
        <path d="M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  medal: {
    strokeWidth: 1.7,
    body: (
      <>
        <circle cx="12" cy="9" r="6" />
        <path d="M9.2 9l1.9 1.9 3.7-3.9M8 14.2 6.5 21 12 18l5.5 3-1.5-6.8" />
      </>
    ),
  },
  window: {
    strokeWidth: 1.6,
    body: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="1.5" />
        <path d="M3 10h18M9 4v6M15 10v10" />
      </>
    ),
  },
  wrench: {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6Z" />
      </>
    ),
  },
  bricks: {
    strokeWidth: 1.6,
    body: (
      <>
        <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
        <path d="M3.5 9.5h17M3.5 14.5h17M9 4.5v5M15 9.5v5M9 14.5v5" />
      </>
    ),
  },
  storefront: {
    strokeWidth: 1.6,
    body: (
      <>
        <path d="M3 21h18M5 21V5h11v16M16 21V9h3v12M8 9h2M11.5 9h.5M8 13h2M11.5 13h.5" />
      </>
    ),
  },
} satisfies Record<string, { strokeWidth: number; body: ReactNode }>;

export type IconName = keyof typeof icons;

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & { name: IconName; size?: number };

export function Icon({ name, size, strokeWidth, ...props }: IconProps) {
  const icon = icons[name];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? icon.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {icon.body}
    </svg>
  );
}

/** Facebook "f" mark; a filled glyph rather than a line icon. */
export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="7 4.5 10 16" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.5 8.5H17V5.5h-2.5C12.6 5.5 11 7.1 11 9v2H8.5v3H11v6h3v-6h2.3l.5-3H14V9.2c0-.4.3-.7.7-.7z" />
    </svg>
  );
}
