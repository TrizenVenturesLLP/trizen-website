
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  Briefcase, 
  Calendar, 
  Search,
  FilterX,
  Clock,
  Code,
  Shield,
  Database,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

// Mock Data for Courses
const courses = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    category: "AI & Machine Learning",
    duration: "8 weeks",
    level: "Intermediate",
    icon: BookOpen,
    popular: true,
  },
  {
    id: 2,
    title: "AWS Cloud Practitioner",
    category: "Cloud & DevOps",
    duration: "6 weeks",
    level: "Beginner",
    icon: Database,
    popular: true,
  },
  {
    id: 3,
    title: "Full-Stack Web Development",
    category: "Web & Mobile Development",
    duration: "12 weeks",
    level: "Intermediate",
    icon: Code,
    popular: false,
  },
  {
    id: 4,
    title: "Ethical Hacking & Penetration Testing",
    category: "Cybersecurity",
    duration: "10 weeks",
    level: "Advanced",
    icon: Shield,
    popular: true,
  },
  {
    id: 5,
    title: "Data Analysis with Python",
    category: "Data Science",
    duration: "8 weeks",
    level: "Intermediate",
    icon: Database,
    popular: false,
  },
  {
    id: 6,
    title: "Business Communication Skills",
    category: "Soft Skills & Communication",
    duration: "4 weeks",
    level: "All Levels",
    icon: MessageSquare,
    popular: false,
  },
];

// Mock Data for Learning Paths
const learningPaths = [
  {
    id: 1,
    title: "AI Engineer",
    courses: 4,
    duration: "6 months",
    progress: 75,
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    courses: 5,
    duration: "8 months",
    progress: 60,
  },
  {
    id: 3,
    title: "Data Analyst",
    courses: 3,
    duration: "5 months",
    progress: 40,
  },
];

// Mock Data for Testimonials
const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The AI certification from Trizen Training helped me transition into a machine learning role. The hands-on projects were particularly valuable.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Data Scientist",
    company: "DataTech",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "I completed the Data Science track while working full-time. The flexible schedule and supportive instructors made it possible to upskill without quitting my job.",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "DevOps Engineer",
    company: "CloudSys",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    quote: "The Cloud & DevOps certification was comprehensive and up-to-date with industry practices. I was able to implement what I learned immediately at work.",
  },
];

// Mock Data for Upcoming Events
const events = [
  {
    id: 1,
    title: "Mastering Kubernetes Workshop",
    date: "May 15, 2025",
    time: "2:00 PM - 4:00 PM",
    type: "Workshop",
  },
  {
    id: 2,
    title: "AI Ethics in Healthcare",
    date: "May 22, 2025",
    time: "1:00 PM - 2:30 PM",
    type: "Webinar",
  },
  {
    id: 3,
    title: "Career Fair: Tech Opportunities",
    date: "June 5, 2025",
    time: "10:00 AM - 4:00 PM",
    type: "Event",
  },
];

// Mock Data for FAQs
const faqs = [
  {
    question: "How are Trizen Training courses delivered?",
    answer: "Our courses are delivered through a combination of on-demand video lessons, live instructor-led sessions, hands-on projects, and interactive quizzes. You can access all course materials through our learning platform."
  },
  {
    question: "Are the certifications industry-recognized?",
    answer: "Yes, Trizen Training certifications are designed in collaboration with industry partners and aligned with industry standards. Many of our certification programs also prepare you for vendor-specific certifications like AWS, Microsoft, and CompTIA."
  },
  {
    question: "Do you offer corporate training packages?",
    answer: "Absolutely! We provide tailored corporate training solutions that can be customized to your organization's specific needs. Contact our enterprise team for more information on group discounts, custom curriculum, and dedicated instructors."
  },
  {
    question: "Is there job placement assistance?",
    answer: "We offer career services including resume reviews, interview preparation, and job placement assistance for students enrolled in our career track programs. We also have partnerships with numerous employers looking to hire our graduates."
  }
];

