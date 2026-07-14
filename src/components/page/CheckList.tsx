import { Check } from "lucide-react";
import { surfaceVariants } from "@/lib/variants";
import { cn } from "@/lib/utils";

interface CheckListProps {
  items: string[];
  title?: string;
  /** Wrap in glass panel */
  panel?: boolean;
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
  className,
  itemClassName,
  iconClassName,
}: CheckListProps) => {
  const list = (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={cn("flex gap-3 text-sm text-zinc-700", itemClassName)}
        >
          <Check
            className={cn(
              "h-4 w-4 text-indigo-600 shrink-0 mt-0.5",
              iconClassName
            )}
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
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
      {list}
    </div>
  );
};

export default CheckList;
