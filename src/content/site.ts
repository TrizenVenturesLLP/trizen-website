export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  /** Extra path prefixes that keep this item active (for grouped IA) */
  match?: string[];
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export type SocialNetwork =
  | "linkedin"
  | "x"
  | "facebook"
  | "instagram"
  | "careers";

export interface SocialLink {
  id: SocialNetwork;
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Trizen Ventures",
  tagline: "Enterprise AI Transformation & Operations Partner",
  description:
    "We help enterprises design, deploy, and scale AI systems that deliver measurable operational outcomes.",
  contactHref: "/contact",
  careersHref: "https://careers.trizenventures.com/",
  insightsHref: "/insights",
  linkedInHref: "https://www.linkedin.com/company/trizenventuresllp/",
  xHref: "https://x.com/TrizenVenture",
  facebookHref: "https://www.facebook.com/trizenventures/",
  instagramHref: "https://www.instagram.com/trizenventures",
  email: "contact@trizenventures.com",
  /** Display + tel: link (E.164 without spaces) */
  phoneDisplay: "+91 8639648822",
  phoneTel: "+918639648822",
  websiteHref: "https://trizenventures.com",
  websiteLabel: "trizenventures.com",
  registeredOffice: {
    label: "Registered Office",
    lines: [
      "65-3-747/18, Vayaputranagara area,",
      "Sriharipuram, Gajuwaka,",
      "Visakhapatnam (Urban), 530026,",
      "Andhra Pradesh, India",
    ],
  },
} as const;

/** Footer social / external profile links with icons */
export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: siteConfig.linkedInHref,
  },
  {
    id: "x",
    label: "X (Twitter)",
    href: siteConfig.xHref,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: siteConfig.facebookHref,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: siteConfig.instagramHref,
  },
  {
    id: "careers",
    label: "Careers",
    href: siteConfig.careersHref,
  },
];

/**
 * Lean primary nav — Services, Products, proof, thought leadership, company.
 */
export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  {
    label: "Products",
    href: "/products",
    match: ["/products"],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

/** Footer columns — full sitemap lives here */
export const footerColumns: FooterColumn[] = [
  {
    title: "Capabilities",
    links: [
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Industries", href: "/industries" },
      { label: "TrizenHR", href: "/products/trizen-hr" },
      { label: "TrizenDialog", href: "/products/trizen-dialog" },
      { label: "Trizen Community", href: "/products/trizen-community" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: siteConfig.careersHref, external: true },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
