import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Database } from "lucide-react";
import SectionBadge from "../SectionBadge";

const DEFAULT_ITEMS = [
  { value: "280M", caption: "US-based consumers in our database." },
  { value: "95%", caption: "Accuracy on fully contact data with our online-to-offline database." },
  { value: "60B", caption: "Behaviors and URLs scanned every single week." },
  { value: "1000+", caption: "Advertisers and agencies using our data in their campaigns." },
];

const MetricsBand: React.FC<{ id?: string; className?: string }> = ({ id = "audience-graph", className }) => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  return (
    <section id={id} ref={ref} className={cn("relative w-full bg-gradient-to-b from-gray-50 to-white border-t border-b border-gray-200", className)}>
      <div className="max-w-[1216px] mx-auto px-8 py-24">
        <div className="text-center mb-20">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Database} text="Our Audience Graph" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Under the Hood of Our <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Audience Graph</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0" role="list">
          {DEFAULT_ITEMS.map((item, index) => (
            <div key={index} className={cn(
              "relative flex flex-col items-center text-center px-6 py-4 transition-all duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              "lg:border-r lg:border-gray-200 lg:last:border-r-0"
            )} style={{ transitionDelay: inView ? `${index * 100 + 300}ms` : "0ms" }}>
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 tracking-tight">{item.value}</div>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-[280px]">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(MetricsBand);