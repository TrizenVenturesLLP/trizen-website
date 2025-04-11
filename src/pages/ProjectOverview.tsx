import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, HTMLMotionProps } from "framer-motion";
import { 
  ArrowLeft, MessageCircle, Calendar, 
  Users, BookOpen, FileText, Download,
  Clock, BarChart2, Target, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Sample project data - In real app, this would come from an API
const projectDetails = {
  1: {
    title: "Deep Learning for Medical Image Analysis and Classification",
    summary: "Using advanced neural networks for accurate disease detection in medical imaging",
    description: "This project focuses on developing deep learning models for automated analysis of medical images. The system uses convolutional neural networks (CNNs) to detect and classify various medical conditions from X-ray, MRI, and CT scan images. The project aims to improve diagnostic accuracy and reduce the workload of medical professionals.",
    type: "major",
    department: "cse",
    year: "2024",
    tags: ["Deep Learning", "Healthcare", "Computer Vision"],
    status: "ongoing",
    team: ["Dr. Sarah Johnson", "Alex Chen", "Maria Rodriguez"],
    timeline: "January 2024 - December 2024",
    progress: 75,
    objectives: [
      "Develop CNN models for medical image classification",
      "Create a web-based interface for medical professionals",
      "Implement real-time analysis capabilities",
      "Achieve 95% accuracy in disease detection"
    ],
    deliverables: [
      "Research paper on CNN architecture optimization",
      "Trained model for medical image classification",
      "Web-based interface for medical professionals",
      "Performance evaluation report"
    ],
    resources: [
      "Research Methodology Guide",
      "Data Collection Protocol",
      "Model Architecture Documentation",
      "Evaluation Framework"
    ],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1936&fit=crop"
  }
  // Add more project details...
};

const ProjectOverview = () => {
  const { projectId } = useParams();
  const project = projectDetails[Number(projectId) as keyof typeof projectDetails];

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen flex flex-col bg-[#f0effc]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#393283]/90 to-[#8d86e0]/90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
            {...({} as HTMLMotionProps<"div">)}
          >
            <Link to="/research">
              <Button variant="ghost" className="text-white hover:text-white/80 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
            <Badge variant="secondary" className="bg-white/20 text-white mb-4">
              {project.type.toUpperCase()} PROJECT
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {project.summary}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Badge variant="outline" className={
                project.status === "ongoing" 
                  ? "border-green-500 text-green-400"
                  : "border-blue-500 text-blue-400"
              }>
                {project.status}
              </Badge>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="h-4 w-4" />
                <span>{project.timeline}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#393283]">Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#f0effc] text-[#393283]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#393283]">Project Objectives</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {project.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Target className="h-5 w-5 text-[#6c62e2]" />
                        </div>
                        <p className="ml-3 text-gray-600">{objective}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#393283]">Project Deliverables</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {project.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Award className="h-5 w-5 text-[#6c62e2]" />
                        </div>
                        <p className="ml-3 text-gray-600">{deliverable}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#393283]">Project Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#393283]">Overall Progress</span>
                      <span className="text-sm font-medium text-[#6c62e2]">{project.progress}%</span>
                    </div>
                    <Progress 
                      value={project.progress} 
                      className="h-2 bg-[#8d86e0]/20" 
                      indicatorClassName="bg-gradient-to-r from-[#6c62e2] to-[#8d86e0]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#393283]">Team Members</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {project.team.map((member, index) => (
                    <div key={index} className="flex items-center">
                      <Users className="h-5 w-5 text-[#6c62e2] mr-3" />
                      <span className="text-gray-600">{member}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#393283]">Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {project.resources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-[#6c62e2] mr-3" />
                        <span className="text-gray-600">{resource}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-[#6c62e2]">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="flex flex-col gap-4">
                <a 
                  href={`https://wa.me/1234567890?text=I'm interested in the project: ${project.title}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-[#393283] hover:bg-[#393283]/90">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact Project Team
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectOverview; 