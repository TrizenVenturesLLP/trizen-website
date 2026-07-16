import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Layers,
  Rocket,
  ShieldCheck,
} from "lucide-react";

export interface EngagementModel {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

/** How Trizen engages - used on Services listing */
export const engagementModels: EngagementModel[] = [
  {
    id: "strategy",
    title: "Strategy & readiness",
    description:
      "Outcome framing, prioritization, and a funded roadmap so leadership knows what to build first - and what not to.",
    icon: Compass,
  },
  {
    id: "build",
    title: "Governed delivery",
    description:
      "Production systems with security, evaluation, and human-in-the-loop controls baked in from discovery through go-live.",
    icon: Layers,
  },
  {
    id: "operate",
    title: "Products that compress time",
    description:
      "Where fit is clear, TrizenHR, TrizenDialog, and Trizen Community remove months of custom build without sacrificing ownership.",
    icon: Rocket,
  },
];

/** Typical engagement timeline - service & industry details */
export const engagementTimeline: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "Map workflows, constraints, systems of record, and success metrics with business and technology owners.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Define the thinnest production path: architecture, evaluation harness, and operating model with clear owners.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "Ship a governed pilot into real traffic, then harden for scale with runbooks, monitoring, and handoff.",
  },
  {
    step: "04",
    title: "Operate",
    description:
      "Transfer capability to your teams, expand to adjacent queues, and keep outcomes instrumented.",
  },
];

export const servicesFaq: FaqItem[] = [
  {
    question: "How do you decide what to build first?",
    answer:
      "We score opportunities by business impact, data readiness, integration complexity, and risk. The output is a sequenced roadmap leadership can fund - not a pile of disconnected pilots.",
  },
  {
    question: "How long until we see something in production?",
    answer:
      "Focused pilots often reach production traffic in 6–10 weeks when scope is clear and systems access is available. Larger platform work is phased so value lands early.",
  },
  {
    question: "Do you replace our internal team?",
    answer:
      "No. We embed with your business and technology leaders, ship with production discipline, and transfer ownership so you are not locked into a perpetual vendor dependency.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "Security, auditability, and evaluation are first-class constraints from day one - especially in regulated sectors like healthcare and financial services.",
  },
];

export const contactCallTopics = [
  "Outcomes and constraints for your initiative",
  "Whether to buy, build, or blend with Trizen products",
  "A pragmatic next step your team can fund",
] as const;

export const contactFaq: FaqItem[] = [
  {
    question: "What happens on the consultation call?",
    answer:
      "A focused 30-minute conversation on outcomes, operating constraints, and whether Trizen is the right partner. You leave with clear next steps - not a hard sell.",
  },
  {
    question: "How quickly do you respond to briefs?",
    answer:
      "We typically reply within one business day. If email is easier, the brief form opens a ready-to-send message to our team.",
  },
  {
    question: "Do we need a full RFP to start?",
    answer:
      "No. A short description of the workflow, systems involved, and success metrics is enough for a useful first conversation.",
  },
];

/** About page engagement steps (mirrors timeline, slightly broader) */
export const aboutEngagementSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Frame outcomes",
    description:
      "Align on the operating metric that matters - cycle time, cost-to-serve, quality - before selecting tools.",
  },
  {
    step: "02",
    title: "Governed build",
    description:
      "Design for security, evaluation, and audit from the first sprint, not as a retrofit before launch.",
  },
  {
    step: "03",
    title: "Scale with ownership",
    description:
      "Expand what works, retire what doesn't, and leave your teams with systems they can run.",
  },
];

export const aboutProofPoints = [
  { icon: ShieldCheck, label: "Enterprise discipline", detail: "Security and compliance as constraints" },
  { icon: Rocket, label: "Accelerated delivery", detail: "Products that compress custom build time" },
  { icon: Compass, label: "Outcome ownership", detail: "Success measured in operating metrics" },
] as const;

/** Map service slugs → related case study slugs */
export const serviceRelatedCases: Record<string, string[]> = {
  "ai-consulting": ["logistics-operations-agents", "banking-document-intelligence"],
  "ai-strategy": ["logistics-operations-agents", "banking-document-intelligence"],
  "generative-ai": ["banking-document-intelligence"],
  "ai-automation": ["logistics-operations-agents", "healthcare-admin-automation"],
  "workflow-automation": ["logistics-operations-agents", "healthcare-admin-automation"],
  "ai-agents": ["logistics-operations-agents"],
  "voice-ai": ["healthcare-admin-automation"],
  "whatsapp-automation": ["logistics-operations-agents"],
  "crm-automation": ["banking-document-intelligence"],
  "data-engineering": ["banking-document-intelligence"],
  "business-intelligence": ["banking-document-intelligence"],
  "machine-learning": ["logistics-operations-agents"],
  "computer-vision": ["healthcare-admin-automation"],
  "natural-language-processing": ["banking-document-intelligence"],
  "custom-ai-development": ["healthcare-admin-automation", "logistics-operations-agents"],
};

/** Map industry slugs → related case study slugs */
export const industryRelatedCases: Record<string, string[]> = {
  logistics: ["logistics-operations-agents"],
  "financial-services": ["banking-document-intelligence"],
  healthcare: ["healthcare-admin-automation"],
  "real-estate": ["banking-document-intelligence"],
};
