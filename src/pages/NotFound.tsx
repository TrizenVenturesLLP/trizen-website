import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react"; // Lucide icon for a clean warning symbol

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md animate-fade-in">
        <div className="flex justify-center mb-4 text-yellow-500">
          <AlertTriangle className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-semibold mb-2">Lost in space?</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't seem to exist. It might have been moved or deleted.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
