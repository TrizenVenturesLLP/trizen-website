import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CardMedia from "@/components/marketing/CardMedia";
import type { Product } from "@/content/products";
import { cardVariants } from "@/lib/variants";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  /**
   * home — richer home showcase (badges, social proof, taller card)
   * listing — products index grid
   */
  variant?: "home" | "listing";
  className?: string;
}

/**
 * Shared product card for home showcase and /products index.
 */
const ProductCard = ({
  product,
  variant = "listing",
  className,
}: ProductCardProps) => {
  const isHome = variant === "home";
  const image = isHome
    ? product.coverImage
    : product.cardImage ?? product.coverImage;

  return (
    <Link
      to={`/products/${product.slug}`}
      className={cn(
        cardVariants({ layout: isHome ? "productHome" : "product" }),
        className
      )}
    >
      <CardMedia
        theme="light"
        image={image}
        imageAlt={`${product.name} product preview`}
        imagePosition={product.coverPosition}
        imageFit={product.coverFit}
        className={cn(
          "rounded-none border-0",
          isHome
            ? "w-full aspect-[16/10] min-h-[168px] sm:min-h-[180px] md:min-h-[190px]"
            : "min-h-[160px]"
        )}
      />

      <div
        className={cn(
          "flex flex-1 flex-col",
          isHome
            ? "bg-gradient-to-b from-white to-indigo-50/35 p-5 sm:p-6 md:p-7"
            : "p-6 md:p-7"
        )}
      >
        {isHome ? (
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center rounded-md border border-indigo-100 bg-indigo-50/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-indigo-700">
              {product.category}
            </span>
            <span className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-[10px] font-medium text-zinc-600">
              {product.deploymentModel}
            </span>
          </div>
        ) : (
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-600 mb-2">
            {product.category}
          </p>
        )}

        <h3
          className={cn(
            "font-semibold tracking-[-0.03em] text-zinc-900 mb-2",
            isHome ? "text-lg sm:text-xl" : "text-xl"
          )}
        >
          {product.name}
        </h3>
        <p className="text-sm text-zinc-600 leading-relaxed mb-4 flex-grow">
          {product.oneLineValueProp}
        </p>

        {isHome && product.socialProof ? (
          <p className="mb-5 text-xs text-zinc-500">
            <span
              className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 align-middle"
              aria-hidden
            />
            {product.socialProof}
          </p>
        ) : null}

        {!isHome ? (
          <p className="text-xs text-zinc-500 mb-4">{product.deploymentModel}</p>
        ) : null}

        <span
          className={cn(
            "inline-flex items-center text-sm font-medium transition-colors",
            isHome
              ? "text-indigo-600 group-hover:text-indigo-700"
              : "text-zinc-700 group-hover:text-indigo-600"
          )}
        >
          {isHome ? "Learn more" : product.cardCta}
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
