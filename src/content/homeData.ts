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
    value: 40,
    suffix: "%",
    label: "POC head start via Labs",
    footnoteAnchor: "3",
  },
  {
    id: "m4",
    value: 3,
    suffix: "×",
    label: "Faster credential issuance",
    footnoteAnchor: "4",
    sourceCaseStudySlug: "healthcare-admin-automation",
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
    text: "Typical time-to-first-credible-prototype reduction using Trizen Labs scaffolding vs greenfield POCs (internal delivery baseline).",
  },
  {
    anchor: "4",
    text: "Credential issuance throughput improvement on programs using Trizen Certify patterns (related healthcare admin automation engagement).",
  },
];
