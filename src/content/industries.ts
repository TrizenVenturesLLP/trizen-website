export interface Industry {
  slug: string;
  title: string;
  headline: string;
  description: string;
  challenge: string;
  approach: string;
  painPoints: string[];
  solutions: string[];
  capabilities: string[];
  draft?: boolean;
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    headline: "Operational AI for clinical and administrative excellence",
    description:
      "Workflow automation, clinical documentation support, and compliant deployments that free clinicians and staff for higher-value care.",
    challenge:
      "Providers face rising administrative burden, fragmented data, and tight margins. AI must improve throughput without compromising patient safety or regulatory obligations.",
    approach:
      "Trizen focuses on high-friction administrative and operational workflows first (documentation, prior auth, scheduling, and revenue cycle), then expands into clinical decision support with rigorous evaluation and governance.",
    painPoints: [
      "Clinician burnout from documentation load",
      "Slow prior authorization and claims cycles",
      "Fragmented EHR and departmental systems",
      "Strict privacy and compliance requirements",
    ],
    solutions: [
      "Ambient and assisted clinical documentation",
      "Prior auth and revenue-cycle automation",
      "Care operations exception agents",
      "Compliant data platforms for analytics and AI",
    ],
    capabilities: [
      "HIPAA-aligned architecture patterns",
      "EHR / RCM integration",
      "Human-in-the-loop clinical workflows",
      "Audit trails for automated decisions",
      "Change management for clinical teams",
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    headline: "AI that keeps freight, fleets, and exceptions moving",
    description:
      "Operations agents and forecasting systems that reduce response time, improve utilization, and stabilize service levels under volatility.",
    challenge:
      "Dispatch, tracking, and exception handling still rely on fragmented tools and tribal knowledge. Peak volume creates SLA risk and cost spikes that traditional staffing cannot absorb.",
    approach:
      "We instrument the control tower, prioritize exceptions by business impact, and deploy agents that propose and execute within defined guardrails, paired with forecasting for capacity and demand.",
    painPoints: [
      "Slow exception resolution during peaks",
      "Underutilized fleet and warehouse capacity",
      "Manual triage across TMS / WMS / CRM",
      "Limited visibility into ETA and disruptions",
    ],
    solutions: [
      "AI operations agents for exception routing",
      "Dynamic prioritization and dispatch assist",
      "Demand and capacity forecasting",
      "Customer communication automation",
    ],
    capabilities: [
      "Control-tower workflow redesign",
      "Real-time data integration",
      "Human-supervised automation",
      "SLA and cost dashboards",
      "Continuous model and process improvement",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    headline: "Intelligence across assets, leasing, and operations",
    description:
      "Document intelligence, tenant operations automation, and portfolio analytics that improve speed-to-lease and operating efficiency.",
    challenge:
      "Deal rooms, lease abstraction, and property operations drown in unstructured documents and fragmented systems. Decisions lag; costs rise; tenant experience suffers.",
    approach:
      "Trizen digitizes high-volume document workflows and automates tenant and facilities operations, grounding every recommendation in your leases, policies, and systems of record.",
    painPoints: [
      "Manual lease abstraction and diligence",
      "Slow tenant request resolution",
      "Inconsistent portfolio reporting",
      "Disconnected PMS and accounting stacks",
    ],
    solutions: [
      "Lease and contract intelligence",
      "Tenant operations agents",
      "Portfolio performance analytics",
      "Due diligence acceleration for acquisitions",
    ],
    capabilities: [
      "Document extraction and validation",
      "PMS / ERP integrations",
      "Workflow automation for property ops",
      "Role-based access and audit logging",
      "Executive reporting packs",
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    headline: "Compliant AI for risk, ops, and customer journeys",
    description:
      "Document intelligence, fraud and risk support, and process automation designed for regulated banking and insurance environments.",
    challenge:
      "Institutions must modernize customer and middle-office processes under intense regulatory scrutiny. Off-the-shelf AI rarely meets audit, explainability, and data residency requirements.",
    approach:
      "We design AI systems with compliance as a first-class constraint: policy-grounded decisioning, full audit trails, and evaluation gates, so automation accelerates without expanding risk.",
    painPoints: [
      "Manual KYC / KYB and document review",
      "Inconsistent credit and claims decision support",
      "High cost of compliance evidence collection",
      "Legacy core systems with limited APIs",
    ],
    solutions: [
      "Document intelligence for onboarding and credit",
      "Policy-grounded decision support agents",
      "Ops automation for servicing and claims",
      "Fraud and anomaly detection assist",
    ],
    capabilities: [
      "Model risk and audit-ready design",
      "Secure RAG over policy corpora",
      "Core banking / insurance integrations",
      "Explainability and decision logging",
      "Phased rollout with control testing",
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
