
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Brain, 
  HeartPulse, 
  Leaf, 
  GraduationCap, 
  ShieldCheck, 
  Sprout,
  Users,
  Rocket,
  Lightbulb,
  BriefcaseBusiness,
  LineChart,
  Building,
  CalendarClock,
  FileBox
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Ventures = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-violet-900 via-violet-800 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3MjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCBmaWxsPSIjMmIwYzYzIiB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3MjAiLz48Y2lyY2xlIHN0cm9rZT0iIzdjM2FlZCIgc3Ryb2tlLXdpZHRoPSIyIiBjeD0iNzIwIiBjeT0iMzYwIiByPSIxMjAiIG9wYWNpdHk9Ii4xIi8+PGNpcmNsZSBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgY3g9IjcyMCIgY3k9IjM2MCIgcj0iMTgwIiBvcGFjaXR5PSIuMDciLz48Y2lyY2xlIHN0cm9rZT0iIzdjM2FlZCIgc3Ryb2tlLXdpZHRoPSIyIiBjeD0iNzIwIiBjeT0iMzYwIiByPSIyNDAiIG9wYWNpdHk9Ii4wNSIvPjxjaXJjbGUgc3Ryb2tlPSIjN2MzYWVkIiBzdHJva2Utd2lkdGg9IjIiIGN4PSI3MjAiIGN5PSIzNjAiIHI9IjMwMCIgb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-60 mix-blend-overlay bg-no-repeat bg-cover"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block p-2 px-3 bg-violet-800/30 rounded-lg text-violet-200 mb-6">
                <Rocket className="inline-block w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Trizen Ventures</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Fueling Tomorrow's Disruptors
              </h1>
              
              <p className="text-lg md:text-xl text-violet-100/90 mb-8 max-w-3xl mx-auto">
                We invest in visionary founders and breakthrough technologies shaping the future.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-violet-700 hover:bg-violet-600">
                  Pitch to Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 bg-white/5 hover:bg-white/10">
                  Explore Our Portfolio
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 bg-white/5 hover:bg-white/10">
                  Become a Partner
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>
        
        {/* About Trizen Ventures */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About Trizen Ventures</h2>
              
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                We empower early-stage entrepreneurs with capital, deep mentorship, technical infrastructure, research collaboration, and go-to-market support. Backed by Trizen's core strengths—Research, Consulting, and Training—our venture ecosystem bridges academia, industry, and innovation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <Card className="bg-gradient-to-br from-white to-violet-50 border border-violet-100">
                  <CardContent className="pt-8 px-6 text-center">
                    <div className="bg-violet-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="h-8 w-8 text-violet-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Enabling Innovation</h3>
                    <p className="text-slate-600">Supporting disruptive ideas with capital, resources, and expertise.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-white to-violet-50 border border-violet-100">
                  <CardContent className="pt-8 px-6 text-center">
                    <div className="bg-violet-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Rocket className="h-8 w-8 text-violet-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Strategic Growth</h3>
                    <p className="text-slate-600">Accelerating startups through our network and industry expertise.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-white to-violet-50 border border-violet-100">
                  <CardContent className="pt-8 px-6 text-center">
                    <div className="bg-violet-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-violet-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Mentorship-Driven</h3>
                    <p className="text-slate-600">Guiding founders with hands-on expertise from industry veterans.</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Focus Areas / Investment Sectors */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Focus Areas</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  We invest in breakthrough technologies across these key sectors, with a focus on early-stage startups.
                </p>
              </div>
              
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <FocusAreaCard 
                  icon={<Brain className="h-8 w-8 text-violet-700" />}
                  title="Artificial Intelligence"
                  description="Machine learning, NLP, computer vision, and AI infrastructure."
                />
                
                <FocusAreaCard
                  icon={<HeartPulse className="h-8 w-8 text-violet-700" />}
                  title="HealthTech"
                  description="Digital health, diagnostics, medical devices, and healthcare AI."
                />
                
                <FocusAreaCard
                  icon={<Sprout className="h-8 w-8 text-violet-700" />}
                  title="AgriTech"
                  description="Smart farming, sustainable agriculture, and food innovation."
                />
                
                <FocusAreaCard
                  icon={<GraduationCap className="h-8 w-8 text-violet-700" />}
                  title="EdTech"
                  description="Learning platforms, skill development, and educational tools."
                />
                
                <FocusAreaCard
                  icon={<ShieldCheck className="h-8 w-8 text-violet-700" />}
                  title="Cybersecurity"
                  description="Data protection, threat intelligence, and privacy technologies."
                />
                
                <FocusAreaCard
                  icon={<Leaf className="h-8 w-8 text-violet-700" />}
                  title="GreenTech / Sustainability"
                  description="Climate tech, clean energy, and environmental solutions."
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Our Portfolio */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Portfolio</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Meet the innovative startups we've backed on their journey to disrupt industries.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Portfolio company placeholders */}
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-full aspect-video bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-2xl font-bold text-slate-400">Company {i+1}</div>
                    </div>
                    <h3 className="font-medium text-slate-900">Startup Name</h3>
                    <p className="text-sm text-slate-500">AI & Healthcare</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-violet-50 rounded-xl border border-violet-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Success Story: MediScan AI</h3>
                    <p className="text-slate-700 mb-4">
                      MediScan AI leveraged our investment and technical expertise to build an AI-powered diagnostic platform that reduced screening time by 80% and improved accuracy by 50%.
                    </p>
                    <p className="text-slate-600 italic">
                      "Trizen Ventures didn't just provide capital—they became true partners in our journey. Their technical expertise and mentorship were invaluable to our success."
                    </p>
                    <p className="text-sm font-medium text-slate-800 mt-2">— Sarah Chen, Founder & CEO</p>
                  </div>
                  <div className="md:w-1/3 bg-white rounded-lg p-6 border border-violet-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-violet-700 mb-2">$12M</div>
                      <div className="text-sm text-slate-600">Series A funding after Trizen seed round</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Our Approach */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Approach</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  We provide more than just capital. Our comprehensive support system helps founders navigate every stage of growth.
                </p>
              </div>
              
              <div className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-violet-200 transform md:translate-x-px"></div>
                
                {/* Timeline steps */}
                <div className="space-y-12">
                  <TimelineStep 
                    title="Application"
                    description="Submit your pitch deck, product demo, and team information for our initial review."
                    icon={<FileBox className="h-6 w-6 text-white" />}
                    isLeft={true}
                  />
                  
                  <TimelineStep 
                    title="Evaluation"
                    description="Our investment committee reviews your business model, technology, and market opportunity."
                    icon={<BriefcaseBusiness className="h-6 w-6 text-white" />}
                    isLeft={false}
                  />
                  
                  <TimelineStep 
                    title="Investment"
                    description="Once approved, we provide seed funding and develop a strategic growth plan together."
                    icon={<LineChart className="h-6 w-6 text-white" />}
                    isLeft={true}
                  />
                  
                  <TimelineStep 
                    title="Mentorship"
                    description="You gain access to our network of industry experts, technical advisors, and business coaches."
                    icon={<Users className="h-6 w-6 text-white" />}
                    isLeft={false}
                  />
                  
                  <TimelineStep 
                    title="Scaling"
                    description="We help with go-to-market strategy, business development, and preparing for next funding rounds."
                    icon={<Rocket className="h-6 w-6 text-white" />}
                    isLeft={true}
                  />
                </div>
              </div>
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Strategic Mentoring</h3>
                    <p className="text-slate-600">One-on-one guidance from industry veterans with proven track records.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Technical Support</h3>
                    <p className="text-slate-600">Access to Trizen's engineering talent, research labs, and technical resources.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Go-to-Market Access</h3>
                    <p className="text-slate-600">Leverage our network for customer introductions and partnership opportunities.</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Co-Innovation Partnerships */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Co-Innovation Partnerships</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  We collaborate with enterprises, research institutions, and government agencies to create innovation ecosystems.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-violet-50 rounded-xl border border-violet-100">
                  <div className="bg-violet-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Building className="h-8 w-8 text-violet-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Partnerships</h3>
                  <p className="text-slate-600 mb-4">
                    We connect corporates with our startup portfolio for pilot projects, innovation programs, and potential acquisitions.
                  </p>
                  <Button className="bg-violet-700 hover:bg-violet-600">
                    Become a Corporate Partner
                  </Button>
                </div>
                
                <div className="p-8 bg-violet-50 rounded-xl border border-violet-100">
                  <div className="bg-violet-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <GraduationCap className="h-8 w-8 text-violet-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Research Collaborations</h3>
                  <p className="text-slate-600 mb-4">
                    We bridge academia and industry by funding research projects with commercial potential and supporting technology transfer.
                  </p>
                  <Button className="bg-violet-700 hover:bg-violet-600">
                    Explore Research Opportunities
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-violet-700 text-white rounded-xl text-center">
                <h3 className="text-xl font-bold mb-2">Partner With Us for Innovation Acceleration</h3>
                <p className="mb-4">
                  Whether you're an enterprise, research lab, accelerator, or government agency, we can help you build innovation capabilities.
                </p>
                <Button variant="outline" className="bg-white text-violet-700 hover:bg-white/90">
                  Contact Our Partnerships Team
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Resources for Founders */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Resources for Founders</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Access guides, tools, and insights to help you build and scale your startup.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Founder Playbooks</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-violet-600" />
                        <span className="text-slate-700">Startup Financial Modeling</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-violet-600" />
                        <span className="text-slate-700">Product-Market Fit Guide</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-violet-600" />
                        <span className="text-slate-700">Technical Due Diligence 101</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Educational Content</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-violet-600" />
                        <span className="text-slate-700">Founder Interview Series</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-violet-600" />
                        <span className="text-slate-700">Venture Capital 101 Workshop</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-violet-600" />
                        <span className="text-slate-700">Tech Stack Decision Guide</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Startup Tools</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-violet-600" />
                        <span className="text-slate-700">Pitch Deck Template</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-violet-600" />
                        <span className="text-slate-700">Founder-Investor Agreement Sample</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-violet-600" />
                        <span className="text-slate-700">Growth Metrics Dashboard</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-10">
                <Button variant="outline" className="border-violet-700 text-violet-700 hover:bg-violet-50">
                  Browse All Resources
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Pitch to Trizen */}
        <section className="py-16 bg-violet-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a startup idea?</h2>
              <p className="text-lg text-violet-100 mb-8 max-w-2xl mx-auto">
                We're looking for visionary founders building innovative solutions in our focus areas.
              </p>
              
              <Card className="bg-white text-slate-900 p-8 mb-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4">What We Look For</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div>
                      <div className="font-semibold mb-2 text-violet-800">Strong Vision</div>
                      <p className="text-slate-600 text-sm">
                        Bold ideas addressing significant market opportunities with innovative approaches.
                      </p>
                    </div>
                    
                    <div>
                      <div className="font-semibold mb-2 text-violet-800">Product-Market Fit</div>
                      <p className="text-slate-600 text-sm">
                        Clear value proposition validated by early customer traction or strong market research.
                      </p>
                    </div>
                    
                    <div>
                      <div className="font-semibold mb-2 text-violet-800">Exceptional Team</div>
                      <p className="text-slate-600 text-sm">
                        Passionate founders with complementary skills and domain expertise or learning agility.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button size="lg" className="bg-white text-violet-900 hover:bg-white/90">
                Submit Your Pitch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* News & Events */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">News & Events</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Stay updated on our latest announcements, startup demo days, and venture meetups.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="h-48 bg-slate-100 flex items-center justify-center">
                    <CalendarClock className="h-12 w-12 text-slate-400" />
                  </div>
                  <CardContent className="pt-6">
                    <div className="text-sm text-violet-600 font-medium mb-2">June 15, 2025</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Startup Demo Day</h3>
                    <p className="text-slate-600 mb-4">
                      Join us for our quarterly showcase of the most promising startups in our portfolio.
                    </p>
                    <Button variant="outline" className="w-full border-violet-600 text-violet-700 hover:bg-violet-50">
                      Register
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-48 bg-slate-100 flex items-center justify-center">
                    <CalendarClock className="h-12 w-12 text-slate-400" />
                  </div>
                  <CardContent className="pt-6">
                    <div className="text-sm text-violet-600 font-medium mb-2">August 10, 2025</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Founder Networking Mixer</h3>
                    <p className="text-slate-600 mb-4">
                      Connect with fellow entrepreneurs, investors, and industry experts in a casual setting.
                    </p>
                    <Button variant="outline" className="w-full border-violet-600 text-violet-700 hover:bg-violet-50">
                      Register
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-48 bg-slate-100 flex items-center justify-center">
                    <CalendarClock className="h-12 w-12 text-slate-400" />
                  </div>
                  <CardContent className="pt-6">
                    <div className="text-sm text-violet-600 font-medium mb-2">September 5, 2025</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">AI Ventures Summit</h3>
                    <p className="text-slate-600 mb-4">
                      Explore the future of AI startups with thought leaders and successful founders.
                    </p>
                    <Button variant="outline" className="w-full border-violet-600 text-violet-700 hover:bg-violet-50">
                      Register
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-10">
                <Button variant="outline" className="border-violet-700 text-violet-700 hover:bg-violet-50">
                  View All Events
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const FocusAreaCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-violet-200 transition-all duration-300"
    >
      <div className="bg-violet-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </motion.div>
  );
};

const TimelineStep = ({ title, description, icon, isLeft }) => {
  return (
    <div className={`flex items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="hidden md:block w-1/2"></div>
      
      <div className="flex items-center justify-center relative z-10">
        <div className="bg-violet-700 rounded-full p-3">
          {icon}
        </div>
      </div>
      
      <div className={`bg-white rounded-lg shadow p-6 md:w-1/2 ${isLeft ? 'ml-4 md:ml-0 md:mr-6' : 'ml-4 md:ml-6'}`}>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default Ventures;
