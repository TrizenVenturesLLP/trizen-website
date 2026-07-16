export interface TechCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
}

/**
 * Platform & tooling Trizen deploys on enterprise engagements.
 * Framed by role, not a vendor laundry list.
 */
export const techStackCategories: TechCategory[] = [
  {
    id: "models",
    title: "Foundation models",
    description: "Best-fit model routing for reasoning, extraction, and generation, with enterprise controls.",
    items: ["OpenAI", "Anthropic", "Google Gemini"],
  },
  {
    id: "cloud-ai",
    title: "Cloud AI platforms",
    description: "Secure, governed AI services aligned to your cloud and compliance posture.",
    items: ["Azure AI", "AWS"],
  },
  {
    id: "data",
    title: "Data & retrieval",
    description: "Operational stores and vector memory for grounded, auditable AI systems.",
    items: ["PostgreSQL", "MongoDB", "Pinecone"],
  },
  {
    id: "orchestration",
    title: "Agents & orchestration",
    description: "Workflow automation and agent frameworks that survive production scrutiny.",
    items: ["LangChain", "n8n"],
  },
  {
    id: "platform",
    title: "Delivery platform",
    description: "Containerized, scalable runtimes for reliable deployment and operations.",
    items: ["Docker", "Kubernetes"],
  },
  {
    id: "engineering",
    title: "Application engineering",
    description: "Interfaces and services your teams can own after we leave.",
    items: ["Python", "Node.js", "React", "Next.js"],
  },
];

export const allTechNames = techStackCategories.flatMap((c) => c.items);
