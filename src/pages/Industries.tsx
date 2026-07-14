import FadeIn from "@/components/marketing/FadeIn";
import { ContentCard, ListingPage } from "@/components/page";
import { getAllIndustries } from "@/content/industries";

const Industries = () => {
  const items = getAllIndustries();

  return (
    <ListingPage
      title="Industries"
      path="/industries"
      description="Sector expertise where operational AI compounds, across healthcare, financial services, and more."
      eyebrow="Industries"
      heading="Sector expertise where operational AI compounds"
      intro="We apply the same delivery discipline across verticals, grounded in the workflows, regulations, and systems that define each industry."
      cta={{
        title: "Building for your industry?",
        description:
          "Tell us about your operating constraints. We'll map a pragmatic AI path from pilot to production.",
        secondaryLabel: "Explore services",
        secondaryHref: "/services",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((industry, index) => (
          <FadeIn key={industry.slug} delay={index * 0.06}>
            <ContentCard
              href={`/industries/${industry.slug}`}
              title={industry.title}
              description={industry.description}
              bulletsLabel="Key pain points"
              bullets={industry.painPoints.slice(0, 3)}
              cta="View industry"
            />
          </FadeIn>
        ))}
      </div>
    </ListingPage>
  );
};

export default Industries;
