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
    <div ref={ref} className="relative w-full flex justify-center pt-20 pb-4">
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
      className="relative overflow-clip"
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

      {/* 3. How Therapy Works */}
      <div className="section-container py-24 md:py-32">
        <FadeInBlock className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--primary)", fontFamily: "var(--font-cormorant-garamond)" }}>
            How Therapy Works
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            A collaborative journey designed to help you discover clarity, build resilience, and achieve lasting well-being.
          </p>
        </FadeInBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-10 relative">
          {/* Connecting line for desktop (visible only on large screens when 4 columns fit in one row) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[1px] z-0" style={{ background: "linear-gradient(90deg, transparent, var(--border-subtle) 20%, var(--border-subtle) 80%, transparent)" }} />
          
          {[
            {
              step: "01",
              title: "Book a Session",
              description: "Choose a convenient time and select the specialist that best matches your needs.",
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            },
            {
              step: "02",
              title: "Initial Consultation",
              description: "Discuss your concerns, personal goals, and needs in a supportive, non-judgmental space.",
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            },
            {
              step: "03",
              title: "Personalized Support",
              description: "A customized therapy plan is carefully developed based on your unique situation.",
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
            },
            {
              step: "04",
              title: "Ongoing Sessions",
              description: "Work collaboratively toward personal growth, lasting healing, and emotional well-being.",
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            }
          ].map((item, i) => (
            <FadeInBlock key={i} delay={0.1 * i} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full border border-[var(--border-subtle)] flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-500 relative" style={{ background: "rgba(106,142,143,0.02)", color: "var(--accent)" }}>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: "var(--accent)" }} />
                {item.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-md" style={{ background: "var(--primary)", color: "white" }}>
                  {item.step}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--primary)", fontFamily: "var(--font-cormorant-garamond)" }}>{item.title}</h3>
              <p className="text-[15px] md:text-[16px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
            </FadeInBlock>
          ))}
        </div>
      </div>
    </section>
  );
}