import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

const Hero = () => {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden border-b border-zinc-200 bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-white" />
        {/* Indigo ambient spotlight — studio lighting on white */}
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] max-w-[90vw] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(24,24,27,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 min-h-[min(100dvh,900px)] sm:min-h-[calc(100dvh-4rem)] flex flex-col justify-center pt-16 sm:pt-24 md:pt-32 pb-20 md:pb-24">
        <motion.div
          className="max-w-3xl"
          initial={reduced ? false : { y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-indigo-600 mb-5 sm:mb-6">
            {siteConfig.name}
          </p>
          <h1
            id="hero-heading"
            className="text-[2.125rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold tracking-[-0.04em] sm:leading-[1.05] mb-5 sm:mb-6 text-zinc-900"
          >
            Automate Operations.
            <br />
            Reduce Costs.
            <br />
            Scale Faster.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-xl leading-relaxed mb-8 sm:mb-10">
            Enterprise AI transformation for leaders who need measurable
            operational outcomes: strategy, automation, and production systems
            delivered with proprietary products.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="btn-micro w-full sm:w-auto sm:min-w-[200px] min-h-12 touch-manipulation"
            >
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-micro w-full sm:w-auto sm:min-w-[200px] min-h-12 touch-manipulation"
            >
              <Link to="/case-studies">Explore Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
