
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, FlaskRound, Briefcase } from "lucide-react";

const OurWingsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-trizen-light to-white relative overflow-hidden">
      {/* Decorative elements for elevated look */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-trizen-light/60 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-trizen-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-trizen-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-trizen-purple mb-4">Our Wings</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover the various divisions of Trizen and how we're making an impact across multiple domains.
          </p>
          <Separator className="w-32 h-1 bg-trizen-purple mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Trizen Learn */}
          <Card className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-trizen-purple to-trizen-blue"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-trizen-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-6">
                <div className="bg-trizen-light p-4 rounded-full group-hover:bg-trizen-purple/10 transition-colors duration-300">
                  <GraduationCap className="h-10 w-10 text-trizen-purple" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center text-trizen-dark">Trizen Learn</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-lg">
                AI & Machine Learning Training Programs designed to build expertise in cutting-edge technologies.
              </p>
            </CardContent>
          </Card>

          {/* Trizen Research */}
          <Card className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-trizen-purple to-trizen-blue"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-trizen-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-6">
                <div className="bg-trizen-light p-4 rounded-full group-hover:bg-trizen-purple/10 transition-colors duration-300">
                  <FlaskRound className="h-10 w-10 text-trizen-purple" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center text-trizen-dark">Trizen Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 text-center text-lg">
                Innovating tomorrow through cutting-edge research in AI, Quantum, and Sustainable Technologies.
              </p>
              <div className="text-sm text-gray-600 bg-trizen-light/50 p-4 rounded-lg">
                <p className="mb-2">
                  At Trizen Research, we explore the frontiers of science and technology to build intelligent, sustainable, and impactful solutions for the future. Our multidisciplinary teams innovate in areas like Artificial Intelligence, Quantum Computing, Climate Tech, Smart Systems, and Human-Centered Design.
                </p>
                <p>
                  We aim to solve real-world challenges through rigorous research, industry collaboration, and open innovation. From developing next-gen AI models to optimizing energy systems and reimagining healthcare with data science, our work blends theory with application.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Trizen Consulting */}
          <Card className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-trizen-purple to-trizen-blue"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-trizen-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-6">
                <div className="bg-trizen-light p-4 rounded-full group-hover:bg-trizen-purple/10 transition-colors duration-300">
                  <Briefcase className="h-10 w-10 text-trizen-purple" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center text-trizen-dark">Trizen Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 text-center text-lg">
                Your Partner in Digital Transformation
              </p>
              <div className="text-sm text-gray-600 bg-trizen-light/50 p-4 rounded-lg">
                <p className="mb-2">
                  Trizen Consulting empowers businesses, institutions, and startups to navigate their digital transformation journey with confidence. We offer expert solutions in AI, Cloud, Data Analytics, Automation, and Cybersecurity, tailored to meet industry-specific challenges.
                </p>
                <p>
                  Our team collaborates closely with clients to modernize infrastructure, optimize operations, and create impactful customer experiences. From intelligent automation to cloud migration and sustainable innovation, we bring technology and strategy together.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurWingsSection;
