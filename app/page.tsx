import HeroSection from "./components/sections/HeroSection";
import TrustSection from "./components/sections/TrustSection";
import AboutSection from "./components/sections/AboutSection";
import ServiceSection from "./components/sections/ServiceSection";
import TeamSection from "./components/sections/TeamSection";
import FaqSection from "./components/sections/FaqSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ServiceSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}
