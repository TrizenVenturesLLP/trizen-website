import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const navLinks = [
    { label: "Research", href: "/#research" },
    { label: "Consulting", href: "/#consulting" },
    { label: "Training", href: "https://lms.trizenventures.com/" },
    { label: "Insights", href: "https://connect.trizenventures.com/" },
    { label: "Careers", href: "https://careers.trizenventures.com/" },
  ];

  return (
    <header className="sticky bg-[#f0effc] top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/trizen-logo.png"
              alt="Trizen Logo"
              className="h-14"
            />
          </Link>

          <nav className="hidden text-base lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-link"
                >
                  {link.label}
                </a>
              ) : link.href.includes("#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  className={`navbar-link ${
                    currentPath === "/" && typeof window !== "undefined" && window.location.hash === link.href.slice(1) ? "text-trizen-purple font-medium" : ""
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`navbar-link ${
                    currentPath === link.href ? "text-trizen-purple font-medium" : ""
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/consulting/contact" className="hidden lg:inline-flex">
            <Button
              size="sm"
              className="bg-trizen-purple hover:bg-[#2F2468] text-white transition-all duration-200"
            >
              Start a Project
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden text-gray-600 focus:outline-none p-2">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85%] sm:w-[350px] overflow-y-auto"
            >
              <div className="py-6 space-y-6">
                {navLinks.map((link) =>
                  link.href.startsWith("http") ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-base font-medium text-trizen-dark hover:text-trizen-purple"
                    >
                      {link.label}
                    </a>
                  ) : link.href.includes("#") ? (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-base font-medium text-trizen-dark hover:text-trizen-purple"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`block px-4 py-2 text-base font-medium ${
                        currentPath === link.href ? "text-trizen-purple" : "text-trizen-dark hover:text-trizen-purple"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="border-t border-gray-200 pt-4">
                  <Link
                    to="/consulting/contact"
                    className="block px-4 py-2 text-base font-medium text-trizen-dark hover:text-trizen-purple"
                  >
                    Start a Project
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
