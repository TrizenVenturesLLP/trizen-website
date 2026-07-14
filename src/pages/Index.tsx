import {
  Hero,
  LogoBar,
  MetricsStrip,
  HomeServices,
  HomeProducts,
  TechStack,
  HomeCaseStudies,
  CTABanner,
  FadeIn,
  PageMeta,
} from "@/components/marketing";

/**
 * Homepage composition (top → bottom):
 * 1. Hero — brand, headline, value prop, primary CTAs
 * 2. LogoBar — industry chips
 * 3. MetricsStrip — outcome counters
 * 4. HomeServices — capability bento + tabs
 * 5. HomeProducts — live product platforms
 * 6. TechStack — platforms we build on
 * 7. HomeCaseStudies — engagement proof
 * 8. CTABanner — book consultation
 */
const Index = () => {
  return (
    <>
      <PageMeta
        title="Home"
        path="/"
        description="Trizen helps enterprises design, deploy, and scale AI systems that deliver measurable operational outcomes."
      />
      <Hero />
      <LogoBar />
      <MetricsStrip />
      <HomeServices />
      <HomeProducts />
      <TechStack />
      <HomeCaseStudies />
      <FadeIn>
        <CTABanner
          secondaryLabel="View Case Studies"
          secondaryHref="/case-studies"
        />
      </FadeIn>
    </>
  );
};

export default Index;
