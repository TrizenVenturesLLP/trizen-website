export interface InsightPost {
  /** Stable id for keys / future CMS */
  id: string;
  category: string;
  title: string;
  excerpt: string;
  /** Internal path or external URL */
  href: string;
  draft?: boolean;
}

/**
 * Thought-leadership cards on /insights.
 * Links currently route to services, case studies, or contact (no article CMS yet).
 */
export const insightPosts: InsightPost[] = [
  {
    id: "copilots-to-agents",
    category: "AI Trends",
    title: "From copilots to operating agents: what enterprises get wrong",
    excerpt:
      "Why generic assistants stall, and how governed agents tied to systems of record create measurable cycle-time gains.",
    href: "/contact",
  },
  {
    id: "hybrid-automation",
    category: "Automation",
    title: "Hybrid automation: when rules, AI, and humans should share a workflow",
    excerpt:
      "A practical framework for deciding which steps stay deterministic, which need judgment, and where audit gates belong.",
    href: "/services/ai-automation",
  },
  {
    id: "logistics-exceptions",
    category: "Case Studies",
    title: "What “70% faster exceptions” actually required in logistics ops",
    excerpt:
      "Lessons from control-tower redesign: taxonomy, human-in-the-loop routing, and the metrics leadership funded.",
    href: "/case-studies/logistics-operations-agents",
  },
  {
    id: "banking-document-intelligence",
    category: "Industry Insights",
    title: "Document intelligence in banking without leaking the policy corpus",
    excerpt:
      "Grounding, evaluation, and audit trails that satisfy risk while cutting review cycle time.",
    href: "/case-studies/banking-document-intelligence",
  },
  {
    id: "evaluation-harnesses",
    category: "Research",
    title: "Evaluation harnesses: the missing production control for GenAI",
    excerpt:
      "How gold sets, regression gates, and red-teaming keep enterprise GenAI from drifting in silence.",
    href: "/services/generative-ai",
  },
];

export function getAllInsightPosts(): InsightPost[] {
  return insightPosts.filter((post) => !post.draft);
}

export function getInsightPostById(id: string): InsightPost | undefined {
  return insightPosts.find((post) => post.id === id && !post.draft);
}
