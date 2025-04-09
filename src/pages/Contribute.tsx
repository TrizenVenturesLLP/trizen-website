
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContributeSection from "@/components/ContributeSection";

const Contribute = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-trizen-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-trizen-dark text-center mb-4">Contribute</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Join us in making a difference. Discover ways to contribute to our community and initiatives.
            </p>
          </div>
        </div>
        <ContributeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contribute;
