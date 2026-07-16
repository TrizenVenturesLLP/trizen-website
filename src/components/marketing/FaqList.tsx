import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/marketing/FadeIn";
import type { FaqItem } from "@/content/marketingExtras";
import { cn } from "@/lib/utils";

interface FaqListProps {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  className?: string;
}

/**
 * Lightweight FAQ accordion for commercial pages.
 */
const FaqList = ({
  items,
  title = "Frequently asked questions",
  eyebrow = "FAQ",
  className,
}: FaqListProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={className}>
      <FadeIn className="mb-8 md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-indigo-600 mb-2">
          {eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-zinc-900">
          {title}
        </h2>
      </FadeIn>
      <ul className="divide-y divide-zinc-200 border-y border-zinc-200">
        {items.map((item, index) => {
          const open = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-btn-${index}`;

          return (
            <FadeIn key={item.question} as="li" delay={index * 0.04} y={6}>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-start justify-between gap-4 py-5 text-left touch-manipulation min-h-12"
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="text-base font-medium tracking-[-0.02em] text-zinc-900 pr-2">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 mt-0.5",
                    open && "rotate-180 text-indigo-600"
                  )}
                  aria-hidden
                />
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm md:text-base text-zinc-600 leading-relaxed max-w-3xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </ul>
    </div>
  );
};

export default FaqList;
