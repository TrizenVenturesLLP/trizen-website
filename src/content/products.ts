export type ProductCategory =
  | "Credentialing"
  | "Co-innovation"
  | "Meta API Infrastructure";

export type DeploymentModel =
  | "Embedded in engagement"
  | "Standalone API"
  | "Embedded or standalone";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  oneLineValueProp: string;
  headline: string;
  problem: string;
  howItWorks: string;
  deploymentModel: DeploymentModel;
  metrics: string[];
  capabilities: string[];
  outcomes: string[];
  /** CardMedia / blueprint variant */
  blueprint: "certify" | "labs" | "dialog";
  featured?: boolean;
  draft?: boolean;
}

export const products: Product[] = [
  {
    id: "certify",
    name: "Trizen Certify",
    slug: "trizen-certify",
    category: "Credentialing",
    oneLineValueProp:
      "Automated credentialing with QR verification and audit-ready issuance logs.",
    headline: "Credential pipelines without the audit gaps",
    problem:
      "Enterprise academies still issue credentials through spreadsheets, email, and static PDFs. Learners wait days for certificates; auditors cannot verify authenticity; ops teams burn cycles on re-issuance and fraud checks.",
    howItWorks:
      "Trizen Certify is a governed credentialing engine: unique certificate IDs, QR-linked public verification, branded PDF generation, and program/cohort configuration. Delivery teams configure once; issuance and validation become a pipeline instead of a manual handoff.",
    deploymentModel: "Embedded or standalone",
    metrics: [
      "Minutes instead of days for certificate issuance",
      "Public QR verification for every credential",
      "Built for regulated workforce programs",
    ],
    capabilities: [
      "Unique ID generation and secure lookup",
      "QR-linked public verification pages",
      "Branded PDF certificate generation",
      "Program and cohort configuration",
      "Audit-ready issuance logs",
    ],
    outcomes: [
      "Training programs ship credentials in minutes with a verifiable trail",
      "Compliance and L&D leaders get instant authenticity checks",
      "Learners receive brand-consistent artifacts without ops bottlenecks",
    ],
    blueprint: "certify",
    featured: true,
  },
  {
    id: "labs",
    name: "Trizen Labs",
    slug: "trizen-labs",
    category: "Co-innovation",
    oneLineValueProp:
      "A reusable co-innovation codebase so POCs start from proven scaffolding, not a blank repo.",
    headline: "Rapid POC framework for enterprise co-innovation sprints",
    problem:
      "Most AI POCs restart from zero: ad-hoc repos, unclear evaluation, and no path from demo to production. Weeks disappear before a stakeholder sees a credible signal of value.",
    howItWorks:
      "Trizen Labs is our sprint kit: scaffolding for retrieval, agent tooling, evaluation harnesses, and environment patterns reused across engagements. Client workshops land on a working baseline in days, with measurable quality gates from day one.",
    deploymentModel: "Embedded in engagement",
    metrics: [
      "~40% head start on first production POC",
      "Evaluation gates included from day one",
      "Reusable patterns across verticals",
    ],
    capabilities: [
      "Domain-grounded RAG starter kits",
      "Agent tool-calling templates",
      "Evaluation and red-team harnesses",
      "Secure environment and secrets patterns",
      "Handoff packs for production engineering",
    ],
    outcomes: [
      "Stakeholders see a grounded prototype faster",
      "Clearer go/no-go criteria for leadership",
      "Successful POCs graduate into production roadmaps",
    ],
    blueprint: "labs",
    featured: true,
  },
  {
    id: "dialog",
    name: "TrizenDialog",
    slug: "trizen-dialog",
    category: "Meta API Infrastructure",
    oneLineValueProp:
      "Enterprise WhatsApp automation on official Meta Cloud API webhooks, templates, and CRM sync.",
    headline: "Conversational operations on Meta WhatsApp Cloud API",
    problem:
      "Teams bolt chatbots onto WhatsApp without approved templates, consent, webhook reliability, or CRM sync. Conversations die in inboxes; compliance risk grows; agents retype everything into systems of record.",
    howItWorks:
      "TrizenDialog is our Meta Cloud API platform layer: template governance, webhook ingestion and retry, authenticated sessions, agent assist, and bi-directional CRM updates. Built for production notification, support, and transaction journeys, not demo chat widgets.",
    deploymentModel: "Embedded or standalone",
    metrics: [
      "Official Meta Cloud API architecture",
      "Template and consent governance built in",
      "CRM-synced journeys, not orphan chat threads",
    ],
    capabilities: [
      "WhatsApp Business / Cloud API integration",
      "Webhook receivers with idempotency and retries",
      "Approved template and opt-in governance",
      "Agent handoff and assist flows",
      "Bi-directional CRM / ticketing sync",
    ],
    outcomes: [
      "Higher response rates on customer journeys",
      "Lower agent handle time with full context",
      "Compliant messaging ops leadership can audit",
    ],
    blueprint: "dialog",
    featured: true,
  },
];

/** Legacy accelerator slugs → product slugs */
export const productSlugAliases: Record<string, string> = {
  "trizen-certify": "trizen-certify",
  "trizen-labs": "trizen-labs",
  "trizen-deploy": "trizen-dialog",
  "trizendialog": "trizen-dialog",
};

export function getProductBySlug(slug: string): Product | undefined {
  const resolved = productSlugAliases[slug] ?? slug;
  return products.find((p) => p.slug === resolved && !p.draft);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured && !p.draft);
}

export function getAllProducts(): Product[] {
  return products.filter((p) => !p.draft);
}
