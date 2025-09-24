import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Sparkles } from "lucide-react";

type Chip = {
  id: "schedule" | "frequency" | "audience" | "exclusions";
  label: string;
  description: string;
  bullets: string[];
};

const CHIPS: Chip[] = [
  {
    id: "schedule",
    label: "Smart Ad Scheduling",
    description:
      "Run ads only when your audience is most active to reduce wasted spend and boost engagement.",
    bullets: [
      "Auto-pause during low-activity hours",
      "Timezone-aware delivery windows",
      "Data-driven hourly performance tuning",
    ],
  },
  {
    id: "frequency",
    label: "Intelligent Frequency Cap",
    description:
      "Prevent audience fatigue with intelligent frequency controls that keep your brand top-of-mind without overexposure.",
    bullets: [
      "Adaptive caps based on engagement",
      "Avoid repeat impressions to the same cohort",
      "Reduce CPM spikes from ad fatigue",
    ],
  },
  {
    id: "audience",
    label: "Smart Audience Tuning",
    description:
      "Continuously refine audiences using real engagement signals from LinkedIn and your website.",
    bullets: [
      "Build audiences from firmographic + intent data",
      "Real-time cohort adjustments",
      "Remove low-fit segments automatically",
    ],
  },
  {
    id: "exclusions",
    label: "Strategic Account Exclusions",
    description:
      "Exclude existing customers, non-fit industries, and inactive prospects to reduce waste and improve ROAS.",
    bullets: [
      "Exclude closed-won and current customers",
      "Fine-grained NAICS/industry exclusions",
      "Auto-remove inactive, non-engaging accounts",
    ],
  },
];

const IMAGE_BY_ID: Record<Chip["id"], string> = {
  schedule: "/media/ads-scheduling.webp",
  frequency: "/media/frequency-cap.webp",
  audience: "/media/audience-tuning.webp",
  exclusions: "/media/audience-tuning-exclusion.webp",
};

const CYCLE_MS = 10000;

// Small circular countdown shown inside the active chip
const ChipTimer: React.FC<{ progress: number; active: boolean }> = ({ progress, active }) => {
  const angle = Math.min(360, Math.max(0, progress * 360));
  const fillColor = active ? "rgba(255,255,255,0.95)" : "rgba(56,117,246,1)"; // white on active (blue bg), blue on inactive (white bg)
  return (
    <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center">
      {/* Track */}
      <span
        className={cn(
          "absolute inset-0 rounded-full",
          active ? "bg-white/30" : "bg-blue-100"
        )}
        aria-hidden="true"
      />
      {/* Fill via conic gradient */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(${fillColor} ${angle}deg, transparent 0deg)`,
          transition: "background 120ms linear",
        }}
        aria-hidden="true"
      />
      {/* Center dot */}
      <span
        className={cn(
          "relative h-2 w-2 rounded-full",
          active ? "bg-white" : "bg-white"
        )}
        aria-hidden="true"
      />
    </span>
  );
};

const Features7: React.FC<{ className?: string }> = ({ className }) => {
  const [containerRef, inView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  const [activeIdx, setActiveIdx] = React.useState(0);

  // Progress for the active chip (0 to 1)
  const [progress, setProgress] = React.useState(0);
  const rafRef = React.useRef<number | null>(null);
  const timeoutRef = React.useRef<number | null>(null);
  const startRef = React.useRef<number>(0);

  const clearTimers = React.useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }, []);

  const startCycle = React.useCallback(() => {
    clearTimers();
    setProgress(0);
    startRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const p = Math.min(1, elapsed / CYCLE_MS);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    timeoutRef.current = window.setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % CHIPS.length);
    }, CYCLE_MS) as unknown as number;
  }, [clearTimers]);

  React.useEffect(() => {
    startCycle();
    return clearTimers;
  }, [activeIdx, startCycle, clearTimers]);

  const handleSelect = (idx: number) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
  };

  const activeChip = CHIPS[activeIdx];

  return (
    <section className={cn("w-full py-24 sm:py-28 relative overflow-hidden", className)}>
      {/* Background accents kept subtle */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div
        ref={containerRef}
        className={cn(
          "max-w-[1216px] mx-auto px-6 relative",
          "transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}
      >
        {/* Header */}
        <div
          className={cn(
            "text-center mb-16",
            "transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
            <Sparkles className="h-4 w-4" />
            LinkedIn Ads Optimization
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            Optimize performance with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              smart controls
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            DemandSense continuously tunes scheduling, frequency, audiences, and exclusions to maximize impact and reduce
            waste.
          </p>
        </div>

        {/* Chips with per-chip compact timer (centered inside each tab) */}
        <div
          className={cn(
            "relative mx-auto max-w-4xl",
            "transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          aria-label="Optimization modes"
          role="tablist"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CHIPS.map((chip, idx) => {
              const active = idx === activeIdx;
              return (
                <button
                  key={chip.id}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`chip-panel-${chip.id}`}
                  id={`chip-tab-${chip.id}`}
                  onClick={() => handleSelect(idx)}
                  className={cn(
                    "relative px-4 py-2 rounded-full border transition-all",
                    "text-sm font-medium inline-flex items-center gap-2",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
                    active
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-600 shadow-lg shadow-blue-600/20"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  )}
                  style={{ transitionDuration: "300ms" }}
                >
                  {/* Compact, centered timer inside the chip */}
                  <ChipTimer progress={active ? progress : 0} active={active} />
                  <span className={cn("relative z-[1]", active ? "text-white" : "text-gray-800")}>
                    {chip.label}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="sr-only" aria-live="polite">
            {`Switching to next mode in ${Math.max(0, Math.ceil((1 - progress) * (CYCLE_MS / 1000)))} seconds`}
          </div>
        </div>

        {/* Content block: text + images (restored visuals, no redesign) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Textual content */}
          <div
            className={cn(
              "transition-all duration-700 delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div
              id={`chip-panel-${activeChip.id}`}
              role="tabpanel"
              aria-labelledby={`chip-tab-${activeChip.id}`}
              className="will-change-transform transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold text-gray-900">{activeChip.label}</h3>
              <p className="mt-3 text-gray-600 text-base leading-relaxed">{activeChip.description}</p>
              <ul className="mt-6 space-y-2">
                {activeChip.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700"
                    style={{
                      opacity: 1,
                      transform: "translateX(0)",
                      transition: "opacity 400ms var(--ease-out-quart), transform 400ms var(--ease-out-quart)",
                      transitionDelay: `${100 + i * 70}ms`,
                    }}
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual content (images restored with smooth cross-fade) */}
          <div
            className={cn(
              "relative",
              "transition-all duration-700 delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="relative rounded-xl overflow-hidden border border-gray-200">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
                {CHIPS.map((chip, idx) => {
                  const active = idx === activeIdx;
                  const src = IMAGE_BY_ID[chip.id];
                  return (
                    <img
                      key={chip.id}
                      src={src}
                      alt={chip.label}
                      className={cn(
                        "absolute inset-0 w-full h-full object-contain",
                        "transition-opacity duration-700 ease-out",
                        active ? "opacity-100" : "opacity-0"
                      )}
                      draggable={false}
                      loading={active ? "eager" : "lazy"}
                      aria-hidden={!active}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features7;
export { Features7 as Features };