import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    id: "ai-1",
    title: "Quantum-Inspired Optimization Algorithms",
    summary: "Novel optimization for logistics and supply chain using hybrid quantum-classical approaches.",
    area: "AI & ML",
    path: "/research/ai",
  },
  {
    id: "ai-2",
    title: "AI-Powered Healthcare Diagnostics",
    summary: "Deep learning models for medical image analysis and early diagnosis.",
    area: "Healthcare",
    path: "/research/ai",
  },
  {
    id: "cyber-1",
    title: "Blockchain Security Framework",
    summary: "Security framework and tools for blockchain applications.",
    area: "Cybersecurity",
    path: "/research/cybersecurity",
  },
  {
    id: "iot-1",
    title: "Smart City Infrastructure",
    summary: "IoT-based solutions for urban traffic, energy, and safety systems.",
    area: "IoT",
    path: "/research",
  },
];

const FeaturedProjectsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-trizen-light relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-trizen-dark mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real research and innovation delivered across AI, cybersecurity, IoT, and healthcare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <span className="text-sm font-medium text-trizen-purple">
                {project.area}
              </span>
              <h3 className="text-xl font-semibold text-trizen-dark mt-2 mb-2 group-hover:text-trizen-purple transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.summary}</p>
              <Link to={project.path}>
                <span className="inline-flex items-center text-trizen-purple font-medium text-sm group-hover:gap-2 transition-all">
                  View project
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="/#research">
            <Button
              variant="outline"
              className="border-trizen-purple text-trizen-purple hover:bg-trizen-purple hover:text-white transition-all duration-200"
            >
              View all research projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
