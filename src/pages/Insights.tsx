import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CTABanner from "@/components/marketing/CTABanner";
import PageMeta from "@/components/marketing/PageMeta";
import FadeIn from "@/components/marketing/FadeIn";

const posts = [
  {
    category: "AI Trends",
    title: "From copilots to operating agents: what enterprises get wrong",
    excerpt:
      "Why generic assistants stall, and how governed agents tied to systems of record create measurable cycle-time gains.",
    href: "/contact",
  },
  {
    category: "Automation",
    title: "Hybrid automation: when rules, AI, and humans should share a workflow",
    excerpt:
      "A practical framework for deciding which steps stay deterministic, which need judgment, and where audit gates belong.",
    href: "/services/ai-automation",
  },
  {
    category: "Case Studies",
    title: "What “70% faster exceptions” actually required in logistics ops",
    excerpt:
      "Lessons from control-tower redesign: taxonomy, human-in-the-loop routing, and the metrics leadership funded.",
    href: "/case-studies/logistics-operations-agents",
  },
  {
    category: "Industry Insights",
    title: "Document intelligence in banking without leaking the policy corpus",
    excerpt:
      "Grounding, evaluation, and audit trails that satisfy risk while cutting review cycle time.",
    href: "/case-studies/banking-document-intelligence",
  },
  {
    category: "Research",
    title: "Evaluation harnesses: the missing production control for GenAI",
    excerpt:
      "How gold sets, regression gates, and red-teaming keep enterprise GenAI from drifting in silence.",
    href: "/services/generative-ai",
  },
];

const Insights = () => {
  return (
    <>
      <PageMeta
        title="Insights"
        path="/insights"
        description="AI trends, automation, case studies, industry insights, and research from Trizen's enterprise practice."
      />

      <section className="border-b border-zinc-200 bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeader
              eyebrow="Insights"
              title="Perspectives from the field"
              description="Briefings on AI trends, automation, industry delivery, and research, written for operators and executives rather than demo culture."
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {posts.map((post, index) => (
              <FadeIn key={post.title} delay={index * 0.05}>
                <Link
                  to={post.href}
                  className="group glass-panel card-lift flex h-full flex-col rounded-2xl p-7 md:p-8"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary mb-3">
                    {post.category}
                  </p>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground mb-3 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want a briefing tailored to your sector?"
        description="Request a short executive note on AI opportunities in your operating model, grounded in delivery rather than hype."
        primaryLabel="Book a Consultation"
        secondaryLabel="View services"
        secondaryHref="/services"
      />
    </>
  );
};

export default Insights;
