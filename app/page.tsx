"use client";

import GlobalLoadingSequence from "./components/ui/GlobalLoadingSequence";
import HeroSection from "./components/sections/HeroSection";
import TrustSection from "./components/sections/TrustSection";
import AboutSection from "./components/sections/AboutSection";
import HowTherapyWorksSection from "./components/sections/HowTherapyWorksSection";
import ServiceSection from "./components/sections/ServiceSection";
import TeamSection from "./components/sections/TeamSection";
import FaqSection from "./components/sections/FaqSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <GlobalLoadingSequence />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <HowTherapyWorksSection />
      <ServiceSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
