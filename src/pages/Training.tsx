
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Training = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-trizen-light to-white relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-trizen-purple/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-trizen-blue/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-block mb-8">
              <Button variant="outline" className="gap-2">
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
            
            <div className="flex items-center mb-8">
              <div className="bg-trizen-light p-6 rounded-full mr-6">
                <GraduationCap className="h-12 w-12 text-trizen-purple" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-trizen-purple">Trizen Training</h1>
                <p className="text-xl text-gray-600 mt-2">Empowering Future-Ready Talent with Industry-Aligned Skills</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg">
                  Trizen Training provides a comprehensive portfolio of technical courses, hands-on workshops, and globally recognized certifications to help individuals, students, and organizations acquire, upgrade, and optimize in-demand IT and emerging tech skills.
                </p>
                
                <p className="text-lg mt-4">
                  Our curriculum is designed in collaboration with industry experts to ensure relevance, innovation, and job readiness. Whether you're a beginner, a professional, or a corporate team, we offer flexible learning paths in:
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <li className="bg-trizen-light/50 p-4 rounded-lg flex items-center">
                    <div className="w-3 h-3 bg-trizen-purple rounded-full mr-3"></div>
                    <span>Artificial Intelligence & Machine Learning</span>
                  </li>
                  <li className="bg-trizen-light/50 p-4 rounded-lg flex items-center">
                    <div className="w-3 h-3 bg-trizen-purple rounded-full mr-3"></div>
                    <span>Cloud Computing & DevOps</span>
                  </li>
                  <li className="bg-trizen-light/50 p-4 rounded-lg flex items-center">
                    <div className="w-3 h-3 bg-trizen-purple rounded-full mr-3"></div>
                    <span>Data Science & Analytics</span>
                  </li>
                  <li className="bg-trizen-light/50 p-4 rounded-lg flex items-center">
                    <div className="w-3 h-3 bg-trizen-purple rounded-full mr-3"></div>
                    <span>Cybersecurity & Ethical Hacking</span>
                  </li>
                  <li className="bg-trizen-light/50 p-4 rounded-lg flex items-center">
                    <div className="w-3 h-3 bg-trizen-purple rounded-full mr-3"></div>
                    <span>Web & App Development</span>
                  </li>
                  <li className="bg-trizen-light/50 p-4 rounded-lg flex items-center">
                    <div className="w-3 h-3 bg-trizen-purple rounded-full mr-3"></div>
                    <span>IoT, Blockchain, and more</span>
                  </li>
                </ul>
                
                <p className="text-lg mt-6">
                  Trizen Training also partners with educational institutions to deliver industry-integrated courses and project-based learning modules — bridging the gap between academia and the real world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Training;
