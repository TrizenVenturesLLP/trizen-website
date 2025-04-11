import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, Users, MessageCircle, FileText, Target, Rocket, Link as LinkIcon } from "lucide-react";
import HexagonBackground from "@/components/HexagonBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
// This would typically come from your data source
const ongoingProjects = [
  {
    title: "AI-Driven Healthcare Solutions",
    category: "Healthcare",
    timeline: "2023 - 2024",
    progress: 65,
    lead: "Dr. Sarah Johnson",
    objective: "Developing advanced AI algorithms for early disease detection and personalized treatment recommendations.",
    team: ["Dr. Mike Chen", "Dr. Lisa Patel", "James Wilson"],
    summary: "This groundbreaking project aims to revolutionize healthcare through artificial intelligence. By leveraging machine learning and big data analytics, we're creating systems that can predict health risks and suggest preventive measures with unprecedented accuracy.",
    milestones: [
      "Data collection and preprocessing framework completed",
      "Initial AI model development and testing",
      "Integration with hospital management systems in progress",
      "Clinical trials preparation phase"
    ],
    impact: "Expected to reduce diagnosis time by 60% and improve treatment accuracy by 45%",
    resources: [
      { name: "Research Paper", url: "#" },
      { name: "Project Documentation", url: "#" },
      { name: "Technical Specifications", url: "#" }
    ],
    collaborators: [
      "National Health Institute",
      "Tech Innovation Labs",
      "University Medical Center"
    ]
  },
  {
    title: "Quantum-Inspired Optimization Algorithms",
    category: "Technology",
    timeline: "Jan 2023 - Dec 2024",
    progress: 68,
    lead: "Dr. Eliza Chen",
    objective: "Developing novel optimization algorithms inspired by quantum computing principles for complex logistics and supply chain management.",
    team: ["Dr. Marcus Wong", "Sarah Johnson, PhD", "Alan Parker"],
    summary: "This innovative project combines quantum computing concepts with classical algorithms to solve complex optimization problems. Our approach promises significant improvements in efficiency for logistics, supply chain, and resource allocation challenges.",
    milestones: [
      "Quantum-inspired algorithm framework developed",
      "Benchmark testing against classical methods completed",
      "Supply chain optimization prototype implemented",
      "Performance optimization and scaling in progress"
    ],
    impact: "Projected to improve optimization efficiency by 40% and reduce computational costs by 30%",
    resources: [
      { name: "Algorithm Documentation", url: "#" },
      { name: "Performance Reports", url: "#" },
      { name: "Implementation Guide", url: "#" }
    ],
    collaborators: [
      "Quantum Computing Research Center",
      "Global Logistics Solutions",
      "Advanced Computing Institute"
    ]
  },
  {
    title: "Sustainability Metrics Platform",
    category: "Environment",
    timeline: "Mar 2023 - Jun 2025",
    progress: 42,
    lead: "Dr. James Patterson",
    objective: "Creating an AI-powered platform to measure, analyze and optimize sustainability metrics for organizations across industries.",
    team: ["Anita Rodriguez, PhD", "Kevin Zhang", "Lisa Montgomery"],
    summary: "Our platform leverages advanced analytics and machine learning to provide organizations with real-time sustainability insights. This project aims to revolutionize how businesses track and improve their environmental impact.",
    milestones: [
      "Core metrics framework established",
      "Data collection systems implemented",
      "AI analytics engine development",
      "Beta testing with partner organizations"
    ],
    impact: "Targeting 25% improvement in organizational sustainability metrics and 35% reduction in carbon footprint tracking costs",
    resources: [
      { name: "Platform Overview", url: "#" },
      { name: "Sustainability Metrics Guide", url: "#" },
      { name: "Implementation Roadmap", url: "#" }
    ],
    collaborators: [
      "Environmental Research Institute",
      "Sustainable Business Alliance",
      "Green Tech Solutions"
    ]
  },
  {
    title: "Cognitive Systems for Education",
    category: "Education",
    timeline: "Nov 2023 - Oct 2025",
    progress: 35,
    lead: "Dr. Michael Torres",
    objective: "Building adaptive learning platforms that personalize educational content based on cognitive patterns and learning styles.",
    team: ["Dr. Leila Patel", "Robert Garcia", "Jennifer Wu"],
    summary: "This project combines cognitive science with machine learning to create an intelligent tutoring system that adapts to individual learning patterns. Our goal is to revolutionize personalized education through AI-driven insights.",
    milestones: [
      "Learning pattern recognition system developed",
      "Content adaptation algorithms implemented",
      "Initial user testing phase completed",
      "Integration with existing LMS platforms"
    ],
    impact: "Expected to improve learning outcomes by 40% and reduce study time by 25%",
    resources: [
      { name: "System Architecture", url: "#" },
      { name: "Research Findings", url: "#" },
      { name: "Educational Impact Report", url: "#" }
    ],
    collaborators: [
      "Educational Technology Institute",
      "Cognitive Science Center",
      "Global Learning Initiative"
    ]
  }
];

const OngoingProjectDetails = () => {
  const { id } = useParams();
  const projectIndex = parseInt(id || "1") - 1;
  const project = ongoingProjects[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#393283]/95 via-[#6c62e2]/95 to-[#8d86e0]/95 z-10"></div>
        <HexagonBackground />
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="bg-white/10 text-white mb-6 backdrop-blur-sm border-white/20">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              {project.summary}
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-100" />
                <span className="text-blue-100">{project.timeline}</span>
              </div>
              <Progress 
                value={project.progress} 
                className="w-48 h-2 bg-white/20" 
                indicatorClassName="bg-white"
              />
              <span className="text-white font-medium">{project.progress}% Complete</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#393283]">Project Objective</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{project.objective}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#393283]">Key Milestones</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {project.milestones.map((milestone, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Target className="h-5 w-5 text-[#6c62e2] mt-1" />
                        <span className="text-gray-600">{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#393283]">Expected Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{project.impact}</p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#393283]">Research Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-[#393283] mb-2">Lead Researcher</p>
                      <p className="text-gray-600">{project.lead}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#393283] mb-2">Team Members</p>
                      <div className="flex flex-wrap gap-2">
                        {project.team.map((member, i) => (
                          <Badge 
                            key={i}
                            variant="outline"
                            className="bg-[#f0effc] text-[#393283] border-[#8d86e0]/20"
                          >
                            {member}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#393283]">Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        className="flex items-center space-x-2 text-[#393283] hover:text-[#6c62e2] transition-colors"
                      >
                        <FileText className="h-4 w-4" />
                        <span>{resource.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#393283]">Collaborators</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.collaborators.map((collaborator, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-600">
                        <LinkIcon className="h-4 w-4 text-[#6c62e2]" />
                        <span>{collaborator}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Button 
                className="w-full bg-[#393283] hover:bg-[#6c62e2] text-white"
                onClick={() => window.open(`https://wa.me/1234567890?text=I'm interested in the project: ${project.title}`, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Research Team
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OngoingProjectDetails; 