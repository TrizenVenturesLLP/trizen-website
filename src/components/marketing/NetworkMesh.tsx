import { cn } from "@/lib/utils";

interface NetworkMeshProps {
  className?: string;
  variant?: "flow" | "nodes" | "signal";
}

/** Animated network / workflow SVG for card media zones */
const NetworkMesh = ({ className, variant = "flow" }: NetworkMeshProps) => {
  if (variant === "nodes") {
    return (
      <svg
        viewBox="0 0 240 140"
        className={cn("w-full max-w-[240px] h-auto text-zinc-400 network-mesh", className)}
        aria-hidden
      >
        <g className="network-pulse">
          <circle cx="120" cy="70" r="18" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <circle cx="40" cy="36" r="10" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <circle cx="200" cy="36" r="10" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <circle cx="40" cy="104" r="10" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <circle cx="200" cy="104" r="10" fill="none" stroke="currentColor" strokeWidth="1.1" />
        </g>
        <g className="network-draw" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.55">
          <path d="M50 42 L102 62" />
          <path d="M190 42 L138 62" />
          <path d="M50 98 L102 78" />
          <path d="M190 98 L138 78" />
        </g>
      </svg>
    );
  }

  if (variant === "signal") {
    return (
      <svg
        viewBox="0 0 280 140"
        className={cn("w-full max-w-[280px] h-auto text-zinc-400 network-mesh", className)}
        aria-hidden
      >
        <path
          className="network-draw"
          d="M24 100 L70 40 L118 86 L168 30 L220 92 L256 58"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g className="network-pulse">
          <circle cx="70" cy="40" r="3.5" fill="currentColor" />
          <circle cx="168" cy="30" r="3.5" fill="currentColor" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 280 140"
      className={cn("w-full max-w-[280px] h-auto text-zinc-400 network-mesh", className)}
      aria-hidden
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.25">
        <rect className="network-pulse" x="12" y="52" width="52" height="34" rx="6" />
        <rect className="network-pulse" x="114" y="22" width="52" height="34" rx="6" style={{ animationDelay: "0.4s" }} />
        <rect className="network-pulse" x="114" y="84" width="52" height="34" rx="6" style={{ animationDelay: "0.8s" }} />
        <rect className="network-pulse" x="216" y="52" width="52" height="34" rx="6" style={{ animationDelay: "1.2s" }} />
      </g>
      <g className="network-draw" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7">
        <path d="M64 69 H114" />
        <path d="M166 39 H216" />
        <path d="M166 101 H216" />
      </g>
      <g className="network-pulse" fill="currentColor">
        <circle cx="89" cy="69" r="2.5" />
        <circle cx="191" cy="39" r="2.5" />
        <circle cx="191" cy="101" r="2.5" />
      </g>
    </svg>
  );
};

export default NetworkMesh;
