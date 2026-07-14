import { Link } from "react-router-dom";
import {
  CircleGauge,
  ShieldCheck,
  Rocket,
  Handshake,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CTABanner from "@/components/marketing/CTABanner";
import CardMedia from "@/components/marketing/CardMedia";
import PageMeta from "@/components/marketing/PageMeta";
import FadeIn from "@/components/marketing/FadeIn";
import { BookButton } from "@/components/page";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

const values = [
  {
    icon: CircleGauge,
    title: "Outcome ownership",
    description:
      "We measure success by operating metrics like cycle time, cost-to-serve, and quality, not by demos shipped.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise discipline",
    description:
      "Security, compliance, and auditability are first-class constraints from discovery through production.",
  },
  {
    icon: Rocket,
    title: "Accelerated delivery",
    description:
      "Proprietary products like TrizenHR and TrizenDialog compress delivery without sacrificing production readiness.",
  },
  {
    icon: Handshake,
    title: "Partnership model",
    description:
      "We embed with your business and technology leaders, transferring capability rather than creating vendor lock-in.",
  },
];

const About = () => {
  return (
    <>
      <PageMeta
        title="About"
        path="/about"
        description="Trizen is an enterprise AI transformation partner for strategy, delivery, and proprietary products that drive production outcomes."
      />
      <section className="border-b border-zinc-200 bg-white pt-28 pb-20 sm:pt-32 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn y={12}>
            <SectionHeader
              eyebrow="About Trizen"
              title="Enterprise AI transformation partner"
              description={siteConfig.description}
            />
            <p className="mt-8 text-lg text-zinc-700 leading-relaxed max-w-3xl">
              Trizen Ventures works with enterprise leaders who need AI that survives the jump
              from pilot to production. We combine strategy, delivery, and proprietary products so
              initiatives land as governed systems, not isolated experiments.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <BookButton className="pl-6 pr-2" />
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">View case studies</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-zinc-900 mb-6">
              What we stand for
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-12">
              Enterprises do not need more AI tooling. They need an operating partner who can
              prioritize the right bets, ship securely, and leave teams with systems they can own.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((value, index) => (
              <FadeIn
                key={value.title}
                delay={index * 0.06}
                className="glass-panel-light rounded-2xl p-7 md:p-8"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                    <value.icon className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{value.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="glass-panel-light rounded-2xl overflow-hidden">
            <CardMedia
              theme="light"
              blueprint="engagement"
              size="wide"
              className="min-h-[240px] md:min-h-[300px] border-0 border-b border-zinc-200"
            />
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-zinc-900 mb-4">
                How we engage
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-8">
                Typical engagements start with outcome framing and readiness, move through a
                governed build, and scale with your teams—supported by TrizenHR, TrizenDialog, and
                Trizen Community where they remove friction.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Services", href: "/services" },
                  { label: "Products", href: "/products" },
                  { label: "Case studies", href: "/case-studies" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm font-medium text-zinc-900 hover:border-indigo-300 transition-colors"
                    >
                      {item.label}
                      <ArrowRight className="h-4 w-4 text-indigo-600 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        title="Ready to partner with Trizen?"
        description="Talk to our team about your AI roadmap, operating constraints, and where we can accelerate outcomes."
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </>
  );
};

export default About;
