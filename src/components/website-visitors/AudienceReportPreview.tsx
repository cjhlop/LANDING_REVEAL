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
          
          {/* Left: Image Preview */}
          <div className="lg:w-[50%] bg-[#FFF9E6] p-8 flex items-center justify-center self-stretch">
            <div className="relative w-full max-w-[500px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/images/visitor-report-preview.png" 
                alt="Visitor Report Preview" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Focused Content */}
          <div className="lg:w-[50%] p-8 md:p-12 flex flex-col justify-center">
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