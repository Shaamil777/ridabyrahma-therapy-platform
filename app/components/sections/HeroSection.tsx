"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/app/data/navigation";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 1. Detect when global loading has completed
  useEffect(() => {
    const checkLoading = () => {
      if (document.body.classList.contains("loading-complete")) {
        setIsLoaded(true);
        return true;
      }
      return false;
    };

    if (checkLoading()) return;

    const interval = setInterval(() => {
      if (checkLoading()) {
        clearInterval(interval);
      }
    }, 100);

    const fallbackTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  // 2. Observe when Hero section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setIsInView(true);
          } else if (!entry.isIntersecting && entry.intersectionRatio < 0.05) {
            setIsInView(false);
          }
        });
      },
      { threshold: [0, 0.05, 0.2, 0.5] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 3. Play video when loaded and in view; stop at last frame
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isLoaded && isInView) {
      try {
        if (video.readyState >= 1) {
          video.currentTime = 0;
        }
      } catch {
        // Ignore if metadata is not ready yet
      }
      video.play().catch((err) => {
        console.log("Video autoplay prevented:", err);
      });
    } else if (!isInView) {
      video.pause();
    }
  }, [isLoaded, isInView]);

  const handleLoadedMetadata = () => {
    if (isLoaded && isInView && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen relative flex flex-col justify-between bg-[#FAF8F5] overflow-hidden text-[#5A6B56]"
    >
      {/* ═ Subtle Editorial Background Mesh ═ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute -top-[15%] -right-[10%] w-[60%] h-[60%] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(239,230,221,0.8) 0%, rgba(250,248,245,0) 70%)",
          }}
        />
        <div
          className="absolute -bottom-[15%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(214,204,192,0.8) 0%, rgba(250,248,245,0) 70%)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════
          TOP NAVBAR — Minimal European Editorial Bar
          ═══════════════════════════════════════ */}
      <header className="w-full px-6 sm:px-12 lg:px-16 py-6 sm:py-8 flex items-center justify-between z-20">
        {/* Left: Monogram Logo & Primary Links */}
        <div className="flex items-center gap-6 sm:gap-10">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group"
          >
            <span
              className="text-2xl sm:text-3xl font-normal tracking-tight text-[#5A6B56] group-hover:text-[#8C5A3E] transition-colors"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Riḍā
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-cormorant font-normal text-[#5A6B56] tracking-wide">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-[#8C5A3E] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Center: Philosophy Title (like "Word of the day / Discovery") */}
        <div className="hidden lg:flex flex-col items-center text-center">
          <span
            className="text-xs italic text-[#8C5A3E] font-normal leading-tight"
            style={{ fontFamily: "var(--font-cormorant-garamond)" }}
          >
            Philosophy of care
          </span>
          <span
            className="text-sm text-[#5A6B56] font-normal tracking-wider"
            style={{ fontFamily: "var(--font-cormorant-garamond)" }}
          >
            Sanctuary
          </span>
        </div>

        {/* Right: Pill CTA Button */}
        <div>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#6A7C64] hover:bg-[#5A6B56] text-[#FAF8F5] px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-cormorant font-medium tracking-wide transition-colors shadow-sm cursor-pointer"
          >
            Get in touch
          </button>
        </div>
      </header>

      {/* ═══════════════════════════════════════
          CENTER EDITORIAL AREA
          ═══════════════════════════════════════ */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 max-w-7xl mx-auto w-full py-8 sm:py-12 z-20">
        {/* Monumental Centered Serif Headline (like "MeLine Gobet") */}
        <h1
          className="w-full text-center font-normal text-[#5A6B56] tracking-tight leading-[0.9] select-none"
          style={{
            fontFamily: "var(--font-cormorant-garamond)",
            fontSize: "clamp(3.8rem, 11vw, 9rem)",
          }}
        >
          Rida By Rahma
        </h1>

        {/* Editorial Subtitle Row Below Headline */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center mt-6 sm:mt-10 px-4 sm:px-12">
          {/* Left Column: Title / Role (like "Kinesiologue certifiee") */}
          <div className="md:col-span-5 text-center md:text-left">
            <p
              className="text-xl sm:text-2xl md:text-3xl text-[#5A6B56] font-normal tracking-wide"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Psychiatry &amp; Wellness
            </p>
          </div>

          {/* Right Column: Decorative Arch & Editorial Quote */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Delicate Arch SVG Line */}
            <svg
              width="110"
              height="16"
              viewBox="0 0 110 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#5A6B56]/50 mb-2"
            >
              <path
                d="M1 14C25 3 85 3 109 14"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </svg>
            <p
              className="text-xs sm:text-sm text-[#5A6B56]/80 leading-relaxed max-w-xs font-normal"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              For emotional liberation, holistic healing, and reconnecting with yourself.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          BOTTOM CENTERPIECE (Bloom Video with Editorial Rules)
          ═══════════════════════════════════════ */}
      <div className="w-full px-6 sm:px-12 lg:px-24 pb-10 sm:pb-14 flex items-center justify-center gap-4 sm:gap-8 z-20">
        {/* Left Rule with Circle Dot */}
        <div className="flex-1 flex items-center gap-2 max-w-xs sm:max-w-sm">
          <span className="w-1.5 h-1.5 rounded-full border border-[#5A6B56]/40 shrink-0" />
          <div className="h-[0.5px] w-full bg-[#5A6B56]/25" />
        </div>

        {/* Center: Bloom Video in an Elegant Circular Medallion */}
        <div className="relative shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-[#5A6B56]/25 shadow-md bg-[#FAF8F5]">
          <video
            ref={videoRef}
            src="/video/bloom.mp4"
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
            onLoadedMetadata={handleLoadedMetadata}
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Right Rule with Circle Dot */}
        <div className="flex-1 flex items-center justify-end gap-2 max-w-xs sm:max-w-sm">
          <div className="h-[0.5px] w-full bg-[#5A6B56]/25" />
          <span className="w-1.5 h-1.5 rounded-full border border-[#5A6B56]/40 shrink-0" />
        </div>
      </div>
    </section>
  );
}
