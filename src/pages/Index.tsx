import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurWingsSection from "@/components/OurWingsSection";
import ResearchSection from "@/components/ResearchSection";
import ConsultingSection from "@/components/ConsultingSection";
import ImpactSection from "@/components/ImpactSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to section when landing with hash (e.g. /#research, /#consulting)
  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      const timer = setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <OurWingsSection />
        <ResearchSection />
        <ConsultingSection />
        <ImpactSection />
        <FeaturedProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
