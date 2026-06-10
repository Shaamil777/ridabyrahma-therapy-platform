"use client";

import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  /** Small uppercase label above the title */
  label: string;
  /** Main heading text */
  title: string;
  /** Optional subtitle below the title */
  subtitle?: string;
  /** Alignment. Default: "center" */
  alignment?: "center" | "left";
  /** Additional class for the outer wrapper */
  className?: string;
  /** Whether to show divider lines around the label. Default: true */
  showDividers?: boolean;
}

/**
 * Consistent section header pattern used across all major sections.
 * Renders: divider lines → label → large title → optional subtitle.
 *
 * @example
 * <SectionHeader
 *   label="What We Offer"
 *   title="Our Services"
 *   subtitle="Explore our range of therapy options."
 * />
 */
export default function SectionHeader({
  label,
  title,
  subtitle,
  alignment = "center",
  className = "",
  showDividers = true,
}: SectionHeaderProps) {
  const isCenter = alignment === "center";

  return (
    <FadeIn
      className={`${isCenter ? "text-center" : "text-left"} ${className}`}
    >
      {/* Label with divider lines */}
      <div
        className={`flex items-center gap-5 mb-6 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        {showDividers && (
          <div
            className="w-12 h-px"
            style={{ background: "var(--border-subtle)" }}
          />
        )}
        <span
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          {label}
        </span>
        {showDividers && (
          <div
            className={`h-px ${isCenter ? "w-12" : "flex-1"}`}
            style={{ background: "var(--border-subtle)" }}
          />
        )}
      </div>

      {/* Title */}
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-bold ${subtitle ? "mb-6" : ""}`}
        style={{
          fontFamily: "var(--font-cormorant-garamond)",
          color: "var(--primary)",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p
          className={`text-lg md:text-xl ${isCenter ? "max-w-2xl mx-auto" : "max-w-sm"}`}
          style={{ color: "var(--text-secondary)" }}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
