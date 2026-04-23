import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function BrandMark(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2.6" />
      <path
        d="M24 20h18v4H29v16c0 4.2 2.6 6.3 6.1 6.3 3.3 0 5.4-1.5 7-3.8l3.2 2.8C42.8 49.2 39.4 52 34 52c-7.3 0-11-4.5-11-11.7V20Z"
        fill="currentColor"
      />
      <path d="M17 30h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2.6" />
    </svg>
  );
}

export function SuiteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 13V8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M4 13h16v4.5H4V13Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M7 13V9.8a1.8 1.8 0 0 1 1.8-1.8h2.4A1.8 1.8 0 0 1 13 9.8V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M4 17.5V20M20 17.5V20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export function PulseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3 12h4l2.1-4.2L12 16l2.6-5.2H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <rect x="3" y="4" width="18" height="16" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="m18.5 15 0.9 2.4L22 18.3l-2.6 0.9-0.9 2.4-0.9-2.4-2.6-0.9 2.6-0.9 0.9-2.4Z" fill="currentColor" />
      <path d="M5 15h4M3 19h6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m14.8 9.2-2.6 5.6-3-2.8 5.6-2.8Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3.2 5.5 5.8v5.1c0 4.7 2.8 8.8 6.5 10 3.7-1.2 6.5-5.3 6.5-10V5.8L12 3.2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="m9.4 12.2 1.8 1.8 3.6-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function TrophyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8 4h8v3.8A4 4 0 0 1 12 12a4 4 0 0 1-4-4.2V4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M16 5h2a2 2 0 0 1 2 2c0 2.4-1.6 4-4 4M8 5H6a2 2 0 0 0-2 2c0 2.4 1.6 4 4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M12 12v3.2M9 20h6M10 15.2h4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export function EnvelopeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m5 8 7 5 7-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 21s6-4.8 6-10a6 6 0 1 0-12 0c0 5.2 6 10 6 10Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <circle cx="12" cy="11" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}