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
  /** Public marketing brand */
  name: "Trizen AI",
  /** Legal entity for copyright and legal surfaces */
  legalName: "Trizen Ventures LLP",
  /** Short brand tagline (footer, hero eyebrow) */
  tagline: "Automate. Optimize. Accelerate.",
  /** Category / positioning line */
  positioning: "Enterprise AI Consulting & Business Automation",
  /**
   * What we do - About intro (business transformation scope).
   * Distinct from heroSupporting (outcomes-focused) and capability (how we deliver).
   */
  valueProposition:
    "We help businesses transform operations through AI, automation, intelligent agents, and digital transformation.",
  /** Core promise - footer, SEO defaults, About teaser */
  description:
    "Deliver measurable business outcomes through AI, automation, and intelligent systems.",
  mission: "Make AI practical and valuable for every business.",
  vision:
    "Become a trusted AI transformation partner for businesses worldwide.",
  /** How we work - About / Services narrative */
  capability:
    "We design, build, integrate, and optimize AI-powered solutions that improve productivity, reduce operational costs, and accelerate business growth.",
  /** Home hero supporting copy */
  heroSupporting:
    "Helping businesses leverage AI, intelligent automation, AI agents, and digital transformation to streamline operations, improve customer experiences, and accelerate growth.",
  /** Home hero H1 */
  heroHeadline: "Transform Business Operations with AI",
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
 * Lean primary nav - Services, Products, proof, thought leadership, company.
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

/** Footer columns - full sitemap lives here */
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
