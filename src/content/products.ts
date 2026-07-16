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
  /** How cover renders in cards - contain keeps full UI visible */
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
      "Attendance and payroll in one place - clock in on web or mobile, manage leave, and get accurate payslips without spreadsheet chaos.",
    headline: "Attendance and payroll, in one place",
    problem:
      "Growing teams still track attendance in spreadsheets and scattered tools. When leave and approvals don’t sync, payroll errors rise and audits get stressful.",
    howItWorks:
      "Employees clock in on web or mobile. Attendance flows into leave and payroll automatically. Salaries calculate with the right components, and you export clean reports. Admins, HR, managers, and employees each see what they need.",
    deploymentModel: "Standalone SaaS",
    metrics: [
      "Clock-in to payslip in four automated steps",
      "Photo-backed web check-in with live visibility",
      "Plans from ₹1/user/day that scale with your team",
    ],
    capabilities: [
      "Smart attendance (web / mobile, photo capture, regularization)",
      "Leave requests, one-click approvals, team calendar",
      "Automated payroll, statutory components, and payslips",
      "Role-based dashboards for admin, HR, manager, employee",
      "Audit-ready reports and compliance exports",
    ],
    outcomes: [
      "Less time lost to spreadsheet attendance work",
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
      "One console for WhatsApp Business: templates, sends, delivery status, and backend integrations - without the chaos.",
    headline: "Run WhatsApp notifications without the chaos",
    problem:
      "Ops teams juggle Meta templates, one-off sends, and fragile integrations. Delivery status is unclear, retries are manual, and things break when business events need reliable messaging.",
    howItWorks:
      "Connect your WhatsApp Business account, sync or create approved templates, then send via API or simple rules. Track delivery from queued to delivered, with webhooks and multi-number routing your team can run day to day.",
    deploymentModel: "Standalone console & API",
    metrics: [
      "Template sync and live preview from Meta",
      "Reliable sends with clear delivery states",
      "Signed webhooks for backend receipt handling",
    ],
    capabilities: [
      "Template management with Meta sync and live preview",
      "Reliable delivery tracking (queued → delivered)",
      "API-first sends with API keys and event rules",
      "Outbound webhooks with verifiable signed payloads",
      "Multi-number routing and role-based admin",
    ],
    outcomes: [
      "One place for templates, sends, and integrations",
      "Ops teams debug with clear errors and activity history",
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
      "Hyderabad Founders Network: free monthly meetups for founders, operators, and aspiring entrepreneurs.",
    headline: "A founder community that actually shows up",
    problem:
      "Most startup networking is one-off events and hard selling. Founders need regular rooms where trust grows into intros, hires, and real collaboration.",
    howItWorks:
      "Free, community-owned meetups every 3rd Saturday (~40 seats) at DraperU India, Gachibowli. Real conversations beyond the pitch deck - with WhatsApp updates, RSVPs, and partners across Hyderabad.",
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
      "Recurring networks that turn into co-founders and warm intros",
      "Access to mentors, operators, and early angels in Hyderabad",
      "Design partners and collaboration without the pitch circus",
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
    "Cloud product your HR and ops teams use every day - set policies, add people, and grow seats as you grow.",
  "Standalone console & API":
    "A console for your operators plus APIs and webhooks for your developers. Connect WhatsApp Business, manage templates, and wire your backends.",
  "Community program":
    "Monthly offline meetups plus a WhatsApp group - run by members, supported by Trizen AI. Show up, build trust, and RSVP each month.",
};

const defaultDeploymentCopy =
  "We set things up carefully and leave your team with clear guides to run day to day.";

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
