import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-zinc-50 px-4 py-20">
      <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm text-center max-w-md">
        <div className="flex justify-center mb-4 text-indigo-600">
          <AlertTriangle className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-semibold text-zinc-900 mb-2">Page not found</h1>
        <p className="text-zinc-600 mb-6">
          The page you&apos;re looking for doesn&apos;t seem to exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
