
import { User, Search, HelpCircle, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/trizen-logo.png" alt="Trizen Logo" className="h-14" />
          </a>

          {/* Navigation Links - Desktop Only */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="navbar-link">Consulting</div>
            
            <div className="navbar-link navbar-dropdown-trigger">
              <div className="flex items-center">
                Capabilities
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
              <div className="navbar-dropdown">
                <div className="py-2 px-4 bg-trizen-light font-medium text-sm">Services</div>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Application Services</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Artificial Intelligence</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Automation</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Business Strategy</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Cloud</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Customer Experience</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Cybersecurity</a>
                <a href="#" className="px-4 py-3 text-trizen-blue flex items-center text-sm font-medium">
                  See All Services
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>

            <div className="navbar-link navbar-dropdown-trigger">
              <div className="flex items-center">
                Industries
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
              <div className="navbar-dropdown">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Energy</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Financial Services</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Government</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Healthcare Services</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Retail</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Telecommunications</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">US Federal</a>
              </div>
            </div>

            <div className="navbar-link">Strategic Partners</div>
            <div className="navbar-link">Insights</div>
            <div className="navbar-link">Careers</div>
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
                <a href="#" className="block px-4 py-2 text-base font-medium text-trizen-dark hover:text-trizen-purple">
                  Consulting
                </a>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="px-4 text-base font-medium text-trizen-dark mb-2">Capabilities</div>
                  <div className="ml-4 space-y-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      Application Services
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      Artificial Intelligence
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      Automation
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      Business Strategy
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      Cloud
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      Customer Experience
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      Cybersecurity
                    </a>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="px-4 text-base font-medium text-trizen-dark mb-2">Industries</div>
                  <div className="ml-4 space-y-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      Energy
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      Financial Services
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      Government
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      Healthcare Services
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      Retail
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      Telecommunications
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-trizen-purple">
                      US Federal
                    </a>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 space-y-4">
                  <a href="#" className="block px-4 py-2 text-base font-medium text-trizen-dark hover:text-trizen-purple">
                    Strategic Partners
                  </a>
                  <a href="#" className="block px-4 py-2 text-base font-medium text-trizen-dark hover:text-trizen-purple">
                    Insights
                  </a>
                  <a href="#" className="block px-4 py-2 text-base font-medium text-trizen-dark hover:text-trizen-purple">
                    Careers
                  </a>
                </div>
                
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
