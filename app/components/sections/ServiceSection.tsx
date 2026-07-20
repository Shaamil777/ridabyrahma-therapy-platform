"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { services } from "@/app/data/services";

export default function ServiceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const isAnyHovered = hoveredIndex !== null;

  return (
    <section
      id="service"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ── Default Background (common section bg) ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "var(--background)",
          transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* ── Service Background Images (crossfade and scale on hover) ── */}
      {services.map((service, index) => (
        <motion.div
          key={`bg-${index}`}
          className="absolute inset-0 z-[1]"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{
            opacity: hoveredIndex === index ? 1 : 0,
            scale: hoveredIndex === index ? 1 : 1.08,
          }}
          transition={{ 
            opacity: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 1.5, ease: [0.25, 1, 0.5, 1] } 
          }}
        >
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>
      ))}

      {/* ── Dark Overlay (only visible on hover) ── */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,12,10,0.82) 0%, rgba(20,15,12,0.65) 50%, rgba(10,8,6,0.55) 100%)",
          opacity: isAnyHovered ? 1 : 0,
          transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* ── Warm Ambient Glow (appears on hover) ── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, rgba(180,120,60,0.08) 0%, transparent 60%)",
          opacity: isAnyHovered ? 1 : 0,
          transition: "opacity 1.2s ease",
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 w-full section-container"
        style={{
          paddingTop: "clamp(4rem, 8vw, 8rem)",
          paddingBottom: "clamp(4rem, 8vw, 8rem)",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* ── LEFT SIDE: Title & Subtitle ── */}
          <div className="lg:w-[38%] flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Label */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-10 h-px"
                  style={{
                    background: isAnyHovered ? "rgba(255,255,255,0.2)" : "var(--border-subtle)",
                    transition: "background 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
                <span
                  className="text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  What We Offer
                </span>
              </div>

              {/* Title */}
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95]"
                style={{
                  fontFamily: "var(--font-cormorant-garamond)",
                  color: isAnyHovered ? "#FFFFFF" : "var(--primary)",
                  letterSpacing: "-0.02em",
                  transition: "color 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                Our
                <br />
                <span
                  style={{
                    fontSize: "1.15em",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  services
                </span>
              </h2>

              {/* Subtitle */}
              <p
                className="text-base md:text-lg mb-3 max-w-sm"
                style={{
                  color: isAnyHovered ? "rgba(255,255,255,0.7)" : "var(--text-secondary)",
                  fontFamily: "var(--font-cormorant-garamond)",
                  fontStyle: "italic",
                  letterSpacing: "0.01em",
                  lineHeight: 1.5,
                  transition: "color 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                Designed to nurture your mind 360°
              </p>

              <p
                className="text-sm max-w-xs"
                style={{
                  color: isAnyHovered ? "rgba(255,255,255,0.45)" : "var(--text-muted-color)",
                  lineHeight: 1.7,
                  transition: "color 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                Discover our individual, couples, group, and
                online therapy services tailored to your needs.
              </p>

              {/* CTA Button */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 mt-10 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-500 hover:-translate-y-0.5"
                style={{
                  background: isAnyHovered ? "rgba(255,255,255,0.08)" : "var(--accent)",
                  color: isAnyHovered ? "rgba(255,255,255,0.85)" : "#FFFFFF",
                  border: isAnyHovered ? "1px solid rgba(255,255,255,0.12)" : "1px solid var(--accent)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  if (isAnyHovered) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  } else {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.borderColor = "var(--accent)";
                  }
                }}
              >
                Book a Consultation
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT SIDE: Service List ── */}
          <div className="lg:w-[62%] w-full flex flex-col">
            {services.map((service, index) => {
                const isHovered = hoveredIndex === index;
                const number = String(index + 1).padStart(2, "0");

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.15,
                    }}
                    className="relative cursor-pointer group"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      borderBottom: isAnyHovered
                        ? "1px solid rgba(255,255,255,0.1)"
                        : "1px solid var(--border-subtle)",
                      transition: "border-color 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {/* Hover highlight bar */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 60%, transparent 100%)",
                        opacity: isHovered ? 1 : 0,
                        transition:
                          "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />

                    {/* Main row */}
                    <div
                      className="relative z-10 flex items-center justify-between"
                      style={{
                        paddingTop: "1.5rem",
                        paddingBottom: isHovered ? "0.75rem" : "1.5rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        transition:
                          "padding 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      {/* Left: number + title */}
                      <div className="flex items-baseline gap-4 md:gap-6">
                        <span
                          className="text-xs font-medium tracking-widest"
                          style={{
                            color: isHovered
                              ? "var(--accent)"
                              : isAnyHovered ? "rgba(255,255,255,0.2)" : "rgba(31,31,31,0.18)",
                            transition:
                              "color 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        >
                          ({number})
                        </span>

                        <h3
                          className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide"
                          style={{
                            fontFamily: "var(--font-cormorant-garamond)",
                            color: isHovered
                              ? "#FFFFFF"
                              : isAnyHovered ? "rgba(255,255,255,0.75)" : "var(--primary)",
                            transform: isHovered
                              ? "translateX(6px)"
                              : "translateX(0)",
                            transition:
                              "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        >
                          {service.title}
                        </h3>
                      </div>

                      {/* Right: + icon */}
                      <div
                        className="flex items-center justify-center w-8 h-8 flex-shrink-0"
                        style={{
                          color: isHovered
                            ? "#FFFFFF"
                            : isAnyHovered ? "rgba(255,255,255,0.3)" : "var(--text-muted-color)",
                          transform: isHovered
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
                          transition:
                            "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <line x1="10" y1="2" x2="10" y2="18" />
                          <line x1="2" y1="10" x2="18" y2="10" />
                        </svg>
                      </div>
                    </div>

                    {/* Expanded description */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden relative z-10"
                          style={{
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                          }}
                        >
                          <div
                            className="pb-6"
                            style={{
                              paddingLeft: "calc(0.75rem + 1.5rem + 4px)",
                            }}
                          >
                            <p
                              className="text-sm md:text-[15px] leading-relaxed max-w-md"
                              style={{ color: "rgba(255,255,255,0.6)" }}
                            >
                              {service.description}
                            </p>

                            {/* Learn more */}
                            <span
                              className="inline-flex items-center gap-2 mt-4 text-xs font-semibold tracking-[0.15em] uppercase cursor-pointer"
                              style={{ color: "var(--accent)" }}
                            >
                              Learn more
                              <svg
                                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>

      {/* ── Bottom Gradient Fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[4] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(10,8,6,0.4) 0%, transparent 100%)",
          opacity: isAnyHovered ? 1 : 0,
          transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </section>
  );
}