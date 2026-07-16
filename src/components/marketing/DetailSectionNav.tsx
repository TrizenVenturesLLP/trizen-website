import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface DetailNavItem {
  id: string;
  label: string;
}

interface DetailSectionNavProps {
  items: DetailNavItem[];
  className?: string;
}

/**
 * Sticky in-page section nav for long detail pages.
 */
const DetailSectionNav = ({ items, className }: DetailSectionNavProps) => {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) return;

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav
      aria-label="On this page"
      className={cn(
        "sticky top-20 z-30 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md",
        className
      )}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <ul className="flex gap-1 overflow-x-auto py-2.5 scrollbar-none -mx-1 px-1">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className={cn(
                  "inline-flex rounded-lg px-3 py-2 text-sm font-medium transition-colors touch-manipulation",
                  active === item.id
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                )}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DetailSectionNav;
