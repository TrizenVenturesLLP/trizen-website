import { Link } from "react-router-dom";
import FadeIn from "@/components/marketing/FadeIn";
import { industryChips } from "@/content/homeData";

const LogoBar = () => {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 section-mesh-muted py-10 md:py-12">
      <div className="mobile-orb right-0 top-0 h-32 w-32 bg-indigo-400/20 md:hidden" aria-hidden />
      <div className="container relative mx-auto px-4">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs font-medium uppercase tracking-widest text-indigo-600 text-center mb-8">
            Industries we serve
          </p>
        </FadeIn>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-5">
          {industryChips.map((chip, index) => (
            <FadeIn key={chip.id} as="li" delay={0.04 + index * 0.03} y={6}>
              <Link
                to={`/industries/${chip.slug}`}
                className="group inline-flex flex-col items-center text-center touch-manipulation min-h-11 justify-center rounded-xl px-3 py-2 transition-colors hover:bg-white/70"
              >
                <span className="text-base md:text-xl font-medium tracking-wide text-zinc-800 group-hover:text-indigo-600 transition-colors">
                  {chip.name}
                </span>
                {chip.relevanceMetric ? (
                  <span className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-600 transition-colors">
                    {chip.relevanceMetric}
                  </span>
                ) : null}
              </Link>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LogoBar;
