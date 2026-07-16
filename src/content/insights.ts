export interface InsightPost {
  /** Stable id for keys / future CMS */
  id: string;
  category: string;
  title: string;
  excerpt: string;
  /** Internal path or external URL */
  href: string;
  /** Reading time label for resource cards */
  readTime?: string;
  /** Resource type for listing chips */
  type?: "Brief" | "Case study" | "Service deep-dive" | "Research note";
  draft?: boolean;
}

/**
 * Curated resources on /insights.
 * Full article CMS not yet; cards deep-link to services, cases, or contact briefings.
 */
export const insightPosts: InsightPost[] = [
  {
    id: "copilots-to-agents",
    category: "AI Trends",
    type: "Brief",
    readTime: "5 min",
    title: "From copilots to operating agents: what enterprises get wrong",
    excerpt:
      "Why generic assistants stall, and how governed agents tied to systems of record create measurable cycle-time gains.",
    href: "/services/ai-agents",
  },
  {
    id: "hybrid-automation",
    category: "Automation",
    type: "Service deep-dive",
    readTime: "6 min",
    title: "Hybrid automation: when rules, AI, and humans should share a workflow",
    excerpt:
      "A practical framework for deciding which steps stay deterministic, which need judgment, and where audit gates belong.",
    href: "/services/ai-automation",
  },
  {
    id: "logistics-exceptions",
    category: "Logistics",
    type: "Case study",
    readTime: "8 min",
    title: "What “70% faster exceptions” actually required in logistics ops",
    excerpt:
      "Lessons from control-tower redesign: taxonomy, human-in-the-loop routing, and the metrics leadership funded.",
    href: "/case-studies/logistics-operations-agents",
  },
  {
    id: "banking-document-intelligence",
    category: "Financial Services",
    type: "Case study",
    readTime: "7 min",
    title: "Document intelligence in banking without leaking the policy corpus",
    excerpt:
      "Grounding, evaluation, and audit trails that satisfy risk while cutting review cycle time.",
    href: "/case-studies/banking-document-intelligence",
  },
  {
    id: "evaluation-harnesses",
    category: "Research",
    type: "Research note",
    readTime: "6 min",
    title: "Evaluation harnesses: the missing production control for GenAI",
    excerpt:
      "How gold sets, regression gates, and red-teaming keep enterprise GenAI from drifting in silence.",
    href: "/services/generative-ai",
  },
  {
    id: "healthcare-admin",
    category: "Healthcare",
    type: "Case study",
    readTime: "7 min",
    title: "Returning clinician time: admin automation without cutting corners",
    excerpt:
      "How a hospital network cut administrative load on target workflows while keeping HIPAA-aligned audit trails.",
    href: "/case-studies/healthcare-admin-automation",
  },
];

export function getAllInsightPosts(): InsightPost[] {
  return insightPosts.filter((post) => !post.draft);
}

export function getInsightPostById(id: string): InsightPost | undefined {
  return insightPosts.find((post) => post.id === id && !post.draft);
}

export function getInsightCategories(): string[] {
  return [...new Set(getAllInsightPosts().map((post) => post.category))];
}
