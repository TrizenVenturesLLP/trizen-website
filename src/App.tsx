import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Products from "./pages/Products";
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { productSlugAliases } from "./content/products";

const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Industries = lazy(() => import("./pages/Industries"));
const IndustryDetail = lazy(() => import("./pages/IndustryDetail"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Ventures = lazy(() => import("./pages/Ventures"));
const CertificateVerify = lazy(() => import("./pages/CertificateVerify"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60_000, refetchOnWindowFocus: false },
  },
});

const enableCertAdmin = import.meta.env.VITE_ENABLE_CERT_ADMIN === "true";
const CertificateManager = enableCertAdmin
  ? lazy(() => import("./pages/CertificateManager"))
  : null;

/** Map legacy /accelerators/:slug → /products/:slug */
const AcceleratorRedirect = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate replace to="/products" />;
  const mapped = productSlugAliases[slug] ?? slug;
  return <Navigate replace to={`/products/${mapped}`} />;
};

const PageFallback = () => (
  <div
    className="container mx-auto px-4 py-24 min-h-[40vh]"
    role="status"
    aria-live="polite"
    aria-label="Loading page"
  >
    <div className="h-8 w-48 rounded bg-zinc-100 animate-pulse mb-4" />
    <div className="h-4 w-full max-w-xl rounded bg-zinc-100 animate-pulse mb-2" />
    <div className="h-4 w-2/3 max-w-md rounded bg-zinc-100 animate-pulse" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={300}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SiteLayout>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route
                path="/services/ai-consulting-strategy"
                element={<Navigate replace to="/services/ai-consulting" />}
              />
              <Route
                path="/services/enterprise-agents"
                element={<Navigate replace to="/services/ai-agents" />}
              />

              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />

              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/:slug" element={<IndustryDetail />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/ventures" element={<Ventures />} />
              <Route path="/ventures/*" element={<Navigate replace to="/ventures" />} />

              <Route path="/verify/:id" element={<CertificateVerify />} />

              {enableCertAdmin && CertificateManager && (
                <>
                  <Route path="/certificate-manager" element={<CertificateManager />} />
                  <Route path="/certificate-manager/:id" element={<CertificateManager />} />
                </>
              )}

              {/* Deprecated IA → Products */}
              <Route path="/solutions" element={<Navigate replace to="/products" />} />
              <Route path="/solutions/*" element={<Navigate replace to="/products" />} />
              <Route path="/accelerators" element={<Navigate replace to="/products" />} />
              <Route path="/accelerators/:slug" element={<AcceleratorRedirect />} />

              <Route path="/consulting" element={<Navigate replace to="/services" />} />
              <Route path="/consulting/*" element={<Navigate replace to="/services" />} />
              <Route path="/research" element={<Navigate replace to="/products" />} />
              <Route path="/research/*" element={<Navigate replace to="/products" />} />
              <Route path="/training" element={<Navigate replace to="/services" />} />
              <Route path="/training/*" element={<Navigate replace to="/services" />} />
              <Route path="/contribute" element={<Navigate replace to="/about" />} />
              <Route path="/gallery" element={<Navigate replace to="/about" />} />
              <Route path="/events" element={<Navigate replace to="/about" />} />
              <Route path="/project/:projectId" element={<Navigate replace to="/products" />} />
              <Route path="/ongoing-project/:id" element={<Navigate replace to="/case-studies" />} />
              <Route path="/certificate-test" element={<Navigate replace to="/" />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </SiteLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
