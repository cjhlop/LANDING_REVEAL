"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionBadge from "@/components/SectionBadge";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import demandsenseLogo from "@/assets/demandsense.png";

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

/** Browser-window style report frame, matching the app's dark product panels. */
const WindowFrame = ({ alt }: { alt: string }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
    <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
        <img
          src={demandsenseLogo}
          alt=""
          aria-hidden="true"
          className="w-4 h-4 rounded"
        />
        DemandSense
      </div>
    </div>
    {/* Screenshot placeholder */}
    <div
      className="aspect-[16/11] w-full bg-slate-950 flex items-center justify-center"
      role="img"
      aria-label={alt}
    >
      <span className="text-[11px] font-medium uppercase tracking-widest text-slate-600">
        Screenshot
      </span>
    </div>
  </div>
);

const McpHero = () => {
  const [active, setActive] = React.useState(0);
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });

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
    <section
      ref={ref}
      className="relative w-full bg-white pt-32 pb-16 md:pb-24 lg:pb-32 border-b border-gray-100 overflow-hidden"
    >
      {/* Subtle brand grid + glow background, consistent with landing hero */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#3875F6 1px, transparent 1px), linear-gradient(90deg, #3875F6 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_85%)]" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] bg-[radial-gradient(circle,#3875F6_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div
            className={cn(
              "max-w-xl transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <SectionBadge
              icon={Sparkles}
              text="Now in private early access"
            />

            <p className="mt-6 text-[11px] font-bold uppercase tracking-widest text-blue-600">
              LinkedIn Buyer Intelligence
            </p>

            <h1 className="mt-3 text-[40px] leading-[1.1] md:text-[54px] md:leading-[1.05] font-bold tracking-tight text-gray-900">
              The most complete{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                MCP
              </span>{" "}
              for LinkedIn marketers.
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

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <Button
                variant="hero"
                size="hero"
                className="shadow-xl shadow-blue-500/20 flex-shrink-0"
                asChild
              >
                <a href={EARLY_ACCESS_URL}>Get early access</a>
              </Button>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Free during early access, with a 30-day DemandSense trial. No
                card. 2-minute application.
              </p>
            </div>
          </div>

          {/* Right: slideshow */}
          <div
            className={cn(
              "transition-all duration-1000 delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
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

                  <div
                    className="flex justify-center text-blue-200 my-1.5"
                    aria-hidden="true"
                  >
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