import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light"; // "dark" for white backgrounds (navbar), "light" for dark backgrounds (footer)
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  className?: string;
  asLink?: boolean;
}

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A5F" />
          <stop offset="100%" stopColor="#0F2847" />
        </linearGradient>
        <linearGradient id="logo-orange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A45" />
          <stop offset="100%" stopColor="#FF5722" />
        </linearGradient>
      </defs>

      {/* Squircle container */}
      <rect
        x="4"
        y="4"
        width="120"
        height="120"
        rx="28"
        fill="url(#logo-bg)"
        stroke="#2563EB"
        strokeWidth="3"
        strokeOpacity="0.35"
      />

      {/* Ambient center light */}
      <circle cx="64" cy="20" r="40" fill="#2563EB" opacity="0.15" />

      {/* "L" in White */}
      <path
        d="M30 36 C30 32.686 32.686 30 36 30 L44 30 C47.314 30 50 32.686 50 36 L50 80 L66 80 C69.314 80 72 82.686 72 86 L72 92 C72 95.314 69.314 98 66 98 L36 98 C32.686 98 30 95.314 30 92 Z"
        fill="#FFFFFF"
      />

      {/* "B" in Signature Orange */}
      <path
        d="M68 36 C68 32.686 70.686 30 74 30 L90 30 C99.941 30 108 38.059 108 48 C108 53.6 105.42 58.6 101.4 61.8 C106.6 65.2 110 71.2 110 78 C110 89.046 101.046 98 90 98 L74 98 C70.686 98 68 95.314 68 92 Z M84 44 L84 57 L90 57 C93.3 57 96 54.3 96 50.5 C96 46.7 93.3 44 90 44 Z M84 71 L84 84 L91 84 C94.5 84 97.5 81 97.5 77.5 C97.5 74 94.5 71 91 71 Z"
        fill="url(#logo-orange)"
      />

      {/* Bridge connector node */}
      <circle cx="61" cy="89" r="4.5" fill="#FFB020" />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  size = "md",
  showSubtitle = true,
  className = "",
  asLink = true,
}: LogoProps) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-9 w-9",
    lg: "h-11 w-11",
  }[size];

  const content = (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <div className="relative shadow-sm transition-transform hover:scale-105">
        <LogoMark className={sizeClasses} />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center">
          <span
            className={cn(
              "text-xl font-black tracking-tight leading-none",
              isLight ? "text-white" : "text-near-black"
            )}
          >
            Lead<span className="text-orange">Bridge</span>
          </span>
          <span
            className={cn(
              "ml-1.5 rounded px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wide",
              isLight
                ? "bg-white/15 text-white"
                : "bg-navy/10 text-navy"
            )}
          >
            NCR
          </span>
        </div>

        {showSubtitle && (
          <span
            className={cn(
              "text-[10px] font-medium tracking-wide mt-0.5",
              isLight ? "text-white/60" : "text-medium-gray"
            )}
          >
            Outbound for Recruitment Agencies
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" className="group" aria-label="LeadBridge NCR Home">
        {content}
      </Link>
    );
  }

  return content;
}
