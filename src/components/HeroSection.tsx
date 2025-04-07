
import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("teaching");

  // Tab content
  const tabContent = [
    {
      id: "teaching",
      label: "Teaching Services",
      heading: "Learn from the experts. We offer hands-on training in AI/ML, Web Development, and more.",
    },
    {
      id: "uiux",
      label: "UI/UX Design / Web Development",
      heading: "We craft intuitive digital experiences and scalable web solutions that make an impact.",
    },
    {
      id: "research",
      label: "Research Development & Paper Publishing",
      heading: "Supporting PhD and final year projects with end-to-end research, development, and publishing guidance.",
    },
    {
      id: "aiml",
      label: "AIML and Multi-Agent Services",
      heading: "From intelligent chatbots to custom AI agents—we build solutions that think, learn, and act.",
    },
    {
      id: "cloud",
      label: "Cloud Solutions",
      heading: "We deliver reliable, secure, and scalable cloud hosting tailored to your needs.",
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
    <section className="bg-trizen-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Text Content */}
          <div className="max-w-3xl mx-auto mb-12">
            <Tabs defaultValue="teaching" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="space-y-6 mb-8">
                {tabContent.map((tab) => (
                  <TabsContent 
                    key={tab.id} 
                    value={tab.id}
                    className="data-[state=active]:animate-tab-fade-in"
                  >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trizen-dark mb-6 transition-all duration-300">
                      {tab.heading}
                    </h1>
                  </TabsContent>
                ))}
                
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  We're Providing {tabContent.find(tab => tab.id === activeTab)?.label}
                </p>
              </div>
              
              <Button 
                className="rounded-full px-6 py-6 bg-trizen-blue hover:bg-trizen-blue/90 transition-all hover:scale-105 text-white"
              >
                Read the report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              {/* Tabs Navigation - Now using navbar-link styling */}
              <TabsList className="mt-12 flex flex-wrap justify-center gap-8 bg-transparent p-0">
                {tabContent.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`navbar-link ${activeTab === tab.id ? 'text-trizen-purple' : ''}`}
                  >
                    <span className="flex items-center gap-1">
                      {tab.label}
                      {activeTab === tab.id && <ChevronRight className="h-3.5 w-3.5 ml-0.5" />}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
