import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CTABanner from "@/components/marketing/CTABanner";
import CardMedia from "@/components/marketing/CardMedia";
import PageMeta from "@/components/marketing/PageMeta";
import AnimatedCounter from "@/components/marketing/AnimatedCounter";
import { caseStudies } from "@/content/caseStudies";
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

const CaseStudies = () => {
  const published = caseStudies.filter((s) => !s.draft);

  return (
    <>
      <PageMeta
        title="Case Studies"
        path="/case-studies"
        description="Enterprise AI engagements framed as challenge, solution, technology stack, business impact, and KPIs."
      />
      <section className="border-b border-zinc-200 bg-white pt-28 pb-20 sm:pt-32 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionHeader
              eyebrow="Case Studies"
              title="Outcomes that move the operating model"
              description="Each engagement is documented as challenge, solution, stack, impact, and KPIs your leadership team can fund."
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {published.map((study, index) => {
              const metric = parseOutcomeMetric(study.outcome);

              return (
                <motion.div
                  key={study.slug}
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                >
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className={cn(
                      "group overflow-hidden rounded-2xl border border-zinc-200 bg-white",
                      "shadow-[0_4px_16px_-12px_rgba(15,23,42,0.12)] card-lift-light",
                      "grid grid-cols-1 lg:grid-cols-12 hover:border-indigo-200"
                    )}
                  >
                    <div className="bg-zinc-50 border-b lg:border-b-0 lg:border-r border-zinc-200 lg:col-span-5">
                      <CardMedia
                        size="tall"
                        theme="light"
                        className="rounded-none border-0 bg-transparent shadow-none min-h-[220px] h-full"
                      >
                        <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 py-10 text-center">
                          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                            {study.sector}
                          </p>
                          <div className="font-semibold tracking-[-0.04em] text-zinc-900 text-4xl md:text-5xl">
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

                    <div className="flex flex-col p-7 md:p-9 lg:p-10 lg:col-span-7">
                      <h2 className="text-xl md:text-2xl font-semibold tracking-[-0.03em] text-zinc-900 mb-6">
                        {study.title}
                      </h2>

                      <dl className="space-y-4 mb-6 flex-grow">
                        <div>
                          <dt className="text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
                            Challenge
                          </dt>
                          <dd className="text-sm text-zinc-600 leading-relaxed line-clamp-2">
                            {study.challenge}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
                            Solution
                          </dt>
                          <dd className="text-sm text-zinc-600 leading-relaxed line-clamp-2">
                            {study.solution}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
                            Business impact
                          </dt>
                          <dd className="text-sm text-zinc-600 leading-relaxed line-clamp-2">
                            {study.businessImpact}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-400 mb-2">
                            Technology stack
                          </dt>
                          <dd className="flex flex-wrap gap-1.5">
                            {study.technologyStack.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </dd>
                        </div>
                      </dl>

                      <span className="inline-flex items-center text-sm font-medium text-zinc-700 group-hover:text-indigo-600 transition-colors">
                        Read case study
                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want results like these?"
        description="Book a consultation to map outcomes, readiness, and a delivery path your leadership team can fund."
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </>
  );
};

export default CaseStudies;
