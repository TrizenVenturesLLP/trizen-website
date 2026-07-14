import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import NotFound from "@/pages/NotFound";
import CTABanner from "@/components/marketing/CTABanner";
import CardMedia from "@/components/marketing/CardMedia";
import PageMeta from "@/components/marketing/PageMeta";
import FadeIn from "@/components/marketing/FadeIn";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/content/products";

const deploymentCopy: Record<string, string> = {
  "Standalone SaaS":
    "Cloud-hosted product your HR and ops teams run day to day—configure policies, onboard roles, and scale seats as the organization grows.",
  "Standalone console & API":
    "Operator console plus REST API and webhooks. Connect your Meta WhatsApp Business account, sync templates, and wire backends with signed receipt events.",
  "Community program":
    "Recurring offline meetups and a WhatsApp community layer—owned by members, supported by Trizen Ventures. Show up, build trust, and RSVP each month.",
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <NotFound />;
  }

  const objectPosition = product.coverPosition ?? "top";

  return (
    <>
      <PageMeta
        title={product.name}
        path={`/products/${product.slug}`}
        description={product.oneLineValueProp}
      />

      {/* 1. Intro */}
      <section className="bg-white pt-28 pb-8 sm:pt-32 md:pt-36 md:pb-10">
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
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <Button asChild size="sm" className="w-fit">
                <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                  {product.externalLabel}
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Hero product visual — pulled closer to intro */}
      <section className="relative -mt-2 md:-mt-4 pb-10 md:pb-14 bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/80 shadow-2xl shadow-zinc-900/10 ring-1 ring-zinc-200/70">
              <div className="absolute inset-0" aria-hidden>
                <img
                  src={product.coverImage}
                  alt=""
                  className="h-full w-full scale-110 object-cover blur-3xl opacity-40 max-md:blur-2xl"
                  style={{ objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/70 to-white/90" />
              </div>

              <img
                src={product.coverImage}
                alt={`${product.name} product preview`}
                className="relative block h-auto w-full max-h-[min(56vh,560px)] object-cover"
                style={{ objectPosition }}
                loading="eager"
                decoding="async"
              />

              <div className="absolute top-4 right-4 md:top-6 md:right-6 rounded-2xl border border-zinc-200/80 bg-white/95 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-zinc-700 shadow-sm backdrop-blur-md">
                {product.deploymentModel}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Problem */}
      <section className="py-14 md:py-20 border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-3">
              Problem
            </h2>
            <p className="text-lg text-zinc-700 leading-relaxed max-w-3xl">
              {product.problem}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 4. How it works + capabilities */}
      <section className="py-14 md:py-20 border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-3">
                  How it works
                </h2>
                <p className="text-lg text-zinc-700 leading-relaxed">{product.howItWorks}</p>
              </div>
              <div className="glass-panel-light rounded-2xl overflow-hidden min-h-[200px]">
                <CardMedia
                  theme="light"
                  blueprint={product.blueprint}
                  className="min-h-[200px] aspect-[16/10] border-0"
                />
              </div>
            </div>
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

      {/* 5. Outcomes + proof */}
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

      {/* 6. Deployment */}
      <section className="py-14 md:py-16 border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-3">
              Deployment model
            </h2>
            <p className="text-lg text-zinc-700 max-w-2xl mb-6">
              {product.deploymentModel}.{" "}
              {deploymentCopy[product.deploymentModel] ??
                "We configure governance and leave your team with clear runbooks."}
            </p>
            <Button asChild>
              <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                {product.externalLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 7. CTA */}
      <CTABanner
        title={`Talk to us about ${product.name}`}
        description="Book a consultation to map fit, or open the live product to explore the experience yourself."
        secondaryLabel={product.externalLabel}
        secondaryHref={product.externalUrl}
      />
    </>
  );
};

export default ProductDetail;
