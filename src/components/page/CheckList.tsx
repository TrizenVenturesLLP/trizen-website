import { Check } from "lucide-react";
import FadeIn from "@/components/marketing/FadeIn";
import { surfaceVariants } from "@/lib/variants";
import { cn } from "@/lib/utils";

interface CheckListProps {
  items: string[];
  title?: string;
  /** Wrap in glass panel */
  panel?: boolean;
  /** Stagger each row on scroll enter */
  stagger?: boolean;
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
}

/**
 * Check-icon bullet list used on service/industry/product detail pages.
 */
const CheckList = ({
  items,
  title,
  panel = false,
  stagger = false,
  className,
  itemClassName,
  iconClassName,
}: CheckListProps) => {
  const rowClass = cn("flex gap-3 text-sm text-zinc-700", itemClassName);
  const iconClass = cn(
    "h-4 w-4 text-indigo-600 shrink-0 mt-0.5",
    iconClassName
  );

  return (
    <div
      className={cn(
        panel && surfaceVariants({ radius: "xl", pad: "md", shadow: "soft" }),
        className
      )}
    >
      {title ? (
        <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-4">
          {title}
        </h3>
      ) : null}
      <ul className="space-y-3">
        {items.map((item, index) =>
          stagger ? (
            <FadeIn
              key={item}
              as="li"
              delay={index * 0.04}
              y={6}
              className={rowClass}
            >
              <Check className={iconClass} aria-hidden />
              {item}
            </FadeIn>
          ) : (
            <li key={item} className={rowClass}>
              <Check className={iconClass} aria-hidden />
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CheckList;
