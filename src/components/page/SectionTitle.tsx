import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
  /** Mono eyebrow style instead of display heading */
  eyebrow?: boolean;
}

/**
 * Consistent section headings for detail pages.
 */
const SectionTitle = ({
  children,
  className,
  as: Tag = "h2",
  eyebrow = false,
}: SectionTitleProps) => {
  if (eyebrow) {
    return (
      <Tag
        className={cn(
          "font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-3",
          className
        )}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={cn(
        "text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-zinc-900 mb-4",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default SectionTitle;
