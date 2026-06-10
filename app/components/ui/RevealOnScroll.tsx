"use client";

import { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  /** If true, also slides up when revealing. Default: false */
  slideUp?: boolean;
  /** IntersectionObserver threshold. Default: 0.1 */
  threshold?: number;
  /** IntersectionObserver root margin. Default: "-50px" */
  rootMargin?: string;
}

/**
 * Lightweight scroll-reveal wrapper using native IntersectionObserver
 * (no framer-motion dependency). For heavier animations, use FadeIn instead.
 *
 * @example
 * <RevealOnScroll slideUp>
 *   <div>Revealed content</div>
 * </RevealOnScroll>
 */
export default function RevealOnScroll({
  children,
  className = "",
  slideUp = false,
  threshold = 0.1,
  rootMargin = "-50px",
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const baseClasses = `duration-700 ease-out h-full ${slideUp ? "transform-gpu" : ""}`;
  const transitionClass = slideUp ? "transition-[opacity,transform]" : "transition-opacity";
  const hiddenClasses = slideUp ? "opacity-0 translate-y-8" : "opacity-0";
  const visibleClasses = slideUp ? "opacity-100 translate-y-0" : "opacity-100";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${transitionClass} ${isVisible ? visibleClasses : hiddenClasses} ${className}`}
      style={slideUp ? { willChange: "opacity, transform" } : {}}
    >
      {children}
    </div>
  );
}
