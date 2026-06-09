"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Image from "next/image";

// Single Elegant Maple Leaf Illustration (Using the provided watercolor image)
const DecorativeLeaf = ({ 
  className, 
  style, 
  rotation = 0 
}: { 
  className?: string, 
  style?: React.CSSProperties,
  rotation?: number 
}) => (
  <div 
    className={`pointer-events-none ${className}`}
    style={{
      ...style,
      transform: `rotate(${rotation}deg)`,
      filter: "blur(0.5px)",
    }}
  >
    <Image 
      src="/images/leaf.png" 
      alt="Decorative Maple Leaf Watermark" 
      fill 
      className="object-contain"
    />
  </div>
);

const trustItems = [
  {
    title: "Licensed & Experienced Psychologists",
    description: "Our team consists of highly qualified, certified professionals dedicated to your well-being and growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    isTall: false,
    leafRotation: 15,
    leafPosition: "absolute -top-12 -right-10",
    iconColor: "#D98A5F" // Warm Orange
  },
  {
    title: "100% Confidential & Secure Sessions",
    description: "We strictly adhere to privacy guidelines, ensuring all sessions are protected and completely confidential.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    isTall: false,
    leafRotation: -20,
    leafPosition: "absolute -bottom-10 -left-10",
    iconColor: "#D98A5F" // Warm Orange
  },
  {
    title: "Evidence-Based & Ethical Approaches",
    description: "We utilize proven, scientific methods to provide effective and highly ethical psychological care.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    isTall: false,
    leafRotation: 40,
    leafPosition: "absolute -bottom-8 -left-8",
    iconColor: "#D98A5F" // Warm Orange
  },
  {
    title: "Comprehensive Assessments",
    description: "Thorough evaluations to deeply understand your unique needs and create personalized treatment plans.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    isTall: false,
    leafRotation: -35,
    leafPosition: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    iconColor: "#D98A5F" // Warm Orange
  },
  {
    title: "Flexible Online & In-Person Options",
    description: "Access our expert care from the comfort of your home through secure video sessions, or visit our welcoming clinic for traditional face-to-face sessions. We understand the importance of balancing your mental health with a busy lifestyle. That's why our scheduling is designed to accommodate your needs, anytime and anywhere.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    isTall: true,
    leafRotation: 25,
    leafPosition: "absolute -bottom-16 -right-10",
    iconColor: "#ffffff" // White for dark card
  }
];

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="trust" 
      className="relative"
      style={{
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
        background: "var(--background)",
      }}
    >
      <div className="section-container">
        
        {/* Header section before the bento grid */}
        <motion.div 
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase shrink-0"
              style={{ color: "var(--accent)" }}
            >
              Trust & Safety
            </span>
            <div
              className="h-px w-24"
              style={{ background: "var(--accent)", opacity: 0.5 }}
            />
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
            style={{ 
              color: "var(--primary)",
              fontFamily: "var(--font-cormorant-garamond)",
            }}
          >
            Your Care, <br className="hidden md:block" />
            <span style={{ color: "var(--text-secondary)" }}>Our Commitment.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {trustItems.map((item, index) => {
            const isTall = item.isTall;
            
            return (
              <motion.div 
                key={index}
                className={`relative overflow-hidden p-8 md:p-10 flex flex-col justify-between ${
                  isTall ? 'lg:row-span-2 lg:col-start-3 lg:row-start-1 h-full min-h-[400px]' : ''
                }`}
                style={{
                  background: isTall ? "var(--primary)" : "var(--surface)",
                  borderRadius: "1.5rem",
                  border: isTall ? "none" : "1px solid var(--border-subtle)",
                  boxShadow: isTall ? "0 20px 40px rgba(31,31,31,0.15)" : "none",
                  color: isTall ? "white" : "var(--primary)"
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Decorative Design System Leaf */}
                <DecorativeLeaf 
                  className={`${item.leafPosition} pointer-events-none ${
                    isTall ? "w-80 h-80" : "w-64 h-64"
                  }`}
                  rotation={item.leafRotation}
                  style={{
                    opacity: isTall ? 0.3 : 0.25, // Increased opacity for better visibility
                    zIndex: 0
                  }}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div 
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 shrink-0 ${
                      isTall ? 'bg-white/10 text-white' : 'border border-[var(--border-subtle)]'
                    }`}
                    style={isTall ? {} : {
                      color: item.iconColor,
                      backgroundColor: `${item.iconColor}15` // 15% opacity background tint
                    }}
                  >
                    {item.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h4 
                      className={`${isTall ? 'text-3xl lg:text-4xl' : 'text-xl'} font-bold mb-4`}
                      style={{ 
                        fontFamily: isTall ? "var(--font-cormorant-garamond)" : "inherit"
                      }}
                    >
                      {item.title}
                    </h4>
                    <p 
                      className={`${isTall ? 'text-white/80 text-[16px]' : 'text-[var(--text-secondary)] text-[15px]'} leading-relaxed`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {isTall && (
                    <div className="mt-10">
                      <button className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                        style={{
                          background: "var(--accent)",
                          color: "white"
                        }}
                      >
                        Start Your Journey
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
