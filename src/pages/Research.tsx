
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, FlaskRound, BookOpen, Atom, Brain, LightbulbIcon, Microscope, 
  FileText, Rocket, CircleDot, Calendar, Users, Award, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ResearchAreas = [
  {
    icon: <Atom className="h-10 w-10 text-blue-500" />,
    title: "Artificial Intelligence & Machine Learning",
    description: "Developing advanced AI models and algorithms for complex problem-solving across various domains."
  },
  {
    icon: <Brain className="h-10 w-10 text-blue-500" />,
    title: "Quantum Computing",
    description: "Exploring quantum algorithms and computational models to solve previously intractable problems."
  },
  {
    icon: <LightbulbIcon className="h-10 w-10 text-blue-500" />,
    title: "Climate Tech & Sustainability",
    description: "Researching sustainable technologies and data-driven solutions for environmental challenges."
  },
  {
    icon: <Microscope className="h-10 w-10 text-blue-500" />,
    title: "Smart Systems & IoT",
    description: "Creating interconnected systems that analyze and respond to the physical world intelligently."
  }
];

const OngoingProjects = [
  {
    title: "Quantum-Inspired Optimization Algorithms",
    status: "Active",
    timeline: "Jan 2023 - Dec 2024",
    description: "Developing novel optimization algorithms inspired by quantum computing principles for logistics and supply chain management.",
    team: "Dr. Eliza Chen, Dr. Marcus Wong, Sarah Johnson, PhD"
  },
  {
    title: "Sustainability Metrics Platform",
    status: "Active",
    timeline: "Mar 2023 - Jun 2025",
    description: "Creating an AI-powered platform to measure, analyze and optimize sustainability metrics for organizations.",
    team: "Dr. James Patterson, Anita Rodriguez, PhD, Kevin Zhang"
  },
  {
    title: "Edge AI for Remote Healthcare",
    status: "Active",
    timeline: "Sep 2022 - Aug 2024",
    description: "Implementing AI algorithms on edge devices for real-time health monitoring in remote communities.",
    team: "Dr. Sarah Williams, Dr. Ahmed Hassan, Tyler Chen, PhD"
  }
];

const Publications = [
  {
    title: "Journal Paper Preparation",
    description: "Expert assistance with manuscript preparation, from literature review to final submission for high-impact journals."
  },
  {
    title: "Conference Submissions",
    description: "Support for preparing conference abstracts, papers, posters, and presentations with academic rigor."
  },
  {
    title: "Peer Review Support",
    description: "Guidance through the peer-review process, including response to reviewers and manuscript revisions."
  },
  {
    title: "Open Access Publishing",
    description: "Advisory on open access publishing options and compliance with institutional and funding mandates."
  }
];

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-blue-400"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center text-blue-200 hover:text-white transition mb-6">
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <FlaskRound className="h-16 w-16 text-blue-300" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Trizen Research
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mt-3 max-w-2xl">
                Your Partner in Transformative Research and Smart Solutions
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-8">
            <p className="text-lg">
              At Trizen Research, we explore the frontiers of science and technology to build intelligent, sustainable, and impactful solutions for the future. Our multidisciplinary teams innovate in cutting-edge fields to solve the most pressing challenges of our time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">Our Research Mission</h2>
              <p className="text-lg text-slate-700 mb-4">
                We aim to solve real-world challenges through rigorous research, industry collaboration, and open innovation. From developing next-gen AI models to optimizing energy systems and reimagining healthcare with data science, our work blends theory with application.
              </p>
              <p className="text-lg text-slate-700">
                Our research is guided by ethical principles, inclusivity, and a commitment to creating technologies that serve humanity and protect our planet.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-indigo-700 flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Collaborative
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Working across disciplines with industry and academic partners</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-indigo-700 flex items-center">
                    <Rocket className="h-5 w-5 mr-2" />
                    Innovative
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Pushing boundaries with creative approaches to complex problems</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-indigo-700 flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Rigorous
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Committed to scientific excellence and methodological rigor</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-indigo-700 flex items-center">
                    <BarChart className="h-5 w-5 mr-2" />
                    Impact-Driven
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Focused on creating solutions with real-world applications</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Areas Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900">Research Areas</h2>
            <p className="text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
              Our multidisciplinary teams focus on these key areas to drive innovation and impact
            </p>
            <Separator className="w-24 h-1 bg-blue-500 mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {ResearchAreas.map((area, index) => (
              <Card key={index} className="border border-blue-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mb-4 mx-auto">
                    {area.icon}
                  </div>
                  <CardTitle className="text-xl text-center text-indigo-800">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Ongoing Projects Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900">Ongoing Projects</h2>
            <p className="text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
              Explore our current research initiatives pushing the boundaries of what's possible
            </p>
            <Separator className="w-24 h-1 bg-blue-500 mx-auto mt-6" />
          </div>
          
          <div className="space-y-6 mt-12 max-w-4xl mx-auto">
            {OngoingProjects.map((project, index) => (
              <Card key={index} className="border border-blue-100 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 bg-gradient-to-br from-indigo-100 to-blue-50 p-6 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-3">
                      <CircleDot className="h-4 w-4 text-green-500" />
                      <span className="text-green-600 font-medium">{project.status}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-indigo-600" />
                      <span className="text-indigo-600 text-sm">{project.timeline}</span>
                    </div>
                  </div>
                  
                  <CardContent className="w-full md:w-3/4 p-6">
                    <h3 className="text-xl font-semibold text-indigo-800 mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-slate-500 mr-2" />
                      <span className="text-slate-500 text-sm">{project.team}</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Publication Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900">Publication Support</h2>
            <p className="text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
              We provide comprehensive support for researchers throughout the publication process
            </p>
            <Separator className="w-24 h-1 bg-blue-500 mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {Publications.map((publication, index) => (
              <Card key={index} className="border-blue-100 hover:border-blue-200 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-indigo-800 flex items-center">
                    <FileText className="h-5 w-5 text-blue-500 mr-3" />
                    {publication.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{publication.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Innovate with Us?</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
            Connect with our research team to discuss potential collaborations, projects, or research opportunities.
          </p>
          <Button 
            className="bg-white text-indigo-900 hover:bg-blue-100 px-8 py-6 text-lg rounded-full"
          >
            Contact Research Team
            <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Research;
