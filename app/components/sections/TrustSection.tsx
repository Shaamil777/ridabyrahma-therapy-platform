"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const RevealOnScroll = ({ children, className = "", slideUp = false }: { children: React.ReactNode, className?: string, slideUp?: boolean }) => {
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
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

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
};

const trustItems = [
  {
    title: "Licensed & Experienced Psychologists",
    description: "Our team consists of highly qualified, certified professionals dedicated to your well-being and growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "100% Confidential & Secure Sessions",
    description: "We strictly adhere to privacy guidelines, ensuring all sessions are protected and completely confidential.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Evidence-Based & Ethical Approaches",
    description: "We utilize proven, scientific methods to provide effective and highly ethical psychological care.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Comprehensive Assessments",
    description: "Thorough evaluations to deeply understand your unique needs and create personalized treatment plans.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    title: "Flexible Online & In-Person Options",
    description: "Access our expert care from the comfort of your home through secure video sessions, or visit our welcoming clinic for traditional face-to-face sessions. We understand the importance of balancing your mental health with a busy lifestyle. That's why our scheduling is designed to accommodate your needs, anytime and anywhere.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function TrustSection() {
  return (
    <section 
      id="trust" 
      className="relative p-4 md:p-6 lg:p-8"
      style={{ background: "var(--background)" }}
    >
      <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden w-full mx-auto shadow-xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/trust-bg.jpg"
            alt="Trust Section Background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
          
          {/* Header section before the grid */}
          <RevealOnScroll slideUp className="relative mb-16 md:mb-20 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase shrink-0 text-white/90">
                Trust & Safety
              </span>
              <div className="h-px w-24 bg-white/40" />
            </div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Your Care, <br className="hidden md:block" />
              <span className="text-white/80">Our Commitment.</span>
            </h2>
          </RevealOnScroll>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustItems.map((item, index) => {
              return (
                <RevealOnScroll key={index}>
                  <div 
                    className="group h-full relative p-6 md:p-8 flex flex-col transition-colors duration-500 hover:bg-black/40 border border-white/50 rounded-[1.5rem] text-white"
                    style={{
                      background: "rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h4 className="text-lg md:text-xl font-bold text-white pr-4">
                        {item.title}
                      </h4>
                      <div className="text-white shrink-0">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <p className="text-white text-[14px] md:text-[15px] leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
