import { Check } from "lucide-react";
import FadeIn from "@/components/marketing/FadeIn";
import { cn } from "@/lib/utils";

interface CapabilityGridProps {
  items: string[];
  title?: string;
  /** Show check icons inside each cell */
  withCheck?: boolean;
  /** Stagger each tile on scroll enter */
  stagger?: boolean;
  className?: string;
}

/**
 * 2-column capability / feature tiles.
 */
const CapabilityGrid = ({
  items,
  title,
  withCheck = false,
  stagger = false,
  className,
}: CapabilityGridProps) => {
  const tileClass = cn(
    "rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm text-zinc-700",
    withCheck && "flex gap-3 bg-zinc-50"
  );

  return (
    <div className={className}>
      {title ? (
        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-zinc-900 mb-8">
          {title}
        </h2>
      ) : null}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, index) =>
          stagger ? (
            <FadeIn
              key={item}
              as="li"
              delay={index * 0.04}
              y={6}
              className={tileClass}
            >
              {withCheck ? (
                <Check
                  className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5"
                  aria-hidden
                />
              ) : null}
              {item}
            </FadeIn>
          ) : (
            <li key={item} className={tileClass}>
              {withCheck ? (
                <Check
                  className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5"
                  aria-hidden
                />
              ) : null}
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CapabilityGrid;
