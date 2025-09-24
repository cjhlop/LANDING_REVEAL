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

const Features7: React.FC<{ className?: string }> = ({ className }) => {
  const [containerRef, inView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  // Active tab index (kept as-is if your code already sets it somewhere)
  const [activeIdx, setActiveIdx] = React.useState(0);

  // Progress for the active tab (0..1), drives the centered indicator
  const [progress, setProgress] = React.useState(0);
  const rafRef = React.useRef<number | null>(null);
  const timeoutRef = React.useRef<number | null>(null);
  const startRef = React.useRef<number>(0);

  // Absolute position for the centered indicator (relative to the container)
  const [indicatorPos, setIndicatorPos] = React.useState<{ left: number; top: number } | null>(null);

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

  // Recompute indicator position based on the active tab button
  const updateIndicatorPos = React.useCallback(() => {
    const root = containerRef.current;
    if (!root) return;
    const containerRect = root.getBoundingClientRect();

    // Prefer WAI-ARIA tabs
    let activeTab: HTMLElement | null =
      root.querySelector('[role="tab"][aria-selected="true"]') as HTMLElement | null;

    // Fallback to our chip id pattern if needed
    if (!activeTab) {
      const chipId = CHIPS[activeIdx]?.id;
      activeTab = chipId
        ? (root.querySelector(`#chip-tab-${chipId}`) as HTMLElement | null)
        : null;
    }

    if (!activeTab) return;

    const tabRect = activeTab.getBoundingClientRect();
    const left = tabRect.left - containerRect.left + tabRect.width / 2;
    const top = tabRect.top - containerRect.top + tabRect.height / 2;
    setIndicatorPos({ left, top });
  }, [activeIdx, containerRef]);

  // Restart cycle whenever active tab changes
  React.useEffect(() => {
    startCycle();

    // Position indicator after DOM updates
    const raf = requestAnimationFrame(() => updateIndicatorPos());
    return () => {
      cancelAnimationFrame(raf);
      clearTimers();
    };
  }, [activeIdx, startCycle, updateIndicatorPos, clearTimers]);

  // Keep indicator aligned on resize/scroll within the page
  React.useEffect(() => {
    const handler = () => updateIndicatorPos();
    window.addEventListener("resize", handler);
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("resize", handler);
      window.removeEventListener("scroll", handler);
    };
  }, [updateIndicatorPos]);

  // Clicking a tab should switch and restart the timer
  const handleSelect = (idx: number) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
  };

  const activeChip = CHIPS[activeIdx];

  return (
    <section className={cn("w-full py-24 sm:py-28 relative overflow-hidden", className)}>
      {/* Soft background accents (untouched) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div
        ref={containerRef}
        className="max-w-[1216px] mx-auto px-6 relative"
      >
        {/* Header (untouched) */}
        <div className="text-center mb-16">
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

        {/* Chips (tabs) — layout and styles unchanged */}
        <div
          aria-label="Optimization modes"
          role="tablist"
          className="relative mx-auto max-w-4xl"
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
                    "text-sm font-medium",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
                    active
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-600 shadow-lg shadow-blue-600/20"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  )}
                  style={{ transitionDuration: "300ms" }}
                >
                  <span className={cn("relative", active ? "text-white" : "text-gray-800")}>
                    {chip.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Centered countdown indicator overlay (does not affect layout) */}
        {indicatorPos && (
          <div
            className="pointer-events-none absolute z-20"
            style={{
              left: indicatorPos.left,
              top: indicatorPos.top,
              transform: "translate(-50%, -50%)",
            }}
            aria-hidden="true"
          >
            <div className="relative h-5 w-5">
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(#2563eb ${progress * 360}deg, transparent 0deg)`,
                  transition: "background 120ms linear",
                }}
              />
              <span className="absolute inset-[3px] rounded-full bg-white/90" />
            </div>
          </div>
        )}

        {/* Content block (untouched) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Textual content */}
          <div>
            <div
              id={`chip-panel-${activeChip.id}`}
              role="tabpanel"
              aria-labelledby={`chip-tab-${activeChip.id}`}
            >
              <h3 className="text-2xl font-semibold text-gray-900">{activeChip.label}</h3>
              <p className="mt-3 text-gray-600 text-base leading-relaxed">{activeChip.description}</p>
              <ul className="mt-6 space-y-2">
                {activeChip.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual content (images) */}
          <div className="relative">
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