import { motion } from "framer-motion";
import { Atom, Lock, Network, Microscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const researchAreas = [
  {
    icon: Atom,
    title: "Artificial Intelligence",
    description: "Machine learning, neural networks, and AI applications across industries.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Threat detection, secure systems, and privacy-preserving technologies.",
  },
  {
    icon: Network,
    title: "Internet of Things",
    description: "Connected devices, smart systems, and intelligent infrastructure.",
  },
  {
    icon: Microscope,
    title: "Healthcare Innovation",
    description: "Medical technology, digital health, and patient care systems.",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-trizen-purple mb-4">
            Research
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Applied AI and engineering research that turns complex problems into deployable technology. 
            We work across AI/ML, cybersecurity, IoT, and healthcare with industry and academic partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-trizen-light/50 border border-gray-100 hover:shadow-lg transition-all duration-200"
            >
              <area.icon className="h-10 w-10 text-trizen-purple mb-4" />
              <h3 className="text-lg font-semibold text-trizen-dark mb-2">{area.title}</h3>
              <p className="text-gray-600 text-sm">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
