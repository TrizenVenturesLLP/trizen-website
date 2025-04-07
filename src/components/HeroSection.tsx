
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
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="teaching" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="space-y-8 mb-12">
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
              
              <Button 
                className="rounded-full px-6 py-6 bg-trizen-blue hover:bg-trizen-blue/90 transition-all hover:scale-105 text-white"
              >
                Read the report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Tabs Navigation - Improved styling */}
            <TabsList className="flex flex-wrap gap-3 bg-transparent p-0 justify-center md:justify-start">
              {tabContent.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="group relative px-5 py-3 text-sm font-medium rounded-full border border-transparent 
                    data-[state=active]:bg-trizen-purple/10 data-[state=active]:text-trizen-purple data-[state=active]:border-trizen-purple/20
                    transition-all hover:text-trizen-purple shadow-sm hover:shadow-md"
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {tab.label}
                    <ChevronRight className="h-3.5 w-3.5 opacity-0 -ml-1 transition-all group-hover:opacity-100 group-hover:ml-0 group-data-[state=active]:opacity-100 group-data-[state=active]:ml-0" />
                  </span>
                  <span className={`absolute inset-0 rounded-full bg-trizen-purple/0 transition-all duration-300 
                    ${activeTab === tab.id ? "bg-trizen-purple/10" : "group-hover:bg-trizen-purple/5"}`}></span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
