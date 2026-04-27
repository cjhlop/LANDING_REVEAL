"use client";

import * as React from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const EventBanner = () => {
  return (
    <div className="sticky top-0 z-[60] w-full bg-[#EFF4FE] border-b border-[#E2E8F0] px-4 sm:px-6 py-3 font-sans">
      <div className="max-w-[1216px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        
        {/* Left Side: Icon + Label + Headline */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-0">
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-[#3875F6]" />
            <span className="text-sm font-semibold text-[#3875F6] whitespace-nowrap">
              Live event · May 6
            </span>
          </div>
          
          {/* Divider - Hidden on mobile */}
          <div className="hidden sm:block w-px h-4 bg-[#E2E8F0] mx-3" />
          
          <span className="text-sm font-medium text-[#111827] leading-tight">
            How to save 40% of ad spend with better LinkedIn setup
          </span>
        </div>

        {/* Right Side: CTA Button */}
        <a 
          href="https://www.linkedin.com/event/manage/7453172723108921344/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-[#3875F6] hover:bg-[#2c5cc5] text-white text-sm font-semibold rounded-md transition-colors duration-200 whitespace-nowrap"
        >
          Save your seat
        </a>
      </div>
    </div>
  );
};

export default EventBanner;