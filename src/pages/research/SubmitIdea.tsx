import React, { useState } from 'react';
import { motion } from "framer-motion";
import { 
  FileEdit, 
  PenTool, 
  FileText, 
  Printer, 
  Lightbulb,
  HelpCircle,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}> = ({ icon, title, description, color }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`${color} rounded-2xl p-8 text-center flex flex-col items-center space-y-4 shadow-lg`}
  >
    <div className="p-4 bg-white/20 rounded-full">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-white/90 text-sm leading-relaxed">{description}</p>
    <Button
      variant="secondary"
      className="bg-white hover:bg-white/90 text-gray-800 font-medium"
    >
      GET STARTED
    </Button>
  </motion.div>
);

const IdeaSubmissionForm = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Project Title</Label>
        <Input id="title" placeholder="Enter your project title" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Project Description</Label>
        <Textarea 
          id="description" 
          placeholder="Describe your project idea in detail..."
          className="min-h-[150px]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="objectives">Project Objectives</Label>
        <Textarea 
          id="objectives" 
          placeholder="What are the main objectives of your project?"
          className="min-h-[100px]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Contact Email</Label>
        <Input id="email" type="email" placeholder="Enter your email address" />
      </div>
      <Button className="w-full bg-[#6c62e2] hover:bg-[#393283] text-white">
        Submit Project Idea
      </Button>
    </div>
  );
};

const SubmitIdea: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#f0effc]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            variant="ghost"
            className="text-[#393283] hover:text-[#6c62e2] hover:bg-[#6c62e2]/10 -ml-4"
            onClick={() => navigate('/research/artificial-intelligence')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Research
          </Button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#393283] mb-4 leading-tight">
              Transform Your Ideas into Reality
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of services designed to help you bring your research ideas to life
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <ServiceCard
            icon={<PenTool className="h-8 w-8 text-white" />}
            title="Project Development"
            description="Transform your innovative ideas into feasible project concepts with our expert guidance."
            color="bg-[#ff7f6d]"
          />
          
          <ServiceCard
            icon={<FileEdit className="h-8 w-8 text-white" />}
            title="Thesis Writing"
            description="Get professional assistance for your thesis with our ethical writing services."
            color="bg-[#ffd166]"
          />
          
          <ServiceCard
            icon={<FileText className="h-8 w-8 text-white" />}
            title="Paper Writing"
            description="Create plagiarism-free research papers with our professional writing service."
            color="bg-[#7cd992]"
          />
          
          <ServiceCard
            icon={<Printer className="h-8 w-8 text-white" />}
            title="Paper Publication"
            description="Get your research published in prestigious international journals."
            color="bg-[#66d9ed]"
          />
        </div>

        {/* Idea Section */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold text-[#393283] mb-8">
              Do you have an idea?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-8 rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-4 bg-[#6c62e2]/10 rounded-full">
                        <Lightbulb className="h-8 w-8 text-[#6c62e2]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#393283]">I Have an Idea</h3>
                      <p className="text-gray-600 text-sm">
                        Submit your project idea and let's bring it to life together
                      </p>
                      <ChevronRight className="h-5 w-5 text-[#6c62e2]" />
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Submit Your Project Idea</DialogTitle>
                    <DialogDescription>
                      Fill out the form below with your project details. We'll review and get back to you soon.
                    </DialogDescription>
                  </DialogHeader>
                  <IdeaSubmissionForm />
                </DialogContent>
              </Dialog>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 bg-[#393283]/10 rounded-full">
                    <HelpCircle className="h-8 w-8 text-[#393283]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#393283]">I Need Guidance</h3>
                  <p className="text-gray-600 text-sm">
                    Explore our resources and let our experts guide you through the process
                  </p>
                  <ChevronRight className="h-5 w-5 text-[#393283]" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SubmitIdea; 