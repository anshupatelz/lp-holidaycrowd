import Image from "next/image";
import FloatingNavigation from "@/components/FloatingNavigation";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import StatsSection from "@/components/StatsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import FamousAttractionsSection from "@/components/FamousAttractionsSection";
import FAQSection from "@/components/FAQSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";


export default function Home() {
  return (
    <div>
      <FloatingNavigation />
      <HeroSection />
      <StatsSection />
      <PackagesSection />
      <ActivitiesSection />
      <FamousAttractionsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
