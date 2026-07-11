import { cn } from "@/lib/utils";

interface GradientBlobsProps {
  className?: string;
}

/** Soft animated gradient orbs ,  CSS only, GPU-friendly */
const GradientBlobs = ({ className }: GradientBlobsProps) => {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="gradient-blob gradient-blob-a" />
      <div className="gradient-blob gradient-blob-b" />
      <div className="gradient-blob gradient-blob-c" />
    </div>
  );
};

export default GradientBlobs;
