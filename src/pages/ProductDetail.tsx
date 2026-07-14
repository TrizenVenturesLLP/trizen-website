import { useParams } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import NotFound from "@/pages/NotFound";
import CTABanner from "@/components/marketing/CTABanner";
import CardMedia from "@/components/marketing/CardMedia";
import PageMeta from "@/components/marketing/PageMeta";
import FadeIn from "@/components/marketing/FadeIn";
import { Button } from "@/components/ui/button";
import {
  PageHero,
  PageSection,
  CheckList,
  CapabilityGrid,
  SectionTitle,
} from "@/components/page";
import { getDeploymentModelCopy, getProductBySlug } from "@/content/products";

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

      <PageHero
        compact
        back={{ to: "/products", label: "All products" }}
        eyebrow={product.category}
        title={product.name}
        subtitle={product.headline}
        description={
          <p className="text-base text-zinc-600 max-w-3xl leading-relaxed">
            {product.oneLineValueProp}
          </p>
        }
      >
        <Button asChild size="sm" className="w-fit">
          <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
            {product.externalLabel}
            <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </a>
        </Button>
      </PageHero>

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

      <PageSection tone="muted">
        <SectionTitle eyebrow>Problem</SectionTitle>
        <p className="text-lg text-zinc-700 leading-relaxed max-w-3xl">{product.problem}</p>
      </PageSection>

      <PageSection animate={false}>
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <SectionTitle eyebrow>How it works</SectionTitle>
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
          <CapabilityGrid items={product.capabilities} withCheck />
        </FadeIn>
      </PageSection>

      <PageSection tone="muted">
        <SectionTitle eyebrow className="mb-6">
          Outcomes
        </SectionTitle>
        <CheckList
          items={product.outcomes}
          itemClassName="text-base text-zinc-700"
          iconClassName="h-5 w-5 mt-0"
          className="mb-10"
        />
        <SectionTitle eyebrow as="h3" className="mb-4">
          Proof points
        </SectionTitle>
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
      </PageSection>

      <PageSection pad="tight">
        <SectionTitle eyebrow>Deployment model</SectionTitle>
        <p className="text-lg text-zinc-700 max-w-2xl mb-6">
          {product.deploymentModel}. {getDeploymentModelCopy(product.deploymentModel)}
        </p>
        <Button asChild>
          <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
            {product.externalLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </PageSection>

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
