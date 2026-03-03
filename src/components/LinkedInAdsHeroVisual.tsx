"use client";

import React from "react";
import { MoreVertical, Clock, HelpCircle, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const LinkedInAdsHeroVisual = () => {
  return (
    <div className="relative w-full bg-slate-50/50 rounded-3xl overflow-hidden border border-slate-200 p-4 md:p-6">
      {/* Top Row: Budget Table & Frequency Cap */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4">
        {/* Budget Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-[9px] md:text-[11px]">
            <thead>
              <tr className="bg-blue-50/50 text-slate-500 border-b border-slate-100">
                <th className="p-2 text-left font-semibold">Campaign Groups</th>
                <th className="p-2 text-left font-semibold">Spend to Date</th>
                <th className="p-2 text-left font-semibold">Remaining</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr className="font-bold text-slate-900">
                <td className="p-2">Budget Group</td>
                <td className="p-2">$11,591.88 <span className="text-emerald-500">(58%)</span></td>
                <td className="p-2">$8,408.12</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-2">Cold Layer Ads</td>
                <td className="p-2">$2,178.41</td>
                <td className="p-2">$-2,178.41</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-2">Retargeting Layer</td>
                <td className="p-2">$11,591.88</td>
                <td className="p-2">$-11,591.88</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Frequency Cap Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3">
          <h4 className="text-[11px] font-bold text-slate-800 mb-2">Frequency Cap:</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded border border-slate-300 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-blue-600" />
              </div>
              <span className="text-[10px] font-medium text-slate-700">Impressions</span>
            </div>
            <div className="bg-slate-50 rounded border border-slate-200 p-1.5 text-[10px] text-slate-400">3</div>
            
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded border border-slate-300" />
              <span className="text-[10px] font-medium text-slate-700">Clicks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: Metrics & Floating Schedule */}
      <div className="relative mb-4">
        {/* Floating Schedule Badge - Adjusted position */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 bg-white rounded-lg shadow-lg border border-slate-100 p-2 flex items-center gap-2 min-w-[200px]">
          <div className="bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded flex items-center gap-1 text-[9px] font-bold">
            <Clock className="w-2.5 h-2.5" />
            Scheduled
          </div>
          <div className="text-[9px] text-slate-500 leading-tight">
            <p>Weekdays 5AM - 3PM</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {[
              { label: "Impressions", value: "2.5M", active: false },
              { label: "Clicks", value: "60.8k", active: false },
              { label: "Spend", value: "$38.6k", active: true },
              { label: "CPC", value: "$2.81", active: false },
              { label: "CTR", value: "0.87%", active: false },
            ].map((metric, i) => (
              <div 
                key={i} 
                className={cn(
                  "p-2 rounded-lg border transition-all",
                  metric.active ? "border-blue-500 ring-1 ring-blue-500" : "border-slate-100"
                )}
              >
                <div className="text-[9px] font-medium text-slate-500 mb-1">{metric.label}</div>
                <div className="text-xs font-bold text-slate-900">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Chart - Reduced height */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Spend by Hour</h4>
          <MoreVertical className="w-3 h-3 text-slate-400" />
        </div>
        <div className="h-20 w-full flex items-end gap-0.5">
          {[...Array(48)].map((_, i) => {
            const height = Math.random() * 70 + 15;
            const isPeak = i % 12 > 4 && i % 12 < 9;
            return (
              <div 
                key={i} 
                className={cn(
                  "flex-1 rounded-t-sm transition-all",
                  isPeak ? "bg-blue-500" : "bg-blue-100"
                )}
                style={{ height: `${height}%` }}
              />
            );
          })}
        </div>
        <div className="flex justify-between mt-1.5 text-[7px] text-slate-400 font-bold uppercase tracking-tighter">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
      </div>
    </div>
  );
};

export default LinkedInAdsHeroVisual;