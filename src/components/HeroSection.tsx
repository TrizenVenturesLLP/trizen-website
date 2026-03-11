import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const tabContent = [
  {
    id: "research",
    label: "Research",
    heading: "Applied AI & Engineering Research",
    description: "Turning complex problems into deployable technology.",
    route: "/#research",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-[#393283] to-[#6c62e2]",
    whyChoose: [
      "Applied AI and ML expertise",
      "Industry + academic collaboration",
      "End-to-end prototype development",
    ],
  },
  {
    id: "consulting",
    label: "Consulting",
    heading: "Digital Transformation Consulting",
    description: "Helping organizations adopt AI, automation, and modern infrastructure.",
    route: "/#consulting",
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-[#2c5282] to-[#4299e1]",
    whyChoose: [
      "Cloud and AI transformation",
      "Process automation expertise",
      "Startup and enterprise experience",
    ],
  },
  {
    id: "training",
    label: "Training",
    heading: "Industry-Aligned Tech Training",
    description: "Preparing students and professionals for real-world engineering roles.",
    route: "https://lms.trizenventures.com/",
    bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    bgColor: "from-[#2d3748] to-[#4a5568]",
    whyChoose: [
      "Industry-aligned curricula",
      "Hands-on projects and certifications",
      "Placement and career support",
    ],
  },
  {
    id: "ventures",
    label: "Ventures",
    heading: "Building and Backing Early-Stage Technology Startups",
    description: "From idea to product to scale.",
    route: "/ventures",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-[#2c5282] to-[#48bb78]",
    whyChoose: [
      "Early-stage investment and incubation",
      "Technical and strategic support",
      "Network and go-to-market access",
    ],
  },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("research");
  const isMobile = useIsMobile();
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate tabs (slower: 8 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        const currentIndex = tabContent.findIndex((tab) => tab.id === activeTab);
        const nextIndex = (currentIndex + 1) % tabContent.length;
        setActiveTab(tabContent[nextIndex].id);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [activeTab, isAnimating]);

  const handleTabChange = (value: string) => {
    setIsAnimating(true);
    setActiveTab(value);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const currentTab = tabContent.find((tab) => tab.id === activeTab);

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {tabContent.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeTab === tab.id ? 1 : 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${tab.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.7)",
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${tab.bgColor} opacity-90`}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-32 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="md:col-span-7 text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white">
                  {currentTab?.heading}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-10">
                  {currentTab?.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Tab Navigation */}
            <Tabs
              value={activeTab}
              onValueChange={handleTabChange}
              className="w-full"
            >
              <div className="mt-8 md:mt-12 overflow-x-auto md:overflow-x-visible">
                <TabsList
                  className={`flex ${isMobile ? "flex-nowrap" : "flex-wrap"} justify-center md:justify-start gap-3 md:gap-4 bg-transparent p-0 ${isMobile ? "min-w-max" : "w-full"}`}
                >
                  {tabContent.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={`navbar-link flex items-center whitespace-nowrap mb-2 text-base md:text-lg ${
                        activeTab === tab.id
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        {tab.label}
                        {activeTab === tab.id && !isMobile && (
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          >
                            <ChevronRight className="h-4 w-4 ml-0.5" />
                          </motion.div>
                        )}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </Tabs>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              {currentTab?.route?.startsWith("http") ? (
                <a
                  href={currentTab.route}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-[#393283] hover:bg-white/90 transition-all duration-300"
                  >
                    Explore {currentTab.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              ) : currentTab?.route?.includes("#") ? (
                <a href={currentTab.route}>
                  <Button
                    size="lg"
                    className="bg-white text-[#393283] hover:bg-white/90 transition-all duration-300"
                  >
                    Explore {currentTab?.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              ) : (
                <Link to={currentTab?.route || "/"}>
                  <Button
                    size="lg"
                    className="bg-white text-[#393283] hover:bg-white/90 transition-all duration-300"
                  >
                    Explore {currentTab?.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </motion.div>
          </div>

          {/* Right Side: Tab-specific Why Choose */}
          <div className="hidden md:block md:col-span-5 lg:col-span-5">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative min-h-[280px] lg:min-h-[320px]"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20" />
              <div className="relative p-10 lg:p-12">
                <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                  Why {currentTab?.label}?
                </h3>
                <ul className="space-y-4">
                  {currentTab?.whyChoose?.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-white/90 text-lg lg:text-xl"
                    >
                      <span className="w-2.5 h-2.5 bg-white rounded-full mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
