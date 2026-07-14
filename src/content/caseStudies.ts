export interface CaseStudy {
  slug: string;
  sector: string;
  title: string;
  headline: string;
  description: string;
  challenge: string;
  solution: string;
  /** Primary outcome headline, e.g. "70% faster response times" */
  outcome: string;
  outcomeDetail: string;
  /** Business impact narrative */
  businessImpact: string;
  /** KPI tiles */
  metrics: { label: string; value: string }[];
  /** Technologies used on the engagement */
  technologyStack: string[];
  approach: string[];
  featured?: boolean;
  draft?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "logistics-operations-agents",
    sector: "Logistics",
    title: "AI operations optimization for a national logistics leader",
    headline: "70% faster response on priority exceptions",
    description:
      "An operations agent layer that prioritized exceptions, routed work, and kept humans in the loop during peak volume.",
    challenge:
      "Dispatch and exception handling relied on fragmented tools and tribal knowledge. Peak volume created slow response loops, missed SLAs, and rising cost-to-serve with no clear automation path.",
    solution:
      "Trizen redesigned the control-tower workflow and deployed an operations agent layer with real-time prioritization, exception routing, and human-in-the-loop controls, wired into existing TMS and ops dashboards.",
    outcome: "70% faster response times",
    outcomeDetail: "Mean time-to-resolution on priority exceptions",
    businessImpact:
      "Lower cost-to-serve during peak season, fewer SLA breaches, and a governed path from pilot agents to production ops ownership.",
    metrics: [
      { value: "70%", label: "Faster priority exception response" },
      { value: "2×", label: "Throughput on peak exception queues" },
      { value: "6 wks", label: "Discovery to pilot go-live" },
    ],
    technologyStack: [
      "OpenAI",
      "LangChain",
      "Python",
      "PostgreSQL",
      "n8n",
      "Docker",
      "AWS",
      "React",
    ],
    approach: [
      "Mapped exception taxonomy and SLA impact",
      "Instrumented control-tower workflows and baselines",
      "Deployed prioritized agent routing with human approval gates",
      "Rolled out ops dashboards and runbooks for sustained ownership",
    ],
    featured: true,
  },
  {
    slug: "banking-document-intelligence",
    sector: "Financial Services",
    title: "Document intelligence for a regional banking group",
    headline: "55% reduction in review cycle time",
    description:
      "A secure extraction and decisioning pipeline grounded in policy rules, with full audit trails for compliance.",
    challenge:
      "Credit and KYC teams spent hours on manual document review with inconsistent decision support. Cycle times hurt onboarding conversion; auditors demanded clearer evidence of how decisions were made.",
    solution:
      "Trizen built a secure document intelligence pipeline (extraction, policy-grounded decision assist, and complete audit logging), integrated into existing onboarding and credit workflows without exposing sensitive data to unmanaged tools.",
    outcome: "55% reduction in review cycle time",
    outcomeDetail: "Across onboarding and credit workflows",
    businessImpact:
      "Faster onboarding conversion, higher analyst capacity on complex cases, and audit-ready decision evidence for risk and compliance.",
    metrics: [
      { value: "55%", label: "Reduction in review cycle time" },
      { value: "100%", label: "Decisions with audit trail coverage" },
      { value: "3×", label: "Analyst capacity on complex cases" },
    ],
    technologyStack: [
      "Anthropic",
      "Azure AI",
      "Python",
      "PostgreSQL",
      "Pinecone",
      "Kubernetes",
      "Docker",
      "Node.js",
    ],
    approach: [
      "Policy corpus grounding and control design",
      "Document extraction with validation gates",
      "Decision-assist agents scoped to approved rules",
      "Compliance review packs and phased rollout",
    ],
    featured: true,
  },
  {
    slug: "healthcare-admin-automation",
    sector: "Healthcare",
    title: "Administrative automation for a regional hospital network",
    headline: "60% less time on administrative paperwork",
    description:
      "End-to-end workflow automation with ML-based prioritization that returned clinician and staff time to patient care.",
    challenge:
      "Clinical and administrative staff were overwhelmed by documentation, prior-auth follow-ups, and fragmented departmental systems. Throughput suffered while burnout risk climbed.",
    solution:
      "Trizen automated high-friction administrative workflows first (intake triage, documentation assist, and prioritization queues), with human oversight and HIPAA-aligned architecture patterns.",
    outcome: "60% less administrative time",
    outcomeDetail: "On targeted paperwork and intake workflows",
    businessImpact:
      "Staff time returned to patient care, faster prior-auth cycles, and a repeatable automation pattern for additional administrative queues.",
    metrics: [
      { value: "60%", label: "Reduction in admin time on target workflows" },
      { value: "35%", label: "Faster prior-auth follow-up cycles" },
      { value: "HIPAA", label: "Aligned architecture and audit logging" },
    ],
    technologyStack: [
      "Google Gemini",
      "LangChain",
      "Python",
      "MongoDB",
      "n8n",
      "AWS",
      "Docker",
      "Next.js",
    ],
    approach: [
      "Prioritized admin workflows by volume and burnout impact",
      "Designed human-in-the-loop automation with audit trails",
      "Integrated with EHR / RCM touchpoints where available",
      "Change management for clinical and ops teams",
    ],
    featured: true,
  },
];

/** Published case studies only */
export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => !study.draft);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug && !study.draft);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getAllCaseStudies().filter((study) => study.featured);
}
