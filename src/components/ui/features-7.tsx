import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Sparkles } from "lucide-react";

type Chip = {
  id: "schedule" | "frequency" | "audience" | "exclusions";
  label: string;
  description: string;
  bullets: string[];
  // Optional stat to show in the content block
  stat?: { value: string; label: string };
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
    stat: { value: "30%", label: "CPM reduction" },
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
    stat: { value: "45%", label: "less overexposure" },
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
    stat: { value: "2x", label: "qualified audiences" },
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
    stat: { value: "25%", label: "budget efficiency" },
  },
];

const IMAGE_BY_ID: Record<Chip["id"], string> = {
  schedule: "/media/ads-scheduling.webp",
  frequency: "/media/frequency-cap.webp",
  audience: "/media/audience-tuning.webp",
  exclusions: "/media/audience-tuning-exclusion.webp",
};

const Features7: React.FC<{ className?: string }> = ({ className }) => {
  const [containerRef, inView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  // Active tab index
  const [activeIdx, setActiveIdx] = React.useState(0);

  // Auto-switching every 10 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % CHIPS.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
  };

  const activeChip = CHIPS[activeIdx];

  return (
    <section className={cn("w-full py-24 sm:py-28 relative overflow-hidden", className)}>
      {/* Background accents (unchanged) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="max-w-[1216px] mx-auto px-6 relative">
        {/* Header */}
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

        {/* Tabs */}
        <div aria-label="Optimization modes" role="tablist" className="relative mx-auto max-w-4xl">
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
                    "px-4 py-2 rounded-full border transition-all",
                    "text-sm font-medium",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
                    active
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-600 shadow-lg shadow-blue-600/20"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  )}
                  style={{ transitionDuration: "300ms" }}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content and Visual - side by side */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Textual content - LEFT SIDE */}
          <div>
            <div id={`chip-panel-${activeChip.id}`} role="tabpanel" aria-labelledby={`chip-tab-${activeChip.id}`}>
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

              {/* Percent block */}
              {activeChip.stat && (
                <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
                  <span className="text-base font-semibold">{activeChip.stat.value}</span>
                  <span>{activeChip.stat.label}</span>
                </div>
              )}
            </div>
          </div>

          {/* Visual content - RIGHT SIDE */}
          <div className="relative">
            <div className="magic-border">
              <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-white">
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
      </div>
    </section>
  );
};

export default Features7;
export { Features7 as Features };