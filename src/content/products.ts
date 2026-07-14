export type ProductCategory =
  | "Workforce Ops"
  | "WhatsApp Ops"
  | "Community & Events";

export type DeploymentModel =
  | "Standalone SaaS"
  | "Standalone console & API"
  | "Community program";

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
  /** Live product URL */
  externalUrl: string;
  externalLabel: string;
  /** CTA on Products index cards */
  cardCta: string;
  /** Landing / product UI cover for detail hero */
  coverImage: string;
  /** Optional tighter crop for product cards (home / index) */
  cardImage?: string;
  /** CSS object-position for cover crop (default top) */
  coverPosition?: string;
  /** How cover renders in cards — contain keeps full UI visible */
  coverFit?: "cover" | "contain";
  /** CardMedia / blueprint variant (architecture sections) */
  blueprint: "hr" | "dialog" | "community";
  /** Subtle in-market proof for home / listing cards (editable later) */
  socialProof?: string;
  featured?: boolean;
  draft?: boolean;
}

export const products: Product[] = [
  {
    id: "hr",
    name: "TrizenHR",
    slug: "trizen-hr",
    category: "Workforce Ops",
    oneLineValueProp:
      "Attendance and payroll in one place: web or mobile clock-in, leave, and accurate payslips without spreadsheet guesswork.",
    headline: "Attendance and payroll, in one place",
    problem:
      "Growing teams still run attendance in spreadsheets and disconnected tools. Payroll errors climb when leave and approvals do not sync, and compliance audits become stressful without centralized, accurate records.",
    howItWorks:
      "TrizenHR centralizes workforce tracking: employees check in via web or mobile with clear policies; attendance auto-flows into leave and payroll; salaries calculate with statutory components; teams export audit-ready reports. Role-based dashboards give admins, HR, managers, and employees exactly what they need.",
    deploymentModel: "Standalone SaaS",
    metrics: [
      "Clock-in to payslip in four automated steps",
      "Photo-backed web check-in with real-time visibility",
      "Plans from ₹1/user/day that scale to enterprise",
    ],
    capabilities: [
      "Smart attendance (web / mobile, photo capture, regularization)",
      "Leave requests, one-click approvals, team calendar",
      "Automated payroll, statutory components, and payslips",
      "Role-based dashboards for admin, HR, manager, employee",
      "Audit-ready reports and compliance exports",
    ],
    outcomes: [
      "Less time lost to spreadsheet attendance ops",
      "Fewer payroll errors from synced leave and approvals",
      "Confident audits with centralized workforce records",
    ],
    externalUrl: "https://trizenhr.com/",
    externalLabel: "Visit TrizenHR",
    cardCta: "Explore the platform",
    coverImage: "/products/trizen-hr-v2.jpg",
    coverPosition: "center top",
    coverFit: "cover",
    blueprint: "hr",
    socialProof: "Live with 2 enterprise teams",
    featured: true,
  },
  {
    id: "dialog",
    name: "TrizenDialog",
    slug: "trizen-dialog",
    category: "WhatsApp Ops",
    oneLineValueProp:
      "WhatsApp notification operations console: templates, sends, webhooks, and backend integrations on the WhatsApp Business Platform.",
    headline: "Run WhatsApp notifications without the chaos",
    problem:
      "Ops teams juggle Meta templates, ad-hoc sends, and fragile webhook wiring across numbers and backends. Delivery status is opaque, retries are manual, and integrations break when business events need reliable outbound messaging.",
    howItWorks:
      "TrizenDialog is a WhatsApp ops console: connect your Meta WhatsApp Business account, sync or compose approved templates, then send via REST API or event rules. Track queued-to-delivered status with idempotent sends, signed outbound webhooks for receipts, and multi-number routing your operators can run day to day.",
    deploymentModel: "Standalone console & API",
    metrics: [
      "Template sync and live preview from Meta",
      "Idempotent sends with clear delivery states",
      "Signed webhooks for backend receipt handling",
    ],
    capabilities: [
      "Template management with Meta sync and live preview",
      "Reliable delivery tracking (queued → delivered)",
      "API-first sends with API keys and event rules",
      "Outbound webhooks with verifiable signed payloads",
      "Multi-number WABA routing and role-based admin",
    ],
    outcomes: [
      "One console for templates, sends, and integrations",
      "Ops teams debug with clear error codes and audit activity",
      "Backends trigger WhatsApp from business events at scale",
    ],
    externalUrl: "https://trizen-dialog.extrahand.in/",
    externalLabel: "Open TrizenDialog",
    cardCta: "Explore the console",
    coverImage: "/products/trizen-dialog-v3.jpg",
    cardImage: "/products/trizen-dialog-card-v3.jpg",
    coverPosition: "center",
    coverFit: "cover",
    blueprint: "dialog",
    socialProof: "Used by 2 customer ops teams",
    featured: true,
  },
  {
    id: "community",
    name: "Trizen Community",
    slug: "trizen-community",
    category: "Community & Events",
    oneLineValueProp:
      "Hyderabad Founders Network: monthly, community-led meetups for founders, operators, and aspiring entrepreneurs.",
    headline: "A founder community that actually shows up",
    problem:
      "Most startup networking is pitch theatre: one-off events, hard selling, and weak follow-through. Founders and operators need recurring rooms where trust compounds into intros, hires, and collaboration.",
    howItWorks:
      "Trizen Community powers the Hyderabad Founders Network: free, community-owned meetups every 3rd Saturday (~40 seats, offline at DraperU India, Gachibowli). Same cadence, same energy—real conversations beyond the pitch deck, with WhatsApp updates, RSVPs, and ecosystem partners across Hyderabad.",
    deploymentModel: "Community program",
    metrics: [
      "Every 3rd Saturday in Hyderabad",
      "Free to attend · community-owned · no hard selling",
      "~40-seat offline format at DraperU India",
    ],
    capabilities: [
      "Monthly Founders Open House roundtables",
      "WhatsApp community for updates and intros",
      "Room for founders, operators, aspirants, and angels",
      "Peer learning on pricing, customers, and hard hires",
      "Ecosystem partners (T-Hub, WE Hub, eChai, and more)",
    ],
    outcomes: [
      "Recurring trust networks that turn into co-founders and warm intros",
      "Access to mentors, operators, and early angels in Hyderabad",
      "Design partners, beta users, and collaboration without the pitch circus",
    ],
    externalUrl: "https://community.trizenventures.com/",
    externalLabel: "Visit community",
    cardCta: "Explore the network",
    coverImage: "/products/trizen-community.jpg",
    coverPosition: "center",
    coverFit: "cover",
    blueprint: "community",
    socialProof: "Monthly Hyderabad meetups",
    featured: true,
  },
];

