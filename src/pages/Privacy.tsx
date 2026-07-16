import LegalPage from "@/pages/LegalPage";
import { privacySections } from "@/content/legal";

const Privacy = () => (
  <LegalPage
    title="Privacy Policy"
    path="/privacy"
    description="How Trizen Ventures collects, uses, and protects personal information on our websites and services."
    eyebrow="Legal"
    intro="This policy describes how Trizen Ventures LLP handles personal information when you use our websites, contact us, or engage with our products and services."
    sections={privacySections}
    alternate={{ label: "Terms of Service", href: "/terms" }}
  />
);

export default Privacy;
