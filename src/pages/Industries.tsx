import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CTABanner from "@/components/marketing/CTABanner";
import PageMeta from "@/components/marketing/PageMeta";
import { industries } from "@/content/industries";

const Industries = () => {
  return (
    <>
      <PageMeta
        title="Industries"
        path="/industries"
        description="Sector expertise where operational AI compounds, across healthcare, financial services, and more."
      />
      <section className="border-b border-zinc-200 bg-white pt-28 pb-20 sm:pt-32 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionHeader
              eyebrow="Industries"
              title="Sector expertise where operational AI compounds"
              description="We apply the same delivery discipline across verticals, grounded in the workflows, regulations, and systems that define each industry."
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.slug}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              >
                <Link
                  to={`/industries/${industry.slug}`}
                  className="group glass-panel card-lift flex h-full flex-col rounded-xl p-8 md:p-10"
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
                    {industry.title}
                  </h2>
                  <p className="text-zinc-600 leading-relaxed mb-6 flex-grow">
                    {industry.description}
                  </p>
                  <div className="mb-6">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-600 mb-3">
                      Key pain points
                    </p>
                    <ul className="space-y-2">
                      {industry.painPoints.slice(0, 3).map((point) => (
                        <li
                          key={point}
                          className="text-sm text-foreground/70 flex gap-2"
                        >
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    View industry
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Building for your industry?"
        description="Tell us about your operating constraints. We'll map a pragmatic AI path from pilot to production."
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </>
  );
};

export default Industries;
