import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, Atom, Brain, Download, FileText, 
  FlaskConical, Lightbulb, LineChart, Lock, 
  Microscope, Network, Rocket, ScrollText, Users, 
  Zap, BarChart4, Calendar, Clock, ThumbsUp,
  ArrowLeft, BookText, CheckCircle, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion, HTMLMotionProps } from "framer-motion";

// Research Areas Data
const researchAreas = [
  {
    category: "technology",
    icon: <Atom className="h-10 w-10 text-blue-500" />,
    title: "Artificial Intelligence",
    description: "Machine learning algorithms, neural networks, and AI applications across industries",
    color: "from-indigo-500 to-blue-600"
  },
  {
    category: "technology",
    icon: <Lock className="h-10 w-10 text-blue-500" />,
    title: "Cybersecurity",
    description: "Advanced threat detection, secure systems architecture, and privacy-preserving technologies",
    color: "from-blue-600 to-indigo-700"
  },
  {
    category: "technology",
    icon: <Network className="h-10 w-10 text-blue-500" />,
    title: "Internet of Things",
    description: "Connected devices, smart systems, and intelligent infrastructure solutions",
    color: "from-indigo-600 to-blue-700"
  },
  {
    category: "healthcare",
    icon: <Microscope className="h-10 w-10 text-blue-500" />,
    title: "Healthcare Innovation",
    description: "Medical technology, digital health solutions, and patient care systems",
    color: "from-blue-500 to-indigo-600"
  },
  {
    category: "healthcare",
    icon: <Brain className="h-10 w-10 text-blue-500" />,
    title: "Neuroscience",
    description: "Brain-computer interfaces, cognitive science, and neural development research",
    color: "from-indigo-700 to-blue-500"
  },
  {
    category: "social",
    icon: <Zap className="h-10 w-10 text-blue-500" />,
    title: "Climate Technology",
    description: "Environmental monitoring, renewable energy, and sustainable solutions",
    color: "from-blue-600 to-indigo-500"
  },
  {
    category: "social",
    icon: <LineChart className="h-10 w-10 text-blue-500" />,
    title: "Economic Systems",
    description: "Financial technology, economic modeling, and market analysis research",
    color: "from-indigo-500 to-blue-600"
  },
  {
    category: "social",
    icon: <Users className="h-10 w-10 text-blue-500" />,
    title: "Social Computing",
    description: "Human-computer interaction, social network analysis, and digital communities",
    color: "from-blue-500 to-indigo-600"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Our Research Mission</h2>
            <p className="text-lg text-slate-600">
              Trizen Research supports students, educators, and professionals in executing meaningful research, 
              publishing papers, and driving impactful innovation in an increasingly complex world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-indigo-800">Innovation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Pioneering research that bridges academic theory with real-world applications,
                  driving forward technological and social innovation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-indigo-800">Publications</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Supporting researchers through every step of the publication process, from
                  ideation to journal submission and successful publication.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-indigo-800">Collaboration</CardTitle>
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
      <section className="py-20 bg-gray-50">
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
                  <Card className="overflow-hidden border-blue-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                    <div className={`bg-gradient-to-br ${area.color} p-1`}></div>
                    <CardHeader className="pt-6">
                      <div className="mb-4">{area.icon}</div>
                      <CardTitle className="text-xl text-indigo-900">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-slate-600">{area.description}</p>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50 group-hover:border-blue-400 transition-all">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Ongoing Projects</h2>
            <p className="text-lg text-slate-600 mb-6">
              Current research initiatives pushing the boundaries of what's possible
            </p>
            <Separator className="w-24 h-1 bg-blue-500 mx-auto" />
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {ongoingProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-blue-100 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/4 bg-gradient-to-br from-indigo-50 to-blue-100 p-6">
                    <Badge className="mb-3 bg-blue-100 text-blue-700 hover:bg-blue-200 font-normal">
                      {project.category}
                    </Badge>
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="h-4 w-4 text-indigo-600" />
                      <span className="text-indigo-800 text-sm">{project.timeline}</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-indigo-800 mb-2">Progress</p>
                      <Progress value={project.progress} className="h-2 bg-blue-200" indicatorClassName="bg-blue-600" />
                      <p className="text-right text-sm text-indigo-800 mt-1">{project.progress}%</p>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-3/4 p-6">
                    <h3 className="text-xl font-semibold text-indigo-900 mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-4">{project.objective}</p>
                    
                    <div className="mb-4">
                      <p className="text-indigo-800 font-medium mb-1">Research Lead</p>
                      <p className="text-slate-600">{project.lead}</p>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-indigo-800 font-medium mb-1">Team Members</p>
                      <div className="flex flex-wrap gap-2">
                        {project.team.map((member, i) => (
                          <Badge key={i} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {member}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Publication Support Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Publication Support</h2>
            <p className="text-lg text-slate-600 mb-8">
              From concept to publication, we support your complete research journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {publicationSteps.map((step, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-md transition-all duration-300 h-full">
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
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600">
              Hear from researchers who've partnered with Trizen Research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-md transition-all duration-300">
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
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Collaborate With Us</h2>
            <p className="text-xl text-blue-200 mb-8">
              Partner with Trizen Research to drive innovation and create impact through collaborative research
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm">
                Submit Research Idea
              </Button>
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm">
                Propose a Project
              </Button>
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm">
                Become a Mentor
              </Button>
            </div>
            
            <Button 
              size="lg"
              className="bg-white text-indigo-900 hover:bg-blue-100 px-8"
            >
              Contact Research Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Research;
