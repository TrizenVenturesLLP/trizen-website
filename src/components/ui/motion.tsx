
import React from "react";

type MotionProps = {
  children: React.ReactNode;
  className?: string;
  fadeInOnScroll?: boolean;
  slideInFromLeft?: boolean;
  slideInFromRight?: boolean;
  slideInFromTop?: boolean;
  slideInFromBottom?: boolean;
  hoverScale?: boolean;
};

export const motion = React.forwardRef<HTMLDivElement, MotionProps>(
  ({ 
    children, 
    className, 
    fadeInOnScroll = false,
    slideInFromLeft = false,
    slideInFromRight = false,
    slideInFromTop = false,
    slideInFromBottom = false,
    hoverScale = false,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(!fadeInOnScroll);
    const elementRef = React.useRef<HTMLDivElement>(null);
    const combinedRef = useCombinedRefs(ref, elementRef);

    React.useEffect(() => {
      if (!fadeInOnScroll && 
          !slideInFromLeft && 
          !slideInFromRight && 
          !slideInFromTop && 
          !slideInFromBottom) {
        return;
      }

      const currentElement = elementRef.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(currentElement!);
          }
        },
        { threshold: 0.1 }
      );

      if (currentElement) {
        observer.observe(currentElement);
      }

      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, [fadeInOnScroll, slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom]);

    let animationClasses = '';
    if (fadeInOnScroll) {
      animationClasses += isVisible ? ' animate-fade-in' : ' opacity-0';
    }
    if (slideInFromLeft) {
      animationClasses += isVisible ? ' animate-slide-in-from-left' : ' opacity-0 -translate-x-8';
    }
    if (slideInFromRight) {
      animationClasses += isVisible ? ' animate-slide-in-from-right' : ' opacity-0 translate-x-8';
    }
    if (slideInFromTop) {
      animationClasses += isVisible ? ' animate-slide-in-from-top' : ' opacity-0 -translate-y-8';
    }
    if (slideInFromBottom) {
      animationClasses += isVisible ? ' animate-slide-in-from-bottom' : ' opacity-0 translate-y-8';
    }
    if (hoverScale) {
      animationClasses += ' transition-transform duration-300 hover:scale-105';
    }

    return (
      <div
        ref={combinedRef}
        className={`${className} ${animationClasses}`.trim()}
        {...props}
      >
        {children}
      </div>
    );
  }
);

motion.displayName = "Motion";

// Helper function to combine refs
function useCombinedRefs(...refs: any[]) {
  const targetRef = React.useRef(null);

  React.useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return;
      
      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}

export default motion;
