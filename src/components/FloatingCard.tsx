
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
    <div className="fixed bottom-6 right-6 z-50 w-80 aspect-square bg-trizen-dark text-white shadow-xl rounded-xl p-6 border border-gray-700 animate-tab-fade-in">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-white">
            300+ Final Year Project Ideas
          </h3>
          <p className="text-gray-300 mt-3 text-base">
            Explore trending AI, Web, and IoT project topics tailored for students!
          </p>
        </div>
        <button 
          onClick={handleDismiss}
          className="text-gray-400 hover:text-white transition-colors p-1"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute bottom-6 left-6 right-6">
        <Button 
          className="w-full bg-trizen-blue hover:bg-trizen-blue/90 py-6 text-base"
        >
          Discover Projects
        </Button>
      </div>
    </div>
  );
};

export default FloatingCard;
