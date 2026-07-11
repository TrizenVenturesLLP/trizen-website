import { Link } from "react-router-dom";
import FadeIn from "@/components/marketing/FadeIn";
import { industryChips } from "@/content/homeData";

const LogoBar = () => {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50 py-10 md:py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs font-medium uppercase tracking-widest text-indigo-600 text-center mb-8">
            Industries we serve
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-12">
            {industryChips.map((chip) => (
              <li key={chip.id}>
                <Link
                  to={`/industries/${chip.slug}`}
                  className="group inline-flex flex-col items-center text-center touch-manipulation min-h-11 justify-center"
                >
                  <span className="text-lg md:text-xl font-medium tracking-wide text-zinc-800 group-hover:text-indigo-600 transition-colors">
                    {chip.name}
                  </span>
                  {chip.relevanceMetric ? (
                    <span className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-600 transition-colors">
                      {chip.relevanceMetric}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
};

export default LogoBar;
