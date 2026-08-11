import { motion } from "framer-motion";
import { FlaskConical, Handshake, GraduationCap, Rocket } from "lucide-react";

const stats = [
  {
    icon: FlaskConical,
    value: "50+",
    label: "Research Projects",
  },
  {
    icon: Handshake,
    value: "10+",
    label: "Industry Collaborations",
  },
  {
    icon: GraduationCap,
    value: "2000+",
    label: "Professionals Trained",
  },
  {
    icon: Rocket,
    value: "5+",
    label: "Startups Incubated",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-24 bg-trizen-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-trizen-purple/20 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Delivering real outcomes across research, consulting, training, and ventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
            >
              <stat.icon className="h-10 w-10 text-trizen-purple mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
