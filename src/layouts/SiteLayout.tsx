import { ReactNode } from "react";
import Navbar from "@/components/shell/Navbar";
import Footer from "@/components/shell/Footer";
import ScrollToTop from "@/components/shell/ScrollToTop";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-neutral-950 focus:shadow-lg"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-grow outline-none" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
