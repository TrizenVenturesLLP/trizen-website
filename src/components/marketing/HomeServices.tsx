import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
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

/**
 * Home services: elevated bento pillars + practice-area tabs.
 */
const HomeServices = () => {
  const reduced = useReducedMotion();
  const [primary, ...side] = homePillars;
  const [activeTab, setActiveTab] = useState<HomeCapabilityTab>("Strategy");
  const activeMeta = homeCapabilityTabs.find((t) => t.id === activeTab)!;
  const tabServices = getHomeTabServices(activeTab);
  /** Keep a stable 2×2 grid on home — longer catalogs live on /services */
  const visibleServices = tabServices.slice(0, 4);
  const hasMoreServices = tabServices.length > 4;

  return (
    <section className="relative overflow-hidden py-24 md:py-32 border-b border-zinc-200 section-mesh-invert text-zinc-900">
      <div className="mobile-orb -right-12 top-16 h-48 w-48 bg-indigo-400/20 md:hidden" aria-hidden />
      <div className="mobile-orb -left-10 bottom-32 h-40 w-40 bg-sky-400/15 md:hidden" aria-hidden />

      <div className="container relative mx-auto px-4">
        <FadeIn className="mb-10 md:mb-14">
          <SectionHeader
            tone="light"
            eyebrow="What we do"
            title="AI that transforms how enterprises operate"
            description="We help organizations move from scattered AI experiments to governed, production-grade systems, delivered as one accountable operating partner."
          />
        </FadeIn>

        {/* Bento: 1 tall left + 2 stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 md:gap-5 mb-14 md:mb-20 lg:auto-rows-fr">
          {primary && (
            <FadeIn className="lg:row-span-2 h-full min-h-[420px] flex" delay={0.04}>
              <Link
                to={`/services/${primary.slug}`}
                className={cn(
                  "group card-sheen glass-panel-light card-lift-light flex h-full w-full min-h-[420px] flex-col overflow-hidden rounded-2xl md:rounded-3xl transform-gpu",
                  "border-indigo-100/80 shadow-lg shadow-indigo-500/5",
                  "transition-[border-color,box-shadow] duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10"
                )}
              >
                <CardMedia
                  theme="light"
                  blueprint={primary.blueprint}
                  size="tall"
                  className="rounded-none border-0 min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] bg-gradient-to-b from-indigo-50/40 to-zinc-50/80"
                />
                <div className="flex flex-1 flex-col bg-gradient-to-b from-white to-indigo-50/25 p-7 md:p-8 lg:p-9">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-600 mb-3">
                    {primary.category}
                  </p>
                  <h3 className="text-2xl md:text-[1.85rem] font-semibold tracking-[-0.03em] text-zinc-900 mb-3">
                    {primary.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed mb-7 flex-grow text-[15px] md:text-base">
                    {primary.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-indigo-600">
                    Learn more
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          )}

          {side.map((pillar, index) => (
            <FadeIn key={pillar.slug} delay={0.06 + index * 0.04} className="h-full min-h-0 flex">
              <Link
                to={`/services/${pillar.slug}`}
                className={cn(
                  "group card-sheen glass-panel-light card-lift-light flex h-full w-full flex-col sm:flex-row overflow-hidden rounded-2xl transform-gpu",
                  "min-h-[200px] border-indigo-100/80 shadow-md shadow-indigo-500/5",
                  "transition-[border-color,box-shadow] duration-300 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10"
                )}
              >
                <CardMedia
                  theme="light"
                  blueprint={pillar.blueprint}
                  className="sm:w-[44%] sm:min-h-full sm:aspect-auto sm:border-b-0 sm:border-r border-zinc-200/80 rounded-none shrink-0 min-h-[160px] bg-gradient-to-br from-indigo-50/50 to-white"
                />
                <div className="flex flex-1 flex-col justify-center bg-gradient-to-b from-white to-indigo-50/20 p-6 md:p-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-600 mb-2">
                    {pillar.category}
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold tracking-[-0.03em] text-zinc-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4 line-clamp-2">
                    {pillar.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-indigo-600">
                    Learn more
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Capabilities explorer */}
        <FadeIn delay={0.08}>
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-indigo-100/80 bg-white shadow-lg shadow-indigo-500/5">
            <div
              className="pointer-events-none absolute inset-0 opacity-80"
              aria-hidden
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 70% 50% at 0% 0%, rgb(99 102 241 / 0.08), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 100%, rgb(56 189 248 / 0.06), transparent 50%)",
              }}
            />

            <div className="relative p-5 sm:p-7 md:p-9 lg:p-10">
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
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors inline-flex items-center self-start sm:self-auto"
                >
                  View all services
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                <div className="lg:col-span-4">
                  <div
                    className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 lg:sticky lg:top-28"
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
                            "shrink-0 text-left rounded-2xl px-4 py-3.5 md:py-4 transition-all duration-300 touch-manipulation min-h-12",
                            "border",
                            active
                              ? "border-indigo-200 bg-indigo-50/90 text-zinc-900 shadow-md shadow-indigo-500/10"
                              : "border-transparent bg-transparent text-zinc-500 hover:border-zinc-200 hover:bg-white/80 hover:text-indigo-700"
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
                              "mt-1.5 hidden lg:block text-sm leading-relaxed",
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

                <div
                  className="lg:col-span-8 min-h-[28rem] sm:min-h-[30rem]"
                  role="tabpanel"
                >
                  {/* Soft enter only — no exit wait (avoids awkward tab swaps) */}
                  <motion.div
                    key={activeTab}
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="transform-gpu flex flex-col h-full"
                  >
                      <p className="text-sm text-zinc-500 mb-6 max-w-xl lg:hidden">
                        {activeMeta.blurb}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 content-start flex-1">
                        {visibleServices.map((service) => (
                          <li key={service.slug} className="h-full">
                            <Link
                              to={`/services/${service.slug}`}
                              className={cn(
                                "group flex h-full flex-col rounded-2xl border border-zinc-200/90 bg-white px-5 py-5 md:px-6 md:py-6",
                                "shadow-sm shadow-zinc-900/5",
                                "transition-[border-color,box-shadow] duration-300 ease-out",
                                "hover:border-indigo-200 hover:shadow-md hover:shadow-indigo-500/10",
                                "touch-manipulation min-h-[148px] transform-gpu"
                              )}
                            >
                              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-indigo-600/80 mb-2.5">
                                {service.category}
                              </span>
                              <span className="text-base font-semibold tracking-tight text-zinc-900 mb-2">
                                {service.title}
                              </span>
                              <span className="text-sm text-zinc-600 leading-relaxed line-clamp-2 flex-grow">
                                {service.description}
                              </span>
                              <span className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-600">
                                Learn more
                                <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {hasMoreServices ? (
                        <div className="mt-5 pt-1">
                          <Link
                            to="/services"
                            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                          >
                            View all {activeTab.toLowerCase()} services
                            <ArrowRight className="ml-1 h-3.5 w-3.5" />
                          </Link>
                        </div>
                      ) : null}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HomeServices;
