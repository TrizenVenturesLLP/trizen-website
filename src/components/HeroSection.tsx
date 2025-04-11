import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1820&q=80",
  },
];

const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = ({ activeTab }: { activeTab: string }) => {
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    // Shuffle squares whenever the active tab changes
    setSquares(generateSquares());
  }, [activeTab]);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("research");
  const isMobile = useIsMobile();

  // Updated tab content with routes
  const tabContent = [
    {
      id: "research",
      label: "Research",
      heading: "Your Partner in Transformative Research and Smart Solutions",
      description: "Building cutting-edge research solutions for your toughest challenges.",
      route: "/research"
    },
    {
      id: "consulting",
      label: "Consulting",
      heading: "Your Partner in Digital Transformation",
      description: "Expert consulting to navigate the complexities of modern business.",
      route: "/consulting"
    },
    {
      id: "training",
      label: "Training",
      heading: "Empowering Future-Ready Talent with Industry-Aligned Skills",
      description: "Develop the skills you need to thrive in today's dynamic environment.",
      route: "/training"
    },
    {
      id: "ventures",
      label: "Ventures",
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
    <section className="relative bg-[#f0effc] text-[#393283] overflow-hidden min-h-[90vh] flex items-center">
      {/* Background image with mask */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0effc] via-[#f0effc]/90 to-[#f0effc]/50"></div>
      </div>
      
      {/* Animation dots */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#6c62e2]/40"
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
            className="absolute rounded-full border border-[#8d86e0]/20"
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
          <div className="md:col-span-7 text-center md:text-left">
            {/* Main Heading and Description in Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-[#393283]"
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
                className="text-xl text-[#8d86e0] max-w-3xl mx-auto mb-10"
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
            </Tabs>


            {/* Tab selectors */}
            <Tabs 
              defaultValue="research" 
              value={activeTab} 
              onValueChange={setActiveTab} 
              className="w-full"
            >
              <div className="mt-8 md:mt-12 overflow-x-auto md:overflow-x-visible">
                <TabsList className={`flex ${isMobile ? 'flex-nowrap' : 'flex-wrap'} justify-center md:justify-start gap-3 md:gap-4 bg-transparent p-0 ${isMobile ? 'min-w-max' : 'w-full'}`}>
                  {tabContent.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={`navbar-link flex items-center whitespace-nowrap mb-2 ${
                        activeTab === tab.id ? 'text-[#6c62e2]' : 'text-[#8d86e0]'
                      }`}
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

          {/* Shuffle Grid Section - Hidden on mobile */}
          <div className="hidden md:block md:col-span-5">
            <ShuffleGrid activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;