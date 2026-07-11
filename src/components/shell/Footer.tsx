import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { footerColumns, siteConfig } from "@/content/site";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white text-zinc-900" role="contentinfo">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-5 min-h-11">
              <OptimizedImage
                src="/lovable-uploads/trizen-logo.png"
                alt={siteConfig.name}
                width={160}
                height={37}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm font-medium text-zinc-900 mb-2">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-sm mb-6">
              {siteConfig.description}
            </p>
            <a
              href={siteConfig.linkedInHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-11 text-sm text-zinc-600 hover:text-indigo-600 transition-colors touch-manipulation"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-600 mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.href}`}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center text-sm text-zinc-600 hover:text-indigo-600 transition-colors touch-manipulation"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="inline-flex min-h-10 items-center text-sm text-zinc-600 hover:text-indigo-600 transition-colors touch-manipulation"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-200 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <Link to="/privacy" className="hover:text-indigo-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-indigo-600 transition-colors">
              Terms of Service
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-indigo-600 transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
