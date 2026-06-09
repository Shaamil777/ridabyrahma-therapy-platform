"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Fade in block for general content
function FadeInBlock({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

// Scroll-linked reveal animation for the RIDA text
function ScrollRevealRida() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track the scroll progress of this specific container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 60%"], // Starts when top hits 90% of screen, ends when bottom hits 60%
  });

  // Transform values based on scroll progress for a wiping reveal effect
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="w-full flex justify-center pt-20 pb-4">
      <motion.h2
        style={{
          clipPath,
          y,
          opacity,
          color: "var(--primary)",
          fontFamily: "var(--font-cormorant-garamond)",
        }}
        className="text-[30vw] md:text-[25vw] leading-none font-bold tracking-tighter select-none"
      >
        RIDA
      </motion.h2>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        background: "var(--background)",
      }}
    >
      {/* 1. Introduction Paragraph */}
      <div className="section-container pt-32 pb-20 md:py-40 relative z-10 border-b border-[var(--border-subtle)]">
        <FadeInBlock className="max-w-4xl mx-auto text-center">
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
            A Sanctuary for <br className="hidden md:block" />
            <span className="italic" style={{ color: "var(--accent)" }}>
              Inner Healing
            </span>
          </h2>

          <div
            className="text-[17px] md:text-[22px] leading-relaxed max-w-3xl mx-auto space-y-6"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>
              At Riḍā by Rahma, we believe that everyone deserves access to compassionate and professional mental health support. Led by Clinical Psychologist Rahma, our team provides evidence-based therapy and psychological services in a safe, confidential, and supportive environment.
            </p>
            <p>
              Through personalized care and accessible online consultations, we help individuals navigate challenges, build resilience, and move toward greater emotional well-being.
            </p>
          </div>
        </FadeInBlock>
      </div>

      {/* 2. HUGE Rida Reveal & Explanation */}
      <div className="w-full flex flex-col items-center justify-center border-b border-[var(--border-subtle)]" style={{ background: "rgba(106,142,143,0.02)" }}>
        
        {/* Animated RIDA text linked to scroll */}
        <ScrollRevealRida />
        
        {/* Explanation Paragraph Below */}
        <div className="max-w-4xl px-6 pb-24 md:pb-32 text-center relative z-10 -mt-2 md:-mt-6 mx-auto">
          <FadeInBlock delay={0.2}>
            <h3 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "var(--primary)", fontFamily: "var(--font-cormorant-garamond)" }}>
              Why the name Riḍā?
            </h3>
            <div className="space-y-6 text-[17px] md:text-[20px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>
                Riḍā is an Arabic word that embodies contentment, acceptance, and inner peace. It reflects the belief that true well-being comes not from the absence of struggle, but from developing the strength, understanding, and support needed to navigate it.
              </p>
              <p>
                At Riḍā by Rahma, we are committed to creating a safe and compassionate space where individuals can explore their thoughts, overcome challenges, and build a healthier relationship with themselves. Every session is guided by empathy, evidence-based practice, and a deep respect for each person's unique journey.
              </p>
              <p className="italic text-[18px] md:text-[22px] mt-8" style={{ color: "var(--primary)", fontFamily: "var(--font-cormorant-garamond)" }}>
                Our name serves as a reminder of the destination we hope to help our clients reach: a place of greater balance, healing, and peace within themselves.
              </p>
            </div>
          </FadeInBlock>
        </div>
      </div>

      {/* 3. Meet Dr. Rahma & Mission */}
      <div className="section-container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 md:mb-32">
          
          {/* Dr. Rahma Card */}
          <FadeInBlock delay={0.1} className="flex flex-col">
            <div
              className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-10 relative group shadow-lg"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <Image
                src="/images/leaf.png"
                alt="Leaf"
                fill
                className="object-contain opacity-[0.05] scale-150 group-hover:scale-125 group-hover:-rotate-6 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 flex items-center justify-center text-[var(--primary)]/40 font-semibold tracking-wider uppercase text-sm z-10 backdrop-blur-[1px]">
                [Photo Placeholder]
              </div>
            </div>
            
            <div
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--accent)" }}
            >
              Lead Psychiatrist
            </div>
            <h3
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                color: "var(--primary)",
                fontFamily: "var(--font-cormorant-garamond)",
              }}
            >
              Meet Dr. Rahma
            </h3>
            <p
              className="text-[16px] md:text-[18px] leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              [Dummy Content] Dr. Rahma is a board-certified professional with a profound dedication to mental wellness. With years of clinical experience, she brings a warm, empathetic, and evidence-based approach to help individuals navigate life's complexities.
            </p>
          </FadeInBlock>

          {/* Mission & Extra info */}
          <div className="flex flex-col justify-center space-y-16">
            <FadeInBlock delay={0.2}>
              <h3
                className="text-4xl font-bold mb-6"
                style={{
                  color: "var(--primary)",
                  fontFamily: "var(--font-cormorant-garamond)",
                }}
              >
                Our Mission
              </h3>
              <p
                className="text-[16px] md:text-[18px] leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                [Dummy Content] To empower individuals on their wellness journey by providing accessible, personalized, and deeply compassionate care that transforms lives.
              </p>
            </FadeInBlock>

            <FadeInBlock
              delay={0.3}
              className="p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group shadow-lg transition-transform duration-500 hover:-translate-y-2"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.03] pointer-events-none -mr-10 -mt-10 group-hover:rotate-12 transition-transform duration-1000">
                <Image
                  src="/images/leaf.png"
                  alt="Leaf"
                  fill
                  className="object-contain rotate-45"
                />
              </div>
              <div
                className="text-6xl mb-4 font-serif leading-none"
                style={{ color: "var(--accent)" }}
              >
                “
              </div>
              <p
                className="text-2xl md:text-3xl italic leading-relaxed relative z-10"
                style={{
                  color: "var(--primary)",
                  fontFamily: "var(--font-cormorant-garamond)",
                }}
              >
                [Dummy Content] "We believe everyone deserves access to compassionate, expert psychiatric care — no matter where they are."
              </p>
            </FadeInBlock>
          </div>
        </div>

        {/* 4. Our Approach */}
        <FadeInBlock
          delay={0.2}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl p-10 md:p-16 lg:p-24"
          style={{ background: "var(--primary)", color: "white" }}
        >
          <Image
            src="/images/leaf.png"
            alt="Leaf Pattern"
            fill
            className="object-cover opacity-10 mix-blend-overlay scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-transparent mix-blend-multiply opacity-50" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h3
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{ fontFamily: "var(--font-cormorant-garamond)" }}
              >
                Our Approach
              </h3>
              <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-10">
                [Dummy Content] We integrate cutting-edge, evidence-based practices with a genuinely holistic view of health. By treating the whole person rather than just the symptoms, we co-create sustainable strategies for lifelong well-being.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 transition-all hover:bg-white/10 hover:-translate-y-1">
                <h4
                  className="font-bold text-2xl mb-3"
                  style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                >
                  Holistic View
                </h4>
                <p className="text-[16px] opacity-80 leading-relaxed">
                  Mind, body, and spirit connection tailored to your life.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 transition-all hover:bg-white/10 hover:-translate-y-1">
                <h4
                  className="font-bold text-2xl mb-3"
                  style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                >
                  Evidence-Based
                </h4>
                <p className="text-[16px] opacity-80 leading-relaxed">
                  Rooted in modern science and proven methodologies.
                </p>
              </div>
            </div>
          </div>
        </FadeInBlock>
      </div>
    </section>
  );
}