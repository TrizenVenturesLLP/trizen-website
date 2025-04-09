import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
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
    localStorage.setItem('ctaDismissed', 'true');

    setTimeout(() => {
      localStorage.removeItem('ctaDismissed');
    }, 24 * 60 * 60 * 1000);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 max-w-[300px] md:max-w-[320px] bg-gray-800 shadow-xl rounded-xl p-4 md:p-6 border border-gray-700 animate-tab-fade-in">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white">
            Dummy Card Title
          </h3>
          <p className="text-gray-300 mt-2 md:mt-3 text-sm md:text-base">
            This is a placeholder text for testing the floating card component.
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
      <div className="mt-4 md:mt-5">
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-500 py-4 md:py-5 text-sm md:text-base"
        >
          Dummy Button
        </Button>
      </div>
    </div>
  );
};

export default FloatingCard;
