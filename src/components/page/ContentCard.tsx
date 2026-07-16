import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cardVariants } from "@/lib/variants";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  href: string;
  title: string;
  description: string;
  cta: string;
  /** Optional mono eyebrow / category */
  eyebrow?: string;
  /** Optional short bullets under description */
  bullets?: string[];
  /** Label above bullets */
  bulletsLabel?: string;
  /** Use as article heading level */
  titleAs?: "h2" | "h3";
  className?: string;
  children?: ReactNode;
}

/**
 * Generic listing card (industries, insights-style links).
 */
const ContentCard = ({
  href,
  title,
  description,
  cta,
  eyebrow,
  bullets,
  bulletsLabel,
  titleAs: TitleTag = "h2",
  className,
  children,
}: ContentCardProps) => {
  return (
    <Link
      to={href}
      className={cn(cardVariants({ layout: "content" }), className)}
    >
      {eyebrow ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-600 mb-3">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className="text-xl md:text-2xl font-semibold tracking-[-0.03em] text-zinc-900 mb-3">
        {title}
      </TitleTag>
      <p className="text-zinc-600 leading-relaxed mb-6 flex-grow text-sm md:text-base">
        {description}
      </p>
      {bullets && bullets.length > 0 ? (
        <div className="mb-6">
          {bulletsLabel ? (
            <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 mb-3">
              {bulletsLabel}
            </p>
          ) : null}
          <ul className="space-y-2">
            {bullets.map((point) => (
              <li key={point} className="text-sm text-zinc-600 flex gap-2">
                <span
                  className="mt-1.5 h-1 w-1 rounded-full bg-indigo-500 shrink-0"
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {children}
      <span className="inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors">
        {cta}
        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
};

export default ContentCard;
