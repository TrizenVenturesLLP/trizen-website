
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, FlaskRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Research = () => {
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
                <FlaskRound className="h-12 w-12 text-trizen-purple" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-trizen-purple">Trizen Research</h1>
                <p className="text-xl text-gray-600 mt-2">Innovating tomorrow through cutting-edge research in AI, Quantum, and Sustainable Technologies.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg">
                  At Trizen Research, we explore the frontiers of science and technology to build intelligent, sustainable, and impactful solutions for the future. Our multidisciplinary teams innovate in areas like Artificial Intelligence, Quantum Computing, Climate Tech, Smart Systems, and Human-Centered Design.
                </p>
                
                <p className="text-lg mt-4">
                  We aim to solve real-world challenges through rigorous research, industry collaboration, and open innovation. From developing next-gen AI models to optimizing energy systems and reimagining healthcare with data science, our work blends theory with application.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-trizen-light/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-trizen-purple mb-3">Research Areas</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-trizen-purple rounded-full mr-3"></div>
                        <span>Artificial Intelligence & Machine Learning</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-trizen-purple rounded-full mr-3"></div>
                        <span>Quantum Computing</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-trizen-purple rounded-full mr-3"></div>
                        <span>Climate Tech & Sustainability</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-trizen-purple rounded-full mr-3"></div>
                        <span>Smart Systems & IoT</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-trizen-light/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-trizen-purple mb-3">Our Approach</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-trizen-purple rounded-full mr-3"></div>
                        <span>Rigorous scientific methodology</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-trizen-purple rounded-full mr-3"></div>
                        <span>Industry-academic collaborations</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-trizen-purple rounded-full mr-3"></div>
                        <span>Open innovation frameworks</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-trizen-purple rounded-full mr-3"></div>
                        <span>End-to-end solution development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
