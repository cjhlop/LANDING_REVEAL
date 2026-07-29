"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const EARLY_ACCESS_URL = "https://tally.so/r/Gx4O5O";

const slides = [
  {
    question:
      "Which accounts are we paying to reach that have never once visited the site?",
    alt: "DemandSense report: accounts you pay to reach that have never visited the site — 100 checked, 93 never visited, 7% visit rate, with a ranked table. Company names redacted.",
  },
  {
    question: "At [account], which people visited after seeing our ads?",
    alt: "DemandSense report: named visitors at an account after ad exposure — one named individual, session detail by person. Company and person name redacted.",
  },
  {
    question:
      "Which CRM accounts went quiet but keep visiting the site after seeing our ads?",
    alt: "DemandSense report: CRM accounts that went quiet but keep visiting after ads — repeat visitors with no open deal, engagement by account. Company names and domains redacted.",
  },
];

/** Browser-window style frame matching the app's card treatment. */
const WindowFrame = ({ alt }: { alt: string }) => (
  <div className="rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-white">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
        <span className="w-4 h-4 rounded bg-[#122D4D]" aria-hidden="true" />
        DemandSense
      </div>
    </div>
    {/* Screenshot placeholder */}
    <div
      className="aspect-[16/11] w-full bg-gray-50 flex items-center justify-center"
      role="img"
      aria-label={alt}
    >
      <span className="text-xs font-medium uppercase tracking-widest text-gray-300">
        Screenshot
      </span>
    </div>
  </div>
);

const McpHero = () => {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white pt-32 pb-16 md:pb-24">
      <div className="max-w-[1216px] mx-auto px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-sm font-semibold">
              <span
                className="w-1.5 h-1.5 rounded-full bg-orange-500 ring-4 ring-orange-500/15"
                aria-hidden="true"
              />
              Now in private early access
            </span>

            <p className="mt-6 text-[11px] font-bold uppercase tracking-widest text-blue-600">
              LinkedIn Buyer Intelligence
            </p>

            <h1 className="mt-3 text-[40px] leading-[1.1] md:text-[54px] md:leading-[1.05] font-bold tracking-tight text-gray-900">
              The most complete MCP for LinkedIn marketers.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-500 leading-relaxed">
              Ask Claude which buyers saw your ads, visited your site, and
              aren't in your CRM yet. That's one question in DemandSense MCP.
            </p>

            <p className="mt-6 pt-6 border-t border-gray-100 text-base md:text-lg text-gray-800 leading-relaxed font-medium">
              DemandSense MCP is the <b className="font-bold">only</b> one that
              joins your LinkedIn ad exposure, named website visitors, and CRM
              state into a single buyer record. Your AI answers what no rival
              tool can, instead of wiring three separate connectors together and
              hoping the model joins them right.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3">
              <Button variant="hero" size="hero" asChild>
                <a href={EARLY_ACCESS_URL}>Request early access</a>
              </Button>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                Free during early access, with a 30-day DemandSense trial. No
                card. 2-minute application.
              </p>
            </div>
          </div>

          {/* Right: slideshow */}
          <div>
            <div className="grid">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={cn(
                    "col-start-1 row-start-1 transition-opacity duration-500",
                    i === active
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  )}
                  aria-hidden={i === active ? undefined : true}
                >
                  {/* Chat-style question input */}
                  <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-4 min-h-[74px]">
                    <p className="flex-1 text-base md:text-lg leading-snug text-gray-900">
                      {slide.question}
                    </p>
                    <span
                      className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#3875F6] flex items-center justify-center text-white"
                      aria-hidden="true"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="flex justify-center text-blue-200 my-1.5" aria-hidden="true">
                    <ArrowUp className="w-5 h-5 rotate-180" />
                  </div>

                  <WindowFrame alt={slide.alt} />
                </div>
              ))}
            </div>

            {/* Dots */}
            <div
              className="flex justify-center gap-2.5 mt-5"
              role="tablist"
              aria-label="Cycle example reports"
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Example ${i + 1}`}
                  aria-selected={i === active}
                  role="tab"
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    i === active
                      ? "bg-[#3875F6] scale-125"
                      : "bg-blue-200 hover:bg-[#3875F6]"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default McpHero;
