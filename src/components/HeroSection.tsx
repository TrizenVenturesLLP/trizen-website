
import { useState } from "react";

const tabContent = {
  teaching: "Learn from the experts. We offer hands-on training in AI/ML, Web Development, and more.",
  uiux: "We craft intuitive digital experiences and scalable web solutions that make an impact.",
  research: "Supporting PhD and final year projects with end-to-end research, development, and publishing guidance.",
  aiml: "From intelligent chatbots to custom AI agents—we build solutions that think, learn, and act.",
  cloud: "We deliver reliable, secure, and scalable cloud hosting tailored to your needs."
};

type TabType = keyof typeof tabContent;

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("teaching");

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-trizen-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trizen-dark mb-6">
            Empowering Innovation Through Technology Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10">
            We bridge the gap between ideas and execution, delivering transformative solutions 
            that drive innovation and growth.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <button 
              className={`tab-button ${activeTab === "teaching" ? "active" : ""}`}
              onClick={() => handleTabChange("teaching")}
            >
              Teaching Services
            </button>
            <button 
              className={`tab-button ${activeTab === "uiux" ? "active" : ""}`}
              onClick={() => handleTabChange("uiux")}
            >
              UI/UX & Web Development
            </button>
            <button 
              className={`tab-button ${activeTab === "research" ? "active" : ""}`}
              onClick={() => handleTabChange("research")}
            >
              Research & Publishing
            </button>
            <button 
              className={`tab-button ${activeTab === "aiml" ? "active" : ""}`}
              onClick={() => handleTabChange("aiml")}
            >
              AI/ML & Multi-Agent Services
            </button>
            <button 
              className={`tab-button ${activeTab === "cloud" ? "active" : ""}`}
              onClick={() => handleTabChange("cloud")}
            >
              Cloud Solutions
            </button>
          </div>

          <div className="mt-10 text-center min-h-24">
            {Object.entries(tabContent).map(([key, content]) => (
              <div 
                key={key}
                className={`tab-content ${activeTab === key ? "active" : "hidden"}`}
              >
                <p className="text-xl text-gray-800">{content}</p>
                <button className="mt-6 inline-flex items-center text-trizen-blue hover:underline font-medium">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
