"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { TrendingUp, Target, Users, CheckCircle2 } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

// Lazy load react-countup to avoid SSR issues
const CountUp = lazy(() => import("react-countup"));

/** Hook: respects user's motion preferences */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

/** Utility: parse a metric like "98%", "3.8x", "$1,200+", "1.5M", "€23.4k" */
function parseMetricValue(raw: string) {
  const value = (raw ?? "").toString().trim();
  const m = value.match(
    /^([^\d\-+]*?)\s*([\-+]?\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*([^\d\s]*)$/
  );
  if (!m) {
    return { prefix: "", end: 0, suffix: value, decimals: 0 };
  }
  const [, prefix, num, suffix] = m;
  const normalized = num.replace(/,/g, "");
  const end = parseFloat(normalized);
  const decimals = (normalized.split(".")[1]?.length ?? 0);
  return {
    prefix: prefix ?? "",
    end: isNaN(end) ? 0 : end,
    suffix: suffix ?? "",
    decimals,
  };
}

/** Small component: one animated metric */
function MetricStat({
  value,
  label,
  sub,
  duration = 1.6,
  inView,
}: {
  value: string;
  label: string;
  sub?: string;
  duration?: number;
  inView: boolean;
}) {
  const reduceMotion = usePrefersReducedMotion();
  const { prefix, end, suffix, decimals } = parseMetricValue(value);

  return (
    <div className="flex flex-col gap-2 text-left p-6">
      <p
        className="text-2xl font-semibold text-gray-900 sm:text-4xl tracking-tight"
        aria-label={`${label} ${value}`}
      >
        {prefix}
        {reduceMotion || !inView ? (
          <span>
            {end.toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })}
          </span>
        ) : (
          <Suspense fallback={<span>{end}</span>}>
            <CountUp
              end={end}
              decimals={decimals}
              duration={duration}
              separator=","
              enableScrollSpy
              scrollSpyOnce
            />
          </Suspense>
        )}
        {suffix}
      </p>
      <p className="font-medium text-gray-900 text-left">
        {label}
      </p>
      {sub ? (
        <p className="text-gray-600 text-left text-sm">{sub}</p>
      ) : null}
    </div>
  );
}

export default function Casestudies() {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  const caseStudies = [
    {
      id: 1,
      quote:
        "With DemandSense, our marketing team finally has complete visibility into our B2B pipeline. We can track every touchpoint and optimize campaigns in real-time, resulting in 40% faster lead conversion.",
      name: "Sarah Chen",
      role: "VP of Marketing",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80",
      icon: Target,
      metrics: [
        { value: "40%", label: "Faster Lead Conversion", sub: "From first touch to opportunity" },
        { value: "95%", label: "Attribution Accuracy", sub: "Multi-touch attribution tracking" },
      ],
    },
    {
      id: 2,
      quote:
        "DemandSense transformed how we measure marketing ROI. The unified dashboard gives us instant insights across all channels, helping us reduce wasted ad spend by 70% and focus on what actually drives revenue.",
      name: "Michael Rodriguez",
      role: "Director of Demand Generation",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80",
      icon: TrendingUp,
      metrics: [
        { value: "3.5x", label: "ROI Improvement", sub: "Across all marketing channels" },
        { value: "70%", label: "Reduced Ad Waste", sub: "Better budget allocation" },
      ],
    },
    {
      id: 3,
      quote:
        "The collaborative features in DemandSense aligned our sales and marketing teams like never before. Everyone has access to the same data, and our pipeline velocity has doubled since implementation.",
      name: "Jennifer Park",
      role: "Chief Revenue Officer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80",
      icon: Users,
      metrics: [
        { value: "2x", label: "Pipeline Velocity", sub: "Faster deal progression" },
        { value: "88%", label: "Team Alignment", sub: "Sales & marketing sync" },
      ],
    },
  ];

  return (
    <section
      className="w-full bg-white px-8 md:px-[112px] py-[112px]"
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-[1216px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm border border-blue-100">
            <CheckCircle2 className="h-4 w-4" />
            Customer Success Stories
          </div>

          {headerInView ? (
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
              Real Results from{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Real Companies
              </span>
            </h2>
          ) : (
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight opacity-0">
              Real Results from Real Companies
            </h2>
          )}

          <h2 id="case-studies-heading" className="sr-only">
            Customer Success Stories
          </h2>

          <p
            className={cn(
              "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-opacity duration-700",
              headerInView ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: headerInView ? "200ms" : "0ms" }}
          >
            See how leading B2B companies use DemandSense to transform their marketing performance and drive measurable revenue growth.
          </p>
        </div>

        {/* Cases - Original Compact Layout */}
        <div className="mt-20 flex flex-col gap-20">
          {caseStudies.map((study, idx) => {
            const reversed = idx % 2 === 1;
            const [caseRef, caseInView] = useInViewOnce<HTMLDivElement>({
              threshold: 0.15,
              rootMargin: "0px 0px -10% 0px",
            });

            return (
              <div
                key={study.id}
                ref={caseRef}
                className={cn(
                  "grid gap-12 lg:grid-cols-3 xl:gap-24 items-center border-b border-gray-200 pb-12 transition-all duration-700 ease-out",
                  caseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: caseInView ? `${idx * 150}ms` : "0ms" }}
              >
                {/* Left: Image + Quote */}
                <div
                  className={cn(
                    "flex flex-col sm:flex-row gap-10 lg:col-span-2 lg:border-r lg:pr-12 xl:pr-16 text-left",
                    reversed
                      ? "lg:order-2 lg:border-r-0 lg:border-l border-gray-200 lg:pl-12 xl:pl-16 lg:pr-0"
                      : "border-gray-200",
                  )}
                >
                  <img
                    src={study.image}
                    alt={`${study.name} portrait`}
                    width={300}
                    height={400}
                    className="aspect-[29/35] h-auto w-full max-w-60 rounded-2xl object-cover ring-1 ring-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-300"
                    loading="lazy"
                  />
                  <figure className="flex flex-col justify-between gap-8 text-left">
                    <blockquote className="text-lg sm:text-xl text-gray-900 leading-relaxed text-left">
                      <h3 className="text-lg sm:text-xl lg:text-xl font-normal text-gray-900 leading-relaxed text-left">
                        Transforming B2B Marketing{" "}
                        <span className="block text-gray-600 text-sm sm:text-base lg:text-lg mt-2">
                          {study.quote}
                        </span>
                      </h3>
                    </blockquote>
                    <figcaption className="flex items-center gap-6 mt-4 text-left">
                      <div className="flex flex-col gap-1">
                        <span className="text-md font-medium text-gray-900">
                          {study.name}
                        </span>
                        <span className="text-sm text-gray-600">
                          {study.role}
                        </span>
                      </div>
                    </figcaption>
                  </figure>
                </div>

                {/* Right: Metrics */}
                <div
                  className={cn(
                    "grid grid-cols-1 gap-10 self-center text-left",
                    reversed ? "lg:order-1" : "",
                  )}
                >
                  {study.metrics.map((metric, i) => (
                    <MetricStat
                      key={`${study.id}-${i}`}
                      value={metric.value}
                      label={metric.label}
                      sub={metric.sub}
                      inView={caseInView}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}