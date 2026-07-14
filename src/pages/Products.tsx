import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CardMedia from "@/components/marketing/CardMedia";
import CTABanner from "@/components/marketing/CTABanner";
import PageMeta from "@/components/marketing/PageMeta";
import FadeIn from "@/components/marketing/FadeIn";
import { getAllProducts } from "@/content/products";

const Products = () => {
  const items = getAllProducts();

  return (
    <>
      <PageMeta
        title="Products"
        path="/products"
        description="Trizen products: TrizenHR attendance and payroll, TrizenDialog WhatsApp ops, and Trizen Community founder events."
      />

      <section className="relative overflow-hidden border-b border-zinc-200 section-mesh-muted pt-28 pb-20 sm:pt-32 md:pt-36 md:pb-28">
        <div className="container relative mx-auto px-4">
          <FadeIn>
            <SectionHeader
              eyebrow="Products"
              title="Live platforms we build and operate"
              description="Named products with production surfaces: workforce ops, WhatsApp notification infrastructure, and a founder community for events. Not slideware labeled as solutions."
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {items.map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.06}>
                <Link
                  to={`/products/${product.slug}`}
                  className="group glass-panel-light card-lift-light flex h-full flex-col rounded-2xl overflow-hidden transform-gpu hover:border-indigo-200"
                >
                  <CardMedia
                    theme="light"
                    image={product.cardImage ?? product.coverImage}
                    imageAlt={`${product.name} product preview`}
                    imagePosition={product.coverPosition}
                    imageFit={product.coverFit}
                    className="rounded-none border-0 min-h-[160px]"
                  />
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-600 mb-2">
                      {product.category}
                    </p>
                    <h2 className="text-xl font-semibold tracking-[-0.03em] text-zinc-900 mb-2">
                      {product.name}
                    </h2>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-5 flex-grow">
                      {product.oneLineValueProp}
                    </p>
                    <p className="text-xs text-zinc-500 mb-4">{product.deploymentModel}</p>
                    <span className="inline-flex items-center text-sm font-medium text-zinc-700 group-hover:text-indigo-600 transition-colors">
                      {product.cardCta}
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want these products on your roadmap?"
        description="We ship and operate TrizenHR, TrizenDialog, and Trizen Community—or embed them into delivery engagements for your teams."
        secondaryLabel="View services"
        secondaryHref="/services"
      />
    </>
  );
};

export default Products;
