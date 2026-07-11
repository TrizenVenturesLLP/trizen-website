import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CardMedia from "@/components/marketing/CardMedia";
import FadeIn from "@/components/marketing/FadeIn";
import AnimatedCounter from "@/components/marketing/AnimatedCounter";
import { getFeaturedCaseStudies } from "@/content/caseStudies";
import { cn } from "@/lib/utils";

function parseOutcomeMetric(outcome: string): { value: number; suffix: string; rest: string } | null {
  const match = outcome.match(/^(\d+)\s*(%|×|x)?\s*(.*)$/i);
  if (!match) return null;
  return {
    value: Number(match[1]),
    suffix: match[2]?.toLowerCase() === "x" ? "×" : match[2] || "",
    rest: match[3]?.trim() ?? "",
  };
}

const HomeCaseStudies = () => {
  const caseStudies = getFeaturedCaseStudies().slice(0, 2);

  return (
    <section className="py-24 md:py-32 border-b border-zinc-200 bg-white text-zinc-950">
      <div className="container mx-auto px-4">
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
            const metric = parseOutcomeMetric(study.outcome);
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
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                          {study.sector}
                        </p>
                        <div
                          className={cn(
                            "font-semibold tracking-[-0.04em] text-neutral-900",
                            "text-4xl md:text-5xl"
                          )}
                        >
                          {metric ? (
                            <>
                              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                              {metric.rest ? (
                                <span className="block mt-2 text-base md:text-lg font-medium text-neutral-600 tracking-normal">
                                  {metric.rest}
                                </span>
                              ) : null}
                            </>
                          ) : (
                            study.outcome
                          )}
                        </div>
                        <p className="text-sm text-neutral-500 max-w-xs">{study.outcomeDetail}</p>

                        {/* KPIs */}
                        <dl className="mt-6 grid grid-cols-3 gap-3 w-full max-w-sm">
                          {study.metrics.slice(0, 3).map((kpi) => (
                            <div key={kpi.label} className="text-center">
                              <dt className="sr-only">{kpi.label}</dt>
                              <dd className="text-sm font-semibold text-neutral-900 tabular-nums">
                                {kpi.value}
                              </dd>
                              <p className="text-[10px] leading-tight text-neutral-500 mt-1 line-clamp-2">
                                {kpi.label}
                              </p>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </CardMedia>
                  </div>

                  {/* Narrative */}
                  <div
                    className={cn(
                      "flex flex-col p-7 md:p-9 lg:p-10",
                      isFeature ? "lg:col-span-7" : "lg:col-span-8"
                    )}
                  >
                    <h3 className="text-xl md:text-2xl lg:text-[1.65rem] font-semibold tracking-[-0.03em] text-neutral-950 mb-6">
                      {study.title}
                    </h3>

                    <dl className="space-y-5 mb-6 flex-grow">
                      <div>
                        <dt className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-400 mb-1.5">
                          Challenge
                        </dt>
                        <dd className="text-sm text-neutral-600 leading-relaxed">
                          {study.challenge}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-400 mb-1.5">
                          Solution
                        </dt>
                        <dd className="text-sm text-neutral-600 leading-relaxed">
                          {study.solution}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-400 mb-1.5">
                          Business Impact
                        </dt>
                        <dd className="text-sm text-neutral-600 leading-relaxed">
                          {study.businessImpact}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-400 mb-2">
                          Technology Stack
                        </dt>
                        <dd>
                          <ul className="flex flex-wrap gap-1.5">
                            {study.technologyStack.map((tech) => (
                              <li
                                key={tech}
                                className="inline-flex rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] font-medium text-neutral-700"
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
                      className="inline-flex items-center text-sm font-medium text-neutral-900 hover:gap-2 transition-all duration-300"
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
            className="inline-flex items-center text-sm font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
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
