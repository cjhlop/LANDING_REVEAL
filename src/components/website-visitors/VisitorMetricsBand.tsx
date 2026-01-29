import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Zap } from "lucide-react";
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
        <div className="text-center mb-12 space-y-6 max-w-4xl mx-auto">
          <div className="flex justify-center">
            <SectionBadge icon={Zap} text="REAL-TIME BUYER IDENTIFICATION" />
          </div>

          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            We use the traffic you already have <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              to build instantly usable audiences
            </span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            WebID is the missing layer between raw traffic and a campaign-ready audience. Now you can see who’s on your site, how serious they are, and split visitors into segments you can actually use in campaigns right away.
          </p>
        </div>

        {/* Metrics Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mt-16"
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
                "border-b border-gray-200 last:border-b-0 md:border-b-0"
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