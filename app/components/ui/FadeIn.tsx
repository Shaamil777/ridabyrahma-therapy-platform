"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { UseInViewOptions } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the animation starts */
  delay?: number;
  /** Direction the element slides in from. Default: "up" */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Vertical/horizontal offset distance in pixels. Default: 30 */
  distance?: number;
  /** IntersectionObserver root margin. Default: "-40px" */
  margin?: UseInViewOptions["margin"];
  /** Animation duration in seconds. Default: 0.7 */
  duration?: number;
}

/**
 * Shared scroll-triggered fade-in animation wrapper using framer-motion.
 * Replaces duplicated FadeIn / FadeInBlock components across sections.
 *
 * @example
 * <FadeIn delay={0.2} direction="up">
 *   <h2>Content</h2>
 * </FadeIn>
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
  margin = "-40px",
  duration = 0.7,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin });

  const offsets = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
