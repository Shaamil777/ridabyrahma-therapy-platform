'use client';

import { useState, useEffect, useCallback } from 'react';
import Icon from '@/app/components/ui/Icons';
import { navLinks } from '@/app/data/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Single combined scroll handler for both scroll state and active section tracking
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
      {/* Animated Background for Main Navbar */}
      <div className={`fixed top-0 left-0 right-0 z-40 h-16 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-secondary-bg shadow-lg transform translate-y-0' 
          : 'bg-transparent border-b border-transparent transform -translate-y-full'
      }`}></div>

      {/* Main Navbar Content (Always Visible) */}
      <nav className="fixed top-0 left-0 right-0 z-50 font-quicksand">
        <div className="flex items-center justify-between h-16" style={{ paddingLeft: 'var(--section-px)', paddingRight: 'var(--section-px)' }}>
          
          {/* Logo */}
          <div className="shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-bold text-2xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-accent hover:text-primary' 
                  : 'text-primary hover:text-accent drop-shadow-lg'
              }`}
              style={{ fontFamily: 'var(--font-cormorant-garamond)' }}
            >
              Rida By Rahma
            </button>
          </div>

          {/* Right side - Navigation, Icons, and Book Now */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-base font-semibold transition-all duration-500 ease-in-out font-quicksand relative ${
                    activeSection === link.id 
                      ? isScrolled 
                        ? 'text-accent' 
                        : 'text-primary drop-shadow-2xl shadow-background'
                      : isScrolled
                        ? 'text-primary hover:text-accent'
                        : 'text-primary/90 hover:text-accent drop-shadow-xl shadow-background'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-500 ease-in-out ${
                    activeSection === link.id
                      ? isScrolled
                        ? 'bg-accent scale-x-100'
                        : 'bg-primary scale-x-100'
                      : 'bg-transparent scale-x-0'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Contact Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="tel:+1234567890"
                className={`p-2 transition-all duration-300 rounded-full ${
                  isScrolled
                    ? 'text-calm-accent hover:text-accent hover:bg-calm-accent/10'
                    : 'text-primary hover:text-background hover:bg-background/10 drop-shadow-md'
                }`}
                title="Call Us"
              >
                <Icon name="phone" className="w-5 h-5" />
              </a>
            </div>

            {/* Book Now Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg font-quicksand ${
                isScrolled
                  ? 'bg-calm-accent hover:bg-primary text-background'
                  : 'bg-background/90 hover:bg-background text-primary hover:text-accent backdrop-blur-sm'
              }`}
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${
                isScrolled
                  ? 'text-primary hover:text-accent'
                  : 'text-background hover:text-background/80 drop-shadow-lg'
              }`}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-3 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-secondary-bg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 font-quicksand ${
                    activeSection === link.id 
                      ? 'text-accent bg-accent-light' 
                      : 'text-primary hover:text-accent hover:bg-accent-light'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              {/* Mobile Contact Icons */}
              <div className="flex items-center justify-center space-x-6 pt-4 pb-2">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 text-calm-accent hover:text-accent transition-colors duration-200"
                >
                  <Icon name="phone" className="w-5 h-5" />
                  <span className="text-sm font-medium">Call</span>
                </a>
              </div>
              
              {/* Mobile Book Now Button */}
              <div className="pt-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-calm-accent hover:bg-primary text-background px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 font-quicksand"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}