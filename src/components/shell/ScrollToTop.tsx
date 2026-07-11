import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Reset scroll on client-side route changes (SPA). */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
