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
 * Site-wide scroll/mount enter motion. Prefer this over raw framer-motion on pages.
 * Respects reduced motion; once-only; calm easing.
 */
const FadeIn = ({
  children,
  className,
  delay = 0,
  as = "div",
  y = 8,
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
      className={cn("transform-gpu will-change-transform", className)}
      initial={{ y }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -20px 0px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(delaySec, 0.22),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Comp>
  );
};

export default FadeIn;
