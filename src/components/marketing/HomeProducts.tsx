import { Link } from "react-router-dom";
import SectionHeader from "@/components/marketing/SectionHeader";
import FadeIn from "@/components/marketing/FadeIn";
import { ProductCard } from "@/components/page";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/content/products";

/**
 * Home products showcase — live platforms customers already use.
 * Mobile: horizontal snap scroll · md+: 2-col · lg+: 3-col grid
 */
const HomeProducts = () => {
  const items = getAllProducts();

  return (
    <section
      className="relative overflow-hidden py-20 md:py-32 border-b border-zinc-200 section-mesh-muted text-zinc-900"
      aria-labelledby="home-products-heading"
    >
      <div className="mobile-orb -left-10 top-24 h-52 w-52 bg-indigo-500/20 md:hidden" aria-hidden />
      <div className="mobile-orb right-0 bottom-20 h-40 w-40 bg-sky-400/15 md:hidden" aria-hidden />
      <div className="container relative mx-auto px-4">
        <FadeIn className="mb-8 md:mb-14">
          <SectionHeader
            tone="light"
            eyebrow="Our Products"
            title="Platforms we build, ship, and operate"
            description="Named products in market: workforce ops, WhatsApp infrastructure, and a founder community. Not slideware labeled as solutions."
          />
          <h2 id="home-products-heading" className="sr-only">
            Our products
          </h2>
        </FadeIn>

        <div
          className={[
            "flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory scroll-px-4",
            "md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:grid md:grid-cols-2 md:gap-5",
            "lg:grid-cols-3 lg:gap-6",
            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          ].join(" ")}
        >
          {items.map((product, index) => (
            <FadeIn
              key={product.id}
              delay={index * 0.04}
              className="w-[min(86vw,340px)] shrink-0 snap-center md:w-auto md:min-w-0"
            >
              <ProductCard product={product} variant="home" />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-10 md:mt-14 flex justify-center">
          <Button
            asChild
            size="lg"
            className="btn-micro min-h-12 w-full sm:w-auto sm:min-w-[220px] touch-manipulation shadow-md shadow-indigo-500/20"
          >
            <Link to="/products">View all products</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default HomeProducts;
