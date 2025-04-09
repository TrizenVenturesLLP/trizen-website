
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, FlaskRound, Briefcase } from "lucide-react";

const OurWingsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trizen-purple mb-4">Our Wings</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover the various divisions of Trizen and how we're making an impact across multiple domains.
          </p>
          <Separator className="w-24 h-1 bg-trizen-purple mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Trizen Learn */}
          <Card className="border-t-4 border-t-trizen-purple transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <div className="bg-trizen-light p-3 rounded-full">
                  <GraduationCap className="h-8 w-8 text-trizen-purple" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center text-trizen-dark">Trizen Learn</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                AI & Machine Learning Training Programs designed to build expertise in cutting-edge technologies.
              </p>
            </CardContent>
          </Card>

          {/* Trizen Research */}
          <Card className="border-t-4 border-t-trizen-purple transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <div className="bg-trizen-light p-3 rounded-full">
                  <FlaskRound className="h-8 w-8 text-trizen-purple" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center text-trizen-dark">Trizen Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 text-center">
                Innovating tomorrow through cutting-edge research in AI, Quantum, and Sustainable Technologies.
              </p>
              <div className="text-sm text-gray-600">
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
          <Card className="border-t-4 border-t-trizen-purple transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <div className="bg-trizen-light p-3 rounded-full">
                  <Briefcase className="h-8 w-8 text-trizen-purple" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center text-trizen-dark">Trizen Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 text-center">
                Your Partner in Digital Transformation
              </p>
              <div className="text-sm text-gray-600">
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
