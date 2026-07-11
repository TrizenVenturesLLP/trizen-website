import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CardMedia from "@/components/marketing/CardMedia";
import FadeIn from "@/components/marketing/FadeIn";
import {
  homePillars,
  homeCapabilityTabs,
  getHomeTabServices,
  type HomeCapabilityTab,
} from "@/content/services";
import { cn } from "@/lib/utils";

const HomeServices = () => {
  const reduced = useReducedMotion();
  const [primary, ...side] = homePillars;
  const [activeTab, setActiveTab] = useState<HomeCapabilityTab>("Strategy");
  const activeMeta = homeCapabilityTabs.find((t) => t.id === activeTab)!;
  const tabServices = getHomeTabServices(activeTab);

  return (
    <section className="py-24 md:py-32 border-b border-zinc-200 bg-white text-zinc-900">
      <div className="container mx-auto px-4">
        <FadeIn className="mb-10 md:mb-14">
          <SectionHeader
            tone="light"
            eyebrow="Our Services"
            title="Enterprise AI capabilities across strategy, automation, and intelligence"
            description="From advisory roadmaps to production agents, data platforms, and custom AI products, engaged as one operating partner."
          />
        </FadeIn>

        {/* Equal-gap bento: 1 tall left + 2 equal-height right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 md:gap-5 mb-12 md:mb-16 lg:auto-rows-fr">
          {primary && (
            <FadeIn className="lg:row-span-2 h-full min-h-[380px] flex" delay={0.05}>
              <Link
                to={`/services/${primary.slug}`}
                className="group glass-panel-light card-lift-light flex h-full w-full min-h-[380px] flex-col rounded-2xl transform-gpu transition-[border-color,box-shadow] hover:border-indigo-200"
              >
                <CardMedia
                  theme="light"
                  blueprint={primary.blueprint}
                  size="tall"
                  className="rounded-t-2xl border-0 min-h-[200px] lg:min-h-[240px]"
                />
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">
                    {primary.category}
                  </p>
                  <h3 className="text-2xl md:text-[1.75rem] font-semibold tracking-[-0.03em] text-zinc-900 mb-3">
                    {primary.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed mb-6 flex-grow">
                    {primary.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-zinc-700 group-hover:text-zinc-950 transition-colors">
                    Learn more
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          )}

          {side.map((pillar, index) => (
            <FadeIn key={pillar.slug} delay={0.1 + index * 0.08} className="h-full min-h-0 flex">
              <Link
                to={`/services/${pillar.slug}`}
                className={cn(
                  "group glass-panel-light card-lift-light flex h-full w-full flex-col sm:flex-row rounded-2xl overflow-hidden transform-gpu transition-[border-color,box-shadow] hover:border-indigo-200",
                  "min-h-[180px]"
                )}
              >
                <CardMedia
                  theme="light"
                  blueprint={pillar.blueprint}
                  className="sm:w-[40%] sm:min-h-full sm:aspect-auto sm:border-b-0 sm:border-r border-zinc-200 rounded-none shrink-0"
                />
                <div className="flex flex-1 flex-col justify-center p-6 md:p-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">
                    {pillar.category}
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold tracking-[-0.03em] text-zinc-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4 line-clamp-2">
                    {pillar.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-zinc-700 group-hover:text-zinc-950 transition-colors">
                    Learn more
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 md:mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-600 mb-2">
                Capabilities
              </p>
              <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.03em] text-zinc-900">
                Explore by practice area
              </h3>
            </div>
            <Link
              to="/services"
              className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors inline-flex items-center self-start sm:self-auto"
            >
              View all services
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <div
                className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 lg:sticky lg:top-24"
                role="tablist"
                aria-label="Service categories"
              >
                {homeCapabilityTabs.map((tab) => {
                  const active = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "shrink-0 text-left rounded-xl px-4 py-3.5 md:py-4 transition-colors touch-manipulation min-h-12",
                        "border border-transparent",
                        active
                          ? "bg-indigo-50 border-indigo-100 text-zinc-900"
                          : "text-zinc-500 hover:text-indigo-700 hover:bg-zinc-50"
                      )}
                    >
                      <span
                        className={cn(
                          "block text-lg md:text-xl font-semibold tracking-[-0.03em]",
                          active ? "text-indigo-600" : "text-inherit"
                        )}
                      >
                        {tab.label}
                      </span>
                      <span
                        className={cn(
                          "mt-1 hidden lg:block text-sm leading-relaxed",
                          active ? "text-zinc-600" : "text-zinc-400"
                        )}
                      >
                        {tab.blurb}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-8 min-h-[280px]" role="tabpanel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={reduced ? false : { y: 10 }}
                  animate={{ y: 0 }}
                  exit={reduced ? undefined : { y: -6 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="transform-gpu"
                >
                  <p className="text-sm text-zinc-500 mb-6 max-w-xl lg:hidden">
                    {activeMeta.blurb}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {tabServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to={`/services/${service.slug}`}
                          className="group flex h-full flex-col rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-5 transition-[border-color,box-shadow,background-color] hover:border-indigo-200 hover:bg-white hover:shadow-[0_4px_12px_-8px_rgba(15,23,42,0.12)] touch-manipulation min-h-[108px] transform-gpu"
                        >
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 mb-2">
                            {service.category}
                          </span>
                          <span className="text-base font-medium text-zinc-900 group-hover:text-zinc-950 mb-2">
                            {service.title}
                          </span>
                          <span className="text-sm text-zinc-600 leading-relaxed line-clamp-2 flex-grow">
                            {service.description}
                          </span>
                          <span className="mt-4 inline-flex items-center text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">
                            Learn more
                            <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HomeServices;
