import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, HTMLMotionProps } from "framer-motion";
import { 
  ArrowLeft, MessageCircle, Calendar, 
  Users, BookOpen, FileText, Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

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
    ]
  },
  2: {
    title: "Natural Language Processing for Legal Documents",
    summary: "Using NLP for efficient document analysis and classification",
    description: "This project focuses on developing natural language processing models for automated analysis of legal documents. The system uses transformers to classify and summarize legal documents, helping legal professionals save time and improve accuracy.",
    type: "major",
    department: "cse",
    year: "2024",
    tags: ["Natural Language Processing", "Legal Documents", "Transformers"],
    status: "completed",
    team: ["Dr. John Smith", "Emily Chen", "Michael Brown"],
    timeline: "February 2024 - November 2024",
    deliverables: [
      "Research paper on transformer model performance",
      "Model training and evaluation results",
      "Web-based interface for legal document analysis"
    ],
    resources: [
      "Model Training Data",
      "Evaluation Metrics",
      "User Manual"
    ]
  }

  // Add more project details...
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectDetails[Number(projectId) as keyof typeof projectDetails];

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen flex flex-col bg-[#f0effc]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[300px] flex items-center">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#393283] to-[#8d86e0]"></div>
        <div className="relative z-10 container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
            {...({} as HTMLMotionProps<"div">)}
          >
            <Link to="/research/artificial-intelligence">
              <Button  className="text-white bg-transparent hover:bg-transparent hover:border-white hover:text-white/80 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
            <Badge variant="secondary" className="bg-white/20 text-white mb-4">
              {project.type.toUpperCase()} PROJECT
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {project.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
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
                  <CardTitle className="text-2xl text-[#393283]">Project Deliverables</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {project.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <BookOpen className="h-5 w-5 text-[#6c62e2]" />
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
                  <CardTitle className="text-xl text-[#393283]">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-[#6c62e2] mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Timeline</p>
                      <p className="text-gray-600">{project.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-[#6c62e2] mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Team Members</p>
                      <div className="space-y-1">
                        {project.team.map((member, index) => (
                          <p key={index} className="text-gray-600">{member}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="outline" className={
                      project.status === "ongoing" 
                        ? "border-green-500 text-green-600"
                        : "border-blue-500 text-blue-600"
                    }>
                      {project.status}
                    </Badge>
                  </div>
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

export default ProjectDetails; 