"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const EARLY_ACCESS_URL = "https://tally.so/r/Gx4O5O";

const McpCtaBand = () => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      className="w-full bg-[#F5F9FF] py-16 md:py-24 border-b border-gray-100"
      aria-label="Request early access"
    >
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "max-w-2xl mx-auto flex flex-col items-center text-center gap-4 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Button
            variant="hero"
            size="hero"
            className="shadow-xl shadow-blue-500/20"
            asChild
          >
            <a href={EARLY_ACCESS_URL}>Request early access</a>
          </Button>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            Free during early access, with a 30-day DemandSense trial. No card.
            2-minute application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default McpCtaBand;
