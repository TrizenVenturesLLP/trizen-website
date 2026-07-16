import { useEffect } from "react";

interface JsonLdProps {
  /** Unique id so multiple schemas can coexist and clean up on unmount */
  id: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Injects JSON-LD into document head for the lifetime of the component.
 */
const JsonLd = ({ id, data }: JsonLdProps) => {
  const serialized = JSON.stringify(data);

  useEffect(() => {
    const scriptId = `jsonld-${id}`;
    let el = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = scriptId;
      document.head.appendChild(el);
    }

    el.textContent = serialized;

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [id, serialized]);

  return null;
};

export default JsonLd;
