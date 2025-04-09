
import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, ArrowLeft, ChevronRight, BarChart3, Brain, Cloud, Database, Lock, PenTool, School, Building, HeartPulse, ShoppingBag, PiggyBank, Zap, Landmark } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const Consulting = () => {
  const { toast } = useToast();
  
  // Form validation schema
  const formSchema = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Valid email is required" }),
    company: z.string().min(2, { message: "Company name is required" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  });

  // Form initialization
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Consultation request received",
      description: "We'll be in touch with you shortly.",
    });
    form.reset();
  };
  
  // Services data
  const services = [
    {
      icon: <PenTool size={36} className="text-teal-500" />,
      title: "Business Strategy",
      description: "Develop robust business models and growth strategies aligned with your company vision."
    },
    {
      icon: <Database size={36} className="text-teal-500" />,
      title: "IT Consulting",
      description: "Optimize your technology infrastructure and digital systems for maximum efficiency."
    },
    {
      icon: <Brain size={36} className="text-teal-500" />,
      title: "AI/Automation Solutions",
      description: "Leverage AI and automation to streamline operations and enhance decision-making."
    },
    {
      icon: <Cloud size={36} className="text-teal-500" />,
      title: "Cloud & DevOps",
      description: "Modernize your applications with scalable cloud solutions and efficient DevOps practices."
    },
    {
      icon: <Lock size={36} className="text-teal-500" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security strategies and implementations."
    },
    {
      icon: <BarChart3 size={36} className="text-teal-500" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that drive business growth and innovation."
    }
  ];
  
  // Industries data
  const industries = [
    { icon: <School className="h-8 w-8" />, name: "Education" },
    { icon: <HeartPulse className="h-8 w-8" />, name: "Healthcare" },
    { icon: <ShoppingBag className="h-8 w-8" />, name: "Retail" },
    { icon: <PiggyBank className="h-8 w-8" />, name: "Finance" },
    { icon: <Zap className="h-8 w-8" />, name: "Energy" },
    { icon: <Building className="h-8 w-8" />, name: "Enterprise" },
    { icon: <Landmark className="h-8 w-8" />, name: "Government" }
  ];
  
  // Case studies data
  const caseStudies = [
    {
      title: "Digital Transformation for Financial Services",
      problem: "Legacy systems limiting growth and customer experience",
      solution: "Cloud migration and API-first architecture implementation",
      result: "40% faster time-to-market and 25% operational cost reduction",
      client: "Major Financial Institution",
      quote: "Trizen transformed our digital capabilities while maintaining security and compliance standards."
    },
    {
      title: "AI-Powered Analytics Platform",
      problem: "Inability to leverage massive customer data for insights",
      solution: "Custom AI data analytics solution with real-time dashboards",
      result: "Identified $2.3M in potential revenue opportunities within first quarter",
      client: "Retail Chain",
      quote: "The insights generated have completely transformed how we approach our customer relationships."
    },
    {
      title: "Healthcare Process Automation",
      problem: "Staff overwhelmed with administrative tasks",
      solution: "End-to-end workflow automation with ML-based prioritization",
      result: "Reduced administrative time by 60%, improving patient care metrics",
      client: "Regional Hospital Network",
      quote: "Our staff can now focus on patient care rather than paperwork, which has been transformative."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Transforming Strategy into Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Helping businesses unlock growth through technology, innovation, and expertise.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#services">
                <Button variant="default" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2">
                  Our Services
                </Button>
              </a>
              <a href="#consultation">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-2">
                  Talk to a Consultant
                </Button>
              </a>
              <a href="#case-studies">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-2">
                  View Case Studies
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-teal-600 border-teal-200 bg-teal-50">About Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Trizen Consulting</h2>
            <p className="text-xl text-gray-600 mb-8">
              We partner with startups, mid-sized businesses, and enterprise organizations to navigate complex challenges 
              and drive successful digital transformation. Our team of experts combines 
              industry knowledge with technical expertise to deliver impactful solutions.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium">
                <span className="text-teal-600 font-semibold">Strategic thinking meets smart execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-teal-600 border-teal-200 bg-teal-50">What We Do</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Core Consulting Services</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              We offer a comprehensive range of consulting services to help your business thrive in today's digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="ghost" className="text-teal-600 hover:text-teal-700 p-0 flex items-center">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-teal-600 border-teal-200 bg-teal-50">Our Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Industries We Serve</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              We bring specialized knowledge and tailored solutions to diverse industries.
            </p>
          </div>
          
          <div className="flex overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex gap-6 min-w-max">
              {industries.map((industry, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-none w-56 bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-teal-500/10 rounded-full p-4 inline-flex mb-4">
                    <div className="text-teal-600">{industry.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{industry.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-teal-600 border-teal-200 bg-teal-50">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Case Studies & Client Success</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Discover how we've helped organizations overcome challenges and achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-gray-800 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-300 text-sm">Client: {study.client}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">CHALLENGE</h4>
                    <p className="text-gray-700">{study.problem}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">SOLUTION</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">RESULT</h4>
                    <p className="text-gray-700">{study.result}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg italic text-gray-600 mb-4">
                    "{study.quote}"
                  </div>
                  <Button variant="ghost" className="text-teal-600 hover:text-teal-700 flex items-center">
                    See Full Case Study <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-teal-600 border-teal-200 bg-teal-50">Our Methodology</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Approach</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              A proven methodology that delivers consistent results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="bg-teal-500/10 rounded-full p-6 inline-flex mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <div className="absolute top-1/2 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">1. Discover</h3>
              <p className="text-gray-600">
                We assess your current state, understand your business goals, and identify key challenges and opportunities.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="bg-teal-500/10 rounded-full p-6 inline-flex mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div className="absolute top-1/2 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">2. Design</h3>
              <p className="text-gray-600">
                We develop a strategic plan with tailored solutions and a detailed roadmap for implementation.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="bg-teal-500/10 rounded-full p-6 inline-flex mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">3. Deliver</h3>
              <p className="text-gray-600">
                We execute the plan, measure outcomes, and ensure sustainable results with ongoing support.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex justify-center space-x-12 max-w-3xl mx-auto">
              <div className="text-center">
                <h4 className="text-4xl font-bold text-gray-800 mb-2">100+</h4>
                <p className="text-gray-600">Solutions Delivered</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-gray-800 mb-2">90%</h4>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-gray-800 mb-2">15+</h4>
                <p className="text-gray-600">Industries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-1 text-teal-300 border-teal-800 bg-teal-900/30">Get Started</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Consultation</h2>
              <p className="text-xl text-gray-300">
                Let's discuss how Trizen Consulting can help your business achieve its goals.
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-gray-800 border-gray-700 text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-gray-800 border-gray-700 text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-200">Company/Organization</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company" {...field} className="bg-gray-800 border-gray-700 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-200">How can we help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe your challenges and objectives..."
                          className="min-h-[120px] bg-gray-800 border-gray-700 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  Schedule a Discovery Call
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
      
      {/* Sticky CTA */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6 py-6 shadow-lg flex items-center">
          <span className="mr-2">Talk to an Expert</span>
          <ArrowRight size={16} />
        </Button>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Consulting;
