import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import BlueprintDiagram, {
  type BlueprintType,
  type BlueprintTheme,
} from "@/components/marketing/BlueprintDiagram";

interface CardMediaProps {
  children?: ReactNode;
  className?: string;
  size?: "default" | "tall" | "wide";
  blueprint?: BlueprintType;
  /** Product / landing cover - takes precedence over blueprint */
  image?: string;
  imageAlt?: string;
  /** CSS object-position when using image */
  imagePosition?: string;
  /** cover (default) or contain - contain keeps full UI visible on light dashboards */
  imageFit?: "cover" | "contain";
  /** Light for white content chapters; dark for bookend cards */
  theme?: BlueprintTheme;
}

const CardMedia = ({
  children,
  className,
  size = "default",
  blueprint,
  image,
  imageAlt = "",
  imagePosition = "top",
  imageFit = "cover",
  theme = "light",
}: CardMediaProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const light = theme === "light";
  const showBlueprint = Boolean(blueprint) && !image;

  useEffect(() => {
    if (!showBlueprint) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [showBlueprint]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden transform-gpu",
        light
          ? "border-b border-zinc-200 bg-zinc-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)]"
          : "border-b border-zinc-200 bg-white/[0.03] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),inset_0_-20px_40px_-20px_rgba(0,0,0,0.45)]",
        size === "default" && "aspect-[16/10] min-h-[160px]",
        size === "tall" && "aspect-[4/3] min-h-[200px] h-full lg:min-h-0 lg:aspect-auto lg:flex-1",
        size === "wide" && "aspect-[21/9] min-h-[180px] md:aspect-[2.4/1]",
        className
      )}
    >
      {image ? (
        <img
          src={image}
          alt={imageAlt}
          className={cn(
            "absolute inset-0 h-full w-full card-media-zoom",
            imageFit === "contain" ? "object-contain" : "object-cover"
          )}
          style={{ objectPosition: imagePosition }}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            aria-hidden
            style={{
              backgroundImage: light
                ? "radial-gradient(circle at center, rgba(24,24,27,0.08) 1px, transparent 1px)"
                : "radial-gradient(circle at center, rgba(255,255,255,0.045) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
              maskImage: "radial-gradient(ellipse at center, black 55%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 55%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background: light
                ? "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(24,24,27,0.03), transparent 65%)"
                : "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(255,255,255,0.05), transparent 65%)",
            }}
          />
          <div className="relative z-10 flex h-full w-full items-center justify-center p-6 md:p-8">
            {showBlueprint ? (
              <BlueprintDiagram type={blueprint!} active={inView} theme={theme} />
            ) : (
              children
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CardMedia;
export type { BlueprintType };
