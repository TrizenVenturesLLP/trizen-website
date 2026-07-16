export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export const legalLastUpdated = "14 July 2026";

export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    paragraphs: [
      "Trizen Ventures LLP (“Trizen”, “we”, “us”, or “our”) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit trizenventures.com and related sites we operate, contact us, book a consultation, or use our products and services (collectively, the “Services”).",
      "By using the Services, you acknowledge this Policy. If you do not agree, please discontinue use of the Services and contact us with any questions.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information we collect",
    paragraphs: [
      "We collect information you provide directly and information that is generated automatically when you use our Sites.",
    ],
    bullets: [
      "Contact and identity details: name, work email, company, role, phone number, and message content when you submit forms or book consultations.",
      "Business context: project goals, industry, and other details you choose to share about an engagement.",
      "Account or product data: if you use Trizen products (for example TrizenHR or TrizenDialog), information needed to operate those products under your agreement with us.",
      "Technical data: IP address, browser type, device identifiers, pages viewed, referring URLs, and approximate location derived from IP.",
      "Communications: emails and meeting notes related to sales, support, or delivery.",
    ],
  },
  {
    id: "how-we-use",
    title: "3. How we use information",
    paragraphs: ["We use personal information to:"],
    bullets: [
      "Respond to inquiries, schedule consultations, and deliver professional services.",
      "Provide, secure, maintain, and improve our websites and products.",
      "Send service-related notices and, where permitted, marketing about Trizen offerings (you may opt out of marketing at any time).",
      "Comply with legal obligations, enforce agreements, and protect our rights, users, and the public.",
      "Analyze aggregate usage to improve content, performance, and user experience.",
    ],
  },
  {
    id: "sharing",
    title: "4. How we share information",
    paragraphs: [
      "We do not sell your personal information. We may share information with:",
    ],
    bullets: [
      "Service providers who process data on our behalf (for example hosting, analytics, email, and scheduling tools), under contractual confidentiality and security obligations.",
      "Professional advisors (legal, accounting) when reasonably necessary.",
      "Authorities when required by law, regulation, legal process, or to protect rights and safety.",
      "A successor entity in connection with a merger, acquisition, or asset sale, subject to appropriate safeguards.",
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies and similar technologies",
    paragraphs: [
      "Our Sites may use cookies and similar technologies for essential site functions, performance measurement, and (where enabled) analytics. You can control cookies through your browser settings. Disabling certain cookies may affect site functionality.",
    ],
  },
  {
    id: "retention",
    title: "6. Retention",
    paragraphs: [
      "We retain personal information only as long as needed for the purposes described in this Policy, including to meet legal, accounting, or reporting requirements, resolve disputes, and enforce agreements. Retention periods vary by data type and context.",
    ],
  },
  {
    id: "security",
    title: "7. Security",
    paragraphs: [
      "We implement administrative, technical, and organizational measures designed to protect personal information. No method of transmission or storage is completely secure; we cannot guarantee absolute security.",
    ],
  },
  {
    id: "international",
    title: "8. International transfers",
    paragraphs: [
      "Trizen operates primarily from India and may process data in other countries where our providers operate. Where required, we use appropriate safeguards for cross-border transfers.",
    ],
  },
  {
    id: "your-rights",
    title: "9. Your rights",
    paragraphs: [
      "Depending on applicable law, you may have rights to access, correct, delete, or restrict processing of your personal information, or to object to certain processing and withdraw consent where processing is consent-based. To exercise these rights, contact us using the details below. We may need to verify your identity before responding.",
    ],
  },
  {
    id: "children",
    title: "10. Children",
    paragraphs: [
      "Our Services are directed to business professionals and are not intended for individuals under 18. We do not knowingly collect personal information from children.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to this Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will change when we do. Continued use of the Services after an update constitutes acceptance of the revised Policy where permitted by law.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact us",
    paragraphs: [
      "For privacy questions or requests, contact Trizen Ventures LLP at contact@trizenventures.com or via the contact form at /contact.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    title: "1. Agreement to terms",
    paragraphs: [
      "These Terms of Service (“Terms”) govern your access to and use of websites, content, and related online properties operated by Trizen Ventures LLP (“Trizen”, “we”, “us”, or “our”), including trizenventures.com (the “Site”).",
      "By accessing or using the Site, you agree to these Terms. If you are using the Site on behalf of an organization, you represent that you have authority to bind that organization. Separate written agreements govern paid consulting engagements and product subscriptions; those agreements control if they conflict with these Terms for that engagement.",
    ],
  },
  {
    id: "services-described",
    title: "2. Informational nature of the Site",
    paragraphs: [
      "Content on the Site (including service descriptions, case studies, metrics, and product overviews) is provided for general information. It does not constitute a binding offer, legal advice, or a guarantee of results. Outcomes depend on your environment, data, and decisions.",
    ],
  },
  {
    id: "accounts-access",
    title: "3. Acceptable use",
    paragraphs: ["You agree not to:"],
    bullets: [
      "Use the Site in violation of applicable law or regulation.",
      "Attempt to gain unauthorized access to systems, accounts, or data.",
      "Interfere with or disrupt the Site, including by introducing malware or overloading infrastructure.",
      "Scrape, harvest, or systematically extract content except as allowed by robots.txt or our written permission.",
      "Misrepresent your identity or affiliation when contacting us.",
    ],
  },
  {
    id: "ip",
    title: "4. Intellectual property",
    paragraphs: [
      "The Site and its content, branding, logos, diagrams, and software are owned by Trizen or its licensors and are protected by intellectual property laws. You may view and temporarily download materials for personal, non-commercial evaluation of Trizen’s offerings. You may not copy, modify, distribute, or create derivative works from Site content without our prior written consent, except for fair use or other rights that cannot be waived under applicable law.",
      "Trizen product names (including TrizenHR, TrizenDialog, and Trizen Community) and related marks are trademarks of Trizen or its affiliates.",
    ],
  },
  {
    id: "third-party",
    title: "5. Third-party links and tools",
    paragraphs: [
      "The Site may link to third-party websites, calendars, or tools. We are not responsible for third-party content, privacy practices, or availability. Your use of third-party services is governed by their terms.",
    ],
  },
  {
    id: "submissions",
    title: "6. Submissions and feedback",
    paragraphs: [
      "If you send ideas, suggestions, or other feedback, you grant Trizen a non-exclusive, worldwide, royalty-free license to use that feedback to improve our offerings, without obligation to you. Do not submit confidential information through general website forms unless we have a separate NDA in place.",
    ],
  },
  {
    id: "disclaimer",
    title: "7. Disclaimers",
    paragraphs: [
      "THE SITE AND ITS CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.",
    ],
  },
  {
    id: "liability",
    title: "8. Limitation of liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRIZEN AND ITS DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SITE.",
      "OUR TOTAL LIABILITY FOR CLAIMS ARISING OUT OF THESE TERMS OR THE SITE WILL NOT EXCEED ONE HUNDRED US DOLLARS (USD $100) OR THE EQUIVALENT IN LOCAL CURRENCY, EXCEPT WHERE LIABILITY CANNOT BE LIMITED UNDER APPLICABLE LAW.",
    ],
  },
  {
    id: "indemnity",
    title: "9. Indemnity",
    paragraphs: [
      "You agree to indemnify and hold harmless Trizen and its personnel from claims, damages, and expenses (including reasonable legal fees) arising from your misuse of the Site or violation of these Terms, to the extent permitted by law.",
    ],
  },
  {
    id: "governing-law",
    title: "10. Governing law",
    paragraphs: [
      "These Terms are governed by the laws of India, without regard to conflict-of-law principles. Courts in Hyderabad, Telangana, India shall have exclusive jurisdiction over disputes arising from these Terms or the Site, subject to any mandatory consumer protections that apply.",
    ],
  },
  {
    id: "changes-terms",
    title: "11. Changes",
    paragraphs: [
      "We may revise these Terms by posting an updated version on this page and updating the “Last updated” date. Continued use of the Site after changes become effective constitutes acceptance of the revised Terms where permitted by law.",
    ],
  },
  {
    id: "contact-terms",
    title: "12. Contact",
    paragraphs: [
      "Questions about these Terms: Trizen Ventures LLP, contact@trizenventures.com, or https://trizenventures.com/contact.",
    ],
  },
];
