import { ReactNode } from "react";
import FadeIn from "@/components/marketing/FadeIn";
import BackLink from "@/components/page/BackLink";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  /** Optional subtitle above description (e.g. product headline) */
  subtitle?: ReactNode;
  back?: { to: string; label: string };
  children?: ReactNode;
  /** Content max width */
  maxWidth?: "4xl" | "5xl" | "3xl" | "full";
  className?: string;
  /** Tighter bottom padding when content continues below (product cover) */
  compact?: boolean;
}

const maxWidthClass = {
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  full: "max-w-none",
} as const;

/**
 * Standard detail/listing intro: back link, mono eyebrow, h1, lead copy.
 */
const PageHero = ({
  eyebrow,
  title,
  description,
  subtitle,
  back,
  children,
  maxWidth = "5xl",
  className,
  compact = false,
}: PageHeroProps) => {
  return (
    <section
      className={cn(
        "bg-white",
        compact
          ? "pt-28 pb-8 sm:pt-32 md:pt-36 md:pb-10"
          : "border-b border-zinc-200 pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24",
        className
      )}
    >
      <div className={cn("container mx-auto px-4", maxWidthClass[maxWidth])}>
        <FadeIn>
          {back ? <BackLink to={back.to} label={back.label} /> : null}
          {eyebrow ? (
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-600 mb-4">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.035em] text-zinc-900 mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          {subtitle ? (
            <div className="text-xl text-zinc-600 mb-3 max-w-3xl">{subtitle}</div>
          ) : null}
          {description ? (
            <div className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl">
              {description}
            </div>
          ) : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </FadeIn>
      </div>
    </section>
  );
};

export default PageHero;
