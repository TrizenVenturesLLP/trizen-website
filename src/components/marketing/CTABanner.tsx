import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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

const CTABanner = ({
  title = "Ready to transform your operations?",
  description = "Partner with Trizen to accelerate your AI transformation with proven enterprise methodology and proprietary products.",
  primaryLabel = "Book a Consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  className,
}: CTABannerProps) => {
  return (
    <section className={cn("bg-white py-20 md:py-28", className)}>
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl border border-indigo-100 glass-frost px-5 py-10 sm:px-8 sm:py-12 md:px-16 md:py-16 text-center">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[80px]"
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
                className="btn-micro w-full sm:w-auto sm:min-w-[200px] min-h-12 touch-manipulation"
              >
                <Link to={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              {secondaryLabel && secondaryHref && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="btn-micro w-full sm:w-auto sm:min-w-[200px] min-h-12 touch-manipulation"
                >
                  <Link to={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
