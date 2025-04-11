import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, HTMLMotionProps } from "framer-motion";
import { 
  ArrowRight, Filter, Search, 
  GraduationCap, Code, Briefcase,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const projectsData = {
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    description: "Exploring the frontiers of machine learning and AI applications",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1936&fit=crop",
    projects: [
      {
        id: 1,
        title: "Deep Learning for Medical Image Analysis and Classification",
        summary: "Using advanced neural networks for accurate disease detection in medical imaging",
        type: "major",
        department: "cse",
        year: "2024",
        tags: ["Deep Learning", "Healthcare", "Computer Vision"],
        status: "ongoing"
      },
      {
        id: 2,
        title: "Natural Language Processing for Legal Documents",
        summary: "Automating legal document analysis using state-of-the-art NLP techniques",
        type: "minor",
        department: "cse",
        year: "2024",
        tags: ["NLP", "Legal Tech", "Machine Learning"],
        status: "completed"
      }, 
    
      // Add more projects...
    ]
  },
  "internet-of-things": {
    title: "Internet of Things",
    description: "Revolutionizing data analysis and prediction with machine learning",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1936&fit=crop",
    projects: [
      {
        id: 1,
        title: "Deep Learning for Medical Image Analysis and Classification",
        summary: "Using advanced neural networks for accurate disease detection in medical imaging",
        type: "major",
        department: "cse",
        year: "2024",
        tags: ["Deep Learning", "Healthcare", "Computer Vision"],
        status: "ongoing"
      },
      {
        id: 2,
        title: "Natural Language Processing for Legal Documents",
        summary: "Automating legal document analysis using state-of-the-art NLP techniques",
        type: "minor",
        department: "cse",
        year: "2024",
        tags: ["NLP", "Legal Tech", "Machine Learning"],
        status: "completed"
      },
      // Add more projects...
    ]
  },
      "cybersecurity": {
    title: "Cybersecurity",
    description: "Revolutionizing data analysis and prediction with deep learning",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1936&fit=crop",
    projects: [
      {
        id: 1,
        title: "Deep Learning for Medical Image Analysis and Classification",
        summary: "Using advanced neural networks for accurate disease detection in medical imaging",
        type: "major",
        department: "cse",
        year: "2024",
        tags: ["Deep Learning", "Healthcare", "Computer Vision"],
        status: "ongoing"
      },
      // Add more projects...
    ]
  },
  
        
  // Add more research areas...
};

const ResearchArea = () => {
  const { areaId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const areaData = projectsData[areaId as keyof typeof projectsData];

  if (!areaData) return <div>Research area not found</div>;

  const filteredProjects = areaData.projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || project.type === selectedType;
    const matchesDepartment = selectedDepartment === "all" || project.department === selectedDepartment;
    const matchesYear = selectedYear === "all" || project.year === selectedYear;

    return matchesSearch && matchesType && matchesDepartment && matchesYear;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f0effc]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={areaData.image}
            alt={areaData.title}
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="secondary" className="bg-[#6c62e2]/30 text-white mb-4">
              Research Area
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {areaData.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {areaData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Project Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="major">Major Project</SelectItem>
                  <SelectItem value="minor">Minor Project</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="cse">Computer Science</SelectItem>
                  <SelectItem value="ece">Electronics</SelectItem>
                  <SelectItem value="mech">Mechanical</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                {...({} as HTMLMotionProps<"div">)}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="bg-[#6c62e2] text-white">
                        {project.type.toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className={
                        project.status === "ongoing" 
                          ? "border-green-500 text-green-600"
                          : "border-blue-500 text-blue-600"
                      }>
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-[#393283] line-clamp-2">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-[#f0effc] text-[#393283]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <Link to={`/project/${project.id}`}>
                        <Button variant="outline" className="text-[#393283] border-[#8d86e0] hover:bg-[#8d86e0]/10">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <a 
                        href={`https://wa.me/1234567890?text=I'm interested in the project: ${project.title}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" className="text-[#393283]">
                          <MessageCircle className="h-5 w-5" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResearchArea; 