import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CTABanner from "@/components/marketing/CTABanner";
import PageMeta from "@/components/marketing/PageMeta";
import { serviceCategories, getServicesByCategory } from "@/content/services";

const Services = () => {
  return (
    <>
      <PageMeta
        title="Services"
        path="/services"
        description="AI consulting, strategy, generative AI, automation, agents, voice, data engineering, ML, computer vision, NLP, and custom AI development."
      />
      <section className="border-b border-zinc-200 bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionHeader
              eyebrow="Our Services"
              title="Enterprise AI capabilities built for measurable outcomes"
              description="Strategy, automation, intelligence, and custom build, delivered as a single operating partner rather than a pile of disconnected pilots."
            />
          </motion.div>
        </div>
      </section>

      {serviceCategories.map((category) => {
        const items = getServicesByCategory(category);
        if (!items.length) return null;

        return (
          <section
            key={category}
            className="py-14 md:py-20 border-b border-zinc-200"
            aria-labelledby={`services-${category}`}
          >
            <div className="container mx-auto px-4">
              <h2
                id={`services-${category}`}
                className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-600 mb-8"
              >
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {items.map((service, index) => (
                  <motion.div
                    key={service.slug}
                    initial={{ y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                  >
                    <Link
                      to={`/services/${service.slug}`}
                      className="group glass-panel card-lift flex h-full flex-col rounded-2xl p-6 md:p-7"
                    >
                      <h3 className="text-lg font-semibold tracking-tight text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-zinc-600 leading-relaxed mb-5 flex-grow">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-primary">
                        Explore
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner
        title="Ready to prioritize the right AI bets?"
        description="Book a consultation to map outcomes, readiness, and a delivery path your leadership team can fund."
        secondaryLabel="View industries"
        secondaryHref="/industries"
      />
    </>
  );
};

export default Services;
