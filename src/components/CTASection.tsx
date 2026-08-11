import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-trizen-purple to-[#6c62e2]" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to build something impactful?
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Start a research collaboration, talk to our consulting team, or explore training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#research">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-trizen-purple hover:bg-white/90 transition-all duration-200"
              >
                Start a collaboration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="/#consulting">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-trizen-purple transition-all duration-200"
              >
                Contact us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
