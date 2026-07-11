import FadeIn from "@/components/marketing/FadeIn";
import SectionHeader from "@/components/marketing/SectionHeader";
import { techStackCategories } from "@/content/techStack";

const TechStack = () => {
  return (
    <section
      className="py-24 md:py-32 border-b border-zinc-200 bg-zinc-50 text-zinc-900"
      aria-labelledby="tech-stack-heading"
    >
      <div className="container mx-auto px-4">
        <FadeIn className="mb-10 md:mb-14">
          <SectionHeader
            tone="light"
            eyebrow="Technology Stack"
            title="The platforms we build production AI on"
            description="We select models, data stores, and orchestration for your constraints (security, latency, cost, and team ownership), not for demos."
          />
          <p id="tech-stack-heading" className="sr-only">
            Technology stack by category
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {techStackCategories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 0.06}>
              <div className="glass-panel-light card-lift-light rounded-2xl p-6 md:p-7 h-full">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-3">
                  {category.title}
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  {category.description}
                </p>
                <ul className="flex flex-wrap gap-2" aria-label={category.title}>
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
