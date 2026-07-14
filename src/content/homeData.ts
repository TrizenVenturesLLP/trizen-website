export interface IndustryChip {
  id: string;
  name: string;
  slug: string;
  relevanceMetric?: string;
}

export interface MetricClaim {
  id: string;
  value: number;
  suffix: string;
  label: string;
  footnoteAnchor: string;
  sourceCaseStudySlug?: string;
}

/** Home industry strip — links into /industries/:slug */
export const industryChips: IndustryChip[] = [
  {
    id: "logistics",
    name: "Logistics",
    slug: "logistics",
    relevanceMetric: "Exception response",
  },
  {
    id: "financial-services",
    name: "Financial Services",
    slug: "financial-services",
    relevanceMetric: "Document intelligence",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    slug: "healthcare",
    relevanceMetric: "Admin automation",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    slug: "real-estate",
    relevanceMetric: "Lease operations",
  },
];

/**
 * Outcome claims shown on home.
 * Footnotes + case-study links ground numbers (enterprise credibility).
 */
export const metricClaims: MetricClaim[] = [
  {
    id: "m1",
    value: 70,
    suffix: "%",
    label: "Faster exception handling",
    footnoteAnchor: "1",
    sourceCaseStudySlug: "logistics-operations-agents",
  },
  {
    id: "m2",
    value: 55,
    suffix: "%",
    label: "Shorter review cycles",
    footnoteAnchor: "2",
    sourceCaseStudySlug: "banking-document-intelligence",
  },
  {
    id: "m3",
    value: 50,
    suffix: "%",
    label: "Faster payroll processing",
    footnoteAnchor: "3",
  },
  {
    id: "m4",
    value: 4,
    suffix: "",
    label: "Steps from clock-in to payslip",
    footnoteAnchor: "4",
  },
];

export const metricFootnotes: { anchor: string; text: string }[] = [
  {
    anchor: "1",
    text: "Measured on exception-handling cycle time in a logistics operations engagement (see Logistics Operations Agents).",
  },
  {
    anchor: "2",
    text: "Document review cycle compression in a banking document-intelligence deployment.",
  },
  {
    anchor: "3",
    text: "Customer-reported payroll processing time reduction after adopting TrizenHR (mid-market HR team).",
  },
  {
    anchor: "4",
    text: "TrizenHR automated workflow: mark attendance → auto-sync → process payroll → generate reports.",
  },
];
