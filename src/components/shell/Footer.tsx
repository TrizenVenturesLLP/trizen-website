import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Linkedin } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { footerColumns, siteConfig, type FooterColumn } from "@/content/site";
import { cn } from "@/lib/utils";

const FooterNavColumn = ({
  column,
  open,
  onToggle,
}: {
  column: FooterColumn;
  open: boolean;
  onToggle: () => void;
}) => {
  const panelId = `footer-panel-${column.title.toLowerCase().replace(/\s+/g, "-")}`;
  const buttonId = `footer-btn-${column.title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="border-b border-zinc-200 md:border-0 pb-1 md:pb-0">
      {/* Mobile: accordion trigger · Desktop: static heading */}
      <button
        type="button"
        id={buttonId}
        className="flex w-full items-center justify-between gap-3 min-h-12 py-3 md:hidden touch-manipulation"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-600">
          {column.title}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-zinc-500 transition-transform duration-300 ease-out",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      <h3 className="hidden md:block font-mono text-xs font-medium uppercase tracking-widest text-indigo-600 mb-4">
        {column.title}
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out md:!grid-rows-[1fr]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] md:grid-rows-[1fr]"
        )}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1 pb-3 md:space-y-3 md:pb-0">
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
      </div>
    </div>
  );
};

const Footer = () => {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <footer
      className="relative overflow-hidden border-t border-zinc-200 bg-gradient-to-b from-white via-indigo-50/30 to-zinc-50 text-zinc-900"
      role="contentinfo"
    >
      <div className="mobile-orb right-0 top-0 h-40 w-40 bg-indigo-400/15 md:hidden" aria-hidden />
      <div className="container relative mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-8 mb-12">
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
            <FooterNavColumn
              key={column.title}
              column={column}
              open={openTitle === column.title}
              onToggle={() =>
                setOpenTitle((current) =>
                  current === column.title ? null : column.title
                )
              }
            />
          ))}
        </div>

        <div className="border-t border-zinc-200 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-500">
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
