import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import NotFound from "@/pages/NotFound";
import CTABanner from "@/components/marketing/CTABanner";
import { getIndustryBySlug } from "@/content/industries";

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  if (!industry) {
    return <NotFound />;
  }

  return (
    <>
      <section className="border-b border-zinc-200 pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              to="/industries"
              className="inline-flex items-center text-sm text-zinc-600 hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              All industries
            </Link>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary mb-4">
              {industry.title}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              {industry.headline}
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
              {industry.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-zinc-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="glass-panel rounded-xl p-8 md:p-10"
          >
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              The Enterprise Challenge
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              {industry.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-zinc-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
              Trizen&apos;s Approach
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-10">
              {industry.approach}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel rounded-xl p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-600 mb-4">
                  Pain points we address
                </h3>
                <ul className="space-y-3">
                  {industry.painPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-600 mb-4">
                  AI solutions
                </h3>
                <ul className="space-y-3">
                  {industry.solutions.map((solution) => (
                    <li key={solution} className="flex gap-3 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-zinc-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
              Core Capabilities
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industry.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="glass-panel rounded-lg px-5 py-4 text-sm text-foreground/85"
                >
                  {capability}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title={`Discuss AI for ${industry.title}`}
        description="Share your operating constraints. We'll outline a pragmatic path from discovery to production."
        secondaryLabel="All industries"
        secondaryHref="/industries"
      />
    </>
  );
};

export default IndustryDetail;
