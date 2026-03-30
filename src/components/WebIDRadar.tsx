"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { User, Building2, Globe, ShieldCheck, Fingerprint } from "lucide-react";

const WebIDRadar = () => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center overflow-hidden rounded-2xl bg-slate-50/50 border border-slate-100">
      {/* Radar Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[80%] border border-blue-100 rounded-full animate-pulse" />
        <div className="absolute w-[60%] h-[60%] border border-blue-50 rounded-full" />
        <div className="absolute w-[40%] h-[40%] border border-blue-50 rounded-full" />
      </div>

      {/* Rotating Scanner */}
      <div className="absolute inset-0 flex items-center justify-center animate-[spin_4s_linear_infinite]">
        <div className="w-1/2 h-[2px] bg-gradient-to-r from-transparent to-blue-500 origin-left" />
      </div>

      {/* Floating Data Points */}
      <div className="absolute top-1/4 left-1/4 animate-bounce delay-75">
        <div className="p-3 bg-white rounded-xl shadow-lg border border-blue-50 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <User size={16} />
          </div>
          <div className="space-y-1">
            <div className="h-2 w-16 bg-slate-100 rounded" />
            <div className="h-1.5 w-10 bg-slate-50 rounded" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-1/4 animate-bounce delay-300">
        <div className="p-3 bg-white rounded-xl shadow-lg border border-orange-50 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
            <Building2 size={16} />
          </div>
          <div className="space-y-1">
            <div className="h-2 w-20 bg-slate-100 rounded" />
            <div className="h-1.5 w-12 bg-slate-50 rounded" />
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-10 animate-pulse">
        <div className="p-2 bg-white rounded-lg shadow-md border border-blue-50">
          <Globe size={16} className="text-blue-400" />
        </div>
      </div>

      {/* Center Identity Core */}
      <div className="relative z-10 w-20 h-20 bg-white rounded-2xl shadow-2xl border border-blue-100 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-500/5 animate-ping rounded-2xl" />
        <Fingerprint size={32} className="text-blue-600" />
      </div>

      {/* Status Badge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-full shadow-xl flex items-center gap-2">
        <ShieldCheck size={14} />
        IDENTITY VERIFIED
      </div>
    </div>
  );
};

export default WebIDRadar;