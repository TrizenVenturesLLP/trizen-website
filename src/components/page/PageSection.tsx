import { ReactNode } from "react";
import FadeIn from "@/components/marketing/FadeIn";
import { cn } from "@/lib/utils";

type SectionTone = "white" | "muted" | "plain";
type SectionPad = "default" | "tight" | "loose";
type SectionWidth = "4xl" | "5xl" | "full";

interface PageSectionProps {
  children: ReactNode;
  tone?: SectionTone;
  pad?: SectionPad;
  maxWidth?: SectionWidth;
  /** Wrap children in FadeIn (default true) */
  animate?: boolean;
  /** FadeIn delay in seconds */
  delay?: number;
  className?: string;
  containerClassName?: string;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

const toneClass: Record<SectionTone, string> = {
  white: "bg-white border-b border-zinc-200",
  muted: "bg-zinc-50 border-b border-zinc-200",
  plain: "border-b border-zinc-200",
};

const padClass: Record<SectionPad, string> = {
  tight: "py-12 md:py-16",
  default: "py-14 md:py-20",
  loose: "py-16 md:py-24",
};

const widthClass: Record<SectionWidth, string> = {
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  full: "",
};

/**
 * Standard content band with consistent padding, background, and scroll enter.
 */
const PageSection = ({
  children,
  tone = "white",
  pad = "default",
  maxWidth = "5xl",
  animate = true,
  delay,
  className,
  containerClassName,
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: PageSectionProps) => {
  const body = animate ? (
    <FadeIn delay={delay}>{children}</FadeIn>
  ) : (
    children
  );

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={cn(
        toneClass[tone],
        padClass[pad],
        id && "scroll-mt-28",
        className
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4",
          widthClass[maxWidth],
          containerClassName
        )}
      >
        {body}
      </div>
    </section>
  );
};

export default PageSection;
