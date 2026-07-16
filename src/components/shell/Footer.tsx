import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  ChevronDown,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import FadeIn from "@/components/marketing/FadeIn";
import {
  footerColumns,
  siteConfig,
  socialLinks,
  type FooterColumn,
  type SocialNetwork,
} from "@/content/site";
import { cn } from "@/lib/utils";

/** X (Twitter) mark - Lucide has no official X glyph in this version */
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const socialIcon = (id: SocialNetwork, className = "h-4 w-4") => {
  switch (id) {
    case "linkedin":
      return <Linkedin className={className} aria-hidden="true" />;
    case "x":
      return <XIcon className={className} />;
    case "facebook":
      return <Facebook className={className} aria-hidden="true" />;
    case "instagram":
      return <Instagram className={className} aria-hidden="true" />;
    case "careers":
      return <Briefcase className={className} aria-hidden="true" />;
  }
};

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
  const office = siteConfig.registeredOffice;

  return (
    <footer
      className="relative overflow-hidden border-t border-zinc-200 bg-gradient-to-b from-white via-indigo-50/30 to-zinc-50 text-zinc-900"
      role="contentinfo"
    >
      <div className="mobile-orb right-0 top-0 h-40 w-40 bg-indigo-400/15 md:hidden" aria-hidden />
      <div className="container relative mx-auto px-4 py-12 md:py-16">
        <FadeIn y={12}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-4 min-h-11">
              <OptimizedImage
                src="/lovable-uploads/trizen-logo.png"
                alt={siteConfig.name}
                width={160}
                height={37}
                className="h-9 w-auto"
              />
            </Link>

            {/* Brand hierarchy: tagline → positioning pill → core promise */}
            <p className="text-base font-medium tracking-[-0.02em] text-zinc-900 mb-3">
              {siteConfig.tagline}
            </p>
            <p className="mb-4 inline-flex max-w-full rounded-full border border-indigo-100 bg-indigo-50/80 px-3 py-1 text-xs font-medium text-indigo-700">
              {siteConfig.positioning}
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mb-6">
              {siteConfig.description}
            </p>

            <nav aria-label="Social and careers">
              <ul className="flex flex-wrap items-center gap-2">
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      title={link.label}
                      className={cn(
                        "inline-flex h-10 w-10 items-center justify-center rounded-xl",
                        "border border-zinc-200 bg-white text-zinc-600",
                        "hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600",
                        "transition-colors touch-manipulation"
                      )}
                    >
                      {socialIcon(link.id)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
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
        </FadeIn>

        {/* Registered office + contact information */}
        <div className="border-t border-zinc-200 pt-8 mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-600 mb-3">
              {office.label}
            </p>
            <address className="not-italic flex gap-2.5 text-sm text-zinc-600 leading-relaxed max-w-md">
              <MapPin
                className="h-4 w-4 shrink-0 mt-0.5 text-indigo-600"
                aria-hidden="true"
              />
              <span>
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </address>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-600 mb-3">
              Contact Information
            </p>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="inline-flex items-center gap-2.5 min-h-10 hover:text-indigo-600 transition-colors touch-manipulation"
                >
                  <Phone className="h-4 w-4 shrink-0 text-indigo-600" aria-hidden="true" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2.5 min-h-10 hover:text-indigo-600 transition-colors touch-manipulation"
                >
                  <Mail className="h-4 w-4 shrink-0 text-indigo-600" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
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
