import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

const tabContent = [
  {
    id: "research",
    label: "Research",
    heading: "Your Partner in Transformative Research and Smart Solutions",
    description: "Building cutting-edge research solutions for your toughest challenges.",
    route: "/research",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-[#393283] to-[#6c62e2]"
  },
  {
    id: "consulting",
    label: "Consulting",
    heading: "Your Partner in Digital Transformation",
    description: "Expert consulting to navigate the complexities of modern business.",
    route: "/consulting",
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-[#2c5282] to-[#4299e1]"
  },
  {
    id: "training",
    label: "Training",
    heading: "Empowering Future-Ready Talent with Industry-Aligned Skills",
    description: "Develop the skills you need to thrive in today's dynamic environment.",
    route: "https://lms.trizenventures.com/",
    bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    bgColor: "from-[#2d3748] to-[#4a5568]"
  },
  {
    id: "insights",
    label: "Insights",
    heading: "Connect and Collaborate with Industry Leaders",
    description: "Join our community of innovators and thought leaders.",
    route: "https://connect.trizenventures.com/",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-[#2c5282] to-[#48bb78]"
  },
  {
    id: "careers",
    label: "Careers",
    heading: "Build Your Future with Trizen",
    description: "Join our team and help shape the future of technology.",
    route: "https://careers.trizenventures.com/",
    bgImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-[#2d3748] to-[#4a5568]"
  },
  {
    id: "ventures",
    label: "Ventures",
    heading: "From Vision to Venture — Powered by Trizen",
    description: "We invest in visionaries building the technology of tomorrow.",
    route: "/ventures",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-[#2c5282] to-[#48bb78]"
  }
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("research");
  const isMobile = useIsMobile();
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate tabs
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
    <section className="relative min-h-[90vh] overflow-hidden">
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
              className={`absolute inset-0 bg-gradient-to-r ${tab.bgColor} opacity-90`}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="md:col-span-7 text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white">
                  {currentTab?.heading}
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mb-10">
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
                <TabsList className={`flex ${isMobile ? 'flex-nowrap' : 'flex-wrap'} justify-center md:justify-start gap-3 md:gap-4 bg-transparent p-0 ${isMobile ? 'min-w-max' : 'w-full'}`}>
                  {tabContent.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={`navbar-link flex items-center whitespace-nowrap mb-2 ${
                        activeTab === tab.id ? 'text-white' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        {tab.label}
                        {activeTab === tab.id && !isMobile && (
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          >
                            <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
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
              {currentTab?.route?.startsWith('http') ? (
                <a href={currentTab.route} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#393283] hover:bg-white/90 transition-all duration-300"
                  >
                    Explore {currentTab.label}
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

          {/* Right Side Content */}
          <div className="hidden md:block md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl" />
              <div className="relative p-8">
                <Sparkles className="h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Why Choose {currentTab?.label}?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-white/90">
                    <span className="w-2 h-2 bg-white rounded-full mr-2" />
                    Industry-leading expertise
                  </li>
                  <li className="flex items-center text-white/90">
                    <span className="w-2 h-2 bg-white rounded-full mr-2" />
                    Cutting-edge solutions
                  </li>
                  <li className="flex items-center text-white/90">
                    <span className="w-2 h-2 bg-white rounded-full mr-2" />
                    Proven track record
                  </li>
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