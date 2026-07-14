import { ReactNode } from "react";
import { surfaceVariants } from "@/lib/variants";
import { cn } from "@/lib/utils";

interface ProsePanelProps {
  title: string;
  children: ReactNode;
  className?: string;
  /** Use glass panel chrome (default true) */
  panel?: boolean;
}

/**
 * Mono-titled prose block (challenge, solution, impact narratives).
 */
const ProsePanel = ({
  title,
  children,
  className,
  panel = true,
}: ProsePanelProps) => {
  return (
    <div
      className={cn(
        panel && surfaceVariants({ radius: "xl", pad: "xl", shadow: "soft" }),
        className
      )}
    >
      <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-4">
        {title}
      </h2>
      <div className="text-lg text-zinc-700 leading-relaxed">{children}</div>
    </div>
  );
};

export default ProsePanel;
