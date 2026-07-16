import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CTABanner from "@/components/marketing/CTABanner";
import BlueprintDiagram from "@/components/marketing/BlueprintDiagram";
import PageMeta from "@/components/marketing/PageMeta";
import FadeIn from "@/components/marketing/FadeIn";
import AnimatedCounter from "@/components/marketing/AnimatedCounter";
import FaqList from "@/components/marketing/FaqList";
import ProcessSteps from "@/components/marketing/ProcessSteps";
import RelatedCaseStudies from "@/components/marketing/RelatedCaseStudies";
import {
  getBlueprintForCategory,
  getServiceCategoryCopy,
  getServicesByCategory,
  serviceCategories,
} from "@/content/services";
import {
  engagementModels,
  engagementTimeline,
  servicesFaq,
} from "@/content/marketingExtras";
import { getFeaturedCaseStudies } from "@/content/caseStudies";
import { metricClaims } from "@/content/homeData";
import { cn } from "@/lib/utils";

const Services = () => {
  const featuredCases = getFeaturedCaseStudies().slice(0, 2);

  return (
    <>
      <PageMeta
        title="Services"
        path="/services"
        description="AI consulting, automation, data, and custom builds that help your business work smarter - clear plans and real results."
      />

      <section className="relative overflow-hidden border-b border-zinc-200 section-mesh pt-28 pb-20 sm:pt-32 md:pt-36 md:pb-28">
        <div className="mobile-orb -right-10 top-10 h-48 w-48 bg-indigo-400/20 md:hidden" aria-hidden />
        <div className="container relative mx-auto px-4">
          <FadeIn className="max-w-3xl" y={12}>
            <SectionHeader
              tone="light"
              eyebrow="What we do"
              title="Practical AI services for your business"
              description="From strategy to automation and custom builds - we help you pick the right projects, ship them safely, and see real results. One team, clear ownership."
            />
          </FadeIn>
        </div>
      </section>

      {/* KPI strip */}
      <section
        className="relative overflow-hidden border-b border-zinc-200 section-mesh-invert py-12 md:py-14"
        aria-label="Outcomes at a glance"
      >
        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 md:gap-x-10">
            {metricClaims.map((claim, index) => (
              <FadeIn key={claim.id} delay={index * 0.05} y={10}>
                <div className="md:border-l md:border-zinc-200 md:pl-4">
                  <p className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-zinc-900 mb-2 tabular-nums">
                    <AnimatedCounter value={claim.value} suffix={claim.suffix} />
                  </p>
                  <p className="text-sm text-zinc-600 leading-snug">{claim.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="relative overflow-hidden border-b border-zinc-200 section-mesh-muted py-16 md:py-24">
        <div className="container relative mx-auto px-4">
          <FadeIn className="mb-10 md:mb-12 max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-indigo-600 mb-2">
              How we engage
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-zinc-900 mb-3">
              Keep control. Or hand delivery to us.
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Every engagement is scoped around outcomes, constraints, and the thinnest path to
              production - not a catalog of disconnected pilots.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {engagementModels.map((model, index) => (
              <FadeIn key={model.id} delay={index * 0.06} y={12} className="h-full">
                <article className="card-sheen glass-panel-light card-lift-light flex h-full flex-col rounded-2xl p-6 md:p-7">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                    <model.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-900 mb-2">
                    {model.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{model.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {serviceCategories.map((category, categoryIndex) => {
        const items = getServicesByCategory(category);
        if (!items.length) return null;
        const blueprint = getBlueprintForCategory(category);
        const copy = getServiceCategoryCopy(category);
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
              <FadeIn className="mb-10 md:mb-12" y={12}>
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
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {items.map((service, index) => (
                  <FadeIn key={service.slug} delay={index * 0.05} className="h-full" y={12}>
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
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Delivery timeline */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-white py-16 md:py-24">
        <div className="container relative mx-auto px-4">
          <ProcessSteps
            steps={engagementTimeline}
            eyebrow="Delivery path"
            title="From discovery to production ownership"
            description="A repeatable path that lands value early without skipping governance."
          />
        </div>
      </section>

      {/* Case teaser */}
      <section className="relative overflow-hidden border-b border-zinc-200 section-mesh-muted py-16 md:py-24">
        <div className="container relative mx-auto px-4">
          <RelatedCaseStudies
            studies={featuredCases}
            eyebrow="Case studies"
            title="Outcomes from recent engagements"
          />
          <FadeIn className="mt-8">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              View all case studies
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-white py-16 md:py-24">
        <div className="container relative mx-auto px-4 max-w-3xl">
          <FaqList items={servicesFaq} title="What leaders ask before we start" />
        </div>
      </section>

      <CTABanner
        title="Not sure where to start?"
        description="Book a short call. We'll help you choose the highest-impact AI projects and a simple path to deliver them."
        secondaryLabel="View products"
        secondaryHref="/products"
      />
    </>
  );
};

export default Services;
