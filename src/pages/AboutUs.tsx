
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUsSection from "@/components/AboutUsSection";
import OurWingsSection from "@/components/OurWingsSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-trizen-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-trizen-dark text-center mb-4">About Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Learn about our team, our mission, and the values that drive us forward.
            </p>
          </div>
        </div>
        <AboutUsSection />
        <OurWingsSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
