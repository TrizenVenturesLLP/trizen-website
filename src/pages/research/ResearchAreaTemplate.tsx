import React from 'react';
import { motion } from "framer-motion";
import { 
  Search, Star, Sparkles, 
  Clock, FileDown, Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Project {
  id: string | number;
  title: string;
  objective?: string;
  summary?: string;
  type: string;
  status: string;
  year: string;
  department?: string;
  tags?: string[];
}

interface ResearchAreaProps {
  title: string;
  description: string;
  image: string;
  projects: Project[];
}

const ResearchArea: React.FC = () => {
  const { areaId } = useParams();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedTab, setSelectedTab] = React.useState("all");
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const projectsPerPage = 7;

  // Research areas data
  const researchAreas = [
    { id: 'artificial-intelligence', name: 'Artificial Intelligence' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'internet-of-things', name: 'Internet of Things' },
    { id: 'cloud-computing', name: 'Cloud Computing' },
    { id: 'blockchain', name: 'Blockchain Technology' }
  ];

  const navigate = useNavigate();

  const handleResearchAreaChange = (value: string) => {
    navigate(`/research/${value}`);
  };

  // Dynamically import the research area data based on the route parameter
  const [areaData, setAreaData] = React.useState<ResearchAreaProps | null>(null);

  React.useEffect(() => {
    const loadAreaData = async () => {
      try {
        let module;
        switch (areaId) {
          case 'artificial-intelligence':
            module = await import('./artificial-intelligence/index');
            break;
          case 'cybersecurity':
            module = await import('./cybersecurity/index');
            break;
          // case 'internet-of-things':
          //   module = await import('./internet-of-things/index');
          //   break;
          default:
            console.error('Research area not found');
            return;
        }
        setAreaData(module.default);
      } catch (error) {
        console.error('Error loading research area data:', error);
      }
    };

    loadAreaData();
  }, [areaId]);

  if (!areaData) return <div>Loading...</div>;

  const filterProjects = (projects: Project[]) => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (project.objective || project.summary || "").toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab = selectedTab === "all" || project.status === selectedTab;
      return matchesSearch && matchesTab;
    });
  };

  const downloadTitles = () => {
    const titles = areaData.projects.map(p => `${p.id} - ${p.title}`).join('\n');
    const blob = new Blob([titles], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${areaData.title}_Projects.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'trendy':
        return <Sparkles className="h-4 w-4 text-amber-500" />;
      case 'new':
        return <Star className="h-4 w-4 text-emerald-500" />;
      default:
        return <Clock className="h-4 w-4 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'trendy':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'new':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      default:
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
    }
  };

  const filteredProjects = filterProjects(areaData.projects);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <div className="min-h-screen flex flex-col bg-[#f0effc]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[300px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={areaData.image}
            alt={areaData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#393283]/90 to-[#6c62e2]/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <Badge variant="secondary" className="bg-white/10 text-white mb-4 backdrop-blur-sm">
              Research Area
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {areaData.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              {areaData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            {/* Research Area Switcher */}
            <div className="mb-6">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex flex-col gap-2 flex-grow">
                  <label className="text-sm font-medium text-gray-500">Switch Research Area</label>
                  <Select defaultValue={areaId} onValueChange={handleResearchAreaChange}>
                    <SelectTrigger className="w-full md:w-[300px] bg-white border-[#8d86e0]/20">
                      <SelectValue placeholder="Select Research Area" />
                    </SelectTrigger>
                    <SelectContent>
                      {researchAreas.map(area => (
                        <SelectItem key={area.id} value={area.id}>
                          {area.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Link to="/research/submit-idea">
                  <Button 
                    className="bg-[#6c62e2] text-white hover:bg-[#393283] transition-colors w-full md:w-auto"
                  >
                    Want to work on your own idea!
                  </Button>
                </Link>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search projects..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4 max-w-full overflow-x-auto">
                {/* Desktop View - Tabs */}
                <div className="hidden md:block">
                  <Tabs defaultValue="all" onValueChange={setSelectedTab}>
                    <TabsList className="bg-[#f0effc]">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="trendy">Trendy</TabsTrigger>
                      <TabsTrigger value="new">New</TabsTrigger>
                      <TabsTrigger value="standard">Standard</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Mobile View - Dropdown */}
                <div className="md:hidden w-full">
                  <Select defaultValue="all" onValueChange={setSelectedTab}>
                    <SelectTrigger className="w-full bg-[#f0effc]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Projects</SelectItem>
                      <SelectItem value="trendy">Trendy Projects</SelectItem>
                      <SelectItem value="new">New Projects</SelectItem>
                      <SelectItem value="standard">Standard Projects</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  variant="outline" 
                  className="text-[#393283] border-[#8d86e0] hover:bg-[#8d86e0]/10 whitespace-nowrap"
                  onClick={downloadTitles}
                >
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Titles
                </Button>
              </div>
            </div>

            {/* Projects Table */}
            <div className="rounded-lg border border-[#8d86e0]/20">
              {/* Desktop View */}
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">S.No</TableHead>
                      <TableHead className="w-[120px]">Project Code</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead className="w-[120px]">Status</TableHead>
                      <TableHead className="w-[100px]">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentProjects.map((project, index) => (
                      <TableRow key={project.id}
                        onMouseEnter={() => setHoveredProject(String(project.id))}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="group"
                      >
                        <TableCell className="font-medium">{startIndex + index + 1}</TableCell>
                        <TableCell className="font-medium">{project.id}</TableCell>
                        <TableCell>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link 
                                  to={`/project/${project.id}`}
                                  className="block group-hover:text-[#6c62e2] transition-colors"
                                >
                                  {project.title}
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent side="bottom" className="max-w-sm">
                                <p>{project.objective || project.summary}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getStatusColor(project.status)}>
                            <span className="mr-1">{getStatusIcon(project.status)}</span>
                            {project.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Link to={`/project/${project.id}`}>
                            <Button 
                              variant="ghost" 
                              className="text-[#393283] hover:text-[#6c62e2] hover:bg-[#8d86e0]/10"
                            >
                              <Info className="h-4 w-4" />
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile View */}
              <div className="md:hidden space-y-4 p-3">
                {currentProjects.map((project, index) => (
                  <div key={project.id} className="bg-white rounded-lg border border-[#8d86e0]/20 p-3 space-y-3">
                    <div>
                      <div className="text-xs text-gray-500">Project Code: {project.id}</div>
                      <Link 
                        to={`/project/${project.id}`}
                        className="font-small text-[#393283] hover:text-[#6c62e2] block mt-1"
                      >
                        {project.title}
                      </Link>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">#{startIndex + index + 1}</span>
                      <Link to={`/project/${project.id}`}>
                        <Button 
                          variant="outline"
                          size="sm"
                          className="text-[#393283] border-[#8d86e0] hover:bg-[#8d86e0]/10"
                        >
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-4">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchArea;