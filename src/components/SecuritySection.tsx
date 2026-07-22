"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { ShieldCheck, ArrowRight } from "lucide-react";

const proofPoints = [
  {
    label: "SOC 2 Certified",
    body: (
      <>
        DemandSense is SOC 2 Type II certified — we always handle your data
        securely and responsibly.
      </>
    ),
  },
  {
    label: "GDPR compliant",
    body: (
      <>
        Our data is only persistent in European data centres unless the customer
        requests data to be replicated into a region of their choice.
      </>
    ),
  },
  {
    label: "Google Cloud Based",
    body: (
      <>
        DemandSense uses Google Cloud Platform as its data centres. For more
        information about how Google manages security read{" "}
        <a
          href="https://cloud.google.com/security"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline underline-offset-4 hover:text-brand-hover transition-colors"
        >
          here
        </a>
        .
      </>
    ),
  },
];

const SecuritySection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="security"
      className="w-full bg-canvas px-6 sm:px-12 md:px-[112px] py-16 lg:py-24 border-b border-line"
    >
      <div className="max-w-[1216px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5">
            <div
              className={cn(
                "font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-ink-400 transition-all duration-500",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              )}
            >
              Trust &amp; Security
            </div>

            <h2
              className={cn(
                "mt-4 text-[40px] lg:text-[48px] font-bold text-ink tracking-[-0.02em] leading-[1.08] text-balance transition-all duration-500 delay-100",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              )}
            >
              Your data.
              <br />
              Private and secure.
            </h2>

            <div
              className={cn(
                "mt-12 inline-flex items-center gap-3 rounded-full border border-line bg-white px-5 py-3 shadow-sm transition-all duration-500 delay-200",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              )}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-tint">
                <ShieldCheck className="h-5 w-5 text-brand" strokeWidth={1.5} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[13px] font-mono uppercase tracking-[0.12em] text-ink-400">
                  AICPA SOC
                </span>
                <span className="text-[15px] font-semibold text-ink">
                  SOC 2 Type II
                </span>
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-10">
              {proofPoints.map((point, i) => (
                <div
                  key={point.label}
                  className={cn(
                    "transition-all duration-500",
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3",
                  )}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <h3 className="text-[22px] font-semibold text-ink tracking-[-0.01em]">
                    {point.label}
                  </h3>
                  <p className="mt-2 text-[18px] leading-[1.6] text-ink-500">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className={cn(
                "group mt-16 inline-flex items-center gap-2 text-[20px] font-semibold text-brand underline underline-offset-4 transition-all duration-500 hover:text-brand-hover",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              )}
              style={{ transitionDelay: "440ms" }}
            >
              DemandSense Security Portal
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
