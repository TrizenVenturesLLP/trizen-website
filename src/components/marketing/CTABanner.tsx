import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/marketing/FadeIn";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

const isExternal = (href: string) => /^https?:\/\//i.test(href);

const CTABanner = ({
  title = "Ready to transform your operations?",
  description =
    "Partner with Trizen AI to deliver measurable business outcomes through AI, automation, and intelligent systems.",
  primaryLabel = "Book a Consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  className,
}: CTABannerProps) => {
  const isBookCta = /book/i.test(primaryLabel);

  const primaryInner = (
    <>
      {primaryLabel}
      {isBookCta ? (
        <span className="btn-book__arrow" aria-hidden="true">
          <ArrowRight />
        </span>
      ) : null}
    </>
  );

  return (
    <section className={cn("relative overflow-hidden section-mesh py-16 md:py-28", className)}>
      <div className="mobile-orb left-1/4 top-0 h-48 w-48 bg-indigo-500/25 md:hidden" aria-hidden />
      <div className="container mx-auto px-4">
        <FadeIn y={12}>
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50 via-white to-sky-50 px-5 py-10 sm:px-8 sm:py-12 md:px-16 md:py-16 text-center shadow-lg shadow-indigo-500/10">
            <div
              className="pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-indigo-400/25 blur-[60px] md:left-1/2 md:h-64 md:w-[28rem] md:-translate-x-1/2 md:bg-indigo-500/15 md:blur-[80px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-sky-400/20 blur-[50px] md:hidden"
              aria-hidden
            />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.035em] text-zinc-900 mb-4">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "btn-micro w-full sm:w-auto sm:min-w-[220px] min-h-12 touch-manipulation",
                    isBookCta && "btn-book pl-6 pr-2 shadow-none"
                  )}
                >
                  {isExternal(primaryHref) ? (
                    <a href={primaryHref} target="_blank" rel="noopener noreferrer">
                      {primaryInner}
                    </a>
                  ) : (
                    <Link to={primaryHref}>{primaryInner}</Link>
                  )}
                </Button>
                {secondaryLabel && secondaryHref && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="btn-micro w-full sm:w-auto sm:min-w-[200px] min-h-12 touch-manipulation border-indigo-200 bg-white/80 backdrop-blur-sm"
                  >
                    {isExternal(secondaryHref) ? (
                      <a href={secondaryHref} target="_blank" rel="noopener noreferrer">
                        {secondaryLabel}
                      </a>
                    ) : (
                      <Link to={secondaryHref}>{secondaryLabel}</Link>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTABanner;
