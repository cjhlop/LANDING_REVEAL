"use client";

import React from "react";
import { Calendar, Clock, ChevronDown, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const LinkedInAdsSchedulingVisual = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = ["9 AM", "12 PM", "3 PM", "6 PM"];

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden font-sans">
      {/* Header */}
      <div className="border-b border-slate-100 p-4 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Calendar className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Smart Scheduling</h4>
            <p className="text-[10px] text-slate-500">Active • 4 Campaigns</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded border border-green-100">
            Optimizing
          </div>
          <MoreHorizontal className="w-4 h-4 text-slate-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Time Grid Mockup */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              Delivery Windows (EST)
            </span>
            <span className="text-[10px] text-blue-600 font-medium cursor-pointer">Edit Schedule</span>
          </div>
          
          <div className="grid grid-cols-8 gap-1">
            <div className="col-span-1"></div>
            {days.map(day => (
              <div key={day} className="text-[9px] text-center text-slate-400 font-medium pb-1">{day}</div>
            ))}
            
            {hours.map((hour, i) => (
              <React.Fragment key={hour}>
                <div className="text-[9px] text-slate-400 flex items-center">{hour}</div>
                {days.map((day, j) => {
                  const isActive = (i === 0 || i === 1) && j < 5; // Active during business hours Mon-Fri
                  return (
                    <div 
                      key={`${day}-${hour}`} 
                      className={cn(
                        "h-6 rounded-sm border transition-colors",
                        isActive 
                          ? "bg-blue-500 border-blue-600 shadow-sm" 
                          : "bg-slate-50 border-slate-100"
                      )}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Campaign List */}
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Active Campaigns</p>
          {[
            { name: "Global ABM - Tier 1", status: "Running", savings: "+24%" },
            { name: "Retargeting - High Intent", status: "Paused (Off-hours)", savings: "+41%" }
          ].map((campaign, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  campaign.status.includes("Running") ? "bg-green-500 animate-pulse" : "bg-amber-400"
                )} />
                <span className="text-xs font-medium text-slate-700">{campaign.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[9px] text-slate-400">Efficiency Lift</p>
                  <p className="text-xs font-bold text-blue-600">{campaign.savings}</p>
                </div>
                <div className="w-8 h-4 bg-slate-200 rounded-full relative">
                  <div className={cn(
                    "absolute top-0.5 w-3 h-3 rounded-full transition-all",
                    campaign.status.includes("Running") ? "right-0.5 bg-blue-600" : "left-0.5 bg-white"
                  )} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="bg-slate-900 p-4 flex justify-around">
        <div className="text-center">
          <p className="text-[9px] text-slate-400">Budget Saved</p>
          <p className="text-sm font-bold text-white">$1,240.50</p>
        </div>
        <div className="w-px h-8 bg-slate-800" />
        <div className="text-center">
          <p className="text-[9px] text-slate-400">CPC Reduction</p>
          <p className="text-sm font-bold text-green-400">-32.4%</p>
        </div>
      </div>
    </div>
  );
};

export default LinkedInAdsSchedulingVisual;