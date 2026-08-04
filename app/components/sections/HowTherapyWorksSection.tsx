"use client";

import { useRef } from "react";
import Image from "next/image";
import FadeIn from "@/app/components/ui/FadeIn";
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
    image: "/images/booking.png",
  },
  {
    step: "02",
    title: "Initial Consultation",
    description: "Discuss your concerns, personal goals, and needs in a supportive, non-judgmental space.",
    image: "/images/ongoing.png",
  },
  {
    step: "03",
    title: "Personalized Support",
    description: "A customized therapy plan is carefully developed based on your unique situation.",
    image: "/images/support2.png",
  },
  {
    step: "04",
    title: "Ongoing Sessions",
    description: "Work collaboratively toward personal growth, lasting healing, and emotional well-being.",
    image: "/images/ongo.png",
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

    // 1. First step (i === 0) is STATIC with full opacity by default - no initial fade animation
    const firstStep = stepsRef.current[0];
    if (firstStep) {
      gsap.set(firstStep, { opacity: 1, y: 0 });
      // Hold the first step visible without animating it at the start
      tl.to({}, { duration: 1 });
      // When scrolling progresses, fade out the first step
      tl.fromTo(
        firstStep,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -30,
          duration: 1,
          ease: "power2.in",
          immediateRender: false,
        }
      );
    }

    // 2. Remaining steps (i = 1, 2, 3) start hidden, then reveal on scroll
    for (let i = 1; i < stepsRef.current.length; i++) {
      const step = stepsRef.current[i];
      if (!step) continue;

      gsap.set(step, { opacity: 0, y: 30 });

      // Fade In (overlap with previous step's fade out)
      tl.fromTo(
        step,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          immediateRender: false,
        },
        "-=0.5"
      );

      // Hold in the center
      tl.to({}, { duration: 1 });

      // Fade Out (including the last step so it fades out as scrolling finishes)
      tl.fromTo(
        step,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -30,
          duration: 1,
          ease: "power2.in",
          immediateRender: false,
        }
      );
    }

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
        

        {/* 
          Main Focus Area 
          This container holds all the steps stacked on top of each other exactly in the center.
        */}
        <div className="relative w-full max-w-3xl mx-auto h-[750px] md:h-[850px]">
          {therapySteps.map((item, i) => (
            <div 
              key={i} 
              ref={(el) => {
                if (el) stepsRef.current[i] = el;
              }}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center ${
                i === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] mb-8">
                <Image src={item.image} alt={item.title} fill className="object-contain" sizes="(max-width: 768px) 352px, 448px" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--primary)", fontFamily: "var(--font-cormorant-garamond)" }}>{item.title}</h3>
              <p className="text-lg md:text-xl leading-relaxed max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
              
              <span 
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-xs md:text-sm font-medium tracking-widest"
                style={{ color: "var(--text-secondary)", opacity: 0.5, writingMode: "vertical-lr" }}
              >
                {i + 1} / {therapySteps.length}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
