import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contribute from "./pages/Contribute";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import Training from "./pages/Training";
import Research from "./pages/Research";
import Consulting from "./pages/Consulting";
import Ventures from "./pages/Ventures";
import ResearchArea from "@/pages/research/ResearchAreaTemplate";
import ProjectDetails from "@/pages/ProjectDetails";
import OngoingProjectDetails from "./pages/OngoingProjectDetails";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectOverview from "./pages/research/components/ProjectOverview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          {/* <Navbar /> */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contribute" element={<Contribute />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/training" element={<Training />} />
              <Route path="/training/courses" element={<Training />} />
              <Route path="/training/certifications" element={<Training />} />
              <Route path="/training/corporate" element={<Training />} />
              <Route path="/training/events" element={<Training />} />
              <Route path="/research" element={<Research />} />
              <Route path="/research/areas" element={<Research />} />
              <Route path="/research/projects" element={<Research />} />
              <Route path="/research/publications" element={<Research />} />
              <Route path="/research/collaborate" element={<Research />} />
              <Route path="/research/:areaId" element={<ResearchArea />} />
              <Route path="/project/:projectId" element={<ProjectOverview />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/consulting/services" element={<Consulting />} />
              <Route path="/consulting/industries" element={<Consulting />} />
              <Route path="/consulting/casestudies" element={<Consulting />} />
              <Route path="/consulting/contact" element={<Consulting />} />
              <Route path="/ventures" element={<Ventures />} />
              <Route path="/ventures/portfolio" element={<Ventures />} />
              <Route path="/ventures/approach" element={<Ventures />} />
              <Route path="/ventures/partnerships" element={<Ventures />} />
              <Route path="/ventures/resources" element={<Ventures />} />
              <Route path="/ventures/events" element={<Ventures />} />
              <Route path="/ongoing-project/:id" element={<OngoingProjectDetails />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
