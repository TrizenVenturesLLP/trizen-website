
import React from "react";
import { Menu, User, Search, HelpCircle, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden text-gray-600 focus:outline-none" aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] pt-10">
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <img src="/lovable-uploads/trizen-logo.png" alt="Trizen Logo" className="h-10" />
          </div>
          
          <nav className="flex-1">
            <div className="flex flex-col space-y-6">
              <a href="#" className="flex items-center justify-between py-2 text-base font-subheading font-medium text-trizen-dark hover:text-trizen-purple transition-colors">
                <span>Consulting</span>
              </a>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 text-base font-subheading font-medium text-trizen-dark">
                  <span>Capabilities</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
                <div className="pl-4 space-y-2 border-l border-gray-200">
                  <a href="#" className="block py-1.5 text-sm font-body hover:text-trizen-purple">Application Services</a>
                  <a href="#" className="block py-1.5 text-sm font-body hover:text-trizen-purple">Artificial Intelligence</a>
                  <a href="#" className="block py-1.5 text-sm font-body hover:text-trizen-purple">Automation</a>
                  <a href="#" className="block py-1.5 text-sm font-body hover:text-trizen-purple">Business Strategy</a>
                  <a href="#" className="block py-1.5 text-sm font-body hover:text-trizen-purple">Cloud</a>
                  <a href="#" className="py-2 text-trizen-blue flex items-center text-sm font-subheading font-medium">
                    See All Services
                    <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 text-base font-subheading font-medium text-trizen-dark">
                  <span>Industries</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
                <div className="pl-4 space-y-2 border-l border-gray-200">
                  <a href="#" className="block py-1.5 text-sm font-body hover:text-trizen-purple">Energy</a>
                  <a href="#" className="block py-1.5 text-sm font-body hover:text-trizen-purple">Financial Services</a>
                  <a href="#" className="block py-1.5 text-sm font-body hover:text-trizen-purple">Government</a>
                  <a href="#" className="block py-1.5 text-sm font-body hover:text-trizen-purple">Healthcare Services</a>
                </div>
              </div>
              
              <a href="#" className="flex items-center justify-between py-2 text-base font-subheading font-medium text-trizen-dark hover:text-trizen-purple transition-colors">
                <span>Strategic Partners</span>
              </a>
              
              <a href="#" className="flex items-center justify-between py-2 text-base font-subheading font-medium text-trizen-dark hover:text-trizen-purple transition-colors">
                <span>Insights</span>
              </a>
              
              <a href="#" className="flex items-center justify-between py-2 text-base font-subheading font-medium text-trizen-dark hover:text-trizen-purple transition-colors">
                <span>Careers</span>
              </a>
            </div>
          </nav>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#" className="flex items-center text-sm font-body text-gray-600 hover:text-trizen-purple">
                <User className="mr-3 h-5 w-5" />
                <span>Log in</span>
              </a>
              <a href="#" className="flex items-center text-sm font-body text-gray-600 hover:text-trizen-purple">
                <Search className="mr-3 h-5 w-5" />
                <span>Search</span>
              </a>
              <a href="#" className="flex items-center text-sm font-body text-gray-600 hover:text-trizen-purple">
                <HelpCircle className="mr-3 h-5 w-5" />
                <span>Help Center</span>
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
