import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import NotFound from "@/pages/NotFound";
import CTABanner from "@/components/marketing/CTABanner";
import FadeIn from "@/components/marketing/FadeIn";
import PageMeta from "@/components/marketing/PageMeta";
import AnimatedCounter from "@/components/marketing/AnimatedCounter";
import DetailSectionNav from "@/components/marketing/DetailSectionNav";
import RelatedCaseStudies from "@/components/marketing/RelatedCaseStudies";
import {
  PageHero,
  PageSection,
  CheckList,
  MetricTiles,
  ProsePanel,
  SectionTitle,
} from "@/components/page";
import {
  getCaseStudyBySlug,
  getCaseStudiesBySector,
  getRelatedCaseStudies,
} from "@/content/caseStudies";
import { parseLeadingMetric } from "@/lib/parseMetric";

const navItems = [
  { id: "kpis", label: "KPIs" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "Solution" },
  { id: "impact", label: "Impact" },
  { id: "stack", label: "Stack" },
  { id: "approach", label: "Approach" },
];

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!study) {
    return <NotFound />;
  }

  const outcomeMetric = parseLeadingMetric(study.outcome);
  const related = getRelatedCaseStudies(
    getCaseStudiesBySector(study.sector)
      .filter((item) => item.slug !== study.slug)
      .map((item) => item.slug),
    { exclude: study.slug, limit: 2 }
  );

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
      >
        <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/50 px-5 py-5 sm:px-7 sm:py-6 max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-600 mb-2">
            Primary outcome
          </p>
          <p className="text-3xl sm:text-4xl font-semibold tracking-[-0.035em] text-zinc-900 tabular-nums">
            {outcomeMetric ? (
              <>
                <AnimatedCounter
                  value={outcomeMetric.value}
                  suffix={outcomeMetric.suffix}
                />
                {outcomeMetric.rest ? (
                  <span className="ml-2 text-lg sm:text-xl font-medium text-zinc-600 tracking-normal">
                    {outcomeMetric.rest}
                  </span>
                ) : null}
              </>
            ) : (
              study.outcome
            )}
          </p>
          <p className="mt-2 text-sm text-zinc-600">{study.outcomeDetail}</p>
        </div>
      </PageHero>

      <DetailSectionNav items={navItems} />

      <PageSection
        id="kpis"
        tone="muted"
        pad="tight"
        aria-label="Key performance indicators"
        animate={false}
      >
        <MetricTiles metrics={study.metrics} />
      </PageSection>

      <PageSection animate={false} containerClassName="space-y-8">
        <div id="challenge" className="scroll-mt-28">
          <FadeIn>
            <ProsePanel title="Challenge">{study.challenge}</ProsePanel>
          </FadeIn>
        </div>
        <div id="solution" className="scroll-mt-28">
          <FadeIn delay={0.05}>
            <ProsePanel title="Solution">{study.solution}</ProsePanel>
          </FadeIn>
        </div>
        <div id="impact" className="scroll-mt-28">
          <FadeIn delay={0.1}>
            <ProsePanel title="Business impact">
              <p className="mb-6">{study.businessImpact}</p>
              <p className="text-3xl font-semibold tracking-[-0.03em] text-zinc-900 mb-1">
                {outcomeMetric ? (
                  <>
                    <AnimatedCounter
                      value={outcomeMetric.value}
                      suffix={outcomeMetric.suffix}
                    />
                    {outcomeMetric.rest ? ` ${outcomeMetric.rest}` : null}
                  </>
                ) : (
                  study.outcome
                )}
              </p>
              <p className="text-zinc-600 text-base">{study.outcomeDetail}</p>
            </ProsePanel>
          </FadeIn>
        </div>
        <div id="stack" className="scroll-mt-28">
          <FadeIn delay={0.14}>
            <ProsePanel title="Technology stack">
              <p className="text-sm text-zinc-600 mb-5">
                Selected for this engagement&apos;s security, latency, and ownership constraints.
              </p>
              <ul className="flex flex-wrap gap-2">
                {study.technologyStack.map((tech, index) => (
                  <FadeIn
                    key={tech}
                    as="li"
                    delay={0.16 + index * 0.03}
                    className="inline-flex rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700"
                  >
                    {tech}
                  </FadeIn>
                ))}
              </ul>
            </ProsePanel>
          </FadeIn>
        </div>
        <div id="approach" className="scroll-mt-28">
          <FadeIn delay={0.18}>
            <SectionTitle as="h3" eyebrow className="text-zinc-500 mb-4">
              Approach
            </SectionTitle>
            <CheckList items={study.approach} stagger />
          </FadeIn>
        </div>
      </PageSection>

      {related.length > 0 ? (
        <PageSection tone="muted" animate={false}>
          <RelatedCaseStudies
            studies={related}
            eyebrow="More in this sector"
            title={`Other ${study.sector.toLowerCase()} engagements`}
          />
        </PageSection>
      ) : (
        <PageSection tone="muted" pad="tight">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            All case studies
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </PageSection>
      )}

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
