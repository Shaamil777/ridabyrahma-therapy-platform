import dynamic from "next/dynamic";
import GlobalLoadingSequence from "./components/ui/GlobalLoadingSequence";
import HeroSection from "./components/sections/HeroSection";

// Lazy loading and automatic code-splitting for below-the-fold sections
const TrustSection = dynamic(() => import("./components/sections/TrustSection"), {
  ssr: true,
});
const AboutSection = dynamic(() => import("./components/sections/AboutSection"), {
  ssr: true,
});
const HowTherapyWorksSection = dynamic(
  () => import("./components/sections/HowTherapyWorksSection"),
  { ssr: true }
);
const ServiceSection = dynamic(() => import("./components/sections/ServiceSection"), {
  ssr: true,
});
const TeamSection = dynamic(() => import("./components/sections/TeamSection"), {
  ssr: true,
});
const FaqSection = dynamic(() => import("./components/sections/FaqSection"), {
  ssr: true,
});
const ContactSection = dynamic(() => import("./components/sections/ContactSection"), {
  ssr: true,
});

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

