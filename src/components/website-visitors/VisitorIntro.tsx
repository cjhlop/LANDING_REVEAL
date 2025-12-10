import React from "react";
import { Activity, Eye, Target } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";

const VisitorIntro = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="mb-6">
              <SectionBadge icon={Eye} text="The Visibility Gap" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2043] mb-6 leading-tight">
              What Is Website Visitor Tracking and Why It Matters
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Most analytics tools show you sessions, bounce rates, and page views—but they don't tell you <strong>who</strong> is actually behind the screen. For B2B teams, this is a massive blind spot.
              </p>
              <p>
                Website visitor tracking bridges the gap between anonymous traffic and your real sales pipeline. It allows you to see account-level activity, revealing which companies are researching your solution right now.
              </p>
              <p>
                Without this visibility, you're flying blind, missing out on high-intent buyers who visit but don't fill out a form. DemandSense turns this hidden activity into actionable intelligence.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Abstract Visual Representation of "Unmasking" */}
            <div className="relative bg-gray-50 rounded-3xl p-8 border border-gray-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-4 relative z-10">
                {/* Anonymous State */}
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 opacity-50">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-xs">?</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 w-24 bg-gray-200 rounded mb-2" />
                    <div className="h-2 w-32 bg-gray-100 rounded" />
                  </div>
                </div>

                {/* Transition Arrow */}
                <div className="flex justify-center text-blue-500">
                  <Activity className="h-6 w-6" />
                </div>

                {/* Revealed State */}
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-blue-100 shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-[#0F2043]">Stripe, Inc.</div>
                    <div className="text-sm text-blue-600">High Intent • Pricing Page</div>
                  </div>
                  <div className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">
                    REVEALED
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisitorIntro;