import React from "react";
import { Code2, Search, Zap, Database, TrendingUp, Settings2 } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";

const STEPS = [
  {
    icon: Code2,
    title: "Add Tracking Script",
    desc: "Install a lightweight script in minutes. Works with GTM, WordPress, and any CMS."
  },
  {
    icon: Search,
    title: "Capture Visits",
    desc: "Start collecting real visits immediately. Bots and noise are filtered out."
  },
  {
    icon: Zap,
    title: "Identify & Score",
    desc: "Match visits to companies and score them by intent and ICP fit."
  },
  {
    icon: Database,
    title: "Connect Your CRM",
    desc: "Sync high-intent accounts to Salesforce or HubSpot automatically."
  },
  {
    icon: TrendingUp,
    title: "See What Works",
    desc: "See which accounts engage, which audiences convert, and what drives results."
  }
];

const VisitorSteps = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center mb-6">
            <SectionBadge icon={Settings2} text="5-STEP SETUP" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight">
            Go from fully anonymous traffic to <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">campaign-ready audiences in under 5 min.</span>
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
                
                <div className="absolute top-8 right-[-50%] w-full h-0.5 bg-gray-100 hidden lg:block -z-10 last:hidden" />
                
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

export default VisitorSteps;