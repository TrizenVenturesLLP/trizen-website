import { ImgHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Skip lazy-load for LCP candidates (logo in header, hero media) */
  priority?: boolean;
  /**
   * Image fetch priority. Passed to the DOM as the standard HTML attribute
   * `fetchpriority` (React 18 does not whitelist camelCase `fetchPriority`).
   */
  fetchPriority?: "high" | "low" | "auto";
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
    const resolvedPriority = fetchPriority ?? (priority ? "high" : "auto");

    return (
      <img
        ref={ref}
        alt={alt}
        className={cn(className)}
        loading={loading ?? (priority ? "eager" : "lazy")}
        decoding={decoding}
        // Lowercase attribute avoids React 18 "unknown prop fetchPriority" warning
        fetchpriority={resolvedPriority}
        {...props}
      />
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
