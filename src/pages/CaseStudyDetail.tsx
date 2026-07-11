import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import NotFound from "@/pages/NotFound";
import CTABanner from "@/components/marketing/CTABanner";
import PageMeta from "@/components/marketing/PageMeta";
import { getCaseStudyBySlug } from "@/content/caseStudies";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!study || study.draft) {
    return <NotFound />;
  }

  return (
    <>
      <PageMeta
        title={study.title}
        path={`/case-studies/${study.slug}`}
        description={study.description}
      />

      <section className="border-b border-zinc-200 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center text-sm text-zinc-600 hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              All case studies
            </Link>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary mb-4">
              {study.sector}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
              {study.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-12 md:py-16 border-b border-zinc-200" aria-label="Key performance indicators">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-600 mb-6">
            KPIs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {study.metrics.map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass-panel rounded-xl p-6 text-center"
              >
                <p className="text-3xl font-bold tracking-tight text-foreground mb-2">
                  {metric.value}
                </p>
                <p className="text-sm text-zinc-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-zinc-200">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <motion.div
            initial={{ y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="glass-panel rounded-xl p-8 md:p-10"
          >
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              Challenge
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">{study.challenge}</p>
          </motion.div>

          <motion.div
            initial={{ y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="glass-panel rounded-xl p-8 md:p-10"
          >
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              Solution
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">{study.solution}</p>
          </motion.div>

          <motion.div
            initial={{ y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="glass-panel rounded-xl p-8 md:p-10"
          >
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              Business Impact
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              {study.businessImpact}
            </p>
            <p className="text-3xl font-bold tracking-tight text-foreground mb-1">
              {study.outcome}
            </p>
            <p className="text-zinc-600">{study.outcomeDetail}</p>
          </motion.div>

          <motion.div
            initial={{ y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="glass-panel rounded-xl p-8 md:p-10"
          >
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              Technology Stack
            </h2>
            <p className="text-sm text-zinc-600 mb-5">
              Selected for this engagement&apos;s security, latency, and ownership constraints.
            </p>
            <ul className="flex flex-wrap gap-2">
              {study.technologyStack.map((tech) => (
                <li
                  key={tech}
                  className="inline-flex rounded-md border border-zinc-200 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-foreground/85"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-600 mb-4">
              Approach
            </h3>
            <ul className="space-y-3">
              {study.approach.map((step) => (
                <li key={step} className="flex gap-3 text-sm text-foreground/80">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {step}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Discuss a similar engagement"
        description="Share your operating constraints. We'll outline a pragmatic path from discovery to production outcomes."
        secondaryLabel="All case studies"
        secondaryHref="/case-studies"
      />
    </>
  );
};

export default CaseStudyDetail;
