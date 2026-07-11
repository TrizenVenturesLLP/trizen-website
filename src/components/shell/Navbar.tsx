import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { primaryNav, siteConfig, type NavLink } from "@/content/site";
import { cn } from "@/lib/utils";

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
    const onScroll = () => setScrolled(window.scrollY > 16);
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
        "sticky top-0 z-50 w-full transition-[box-shadow,border-color,background-color] duration-300",
        "pt-[env(safe-area-inset-top)]",
        "border-b bg-white/90 backdrop-blur-md",
        scrolled ? "border-zinc-200 shadow-sm" : "border-zinc-200/80"
      )}
    >
      <div className="container mx-auto px-4 h-14 sm:h-16 flex items-center justify-between gap-4">
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

        <nav
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8"
          aria-label="Primary"
        >
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200 py-2 touch-manipulation",
                isActive(link)
                  ? "text-indigo-600"
                  : "text-zinc-600 hover:text-indigo-600"
              )}
              aria-current={isActive(link) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Button asChild size="sm" className="hidden sm:inline-flex touch-manipulation">
            <Link to={siteConfig.contactHref}>Book a Consultation</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center rounded-md min-h-11 min-w-11 text-zinc-700 hover:bg-zinc-100 transition-colors touch-manipulation"
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
              className="w-[min(100%,360px)] bg-white border-l border-zinc-200 px-0"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex flex-col h-full pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                <Link
                  to="/"
                  className="mb-6 px-5 min-h-11 inline-flex items-center"
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
                          "rounded-md px-4 min-h-12 inline-flex items-center text-base font-medium transition-colors touch-manipulation",
                          isActive(link)
                            ? "text-indigo-600 bg-indigo-50"
                            : "text-zinc-700 hover:text-indigo-600 hover:bg-zinc-50"
                        )}
                        aria-current={isActive(link) ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto px-5 pt-8 border-t border-zinc-200 space-y-2">
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
