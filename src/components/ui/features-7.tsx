import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import CardSwapSection from "@/components/CardSwapSection";

export function Features() {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section className="w-full bg-white" id="linkedin-ads">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 pt-32 pb-16">
        <div
          ref={ref}
          className={cn(
            "text-center space-y-4 mb-16 reveal reveal-fade-up",
            inView ? "is-inview" : ""
          )}
        >
          <p className="text-[12px] leading-5 tracking-[1.2px] uppercase text-[#7C7C7C] font-['DM Mono']">
            LinkedIn Ads Optimization
          </p>
          <h2 className="text-[40px] leading-[120%] tracking-[-1.5px] text-black font-medium max-w-4xl mx-auto">
            Drive more results with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              precision timing
            </span>
          </h2>
          <p className="text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C] max-w-2xl mx-auto">
            Stop wasting ad spend on poorly timed campaigns. Our AI-powered scheduling ensures your LinkedIn ads reach the right audience at the perfect moment.
          </p>
        </div>
      </div>
      
      <CardSwapSection />
    </section>
  );
}