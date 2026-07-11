import {
  Hero,
  LogoBar,
  MetricsStrip,
  HomeServices,
  TechStack,
  HomeCaseStudies,
  CTABanner,
  FadeIn,
  PageMeta,
} from "@/components/marketing";

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
