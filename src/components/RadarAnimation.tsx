"use client";

import React from 'react';
import { cn } from "@/lib/utils";

const RadarAnimation = () => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      {/* Radar Wrapper */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full rounded-full border border-blue-100/50 bg-blue-50/30 overflow-hidden shadow-inner">
          
          {/* Radar Grid */}
          <div className="absolute inset-0 opacity-20" 
               style={{ 
                 backgroundImage: 'linear-gradient(#3875f6 1px, transparent 1px), linear-gradient(90deg, #3875f6 1px, transparent 1px)',
                 backgroundSize: '40px 40px',
                 backgroundPosition: 'center'
               }} 
          />

          {/* Concentric Circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/4 h-1/4 border border-blue-200/40 rounded-full" />
            <div className="absolute w-1/2 h-1/2 border border-blue-200/40 rounded-full" />
            <div className="absolute w-3/4 h-3/4 border border-blue-200/40 rounded-full" />
          </div>

          {/* Radar Sweep */}
          <div className="absolute inset-0 origin-center animate-[spin_4s_linear_infinite]"
               style={{
                 background: 'conic-gradient(from 0deg, transparent 0deg, rgba(56, 117, 246, 0.3) 360deg)'
               }}
          />

          {/* Radar Targets (Animated Blips) */}
          <div className="absolute top-[25%] left-[30%] w-3 h-3 bg-blue-600 rounded-full animate-pulse shadow-[0_0_15px_rgba(56,117,246,0.8)]" />
          <div className="absolute top-[60%] left-[70%] w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-700 shadow-[0_0_10px_rgba(56,117,246,0.6)]" />
          <div className="absolute top-[45%] left-[55%] w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse delay-300 shadow-[0_0_12px_rgba(56,117,246,0.7)]" />
          
          {/* Center Point */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default RadarAnimation;