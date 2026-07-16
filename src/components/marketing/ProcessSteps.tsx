import FadeIn from "@/components/marketing/FadeIn";
import type { ProcessStep } from "@/content/marketingExtras";
import { cn } from "@/lib/utils";

interface ProcessStepsProps {
  steps: ProcessStep[];
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Numbered process / engagement timeline with staggered enter.
 */
const ProcessSteps = ({
  steps,
  eyebrow = "How we work",
  title,
  description,
  className,
}: ProcessStepsProps) => {
  return (
    <div className={className}>
      {(title || eyebrow) && (
        <FadeIn className="mb-8 md:mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-indigo-600 mb-2">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-zinc-900 mb-3">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="text-base text-zinc-600 leading-relaxed">{description}</p>
          ) : null}
        </FadeIn>
      )}
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {steps.map((step, index) => (
          <FadeIn key={step.step} as="li" delay={index * 0.06} y={10} className="h-full">
            <div
              className={cn(
                "card-sheen relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 md:p-6",
                "shadow-sm shadow-zinc-900/5"
              )}
            >
              <span className="font-mono text-xs font-medium tracking-[0.14em] text-indigo-600 mb-4">
                {step.step}
              </span>
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed flex-grow">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </ol>
    </div>
  );
};

export default ProcessSteps;
