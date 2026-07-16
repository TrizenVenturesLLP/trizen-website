/**
 * Parse a leading numeric metric from copy like "70% faster…", "2×", or "6 wks".
 */
export function parseLeadingMetric(
  text: string
): { value: number; suffix: string; rest: string } | null {
  const match = text.match(/^(\d+(?:\.\d+)?)\s*(%|×|x)?\s*(.*)$/i);
  if (!match) return null;
  return {
    value: Number(match[1]),
    suffix: match[2]?.toLowerCase() === "x" ? "×" : match[2] || "",
    rest: match[3]?.trim() ?? "",
  };
}
