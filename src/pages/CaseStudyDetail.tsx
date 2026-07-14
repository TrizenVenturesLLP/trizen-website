import { useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import CTABanner from "@/components/marketing/CTABanner";
import PageMeta from "@/components/marketing/PageMeta";
import {
  PageHero,
  PageSection,
  CheckList,
  MetricTiles,
  ProsePanel,
  SectionTitle,
} from "@/components/page";
import { getCaseStudyBySlug } from "@/content/caseStudies";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!study) {
    return <NotFound />;
  }

  return (
    <>
      <PageMeta
        title={study.title}
        path={`/case-studies/${study.slug}`}
        description={study.description}
      />

      <PageHero
        back={{ to: "/case-studies", label: "All case studies" }}
        eyebrow={study.sector}
        title={study.title}
        description={study.description}
      />

      <PageSection
        tone="muted"
        pad="tight"
        aria-label="Key performance indicators"
        animate={false}
      >
        <MetricTiles metrics={study.metrics} />
      </PageSection>

      <PageSection className="space-y-0" containerClassName="space-y-8" animate={false}>
        <ProsePanel title="Challenge">{study.challenge}</ProsePanel>
        <ProsePanel title="Solution">{study.solution}</ProsePanel>
        <ProsePanel title="Business impact">
          <p className="mb-6">{study.businessImpact}</p>
          <p className="text-3xl font-semibold tracking-[-0.03em] text-zinc-900 mb-1">
            {study.outcome}
          </p>
          <p className="text-zinc-600 text-base">{study.outcomeDetail}</p>
        </ProsePanel>
        <ProsePanel title="Technology stack">
          <p className="text-sm text-zinc-600 mb-5">
            Selected for this engagement&apos;s security, latency, and ownership constraints.
          </p>
          <ul className="flex flex-wrap gap-2">
            {study.technologyStack.map((tech) => (
              <li
                key={tech}
                className="inline-flex rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700"
              >
                {tech}
              </li>
            ))}
          </ul>
        </ProsePanel>
        <div>
          <SectionTitle as="h3" eyebrow className="text-zinc-500 mb-4">
            Approach
          </SectionTitle>
          <CheckList items={study.approach} />
        </div>
      </PageSection>

      <CTABanner
        title="Discuss a similar engagement"
        description="Share your operating constraints. We'll outline a pragmatic path from discovery to production outcomes."
        secondaryLabel="All case studies"
        secondaryHref="/case-studies"
      />
    </>
  );
};

export default CaseStudyDetail;
