import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds (values > 5 treated as ms for legacy callers) */
  delay?: number;
  as?: "div" | "section" | "article";
  y?: number;
}

const MotionTag = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
} as const;

/**
 * Scroll-enter motion — Y translate only (no opacity flash on route change).
 * GPU-composited; once-only viewport observer.
 */
const FadeIn = ({
  children,
  className,
  delay = 0,
  as = "div",
  y = 14,
}: FadeInProps) => {
  const reduced = useReducedMotion();
  const Comp = MotionTag[as];
  const delaySec = delay > 5 ? delay / 1000 : delay;

  if (reduced) {
    const Tag = as;
    return <Tag className={cn(className)}>{children}</Tag>;
  }

  return (
    <Comp
      className={cn("transform-gpu", className)}
      initial={{ y }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -32px 0px" }}
      transition={{
        duration: 0.45,
        delay: delaySec,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Comp>
  );
};

export default FadeIn;
