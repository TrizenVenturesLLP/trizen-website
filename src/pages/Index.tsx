
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
