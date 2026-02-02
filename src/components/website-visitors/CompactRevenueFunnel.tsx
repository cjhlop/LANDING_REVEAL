"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { 
  TrendingUp, 
  DollarSign, 
  CheckCircle2,
  Users,
  Eye,
  MousePointer2,
  Globe
} from "lucide-react";

const STAGES = [
  { name: "Exposed", base: 1250, icon: Users, color: "bg-blue-100 text-blue-600", borderColor: "border-blue-200" },
  { name: "Engaged", base: 456, icon: MousePointer2, color: "bg-indigo-100 text-indigo-600", borderColor: "border-indigo-200" },
  { name: "Visits", base: 145, icon: Globe, color: "bg-emerald-100 text-emerald-600", borderColor: "border-emerald-200" },
  { name: "Won", base: 34, icon: CheckCircle2, color: "bg-orange-100 text-orange-600", borderColor: "border-orange-200" },
];

const CompactRevenueFunnel = ({ active }: { active: boolean }) => {
  return (
    <div className="w-full h-full bg-white rounded-3xl p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden border border-gray-100 shadow-2xl">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Revenue Attribution</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
          LIVE
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-2 relative">
        {STAGES.map((stage, i) => (
          <div 
            key={stage.name}
            className={cn(
              "relative flex items-center justify-between px-4 py-2 rounded-xl border bg-white transition-all duration-700 shadow-sm",
              stage.borderColor,
              active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ 
              width: `${100 - (i * 12)}%`,
              margin: '0 auto',
              transitionDelay: `${i * 100}ms`
            }}
          >
            <div className="flex items-center gap-3">
              <div className={cn("p-1.5 rounded-lg shadow-sm", stage.color)}>
                <stage.icon className="size-3.5" />
              </div>
              <div className="text-[10px] font-bold text-gray-900 uppercase">{stage.name}</div>
            </div>
            <div className="text-xs font-bold text-gray-900 tabular-nums">
              {stage.base.toLocaleString()}
            </div>
          </div>
        ))}

        {/* Floating Revenue Card */}
        <div className={cn(
          "absolute bottom-0 right-0 transition-all duration-1000 delay-700",
          active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        )}>
          <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-800 scale-90 origin-bottom-right">
            <div className="flex items-center gap-2 mb-1">
              <div className="p-1 bg-blue-500/20 rounded-md text-blue-400">
                <DollarSign className="size-3" />
              </div>
              <div className="text-[8px] font-bold uppercase tracking-wider text-slate-400">Influenced</div>
            </div>
            <div className="text-lg font-bold tracking-tight">$1.2M</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompactRevenueFunnel;