
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurWingsSection from "@/components/OurWingsSection";
import FloatingCard from "@/components/FloatingCard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <OurWingsSection />
      </main>
      <FloatingCard />
      <Footer />
    </div>
  );
};

export default Index;
