import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Kept for API compat — site is light-only */
  tone?: "dark" | "light";
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] mb-3 text-indigo-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.035em] mb-4 text-zinc-900">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-relaxed text-zinc-600">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
