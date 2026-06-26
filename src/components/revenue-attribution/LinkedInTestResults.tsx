"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import SectionBadge from "@/components/SectionBadge";

const STATS = [
  { value: "96%", label: ["more attributed", "SQLs"] },
  { value: "43%", label: ["lower attributed", "CPA"] },
  { value: "75.5%", label: ["more attributed", "MQLs"] },
];

const LinkedInTestResults = () => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1216px] mx-auto">
        <div
          ref={ref}
          className={cn(
            "cta-card w-full rounded-[32px] px-8 md:px-16 py-20 md:py-24 flex flex-col items-center text-center relative overflow-hidden border border-blue-100 shadow-xl",
            "transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 w-full">
            <div className="flex justify-center mb-8">
              <SectionBadge icon={TrendingUp} text="Proven Results" />
            </div>

            <h2 className="text-4xl md:text-[45px] font-bold text-gray-900 mb-16 tracking-tight leading-[1.1]">
              Results from tests by LinkedIn*
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 max-w-4xl mx-auto">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="mt-4 text-lg md:text-xl font-bold text-gray-900">
                    {stat.label[0]}
                    <br />
                    {stat.label[1]}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base italic text-gray-500">
              *In tests between LinkedIn and B2B Attribution & Analytics Partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInTestResults;