import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Boxes, Gauge, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

const heroFeatures = [
  { icon: Workflow, label: "Strategy to production" },
  { icon: Boxes, label: "Proprietary products" },
  { icon: Gauge, label: "Measurable outcomes" },
] as const;

/** Split headline so the trailing "AI" (or last word) can take brand gradient. */
function HeadlineWithAccent({ text }: { text: string }) {
  const match = text.match(/^(.*\s)(AI|Intelligent AI)$/i);
  if (!match) {
    return <>{text}</>;
  }
  const [, lead, accent] = match;
  // Prefer a natural line break before "Operations" when present
  const breakMatch = lead.match(/^(Transform Business\s)(Operations with\s)$/i);
  if (breakMatch) {
    return (
      <>
        {breakMatch[1].trimEnd()}
        <br />
        {breakMatch[2]}
        <span className="text-gradient-brand">{accent}</span>
      </>
    );
  }
  return (
    <>
      {lead}
      <span className="text-gradient-brand">{accent}</span>
    </>
  );
}

/**
 * Split hero: brand + headline left · copy + CTAs right · feature strip below.
 */
const Hero = () => {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden border-b border-zinc-200 section-mesh pt-24 sm:pt-28 md:pt-32"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="mobile-orb -left-16 top-8 h-56 w-56 bg-indigo-500/25 md:left-1/4 md:top-0 md:h-[420px] md:w-[520px] md:bg-indigo-500/12 md:blur-[120px]" />
        <div className="mobile-orb -right-10 top-40 h-48 w-48 bg-sky-400/20 md:right-[8%] md:top-24 md:h-72 md:w-72 md:bg-sky-400/10" />
        <div className="mobile-orb bottom-8 left-1/3 h-40 w-40 bg-violet-400/15 md:hidden" />
        <div
          className="absolute inset-0 opacity-[0.4] md:opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(24,24,27,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.045) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at center, black 35%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 35%, transparent 78%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent md:h-32" />
      </div>

      <div className="container mx-auto px-4 flex flex-col justify-center min-h-[min(100dvh,920px)] sm:min-h-[calc(100dvh-1rem)] pt-10 sm:pt-14 md:pt-16 pb-16 md:pb-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 lg:items-end"
          initial={reduced ? false : { y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="lg:col-span-7">
            <p className="mb-2 text-sm font-semibold tracking-[-0.02em] text-zinc-900">
              {siteConfig.name}
            </p>
            <p className="mb-4 font-mono text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] text-indigo-600">
              {siteConfig.tagline}
            </p>
            <h1
              id="hero-heading"
              className="text-[2.125rem] leading-[1.1] sm:text-5xl md:text-6xl xl:text-[4.25rem] font-semibold tracking-[-0.04em] sm:leading-[1.05] text-zinc-900"
            >
              <HeadlineWithAccent text={siteConfig.heroHeadline} />
            </h1>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-7 lg:pb-1">
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-md">
              {siteConfig.heroSupporting}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="btn-micro btn-book w-full sm:w-auto sm:min-w-[220px] min-h-12 pl-6 pr-2 touch-manipulation"
              >
                <Link to="/contact">
                  Book a Consultation
                  <span className="btn-book__arrow" aria-hidden="true">
                    <ArrowRight />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="btn-micro w-full sm:w-auto sm:min-w-[200px] min-h-12 touch-manipulation border-indigo-200 bg-white/80 backdrop-blur-sm"
              >
                <Link to="/case-studies">Explore Our Work</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-14 md:mt-20 lg:mt-24"
          initial={reduced ? false : { y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: reduced ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul
            className="mx-auto flex max-w-4xl flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 rounded-2xl sm:rounded-full border border-white/80 bg-white/65 backdrop-blur-md shadow-lg shadow-indigo-500/10 px-2 py-2 sm:px-3"
            aria-label="What we deliver"
          >
            {heroFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <li
                  key={feature.label}
                  className="relative flex flex-1 items-center justify-center gap-2.5 rounded-xl sm:rounded-full px-4 py-3 sm:px-5 sm:py-2.5 text-sm font-medium text-zinc-700"
                >
                  {index > 0 ? (
                    <span
                      className="pointer-events-none absolute left-0 top-1/2 hidden h-4 w-px -translate-y-1/2 bg-zinc-200 sm:block"
                      aria-hidden
                    />
                  ) : null}
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span>{feature.label}</span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
