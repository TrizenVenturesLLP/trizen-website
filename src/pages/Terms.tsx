import LegalPage from "@/pages/LegalPage";
import { termsSections } from "@/content/legal";

const Terms = () => (
  <LegalPage
    title="Terms of Service"
    path="/terms"
    description="Terms governing use of Trizen Ventures websites and related online properties."
    eyebrow="Legal"
    intro="These terms govern your use of Trizen Ventures websites and online materials. Paid engagements and product subscriptions are covered by separate written agreements."
    sections={termsSections}
    alternate={{ label: "Privacy Policy", href: "/privacy" }}
  />
);

export default Terms;
