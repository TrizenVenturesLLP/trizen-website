import { Link } from "react-router-dom";
import FadeIn from "@/components/marketing/FadeIn";
import AnimatedCounter from "@/components/marketing/AnimatedCounter";
import { metricClaims } from "@/content/homeData";

const MetricsStrip = () => {
  return (
    <section
      className="border-b border-zinc-200 bg-zinc-50 py-12 md:py-14 text-zinc-900"
      aria-label="Outcomes at a glance"
    >
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 md:gap-x-10">
            {metricClaims.map((claim) => (
              <div
                key={claim.id}
                className="group relative pl-4 border-l border-zinc-200 hover:border-zinc-400 transition-colors"
              >
                <p className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-zinc-900 mb-2 tabular-nums">
                  <AnimatedCounter value={claim.value} suffix={claim.suffix} />
                </p>
                <p className="text-sm text-zinc-600 leading-snug">{claim.label}</p>
                {claim.sourceCaseStudySlug ? (
                  <Link
                    to={`/case-studies/${claim.sourceCaseStudySlug}`}
                    className="mt-2 inline-flex text-[11px] text-zinc-500 group-hover:text-zinc-800 transition-colors underline-offset-2 hover:underline"
                  >
                    View source engagement
                  </Link>
                ) : (
                  <span className="mt-2 block h-4" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default MetricsStrip;
