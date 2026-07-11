export type ServiceCategory =
  | "Strategy"
  | "Automation"
  | "Intelligence"
  | "Build";

export interface Service {
  slug: string;
  title: string;
  headline: string;
  description: string;
  category: ServiceCategory;
  challenge: string;
  approach: string;
  benefits: string[];
  deliverables: string[];
  capabilities: string[];
  /** Featured on home bento */
  featured?: boolean;
  draft?: boolean;
}

export const serviceCategories: ServiceCategory[] = [
  "Strategy",
  "Automation",
  "Intelligence",
  "Build",
];

export const services: Service[] = [
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    headline: "Executive clarity on where AI creates durable advantage",
    description:
      "Advisory engagements that align stakeholders, expose readiness gaps, and turn ambition into a governed delivery agenda.",
    category: "Strategy",
    challenge:
      "Leadership teams hear competing vendor narratives while pilots multiply without ownership, budget discipline, or a shared definition of success.",
    approach:
      "Trizen runs structured discovery across business, risk, and technology, then produces an executive-ready recommendation set with sequencing, investment logic, and operating model implications.",
    benefits: [
      "Shared vocabulary across business and IT",
      "Risk and compliance engaged early",
      "Fundable recommendations, not slideware",
    ],
    deliverables: [
      "Current-state AI portfolio assessment",
      "Executive briefing and decision pack",
      "Recommended operating model options",
    ],
    capabilities: [
      "Stakeholder workshops",
      "Vendor landscape advisory",
      "Risk / legal alignment sessions",
    ],
    featured: true,
  },
  {
    slug: "ai-strategy",
    title: "AI Strategy",
    headline: "A multi-year AI roadmap tied to P&L outcomes",
    description:
      "Prioritized use-case portfolios, platform choices, and investment sequencing that survive budget cycles.",
    category: "Strategy",
    challenge:
      "Most AI strategies are technology wish lists. Without ROI theses, data readiness, and change capacity, roadmaps stall after the first pilot.",
    approach:
      "We score use cases on value, feasibility, and risk, then design a platform and capability plan that compounds: quick wins fund the foundation for scale.",
    benefits: [
      "Clear ROI thesis per prioritized use case",
      "Sequenced investments leadership can fund",
      "Build-vs-buy guidance with ownership models",
    ],
    deliverables: [
      "Prioritized use-case portfolio",
      "Value framework and success metrics",
      "12-24 month roadmap and funding plan",
    ],
    capabilities: [
      "Use-case discovery & ROI modeling",
      "Platform and architecture strategy",
      "Responsible AI governance design",
    ],
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    headline: "Production GenAI grounded in your enterprise knowledge",
    description:
      "Secure generation, summarization, and content workflows with retrieval, evaluation, and human oversight.",
    category: "Automation",
    challenge:
      "Generic copilots leak context, invent facts, and fail audits. Without grounding and evaluation, GenAI creates risk faster than it creates value.",
    approach:
      "Trizen designs GenAI as software: approved corpora, least-privilege tools, quality gates, and observability, so outputs are useful and defensible.",
    benefits: [
      "Grounded answers from approved sources",
      "Evaluation loops that catch drift",
      "Policies that satisfy security and legal",
    ],
    deliverables: [
      "GenAI architecture and threat model",
      "RAG / tool-use implementation",
      "Evaluation suite and rollout plan",
    ],
    capabilities: [
      "Enterprise RAG design",
      "Prompt and policy engineering",
      "Red-teaming and quality gates",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    headline: "Intelligent automation that handles variance, not just rules",
    description:
      "Combine classic automation with AI judgment for processes that used to need humans at every branch.",
    category: "Automation",
    challenge:
      "RPA breaks when documents, emails, or edge cases vary. Pure AI without process design creates unpredictable outcomes and opaque failures.",
    approach:
      "We redesign the process, then apply AI where judgment compounds, keeping deterministic automation for stable steps and human gates for material risk.",
    benefits: [
      "Higher automation coverage on messy work",
      "Fewer brittle scripts and rework loops",
      "Auditable decisions on AI-assisted steps",
    ],
    deliverables: [
      "Automation blueprint and control design",
      "Hybrid AI + workflow implementation",
      "Ops dashboard and exception runbook",
    ],
    capabilities: [
      "Document and decision automation",
      "Exception classification and routing",
      "Human-in-the-loop control design",
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    headline: "Cut cycle time and cost across the operating model",
    description:
      "End-to-end process automation that reduces friction in back-office, supply chain, and customer operations.",
    category: "Automation",
    challenge:
      "Critical workflows still depend on swivel-chair work, brittle scripts, and tribal knowledge. Volume spikes expose bottlenecks and rising cost-to-serve.",
    approach:
      "We redesign the workflow first, then apply orchestration and AI where they compound. Results are measurable from day one with human-in-the-loop controls.",
    benefits: [
      "Lower cost-to-serve on high-volume processes",
      "Faster exception handling and SLA adherence",
      "Fewer handoffs and manual rework loops",
    ],
    deliverables: [
      "Process discovery & baseline metrics",
      "Production workflow automation",
      "Operations dashboard and runbook",
    ],
    capabilities: [
      "Process mining and bottleneck analysis",
      "ERP / CRM / WMS integration",
      "Continuous improvement handoff",
    ],
    featured: true,
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    headline: "Secure agents that act inside your systems of record",
    description:
      "Domain-specific agents that are auditable, observable, and built for enterprise permissions and policy.",
    category: "Automation",
    challenge:
      "Generic agents fail in regulated environments. Without grounding, permissions, and evaluation, they create risk through hallucinations, leakage, and unauditable actions.",
    approach:
      "Trizen builds agents as production software: grounded retrieval, least-privilege tools, evaluation harnesses, and observability in your ops stack.",
    benefits: [
      "Agents that act within policy",
      "Traceable decisions for compliance",
      "Integration with systems you already trust",
    ],
    deliverables: [
      "Agent architecture and threat model",
      "Tool-use and retrieval implementation",
      "Production deployment with monitoring",
    ],
    capabilities: [
      "Tool-calling into enterprise APIs",
      "Identity and RBAC integration",
      "Evaluation and incident response",
    ],
    featured: true,
  },
  {
    slug: "voice-ai",
    title: "Voice AI",
    headline: "Voice experiences that resolve work, not just chat",
    description:
      "Speech agents and assistants for support, sales, and internal ops, with latency, compliance, and handoff designed in.",
    category: "Automation",
    challenge:
      "IVR trees frustrate customers; unconstrained voice bots invent answers and fail compliance. Enterprises need voice that resolves intent and escalates cleanly.",
    approach:
      "We design voice flows around real intents and systems access (transcription, NLU, action, and human takeover), with logging suitable for regulated channels.",
    benefits: [
      "Higher containment on routine intents",
      "Faster resolution with CRM context",
      "Compliant recording and audit trails",
    ],
    deliverables: [
      "Voice journey and escalation design",
      "Production voice agent integration",
      "Quality monitoring and tuning plan",
    ],
    capabilities: [
      "Realtime voice pipelines",
      "CRM / ticketing tool use",
      "Sentiment and escalation rules",
    ],
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation",
    headline: "Conversational operations on the channel customers already use",
    description:
      "WhatsApp business workflows for notifications, support, and transactions, with templates, consent, and CRM sync.",
    category: "Automation",
    challenge:
      "Teams spam WhatsApp without journeys, consent, or system sync. Conversations die in inboxes; compliance risk grows; agents retype everything into CRM.",
    approach:
      "Trizen designs WhatsApp as an operational channel: approved templates, authenticated sessions, agent assist, and bi-directional CRM updates.",
    benefits: [
      "Higher response rates on customer journeys",
      "Lower agent handle time with context",
      "Consent and template compliance built in",
    ],
    deliverables: [
      "Channel journey and template set",
      "WhatsApp Business API integration",
      "CRM sync and analytics dashboard",
    ],
    capabilities: [
      "WhatsApp Business API / BSP setup",
      "Chatbot + human handoff flows",
      "Opt-in and template governance",
    ],
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    headline: "Make CRM the system of action, not a data graveyard",
    description:
      "AI-assisted enrichment, routing, follow-ups, and pipeline hygiene inside Salesforce, HubSpot, and custom CRMs.",
    category: "Automation",
    challenge:
      "Reps spend hours on updates; leads rot; follow-ups are inconsistent. CRM data quality collapses, so forecasting and automation fail.",
    approach:
      "We automate the busywork around the CRM (capture, enrichment, next-best-action, and SLA routing) while keeping humans accountable for relationships.",
    benefits: [
      "Cleaner pipeline and forecast inputs",
      "Faster lead-to-action cycles",
      "Less manual CRM administration",
    ],
    deliverables: [
      "CRM process and field audit",
      "Automation and agent integrations",
      "Adoption playbook for sales / CS teams",
    ],
    capabilities: [
      "Salesforce / HubSpot automation",
      "Lead scoring and routing",
      "Conversation and email assist",
    ],
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    headline: "Reliable pipelines that make AI and BI trustworthy",
    description:
      "Ingestion, modeling, and quality for operational and analytical data, built for AI readiness and governance.",
    category: "Intelligence",
    challenge:
      "AI and analytics fail when data is late, incomplete, or undocumented. Teams rebuild the same extracts; quality issues surface only in production.",
    approach:
      "Trizen designs pipelines as products: contracts, tests, lineage, and SLAs, so models and dashboards sit on ground truth rather than tribal extracts.",
    benefits: [
      "Trusted inputs for AI and reporting",
      "Faster feature and metric delivery",
      "Lineage that satisfies auditors",
    ],
    deliverables: [
      "Data architecture and pipeline design",
      "Production ETL / ELT with quality checks",
      "Documentation and ownership model",
    ],
    capabilities: [
      "Batch and streaming pipelines",
      "Warehouse / lakehouse modeling",
      "Data quality and observability",
    ],
  },
  {
    slug: "business-intelligence",
    title: "Business Intelligence",
    headline: "Decision systems leaders actually use",
    description:
      "Metrics layers, executive dashboards, and self-serve analytics aligned to operating KPIs rather than vanity charts.",
    category: "Intelligence",
    challenge:
      "Every team has a different definition of revenue, churn, or cycle time. Dashboards proliferate while decisions still run on intuition and spreadsheets.",
    approach:
      "We start from the decisions that matter, define a governed metrics layer, then deliver interfaces for executives and operators with clear ownership.",
    benefits: [
      "One source of truth for core KPIs",
      "Faster executive decision cycles",
      "Self-serve without metric chaos",
    ],
    deliverables: [
      "KPI taxonomy and metrics layer",
      "Executive and ops dashboards",
      "Enablement for analysts and leaders",
    ],
    capabilities: [
      "Semantic / metrics modeling",
      "Dashboard product design",
      "Embedded analytics patterns",
    ],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    headline: "Predictive models that ship and stay healthy",
    description:
      "Forecasting, ranking, and classification systems with MLOps, monitoring, and business feedback loops.",
    category: "Intelligence",
    challenge:
      "Models die in notebooks. Without feature stores, evaluation, and monitoring, performance decays silently and trust evaporates.",
    approach:
      "Trizen treats ML as a product lifecycle: problem framing, features, training, deployment, and continuous evaluation against business KPIs.",
    benefits: [
      "Models tied to operating metrics",
      "Monitoring that catches drift early",
      "Handoff your teams can own",
    ],
    deliverables: [
      "Model design and baseline",
      "Production training and serving pipeline",
      "Monitoring and retraining playbook",
    ],
    capabilities: [
      "Supervised and ranking models",
      "Feature engineering pipelines",
      "MLOps and model governance",
    ],
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    headline: "Vision systems for inspection, safety, and operations",
    description:
      "Detection, classification, and document vision pipelines designed for edge and cloud enterprise constraints.",
    category: "Intelligence",
    challenge:
      "Vision PoCs look impressive in demos but fail on lighting, camera placement, latency, and false-positive cost in the field.",
    approach:
      "We design for the operating environment first (data collection, labeling strategy, model choice, and human review), then harden deployment for scale.",
    benefits: [
      "Fewer missed defects or safety events",
      "Lower manual inspection load",
      "Measurable precision / recall targets",
    ],
    deliverables: [
      "Vision use-case and data plan",
      "Model training and evaluation",
      "Edge / cloud deployment package",
    ],
    capabilities: [
      "Object detection and classification",
      "Document / ID vision extraction",
      "Edge inference patterns",
    ],
  },
  {
    slug: "natural-language-processing",
    title: "Natural Language Processing",
    headline: "Language systems for classification, extraction, and search",
    description:
      "NLP for tickets, contracts, knowledge bases, and customer conversations, with evaluation and domain adaptation.",
    category: "Intelligence",
    challenge:
      "Unstructured text is where enterprise knowledge hides. Keyword search and brittle rules miss intent, entities, and risk signals.",
    approach:
      "Trizen combines classical NLP and modern language models where each fits (classification, entity extraction, semantic search), with gold sets and QA gates.",
    benefits: [
      "Faster triage of tickets and documents",
      "Search that finds meaning, not keywords",
      "Consistent extraction for downstream systems",
    ],
    deliverables: [
      "Labeled datasets and evaluation harness",
      "NLP / LLM hybrid pipeline",
      "Integration into ops workflows",
    ],
    capabilities: [
      "Classification and entity extraction",
      "Semantic search and embeddings",
      "Domain adaptation and evaluation",
    ],
  },
  {
    slug: "custom-ai-development",
    title: "Custom AI Development",
    headline: "Bespoke AI products engineered for your enterprise",
    description:
      "End-to-end design and build of proprietary AI applications, from architecture to production ownership transfer.",
    category: "Build",
    challenge:
      "Off-the-shelf tools stop at 70%. Differentiated workflows need custom software that fits security, UX, and systems of record.",
    approach:
      "We assemble cross-functional squads (product, ML, platform, design) to ship production AI with documentation, tests, and a clear path for your team to own it.",
    benefits: [
      "Software tailored to your moat",
      "Security and compliance by design",
      "Clean handoff and runbooks",
    ],
    deliverables: [
      "Product architecture and roadmap",
      "Production application and APIs",
      "Docs, tests, and ownership transfer",
    ],
    capabilities: [
      "Full-stack AI product engineering",
      "API and integration design",
      "Hardening, QA, and release management",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured && !s.draft);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category && !s.draft);
}

/** Home bento: three distinct value props (overrides catalog titles where needed) */
export interface HomePillar {
  slug: string;
  title: string;
  description: string;
  category: ServiceCategory;
  blueprint: "strategy" | "automation" | "agents";
}

export const homePillars: HomePillar[] = [
  {
    slug: "ai-consulting",
    title: "AI Strategy & Consulting",
    description:
      "Roadmaps, readiness, and governance that turn AI ambition into a fundable delivery agenda.",
    category: "Strategy",
    blueprint: "strategy",
  },
  {
    slug: "workflow-automation",
    title: "Operations & Workflow Automation",
    description:
      "Connect systems and cut manual work across back-office, supply chain, and customer operations.",
    category: "Automation",
    blueprint: "automation",
  },
  {
    slug: "ai-agents",
    title: "Custom Enterprise Agents",
    description:
      "Auditable agents and net-new AI capabilities that act inside your systems of record.",
    category: "Automation",
    blueprint: "agents",
  },
];

/** Home capability tabs: Strategy / Automation / Intelligence (+ Build under Intelligence) */
export type HomeCapabilityTab = "Strategy" | "Automation" | "Intelligence";

export const homeCapabilityTabs: {
  id: HomeCapabilityTab;
  label: string;
  blurb: string;
}[] = [
  {
    id: "Strategy",
    label: "Strategy",
    blurb: "Advisory, roadmaps, and GenAI programs that leadership can fund and govern.",
  },
  {
    id: "Automation",
    label: "Automation",
    blurb: "Workflows, agents, voice, messaging, and CRM that remove operating friction.",
  },
  {
    id: "Intelligence",
    label: "Intelligence",
    blurb: "Data, analytics, ML, vision, NLP, and custom build for lasting advantage.",
  },
];

export function getHomeTabServices(tab: HomeCapabilityTab): Service[] {
  if (tab === "Intelligence") {
    return [
      ...getServicesByCategory("Intelligence"),
      ...getServicesByCategory("Build"),
    ];
  }
  return getServicesByCategory(tab);
}

/** Legacy slug redirects used in older links / footer */
export const serviceSlugAliases: Record<string, string> = {
  "ai-consulting-strategy": "ai-consulting",
  "enterprise-agents": "ai-agents",
};
