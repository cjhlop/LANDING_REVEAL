"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { ShieldCheck, ArrowRight, Lock } from "lucide-react";
import SectionBadge from "./SectionBadge";

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
          className="text-blue-600 underline underline-offset-4 hover:text-blue-700 transition-colors"
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
      className="w-full bg-[#F5F9FF] px-6 sm:px-12 md:px-[112px] py-24 lg:py-32 border-b border-gray-100 overflow-hidden"
    >
      <div className="max-w-[1216px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5">
            <div
              className={cn(
                "transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
            >
              <SectionBadge icon={Lock} text="Trust & Security" variant="blue" />
            </div>

            <h2
              className={cn(
                "mt-6 text-[40px] lg:text-[52px] font-bold text-gray-900 tracking-tight leading-[1.05] transition-all duration-700 delay-100",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
            >
              Your data.
              <br />
              Private and{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                secure.
              </span>
            </h2>

            {/* SOC 2 credential card */}
            <div
              className={cn(
                "mt-10 inline-flex items-center gap-4 rounded-2xl border border-blue-100 bg-white px-6 py-5 shadow-lg shadow-blue-900/5 transition-all duration-700 delay-200",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-md shadow-blue-500/30">
                <ShieldCheck className="h-7 w-7 text-white" strokeWidth={2} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
                  AICPA SOC
                </span>
                <span className="text-lg font-bold text-gray-900">
                  SOC 2 Type II
                </span>
                <span className="text-sm text-gray-500">Certified &amp; audited</span>
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
                    "transition-all duration-700",
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4",
                  )}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <h3 className="text-[22px] font-bold text-gray-900 tracking-tight">
                    {point.label}
                  </h3>
                  <p className="mt-2 text-[18px] leading-relaxed text-gray-600">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className={cn(
                "group mt-14 inline-flex items-center gap-2 text-[20px] font-bold text-blue-600 transition-all duration-700 hover:text-blue-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: "500ms" }}
            >
              <span className="underline underline-offset-4 decoration-2">
                DemandSense Security Portal
              </span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
