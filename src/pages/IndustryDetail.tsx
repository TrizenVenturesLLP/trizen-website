import { useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import CTABanner from "@/components/marketing/CTABanner";
import PageMeta from "@/components/marketing/PageMeta";
import {
  PageHero,
  PageSection,
  CheckList,
  CapabilityGrid,
  ProsePanel,
  SectionTitle,
} from "@/components/page";
import { getIndustryBySlug } from "@/content/industries";

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  if (!industry) {
    return <NotFound />;
  }

  return (
    <>
      <PageMeta
        title={industry.title}
        path={`/industries/${industry.slug}`}
        description={industry.description}
      />

      <PageHero
        back={{ to: "/industries", label: "All industries" }}
        eyebrow={industry.title}
        title={industry.headline}
        description={industry.description}
      />

      <PageSection tone="muted">
        <ProsePanel title="The enterprise challenge">{industry.challenge}</ProsePanel>
      </PageSection>

      <PageSection>
        <SectionTitle>Trizen&apos;s approach</SectionTitle>
        <p className="text-lg text-zinc-600 leading-relaxed mb-10 max-w-3xl">
          {industry.approach}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CheckList panel title="Pain points we address" items={industry.painPoints} />
          <CheckList panel title="AI solutions" items={industry.solutions} />
        </div>
      </PageSection>

      <PageSection tone="muted">
        <CapabilityGrid title="Core capabilities" items={industry.capabilities} />
      </PageSection>

      <CTABanner
        title={`Discuss AI for ${industry.title}`}
        description="Share your operating constraints. We'll outline a pragmatic path from discovery to production."
        secondaryLabel="All industries"
        secondaryHref="/industries"
      />
    </>
  );
};

export default IndustryDetail;
