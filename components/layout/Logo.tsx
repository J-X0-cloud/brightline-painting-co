import Link from "next/link";

type LogoProps = {
  /** "light" is the header (navy tile), "dark" the footer (sun tile). */
  tone?: "light" | "dark";
  className?: string;
};

export function Logo({ tone = "light", className = "logo" }: LogoProps) {
  const tile = tone === "light" ? "#17423a" : "#f3b73d";
  const sun = tone === "light" ? "#f3b73d" : "#17423a";
  const tagline = tone === "light" ? "#b07a12" : "#f3b73d";

  return (
    <Link href="/" className={className} aria-label="Brightline Painting Co. home">
      <svg className="wordmark" viewBox="0 0 236 48" role="img" aria-label="Brightline Painting Co.">
        <rect x="0" y="4" width="40" height="40" rx="11" fill={tile} />
        <path d="M10.5 30a9.5 9.5 0 0 1 19 0z" fill={sun} />
        <path
          d="M20 12.5v3.2M11.3 16.1l2.2 2.2M28.7 16.1l-2.2 2.2"
          stroke={sun}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <rect x="7.5" y="32.5" width="25" height="3.2" rx="1.6" fill={sun} />
        <text
          x="51"
          y="27"
          fontFamily="Inter,system-ui,sans-serif"
          fontWeight="800"
          fontSize="23"
          letterSpacing="-0.6"
          fill="currentColor"
        >
          Brightline
        </text>
        <text
          x="52"
          y="41.5"
          fontFamily="Inter,system-ui,sans-serif"
          fontWeight="700"
          fontSize="10"
          letterSpacing="2.6"
          fill={tagline}
        >
          PAINTING CO.
        </text>
      </svg>
    </Link>
  );
}
