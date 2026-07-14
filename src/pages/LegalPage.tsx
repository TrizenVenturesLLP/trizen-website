import { Link } from "react-router-dom";
import PageMeta from "@/components/marketing/PageMeta";
import FadeIn from "@/components/marketing/FadeIn";
import { legalLastUpdated, type LegalSection } from "@/content/legal";
import { siteConfig } from "@/content/site";

interface LegalPageProps {
  title: string;
  path: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: LegalSection[];
  alternate: { label: string; href: string };
}

/**
 * Shared layout for Privacy Policy and Terms of Service.
 */
const LegalPage = ({
  title,
  path,
  description,
  eyebrow,
  intro,
  sections,
  alternate,
}: LegalPageProps) => {
  return (
    <>
      <PageMeta title={title} path={path} description={description} />

      <section className="border-b border-zinc-200 bg-white pt-28 pb-20 sm:pt-32 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn y={12}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-indigo-600 mb-4">
              {eyebrow}
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.035em] text-zinc-900 mb-5">
              {title}
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-4">{intro}</p>
            <p className="text-sm text-zinc-500">
              Last updated: {legalLastUpdated} · {siteConfig.name}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-14 md:py-20 border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav
            aria-label="On this page"
            className="mb-12 rounded-2xl border border-zinc-200 bg-white p-5 md:p-6"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400 mb-3">
              On this page
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-zinc-600 hover:text-indigo-600 transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <article key={section.id} id={section.id} className="scroll-mt-28">
                <FadeIn delay={Math.min(index * 0.04, 0.16)}>
                  <h2 className="text-xl font-semibold tracking-[-0.02em] text-zinc-900 mb-4">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-zinc-600 leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets?.length ? (
                    <ul className="mt-4 space-y-2.5">
                      {section.bullets.map((item) => (
                        <li
                          key={item.slice(0, 48)}
                          className="flex gap-3 text-sm text-zinc-600 leading-relaxed"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </FadeIn>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <Link to={alternate.href} className="text-indigo-600 hover:text-indigo-700 transition-colors">
              {alternate.label}
            </Link>
            <span aria-hidden>·</span>
            <Link to="/contact" className="hover:text-indigo-600 transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
