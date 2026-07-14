import FadeIn from "@/components/marketing/FadeIn";
import { surfaceVariants } from "@/lib/variants";
import { cn } from "@/lib/utils";

export interface MetricTile {
  label: string;
  value: string;
}

interface MetricTilesProps {
  metrics: MetricTile[];
  /** Optional mono label above the grid */
  label?: string;
  className?: string;
}

/**
 * KPI value tiles (case studies, outcomes strips).
 */
const MetricTiles = ({
  metrics,
  label = "KPIs",
  className,
}: MetricTilesProps) => {
  return (
    <div className={className}>
      {label ? (
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
          {label}
        </p>
      ) : null}
      <div
        className={cn(
          "grid gap-4",
          metrics.length >= 3
            ? "grid-cols-1 sm:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2"
        )}
      >
        {metrics.map((metric, index) => (
          <FadeIn key={metric.label} delay={index * 0.05}>
            <div
              className={cn(
                surfaceVariants({ radius: "xl", pad: "none", shadow: "soft" }),
                "p-6 text-center h-full"
              )}
            >
              <p className="text-3xl font-semibold tracking-[-0.03em] text-zinc-900 mb-2">
                {metric.value}
              </p>
              <p className="text-sm text-zinc-600">{metric.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default MetricTiles;
