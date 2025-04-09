
import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, Rocket, Palette, BookOpen, Bot, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("teaching");
  const isMobile = useIsMobile();

  // Tab content with icons
  const tabContent = [
    {
      id: "teaching",
      label: "AI & Machine Learning Training Programs",
      heading: "Accelerate Your Career with AI and Full-Stack Development Training",
      icon: <Rocket className="h-5 w-5" />
    },
    {
      id: "uiux",
      label: "UI/UX & Web Solutions",
      heading: "Design Intuitive UI/UX and Scalable Web Solutions to Drive Growth",
      icon: <Palette className="h-5 w-5" />
    },
    {
      id: "research",
      label: "Research & Project Support",
      heading: "Full Research & Project Support for PhD and Final Year Students",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      id: "aiml",
      label: "AI Chatbot & Intelligent Agent Development",
      heading: "Conversational AI & Intelligent Agent Solutions",
      icon: <Bot className="h-5 w-5" />
    },
    {
      id: "cloud",
      label: "Cloud Hosting Solutions",
      heading: "Secure and Scalable Cloud Hosting Tailored to Your Business Needs",
      icon: <Cloud className="h-5 w-5" />
    }
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

  return (
    <section className="bg-trizen-light py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left md:col-span-7 order-2 md:order-1">
            <Tabs defaultValue="teaching" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="space-y-6 mb-8">
                {tabContent.map((tab) => (
                  <TabsContent 
                    key={tab.id} 
                    value={tab.id}
                    className="data-[state=active]:animate-tab-fade-in"
                  >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-trizen-dark mb-6 transition-all duration-300">
                      {tab.heading}
                    </h1>
                  </TabsContent>
                ))}
              </div>
              
              <Button 
                className="rounded-full px-5 py-5 md:px-6 md:py-6 bg-trizen-blue hover:bg-trizen-blue/90 transition-all hover:scale-105 text-white"
              >
                Know More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              {/* Tabs Navigation - Using scrollable container on mobile */}
              <div className="mt-8 md:mt-12 overflow-x-auto">
                <TabsList className="flex flex-nowrap md:flex-wrap gap-3 md:gap-8 bg-transparent p-0 min-w-max">
                  {tabContent.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={`navbar-link flex items-center whitespace-nowrap ${activeTab === tab.id ? 'text-trizen-purple' : ''}`}
                    >
                      {isMobile ? (
                        <span className="mr-1">{tab.icon}</span>
                      ) : (
                        <span className="flex items-center gap-1">
                          {tab.label}
                          {activeTab === tab.id && <ChevronRight className="h-3.5 w-3.5 ml-0.5" />}
                        </span>
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </Tabs>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="flex justify-center md:justify-end md:col-span-5 order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -z-10 top-0 right-0 w-4/5 h-4/5 bg-gradient-to-br from-trizen-purple/20 to-trizen-blue/20 rounded-tr-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Team collaborating" 
                className="rounded-lg shadow-lg object-cover w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
