import { ImgHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Skip lazy-load for LCP candidates (logo in header, hero media) */
  priority?: boolean;
}

/**
 * Reusable image primitive: dimensions, lazy-load, async decode.
 * Prefer WebP/AVIF sources at the asset layer when available.
 */
const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    {
      alt = "",
      className,
      priority = false,
      loading,
      decoding = "async",
      fetchPriority,
      ...props
    },
    ref
  ) => {
    return (
      <img
        ref={ref}
        alt={alt}
        className={cn(className)}
        loading={loading ?? (priority ? "eager" : "lazy")}
        decoding={decoding}
        fetchPriority={fetchPriority ?? (priority ? "high" : "auto")}
        {...props}
      />
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
