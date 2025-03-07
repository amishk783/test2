import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import TiredOfBoringSection from "./components/sections/TiredOfBoringSection";
import DemoSection from "./components/sections/DemoSection";
// import PricingSection from "./components/sections/PricingSection";
import { AiSuperpowersSection } from "./components/sections/AiSuperpowersSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { FinalCtaSection } from "./components/sections/FinalCtaSection";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <main className="flex flex-col gap-6 overflow-hidden ">
      <HeroSection />
      <FeaturesSection />
      <TiredOfBoringSection />
      <DemoSection />
      {/* <PricingSection /> */}
      <AiSuperpowersSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <Footer /> 
    </main>
  );
}
