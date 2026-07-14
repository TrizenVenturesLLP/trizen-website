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

export const siteConfig = {
  name: "Trizen Ventures",
  tagline: "Enterprise AI Transformation & Operations Partner",
  description:
    "We help enterprises design, deploy, and scale AI systems that deliver measurable operational outcomes.",
  contactHref: "/contact",
  careersHref: "https://careers.trizenventures.com/",
  insightsHref: "/insights",
  linkedInHref: "https://www.linkedin.com/company/trizenventuresllp/",
  email: "nukaraju@trizenventures.com",
} as const;

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
      { label: "Careers", href: "https://careers.trizenventures.com/", external: true },
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