const Training = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Filter courses based on category and search query
  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Categories for filter
  const categories = ["All", "AI & Machine Learning", "Cloud & DevOps", "Web & Mobile Development", "Cybersecurity", "Data Science", "Soft Skills & Communication"];
  
  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      } 
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block p-3 bg-purple-100 rounded-2xl mb-6">
                <GraduationCap className="h-12 w-12 text-purple-600" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Learn. Upskill.{" "}
                <span className="text-purple-600">Lead the Future.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Industry-ready training programs designed for students, working professionals, and enterprises.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700">
                  Explore Courses
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  Get Certified
                  <Award className="ml-1 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  Partner with Us
                  <Users className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* About Trizen Training */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold text-gray-900 mb-6"
              >
                About Trizen Training
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 mb-10"
              >
                At Trizen Training, we're committed to empowering individuals and organizations with in-demand skills that drive innovation and professional growth. Our cutting-edge curriculum is designed in collaboration with industry experts to ensure you're learning what matters most in today's job market.
              </motion.p>
              
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-4 gap-8"
              >
                <motion.div variants={itemVariants} className="flex flex-col items-center p-4">
                  <div className="bg-purple-100 p-4 rounded-2xl mb-4">
                    <BookOpen className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Self-paced Courses</h3>
                  <p className="text-gray-600 text-center">Learn at your own pace with on-demand content</p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex flex-col items-center p-4">
                  <div className="bg-purple-100 p-4 rounded-2xl mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Live Training</h3>
                  <p className="text-gray-600 text-center">Interactive sessions with industry experts</p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex flex-col items-center p-4">
                  <div className="bg-purple-100 p-4 rounded-2xl mb-4">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Certifications</h3>
                  <p className="text-gray-600 text-center">Industry-recognized credentials</p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex flex-col items-center p-4">
                  <div className="bg-purple-100 p-4 rounded-2xl mb-4">
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Workshops</h3>
                  <p className="text-gray-600 text-center">Hands-on learning experiences</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Courses and Certifications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Courses and Certifications</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore our comprehensive range of courses designed to help you master in-demand skills and advance your career.
                </p>
              </motion.div>
              
              {/* Search and Filter */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
              >
                <div className="relative flex-1 w-full sm:max-w-xs">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div className="overflow-x-auto w-full sm:w-auto">
                  <div className="flex space-x-2 min-w-max">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={activeCategory === category ? "default" : "outline"}
                        className={activeCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                    {searchQuery || activeCategory !== "All" ? (
                      <Button 
                        variant="ghost" 
                        className="text-gray-500" 
                        onClick={() => {
                          setSearchQuery("");
                          setActiveCategory("All");
                        }}
                      >
                        <FilterX className="h-4 w-4 mr-2" />
                        Clear
                      </Button>
                    ) : null}
                  </div>
                </div>
              </motion.div>
              
              {/* Course Grid */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <motion.div key={course.id} variants={itemVariants}>
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                          <div className="flex justify-between items-start">
                            <div className="bg-purple-100 p-3 rounded-lg">
                              <course.icon className="h-6 w-6 text-purple-600" />
                            </div>
                            {course.popular && (
                              <Badge className="bg-purple-600">Popular</Badge>
                            )}
                          </div>
                          <CardTitle className="mt-4">{course.title}</CardTitle>
                          <CardDescription>{course.category}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {course.duration}
                            </div>
                            <div>|</div>
                            <div>{course.level}</div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-purple-600 hover:bg-purple-700">
                            View Course
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12">
                    <p className="text-gray-500">No courses found. Try a different search or filter.</p>
                  </div>
                )}
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="text-center mt-10"
              >
                <Button variant="outline" className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  View All Courses
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Learning Paths / Career Tracks */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Learning Paths</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Follow a structured learning journey to achieve your career goals. Each path includes multiple courses and leads to a professional certification.
                </p>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {learningPaths.map((path) => (
                  <motion.div key={path.id} variants={itemVariants}>
                    <Card className="h-full border-t-4 border-t-purple-600 hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>{path.title}</CardTitle>
                        <CardDescription>Career Path</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">{path.courses} Courses</span>
                          <span className="text-gray-500">{path.duration}</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{path.progress}%</span>
                          </div>
                          <Progress 
                            value={path.progress} 
                            className="h-2" 
                            indicatorClassName="bg-purple-600"
                          />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          Explore Path
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Why Choose Trizen Training */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Trizen Training</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We're committed to your success with a learning experience designed to help you achieve your goals.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div 
                  variants={containerVariants}
                  className="grid grid-cols-1 gap-6"
                >
                  <motion.div variants={itemVariants} className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Industry-certified instructors</h3>
                      <p className="text-gray-600">Learn from experts with real-world experience in their fields.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <Code className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Hands-on projects</h3>
                      <p className="text-gray-600">Apply your knowledge with real-world projects to build your portfolio.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <BookOpen className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Job-oriented curriculum</h3>
                      <p className="text-gray-600">Courses designed with input from hiring managers and industry leaders.</p>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  variants={containerVariants}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">What Our Students Say</h3>
                    <Tabs defaultValue={testimonials[0].id.toString()} className="w-full">
                      <TabsList className="grid grid-cols-3 mb-6">
                        {testimonials.map((testimonial) => (
                          <TabsTrigger 
                            key={testimonial.id} 
                            value={testimonial.id.toString()}
                            className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-600 data-[state=active]:shadow-none"
                          >
                            {testimonial.id}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      
                      {testimonials.map((testimonial) => (
                        <TabsContent key={testimonial.id} value={testimonial.id.toString()}>
                          <div className="flex flex-col items-center text-center p-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-20 h-20 rounded-full object-cover mb-4"
                            />
                            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants} className="text-center">
                <Button className="rounded-full bg-purple-600 hover:bg-purple-700">
                  Join Our Success Stories
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Corporate & Institutional Training */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={containerVariants}>
                <motion.h2 
                  variants={itemVariants}
                  className="text-3xl font-bold mb-6"
                >
                  Corporate & Institutional Training
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-lg mb-8 text-purple-100"
                >
                  Invest in your team's growth with customized training programs tailored to your organization's specific needs and goals.
                </motion.p>
                
                <motion.div variants={containerVariants} className="space-y-6">
                  <motion.div variants={itemVariants} className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Customized Team Training</h3>
                      <p className="text-purple-100">Tailored programs designed specifically for your team's needs</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <Database className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">LMS Integration</h3>
                      <p className="text-purple-100">Seamlessly integrate with your existing learning management system</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Progress Tracking</h3>
                      <p className="text-purple-100">Monitor team performance and learning outcomes</p>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="mt-8">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                    Upskill Your Team
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Corporate Training" 
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Get Certified / Enroll Now */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold text-gray-900 mb-6"
              >
                Get Certified with Trizen
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 mb-10"
              >
                Boost your career with our industry-recognized certifications. Our programs are designed to help you stand out in the job market and demonstrate your expertise.
              </motion.p>
              
              <motion.div 
                variants={containerVariants}
                className="flex flex-wrap justify-center gap-4"
              >
                <motion.div variants={itemVariants}>
                  <Button size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700">
                    Start Learning
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Button size="lg" variant="outline" className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    Download Brochure
                    <Download className="ml-1 h-4 w-4" />
                  </Button>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Button size="lg" variant="outline" className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    Join Webinar
                    <Calendar className="ml-1 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Events / Workshops / Webinars */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Join our live events, workshops, and webinars to gain insights from industry experts and network with peers.
                </p>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {events.map((event) => (
                  <motion.div key={event.id} variants={itemVariants}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <Badge className={
                            event.type === "Workshop" ? "bg-green-500" : 
                            event.type === "Webinar" ? "bg-blue-500" : "bg-purple-600"
                          }>
                            {event.type}
                          </Badge>
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <CardTitle className="mt-4">{event.title}</CardTitle>
                        <CardDescription>{event.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">
                          <Clock className="inline-block h-4 w-4 mr-1" />
                          {event.time}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          Register Now
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center mt-10">
                <Button variant="outline" className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  View All Events
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* FAQ + Support */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600">
                  Find answers to common questions about our training programs and certifications.
                </p>
              </motion.div>
              
              <motion.div variants={containerVariants} className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-900 hover:bg-gray-50"
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown 
                        className={`h-5 w-5 text-gray-500 transition-transform ${
                          activeFaq === index ? "transform rotate-180" : ""
                        }`} 
                      />
                    </button>
                    {activeFaq === index && (
                      <div className="p-4 pt-0 text-gray-600 border-t border-gray-200">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center mt-10">
                <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Contact Support
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Training;
