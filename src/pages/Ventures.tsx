
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Ventures = () => {
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
                <Rocket className="h-12 w-12 text-trizen-purple" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-trizen-purple">Trizen Ventures</h1>
                <p className="text-xl text-gray-600 mt-2">From Vision to Venture — Powered by Trizen</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg">
                  Trizen Ventures is the strategic innovation and investment arm of Trizen, dedicated to supporting visionary startups and mission-driven innovators in AI, EdTech, AgriTech, HealthTech, and Sustainability.
                </p>
                
                <p className="text-lg mt-4">
                  We empower early-stage entrepreneurs not just with capital, but with deep mentorship, technical infrastructure, research collaboration, and go-to-market support. Backed by Trizen's core strengths—Research, Consulting, and Training—our venture ecosystem bridges academia, industry, and innovation to help founders scale responsibly and build for long-term impact.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-white to-trizen-light/30 rounded-xl p-6 border border-trizen-light shadow-sm">
                    <h3 className="text-xl font-semibold text-trizen-purple mb-3">Investment Focus</h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-3 py-1 bg-trizen-purple/10 text-trizen-purple rounded-full text-sm">AI & Machine Learning</span>
                      <span className="px-3 py-1 bg-trizen-purple/10 text-trizen-purple rounded-full text-sm">EdTech</span>
                      <span className="px-3 py-1 bg-trizen-purple/10 text-trizen-purple rounded-full text-sm">AgriTech</span>
                      <span className="px-3 py-1 bg-trizen-purple/10 text-trizen-purple rounded-full text-sm">HealthTech</span>
                      <span className="px-3 py-1 bg-trizen-purple/10 text-trizen-purple rounded-full text-sm">Sustainability</span>
                      <span className="px-3 py-1 bg-trizen-purple/10 text-trizen-purple rounded-full text-sm">Climate Tech</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-trizen-light/30 rounded-xl p-6 border border-trizen-light shadow-sm">
                    <h3 className="text-xl font-semibold text-trizen-purple mb-3">Founder Support</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-trizen-purple rounded-full mr-3 mt-2"></div>
                        <span>Strategic capital investment</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-trizen-purple rounded-full mr-3 mt-2"></div>
                        <span>Technical infrastructure & research collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-trizen-purple rounded-full mr-3 mt-2"></div>
                        <span>Mentorship from industry experts</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-trizen-purple rounded-full mr-3 mt-2"></div>
                        <span>Go-to-market strategy & customer acquisition</span>
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

export default Ventures;
