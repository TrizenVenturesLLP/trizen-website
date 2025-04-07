
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-trizen-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trizen-dark mb-6 max-w-xl">
              Learn from the experts. We offer hands-on training in AI/ML, Web Development, and more.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              We're Providing Teaching Services
            </p>
            
            <Button 
              className="rounded-full px-6 py-6 bg-trizen-blue hover:bg-trizen-blue/90 transition-all hover:scale-105 text-white"
            >
              Read the report
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            {/* Bottom Navigation Tabs */}
            <div className="mt-10 flex flex-wrap gap-6">
              <a href="#" className="text-gray-700 hover:text-trizen-purple hover:underline text-sm">
                Multi-agent services
              </a>
              <a href="#" className="text-gray-700 hover:text-trizen-purple hover:underline text-sm">
                New minds, new markets
              </a>
              <a href="#" className="text-gray-700 hover:text-trizen-purple hover:underline text-sm">
                Age of gen AI
              </a>
              <a href="#" className="text-gray-700 hover:text-trizen-purple hover:underline text-sm">
                Trizen Moment
              </a>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -z-10 top-0 right-0 w-4/5 h-4/5 bg-gradient-to-br from-trizen-purple/20 to-trizen-blue/20 rounded-tr-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Team collaborating" 
                className="rounded-lg shadow-lg object-cover w-full max-w-md h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
