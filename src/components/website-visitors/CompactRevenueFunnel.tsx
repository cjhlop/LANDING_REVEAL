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
  Globe,
  MousePointerClick,
  FileText
} from "lucide-react";

const STAGES_CONFIG = [
  { name: "Exposed", base: 1250, icon: Users, color: "bg-blue-100 text-blue-600", borderColor: "border-blue-200" },
  { name: "Engaged", base: 456, icon: MousePointer2, color: "bg-indigo-100 text-indigo-600", borderColor: "border-indigo-200" },
  { name: "Clicks", base: 212, icon: MousePointerClick, color: "bg-violet-100 text-violet-600", borderColor: "border-violet-200" },
  { name: "Visits", base: 145, icon: Globe, color: "bg-emerald-100 text-emerald-600", borderColor: "border-emerald-200" },
  { name: "Deals", base: 89, icon: FileText, color: "bg-purple-100 text-purple-600", borderColor: "border-purple-200" },
  { name: "Won", base: 34, icon: CheckCircle2, color: "bg-orange-100 text-orange-600", borderColor: "border-orange-200" },
];

const CompactRevenueFunnel = ({ active }: { active: boolean }) => {
  return (
    <div className="magic-border h-full w-full group" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
      <div className="h-full w-full bg-slate-900 rounded-[inherit] overflow-hidden relative p-6 md:p-8 flex flex-col">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Revenue Attribution</span>
          </div>
          <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400">
            LIVE DATA
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-2 relative z-10">
          {STAGES_CONFIG.map((stage, i) => (
            <div 
              key={stage.name}
              className={cn(
                "relative flex items-center justify-between px-4 py-2 rounded-xl border bg-white/95 backdrop-blur-sm transition-all duration-700 shadow-sm",
                active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ 
                width: `${100 - (i * 8)}%`,
                margin: '0 auto',
                transitionDelay: `${i * 80}ms`
              }}
            >
              <div className="flex items-center gap-3">
                <div className={cn("p-1.5 rounded-lg shadow-sm", stage.color)}>
                  <stage.icon className="size-3.5" />
                </div>
                <div className="text-[10px] font-bold text-gray-900 uppercase tracking-tight">{stage.name}</div>
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
            <div className="bg-slate-950 text-white p-4 rounded-2xl shadow-2xl border border-slate-800 scale-90 origin-bottom-right">
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1 bg-blue-500/20 rounded-md text-blue-400">
                  <DollarSign className="size-3" />
                </div>
                <div className="text-[8px] font-bold uppercase tracking-wider text-slate-400">Influenced</div>
              </div>
              <div className="text-lg font-bold tracking-tight text-emerald-400">$1.24M</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompactRevenueFunnel;