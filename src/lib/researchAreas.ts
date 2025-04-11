/** @jsxImportSource react */
import { 
  Atom, Lock, Network, Microscope, Brain, 
  Zap, LineChart, Users, Rocket, BookText,
  FlaskConical, Calendar, Clock, ThumbsUp
} from "lucide-react";

export interface ResearchProject {
  id: string;
  title: string;
  summary: string;
  description: string;
  progress: number;
  lead: string;
  team: string[];
  timeline: string;
  whatsappLink: string;
}

export interface ResearchArea {
  id: string;
  category: string;
  icon: string;
  title: string;
  description: string;
  color: string;
  projects: ResearchProject[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: "ai",
    category: "technology",
    icon: "Atom",
    title: "Artificial Intelligence",
    description: "Machine learning algorithms, neural networks, and AI applications across industries",
    color: "from-indigo-500 to-blue-600",
    projects: [
      {
        id: "ai-1",
        title: "Quantum-Inspired Optimization Algorithms",
        summary: "Developing novel optimization algorithms inspired by quantum computing principles",
        description: "This project focuses on creating advanced optimization algorithms that leverage quantum computing principles to solve complex logistics and supply chain management problems. Our team is working on developing hybrid quantum-classical approaches that can be implemented on current hardware while preparing for future quantum computing capabilities.",
        progress: 68,
        lead: "Dr. Eliza Chen",
        team: ["Dr. Marcus Wong", "Sarah Johnson, PhD", "Alan Parker"],
        timeline: "Jan 2023 - Dec 2024",
        whatsappLink: "https://wa.me/1234567890?text=I'm%20interested%20in%20the%20Quantum-Inspired%20Optimization%20project"
      },
      {
        id: "ai-2",
        title: "AI-Powered Healthcare Diagnostics",
        summary: "Implementing deep learning models for medical image analysis",
        description: "This project aims to develop and deploy deep learning models for automated analysis of medical imaging data, including X-rays, MRIs, and CT scans. The system will assist healthcare professionals in early detection and diagnosis of various medical conditions.",
        progress: 45,
        lead: "Dr. Sarah Williams",
        team: ["Dr. Ahmed Hassan", "Tyler Chen, PhD", "Monica Reeves"],
        timeline: "Mar 2023 - Jun 2025",
        whatsappLink: "https://wa.me/1234567890?text=I'm%20interested%20in%20the%20AI-Powered%20Healthcare%20Diagnostics%20project"
      }
    ]
  },
  {
    id: "cybersecurity",
    category: "technology",
    icon: "Lock",
    title: "Cybersecurity",
    description: "Advanced threat detection, secure systems architecture, and privacy-preserving technologies",
    color: "from-blue-600 to-indigo-700",
    projects: [
      {
        id: "cyber-1",
        title: "Blockchain Security Framework",
        summary: "Developing a comprehensive security framework for blockchain applications",
        description: "This project focuses on creating a robust security framework for blockchain-based applications, addressing vulnerabilities in smart contracts, consensus mechanisms, and network security. The framework will include automated security testing tools and best practices for secure blockchain development.",
        progress: 55,
        lead: "Dr. James Patterson",
        team: ["Anita Rodriguez, PhD", "Kevin Zhang", "Lisa Montgomery"],
        timeline: "Apr 2023 - Mar 2025",
        whatsappLink: "https://wa.me/1234567890?text=I'm%20interested%20in%20the%20Blockchain%20Security%20Framework%20project"
      }
    ]
  },
  {
    id: "iot",
    category: "technology",
    icon: "Network",
    title: "Internet of Things",
    description: "Connected devices, smart systems, and intelligent infrastructure solutions",
    color: "from-indigo-600 to-blue-700",
    projects: [
      {
        id: "iot-1",
        title: "Smart City Infrastructure",
        summary: "Building intelligent systems for urban infrastructure management",
        description: "This project aims to develop IoT-based solutions for smart city infrastructure, including traffic management, energy optimization, and public safety systems. The focus is on creating scalable, secure, and efficient systems that can be deployed in urban environments.",
        progress: 72,
        lead: "Dr. Michael Torres",
        team: ["Dr. Leila Patel", "Robert Garcia", "Jennifer Wu"],
        timeline: "Jun 2023 - May 2025",
        whatsappLink: "https://wa.me/1234567890?text=I'm%20interested%20in%20the%20Smart%20City%20Infrastructure%20project"
      }
    ]
  },
  {
    id: "healthcare",
    category: "healthcare",
    icon: "Microscope",
    title: "Healthcare Innovation",
    description: "Medical technology, digital health solutions, and patient care systems",
    color: "from-blue-500 to-indigo-600",
    projects: [
      {
        id: "health-1",
        title: "Remote Patient Monitoring",
        summary: "Developing IoT-based systems for remote patient monitoring",
        description: "This project focuses on creating comprehensive remote patient monitoring solutions using IoT devices and AI analytics. The system will enable healthcare providers to monitor patients' vital signs and health metrics in real-time, improving patient outcomes and reducing hospital readmissions.",
        progress: 60,
        lead: "Dr. Samantha Lee",
        team: ["Dr. David Chang", "Aisha Johnson, PhD", "Mark Thompson"],
        timeline: "Aug 2023 - Jul 2025",
        whatsappLink: "https://wa.me/1234567890?text=I'm%20interested%20in%20the%20Remote%20Patient%20Monitoring%20project"
      }
    ]
  }
]; 