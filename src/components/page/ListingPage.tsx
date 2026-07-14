import { ReactNode } from "react";
import SectionHeader from "@/components/marketing/SectionHeader";
import CTABanner from "@/components/marketing/CTABanner";
import PageMeta from "@/components/marketing/PageMeta";
import FadeIn from "@/components/marketing/FadeIn";
import { cn } from "@/lib/utils";

type IntroMesh = "none" | "white" | "muted" | "mesh";

interface ListingPageProps {
  /** SEO */
  title: string;
  path: string;
  description: string;
  /** Intro SectionHeader */
  eyebrow: string;
  heading: string;
  intro: string;
  /** Hero band background */
  mesh?: IntroMesh;
  /** Main listing body (grid, etc.) */
  children: ReactNode;
  /** Body section classes */
  bodyClassName?: string;
  bodyContainerClassName?: string;
  /** Optional bottom CTA */
  cta?: {
    title: string;
    description: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    primaryLabel?: string;
    primaryHref?: string;
  };
}

const meshClass: Record<IntroMesh, string> = {
  none: "border-b border-zinc-200 bg-white",
  white: "border-b border-zinc-200 bg-white",
  muted:
    "relative overflow-hidden border-b border-zinc-200 section-mesh-muted",
  mesh: "relative overflow-hidden border-b border-zinc-200 section-mesh",
};

/**
 * Shared shell for catalog / listing index pages:
 * PageMeta → intro hero → body → optional CTABanner.
 */
const ListingPage = ({
  title,
  path,
  description,
  eyebrow,
  heading,
  intro,
  mesh = "white",
  children,
  bodyClassName,
  bodyContainerClassName,
  cta,
}: ListingPageProps) => {
  return (
    <>
      <PageMeta title={title} path={path} description={description} />

      <section
        className={cn(
          meshClass[mesh],
          "pt-28 pb-20 sm:pt-32 md:pt-36 md:pb-28"
        )}
      >
        <div className="container relative mx-auto px-4">
          <FadeIn>
            <SectionHeader
              eyebrow={eyebrow}
              title={heading}
              description={intro}
            />
          </FadeIn>
        </div>
      </section>

      <section
        className={cn(
          "py-16 md:py-24 border-b border-zinc-200 bg-white",
          bodyClassName
        )}
      >
        <div className={cn("container mx-auto px-4", bodyContainerClassName)}>
          {children}
        </div>
      </section>

      {cta ? (
        <CTABanner
          title={cta.title}
          description={cta.description}
          primaryLabel={cta.primaryLabel}
          primaryHref={cta.primaryHref}
          secondaryLabel={cta.secondaryLabel}
          secondaryHref={cta.secondaryHref}
        />
      ) : null}
    </>
  );
};

export default ListingPage;
