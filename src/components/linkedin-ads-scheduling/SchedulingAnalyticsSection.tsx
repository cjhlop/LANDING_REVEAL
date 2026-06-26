"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Clock3, CalendarDays, BarChart3 } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";

// --- Mock Preview: Hourly Breakdown ---
const HourlyBreakdownPreview = () => {
  // 24 bars representing hours; peak hours highlighted
  const hours = Array.from({ length: 24 }, (_, i) => {
    const peak = [9, 10, 11, 13, 14, 15].includes(i);
    const base = peak ? 60 + Math.random() * 35 : 15 + Math.random() * 35;
    return { hour: i, height: base, peak };
  });

  return (
    <div className="relative w-full h-full grid grid-cols-1 gap-6 p-8 md:p-12 items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />

      <div className="relative z-10 w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in zoom-in-95 duration-700">
        {/* Header */}
        <div className="bg-gray-50/80 border-b border-gray-100 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
              Performance by hour
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-[10px] font-medium text-gray-400">Peak window</span>
          </div>
        </div>

        {/* Chart */}
        <div className="p-6">
          <div className="flex items-end justify-between gap-[3px] h-44">
            {hours.map((h) => (
              <div key={h.hour} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <div
                  className={cn(
                    "w-full rounded-t-sm transition-all duration-700",
                    h.peak ? "bg-blue-600" : "bg-blue-100"
                  )}
                  style={{ height: `${h.height}%` }}
                />
              </div>
            ))}
          </div>
          {/* X axis labels */}
          <div className="flex justify-between mt-3 text-[8px] font-bold text-gray-400 uppercase tracking-tighter">
            <span>12a</span>
            <span>6a</span>
            <span>12p</span>
            <span>6p</span>
            <span>11p</span>
          </div>
        </div>

        {/* Footer stats */}
        <div className="grid grid-cols-3 border-t border-gray-100 divide-x divide-gray-100">
          {[
            { label: "Impressions", value: "124.5k" },
            { label: "Clicks", value: "842" },
            { label: "Conversions", value: "63" },
          ].map((stat) => (
            <div key={stat.label} className="p-4 text-center">
              <div className="text-lg font-bold text-gray-900">{stat.value}</div>
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Mock Preview: Weekday vs Weekend ---
const WeekdayWeekendPreview = () => {
  const weekdays = [
    { day: "Mon", value: 82 },
    { day: "Tue", value: 95 },
    { day: "Wed", value: 88 },
    { day: "Thu", value: 91 },
    { day: "Fri", value: 74 },
  ];
  const weekend = [
    { day: "Sat", value: 28 },
    { day: "Sun", value: 22 },
  ];

  return (
    <div className="relative w-full h-full grid grid-cols-1 gap-6 p-8 md:p-12 items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />

      <div className="relative z-10 w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in zoom-in-95 duration-700">
        {/* Header */}
        <div className="bg-gray-50/80 border-b border-gray-100 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
              Weekday vs. weekend
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-medium">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-gray-500">Weekday</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-gray-300" />
              <span className="text-gray-500">Weekend</span>
            </div>
          </div>
        </div>

        {/* Grouped bars */}
        <div className="p-6">
          <div className="flex items-end justify-between gap-3 h-44">
            {weekdays.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div
                  className="w-full bg-blue-600 rounded-t-md transition-all duration-700"
                  style={{ height: `${d.value}%` }}
                />
                <span className="text-[10px] font-bold text-gray-500">{d.day}</span>
              </div>
            ))}
            <div className="w-px self-stretch bg-gray-100 mx-1" />
            {weekend.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div
                  className="w-full bg-gray-300 rounded-t-md transition-all duration-700"
                  style={{ height: `${d.value}%` }}
                />
                <span className="text-[10px] font-bold text-gray-400">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer split summary */}
        <div className="grid grid-cols-2 border-t border-gray-100 divide-x divide-gray-100">
          <div className="p-4 text-center">
            <div className="text-lg font-bold text-blue-600">86%</div>
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mt-0.5">
              Weekday share
            </div>
          </div>
          <div className="p-4 text-center">
            <div className="text-lg font-bold text-gray-400">14%</div>
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mt-0.5">
              Weekend share
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CARDS = [
  {
    id: "hourly" as const,
    icon: Clock3,
    label: "HOURLY BREAKDOWN",
    title: "Hourly breakdown by performance metrics",
    desc: "See where impressions, clicks, and conversions land across every hour of the day.",
  },
  {
    id: "weekday" as const,
    icon: CalendarDays,
    label: "WEEKDAY VS. WEEKEND",
    title: "Weekday vs. weekend delivery comparison",
    desc: "Compare weekday and weekend delivery side by side, then set your days and times to match.",
  },
];

const SchedulingAnalyticsSection = () => {
  const [activeTab, setActiveTab] = useState<"hourly" | "weekday">("hourly");

  return (
    <section className="py-32 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center mb-8">
            <SectionBadge icon={BarChart3} text="Scheduling Analytics" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight">
            Identify the best times to run <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">LinkedIn ads</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            See how your ads perform by time before you set a single rule. The hourly breakdown shows you exactly when your audience engages, so your schedule is built on your own data, not generic best-practice advice about the best times to run LinkedIn ads.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="bg-gray-50 rounded-3xl border border-gray-200 p-2 md:p-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 flex flex-col gap-2 lg:justify-center">
              {CARDS.map((card) => {
                const isActive = activeTab === card.id;
                return (
                  <button
                    key={card.id}
                    onClick={() => setActiveTab(card.id)}
                    className={cn(
                      "text-left p-5 rounded-2xl transition-all duration-300 border-2 group relative overflow-hidden",
                      isActive
                        ? "bg-white border-blue-600 shadow-lg"
                        : "bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200"
                    )}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={cn(
                          "w-9 h-9 rounded-lg flex items-center justify-center transition-colors flex-shrink-0",
                          isActive ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-500 group-hover:bg-white group-hover:text-gray-700"
                        )}>
                          <card.icon className="h-4 w-4" />
                        </div>
                        <h3 className={cn("text-lg font-bold", isActive ? "text-gray-900" : "text-gray-600")}>
                          {card.label}
                        </h3>
                      </div>
                      <div className="space-y-2 pl-1">
                        <p className={cn("text-base font-bold leading-tight", isActive ? "text-gray-900" : "text-gray-700")}>
                          {card.title}
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                    {isActive && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10">
                        <card.icon className="h-24 w-24" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Visual Stage */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-200 shadow-inner overflow-hidden relative min-h-[500px]">
              {/* Grid Pattern Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

              {/* Content Switcher */}
              <div className="absolute inset-0">
                {activeTab === "hourly" && <HourlyBreakdownPreview />}
                {activeTab === "weekday" && <WeekdayWeekendPreview />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingAnalyticsSection;