"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { 
  Link, 
  Database, 
  Settings2, 
  BarChart3, 
  RefreshCw,
  CheckCircle2
} from "lucide-react";
import SectionBadge from "@/components/SectionBadge";

const STEPS = [
  {
    icon: Link,
    title: "Connect Ad Account",
    desc: "Authorize DemandSense to read your LinkedIn Ads data via secure API."
  },
  {
    icon: Database,
    title: "Sync Your CRM",
    desc: "Connect HubSpot or Salesforce to pull deal stages and revenue data."
  },
  {
    icon: Settings2,
    title: "Set Attribution Logic",
    desc: "Choose your lookback window and what counts as a meaningful touchpoint."
  },
  {
    icon: BarChart3,
    title: "Analyze Influence",
    desc: "See which campaigns, accounts, and segments are driving pipeline."
  },
  {
    icon: RefreshCw,
    title: "Optimize & Scale",
    desc: "Feed revenue signals back into LinkedIn to refine your targeting."
  }
];

const RevenueSteps = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center mb-6">
            <SectionBadge icon={Settings2} text="5-STEP SETUP" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight">
            Go from raw ad data to <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">revenue visibility in under 5 min.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {STEPS.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 z-10">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <step.icon className="h-6 w-6" />
                    </div>
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0F2043] text-white text-xs font-bold flex items-center justify-center border-4 border-white shadow-sm">
                    {i + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-[#0F2043] mb-3 uppercase tracking-tight">STEP {i + 1}</h3>
                <h4 className="text-base font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueSteps;