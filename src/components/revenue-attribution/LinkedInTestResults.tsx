"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const STATS = [
  { value: "96%", label: ["more attributed", "SQLs"] },
  { value: "43%", label: ["lower attributed", "CPA"] },
  { value: "75.5%", label: ["more attributed", "MQLs"] },
];

const LinkedInTestResults = () => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="py-16 px-6 md:px-[112px] bg-white">
      <div className="max-w-[1216px] mx-auto">
        <div
          ref={ref}
          className={cn(
            "rounded-3xl bg-gray-50 p-12 md:p-16 text-center transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight mb-12 md:mb-16">
            Results from tests by LinkedIn*
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12 md:mb-16">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-extrabold text-ink tracking-tight">
                  {stat.value}
                </div>
                <p className="mt-4 text-lg md:text-xl font-bold text-ink">
                  {stat.label[0]}
                  <br />
                  {stat.label[1]}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm md:text-base italic text-gray-600">
            *In tests between LinkedIn and B2B Attribution & Analytics Partners
          </p>
        </div>
      </div>
    </section>
  );
};

export default LinkedInTestResults;