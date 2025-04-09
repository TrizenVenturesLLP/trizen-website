
import { User, Search, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

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

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="navbar-link font-subheading font-medium">Consulting</div>
            
            <div className="navbar-link navbar-dropdown-trigger font-subheading font-medium">
              <div className="flex items-center">
                Capabilities
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
              <div className="navbar-dropdown">
                <div className="py-2 px-4 bg-trizen-light font-subheading font-medium text-sm">Services</div>
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Application Services</a>
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Artificial Intelligence</a>
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Automation</a>
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Business Strategy</a>
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Cloud</a>
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Customer Experience</a>
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Cybersecurity</a>
                <a href="#" className="px-4 py-3 text-trizen-blue flex items-center text-sm font-subheading font-medium">
                  See All Services
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>

            <div className="navbar-link navbar-dropdown-trigger font-subheading font-medium">
              <div className="flex items-center">
                Industries
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
              <div className="navbar-dropdown">
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Energy</a>
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Financial Services</a>
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Government</a>
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Healthcare Services</a>
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Retail</a>
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Telecommunications</a>
                <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">US Federal</a>
              </div>
            </div>

            <div className="navbar-link font-subheading font-medium">Strategic Partners</div>
            <div className="navbar-link font-subheading font-medium">Insights</div>
            <div className="navbar-link font-subheading font-medium">Careers</div>
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
              <div className="py-2 px-4 bg-trizen-light font-subheading font-medium text-sm">My Trizen</div>
              <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Log in</a>
              <a href="#" className="block px-4 py-2 text-sm font-body hover:bg-gray-50">Register</a>
            </div>
          </div>
          <button className="lg:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
