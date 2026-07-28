'use client';

import { useState, useEffect, useCallback } from 'react';
import Icon from '@/app/components/ui/Icons';
import { navLinks } from '@/app/data/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    const scrollPosition = window.scrollY + 100;
    for (const link of navLinks) {
      const element = document.getElementById(link.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(link.id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed left-0 right-0 z-50 font-quicksand transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] flex justify-center ${
        isScrolled ? 'top-4 sm:top-6 px-4 sm:px-6 pointer-events-none' : 'top-0 pointer-events-none'
      }`}>
        <div className={`w-full relative flex items-center justify-between transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-auto ${
          isScrolled 
            ? 'max-w-5xl bg-background/85 backdrop-blur-xl border border-secondary-bg shadow-lg rounded-full h-16 px-6 sm:px-8'
            : 'max-w-full bg-transparent border-transparent h-24 px-[var(--section-px)] rounded-[0px]'
        }`}
        >
          
          <div className="shrink-0 z-10">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-bold transition-all duration-500 ease-in-out ${
                isScrolled 
                  ? 'text-xl text-primary hover:text-accent' 
                  : 'text-2xl text-primary hover:text-accent drop-shadow-md'
              }`}
              style={{ fontFamily: 'var(--font-cormorant-garamond)' }}
            >
              Rida By Rahma
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-8 z-10">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-[15px] font-semibold transition-all duration-500 ease-in-out font-quicksand relative group ${
                    activeSection === link.id 
                      ? 'text-accent' 
                      : isScrolled
                        ? 'text-primary hover:text-accent'
                        : 'text-primary/90 hover:text-accent drop-shadow-sm'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full transition-all duration-500 ease-in-out ${
                    activeSection === link.id
                      ? 'bg-accent opacity-100 scale-100'
                      : 'bg-accent opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100'
                  }`}></span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="tel:+1234567890"
                className={`p-2 transition-all duration-300 rounded-full ${
                  isScrolled
                    ? 'text-primary hover:text-accent hover:bg-accent/10'
                    : 'text-primary hover:text-accent hover:bg-background/20 drop-shadow-sm'
                }`}
                title="Call Us"
              >
                <Icon name="phone" className="w-5 h-5" />
              </a>
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-500 ease-in-out font-quicksand shadow-sm hover:shadow-md active:scale-95 ${
                isScrolled
                  ? 'bg-primary hover:bg-primary-hover text-surface'
                  : 'bg-background hover:bg-surface text-primary backdrop-blur-md'
              }`}
            >
              BOOK NOW
            </button>
          </div>

          <div className="lg:hidden z-10">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-primary hover:bg-secondary-bg/50'
                  : 'text-primary hover:bg-background/20 drop-shadow-sm'
              }`}
            >
              <div className="w-5 h-5 relative flex flex-col justify-center items-center">
                <span className={`block w-5 h-[2px] bg-current transform transition-all duration-300 ease-in-out absolute ${
                  isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}></span>
                <span className={`block w-5 h-[2px] bg-current transform transition-all duration-300 ease-in-out absolute ${
                  isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}></span>
                <span className={`block w-5 h-[2px] bg-current transform transition-all duration-300 ease-in-out absolute ${
                  isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Full-Screen Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-[100] bg-[#FDFBF7] flex flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        {/* Decorative Ambient Background Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div
            className="absolute top-1/4 right-0 w-[70%] h-[60%] rounded-full opacity-50"
            style={{
              background:
                'radial-gradient(circle, rgba(239,230,221,0.95) 0%, rgba(244,213,194,0.45) 50%, rgba(253,251,247,0) 70%)',
            }}
          />
          <div
            className="absolute bottom-1/4 left-0 w-[60%] h-[50%] rounded-full opacity-45"
            style={{
              background:
                'radial-gradient(circle, rgba(232,195,176,0.85) 0%, rgba(253,251,247,0) 70%)',
            }}
          />
        </div>

        {/* Top Header: Brand & Close Button */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold tracking-tight text-[#5A6B56] text-left transition-colors hover:text-[#8C5A3E]"
              style={{ fontFamily: 'var(--font-cormorant-garamond)' }}
            >
              Rida By Rahma
            </button>
            <span className="text-[9px] tracking-[0.25em] uppercase text-[#8C5A3E] font-semibold font-quicksand mt-0.5">
              Psychiatry & Wellness
            </span>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-3 rounded-full border border-[#5A6B56]/20 bg-white/70 text-[#5A6B56] hover:bg-[#5A6B56] hover:text-[#FDFBF7] transition-all shadow-sm active:scale-95"
            aria-label="Close menu"
          >
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>

        {/* Center: Editorial Numbered Navigation Links */}
        <div className="flex flex-col w-full max-w-xs mx-auto my-auto py-6">
          {navLinks.map((link, idx) => {
            const indexStr = `0${idx + 1}`;
            const isActive = activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`group flex items-center justify-between py-3.5 border-b border-[#5A6B56]/15 transition-all duration-300 text-left ${
                  isActive
                    ? 'text-[#8C5A3E] pl-2'
                    : 'text-[#5A6B56] hover:text-[#8C5A3E] hover:pl-2'
                }`}
              >
                <div className="flex items-baseline space-x-4">
                  <span className="text-xs font-quicksand font-semibold tracking-[0.25em] text-[#8C5A3E]/70 uppercase">
                    {indexStr}
                  </span>
                  <span
                    className={`text-3xl sm:text-4xl tracking-wide transition-all ${
                      isActive ? 'font-medium italic' : 'font-normal'
                    }`}
                    style={{ fontFamily: 'var(--font-cormorant-garamond)' }}
                  >
                    {link.label}
                  </span>
                </div>

                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#8C5A3E] opacity-100 scale-100'
                      : 'bg-[#8C5A3E] opacity-0 scale-0 group-hover:opacity-60 group-hover:scale-100'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Bottom: Professional Psychiatric Care CTA & Contact */}
        <div className="flex flex-col space-y-3.5 w-full max-w-xs mx-auto">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#5A6B56]/70 text-center font-semibold font-quicksand">
            Confidential Online Psychiatric Care
          </p>

          <a
            href="tel:+1234567890"
            className="flex items-center justify-center space-x-2.5 py-3 px-4 rounded-full border border-[#8C5A3E]/25 bg-white/70 text-[#8C5A3E] hover:bg-[#8C5A3E] hover:text-white transition-all duration-300 font-semibold text-xs tracking-wider uppercase font-quicksand"
          >
            <Icon name="phone" className="w-4 h-4" />
            <span>Call Our Care Team</span>
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="w-full bg-[#5A6B56] hover:bg-[#465443] text-[#FDFBF7] py-4 rounded-full text-xs font-bold tracking-[0.22em] uppercase transition-all duration-300 font-quicksand shadow-lg hover:shadow-xl active:scale-95"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </>
  );
}