import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CTABanner from "@/components/marketing/CTABanner";
import PageMeta from "@/components/marketing/PageMeta";
import { caseStudies } from "@/content/caseStudies";

const CaseStudies = () => {
  const published = caseStudies.filter((s) => !s.draft);

  return (
    <>
      <PageMeta
        title="Case Studies"
        path="/case-studies"
        description="Enterprise AI engagements framed as challenge, solution, technology stack, business impact, and KPIs."
      />
      <section className="border-b border-zinc-200 bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionHeader
              eyebrow="Case Studies"
              title="Outcomes that move the operating model"
              description="Each engagement is documented as challenge, solution, stack, impact, and KPIs your leadership team can fund."
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6">
            {published.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              >
                <Link
                  to={`/case-studies/${study.slug}`}
                  className="group glass-panel card-lift flex flex-col lg:flex-row rounded-2xl overflow-hidden"
                >
                  <div className="lg:w-[34%] border-b lg:border-b-0 lg:border-r border-zinc-200 p-8 md:p-10 flex flex-col justify-center bg-white/[0.02]">
                    <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                      {study.sector}
                    </p>
                    <p className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-2">
                      {study.outcome}
                    </p>
                    <p className="text-sm text-zinc-600 mb-6">{study.outcomeDetail}</p>
                    <dl className="grid grid-cols-3 gap-3">
                      {study.metrics.slice(0, 3).map((kpi) => (
                        <div key={kpi.label}>
                          <dd className="text-sm font-semibold text-foreground">{kpi.value}</dd>
                          <dt className="text-[10px] text-zinc-600 leading-tight mt-0.5 line-clamp-2">
                            {kpi.label}
                          </dt>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="flex-1 p-8 md:p-10 flex flex-col">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-6">
                      {study.title}
                    </h2>

                    <dl className="space-y-4 mb-6 flex-grow">
                      <div>
                        <dt className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-1.5">
                          Challenge
                        </dt>
                        <dd className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
                          {study.challenge}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-1.5">
                          Solution
                        </dt>
                        <dd className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
                          {study.solution}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-1.5">
                          Business Impact
                        </dt>
                        <dd className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
                          {study.businessImpact}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-2">
                          Technology Stack
                        </dt>
                        <dd className="flex flex-wrap gap-1.5">
                          {study.technologyStack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex rounded-md border border-zinc-200 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-foreground/75"
                            >
                              {tech}
                            </span>
                          ))}
                        </dd>
                      </div>
                    </dl>

                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      Read case study
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want results like these?"
        description="Book a consultation to map outcomes, readiness, and a delivery path your leadership team can fund."
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </>
  );
};

export default CaseStudies;
