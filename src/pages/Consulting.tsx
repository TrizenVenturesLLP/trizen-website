
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Consulting = () => {
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
                <Briefcase className="h-12 w-12 text-trizen-purple" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-trizen-purple">Trizen Consulting</h1>
                <p className="text-xl text-gray-600 mt-2">Your Partner in Digital Transformation</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg">
                  Trizen Consulting empowers businesses, institutions, and startups to navigate their digital transformation journey with confidence. We offer expert solutions in AI, Cloud, Data Analytics, Automation, and Cybersecurity, tailored to meet industry-specific challenges.
                </p>
                
                <p className="text-lg mt-4">
                  Our team collaborates closely with clients to modernize infrastructure, optimize operations, and create impactful customer experiences. From intelligent automation to cloud migration and sustainable innovation, we bring technology and strategy together.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-trizen-light/80 to-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-trizen-purple mb-3">Strategic Advisory</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Digital Transformation Roadmaps</li>
                      <li>Technology Strategy & Architecture</li>
                      <li>Innovation Management</li>
                      <li>Change Management</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-trizen-light/80 to-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-trizen-purple mb-3">Technology Solutions</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>AI & Machine Learning Integration</li>
                      <li>Cloud Migration & Optimization</li>
                      <li>Data Analytics & Visualization</li>
                      <li>Process Automation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-trizen-light/80 to-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-trizen-purple mb-3">Industry Expertise</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Financial Services</li>
                      <li>Healthcare & Life Sciences</li>
                      <li>Manufacturing & Supply Chain</li>
                      <li>Retail & E-commerce</li>
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

export default Consulting;
