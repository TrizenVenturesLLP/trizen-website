import { User, Search, HelpCircle, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Get current path to determine active page
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <header className="sticky bg-[#f0effc] top-0 w-full z-50">
      <div className="container mx-auto px-4 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/trizen-logo.png" alt="Trizen Logo" className="h-14" />
          </a>

          {/* Navigation Links - Desktop Only */}
          <nav className="hidden text-base lg:flex items-center space-x-8">
            <a 
              href="/research" 
              className={`navbar-link ${currentPath === '/research' ? 'text-trizen-purple font-medium' : ''}`}
            >
              Research
            </a>
            <a 
              href="/consulting" 
              className={`navbar-link ${currentPath === '/consulting' ? 'text-trizen-purple font-medium' : ''}`}
            >
              Consulting
            </a>
            <a 
              href="/training" 
              className={`navbar-link ${currentPath === '/training' ? 'text-trizen-purple font-medium' : ''}`}
            >
              Training
            </a>
            <a 
              href="/insights" 
              className={`navbar-link ${currentPath === '/insights' ? 'text-trizen-purple font-medium' : ''}`}
            >
              Insights
            </a>
            <a 
              href="/careers" 
              className={`navbar-link ${currentPath === '/careers' ? 'text-trizen-purple font-medium' : ''}`}
            >
              Careers
            </a>
          </nav>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-trizen-purple">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-gray-600 hover:text-trizen-purple">
            <HelpCircle className="h-5 w-5" />
          </button>
          <div className="relative navbar-dropdown-trigger">
            <button className="text-gray-600 hover:text-trizen-purple p-1 border border-transparent hover:border-gray-200 rounded">
              <User className="h-5 w-5" />
            </button>
            <div className="navbar-dropdown right-0 left-auto w-40">
              <div className="py-2 px-4 bg-trizen-light font-medium text-sm">My Trizen</div>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Log in</a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Register</a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden text-gray-600 focus:outline-none">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] sm:w-[350px] overflow-y-auto">
              <div className="py-6 space-y-6">
                <a 
                  href="/research" 
                  className={`block px-4 py-2 text-base font-medium ${
                    currentPath === '/research' ? 'text-trizen-purple' : 'text-trizen-dark hover:text-trizen-purple'
                  }`}
                >
                  Research
                </a>
                <a 
                  href="/consulting" 
                  className={`block px-4 py-2 text-base font-medium ${
                    currentPath === '/consulting' ? 'text-trizen-purple' : 'text-trizen-dark hover:text-trizen-purple'
                  }`}
                >
                  Consulting
                </a>
                <a 
                  href="/training" 
                  className={`block px-4 py-2 text-base font-medium ${
                    currentPath === '/training' ? 'text-trizen-purple' : 'text-trizen-dark hover:text-trizen-purple'
                  }`}
                >
                  Training
                </a>
                <a 
                  href="/insights" 
                  className={`block px-4 py-2 text-base font-medium ${
                    currentPath === '/insights' ? 'text-trizen-purple' : 'text-trizen-dark hover:text-trizen-purple'
                  }`}
                >
                  Insights
                </a>
                <a 
                  href="/careers" 
                  className={`block px-4 py-2 text-base font-medium ${
                    currentPath === '/careers' ? 'text-trizen-purple' : 'text-trizen-dark hover:text-trizen-purple'
                  }`}
                >
                  Careers
                </a>
                
                <div className="border-t border-gray-200 pt-4 space-y-4">
                  <a href="#" className="block px-4 py-2 text-base font-medium text-trizen-dark hover:text-trizen-purple">
                    Login
                  </a>
                  <a href="#" className="block px-4 py-2 text-base font-medium text-trizen-dark hover:text-trizen-purple">
                    Register
                  </a>
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