"use client";

import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AudienceReportPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12">
        <div className="bg-[#F5F9FF] rounded-[24px] overflow-hidden border border-blue-100 flex flex-col lg:flex-row items-center shadow-sm">
          
          {/* Left: Compact Image Preview */}
          <div className="lg:w-[40%] bg-[#FFF9E6] p-8 flex items-center justify-center self-stretch">
            <div className="relative w-full max-w-[320px] aspect-[4/3] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              {/* Mock Dashboard UI */}
              <div className="p-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                </div>
                <div className="h-3 w-16 bg-gray-200 rounded-full" />
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-16 bg-gray-50 rounded-lg border border-gray-100" />
                  <div className="h-16 bg-gray-50 rounded-lg border border-gray-100" />
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-8 bg-gray-50 rounded border border-gray-100 flex items-center px-3 gap-3">
                      <div className="w-3 h-3 rounded bg-gray-200" />
                      <div className="h-1.5 w-1/3 bg-gray-200 rounded" />
                      <div className="h-1.5 w-1/4 bg-gray-100 rounded ml-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Focused Content */}
          <div className="lg:w-[60%] p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#3875F6] font-bold uppercase tracking-wider text-[11px] mb-4">
              <div className="p-1 bg-blue-50 rounded">
                <Search className="w-3.5 h-3.5" />
              </div>
              Audience Report Preview
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2043] mb-4 tracking-tight leading-tight">
              See what an <span className="text-[#3875F6]">audience report</span> looks like
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Get the exact output you'll receive from DemandSense: identified accounts, intent scores, and campaign-ready segments.
            </p>

            <div className="flex flex-col sm:flex-row gap-0 rounded-xl overflow-hidden border-2 border-[#3875F6] shadow-md max-w-lg">
              <Input 
                type="email" 
                placeholder="Work email" 
                className="h-12 border-none rounded-none focus-visible:ring-0 text-base px-4 flex-1 bg-white"
              />
              <Button 
                className="h-12 px-6 bg-[#3875F6] hover:bg-blue-700 text-white font-bold text-sm rounded-none transition-colors whitespace-nowrap"
              >
                Get Sample Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceReportPreview;