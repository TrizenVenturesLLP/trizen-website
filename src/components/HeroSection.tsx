
import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("research");
  const isMobile = useIsMobile();

  // Updated tab content with routes
  const tabContent = [
    {
      id: "research",
      label: "Trizen Research",
      heading: "Your Partner in Transformative Research and Smart Solutions",
      description: "Building cutting-edge research solutions for your toughest challenges.",
      route: "/research"
    },
    {
      id: "consulting",
      label: "Trizen Consulting",
      heading: "Your Partner in Digital Transformation",
      description: "Expert consulting to navigate the complexities of modern business.",
      route: "/consulting"
    },
    {
      id: "training",
      label: "Trizen Training",
      heading: "Empowering Future-Ready Talent with Industry-Aligned Skills",
      description: "Develop the skills you need to thrive in today's dynamic environment.",
      route: "/training"
    },
    {
      id: "ventures",
      label: "Trizen Ventures",
      heading: "From Vision to Venture — Powered by Trizen",
      description: "We invest in visionaries building the technology of tomorrow.",
      route: "/ventures"
    },
  ];

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = tabContent.findIndex(tab => tab.id === activeTab);
      const nextIndex = (currentIndex + 1) % tabContent.length;
      setActiveTab(tabContent[nextIndex].id);
    }, 5000); // Change tab every 5 seconds

    return () => clearInterval(interval);
  }, [activeTab]);

  // Get current route based on active tab
  const getCurrentRoute = () => {
    const currentTab = tabContent.find(tab => tab.id === activeTab);
    return currentTab ? currentTab.route : "/";
  };

  return (
    <section className="relative bg-black text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, colIndex) => (
            <div key={`col-${colIndex}`} className="border-r border-blue-500/20 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-8 w-full absolute top-0 bottom-0">
          {Array.from({ length: 8 }).map((_, rowIndex) => (
            <div key={`row-${rowIndex}`} className="border-b border-blue-500/20 w-full"></div>
          ))}
        </div>
      </div>

      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/40"
            initial={{ 
              x: Math.random() * 100, 
              y: Math.random() * 100,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              x: [
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight, 
                Math.random() * window.innerHeight, 
                Math.random() * window.innerHeight
              ],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border border-blue-500/20"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0.1,
              scale: 0.5
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.1, 0.2, 0.1],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Content Section */}
          <div className="md:col-span-10 md:col-start-2 text-center">
            {/* Announcement badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mx-auto mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium">Exciting announcement</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight"
            >
              {tabContent.map((tab) => (
                <TabsContent 
                  key={tab.id} 
                  value={tab.id}
                  className="data-[state=active]:animate-tab-fade-in"
                >
                  {tab.heading}
                </TabsContent>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            >
              {tabContent.map((tab) => (
                <TabsContent 
                  key={`desc-${tab.id}`} 
                  value={tab.id}
                  className="data-[state=active]:animate-tab-fade-in"
                >
                  {tab.description}
                </TabsContent>
              ))}
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Link to={getCurrentRoute()}>
                <Button 
                  size="lg"
                  className="rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all hover:scale-105"
                >
                  Try it free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="ghost" 
                className="rounded-full text-white border-white/20 hover:bg-white/10"
              >
                Learn more
              </Button>
            </motion.div>

            {/* Tab selectors */}
            <Tabs 
              defaultValue="research" 
              value={activeTab} 
              onValueChange={setActiveTab} 
              className="w-full"
            >
              <div className="mt-8 md:mt-12 overflow-x-auto md:overflow-x-visible">
                <TabsList className={`flex ${isMobile ? 'flex-nowrap' : 'flex-wrap'} justify-center gap-3 md:gap-4 bg-transparent p-0 ${isMobile ? 'min-w-max' : 'w-full'}`}>
                  {tabContent.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={`navbar-link flex items-center whitespace-nowrap mb-2 ${activeTab === tab.id ? 'text-blue-400' : 'text-gray-400'}`}
                    >
                      <span className="flex items-center gap-1">
                        {tab.label}
                        {activeTab === tab.id && !isMobile && <ChevronRight className="h-3.5 w-3.5 ml-0.5" />}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
