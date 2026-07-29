"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const EARLY_ACCESS_URL = "https://tally.so/r/Gx4O5O";
const SHARE_URL = "https://demandsense.com/mcp";

const McpFinalCta = () => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.15 });
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const handleShare = () => {
    const done = () => {
      setCopied(true);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1500);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(SHARE_URL).then(done).catch(done);
    } else {
      done();
    }
  };

  return (
    <section
      className="w-full bg-[#F5F9FF] py-16 md:py-24 lg:py-32 border-b border-gray-100"
      aria-labelledby="mcp-final-heading"
    >
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto bg-white border border-blue-100 rounded-[32px] shadow-xl p-8 md:p-14 text-center relative overflow-hidden transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="block text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-4">
              Early access
            </span>
            <h2
              id="mcp-final-heading"
              className="text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1]"
            >
              Be one of the first to put it to work
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              DemandSense MCP is opening to a small group of LinkedIn marketers
              and agencies before anyone else. Early members get in free, help
              shape what ships next, and start surfacing buyers their
              competitors can't see yet. Get the edge while it's still an edge.
              Onboarding runs in small batches, and the team works every account
              in the first waves.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4">
              <Button
                variant="hero"
                size="hero"
                className="shadow-xl shadow-blue-500/20"
                asChild
              >
                <a href={EARLY_ACCESS_URL}>Apply for the first batch</a>
              </Button>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                Free during early access, with a 30-day DemandSense trial. No
                card. 2-minute application.
              </p>
              <button
                type="button"
                onClick={handleShare}
                className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
              >
                {copied ? "Link copied" : "Share this page"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default McpFinalCta;