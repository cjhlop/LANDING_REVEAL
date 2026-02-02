"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { 
  Users, 
  Target, 
  Zap, 
  MousePointer2, 
  CheckCircle2,
  ArrowRight,
  Activity
} from "lucide-react";

const AUDIENCE_POOL = [
  { name: "ICP-Fit Retargeting", icon: Target, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "High-Intent Visitors", icon: Zap, color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "Pricing Page Viewers", icon: MousePointer2, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { name: "Fortune 500 Accounts", icon: Users, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "Demo Request Drop-offs", icon: Activity, color: "text-red-500", bg: "bg-red-500/10" },
];

const DynamicAudienceActivation = ({ active }: { active: boolean }) => {
  const [items, setItems] = React.useState(() => 
    AUDIENCE_POOL.slice(0, 4).map((item, i) => ({ ...item, id: i, status: 'pending' as 'pending' | 'syncing' }))
  );
  const [counter, setCounter] = React.useState(4);

  React.useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setItems(prev => prev.map((item, i) => i === 0 ? { ...item, status: 'syncing' } : item));
      
      setTimeout(() => {
        setItems(prev => {
          const remaining = prev.slice(1);
          const nextItem = AUDIENCE_POOL[counter % AUDIENCE_POOL.length];
          setCounter(c => c + 1);
          return [...remaining, { ...nextItem, id: counter, status: 'pending' }];
        });
      }, 800);
    }, 3000);
    return () => clearInterval(interval);
  }, [active, counter]);

  return (
    <div className="w-full h-full bg-slate-900 rounded-3xl p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden border border-slate-800 shadow-2xl">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <div className="flex items-center justify-between mb-2 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Audience Sync</span>
        </div>
        <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400">
          ACTIVE
        </div>
      </div>

      <div className="flex flex-col gap-3 relative z-10">
        {items.map((item, i) => (
          <div 
            key={item.id}
            className={cn(
              "flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/50 transition-all duration-700 ease-in-out",
              item.status === 'syncing' ? "opacity-0 -translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
            )}
            style={{ 
              zIndex: 10 - i,
              opacity: item.status === 'pending' ? 1 - (i * 0.15) : 0,
              transform: `scale(${1 - (i * 0.02)})`
            }}
          >
            <div className="flex items-center gap-4">
              <div className={cn("p-2 rounded-lg", item.bg, item.color)}>
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{item.name}</div>
                <div className="text-[10px] text-slate-500">Updated 2m ago</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end">
                <div className="text-[10px] font-bold text-slate-500 uppercase">Size</div>
                <div className="text-xs font-bold text-blue-400">1.2k</div>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center relative z-10">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-slate-500 uppercase">Total Reach</span>
            <span className="text-xs font-bold text-white">42.8k</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-slate-500 uppercase">Match Rate</span>
            <span className="text-xs font-bold text-emerald-400">94%</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
          <CheckCircle2 className="h-3 w-3 text-emerald-500" />
          Synced to LinkedIn
        </div>
      </div>
    </div>
  );
};

export default DynamicAudienceActivation;