import { useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import CTABanner from "@/components/marketing/CTABanner";
import CardMedia from "@/components/marketing/CardMedia";
import PageMeta from "@/components/marketing/PageMeta";
import FadeIn from "@/components/marketing/FadeIn";
import {
  PageHero,
  PageSection,
  CheckList,
  CapabilityGrid,
  SectionTitle,
} from "@/components/page";
import { getBlueprintForService, getServiceBySlug } from "@/content/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFound />;
  }

  const blueprint = getBlueprintForService(service);

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

      <PageSection
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

      <PageSection>
        <SectionTitle>Trizen&apos;s approach</SectionTitle>
        <p className="text-lg text-zinc-600 leading-relaxed mb-10 max-w-3xl">
          {service.approach}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CheckList panel title="Business benefits" items={service.benefits} />
          <CheckList panel title="Typical deliverables" items={service.deliverables} />
        </div>
      </PageSection>

      <PageSection tone="muted">
        <CapabilityGrid title="Core capabilities" items={service.capabilities} />
      </PageSection>

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
