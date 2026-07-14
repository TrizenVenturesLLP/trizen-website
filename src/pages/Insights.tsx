import FadeIn from "@/components/marketing/FadeIn";
import { ContentCard, ListingPage } from "@/components/page";
import { getAllInsightPosts } from "@/content/insights";

const Insights = () => {
  const posts = getAllInsightPosts();

  return (
    <ListingPage
      title="Insights"
      path="/insights"
      description="AI trends, automation, case studies, industry insights, and research from Trizen's enterprise practice."
      eyebrow="Insights"
      heading="Perspectives from the field"
      intro="Briefings on AI trends, automation, industry delivery, and research, written for operators and executives rather than demo culture."
      cta={{
        title: "Want a briefing tailored to your sector?",
        description:
          "Request a short executive note on AI opportunities in your operating model, grounded in delivery rather than hype.",
        primaryLabel: "Book a Consultation",
        secondaryLabel: "View services",
        secondaryHref: "/services",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {posts.map((post, index) => (
          <FadeIn key={post.id} delay={index * 0.05}>
            <ContentCard
              href={post.href}
              eyebrow={post.category}
              title={post.title}
              description={post.excerpt}
              cta="Read more"
            />
          </FadeIn>
        ))}
      </div>
    </ListingPage>
  );
};

export default Insights;
