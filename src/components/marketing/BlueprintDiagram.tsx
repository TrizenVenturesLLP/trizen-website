import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type BlueprintType =
  | "strategy"
  | "automation"
  | "agents"
  | "intelligence"
  | "build"
  | "engagement"
  | "hr"
  | "dialog"
  | "community";
export type BlueprintTheme = "light" | "dark";

interface BlueprintDiagramProps {
  type: BlueprintType;
  className?: string;
  active?: boolean;
  theme?: BlueprintTheme;
}

/**
 * High-fidelity schematic SVGs for service pillars.
 * Light theme: ink on paper. Dark theme: chalk on slate.
 */
const BlueprintDiagram = ({
  type,
  className,
  active = true,
  theme = "light",
}: BlueprintDiagramProps) => {
  const reduced = useReducedMotion();
  const animate = active && !reduced;
  const light = theme === "light";

  return (
    <svg
      width="280"
      height="140"
      viewBox="0 0 280 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "relative z-10 w-full max-w-[280px] h-auto",
        light ? "text-zinc-700" : "text-white/70",
        className
      )}
      aria-hidden
    >
      {type === "strategy" && (
        <g>
          <path
            d="M40 90 L100 50 L170 75 L240 35"
            stroke="currentColor"
            strokeWidth="1.5"
            className={light ? "text-zinc-200" : "text-white/15"}
            strokeDasharray="4 4"
          />
          <motion.path
            d="M40 90 L100 50 L170 75 L240 35"
            stroke="currentColor"
            strokeWidth="2"
            className={light ? "text-indigo-500" : "text-white/80"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: animate ? 1.35 : 0, ease: [0.22, 1, 0.36, 1] }}
          />
          <circle
            cx="40"
            cy="90"
            r="4"
            className={light ? "fill-white stroke-zinc-300" : "fill-[#0B0D12] stroke-white/35"}
            strokeWidth="1.5"
          />
          <circle
            cx="100"
            cy="50"
            r="4"
            className={light ? "fill-white stroke-indigo-500" : "fill-[#0B0D12] stroke-white/70"}
            strokeWidth="1.5"
          />
          <circle
            cx="170"
            cy="75"
            r="4"
            className={light ? "fill-white stroke-zinc-300" : "fill-[#0B0D12] stroke-white/35"}
            strokeWidth="1.5"
          />
          <circle
            cx="240"
            cy="35"
            r="5"
            className={light ? "fill-indigo-600 stroke-indigo-600" : "fill-white/90 stroke-white"}
            strokeWidth="1"
          />
          <text
            x="40"
            y="112"
            className={light ? "fill-zinc-400" : "fill-white/35"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 8 }}
          >
            DISCOVER
          </text>
          <text
            x="88"
            y="38"
            className={light ? "fill-zinc-500" : "fill-white/45"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 8 }}
          >
            ROADMAP
          </text>
          <text
            x="218"
            y="28"
            className={light ? "fill-indigo-600" : "fill-white/55"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 8 }}
          >
            ESTIMATE_ROI
          </text>
        </g>
      )}

      {type === "automation" && (
        <g>
          <rect
            x="30"
            y="50"
            width="50"
            height="32"
            rx="4"
            className={light ? "fill-zinc-50 stroke-zinc-200" : "fill-white/[0.03] stroke-white/20"}
            strokeWidth="1.5"
          />
          <rect
            x="115"
            y="30"
            width="50"
            height="32"
            rx="4"
            className={light ? "fill-white stroke-indigo-300" : "fill-white/[0.04] stroke-white/45"}
            strokeWidth="1.5"
          />
          <rect
            x="115"
            y="74"
            width="50"
            height="32"
            rx="4"
            className={light ? "fill-zinc-50 stroke-zinc-200" : "fill-white/[0.03] stroke-white/20"}
            strokeWidth="1.5"
          />
          <rect
            x="200"
            y="50"
            width="50"
            height="32"
            rx="4"
            className={light ? "fill-zinc-50 stroke-zinc-200" : "fill-white/[0.03] stroke-white/20"}
            strokeWidth="1.5"
          />

          <path
            d="M80 66 H98 V46 H115"
            stroke="currentColor"
            strokeWidth="1.5"
            className={light ? "text-zinc-300" : "text-white/25"}
            fill="none"
          />
          <path
            d="M80 66 H98 V90 H115"
            stroke="currentColor"
            strokeWidth="1.5"
            className={light ? "text-zinc-300" : "text-white/25"}
            fill="none"
          />
          <path
            d="M165 46 H182 V66 H200"
            stroke="currentColor"
            strokeWidth="1.5"
            className={light ? "text-zinc-300" : "text-white/25"}
            fill="none"
          />
          <path
            d="M165 90 H182 V66"
            stroke="currentColor"
            strokeWidth="1.5"
            className={light ? "text-zinc-300" : "text-white/25"}
            fill="none"
          />

          {animate && (
            <motion.circle
              r="2.5"
              className={light ? "fill-indigo-500" : "fill-white"}
              initial={{ cx: 80, cy: 66 }}
              animate={{
                cx: [80, 98, 98, 115],
                cy: [66, 66, 46, 46],
              }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
            />
          )}

          <text
            x="38"
            y="69"
            className={light ? "fill-indigo-600" : "fill-white/70"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 8 }}
          >
            DATA_IN
          </text>
          <text
            x="124"
            y="49"
            className={light ? "fill-zinc-500" : "fill-white/45"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 8 }}
          >
            RULE
          </text>
          <text
            x="124"
            y="93"
            className={light ? "fill-zinc-400" : "fill-white/35"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 8 }}
          >
            AI_GATE
          </text>
          <text
            x="208"
            y="69"
            className={light ? "fill-zinc-500" : "fill-white/45"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 8 }}
          >
            DISPATCH
          </text>
        </g>
      )}

      {type === "agents" && (
        <g>
          <circle
            cx="140"
            cy="66"
            r="30"
            className={light ? "stroke-zinc-200" : "stroke-white/15"}
            strokeWidth="1.5"
            strokeDasharray="3 3"
            fill="none"
          />
          <motion.circle
            cx="140"
            cy="66"
            r="30"
            className={light ? "stroke-indigo-500" : "stroke-white/70"}
            strokeWidth="1.5"
            strokeDasharray="42 120"
            fill="none"
            animate={animate ? { rotate: 360 } : undefined}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            style={{ transformOrigin: "140px 66px" }}
          />
          <circle
            cx="80"
            cy="36"
            r="14"
            className={light ? "fill-white stroke-zinc-200" : "fill-[#0B0D12]/90 stroke-white/20"}
            strokeWidth="1.5"
          />
          <circle
            cx="200"
            cy="36"
            r="14"
            className={light ? "fill-white stroke-zinc-200" : "fill-[#0B0D12]/90 stroke-white/20"}
            strokeWidth="1.5"
          />
          <circle
            cx="140"
            cy="116"
            r="14"
            className={light ? "fill-white stroke-indigo-300" : "fill-[#0B0D12]/90 stroke-white/35"}
            strokeWidth="1.5"
          />
          <line
            x1="110"
            y1="66"
            x2="94"
            y2="46"
            className={light ? "stroke-zinc-200" : "stroke-white/20"}
            strokeWidth="1"
          />
          <line
            x1="170"
            y1="66"
            x2="186"
            y2="46"
            className={light ? "stroke-zinc-200" : "stroke-white/20"}
            strokeWidth="1"
          />
          <line
            x1="140"
            y1="96"
            x2="140"
            y2="102"
            className={light ? "stroke-zinc-200" : "stroke-white/20"}
            strokeWidth="1"
          />
          <text
            x="71"
            y="39"
            className={light ? "fill-zinc-500" : "fill-white/45"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            LLM
          </text>
          <text
            x="189"
            y="39"
            className={light ? "fill-zinc-500" : "fill-white/45"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            TOOL
          </text>
          <text
            x="128"
            y="119"
            className={light ? "fill-indigo-600" : "fill-white/70"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            RAG
          </text>
        </g>
      )}

      {type === "hr" && (
        <g>
          <rect
            x="28"
            y="36"
            width="72"
            height="72"
            rx="6"
            className={light ? "fill-white stroke-zinc-200" : "fill-white/[0.03] stroke-white/20"}
            strokeWidth="1.5"
          />
          <text
            x="40"
            y="58"
            className={light ? "fill-zinc-500" : "fill-white/45"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            CHECK_IN
          </text>
          <circle
            cx="64"
            cy="82"
            r="14"
            className={light ? "fill-indigo-50 stroke-indigo-500" : "fill-white/5 stroke-white/70"}
            strokeWidth="1.5"
          />
          <text
            x="54"
            y="85"
            className={light ? "fill-indigo-600" : "fill-white/80"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            ID
          </text>
          <motion.path
            d="M100 72 H132"
            stroke="currentColor"
            strokeWidth="1.5"
            className={light ? "text-indigo-500" : "text-white/70"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: animate ? 0.9 : 0 }}
          />
          <rect
            x="132"
            y="44"
            width="64"
            height="56"
            rx="5"
            className={light ? "fill-white stroke-indigo-400" : "fill-white/5 stroke-white/50"}
            strokeWidth="1.5"
          />
          <text
            x="142"
            y="68"
            className={light ? "fill-indigo-600" : "fill-white/80"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            PAYROLL
          </text>
          <text
            x="146"
            y="84"
            className={light ? "fill-zinc-500" : "fill-white/45"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            SYNC
          </text>
          <path
            d="M196 72 H220"
            stroke="currentColor"
            strokeWidth="1.5"
            className={light ? "text-zinc-300" : "text-white/25"}
          />
          <rect
            x="220"
            y="52"
            width="52"
            height="40"
            rx="4"
            className={light ? "fill-zinc-50 stroke-zinc-200" : "fill-white/[0.03] stroke-white/20"}
            strokeWidth="1.5"
          />
          <text
            x="228"
            y="76"
            className={light ? "fill-zinc-600" : "fill-white/55"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            SLIP
          </text>
        </g>
      )}

      {type === "community" && (
        <g>
          {[0, 1, 2].map((i) => {
            const x = 48 + i * 70;
            return (
              <g key={i}>
                <circle
                  cx={x}
                  cy="64"
                  r="22"
                  className={
                    light
                      ? i === 1
                        ? "fill-indigo-50 stroke-indigo-500"
                        : "fill-white stroke-zinc-200"
                      : "fill-white/[0.03] stroke-white/25"
                  }
                  strokeWidth="1.5"
                />
                <text
                  x={x - 14}
                  y="68"
                  className={light ? (i === 1 ? "fill-indigo-600" : "fill-zinc-500") : "fill-white/55"}
                  style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
                >
                  {i === 0 ? "RSVP" : i === 1 ? "MEET" : "NET"}
                </text>
                {i < 2 && (
                  <path
                    d={`M${x + 22} 64 H${x + 48}`}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={light ? "text-zinc-300" : "text-white/25"}
                  />
                )}
              </g>
            );
          })}
          {animate && (
            <motion.circle
              r="2.5"
              className={light ? "fill-indigo-500" : "fill-white"}
              animate={{ cx: [70, 118, 188], cy: [64, 64, 64] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
            />
          )}
          <text
            x="48"
            y="112"
            className={light ? "fill-zinc-400" : "fill-white/35"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            3RD_SAT · HYD
          </text>
        </g>
      )}

      {type === "dialog" && (
        <g>
          <rect
            x="24"
            y="40"
            width="52"
            height="56"
            rx="6"
            className={light ? "fill-zinc-50 stroke-zinc-200" : "fill-white/[0.03] stroke-white/20"}
            strokeWidth="1.5"
          />
          <text
            x="32"
            y="72"
            className={light ? "fill-zinc-500" : "fill-white/45"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            META
          </text>
          <motion.path
            d="M76 68 H110"
            stroke="currentColor"
            strokeWidth="1.5"
            className={light ? "text-indigo-500" : "text-white/70"}
            strokeDasharray="4 3"
            animate={animate ? { strokeDashoffset: [0, -14] } : undefined}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          <rect
            x="110"
            y="36"
            width="64"
            height="64"
            rx="6"
            className={light ? "fill-white stroke-indigo-400" : "fill-white/5 stroke-white/50"}
            strokeWidth="1.5"
          />
          <text
            x="118"
            y="58"
            className={light ? "fill-indigo-600" : "fill-white/80"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            TEMPLATE
          </text>
          <text
            x="124"
            y="74"
            className={light ? "fill-zinc-500" : "fill-white/45"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            SEND
          </text>
          <text
            x="122"
            y="88"
            className={light ? "fill-zinc-400" : "fill-white/35"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            STATUS
          </text>
          <path
            d="M174 68 H200"
            stroke="currentColor"
            strokeWidth="1.5"
            className={light ? "text-zinc-300" : "text-white/25"}
          />
          <rect
            x="200"
            y="48"
            width="56"
            height="40"
            rx="4"
            className={light ? "fill-zinc-50 stroke-zinc-200" : "fill-white/[0.03] stroke-white/20"}
            strokeWidth="1.5"
          />
          <text
            x="208"
            y="72"
            className={light ? "fill-zinc-600" : "fill-white/55"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            HOOK
          </text>
        </g>
      )}

      {type === "intelligence" && (
        <g>
          <rect
            x="36"
            y="32"
            width="68"
            height="76"
            rx="6"
            className={light ? "fill-zinc-50 stroke-zinc-200" : "fill-white/[0.03] stroke-white/20"}
            strokeWidth="1.5"
          />
          <text
            x="48"
            y="56"
            className={light ? "fill-zinc-500" : "fill-white/45"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            DATA
          </text>
          <path
            d="M52 72 H88"
            stroke="currentColor"
            strokeWidth="2"
            className={light ? "text-zinc-300" : "text-white/25"}
          />
          <path
            d="M52 84 H78"
            stroke="currentColor"
            strokeWidth="2"
            className={light ? "text-zinc-300" : "text-white/25"}
          />
          <motion.path
            d="M104 70 H138"
            stroke="currentColor"
            strokeWidth="1.5"
            className={light ? "text-indigo-500" : "text-white/70"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: animate ? 0.9 : 0 }}
          />
          <circle
            cx="168"
            cy="70"
            r="30"
            className={light ? "fill-white stroke-indigo-400" : "fill-white/5 stroke-white/50"}
            strokeWidth="1.5"
          />
          <text
            x="150"
            y="66"
            className={light ? "fill-indigo-600" : "fill-white/80"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            MODEL
          </text>
          <text
            x="154"
            y="80"
            className={light ? "fill-zinc-500" : "fill-white/45"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            INFER
          </text>
          <path
            d="M198 70 H222"
            stroke="currentColor"
            strokeWidth="1.5"
            className={light ? "text-zinc-300" : "text-white/25"}
          />
          <rect
            x="222"
            y="50"
            width="42"
            height="40"
            rx="4"
            className={light ? "fill-indigo-50 stroke-indigo-500" : "fill-white/5 stroke-white/70"}
            strokeWidth="1.5"
          />
          <text
            x="230"
            y="74"
            className={light ? "fill-indigo-600" : "fill-white/80"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            KPI
          </text>
        </g>
      )}

      {type === "build" && (
        <g>
          {["SPEC", "BUILD", "SHIP"].map((label, i) => {
            const x = 40 + i * 78;
            return (
              <g key={label}>
                <rect
                  x={x}
                  y="44"
                  width="58"
                  height="48"
                  rx="5"
                  className={
                    light
                      ? i === 1
                        ? "fill-white stroke-indigo-400"
                        : "fill-zinc-50 stroke-zinc-200"
                      : "fill-white/[0.03] stroke-white/25"
                  }
                  strokeWidth="1.5"
                />
                <text
                  x={x + 12}
                  y="72"
                  className={light ? (i === 1 ? "fill-indigo-600" : "fill-zinc-500") : "fill-white/55"}
                  style={{ fontFamily: "ui-monospace, monospace", fontSize: 8 }}
                >
                  {label}
                </text>
                {i < 2 && (
                  <path
                    d={`M${x + 58} 68 H${x + 78}`}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={light ? "text-zinc-300" : "text-white/25"}
                  />
                )}
              </g>
            );
          })}
          {animate && (
            <motion.circle
              r="2.5"
              className={light ? "fill-indigo-500" : "fill-white"}
              animate={{ cx: [98, 148, 198], cy: [68, 68, 68] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            />
          )}
          <text
            x="40"
            y="116"
            className={light ? "fill-zinc-400" : "fill-white/35"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            CUSTOM_AI
          </text>
        </g>
      )}

      {type === "engagement" && (
        <g>
          {["FRAME", "BUILD", "SCALE"].map((label, i) => {
            const x = 36 + i * 82;
            return (
              <g key={label}>
                <circle
                  cx={x + 28}
                  cy="62"
                  r="26"
                  className={
                    light
                      ? i === 1
                        ? "fill-indigo-50 stroke-indigo-500"
                        : "fill-white stroke-zinc-200"
                      : "fill-white/[0.03] stroke-white/25"
                  }
                  strokeWidth="1.5"
                />
                <text
                  x={x + 12}
                  y="66"
                  className={light ? (i === 1 ? "fill-indigo-600" : "fill-zinc-500") : "fill-white/55"}
                  style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
                >
                  {label}
                </text>
                {i < 2 && (
                  <path
                    d={`M${x + 54} 62 H${x + 82}`}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={light ? "text-zinc-300" : "text-white/25"}
                  />
                )}
              </g>
            );
          })}
          {animate && (
            <motion.circle
              r="2.5"
              className={light ? "fill-indigo-500" : "fill-white"}
              animate={{ cx: [64, 146, 228], cy: [62, 62, 62] }}
              transition={{ repeat: Infinity, duration: 2.6, ease: "linear" }}
            />
          )}
          <text
            x="36"
            y="114"
            className={light ? "fill-zinc-400" : "fill-white/35"}
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 7 }}
          >
            OUTCOME → GOVERNED SYSTEM
          </text>
        </g>
      )}
    </svg>
  );
};

export default BlueprintDiagram;
