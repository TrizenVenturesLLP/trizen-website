
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-trizen-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-trizen-dark text-center mb-4">Gallery</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Explore our visual showcase of workshops, projects, designs, and community events.
            </p>
          </div>
        </div>
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
