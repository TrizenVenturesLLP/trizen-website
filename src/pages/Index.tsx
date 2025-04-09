
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingCard from "@/components/FloatingCard";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import ContributeSection from "@/components/ContributeSection";
import AboutUsSection from "@/components/AboutUsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <GallerySection />
        <EventsSection />
        <ContributeSection />
        <AboutUsSection />
      </main>
      <FloatingCard />
    </div>
  );
};

export default Index;
