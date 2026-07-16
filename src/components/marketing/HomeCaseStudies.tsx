import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CardMedia from "@/components/marketing/CardMedia";
import FadeIn from "@/components/marketing/FadeIn";
import AnimatedCounter from "@/components/marketing/AnimatedCounter";
import { getFeaturedCaseStudies } from "@/content/caseStudies";
import { parseLeadingMetric } from "@/lib/parseMetric";
import { cn } from "@/lib/utils";

const HomeCaseStudies = () => {
  const caseStudies = getFeaturedCaseStudies().slice(0, 2);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 border-b border-zinc-200 section-mesh text-zinc-950">
      <div className="mobile-orb -right-8 bottom-10 h-44 w-44 bg-sky-400/15 md:hidden" aria-hidden />
      <div className="container relative mx-auto px-4">
        <FadeIn className="mb-10 md:mb-14">
          <SectionHeader
            tone="light"
            eyebrow="Case Studies"
            title="Outcomes that move the operating model"
            description="Large engagements framed as challenge, solution, stack, impact, and KPIs, not vanity metrics."
          />
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => {
            const metric = parseLeadingMetric(study.outcome);
            const isFeature = index === 0;

            return (
              <FadeIn key={study.slug} delay={index * 0.08} as="article">
                <article
                  className={cn(
                    "overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_4px_16px_-12px_rgba(15,23,42,0.12)]",
                    "card-lift-light grid grid-cols-1 lg:grid-cols-12"
                  )}
                >
                  {/* Impact / KPI media */}
                  <div
                    className={cn(
                      "bg-zinc-50 border-b lg:border-b-0 lg:border-r border-zinc-200",
                      isFeature ? "lg:col-span-5" : "lg:col-span-4"
                    )}
                  >
                    <CardMedia
                      size="tall"
                      className="rounded-none border-0 bg-transparent shadow-none min-h-[220px] h-full"
                    >
                      <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 py-10 text-center">
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                          {study.sector}
                        </p>
                        <div
                          className={cn(
                            "font-semibold tracking-[-0.04em] text-zinc-900",
                            "text-4xl md:text-5xl"
                          )}
                        >
                          {metric ? (
                            <>
                              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                              {metric.rest ? (
                                <span className="block mt-2 text-base md:text-lg font-medium text-zinc-600 tracking-normal">
                                  {metric.rest}
                                </span>
                              ) : null}
                            </>
                          ) : (
                            study.outcome
                          )}
                        </div>
                        <p className="text-sm text-zinc-500 max-w-xs">{study.outcomeDetail}</p>

                        <dl className="mt-6 grid grid-cols-3 gap-3 w-full max-w-sm">
                          {study.metrics.slice(0, 3).map((kpi) => (
                            <div key={kpi.label} className="text-center">
                              <dt className="sr-only">{kpi.label}</dt>
                              <dd className="text-sm font-semibold text-zinc-900 tabular-nums">
                                {kpi.value}
                              </dd>
                              <p className="text-[10px] leading-tight text-zinc-500 mt-1 line-clamp-2">
                                {kpi.label}
                              </p>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </CardMedia>
                  </div>

                  <div
                    className={cn(
                      "flex flex-col p-7 md:p-9 lg:p-10",
                      isFeature ? "lg:col-span-7" : "lg:col-span-8"
                    )}
                  >
                    <h3 className="text-xl md:text-2xl lg:text-[1.65rem] font-semibold tracking-[-0.03em] text-zinc-900 mb-6">
                      {study.title}
                    </h3>

                    <dl className="space-y-5 mb-6 flex-grow">
                      <div>
                        <dt className="text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
                          Challenge
                        </dt>
                        <dd className="text-sm text-zinc-600 leading-relaxed">
                          {study.challenge}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
                          Solution
                        </dt>
                        <dd className="text-sm text-zinc-600 leading-relaxed">
                          {study.solution}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
                          Business Impact
                        </dt>
                        <dd className="text-sm text-zinc-600 leading-relaxed">
                          {study.businessImpact}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-400 mb-2">
                          Technology Stack
                        </dt>
                        <dd>
                          <ul className="flex flex-wrap gap-1.5">
                            {study.technologyStack.map((tech) => (
                              <li
                                key={tech}
                                className="inline-flex rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-700"
                              >
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    </dl>

                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-sm font-medium text-zinc-700 hover:text-indigo-600 transition-colors"
                    >
                      View full case study
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.15} className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors"
          >
            All case studies
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default HomeCaseStudies;
