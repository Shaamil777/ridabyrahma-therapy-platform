"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import FadeIn from "@/app/components/ui/FadeIn";

function ScrollRevealRida() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "end 65%"],
  });

  // Apply spring interpolation to smooth out mobile scroll steps and prevent stutter/lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001,
  });

  const clipPath = useTransform(smoothProgress, [0, 1], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);
  const y = useTransform(smoothProgress, [0, 1], [40, 0]);
  const opacity = useTransform(smoothProgress, [0, 1], [0.2, 1]);

  return (
    <div ref={ref} className="relative w-full flex justify-center pt-0 md:pt-4 pb-4 -mt-10 md:-mt-16 overflow-hidden">
      <motion.h2
        style={{
          clipPath,
          y,
          opacity,
          color: "#4A4A4A",
          fontFamily: "var(--font-cormorant-garamond)",
          willChange: "transform, opacity",
          WebkitFontSmoothing: "antialiased",
          backfaceVisibility: "hidden",
        }}
        className="text-[22vw] md:text-[18vw] lg:text-[14vw] leading-none font-medium select-none transform-gpu drop-shadow-sm"
      >
        Ridā
      </motion.h2>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-clip"
      style={{
        background: "var(--background)",
      }}
    >
      <div className="section-container pt-32 pb-20 md:py-40 relative z-10">
        <FadeIn className="max-w-4xl mx-auto text-center" margin="-100px">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div
              className="h-px w-12"
              style={{ background: "var(--accent)", opacity: 0.5 }}
            />
            <span
              className="text-sm font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              The Clinic
            </span>
            <div
              className="h-px w-12"
              style={{ background: "var(--accent)", opacity: 0.5 }}
            />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.2] mb-10"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--font-cormorant-garamond)",
            }}
          >
            A Space for <br className="hidden md:block" />
            <span className="italic" style={{ color: "var(--accent)" }}>
              Inner Healing
            </span>
          </h2>

          <div
            className="text-[17px] md:text-[22px] leading-relaxed max-w-3xl mx-auto space-y-6"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>
              At Riḍā by Rahma, we believe that everyone deserves access to compassionate and professional mental health support. Led by Clinical Psychologist Rahmath, our team provides evidence-based therapy and psychological services in a safe, confidential, and supportive environment.
            </p>
            <p>
              Through personalized care and accessible online consultations, we help individuals navigate challenges, build resilience, and move toward greater emotional well-being.
            </p>
             <p>
                At Riḍā by Rahma, we are committed to creating a safe and compassionate space where individuals can explore their thoughts, overcome challenges, and build a healthier relationship with themselves. Every session is guided by empathy, evidence-based practice, and a deep respect for each person's unique journey.
              </p>
          </div>
        </FadeIn>
      </div>

      <div className="w-full flex flex-col items-center justify-center" style={{ background: "var(--background)" }}>

        <ScrollRevealRida />

        <div className="max-w-4xl px-6 pb-24 md:pb-32 text-center relative z-10 -mt-2 md:-mt-6 mx-auto">
          <FadeIn delay={0.2} margin="-100px">
            <div className="space-y-6 text-[17px] md:text-[20px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p className="italic text-[18px] md:text-[22px] mb-8" style={{ color: "var(--primary)", fontFamily: "var(--font-cormorant-garamond)" }}>
                Our name serves as a reminder of the destination we hope to help our clients reach: a place of greater balance, healing, and peace within themselves.
              </p>
              <p>
                Riḍā is an Arabic word that embodies contentment, acceptance, and inner peace. It reflects the belief that true well-being comes not from the absence of struggle, but from developing the strength, understanding, and support needed to navigate it.
              </p>
             
            </div>
          </FadeIn>
        </div>
      </div>

    </section>
  );
}
