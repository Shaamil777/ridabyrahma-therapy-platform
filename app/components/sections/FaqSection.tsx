"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/app/components/ui/FadeIn";
import SectionHeader from "@/app/components/ui/SectionHeader";
import Icon from "@/app/components/ui/Icons";
import { faqs } from "@/app/data/faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden"
      style={{
        background: "var(--background)",
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
      }}
    >
      {/* Subtle radial gradient background accent */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          transform: "translate(30%, -50%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* ── Left Column: Header ── */}
          <div className="lg:w-1/3 flex flex-col justify-start">
            <FadeIn>
              <SectionHeader
                label="Got Questions?"
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about our therapy services, what to expect, and how we can support your mental wellness journey."
                alignment="left"
                showDividers={false}
              />

              <div className="mt-10 hidden lg:block">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-300"
                  style={{ color: "var(--accent)" }}
                >
                  Still have questions? Contact us
                  <Icon name="arrow-right" className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* ── Right Column: FAQ Accordion ── */}
          <div className="lg:w-2/3 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <div
                    className="group relative cursor-pointer overflow-hidden transition-all duration-500"
                    style={{
                      borderRadius: "1rem",
                      background: isOpen ? "rgba(255,255,255,0.03)" : "transparent",
                      border: "1px solid",
                      borderColor: isOpen ? "var(--border-subtle)" : "transparent",
                    }}
                    onClick={() => toggleOpen(index)}
                  >
                    {/* Hover state background */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: "var(--surface)",
                        zIndex: 0,
                      }}
                    />

                    <div className="relative z-10 px-6 py-6 md:px-8 md:py-7">
                      <div className="flex items-center justify-between gap-6">
                        <h3
                          className="text-lg md:text-xl font-semibold transition-colors duration-300"
                          style={{
                            fontFamily: "var(--font-cormorant-garamond)",
                            color: isOpen ? "var(--accent)" : "var(--primary)",
                          }}
                        >
                          {faq.question}
                        </h3>
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500"
                          style={{
                            background: isOpen ? "var(--accent)" : "var(--surface)",
                            color: isOpen ? "var(--background)" : "var(--primary)",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          <Icon name={isOpen ? "chevron-up" : "chevron-down"} />
                        </div>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p
                              className="pt-4 text-[15px] leading-relaxed"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  {/* Subtle divider if not open and not hovered */}
                  {!isOpen && (
                    <div
                      className="h-px mx-6 transition-opacity duration-300 group-hover:opacity-0"
                      style={{ background: "var(--border-subtle)" }}
                    />
                  )}
                </FadeIn>
              );
            })}
          </div>
          
          <div className="mt-8 lg:hidden">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-300"
              style={{ color: "var(--accent)" }}
            >
              Still have questions? Contact us
              <Icon name="arrow-right" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