/** Narrative copy for each deployment model (product detail) */
export const deploymentModelCopy: Record<DeploymentModel, string> = {
  "Standalone SaaS":
    "Cloud-hosted product your HR and ops teams run day to day—configure policies, onboard roles, and scale seats as the organization grows.",
  "Standalone console & API":
    "Operator console plus REST API and webhooks. Connect your Meta WhatsApp Business account, sync templates, and wire backends with signed receipt events.",
  "Community program":
    "Recurring offline meetups and a WhatsApp community layer—owned by members, supported by Trizen Ventures. Show up, build trust, and RSVP each month.",
};

const defaultDeploymentCopy =
  "We configure governance and leave your team with clear runbooks.";

/** Legacy accelerator / product slugs → current product slugs */
export const productSlugAliases: Record<string, string> = {
  "trizen-hr": "trizen-hr",
  "trizen-dialog": "trizen-dialog",
  "trizen-community": "trizen-community",
  "trizen-certify": "trizen-hr",
  "trizen-labs": "trizen-community",
  "trizen-deploy": "trizen-dialog",
  trizendialog: "trizen-dialog",
};

/** Published products only */
export function getAllProducts(): Product[] {
  return products.filter((p) => !p.draft);
}

export function getProductBySlug(slug: string): Product | undefined {
  const resolved = productSlugAliases[slug] ?? slug;
  return products.find((p) => p.slug === resolved && !p.draft);
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter((p) => p.featured);
}

export function getDeploymentModelCopy(model: DeploymentModel): string {
  return deploymentModelCopy[model] ?? defaultDeploymentCopy;
}
