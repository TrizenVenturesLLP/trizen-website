import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CardMedia from "@/components/marketing/CardMedia";
import FadeIn from "@/components/marketing/FadeIn";
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

        {/* Mobile: snap carousel · md+: responsive grid */}
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
              <Link
                to={`/products/${product.slug}`}
                className="group card-sheen glass-panel-light card-lift-light flex h-full min-h-[440px] w-full flex-col rounded-2xl overflow-hidden transform-gpu border-indigo-100/80 shadow-md shadow-indigo-500/5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10 transition-[border-color,box-shadow]"
              >
                <CardMedia
                  theme="light"
                  image={product.coverImage}
                  imageAlt={`${product.name} preview`}
                  imagePosition={product.coverPosition}
                  imageFit={product.coverFit}
                  className="w-full rounded-none border-0 aspect-[16/10] min-h-[168px] sm:min-h-[180px] md:min-h-[190px]"
                />
                <div className="flex flex-1 flex-col bg-gradient-to-b from-white to-indigo-50/35 p-5 sm:p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center rounded-md border border-indigo-100 bg-indigo-50/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-indigo-700">
                      {product.category}
                    </span>
                    <span className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-[10px] font-medium text-zinc-600">
                      {product.deploymentModel}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold tracking-[-0.03em] text-zinc-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4 flex-grow">
                    {product.oneLineValueProp}
                  </p>

                  {product.socialProof ? (
                    <p className="mb-5 text-xs text-zinc-500">
                      <span
                        className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 align-middle"
                        aria-hidden
                      />
                      {product.socialProof}
                    </p>
                  ) : null}

                  <span className="inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    Learn more
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
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
