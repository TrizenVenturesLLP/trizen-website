import { useMemo, useState } from "react";
import FadeIn from "@/components/marketing/FadeIn";
import { ContentCard, ListingPage } from "@/components/page";
import { getAllInsightPosts, getInsightCategories } from "@/content/insights";
import { cn } from "@/lib/utils";

const Insights = () => {
  const posts = getAllInsightPosts();
  const categories = useMemo(() => getInsightCategories(), []);
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? posts : posts.filter((post) => post.category === active);

  return (
    <ListingPage
      title="Insights"
      path="/insights"
      description="Field notes, case deep-dives, and research from Trizen's enterprise AI practice."
      eyebrow="Insights"
      heading="Perspectives from the field"
      intro="Curated briefs and engagement lessons for operators and executives - grounded in delivery rather than demo culture."
      cta={{
        title: "Want a briefing tailored to your sector?",
        description:
          "Request a short executive note on AI opportunities in your operating model, grounded in delivery rather than hype.",
        primaryLabel: "Book a Consultation",
        secondaryLabel: "View services",
        secondaryHref: "/services",
      }}
    >
      <FadeIn className="mb-8">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter insights">
          {["All", ...categories].map((category) => {
            const selected = active === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors touch-manipulation min-h-10",
                  selected
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/25"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:border-indigo-200 hover:text-indigo-700"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {filtered.map((post, index) => (
          <FadeIn key={post.id} delay={index * 0.05}>
            <ContentCard
              href={post.href}
              eyebrow={post.category}
              title={post.title}
              description={post.excerpt}
              cta={post.type === "Case study" ? "Read case study" : "Explore"}
            >
              <div className="mb-5 flex flex-wrap gap-2">
                {post.type ? (
                  <span className="inline-flex rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-600">
                    {post.type}
                  </span>
                ) : null}
                {post.readTime ? (
                  <span className="inline-flex rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-[11px] text-zinc-500">
                    {post.readTime} read
                  </span>
                ) : null}
              </div>
            </ContentCard>
          </FadeIn>
        ))}
      </div>
    </ListingPage>
  );
};

export default Insights;
