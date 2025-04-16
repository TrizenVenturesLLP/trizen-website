import { useState, useEffect } from "react";
import { ArrowRight, Brain, Rocket, Target, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const tabContent = [
  {
    id: "research",
    label: "Research",
    heading: "Transformative Research Solutions",
    subheading: "Your Partner in Innovation",
    description: "Building cutting-edge research solutions for your toughest challenges.",
    route: "/research",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-[#393283] to-[#6c62e2]",
    features: [
      {
        icon: Brain,
        title: "Expert Analysis",
        description: "Deep insights from industry leaders"
      },
      {
        icon: Rocket,
        title: "Innovation Driven",
        description: "Cutting-edge research methodologies"
      },
      {
        icon: Target,
        title: "Precision Focused",
        description: "Accurate and actionable results"
      }
    ]
  },
  {
    id: "consulting",
    label: "Consulting",
    heading: "Digital Transformation Experts",
    subheading: "Your Strategic Partner",
    description: "Expert consulting to navigate the complexities of modern business.",
    route: "/consulting",
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-[#2c5282] to-[#4299e1]",
    features: [
      {
        icon: Brain,
        title: "Strategic Planning",
        description: "Customized solutions for your business"
      },
      {
        icon: Rocket,
        title: "Digital Excellence",
        description: "Transform your digital presence"
      },
      {
        icon: Target,
        title: "Growth Focused",
        description: "Drive sustainable business growth"
      }
    ]
  },
  {
    id: "training",
    label: "Training",
    heading: "Future-Ready Talent Development",
    subheading: "Empowering Your Team",
    description: "Develop the skills you need to thrive in today's dynamic environment.",
    route: "/training",
    bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    bgColor: "from-[#2d3748] to-[#4a5568]",
    features: [
      {
        icon: Brain,
        title: "Expert Instructors",
        description: "Learn from industry professionals"
      },
      {
        icon: Rocket,
        title: "Hands-on Learning",
        description: "Practical, real-world experience"
      },
      {
        icon: Target,
        title: "Career Growth",
        description: "Skills that drive your success"
      }
    ]
  },
  {
    id: "ventures",
    label: "Ventures",
    heading: "From Vision to Venture",
    subheading: "Powered by Innovation",
    description: "We invest in visionaries building the technology of tomorrow.",
    route: "/ventures",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-[#2c5282] to-[#48bb78]",
    features: [
      {
        icon: Brain,
        title: "Innovation Hub",
        description: "Support for groundbreaking ideas"
      },
      {
        icon: Rocket,
        title: "Growth Support",
        description: "Resources to scale your vision"
      },
      {
        icon: Target,
        title: "Strategic Partnerships",
        description: "Connect with industry leaders"
      }
    ]
  }
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("research");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        const currentIndex = tabContent.findIndex(tab => tab.id === activeTab);
        const nextIndex = (currentIndex + 1) % tabContent.length;
        setActiveTab(tabContent[nextIndex].id);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeTab, isAnimating]);

  const handleTabChange = (value: string) => {
    setIsAnimating(true);
    setActiveTab(value);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const currentTab = tabContent.find(tab => tab.id === activeTab);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {tabContent.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: activeTab === tab.id ? 1 : 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="absolute inset-0"
            style={{ 
              backgroundImage: `url(${tab.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.7)'
            }}
          >
            <div 
              className={`absolute inset-0 bg-gradient-to-b ${tab.bgColor} opacity-90`}
            />
          </motion.div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8 text-center"
            >
              {/* Header Section */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mx-auto"
              > */}
                {/* <Sparkles className="h-4 w-4 text-white" /> */}
                {/* <Link to="/research/submit-idea flex">
                <span className="text-sm font-medium text-white">Transform Your Ideas</span>
                <ChevronRight className="h-4 w-4 text-white" />
                </Link> */}
              {/* </motion.div> */}

              {/* Main Content */}
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-medium text-white/80"
                >
                  {currentTab?.subheading}
                </motion.h2>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  {currentTab?.heading}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl text-white/90 max-w-2xl mx-auto"
                >
                  {currentTab?.description}
                </motion.p>
              </div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              >
                {currentTab?.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transform group-hover:scale-105 transition-all duration-300 border border-white/20" />
                    <div className="relative p-6">
                      <div className="p-3 rounded-xl bg-white/20 inline-block mb-4">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/70">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4 justify-center mt-12"
              >
                <Link to={currentTab?.route || "/"}>
                  <Button 
                    size="lg" 
                    className="bg-white text-[#393283] hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Explore {currentTab?.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                {/* <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  Learn More
                </Button> */}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;