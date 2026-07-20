"use client";

import { useRef } from "react";
import FadeIn from "@/app/components/ui/FadeIn";
import Icon from "@/app/components/ui/Icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const therapySteps = [
  {
    step: "01",
    title: "Book a Session",
    description: "Choose a convenient time and select the specialist that best matches your needs.",
    iconName: "calendar" as const,
  },
  {
    step: "02",
    title: "Initial Consultation",
    description: "Discuss your concerns, personal goals, and needs in a supportive, non-judgmental space.",
    iconName: "chat" as const,
  },
  {
    step: "03",
    title: "Personalized Support",
    description: "A customized therapy plan is carefully developed based on your unique situation.",
    iconName: "map" as const,
  },
  {
    step: "04",
    title: "Ongoing Sessions",
    description: "Work collaboratively toward personal growth, lasting healing, and emotional well-being.",
    iconName: "heart" as const,
  },
];

export default function HowTherapyWorksSection() {
  const containerRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const section = containerRef.current;
    if (!section) return;

    // Use a single timeline for all screen sizes since the centered layout works flawlessly on mobile too
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: "+=150%", // Much shorter scroll distance for faster animation
          pin: true,
          scrub: 1, 
        }
      });

    // Initial state: hidden and slightly pushed down
    gsap.set(stepsRef.current, { opacity: 0, y: 30 });

    // 1. Loop through each step and create the fade-in, hold, fade-out sequence
    stepsRef.current.forEach((step, i) => {
      if (!step) return;

      // Fade In (overlap with previous step's fade out if not the first step)
      tl.to(step, { 
        opacity: 1, 
        y: 0,
        duration: 1,
        ease: "power2.out"
      }, i === 0 ? undefined : "-=0.5");

      // Hold in the center
      tl.to({}, { duration: 1 });

      // Fade Out (except for the last step which stays on screen until section unpins)
      if (i < stepsRef.current.length - 1) {
        tl.to(step, {
          opacity: 0,
          y: -30, // move up slightly as it fades out
          duration: 1,
          ease: "power2.in",
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section
      id="how-therapy-works"
      ref={containerRef}
      className="relative overflow-clip min-h-screen flex flex-col justify-center"
      style={{
        background: "var(--background)",
      }}
    >
      <div className="section-container py-12 md:py-20 w-full">
        <FadeIn className="text-center mb-16 md:mb-24" margin="-100px">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--primary)", fontFamily: "var(--font-cormorant-garamond)" }}>
            How Therapy Works
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            A collaborative journey designed to help you discover clarity, build resilience, and achieve lasting well-being.
          </p>
        </FadeIn>

        {/* 
          Main Focus Area 
          This container holds all the steps stacked on top of each other exactly in the center.
        */}
        <div className="relative w-full max-w-2xl mx-auto h-[350px] md:h-[400px]">
          {therapySteps.map((item, i) => (
            <div 
              key={i} 
              ref={(el) => {
                if (el) stepsRef.current[i] = el;
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-[var(--border-subtle)] flex items-center justify-center mb-8 shadow-sm relative bg-[rgba(106,142,143,0.04)] text-[var(--accent)]">
                <Icon name={item.iconName} />
                <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm shadow-md" style={{ background: "var(--primary)", color: "white" }}>
                  {item.step}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--primary)", fontFamily: "var(--font-cormorant-garamond)" }}>{item.title}</h3>
              <p className="text-base md:text-lg leading-relaxed max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
