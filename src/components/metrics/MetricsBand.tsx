import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Database } from "lucide-react";

type MetricItem = {
  value: string;
  caption: string;
};

export type MetricsBandProps = {
  id?: string;
  className?: string;
  title?: string;
  items?: MetricItem[];
};

const DEFAULT_ITEMS: MetricItem[] = [
  {
    value: "280M",
    caption: "US-based consumers in our database.",
  },
  {
    value: "95%",
    caption: "Accuracy on fully contact data with our online-to-offline database.",
  },
  {
    value: "60B",
    caption: "Behaviors and URLs scanned every single week.",
  },
  {
    value: "1000+",
    caption: "Advertisers and agencies using our data in their campaigns.",
  },
];

const MetricsBand: React.FC<MetricsBandProps> = ({
  id = "audience-graph",
  className,
  title = "Under the Hood of Our Audience Graph",
  items = DEFAULT_ITEMS,
}) => {
  const [ref, inView] = useInViewOnce<HTMLElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative w-full bg-gradient-to-b from-gray-50 to-white border-t border-b border-gray-200",
        className
      )}
      aria-labelledby={`${id}-title`}
    >
      <div className="max-w-[1216px] mx-auto px-8 py-16 md:py-20">
        {/* Header with chip */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-blue-100">
            <Database className="h-4 w-4" />
            OUR AUDIENCE GRAPH
          </div>

          <h2
            id={`${id}-title`}
            className={cn(
              "text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight transition-opacity duration-700",
              inView ? "opacity-100" : "opacity-0"
            )}
          >
            Under the Hood of Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Audience Graph
            </span>
          </h2>
        </div>

        {/* Metrics Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0"
          role="list"
        >
          {items.map((item, index) => (
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
                  "text-5xl md:text-6xl font-bold text-gray-900 mb-3 tracking-tight transition-opacity duration-200",
                  "hover:opacity-80"
                )}
              >
                {item.value}
              </div>

              {/* Caption */}
              <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-[280px]">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(MetricsBand);