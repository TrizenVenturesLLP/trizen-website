import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { BookButton } from "@/components/page";
import { primaryNav, siteConfig, type NavLink } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Contained floating navbar — one rounded glass bar.
 */
const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (link: NavLink) => {
    const prefixes = link.match ?? [link.href];
    return prefixes.some((prefix) =>
      prefix === "/"
        ? location.pathname === "/"
        : location.pathname === prefix || location.pathname.startsWith(`${prefix}/`)
    );
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full pointer-events-none",
        "pt-[max(0.75rem,env(safe-area-inset-top))] px-3 sm:px-4 md:px-6"
      )}
    >
      <div
        className={cn(
          "pointer-events-auto mx-auto max-w-6xl",
          "flex h-14 sm:h-16 items-center justify-between gap-3 px-3 sm:px-5",
          "rounded-2xl border border-white/80 bg-white/75 backdrop-blur-xl",
          "shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)]",
          "transition-[box-shadow,background-color,border-color] duration-300",
          scrolled &&
            "border-indigo-100/90 bg-white/90 shadow-[0_12px_40px_-14px_rgba(79,70,229,0.22)]"
        )}
      >
        <Link
          to="/"
          className="flex items-center shrink-0 min-h-11 touch-manipulation"
          aria-label={`${siteConfig.name} home`}
        >
          <OptimizedImage
            src="/lovable-uploads/trizen-logo.png"
            alt=""
            width={160}
            height={37}
            priority
            className="h-8 sm:h-9 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 touch-manipulation",
                isActive(link)
                  ? "text-indigo-700 bg-indigo-50"
                  : "text-zinc-600 hover:text-indigo-600 hover:bg-zinc-50/80"
              )}
              aria-current={isActive(link) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <BookButton
            size="sm"
            className="hidden sm:inline-flex touch-manipulation pl-3.5 pr-1.5"
          />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center rounded-lg min-h-10 min-w-10 text-zinc-700 hover:bg-zinc-100/80 transition-colors touch-manipulation"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-nav"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </SheetTrigger>
            <SheetContent
              id="mobile-nav"
              side="right"
              className="w-[min(100%,360px)] border-l border-zinc-200 bg-white px-0"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex flex-col h-full pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                <Link
                  to="/"
                  className="mb-8 px-5 min-h-11 inline-flex items-center"
                  onClick={() => setOpen(false)}
                >
                  <OptimizedImage
                    src="/lovable-uploads/trizen-logo.png"
                    alt={siteConfig.name}
                    width={140}
                    height={32}
                    className="h-8 w-auto"
                  />
                </Link>
                <nav className="flex flex-col gap-0.5 px-2" aria-label="Mobile primary">
                  {primaryNav.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        to={link.href}
                        className={cn(
                          "rounded-lg px-4 min-h-12 inline-flex items-center text-base font-medium transition-colors touch-manipulation",
                          isActive(link)
                            ? "text-indigo-700 bg-indigo-50"
                            : "text-zinc-700 hover:text-indigo-600 hover:bg-zinc-50"
                        )}
                        aria-current={isActive(link) ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto px-5 pt-8 border-t border-zinc-100 space-y-2">
                  <SheetClose asChild>
                    <Button asChild className="w-full min-h-12 touch-manipulation" size="lg">
                      <Link to={siteConfig.contactHref}>Book a Consultation</Link>
                    </Button>
                  </SheetClose>
                  <a
                    href={siteConfig.careersHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center justify-center text-sm text-zinc-500 hover:text-indigo-600 transition-colors"
                  >
                    Careers
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
