import { cva, type VariantProps } from "class-variance-authority";

/**
 * Shared surface / card class variants for marketing UI.
 * Prefer these over ad-hoc glass-panel class strings.
 */

export const surfaceVariants = cva(
  "relative overflow-hidden border border-zinc-200 bg-white transform-gpu",
  {
    variants: {
      radius: {
        lg: "rounded-xl",
        xl: "rounded-2xl",
        "2xl": "rounded-2xl md:rounded-3xl",
      },
      pad: {
        none: "",
        sm: "p-5 md:p-6",
        md: "p-6 md:p-7",
        lg: "p-7 md:p-8",
        xl: "p-8 md:p-10",
      },
      shadow: {
        none: "",
        soft: "shadow-[0_1px_2px_rgb(15_23_42/0.04)]",
        md: "shadow-md shadow-indigo-500/5",
        lg: "shadow-lg shadow-indigo-500/10",
      },
    },
    defaultVariants: {
      radius: "xl",
      pad: "none",
      shadow: "soft",
    },
  }
);

export const cardVariants = cva(
  [
    "group glass-panel-light card-lift-light flex h-full flex-col",
    "transition-[border-color,box-shadow,transform]",
    "hover:border-indigo-200",
  ].join(" "),
  {
    variants: {
      layout: {
        /** Text listing card (industries, insights) */
        content: "rounded-2xl p-7 md:p-8",
        /** Product card with media on top */
        product: "w-full rounded-2xl overflow-hidden",
        /** Home product showcase */
        productHome:
          "card-sheen w-full min-h-[440px] rounded-2xl overflow-hidden border-indigo-100/80 shadow-md shadow-indigo-500/5 hover:shadow-lg hover:shadow-indigo-500/10",
      },
    },
    defaultVariants: {
      layout: "content",
    },
  }
);

export type SurfaceVariants = VariantProps<typeof surfaceVariants>;
export type CardVariants = VariantProps<typeof cardVariants>;
