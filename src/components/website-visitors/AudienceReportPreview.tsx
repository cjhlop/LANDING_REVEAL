"use client";

import React from "react";
import { Search, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AudienceReportPreview = () => {
  return (
    <section className="py-24 bg-[#F5F9FF]">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-blue-100 flex flex-col lg:flex-row items-stretch">
          
          {/* Left: Image Preview */}
          <div className="lg:w-1/2 bg-[#FFF9E6] p-8 md:p-12 flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              {/* Mock Dashboard UI */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <div className="h-4 w-24 bg-gray-200 rounded-full" />
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-gray-50 rounded-lg border border-gray-100" />
                  <div className="h-24 bg-gray-50 rounded-lg border border-gray-100" />
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 bg-gray-50 rounded border border-gray-100 flex items-center px-4 gap-4">
                      <div className="w-4 h-4 rounded bg-gray-200" />
                      <div className="h-2 w-1/3 bg-gray-200 rounded" />
                      <div className="h-2 w-1/4 bg-gray-100 rounded ml-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#3875F6] font-bold uppercase tracking-wider text-sm mb-6">
              <div className="p-1.5 bg-blue-50 rounded-md">
                <Search className="w-4 h-4" />
              </div>
              Audience Report Preview
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-8 tracking-tight leading-[1.1]">
              See what an <span className="text-[#3875F6]">audience report</span> looks like even before you try it
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              <strong>It shows the exact output you get from DemandSense:</strong> which accounts show up, how intent is scored, and how traffic ends up split into campaign-ready audiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-0 rounded-xl overflow-hidden border-2 border-[#3875F6] shadow-lg">
              <Input 
                type="email" 
                placeholder="Enter your work email" 
                className="h-14 border-none rounded-none focus-visible:ring-0 text-lg px-6 flex-1"
              />
              <Button 
                className="h-14 px-8 bg-[#3875F6] hover:bg-blue-700 text-white font-bold text-lg rounded-none transition-colors"
              >
                Get A Sample Audience Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceReportPreview;