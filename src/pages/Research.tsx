import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, Atom, Brain, Download, FileText, 
  FlaskConical, Lightbulb, LineChart, Lock, 
  Microscope, Network, Rocket, ScrollText, Users, 
  Zap, BarChart4, Calendar, Clock, ThumbsUp,
  ArrowLeft, BookText, CheckCircle, ChevronRight, MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion, HTMLMotionProps } from "framer-motion";
import HexagonBackground from "@/components/HexagonBackground";

// Research Areas Data
const researchAreas = [
  {
    category: "technology",
    icon: <Atom className="h-10 w-10 text-[#393283]" />,
    title: "Artificial Intelligence",
    description: "Machine learning algorithms, neural networks, and AI applications across industries",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    category: "technology",
    icon: <Lock className="h-10 w-10 text-[#393283]" />,
    title: "Cybersecurity",
    description: "Advanced threat detection, secure systems architecture, and privacy-preserving technologies",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    category: "technology",
    icon: <Network className="h-10 w-10 text-[#393283]" />,
    title: "Internet of Things",
    description: "Connected devices, smart systems, and intelligent infrastructure solutions",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    category: "healthcare",
    icon: <Microscope className="h-10 w-10 text-[#393283]" />,
    title: "Healthcare Innovation",
    description: "Medical technology, digital health solutions, and patient care systems",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    category: "healthcare",
    icon: <Brain className="h-10 w-10 text-[#393283]" />,
    title: "Neuroscience",
    description: "Brain-computer interfaces, cognitive science, and neural development research",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    category: "social",
    icon: <Zap className="h-10 w-10 text-[#393283]" />,
    title: "Climate Technology",
    description: "Environmental monitoring, renewable energy, and sustainable solutions",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    category: "social",
    icon: <LineChart className="h-10 w-10 text-[#393283]" />,
    title: "Economic Systems",
    description: "Financial technology, economic modeling, and market analysis research",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    category: "social",
    icon: <Users className="h-10 w-10 text-[#393283]" />,
    title: "Social Computing",
    description: "Human-computer interaction, social network analysis, and digital communities",
    color: "from-indigo-500 to-indigo-700"
  }
];

// Ongoing Projects Data
const ongoingProjects = [
  {
    title: "Quantum-Inspired Optimization Algorithms",
    objective: "Developing novel optimization algorithms inspired by quantum computing principles for complex logistics and supply chain management",
    progress: 68,
    lead: "Dr. Eliza Chen",
    team: ["Dr. Marcus Wong", "Sarah Johnson, PhD", "Alan Parker"],
    timeline: "Jan 2023 - Dec 2024",
    category: "Technology"
  },
  {
    title: "Sustainability Metrics Platform",
    objective: "Creating an AI-powered platform to measure, analyze and optimize sustainability metrics for organizations across industries",
    progress: 42,
    lead: "Dr. James Patterson",
    team: ["Anita Rodriguez, PhD", "Kevin Zhang", "Lisa Montgomery"],
    timeline: "Mar 2023 - Jun 2025",
    category: "Environment"
  },
  {
    title: "Smart Healthcare Monitoring",
    objective: "Implementing edge AI algorithms for real-time health monitoring in remote communities with limited infrastructure",
    progress: 75,
    lead: "Dr. Sarah Williams",
    team: ["Dr. Ahmed Hassan", "Tyler Chen, PhD", "Monica Reeves"],
    timeline: "Sep 2022 - Aug 2024",
    category: "Healthcare"
  },
  {
    title: "Cognitive Systems for Education",
    objective: "Building adaptive learning platforms that personalize educational content based on cognitive patterns and learning styles",
    progress: 35,
    lead: "Dr. Michael Torres",
    team: ["Dr. Leila Patel", "Robert Garcia", "Jennifer Wu"],
    timeline: "Nov 2023 - Oct 2025",
    category: "Education"
  }
];

// Publication Support Steps
const publicationSteps = [
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
    title: "Topic Selection & Refinement",
    description: "Get expert guidance on selecting a research topic with publication potential and defining a clear scope",
    action: "Schedule Consultation"
  },
  {
    icon: <ScrollText className="h-8 w-8 text-blue-500" />,
    title: "Writing & Methodology Support",
    description: "Receive assistance with research design, methodology, data analysis, and manuscript preparation",
    action: "Writing Resources"
  },
  {
    icon: <FileText className="h-8 w-8 text-blue-500" />,
    title: "Journal Selection & Submission",
    description: "Get recommendations for appropriate journals and assistance with the submission process",
    action: "Journal Database"
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
    title: "Review Response & Publication",
    description: "Expert help with addressing reviewer comments and finalizing your paper for publication",
    action: "Response Templates"
  }
];

// Testimonials Data
const testimonials = [
  {
    quote: "Trizen Research support was instrumental in helping our team publish in a top-tier IEEE journal. Their methodology guidance and review process made all the difference.",
    name: "Dr. Samantha Lee",
    role: "Associate Professor, Stanford University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    quote: "The publication support team at Trizen helped me navigate the complex world of academic publishing. Their journal recommendations and submission guidance were invaluable.",
    name: "Prof. David Chang",
    role: "Research Lead, MIT",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    quote: "From initial research concept to final publication, Trizen Research provided exceptional support. Their expertise in our field made collaborative research truly efficient.",
    name: "Dr. Aisha Johnson",
    role: "Director of Research, ETH Zurich",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  }
];

// Stats Data
const stats = [
  { value: "150+", label: "Research Projects", icon: <FlaskConical className="h-5 w-5" /> },
  { value: "85+", label: "Papers Published", icon: <BookText className="h-5 w-5" /> },
  { value: "120+", label: "Researchers Supported", icon: <Users className="h-5 w-5" /> },
  { value: "40+", label: "Academic Partners", icon: <Rocket className="h-5 w-5" /> }
];

const Research = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  
  // Filter research areas based on selected category
  const filteredAreas = selectedTab === "all" 
    ? researchAreas 
    : researchAreas.filter(area => area.category === selectedTab);

  return (
    <div className="min-h-screen flex flex-col bg-[#f0effc]">
   <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Background Image with Grayscale */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            alt="Research Background" 
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto ">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[600px] py-20">
            <div className="w-full lg:w-2/3 text-center mx-auto">
              <div className="max-w-4xl w-full mx-auto lg:mx-0">
                <div className="inline-flex items-center justify-center p-2 bg-[#6c62e2]/30 backdrop-blur-sm rounded-full mb-6">
                  <Badge variant="secondary" className="bg-[#f0effc] text-[#393283]">
                    Trizen Research
                  </Badge>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                  Innovate, Research, Transform
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
                  Empowering Academic Research and Real-World Solutions
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mt-10">
                  <Button size="lg" className="bg-[#f0effc] text-[#393283] hover:bg-[#8d86e0]/20">
                    Explore Research Areas
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#8d86e0] text-[#393283] hover:bg-[#8d86e0]/10">
                    Join a Project
                    <Users className="ml-1 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#8d86e0] text-[#393283] hover:bg-[#8d86e0]/10">
                    Publish With Us
                    <FileText className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Counter */}
        <div className="relative z-10 w-full bg-black/40 backdrop-blur-sm py-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#8d86e0]">{stat.icon}</span>
                    <span className="text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Our Research Mission</h2>
            <p className="text-lg text-slate-600">
              Trizen Research supports students, educators, and professionals in executing meaningful research, 
              publishing papers, and driving impactful innovation in an increasingly complex world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-[#a7b2fa] bg-[#eef1ff] hover:shadow-md transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-[#c9d0fc] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-[#393283]" />
                </div>
                <CardTitle className="text-xl text-[#393283]">Innovation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Pioneering research that bridges academic theory with real-world applications,
                  driving forward technological and social innovation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-[#a7b2fa] bg-[#eef1ff] hover:shadow-md transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-[#c9d0fc] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookText className="h-8 w-8 text-[#393283]" />
                </div>
                <CardTitle className="text-xl text-[#393283]">Publications</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Supporting researchers through every step of the publication process, from
                  ideation to journal submission and successful publication.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-[#a7b2fa] bg-[#eef1ff] hover:shadow-md transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-[#c9d0fc] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#393283]" />
                </div>
                <CardTitle className="text-xl text-[#393283]">Collaboration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Fostering partnerships between academia, industry, and government to create
                  interdisciplinary research with meaningful impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Research Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Research Areas</h2>
            <p className="text-lg text-slate-600 mb-8">
              Explore our diverse research domains where we're making significant contributions
            </p>
            
            <Tabs defaultValue="all" onValueChange={setSelectedTab} className="w-full max-w-md mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                <TabsTrigger value="social">Social Science</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAreas.map((area, index) => (
              <Link 
                key={index} 
                to={`/research/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="block"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                  {...({} as HTMLMotionProps<"div">)}
                >
                  <Card className="overflow-hidden border-[#a7b2fa] bg-[#eef1ff] hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                    <div className={`bg-gradient-to-br ${area.color} p-1`}></div>
                    <CardHeader className="pt-6">
                      <div className="mb-4 text-[#393283]">{area.icon}</div>
                      <CardTitle className="text-xl text-[#393283]">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-slate-600">{area.description}</p>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button variant="outline" className="text-[#5b4ae1] border-[#c9d0fc] hover:bg-[#eef1ff] group-hover:border-[#6b67ed] transition-all">
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Ongoing Projects Section */}
      <section className="py-20 bg-gradient-to-b from-[#f0effc] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="bg-[#6c62e2]/20 text-[#393283] mb-4">
              Active Research
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#393283] mb-4">
              Ongoing Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Current research initiatives pushing the boundaries of what's possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {ongoingProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                {...({} as HTMLMotionProps<"div">)}
              >
                <Card className="h-full border-[#8d86e0]/20 hover:border-[#8d86e0]/40 transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row h-full">
                    <div className="w-full lg:w-1/3 bg-gradient-to-br from-[#6c62e2]/5 to-[#8d86e0]/10 p-6 flex flex-col justify-between">
                      <div>
                        <Badge variant="secondary" className="bg-[#6c62e2]/20 text-[#393283] mb-3">
                          {project.category}
                        </Badge>
                        <div className="flex items-center space-x-2 mb-4">
                          <Clock className="h-4 w-4 text-[#6c62e2]" />
                          <span className="text-sm text-[#393283]">{project.timeline}</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-[#393283]">Progress</span>
                            <span className="text-sm font-medium text-[#6c62e2]">{project.progress}%</span>
                          </div>
                          <Progress 
                            value={project.progress} 
                            className="h-2 bg-[#8d86e0]/20" 
                            indicatorClassName="bg-gradient-to-r from-[#6c62e2] to-[#8d86e0]"
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <p className="text-sm text-[#393283] font-medium mb-2">Research Lead</p>
                        <p className="text-sm text-gray-600">{project.lead}</p>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-[#393283] mb-3 group-hover:text-[#6c62e2] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {project.objective}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-[#393283] font-medium mb-2">Team Members</p>
                          <div className="flex flex-wrap gap-2">
                            {project.team.map((member, i) => (
                              <Badge 
                                key={i} 
                                variant="outline" 
                                className="bg-[#f0effc] text-[#393283] border-[#8d86e0]/20 hover:border-[#8d86e0]/40"
                              >
                                {member}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-4">
                          <Link to={`/ongoing-project/${index + 1}`}>
                            <Button 
                              variant="outline" 
                              className="text-[#393283] border-[#8d86e0] hover:bg-[#8d86e0]/10 group-hover:border-[#6c62e2]"
                            >
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                          <a 
                            href={`https://wa.me/1234567890?text=I'm interested in the project: ${project.title}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Button variant="ghost" className="text-[#393283] hover:text-[#6c62e2]">
                              <MessageCircle className="h-5 w-5" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Publication Support Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[f0effc">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Publication Support</h2>
            <p className="text-lg text-slate-600 mb-8">
              From concept to publication, we support your complete research journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {publicationSteps.map((step, index) => (
              <Card key={index} className="border-[#a7b2fa] bg-[#eef1ff] hover:shadow-md transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg text-indigo-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600">{step.description}</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                    {step.action}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="max-w-2xl mx-auto  text-center">
            <div className="bg-[#e1e6fe] hover:shadow-lg hover:shadow-[#a7b2fa] transition-all rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Research Resources</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <Button variant="outline" className="w-full justify-start text-indigo-700 border-indigo-200">
                  <Download className="mr-2 h-4 w-4" />
                  Research Methodology Guide
                </Button>
                <Button variant="outline" className="w-full justify-start text-indigo-700 border-indigo-200">
                  <Download className="mr-2 h-4 w-4" />
                  Journal Submission Checklist
                </Button>
                <Button variant="outline" className="w-full justify-start text-indigo-700 border-indigo-200">
                  <Download className="mr-2 h-4 w-4" />
                  APA/IEEE Citation Templates
                </Button>
                <Button variant="outline" className="w-full justify-start text-indigo-700 border-indigo-200">
                  <Download className="mr-2 h-4 w-4" />
                  Data Analysis Framework
                </Button>
              </div>
            </div>
            
            <Button className="bg-indigo-600 hover:bg-indigo-700 px-8" size="lg">
              Get Publication Help
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600">
              Hear from researchers who've partnered with Trizen Research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-[#a7b2fa] bg-[#eef1ff] hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-indigo-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Collaborate Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#393283]/90 via-[#6c62e2]/90 to-[#8d86e0]/90"></div>
        <HexagonBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white/10 text-white mb-4 backdrop-blur-sm border-white/20">
              Join Our Research Community
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Collaborate With Us
            </h2>
            <p className="text-xl text-blue-100/90 mb-12 max-w-2xl mx-auto">
              Partner with Trizen Research to drive innovation and create impact through collaborative research
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 h-full shadow-lg shadow-black/10">
                  <CardHeader>
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white">Submit Research Idea</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100/80">Share your innovative research concepts with our team</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 h-full shadow-lg shadow-black/10">
                  <CardHeader>
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white">Propose a Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100/80">Launch your research initiative with our support</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 h-full shadow-lg shadow-black/10">
                  <CardHeader>
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white">Become a Mentor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100/80">Guide the next generation of researchers</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                className="bg-white text-[#393283] hover:bg-blue-50 px-8 py-6 text-lg font-semibold shadow-lg shadow-black/20"
              >
                Contact Research Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Research;
