import { useEffect } from "react";

const TITLE_SUFFIX = "Trizen AI Transformation";
const SITE_URL = "https://trizenventures.com";

interface PageMetaProps {
  /** Page name shown before the brand suffix */
  title: string;
  description?: string;
  /** Path only, e.g. "/services" ,  used for canonical + og:url */
  path?: string;
  noIndex?: boolean;
}

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string
): () => void {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  const created = !el;
  const previous = el?.getAttribute("content") ?? null;

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);

  return () => {
    if (!el) return;
    if (created) {
      el.remove();
    } else if (previous !== null) {
      el.setAttribute("content", previous);
    }
  };
}

function upsertLink(rel: string, href: string): () => void {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  const created = !el;
  const previous = el?.getAttribute("href") ?? null;

  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);

  return () => {
    if (!el) return;
    if (created) {
      el.remove();
    } else if (previous !== null) {
      el.setAttribute("href", previous);
    }
  };
}

/**
 * Lightweight SPA SEO helper ,  title, description, Open Graph, Twitter, canonical.
 */
const PageMeta = ({ title, description, path, noIndex }: PageMetaProps) => {
  useEffect(() => {
    const fullTitle = `${title} | ${TITLE_SUFFIX}`;
    const previousTitle = document.title;
    document.title = fullTitle;

    const cleanups: Array<() => void> = [];
    const desc =
      description ??
      "Trizen helps enterprises design, deploy, and scale AI systems that deliver measurable operational outcomes.";
    const url = path ? `${SITE_URL}${path}` : SITE_URL;

    cleanups.push(upsertMeta("name", "description", desc));
    cleanups.push(upsertMeta("property", "og:title", fullTitle));
    cleanups.push(upsertMeta("property", "og:description", desc));
    cleanups.push(upsertMeta("property", "og:type", "website"));
    cleanups.push(upsertMeta("property", "og:url", url));
    cleanups.push(upsertMeta("property", "og:site_name", "Trizen"));
    cleanups.push(upsertMeta("name", "twitter:card", "summary_large_image"));
    cleanups.push(upsertMeta("name", "twitter:title", fullTitle));
    cleanups.push(upsertMeta("name", "twitter:description", desc));
    cleanups.push(upsertLink("canonical", url));

    if (noIndex) {
      cleanups.push(upsertMeta("name", "robots", "noindex, nofollow"));
    }

    return () => {
      document.title = previousTitle;
      cleanups.forEach((fn) => fn());
    };
  }, [title, description, path, noIndex]);

  return null;
};

export default PageMeta;
