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
      <ScrollToTop />
      <Navbar />
      <main
        id="main-content"
        className="flex-grow outline-none bg-[radial-gradient(ellipse_80%_40%_at_50%_-10%,rgb(99_102_241/0.06),transparent)]"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
