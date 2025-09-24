import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Sparkles } from "lucide-react";

type Chip = {
  id: string;
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

const CYCLE_MS = 10000;

const Features7: React.FC<{ className?: string }> = ({ className }) => {
  const [containerRef, inView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  const [activeIdx, setActiveIdx] = React.useState(0);

  // Progress animation toggle: toggling from 0% to 100% width with CSS transition over CYCLE_MS
  const [progressOn, setProgressOn] = React.useState(false);
  const timerRef = React.useRef<number | null>(null);

  const startCycle = React.useCallback(() => {
    // Reset width to 0 then trigger to 100% in next frame
    setProgressOn(false);
    // Allow layout flush, then start the width transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setProgressOn(true));
    });

    // Clear any previous timer
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % CHIPS.length);
    }, CYCLE_MS) as unknown as number;
  }, []);

  React.useEffect(() => {
    startCycle();
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [activeIdx, startCycle]);

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
  };

  return (
    <section className={cn("w-full py-24 sm:py-28 relative overflow-hidden", className)}>
      {/* Soft background accents */}
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

        {/* Chips */}
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
                    "text-sm font-medium",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
                    active
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-600 shadow-lg shadow-blue-600/20"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  )}
                  style={{ transitionDuration: "400ms" }}
                >
                  {/* Subtle animated shine on active */}
                  {active && (
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 [mask-image:radial-gradient(24px_12px_at_20%_20%,#000,transparent)]" />
                  )}
                  <span
                    className={cn(
                      "relative z-[1]",
                      "transition-colors duration-300",
                      active ? "text-white" : "text-gray-800"
                    )}
                  >
                    {chip.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Global 10s progress indicator */}
          <div className="mt-4 h-1 w-full rounded-full bg-gray-200/70 overflow-hidden">
            <div
              className={cn(
                "h-full bg-gradient-to-r from-blue-600 to-blue-500",
                "transition-[width] ease-linear"
              )}
              style={{
                width: progressOn ? "100%" : "0%",
                transitionDuration: `${CYCLE_MS}ms`,
              }}
              aria-hidden="true"
            />
          </div>
          <div className="sr-only" aria-live="polite">
            {`Switching to next mode in ${Math.ceil(CYCLE_MS / 1000)} seconds`}
          </div>
        </div>

        {/* Panel */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Textual content */}
          <div
            className={cn(
              "transition-all duration-700 delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {CHIPS.map((chip, idx) => {
              const active = idx === activeIdx;
              return (
                <div
                  key={chip.id}
                  id={`chip-panel-${chip.id}`}
                  role="tabpanel"
                  aria-labelledby={`chip-tab-${chip.id}`}
                  hidden={!active}
                  className={cn(
                    "will-change-transform",
                    "transition-all duration-500",
                    active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  )}
                >
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {chip.label}
                  </h3>
                  <p className="mt-3 text-gray-600 text-base leading-relaxed">
                    {chip.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {chip.bullets.map((b, i) => (
                      <li
                        key={i}
                        className={cn(
                          "flex items-start gap-2 text-gray-700",
                          "transition-all duration-500",
                          active ? `opacity-100 translate-x-0 delay-[${100 + i * 60}ms]` : "opacity-0 -translate-x-2"
                        )}
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Visual content */}
          <div
            className={cn(
              "relative",
              "transition-all duration-700 delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="relative rounded-xl border border-gray-200 overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-indigo-50/60 pointer-events-none" />
              <div className="aspect-[16/10] bg-white">
                {/* Swap subtle visual per chip with smooth cross-fade */}
                {CHIPS.map((chip, idx) => {
                  const active = idx === activeIdx;
                  return (
                    <div
                      key={chip.id}
                      className={cn(
                        "absolute inset-0 flex items-center justify-center p-6",
                        "transition-opacity duration-500",
                        active ? "opacity-100" : "opacity-0"
                      )}
                      aria-hidden={!active}
                    >
                      <div className="w-full h-full rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-2">Preview</div>
                          <div className="inline-flex items-center justify-center rounded-lg bg-blue-50 px-4 py-2 text-blue-700 border border-blue-100">
                            {chip.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Glow edge */}
              <div className="absolute inset-0 ring-1 ring-black/5 rounded-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features7;