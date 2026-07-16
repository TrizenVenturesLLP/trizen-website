import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import NotFound from "@/pages/NotFound";
import CTABanner from "@/components/marketing/CTABanner";
import FadeIn from "@/components/marketing/FadeIn";
import PageMeta from "@/components/marketing/PageMeta";
import DetailSectionNav from "@/components/marketing/DetailSectionNav";
import ProcessSteps from "@/components/marketing/ProcessSteps";
import RelatedCaseStudies from "@/components/marketing/RelatedCaseStudies";
import {
  PageHero,
  PageSection,
  CheckList,
  CapabilityGrid,
  ProsePanel,
  SectionTitle,
} from "@/components/page";
import { getIndustryBySlug, getAllIndustries } from "@/content/industries";
import { getRelatedCaseStudies } from "@/content/caseStudies";
import {
  engagementTimeline,
  industryRelatedCases,
} from "@/content/marketingExtras";

const navItems = [
  { id: "challenge", label: "Challenge" },
  { id: "approach", label: "Approach" },
  { id: "timeline", label: "Timeline" },
  { id: "capabilities", label: "Capabilities" },
  { id: "proof", label: "Proof" },
];

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  if (!industry) {
    return <NotFound />;
  }

  const related = getRelatedCaseStudies(industryRelatedCases[industry.slug], {
    limit: 2,
  });
  const otherIndustries = getAllIndustries()
    .filter((item) => item.slug !== industry.slug)
    .slice(0, 3);

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

      <DetailSectionNav items={navItems} />

      <PageSection id="challenge" tone="muted" animate={false}>
        <FadeIn>
          <ProsePanel title="The enterprise challenge">{industry.challenge}</ProsePanel>
        </FadeIn>
      </PageSection>

      <PageSection id="approach" animate={false}>
        <FadeIn>
          <SectionTitle>Trizen&apos;s approach</SectionTitle>
          <p className="text-lg text-zinc-600 leading-relaxed mb-10 max-w-3xl">
            {industry.approach}
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FadeIn delay={0.06}>
            <CheckList panel title="Pain points we address" items={industry.painPoints} stagger />
          </FadeIn>
          <FadeIn delay={0.1}>
            <CheckList panel title="AI solutions" items={industry.solutions} stagger />
          </FadeIn>
        </div>
      </PageSection>

      <PageSection id="timeline" tone="muted" animate={false}>
        <ProcessSteps
          steps={engagementTimeline}
          eyebrow="Sector delivery"
          title={`How we engage in ${industry.title.toLowerCase()}`}
          description="Same delivery discipline, grounded in the workflows and regulations that define this industry."
        />
      </PageSection>

      <PageSection id="capabilities" animate={false}>
        <FadeIn>
          <CapabilityGrid title="Core capabilities" items={industry.capabilities} stagger />
        </FadeIn>

        {otherIndustries.length > 0 ? (
          <FadeIn delay={0.1} className="mt-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400 mb-4">
              Other sectors
            </p>
            <ul className="flex flex-wrap gap-2">
              {otherIndustries.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/industries/${item.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-700 hover:border-indigo-200 hover:text-indigo-700 transition-colors"
                  >
                    {item.title}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        ) : null}
      </PageSection>

      {related.length > 0 ? (
        <PageSection id="proof" tone="muted" animate={false}>
          <RelatedCaseStudies
            studies={related}
            title={`${industry.title} engagements`}
          />
        </PageSection>
      ) : null}

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
