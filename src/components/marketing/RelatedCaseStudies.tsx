import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/marketing/FadeIn";
import AnimatedCounter from "@/components/marketing/AnimatedCounter";
import type { CaseStudy } from "@/content/caseStudies";
import { parseLeadingMetric } from "@/lib/parseMetric";
import { cn } from "@/lib/utils";

interface RelatedCaseStudiesProps {
  studies: CaseStudy[];
  eyebrow?: string;
  title?: string;
  className?: string;
}

/**
 * Compact related-engagement cards for detail pages and Services teaser.
 */
const RelatedCaseStudies = ({
  studies,
  eyebrow = "Proof",
  title = "Related engagements",
  className,
}: RelatedCaseStudiesProps) => {
  if (!studies.length) return null;

  return (
    <div className={className}>
      <FadeIn className="mb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-indigo-600 mb-2">
          {eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-zinc-900">
          {title}
        </h2>
      </FadeIn>
      <ul
        className={cn(
          "grid gap-4 md:gap-5",
          studies.length === 1 ? "grid-cols-1 max-w-2xl" : "grid-cols-1 md:grid-cols-2"
        )}
      >
        {studies.map((study, index) => {
          const metric = parseLeadingMetric(study.outcome);

          return (
            <FadeIn key={study.slug} as="li" delay={index * 0.06} y={10} className="h-full">
              <Link
                to={`/case-studies/${study.slug}`}
                className={cn(
                  "group card-sheen card-lift-light flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 md:p-7",
                  "hover:border-indigo-200 transition-colors"
                )}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400 mb-3">
                  {study.sector}
                </p>
                <p className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-zinc-900 mb-2 tabular-nums">
                  {metric ? (
                    <>
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                      {metric.rest ? (
                        <span className="ml-1.5 text-base font-medium text-zinc-600 tracking-normal">
                          {metric.rest}
                        </span>
                      ) : null}
                    </>
                  ) : (
                    study.outcome
                  )}
                </p>
                <h3 className="text-base font-semibold tracking-[-0.02em] text-zinc-900 mb-2 group-hover:text-indigo-950">
                  {study.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5 flex-grow line-clamp-2">
                  {study.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-indigo-600">
                  Read case study
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </FadeIn>
          );
        })}
      </ul>
    </div>
  );
};

export default RelatedCaseStudies;
