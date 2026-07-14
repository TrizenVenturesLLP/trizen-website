import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import NotFound from "@/pages/NotFound";
import CTABanner from "@/components/marketing/CTABanner";
import CardMedia from "@/components/marketing/CardMedia";
import PageMeta from "@/components/marketing/PageMeta";
import { getBlueprintForService, getServiceBySlug } from "@/content/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFound />;
  }

  const blueprint = getBlueprintForService(service);

  return (
    <>
      <PageMeta
        title={service.title}
        path={`/services/${service.slug}`}
        description={service.description}
      />
      <section className="border-b border-zinc-200 bg-white pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              to="/services"
              className="inline-flex items-center text-sm text-zinc-600 hover:text-indigo-600 transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              All services
            </Link>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-600 mb-4">
              {service.category} · {service.title}
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.035em] text-zinc-900 mb-6 leading-tight">
              {service.headline}
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-3">
              The enterprise challenge
            </h2>
            <p className="text-lg text-zinc-700 leading-relaxed">{service.challenge}</p>
          </motion.div>
          <motion.div
            initial={{ y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="glass-panel-light rounded-2xl overflow-hidden"
          >
            <CardMedia
              theme="light"
              blueprint={blueprint}
              size="tall"
              className="min-h-[220px] border-0"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-zinc-900 mb-4">
              Trizen&apos;s approach
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-10 max-w-3xl">
              {service.approach}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="glass-panel-light rounded-2xl p-6 md:p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-4">
                  Business benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm text-zinc-700">
                      <Check className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-panel-light rounded-2xl p-6 md:p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-600 mb-4">
                  Typical deliverables
                </h3>
                <ul className="space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-zinc-700">
                      <Check className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-zinc-900 mb-8">
              Core capabilities
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm text-zinc-700"
                >
                  {capability}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title={`Discuss ${service.title}`}
        description="Book a consultation to scope outcomes, constraints, and a delivery path for your team."
        secondaryLabel="All services"
        secondaryHref="/services"
      />
    </>
  );
};

export default ServiceDetail;
