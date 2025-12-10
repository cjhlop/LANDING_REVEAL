import React from "react";
import { Code2, Search, Zap, Database, TrendingUp } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";

const STEPS = [
  {
    icon: Code2,
    title: "Add Tracking Script",
    desc: "Install our lightweight pixel in minutes. It works with Google Tag Manager, WordPress, and all major CMS platforms."
  },
  {
    icon: Search,
    title: "Capture Visits",
    desc: "The platform instantly begins capturing all site visits, filtering out bots and ISPs to focus on real traffic."
  },
  {
    icon: Zap,
    title: "Identify & Score",
    desc: "Reveal Intent matches IPs to companies and scores their behavior to determine buying readiness."
  },
  {
    icon: Database,
    title: "Connect CRM",
    desc: "Automatically sync high-intent accounts to Salesforce or HubSpot to alert your sales team."
  },
  {
    icon: TrendingUp,
    title: "Get Insights",
    desc: "Receive actionable reports and alerts to close deals faster and optimize your marketing spend."
  }
];

const VisitorSteps = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center mb-6">
            <SectionBadge icon={Zap} text="Simple Setup" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2043] mb-6">
            How It Works Step by Step
          </h2>
          <p className="text-gray-600 text-lg">
            Go from anonymous traffic to actionable pipeline in five simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {STEPS.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="absolute top-8 right-[-50%] w-full h-0.5 bg-gray-100 hidden lg:block -z-10 last:hidden" />
                
                <h3 className="text-lg font-bold text-[#0F2043] mb-3">{step.title}</h3>
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