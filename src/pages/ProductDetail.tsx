import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import NotFound from "@/pages/NotFound";
import CTABanner from "@/components/marketing/CTABanner";
import CardMedia from "@/components/marketing/CardMedia";
import PageMeta from "@/components/marketing/PageMeta";
import FadeIn from "@/components/marketing/FadeIn";
import { getProductBySlug } from "@/content/products";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <PageMeta
        title={product.name}
        path={`/products/${product.slug}`}
        description={product.oneLineValueProp}
      />

      <section className="border-b border-zinc-200 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <Link
              to="/products"
              className="inline-flex items-center text-sm text-zinc-600 hover:text-indigo-600 transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              All products
            </Link>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-600 mb-4">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.035em] text-zinc-900 mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-xl text-zinc-600 mb-3 max-w-3xl">{product.headline}</p>
            <p className="text-base text-zinc-600 max-w-3xl leading-relaxed mb-6">
              {product.oneLineValueProp}
            </p>
            <p className="inline-flex rounded-md border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700">
              {product.deploymentModel}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-14 md:py-20 border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <FadeIn>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-3">
              Problem
            </h2>
            <p className="text-lg text-zinc-700 leading-relaxed">{product.problem}</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="glass-panel-light rounded-2xl overflow-hidden">
              <CardMedia
                theme="light"
                blueprint={product.blueprint}
                size="tall"
                className="min-h-[220px] border-0"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-14 md:py-20 border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-3">
              Product architecture
            </h2>
            <p className="text-lg text-zinc-700 leading-relaxed max-w-3xl mb-10">
              {product.howItWorks}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.capabilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm text-zinc-700"
                >
                  <Check className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="py-14 md:py-20 border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-6">
              Outcomes
            </h2>
            <ul className="space-y-4 mb-10">
              {product.outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-zinc-700">
                  <Check className="h-5 w-5 text-indigo-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-4">
              Proof points
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {product.metrics.map((metric) => (
                <li
                  key={metric}
                  className="rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm font-medium text-zinc-800"
                >
                  {metric}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="py-14 md:py-16 border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-3">
              Deployment model
            </h2>
            <p className="text-lg text-zinc-700 max-w-2xl">
              {product.deploymentModel}. We configure governance, integrate with your systems of
              record, and leave your team with runbooks—not a black box.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        title={`Talk to us about ${product.name}`}
        description="Book a consultation to map fit, deployment model, and a pragmatic path into production."
        secondaryLabel="All products"
        secondaryHref="/products"
      />
    </>
  );
};

export default ProductDetail;
