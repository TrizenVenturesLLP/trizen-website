import { useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import CTABanner from "@/components/marketing/CTABanner";
import CardMedia from "@/components/marketing/CardMedia";
import PageMeta from "@/components/marketing/PageMeta";
import FadeIn from "@/components/marketing/FadeIn";
import DetailSectionNav from "@/components/marketing/DetailSectionNav";
import ProcessSteps from "@/components/marketing/ProcessSteps";
import RelatedCaseStudies from "@/components/marketing/RelatedCaseStudies";
import {
  PageHero,
  PageSection,
  CheckList,
  CapabilityGrid,
  SectionTitle,
} from "@/components/page";
import { getBlueprintForService, getServiceBySlug } from "@/content/services";
import { getRelatedCaseStudies } from "@/content/caseStudies";
import {
  engagementTimeline,
  serviceRelatedCases,
} from "@/content/marketingExtras";

const navItems = [
  { id: "challenge", label: "Challenge" },
  { id: "approach", label: "Approach" },
  { id: "timeline", label: "Timeline" },
  { id: "capabilities", label: "Capabilities" },
  { id: "proof", label: "Proof" },
];

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFound />;
  }

  const blueprint = getBlueprintForService(service);
  const related = getRelatedCaseStudies(serviceRelatedCases[service.slug], {
    limit: 2,
  });

  return (
    <>
      <PageMeta
        title={service.title}
        path={`/services/${service.slug}`}
        description={service.description}
      />

      <PageHero
        back={{ to: "/services", label: "All services" }}
        eyebrow={`${service.category} · ${service.title}`}
        title={service.headline}
        description={service.description}
      />

      <DetailSectionNav items={navItems} />

      <PageSection
        id="challenge"
        tone="muted"
        animate={false}
        containerClassName="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      >
        <FadeIn>
          <SectionTitle eyebrow>The enterprise challenge</SectionTitle>
          <p className="text-lg text-zinc-700 leading-relaxed">{service.challenge}</p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="glass-panel-light rounded-2xl overflow-hidden">
            <CardMedia
              theme="light"
              blueprint={blueprint}
              size="tall"
              className="min-h-[220px] border-0"
            />
          </div>
        </FadeIn>
      </PageSection>

      <PageSection id="approach" animate={false}>
        <FadeIn>
          <SectionTitle>Trizen&apos;s approach</SectionTitle>
          <p className="text-lg text-zinc-600 leading-relaxed mb-10 max-w-3xl">
            {service.approach}
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FadeIn delay={0.06}>
            <CheckList panel title="Business benefits" items={service.benefits} stagger />
          </FadeIn>
          <FadeIn delay={0.1}>
            <CheckList panel title="Typical deliverables" items={service.deliverables} stagger />
          </FadeIn>
        </div>
      </PageSection>

      <PageSection id="timeline" tone="muted" animate={false}>
        <ProcessSteps
          steps={engagementTimeline}
          eyebrow="Engagement"
          title="Typical delivery path"
          description={`How ${service.title.toLowerCase()} engagements usually move from discovery to ownership.`}
        />
      </PageSection>

      <PageSection id="capabilities" animate={false}>
        <FadeIn>
          <CapabilityGrid title="Core capabilities" items={service.capabilities} stagger />
        </FadeIn>
      </PageSection>

      {related.length > 0 ? (
        <PageSection id="proof" tone="muted" animate={false}>
          <RelatedCaseStudies
            studies={related}
            title="Engagements in this space"
          />
        </PageSection>
      ) : null}

      <CTABanner
        title={`Discuss ${service.title}`}
        description="Book a consultation to scope outcomes, constraints, and a delivery path for your team."
        secondaryLabel="All services"
        secondaryHref="/services"
      />
    </>
  );
};

export default ServiceDetail;
