import { Link } from "react-router-dom";
import FadeIn from "@/components/marketing/FadeIn";
import AnimatedCounter from "@/components/marketing/AnimatedCounter";
import { metricClaims } from "@/content/homeData";

const MetricsStrip = () => {
  return (
    <section
      className="relative overflow-hidden border-b border-zinc-200 section-mesh-invert py-12 md:py-14 text-zinc-900"
      aria-label="Outcomes at a glance"
    >
      <div
        className="mobile-orb -left-8 bottom-0 h-36 w-36 bg-sky-400/20 md:hidden"
        aria-hidden
      />
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 md:gap-x-10 md:gap-y-10">
          {metricClaims.map((claim, index) => (
            <FadeIn key={claim.id} delay={index * 0.06} y={10}>
              <div className="group relative rounded-2xl border border-indigo-100/80 bg-white/70 p-4 pl-4 shadow-sm shadow-indigo-500/5 backdrop-blur-sm md:rounded-none md:border-0 md:border-l md:border-zinc-200 md:bg-transparent md:p-0 md:pl-4 md:shadow-none md:backdrop-blur-none hover:md:border-zinc-400 transition-colors h-full">
                <p className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-zinc-900 mb-2 tabular-nums">
                  <AnimatedCounter value={claim.value} suffix={claim.suffix} />
                </p>
                <p className="text-sm text-zinc-600 leading-snug">{claim.label}</p>
                {claim.sourceCaseStudySlug ? (
                  <Link
                    to={`/case-studies/${claim.sourceCaseStudySlug}`}
                    className="mt-2 inline-flex text-[11px] text-indigo-600/80 group-hover:text-indigo-700 transition-colors underline-offset-2 hover:underline"
                  >
                    View source engagement
                  </Link>
                ) : (
                  <span className="mt-2 block h-4" aria-hidden />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip;
