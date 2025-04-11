import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectRequestForm from './ProjectRequestForm';

interface ProjectTab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const ProjectOverview: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('abstract');
  const [projectData, setProjectData] = React.useState<any>(null);

  React.useEffect(() => {
    const loadProjectData = async () => {
      try {
        // Dynamically import project data based on projectId
        const module = await import(`../artificial-intelligence/projects/${projectId}.tsx`);
        if (!module.projectData) {
          throw new Error('Project data not found');
        }
        setProjectData(module.projectData);
      } catch (error) {
        console.error('Error loading project data:', error);
        // Show error message to user before redirecting
        alert('Project not found or data is corrupted. Redirecting to projects page...');
        navigate('/research/artificial-intelligence');
      }
    };

    if (projectId) {
      loadProjectData();
    }
  }, [projectId, navigate]);

  if (!projectData) return <div>Loading...</div>;

  const tabs: ProjectTab[] = [
    { id: 'abstract', label: 'Read Abstract', icon: '📄' },
    { id: 'diagram', label: 'Block Diagram', icon: '📊' },
    { id: 'specs', label: 'Specifications', icon: '⚙️' },
    { id: 'outcomes', label: 'Learning Outcomes', icon: '🎯' },
    { id: 'demo', label: 'Demo Video', icon: '🎥' },
    { id: 'buy', label: 'Project Request / Buy', icon: '🛒' },
  ];

  return (
    <div className="min-h-screen bg-[#f0effc]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[200px] flex items-center bg-gradient-to-r from-[#393283] to-[#6c62e2]">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-white mb-4">
                  {projectData.title}
                </h1>
                <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-white text-sm">
                  Project Code: {projectData.projectCode}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'text-[#393283] border-b-2 border-[#393283]' 
                    : 'text-gray-600 hover:text-[#393283]'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-8">
            {activeTab === 'abstract' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-[#393283] mb-4">OBJECTIVE</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {projectData.objective}
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#393283] mb-4">ABSTRACT</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {projectData.abstract}
                  </p>
                </div>
              </div>
            )}
            {activeTab === 'specs' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-[#393283] mb-4">SPECIFICATIONS</h2>
                <ul className="list-disc list-inside space-y-2">
                  {projectData.specifications.map((spec: string, index: number) => (
                    <li key={index} className="text-gray-700">{spec}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'outcomes' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-[#393283] mb-4">LEARNING OUTCOMES</h2>
                <ul className="list-disc list-inside space-y-2">
                  {projectData.learningOutcomes.map((outcome: string, index: number) => (
                    <li key={index} className="text-gray-700">{outcome}</li>
                  ))}
                </ul>
              </div>
            )}
            {(activeTab === 'diagram' || activeTab === 'demo') && (
              <div className="text-center py-12">
                <p className="text-gray-500">Content will be available after project request</p>
                <Button 
                  variant="outline"
                  className="mt-4 text-[#393283] border-[#8d86e0] hover:bg-[#8d86e0]/10"
                  onClick={() => setActiveTab('buy')}
                >
                  Request Project Access
                </Button>
              </div>
            )}
            {activeTab === 'buy' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-[#393283] mb-4">PROJECT REQUEST</h2>
                <p className="text-gray-700 mb-6">
                  To get full access to this project including block diagrams, specifications, and demo videos,
                  please fill out the project request form.
                </p>
                <ProjectRequestForm 
                  projectTitle={projectData.title}
                  projectCode={projectData.projectCode}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectOverview; 