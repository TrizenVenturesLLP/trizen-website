import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CTABanner from "@/components/marketing/CTABanner";
import BlueprintDiagram from "@/components/marketing/BlueprintDiagram";
import PageMeta from "@/components/marketing/PageMeta";
import {
  getBlueprintForCategory,
  getServicesByCategory,
  serviceCategories,
  type ServiceCategory,
} from "@/content/services";
import { cn } from "@/lib/utils";

const categoryCopy: Record<
  ServiceCategory,
  { headline: string; blurb: string }
> = {
  Strategy: {
    headline: "Direction before delivery",
    blurb:
      "Advisory and roadmaps that turn ambitious AI ideas into funded, governed programs leadership can stand behind.",
  },
  Automation: {
    headline: "Operations that run themselves",
    blurb:
      "Workflows, agents, voice, and messaging systems that remove friction across back-office, supply chain, and customer operations.",
  },
  Intelligence: {
    headline: "Data that actually drives decisions",
    blurb:
      "Data engineering, analytics, ML, and language systems built on your real data, not generic models.",
  },
  Build: {
    headline: "Products your teams can own",
    blurb:
      "Custom AI applications engineered for production, security, compliance, and clean handoff to your teams.",
  },
};

const Services = () => {
  return (
    <>
      <PageMeta
        title="Services"
        path="/services"
        description="Enterprise AI consulting, automation, agents, data platforms, and custom build, delivered as one operating partner."
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200 section-mesh pt-28 pb-20 sm:pt-32 md:pt-36 md:pb-28">
        <div className="mobile-orb -right-10 top-10 h-48 w-48 bg-indigo-400/20 md:hidden" aria-hidden />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <SectionHeader
              tone="light"
              eyebrow="What we do"
              title="AI that transforms how enterprises operate"
              description="We help organizations move from scattered AI experiments to governed, production-grade systems, delivered as one accountable operating partner, not disconnected pilots."
            />
          </motion.div>
        </div>
      </section>

      {/* Category catalogs */}
      {serviceCategories.map((category, categoryIndex) => {
        const items = getServicesByCategory(category);
        if (!items.length) return null;
        const blueprint = getBlueprintForCategory(category);
        const copy = categoryCopy[category];
        const muted = categoryIndex % 2 === 1;

        return (
          <section
            key={category}
            className={cn(
              "relative overflow-hidden border-b border-zinc-200 py-16 md:py-24",
              muted ? "section-mesh-muted" : "section-mesh-invert bg-white"
            )}
            aria-labelledby={`services-${category}`}
          >
            {categoryIndex % 2 === 0 ? (
              <div
                className="mobile-orb -left-12 top-20 h-44 w-44 bg-indigo-400/15 md:hidden"
                aria-hidden
              />
            ) : (
              <div
                className="mobile-orb -right-8 bottom-16 h-40 w-40 bg-sky-400/15 md:hidden"
                aria-hidden
              />
            )}

            <div className="container relative mx-auto px-4">
              {/* Category header */}
              <motion.div
                initial={{ y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mb-10 md:mb-12"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-6 min-w-0">
                  <div
                    className="relative flex h-20 w-36 sm:h-24 sm:w-44 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-indigo-100/80 bg-white shadow-md shadow-indigo-500/5 ring-1 ring-white"
                    aria-hidden
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/40" />
                    <BlueprintDiagram
                      type={blueprint}
                      theme="light"
                      active
                      className="relative max-w-[140px] sm:max-w-[160px]"
                    />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-indigo-600 mb-2">
                      {String(categoryIndex + 1).padStart(2, "0")} · {category}
                    </p>
                    <h2
                      id={`services-${category}`}
                      className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-zinc-900 mb-2"
                    >
                      {copy.headline}
                    </h2>
                    <p className="text-base text-zinc-600 leading-relaxed max-w-xl">
                      {copy.blurb}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Service cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {items.map((service, index) => (
                  <motion.div
                    key={service.slug}
                    initial={{ y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min(index * 0.05, 0.25),
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full"
                  >
                    <Link
                      to={`/services/${service.slug}`}
                      className={cn(
                        "group card-sheen glass-panel-light card-lift-light relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl p-6 md:p-7",
                        "border-indigo-100/70 shadow-md shadow-indigo-500/5",
                        "transition-[border-color,box-shadow,transform] duration-300",
                        "hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10"
                      )}
                    >
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden
                      />
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400 mb-3">
                        {category}
                      </p>
                      <h3 className="text-lg md:text-xl font-semibold tracking-[-0.03em] text-zinc-900 mb-3 group-hover:text-indigo-950 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-zinc-600 leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>
                      <span className="mt-auto inline-flex items-center text-sm font-semibold text-indigo-600">
                        Explore
                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
        secondaryLabel="View products"
        secondaryHref="/products"
      />
    </>
  );
};

export default Services;
