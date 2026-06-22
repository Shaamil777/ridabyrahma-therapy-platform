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

  return (
    <>
      <nav className={`fixed left-0 right-0 z-50 font-quicksand transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] flex justify-center ${
        isScrolled ? 'top-4 sm:top-6 px-4 sm:px-6 pointer-events-none' : 'top-0 pointer-events-none'
      }`}>
        <div className={`w-full relative flex items-center justify-between transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-auto ${
          isScrolled 
            ? 'max-w-5xl bg-background/85 backdrop-blur-xl border border-secondary-bg shadow-lg rounded-full h-16 px-6 sm:px-8'
            : 'max-w-[100vw] bg-transparent border-transparent h-24 px-[var(--section-px)] rounded-[0px]'
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

          <div className={`absolute top-[calc(100%+1rem)] left-0 right-0 origin-top transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
            isMobileMenuOpen 
              ? 'opacity-100 pointer-events-auto translate-y-0 scale-y-100' 
              : 'opacity-0 pointer-events-none -translate-y-4 scale-y-95'
          }`}>
            <div className="bg-background/95 backdrop-blur-2xl border border-secondary-bg shadow-xl rounded-2xl p-4 overflow-hidden">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 font-quicksand flex items-center ${
                      activeSection === link.id 
                        ? 'text-accent bg-accent/10' 
                        : 'text-primary hover:text-accent hover:bg-secondary-bg/50'
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent"></span>
                    )}
                  </button>
                ))}
                
                <div className="h-px bg-secondary-bg my-3"></div>
                
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center space-x-2 w-full py-3 text-primary hover:text-accent transition-colors duration-300 font-medium"
                >
                  <Icon name="phone" className="w-5 h-5" />
                  <span>Call Us</span>
                </a>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-primary hover:bg-primary-hover text-surface px-4 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 font-quicksand shadow-sm active:scale-95 mt-2"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}