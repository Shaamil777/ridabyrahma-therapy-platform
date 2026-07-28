"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Icon from "@/app/components/ui/Icons";
import { trustItems } from "@/app/data/trust";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function MobileTrustSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 40;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % trustItems.length);
    }
    if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + trustItems.length) % trustItems.length);
    }
  };

  const leftIndex = (activeIndex - 1 + trustItems.length) % trustItems.length;
  const rightIndex = (activeIndex + 1) % trustItems.length;

  const leftItem = trustItems[leftIndex];
  const centerItem = trustItems[activeIndex];
  const rightItem = trustItems[rightIndex];

  return (
    <div className="md:hidden relative rounded-[2.5rem] overflow-hidden w-full mx-auto bg-gradient-to-b from-[#FDFBF7] via-[#FDFBF7] to-[#F7F3EB] border border-[#5A6B56]/15 p-6 sm:p-8">
      {/* Subtle Ambient Brand Glows */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-[#8C5A3E]/10 rounded-full pointer-events-none blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#5A6B56]/10 rounded-full pointer-events-none blur-3xl -z-10" />

      <div className="relative z-10 pt-4 pb-4 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#8C5A3E] font-quicksand">
              Trust & Safety
            </span>
            <div className="h-px w-12 bg-[#8C5A3E]/30" />
          </div>

          <h2
            className="text-4xl font-bold leading-[1.12] text-[#5A6B56] mb-3"
            style={{ fontFamily: "var(--font-cormorant-garamond)" }}
          >
            Your Care, <br />
            <span className="text-[#8C5A3E]">Our Commitment.</span>
          </h2>

          <p className="text-xs text-[#5A6B56]/80 max-w-[290px] mx-auto leading-relaxed font-quicksand font-medium">
            Compassionate care delivered with trust, professionalism, and respect for your well-being.
          </p>
        </div>

        {/* 3-Card Peeking Interactive Carousel */}
        <div
          className="relative flex items-center justify-center h-[270px] w-full max-w-[340px] overflow-hidden select-none mb-4"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Left Peeking Card */}
          <div
            onClick={() =>
              setActiveIndex((prev) => (prev - 1 + trustItems.length) % trustItems.length)
            }
            className="absolute -left-16 w-[180px] h-[220px] bg-white/80 border border-[#5A6B56]/15 rounded-[24px] p-4 flex flex-col items-center justify-start opacity-60 scale-85 transition-all duration-500 cursor-pointer backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-full border border-[#5A6B56]/20 bg-[#5A6B56]/5 flex items-center justify-center text-[#5A6B56] mb-3 shrink-0">
              <Icon name={leftItem.iconName} className="w-4 h-4" />
            </div>
            <h4
              className="text-sm font-bold text-[#5A6B56] text-center leading-tight mb-2 line-clamp-2"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              {leftItem.title}
            </h4>
            <p className="text-[11px] text-[#5A6B56]/70 text-center leading-normal line-clamp-4 font-quicksand">
              {leftItem.description}
            </p>
          </div>

          {/* Center Active Card - Botanical Sage Green */}
          <div className="relative z-20 w-[240px] h-[250px] bg-gradient-to-b from-[#5A6B56] to-[#435240] border border-white/20 rounded-[28px] p-5 flex flex-col items-center justify-start transition-all duration-500 backdrop-blur-md">
            <div className="w-12 h-12 rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-white mb-3 shrink-0">
              <Icon name={centerItem.iconName} className="w-5 h-5" />
            </div>
            <h3
              className="text-xl font-bold text-white text-center leading-snug mb-2"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              {centerItem.title}
            </h3>
            <p className="text-xs text-white/85 text-center leading-relaxed line-clamp-5 font-quicksand">
              {centerItem.description}
            </p>
          </div>

          {/* Right Peeking Card */}
          <div
            onClick={() => setActiveIndex((prev) => (prev + 1) % trustItems.length)}
            className="absolute -right-16 w-[180px] h-[220px] bg-white/80 border border-[#5A6B56]/15 rounded-[24px] p-4 flex flex-col items-center justify-start opacity-60 scale-85 transition-all duration-500 cursor-pointer backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-full border border-[#5A6B56]/20 bg-[#5A6B56]/5 flex items-center justify-center text-[#5A6B56] mb-3 shrink-0">
              <Icon name={rightItem.iconName} className="w-4 h-4" />
            </div>
            <h4
              className="text-sm font-bold text-[#5A6B56] text-center leading-tight mb-2 line-clamp-2"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              {rightItem.title}
            </h4>
            <p className="text-[11px] text-[#5A6B56]/70 text-center leading-normal line-clamp-4 font-quicksand">
              {rightItem.description}
            </p>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 mt-4">
          {trustItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === activeIndex
                  ? "w-7 h-2.5 bg-[#8C5A3E]"
                  : "w-2.5 h-2.5 bg-[#5A6B56]/25 hover:bg-[#5A6B56]/40"
              }`}
            />
          ))}
        </div>

        {/* Bottom Reassurance Trust Badge */}
        <div className="mt-6 pt-4 border-t border-[#5A6B56]/15 w-full flex items-center justify-center gap-2 text-[11px] font-bold text-[#5A6B56]/75 uppercase tracking-[0.2em] font-quicksand">
          <Icon name="shield" className="w-4 h-4 text-[#8C5A3E]" />
          <span>100% Confidential & Secure Care</span>
        </div>
      </div>
    </div>
  );
}

export default function TrustSection() {
  const containerRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
      {/* Mobile Design: Peeking Carousel & Cream Sheet Overlay */}
      <MobileTrustSection />

      {/* Desktop Design: Grid Layout */}
      <div className="hidden md:block relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden w-full mx-auto shadow-xl">
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

                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

