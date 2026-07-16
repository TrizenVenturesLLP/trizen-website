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

/** Category band copy on /services index */
export interface ServiceCategoryCopy {
  headline: string;
  blurb: string;
}

export const serviceCategoryCopy: Record<ServiceCategory, ServiceCategoryCopy> = {
  Strategy: {
    headline: "Clear direction first",
    blurb:
      "Plans and advice so you know where AI helps most - and what to fund next.",
  },
  Automation: {
    headline: "Less manual work, faster operations",
    blurb:
      "Workflows, AI agents, voice, and messaging that free your teams from repetitive tasks.",
  },
  Intelligence: {
    headline: "Data you can trust for decisions",
    blurb:
      "Pipelines, dashboards, and models built on your data - so insights match how you actually work.",
  },
  Build: {
    headline: "Custom tools your team can own",
    blurb:
      "AI apps designed for your process, built securely, and handed over with clear docs and support.",
  },
};

export const services: Service[] = [
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    headline: "Know where AI can help your business most",
    description:
      "Workshops and advice that align your team, spot gaps, and turn AI ideas into a clear action plan.",
    category: "Strategy",
    challenge:
      "Leaders hear mixed vendor stories while small pilots multiply - without clear owners, budgets, or shared goals.",
    approach:
      "We talk to business, risk, and tech teams, then deliver plain recommendations: what to do first, what it costs, and who owns it.",
    benefits: [
      "Business and IT speak the same language",
      "Risk and compliance involved early",
      "Clear recommendations you can act on",
    ],
    deliverables: [
      "Review of your current AI efforts",
      "Executive briefing and decision pack",
      "Options for how to run AI going forward",
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
    headline: "A multi-year AI plan tied to real business results",
    description:
      "A prioritized list of AI projects, platform choices, and investment order that fits your budget cycle.",
    category: "Strategy",
    challenge:
      "Many AI strategies are tech wish lists. Without ROI, data readiness, and change capacity, plans stall after the first pilot.",
    approach:
      "We rank projects by value, ease, and risk. Quick wins pay for the foundation you need to scale.",
    benefits: [
      "Clear ROI for each priority project",
      "Investments leadership can fund step by step",
      "Build-vs-buy guidance with clear ownership",
    ],
    deliverables: [
      "Prioritized project portfolio",
      "Value framework and success metrics",
      "12 - 24 month roadmap and funding plan",
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
    headline: "GenAI that uses your company knowledge safely",
    description:
      "Secure chat, summaries, and content tools grounded in your approved data - with humans in control.",
    category: "Automation",
    challenge:
      "Generic AI tools can invent facts, leak context, and fail audits. Without grounding and checks, risk grows faster than value.",
    approach:
      "We treat GenAI like real software: approved sources, limited access, quality checks, and monitoring so answers are useful and defensible.",
    benefits: [
      "Answers based on approved sources",
      "Checks that catch quality issues early",
      "Policies that work for security and legal",
    ],
    deliverables: [
      "GenAI architecture and risk review",
      "Knowledge-grounded implementation",
      "Quality suite and rollout plan",
    ],
    capabilities: [
      "Enterprise knowledge search design",
      "Prompt and policy engineering",
      "Testing and quality gates",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    headline: "Automation that handles messy work, not just fixed rules",
    description:
      "Combine classic automation with AI judgment for processes that used to need a person at every step.",
    category: "Automation",
    challenge:
      "Simple bots break when documents or emails vary. AI without process design creates unpredictable results that are hard to explain.",
    approach:
      "We redesign the process first, then use AI where judgment helps - and keep simple rules (plus human review) where risk is high.",
    benefits: [
      "More of the messy work automated",
      "Fewer broken scripts and rework loops",
      "Clear records of AI-assisted decisions",
    ],
    deliverables: [
      "Automation blueprint and controls",
      "Hybrid AI + workflow implementation",
      "Ops dashboard and exception guide",
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
    headline: "Faster processes, lower operating cost",
    description:
      "End-to-end process automation that reduces friction in back-office, supply chain, and customer operations.",
    category: "Automation",
    challenge:
      "Critical work still depends on copy-paste, fragile scripts, and tribal knowledge. Volume spikes expose bottlenecks and rising cost.",
    approach:
      "We redesign the workflow first, then add automation and AI where they help most - with clear metrics and human review when needed.",
    benefits: [
      "Lower cost on high-volume processes",
      "Faster handling of exceptions and SLAs",
      "Fewer handoffs and manual rework",
    ],
    deliverables: [
      "Process discovery & baseline metrics",
      "Live workflow automation",
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
    headline: "Secure AI helpers that work inside your systems",
    description:
      "Task-focused AI agents with clear permissions, logs, and monitoring - built for how your business actually runs.",
    category: "Automation",
    challenge:
      "Generic agents struggle in regulated settings. Without grounding, permissions, and checks, they invent answers or take unsafe actions.",
    approach:
      "We build agents like production software: limited tools, approved data, evaluation, and monitoring in your ops stack.",
    benefits: [
      "Agents that stay within your policies",
      "Traceable decisions for compliance",
      "Works with the systems you already trust",
    ],
    deliverables: [
      "Agent architecture and risk review",
      "Tools and knowledge integration",
      "Live deployment with monitoring",
    ],
    capabilities: [
      "Tool-calling into enterprise APIs",
      "Identity and access integration",
      "Evaluation and incident response",
    ],
    featured: true,
  },
  {
    slug: "voice-ai",
    title: "Voice AI",
    headline: "Voice AI that finishes the job, not just the chat",
    description:
      "Phone and voice assistants for support, sales, and internal ops - with smooth handoff to people when needed.",
    category: "Automation",
    challenge:
      "Old phone menus frustrate customers; free-form voice bots invent answers. You need voice that solves the request and escalates cleanly.",
    approach:
      "We design voice flows around real intents: understand, act in your systems, and hand off to a person - with logging for compliance.",
    benefits: [
      "More routine calls handled automatically",
      "Faster resolution with CRM context",
      "Recording and audit trails where required",
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
    headline: "WhatsApp workflows on the channel customers already use",
    description:
      "Business WhatsApp for notifications, support, and transactions - with templates, consent, and CRM sync.",
    category: "Automation",
    challenge:
      "Teams message ad hoc without journeys or consent. Chats die in inboxes, compliance risk grows, and staff retype everything into CRM.",
    approach:
      "We treat WhatsApp as a proper channel: approved templates, clear sessions, agent help, and two-way CRM updates.",
    benefits: [
      "Higher response rates on customer journeys",
      "Less agent time with full context",
      "Consent and template rules built in",
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
    headline: "Make your CRM a system people actually use",
    description:
      "AI-assisted enrichment, routing, follow-ups, and cleaner pipelines in Salesforce, HubSpot, and custom CRMs.",
    category: "Automation",
    challenge:
      "Reps spend hours on updates; leads go cold; follow-ups are inconsistent. Bad CRM data breaks forecasts and automation.",
    approach:
      "We automate the busywork (capture, enrichment, next steps, and routing) while people stay accountable for relationships.",
    benefits: [
      "Cleaner pipeline and forecast data",
      "Faster lead-to-action cycles",
      "Less manual CRM admin",
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
    headline: "Reliable data pipelines for AI and reporting",
    description:
      "Clean ingestion, models, and quality checks so your AI and dashboards sit on data you can trust.",
    category: "Intelligence",
    challenge:
      "AI and analytics fail when data is late, incomplete, or poorly documented. Teams rebuild the same extracts; issues show up only in production.",
    approach:
      "We build pipelines as products: clear contracts, tests, lineage, and SLAs - so models and dashboards rest on solid ground.",
    benefits: [
      "Trusted inputs for AI and reporting",
      "Faster delivery of metrics and features",
      "Lineage that helps with audits",
    ],
    deliverables: [
      "Data architecture and pipeline design",
      "Production pipelines with quality checks",
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
    headline: "Dashboards leaders actually open and use",
    description:
      "Shared metrics, executive views, and self-serve analytics tied to the KPIs that run your business.",
    category: "Intelligence",
    challenge:
      "Every team defines revenue or cycle time differently. Dashboards multiply while decisions still run on gut feel and spreadsheets.",
    approach:
      "We start from decisions that matter, define shared metrics, then build views for leaders and operators with clear owners.",
    benefits: [
      "One source of truth for core KPIs",
      "Faster executive decision cycles",
      "Self-serve without metric chaos",
    ],
    deliverables: [
      "KPI list and metrics layer",
      "Executive and ops dashboards",
      "Enablement for analysts and leaders",
    ],
    capabilities: [
      "Metrics modeling",
      "Dashboard product design",
      "Embedded analytics patterns",
    ],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    headline: "Predictive models that ship - and stay accurate",
    description:
      "Forecasting, ranking, and classification with monitoring and feedback so models keep working in the real world.",
    category: "Intelligence",
    challenge:
      "Models often die in notebooks. Without monitoring and retraining, quality drops quietly and trust disappears.",
    approach:
      "We treat ML as a full lifecycle: problem framing, features, training, deployment, and ongoing checks against business KPIs.",
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
    headline: "Vision systems for inspection, safety, and ops",
    description:
      "Detect, classify, and read documents or scenes - built for real lighting, cameras, and edge or cloud needs.",
    category: "Intelligence",
    challenge:
      "Vision demos look great but fail on lighting, camera placement, latency, and false alarms in the field.",
    approach:
      "We design for the real environment first (data, labeling, model choice, human review), then harden deployment for scale.",
    benefits: [
      "Fewer missed defects or safety events",
      "Lower manual inspection load",
      "Clear accuracy targets you can measure",
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
    headline: "Understand tickets, contracts, and conversations at scale",
    description:
      "Classify, extract, and search text from tickets, documents, and chats - with quality checks you can trust.",
    category: "Intelligence",
    challenge:
      "Important knowledge hides in unstructured text. Keyword search and brittle rules miss intent, entities, and risk signals.",
    approach:
      "We mix proven NLP and modern language models where each fits - with labeled examples and quality gates.",
    benefits: [
      "Faster triage of tickets and documents",
      "Search that finds meaning, not just keywords",
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
    headline: "Custom AI products built for your business",
    description:
      "Design and build proprietary AI apps end to end - from architecture to a clean handoff your team can run.",
    category: "Build",
    challenge:
      "Off-the-shelf tools often stop at 70%. Unique workflows need software that fits your security, UX, and core systems.",
    approach:
      "Cross-functional teams (product, ML, platform, design) ship production AI with docs, tests, and a clear path for your team to own it.",
    benefits: [
      "Software tailored to your advantage",
      "Security and compliance built in",
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

/** Published services only */
export function getAllServices(): Service[] {
  return services.filter((s) => !s.draft);
}

export function getServiceBySlug(slug: string): Service | undefined {
  const resolved = serviceSlugAliases[slug] ?? slug;
  return services.find((service) => service.slug === resolved && !service.draft);
}

export function getFeaturedServices(): Service[] {
  return getAllServices().filter((s) => s.featured);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return getAllServices().filter((s) => s.category === category);
}

export function getServiceCategoryCopy(category: ServiceCategory): ServiceCategoryCopy {
  return serviceCategoryCopy[category];
}

/** Map service category → blueprint diagram (reuse on detail pages) */
export function getBlueprintForCategory(
  category: ServiceCategory
): "strategy" | "automation" | "agents" | "intelligence" | "build" {
  switch (category) {
    case "Strategy":
      return "strategy";
    case "Automation":
      return "automation";
    case "Intelligence":
      return "intelligence";
    case "Build":
      return "build";
  }
}

/** Prefer agent diagram for agent/voice services within Automation */
export function getBlueprintForService(service: Service) {
  if (service.slug === "ai-agents" || service.slug === "voice-ai") {
    return "agents" as const;
  }
  return getBlueprintForCategory(service.category);
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
      "Roadmaps and readiness checks that turn AI ideas into a plan you can fund and deliver.",
    category: "Strategy",
    blueprint: "strategy",
  },
  {
    slug: "workflow-automation",
    title: "Operations & Workflow Automation",
    description:
      "Connect your systems and cut manual work across back-office, supply chain, and customer ops.",
    category: "Automation",
    blueprint: "automation",
  },
  {
    slug: "ai-agents",
    title: "Custom AI Agents",
    description:
      "Secure AI helpers that take action in your existing tools - with clear logs and permissions.",
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
    blurb: "Advice, roadmaps, and GenAI programs you can fund and run with confidence.",
  },
  {
    id: "Automation",
    label: "Automation",
    blurb: "Workflows, agents, voice, messaging, and CRM that reduce day-to-day friction.",
  },
  {
    id: "Intelligence",
    label: "Intelligence",
    blurb: "Data, analytics, ML, vision, language, and custom builds for lasting advantage.",
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
