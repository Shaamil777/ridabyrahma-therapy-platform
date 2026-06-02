"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ─── Fade-in block ─── */
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    title: "INDIVIDUAL THERAPY",
    shortDescription: "Personalized one-on-one sessions for your mental wellness journey.",
    description:
      "One-on-one sessions tailored to your specific needs, focusing on personal growth, anxiety, depression, and trauma recovery.",
    image: "/services/individual-therapy.png",
  },
  {
    title: "COUPLES COUNSELING",
    shortDescription: "Strengthen your relationship through guided communication.",
    description:
      "Work through relationship challenges, improve communication, and strengthen your bond in a supportive, neutral environment.",
    image: "/services/couples-counseling.png",
  },
  {
    title: "GROUP THERAPY",
    shortDescription: "Heal together in a safe, supportive community setting.",
    description:
      "Connect with others facing similar struggles in a safe, guided setting. Share experiences and learn from collective wisdom.",
    image: "/services/group-therapy.png",
  },
  {
    title: "ONLINE CONSULTATIONS",
    shortDescription: "Professional support from the comfort of your home.",
    description:
      "Access professional support from the comfort of your home with our secure and confidential teletherapy platform.",
    image: "/services/online-consultation.png",
  },
  {
    title: "CHILD & TEEN THERAPY",
    shortDescription: "Specialized care for young minds navigating life's challenges.",
    description:
      "Specialized approaches to help adolescents navigate anxiety, bullying, academic pressure, and developmental transitions.",
    image: "/services/child-therapy.png",
  },
  {
    title: "STRESS MANAGEMENT",
    shortDescription: "Evidence-based techniques to reclaim your inner calm.",
    description:
      "Learn evidence-based techniques to cope with workplace stress, prevent burnout, and balance your daily responsibilities.",
    image: "/services/stress-management.png",
  },
];

export default function ServiceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="service"
      className="relative w-full overflow-hidden"
      style={{
        background: "var(--background)",
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
      }}
    >
      {/* Subtle radial gradient background accents */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, var(--calm-accent) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      {/* ── Section Header ── */}
      <div className="section-container relative z-10 mb-16 md:mb-20">
        <FadeIn className="text-center">
          {/* Label with extending line */}
          <div className="flex items-center justify-center gap-5 mb-6">
            <div
              className="w-12 h-px"
              style={{ background: "var(--border-subtle)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              What We Offer
            </span>
            <div
              className="w-12 h-px"
              style={{ background: "var(--border-subtle)" }}
            />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              color: "var(--primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Our Services
          </h2>
        </FadeIn>
      </div>

      {/* ── Vertical Hover Accordion List ── */}
      <div className="section-container relative z-10">
        <div className="flex flex-col gap-2">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const number = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden"
                style={{
                  borderRadius: isHovered ? "1rem" : "0.75rem",
                  borderBottom: isHovered ? "none" : "1px solid var(--border-subtle)",
                  boxShadow: isHovered
                    ? "0 16px 48px rgba(31,31,31,0.18), 0 0 0 1px rgba(122,158,159,0.15), inset 0 1px 0 rgba(255,255,255,0.05)"
                    : "none",
                  minHeight: isHovered ? "240px" : "auto",
                  transition: "border-radius 0.7s cubic-bezier(0.16, 1, 0.3, 1), border-bottom 0.7s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.7s cubic-bezier(0.16, 1, 0.3, 1), min-height 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Dark background sweep-in from left */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "var(--primary)",
                    borderRadius: "inherit",
                    transformOrigin: "left center",
                    transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                    transition: "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />

                {/* Subtle gradient sheen on dark hover bg */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(122,158,159,0.1) 0%, transparent 50%, rgba(106,142,143,0.05) 100%)",
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
                  }}
                />

                <div
                  className="relative z-10 flex flex-col items-start lg:pr-[420px] pl-6 md:pl-10"
                  style={{
                    paddingTop: isHovered ? "2rem" : "1.5rem",
                    paddingBottom: isHovered ? "2rem" : "1.5rem",
                    transition: "padding 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Top row: Number + Title */}
                  <div className="flex items-baseline gap-4 md:gap-6 flex-wrap">
                    {/* Number */}
                    <span
                      className="text-sm font-semibold tracking-widest shrink-0"
                      style={{
                        color: isHovered
                          ? "var(--accent)"
                          : "rgba(31,31,31,0.18)",
                        transition: "color 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      {number}
                    </span>

                    {/* Title */}
                    <h3
                      className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide"
                      style={{
                        fontFamily: "var(--font-cormorant-garamond)",
                        color: isHovered ? "#FFFFFF" : "var(--primary)",
                        transform: isHovered ? "translateX(4px)" : "translateX(0)",
                        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Short Description — visible when NOT hovered */}
                  <p
                    className="text-sm md:text-[15px] mt-2 ml-0 md:ml-[calc(0.875rem+1.5rem)]"
                    style={{
                      color: "var(--text-secondary)",
                      fontStyle: "italic",
                      opacity: isHovered ? 0 : 0.8,
                      maxHeight: isHovered ? 0 : "3rem",
                      overflow: "hidden",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {service.shortDescription}
                  </p>

                  {/* Full Description — expand on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 14 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden max-w-lg ml-0 md:ml-[calc(0.875rem+1.5rem)]"
                      >
                        <p
                          className="text-[15px] leading-relaxed"
                          style={{ color: "rgba(255,255,255,0.75)" }}
                        >
                          {service.description}
                        </p>

                        {/* Learn more link */}
                        <span
                          className="inline-flex items-center gap-2 mt-4 text-sm font-semibold tracking-wide uppercase"
                          style={{ color: "var(--accent)" }}
                        >
                          Learn more
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Floating Image — ONLY on hover (Desktop) */}
                <div
                  className="hidden lg:block absolute top-1/2 overflow-hidden pointer-events-none"
                  style={{
                    right: "2rem",
                    width: "320px",
                    height: "200px",
                    opacity: isHovered ? 1 : 0,
                    visibility: isHovered ? "visible" : "hidden",
                    transform: isHovered
                      ? "translateY(-50%) translateX(0) scale(1)"
                      : "translateY(-50%) translateX(30px) scale(0.9)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08)",
                    borderRadius: "0.875rem",
                    zIndex: 20,
                    transition: "all 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      transform: isHovered ? "scale(1)" : "scale(1.15)",
                      transition: "transform 0.7s cubic-bezier(0.19, 1, 0.22, 1)",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="340px"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="section-container mt-16 md:mt-20 flex justify-center pb-8 relative z-10">
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "var(--accent)",
            color: "var(--background)",
            boxShadow: "0 4px 20px rgba(122, 158, 159, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--calm-accent)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(106, 142, 143, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(122, 158, 159, 0.3)";
          }}
        >
          Book a Consultation
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}