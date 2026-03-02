"use client";

import React from "react";
import { MoreVertical, Clock, HelpCircle, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const LinkedInAdsHeroVisual = () => {
  return (
    <div className="relative w-full h-full bg-slate-50/50 rounded-3xl overflow-hidden border border-slate-200 p-4 md:p-8">
      {/* Top Row: Budget Table & Frequency Cap */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Budget Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-[10px] md:text-xs">
            <thead>
              <tr className="bg-blue-50/50 text-slate-500 border-b border-slate-100">
                <th className="p-3 text-left font-semibold">Campaign Groups</th>
                <th className="p-3 text-left font-semibold">Spend to Date</th>
                <th className="p-3 text-left font-semibold">Remaining Budget</th>
                <th className="p-3 text-left font-semibold">Forecasted Spend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr className="font-bold text-slate-900">
                <td className="p-3">Budget Group</td>
                <td className="p-3">$11,591.88 <span className="text-emerald-500">(58%)</span></td>
                <td className="p-3">$8,408.12 <span className="text-emerald-500">(42%)</span></td>
                <td className="p-3">$11,591.88 <span className="text-emerald-500">(58%)</span></td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-3">Cold Layer Ads</td>
                <td className="p-3">$2,178.41</td>
                <td className="p-3">$-2,178.41</td>
                <td className="p-3">$2,178.41</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-3">Retargeting Layer Ads</td>
                <td className="p-3">$11,591.88</td>
                <td className="p-3">$-11,591.88</td>
                <td className="p-3">$11,591.88</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Frequency Cap Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <h4 className="text-sm font-bold text-slate-800 mb-4">Frequency Cap:</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-slate-300 flex items-center justify-center">
                <Check className="w-3 h-3 text-blue-600" />
              </div>
              <span className="text-xs font-medium text-slate-700">Impressions Cap</span>
              <HelpCircle className="w-3 h-3 text-slate-400" />
            </div>
            <div className="bg-slate-50 rounded border border-slate-200 p-2 text-xs text-slate-400">3</div>
            
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-slate-300" />
              <span className="text-xs font-medium text-slate-700">Clicks Cap</span>
              <HelpCircle className="w-3 h-3 text-slate-400" />
            </div>
            <div className="bg-slate-50 rounded border border-slate-200 p-2 text-xs text-slate-400">15</div>
          </div>
        </div>
      </div>

      {/* Middle Row: Metrics & Floating Schedule */}
      <div className="relative mb-6">
        {/* Floating Schedule Badge */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 bg-white rounded-lg shadow-lg border border-slate-100 p-3 flex items-center gap-3 min-w-[240px]">
          <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded flex items-center gap-1.5 text-[10px] font-bold">
            <Clock className="w-3 h-3" />
            Scheduled
          </div>
          <div className="text-[10px] text-slate-500 leading-tight">
            <p>Weekdays 5:00 AM - 3:00 PM</p>
            <p>All Days 7:00 PM - 11:00 PM</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-slate-800">Hour-by-hour Reporting</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { label: "Impressions", value: "2,524,789", active: false },
              { label: "Clicks", value: "60,897", active: false },
              { label: "Spend", value: "$38,683.53", active: true },
              { label: "Cost Per Click", value: "$2.81", active: false },
              { label: "Click-Through Rate", value: "0.87%", active: false },
            ].map((metric, i) => (
              <div 
                key={i} 
                className={cn(
                  "p-3 rounded-lg border transition-all",
                  metric.active ? "border-blue-500 ring-1 ring-blue-500" : "border-slate-100"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-medium text-slate-500">{metric.label}</span>
                  <MoreVertical className="w-3 h-3 text-slate-300" />
                </div>
                <div className="text-sm font-bold text-slate-900">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xs font-bold text-slate-800">Spend by Hour of Week</h4>
          <MoreVertical className="w-3 h-3 text-slate-400" />
        </div>
        <div className="h-32 w-full flex items-end gap-0.5">
          {[...Array(60)].map((_, i) => {
            const height = Math.random() * 80 + 10;
            const isPeak = i % 12 > 4 && i % 12 < 9;
            return (
              <div 
                key={i} 
                className={cn(
                  "flex-1 rounded-t-sm transition-all",
                  isPeak ? "bg-blue-500" : "bg-blue-200"
                )}
                style={{ height: `${height}%` }}
              />
            );
          })}
        </div>
        <div className="flex justify-between mt-2 text-[8px] text-slate-400 font-medium uppercase tracking-tighter">
          <span>12AM Sun</span>
          <span>12AM Mon</span>
          <span>12AM Tue</span>
          <span>12AM Wed</span>
          <span>12AM Thu</span>
          <span>12AM Fri</span>
          <span>12AM Sat</span>
        </div>
      </div>
    </div>
  );
};

export default LinkedInAdsHeroVisual;