"use client";

import Image from "next/image";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Icon from "@/app/components/ui/Icons";
import { trustItems } from "@/app/data/trust";

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
            {trustItems.map((item, index) => (
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
                        <Icon name={item.iconName} className="w-6 h-6" />
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
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
