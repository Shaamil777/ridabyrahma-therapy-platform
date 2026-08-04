"use client";

import { useState } from "react";
import { navLinks } from "@/app/data/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full px-6 sm:px-12 lg:px-16 py-6 sm:py-8 flex items-center justify-between z-20 relative">
      {/* Left: Monogram Logo & Primary Links */}
      <div className="flex items-center gap-8 sm:gap-12">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span
            className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#5A6B56] group-hover:text-[#8C5A3E] transition-colors"
            style={{ fontFamily: "var(--font-cormorant-garamond)" }}
          >
            Riḍā
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-base sm:text-lg md:text-xl font-cormorant font-normal text-[#5A6B56] tracking-wide">
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

      {/* Right: Pill CTA Button & Mobile Menu Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-[#6A7C64] hover:bg-[#5A6B56] text-[#FAF8F5] px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-cormorant font-medium tracking-wide transition-colors shadow-sm cursor-pointer"
        >
          Get in touch
        </button>

        {/* Hamburger Menu Toggle (Mobile only) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#5A6B56] hover:text-[#8C5A3E] transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#5A6B56]/15 py-6 px-6 shadow-lg md:hidden z-30 transition-all">
          <nav className="flex flex-col items-center gap-5 text-xl font-cormorant font-normal text-[#5A6B56] tracking-wide">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-[#8C5A3E] transition-colors cursor-pointer py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
