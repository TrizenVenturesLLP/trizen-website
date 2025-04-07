
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <Tabs defaultValue="teaching" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="space-y-6 mb-8">
                {tabContent.map((tab) => (
                  <TabsContent 
                    key={tab.id} 
                    value={tab.id}
                    className="data-[state=active]:animate-tab-fade-in"
                  >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trizen-dark mb-6 max-w-xl transition-all duration-300">
                      {tab.heading}
                    </h1>
                  </TabsContent>
                ))}
                
                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                  We're Providing {tabContent.find(tab => tab.id === activeTab)?.label}
                </p>
              </div>
              
              <Button 
                className="rounded-full px-6 py-6 bg-trizen-blue hover:bg-trizen-blue/90 transition-all hover:scale-105 text-white"
              >
                Read the report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              {/* Tabs Navigation */}
              <TabsList className="mt-12 flex flex-wrap gap-2 bg-transparent p-0">
                {tabContent.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="group relative px-4 py-2 text-sm font-medium rounded-full data-[state=active]:bg-trizen-purple/10 data-[state=active]:text-trizen-purple transition-all hover:text-trizen-purple"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {tab.label}
                      <ChevronRight className="h-3.5 w-3.5 opacity-0 -ml-1 transition-all group-hover:opacity-100 group-hover:ml-0 group-data-[state=active]:opacity-100 group-data-[state=active]:ml-0" />
                    </span>
                    <span className={`absolute inset-0 rounded-full bg-trizen-purple/0 transition-all duration-300 ${activeTab === tab.id ? "bg-trizen-purple/10" : "group-hover:bg-trizen-purple/5"}`}></span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -z-10 top-0 right-0 w-4/5 h-4/5 bg-gradient-to-br from-trizen-purple/20 to-trizen-blue/20 rounded-tr-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Team collaborating" 
                className="rounded-lg shadow-lg object-cover w-full max-w-md h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
