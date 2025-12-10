import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Database } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";

type MetricItem = {
  value: string;
  caption: string;
};

const VISITOR_METRICS: MetricItem[] = [
  {
    value: "98%",
    caption: "Match rate for US-based B2B traffic.",
  },
  {
    value: "280M+",
    caption: "Professional profiles in our identity graph.",
  },
  {
    value: "< 200ms",
    caption: "Real-time identification speed.",
  },
  {
    value: "100%",
    caption: "GDPR & CCPA compliant data processing.",
  },
];

const VisitorMetricsBand = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section
      ref={ref}
      className="relative w-full bg-gradient-to-b from-gray-50 to-white border-b border-gray-200"
    >
      <div className="max-w-[1216px] mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* Header with chip */}
        <div className="text-center mb-12 space-y-6">
          <div className="flex justify-center">
            <SectionBadge icon={Database} text="Our Identity Graph" />
          </div>

          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight transition-opacity duration-700",
              inView ? "opacity-100" : "opacity-0"
            )}
          >
            Powered by the World's Largest <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              B2B Identity Graph
            </span>
          </h2>
        </div>

        {/* Metrics Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0"
          role="list"
        >
          {VISITOR_METRICS.map((item, index) => (
            <div
              key={`${item.value}-${index}`}
              className={cn(
                "relative flex flex-col items-center text-center px-6 py-4 transition-opacity duration-500",
                inView ? "opacity-100" : "opacity-0",
                // Vertical dividers on desktop (not on last item)
                "lg:border-r lg:border-gray-200 lg:last:border-r-0",
                // Horizontal dividers on mobile/tablet (not on last item)
                "border-b border-gray-200 last:border-b-0 md:border-b-0",
                // Horizontal dividers on tablet 2x2 grid (bottom row has no border)
                "md:nth-child(1):border-b md:nth-child(2):border-b",
                "md:nth-child(2):border-r-0 lg:nth-child(2):border-r"
              )}
              style={{
                transitionDelay: inView ? `${index * 100}ms` : "0ms",
              }}
              role="listitem"
            >
              {/* Value */}
              <div
                className={cn(
                  "text-4xl md:text-5xl font-bold text-[#0F2043] mb-3 tracking-tight transition-opacity duration-200",
                  "hover:opacity-80"
                )}
              >
                {item.value}
              </div>

              {/* Caption */}
              <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-[240px]">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitorMetricsBand;