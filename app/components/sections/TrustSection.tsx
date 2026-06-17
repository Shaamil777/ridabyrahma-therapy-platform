"use client";

import { useRef } from "react";
import Image from "next/image";
import Icon from "@/app/components/ui/Icons";
import { trustItems } from "@/app/data/trust";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TrustSection() {
  const containerRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Background parallax effect
    if (bgImageRef.current) {
      gsap.fromTo(bgImageRef.current,
        { scale: 1.2, y: "-10%" },
        {
          scale: 1,
          y: "10%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }

    // Header reveal animation
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Cards staggered animation
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section 
      id="trust" 
      ref={containerRef}
      className="relative p-4 md:p-6 lg:p-8"
      style={{ background: "var(--background)" }}
    >
      <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden w-full mx-auto shadow-xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            ref={bgImageRef}
            src="/images/trust-bg.jpg"
            alt="Trust Section Background"
            fill
            className="object-cover origin-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
          
          {/* Header section before the grid */}
          <div ref={headerRef} className="relative mb-16 md:mb-20 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6 opacity-0">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase shrink-0 text-white/90">
                Trust & Safety
              </span>
              <div className="h-px w-24 bg-white/40" />
            </div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white opacity-0"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Your Care, <br className="hidden md:block" />
              <span className="text-white/80">Our Commitment.</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustItems.map((item, index) => (
              <div 
                key={index}
                className="group opacity-0 h-full relative p-8 flex flex-col transition-all duration-500 bg-white/5 border border-white/20 rounded-[1.5rem] overflow-hidden hover:bg-white/10 hover:border-white/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h4 
                    className="text-xl md:text-2xl font-semibold text-white pr-4 leading-tight transition-colors"
                    style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                  >
                    {item.title}
                  </h4>
                  <div className="text-[#D3C4B7] shrink-0 bg-white/10 p-2 rounded-full transition-colors group-hover:bg-[#D3C4B7] group-hover:text-[#3A4B35]">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <Icon name={item.iconName} className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-grow relative z-10">
                  <p className="text-white/80 text-[15px] leading-relaxed font-medium transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Elegant decorative glow on hover */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
