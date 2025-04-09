
import { User, Search, HelpCircle, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { 
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerTrigger
} from "@/components/ui/drawer";

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

          {/* Navigation Links - Desktop */}
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
          
          {/* Mobile Menu Button */}
          <Drawer>
            <DrawerTrigger asChild>
              <button className="lg:hidden text-gray-600 hover:text-trizen-purple">
                <Menu className="w-6 h-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-[90vh]">
              <div className="px-6 py-6">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-heading font-semibold text-xl">Menu</h3>
                  <DrawerClose className="text-gray-500 hover:text-gray-800">
                    <X className="w-5 h-5" />
                  </DrawerClose>
                </div>
                
                <nav className="space-y-6">
                  <a href="#" className="block font-subheading font-medium text-lg py-2 border-b border-gray-100">Consulting</a>
                  
                  <div>
                    <div className="font-subheading font-medium text-lg py-2 border-b border-gray-100">Capabilities</div>
                    <div className="pl-4 mt-2 space-y-3">
                      <a href="#" className="block text-base font-body py-1">Application Services</a>
                      <a href="#" className="block text-base font-body py-1">Artificial Intelligence</a>
                      <a href="#" className="block text-base font-body py-1">Automation</a>
                      <a href="#" className="block text-base font-body py-1">Business Strategy</a>
                      <a href="#" className="block text-base font-body py-1">Cloud</a>
                      <a href="#" className="mt-2 text-trizen-blue flex items-center text-base font-subheading font-medium">
                        See All Services
                        <span className="ml-1">→</span>
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-subheading font-medium text-lg py-2 border-b border-gray-100">Industries</div>
                    <div className="pl-4 mt-2 space-y-3">
                      <a href="#" className="block text-base font-body py-1">Energy</a>
                      <a href="#" className="block text-base font-body py-1">Financial Services</a>
                      <a href="#" className="block text-base font-body py-1">Government</a>
                      <a href="#" className="block text-base font-body py-1">Healthcare Services</a>
                      <a href="#" className="block text-base font-body py-1">Retail</a>
                    </div>
                  </div>
                  
                  <a href="#" className="block font-subheading font-medium text-lg py-2 border-b border-gray-100">Strategic Partners</a>
                  <a href="#" className="block font-subheading font-medium text-lg py-2 border-b border-gray-100">Insights</a>
                  <a href="#" className="block font-subheading font-medium text-lg py-2 border-b border-gray-100">Careers</a>
                  
                  {/* Mobile User Options */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="font-subheading font-medium text-base mb-2 text-gray-500">My Trizen</div>
                    <div className="space-y-3">
                      <a href="#" className="block text-base font-body py-1">Log in</a>
                      <a href="#" className="block text-base font-body py-1">Register</a>
                    </div>
                  </div>
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
