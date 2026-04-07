import { motion } from "framer-motion";
import { PenTool, Database, Brain, Cloud, Lock, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: PenTool,
    title: "Business Strategy",
    description: "Robust business models and growth strategies aligned with your vision.",
  },
  {
    icon: Database,
    title: "IT Consulting",
    description: "Optimize technology infrastructure and digital systems for efficiency.",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Streamline operations and decision-making with AI and automation.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud solutions and efficient DevOps practices.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Security strategies and implementations to protect digital assets.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Turn raw data into actionable insights for growth and innovation.",
  },
];

const ConsultingSection = () => {
  return (
    <section id="consulting" className="py-24 bg-trizen-light/30 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-trizen-purple mb-4">
            Consulting
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your partner in digital transformation. We help organizations adopt AI, automation, 
            and modern infrastructure with expertise across strategy, cloud, and data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <service.icon className="h-10 w-10 text-trizen-purple mb-4" />
              <h3 className="text-lg font-semibold text-trizen-dark mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="/#cta">
            <Button className="bg-trizen-purple hover:bg-[#2F2468] text-white transition-all duration-200">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <p className="text-gray-600 mt-4 text-sm">
            Ready to transform? Use the &quot;Start a Project&quot; button above or scroll to the CTA section below.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingSection;
