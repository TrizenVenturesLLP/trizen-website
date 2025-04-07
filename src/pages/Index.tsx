
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingCard from "@/components/FloatingCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <FloatingCard />
    </div>
  );
};

export default Index;
