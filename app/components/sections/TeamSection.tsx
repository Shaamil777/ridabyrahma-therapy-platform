"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/app/components/ui/SectionHeader";
import Icon from "@/app/components/ui/Icons";
import { teamMembers } from "@/app/data/team";

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 100;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export default function TeamSection() {
  const autoplay = true;

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalMembers = teamMembers.length;
  const activeMember = useMemo(
    () => teamMembers[activeIndex],
    [activeIndex]
  );

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % totalMembers);
      }, 7000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, totalMembers]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalMembers);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [totalMembers]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalMembers) % totalMembers);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [totalMembers]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handlePrev, handleNext]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + totalMembers) % totalMembers === index;
    const isRight = (activeIndex + 1) % totalMembers === index;

    const baseRadius = "var(--card-radius)";
    const baseShadow = "var(--card-shadow)";
    
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
        borderRadius: baseRadius,
        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
        borderRadius: baseRadius,
        boxShadow: baseShadow,
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
        borderRadius: baseRadius,
        boxShadow: baseShadow,
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      borderRadius: baseRadius,
    };
  }

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section id="team" className="w-full relative overflow-hidden" style={{ background: "var(--background)", paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      <div className="section-container mb-16 md:mb-24">
        <SectionHeader label="Our Care Professionals" title="Meet the Team" />
      </div>

      <div className="section-container pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div 
            className="relative w-full max-w-[450px] mx-auto lg:mx-0 h-[400px] md:h-[550px]" 
            style={{ perspective: "1000px" }}
            ref={imageContainerRef}
          >
            {teamMembers.map((member, index) => (
              <img
                key={member.id}
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover bg-[#E6E6E6]"
                data-index={index}
                style={getImageStyle(index)}
              />
            ))}
          </div>

          <div className="flex flex-col justify-start w-full lg:max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col"
              >
                <h3 
                  className="text-3xl md:text-5xl font-bold mb-3 text-[var(--primary)]"
                  style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                >
                  {activeMember.name}
                </h3>
                <p 
                  className="text-sm md:text-base font-medium tracking-[0.1em] uppercase mb-8"
                  style={{ color: "var(--accent)" }}
                >
                  {activeMember.role}
                </p>
                <motion.p 
                  className="text-base md:text-lg leading-relaxed font-light mb-10"
                  style={{ color: "var(--text-secondary)", minHeight: "150px" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  {activeMember.fullBio}
                </motion.p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {activeMember.specialties.map((s, idx) => (
                    <span key={idx} className="px-4 py-2 border border-black/10 bg-black/5 rounded-full text-[10px] uppercase font-semibold tracking-widest text-[#1f1f1f]">
                      {s}
                    </span>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between w-full mt-4 border-t border-[var(--border-subtle)] pt-8">
              <a 
                href="#booking"
                className="inline-flex w-fit items-center justify-center gap-3 px-8 py-4 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 bg-[var(--primary)] text-white hover:bg-[var(--accent)] shadow-lg hover:shadow-xl group"
              >
                Reserve Session
                <Icon name="arrow-right" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
              </a>

              <div className="flex gap-4">
                <button
                  className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 border-none"
                  onClick={handlePrev}
                  style={{
                    backgroundColor: hoverPrev ? "var(--accent)" : "var(--primary)",
                  }}
                  onMouseEnter={() => setHoverPrev(true)}
                  onMouseLeave={() => setHoverPrev(false)}
                  aria-label="Previous Team Member"
                  suppressHydrationWarning
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 border-none"
                  onClick={handleNext}
                  style={{
                    backgroundColor: hoverNext ? "var(--accent)" : "var(--primary)",
                  }}
                  onMouseEnter={() => setHoverNext(true)}
                  onMouseLeave={() => setHoverNext(false)}
                  aria-label="Next Team Member"
                  suppressHydrationWarning
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}