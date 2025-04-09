
import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="bg-trizen-light py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-6 text-left"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-trizen-dark mb-6"
              variants={fadeIn}
            >
              Empowering Innovation with Human-Centered AI Solutions.
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 max-w-xl"
              variants={fadeIn}
            >
              We help startups and enterprises unlock digital value through cutting-edge AI, 
              cloud, and full-stack engineering.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={fadeIn}
            >
              <Button 
                className="bg-trizen-purple hover:bg-trizen-purple/90 transition-all hover:translate-y-[-2px] text-white px-6 py-6"
              >
                <span>Explore Our Capabilities</span>
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-gray-300 hover:bg-gray-50 text-trizen-dark px-6 py-6"
              >
                <span>Schedule a Consultation</span>
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div
              className="flex flex-wrap gap-6 items-center"
              variants={fadeIn}
            >
              <div className="text-sm text-gray-500">Trusted by innovative companies</div>
              <div className="flex flex-wrap gap-8">
                <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=150&auto=format" 
                  alt="Client logo" className="h-8 grayscale opacity-60 hover:opacity-100 transition-opacity" />
                <img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=150&auto=format" 
                  alt="Client logo" className="h-8 grayscale opacity-60 hover:opacity-100 transition-opacity" />
                <img src="https://images.unsplash.com/photo-1611162618479-ee4a1cea7cdf?q=80&w=150&auto=format" 
                  alt="Client logo" className="h-8 grayscale opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="lg:col-span-6 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -z-10 top-0 right-0 w-4/5 h-4/5 bg-gradient-to-br from-trizen-purple/20 to-trizen-blue/20 rounded-tr-3xl"></div>
              <div className="absolute -z-10 w-20 h-20 -top-8 -left-8 bg-trizen-blue/10 rounded-full blur-xl"></div>
              <div className="absolute -z-10 w-16 h-16 -bottom-4 right-8 bg-trizen-purple/10 rounded-full blur-lg"></div>
              
              {/* Main image */}
              <img 
                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="AI Innovation" 
                className="rounded-lg shadow-lg object-cover w-full relative z-10 border border-gray-100"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
