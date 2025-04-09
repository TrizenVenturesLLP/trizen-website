
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show the card after 3 seconds
    const timer = setTimeout(() => {
      // Check if the user hasn't dismissed it already
      const dismissed = localStorage.getItem('ctaDismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    // Remember that the user dismissed it
    localStorage.setItem('ctaDismissed', 'true');
    
    // Remove the dismissed status after 24 hours
    setTimeout(() => {
      localStorage.removeItem('ctaDismissed');
    }, 24 * 60 * 60 * 1000);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 max-w-[90vw] sm:max-w-[320px] bg-trizen-purple shadow-xl rounded-xl p-4 sm:p-6 border border-purple-700 animate-tab-fade-in">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg sm:text-xl font-heading font-semibold text-white tracking-tight">
            300+ Final Year Project Ideas
          </h3>
          <p className="text-purple-100 mt-2 sm:mt-3 font-body text-sm sm:text-base leading-relaxed">
            Explore trending AI, Web, and IoT project topics tailored for students!
          </p>
        </div>
        <button 
          onClick={handleDismiss}
          className="text-purple-300 hover:text-white transition-colors p-1"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-4 sm:mt-5">
        <Button 
          className="w-full bg-trizen-blue hover:bg-trizen-blue/90 py-4 sm:py-5 button-text uppercase tracking-wide"
        >
          Discover Projects
        </Button>
      </div>
    </div>
  );
};

export default FloatingCard;
