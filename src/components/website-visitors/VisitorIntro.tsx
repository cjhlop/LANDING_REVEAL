import React, { useState, useEffect } from "react";
import { Activity, Eye, Target, Search, UserCheck, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const VisitorIntro = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3000); // Cycle every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
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
            
            <div className="mt-8">
              <Button className="h-12 px-6 rounded-full bg-[#3875F6] hover:bg-[#1A3F89] text-white font-medium shadow-lg hover:shadow-blue-500/20 transition-all group">
                See Who's Visiting
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative h-full flex items-center">
            {/* Abstract Visual Representation of "Unmasking" */}
            <div className="relative w-full bg-gray-50 rounded-3xl p-8 border border-gray-200 overflow-hidden min-h-[500px] flex flex-col justify-center">
              
              {/* Background Effects */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse duration-[4000ms]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
              
              <div className="relative z-10 flex flex-col items-center gap-8">
                
                {/* Stage 1: Anonymous Visitor */}
                <div className={cn(
                  "w-full bg-white rounded-xl border p-4 shadow-sm transition-all duration-700 ease-in-out transform",
                  step === 0 
                    ? "border-gray-200 opacity-100 scale-100 translate-y-0" 
                    : "border-gray-100 opacity-40 scale-95 -translate-y-4 blur-[1px]"
                )}>
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500",
                      step === 0 ? "bg-gray-100 text-gray-400" : "bg-gray-50 text-gray-300"
                    )}>
                      <Search className="h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-32 bg-gray-100 rounded animate-pulse" />
                      <div className="h-3 w-24 bg-gray-50 rounded" />
                    </div>
                    <div className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded-full">
                      ANONYMOUS
                    </div>
                  </div>
                </div>

                {/* Processing Arrow */}
                <div className="relative h-12 w-0.5 bg-gray-200 overflow-hidden">
                  <div className={cn(
                    "absolute top-0 left-0 w-full h-1/2 bg-blue-500 transition-all duration-1000 ease-linear",
                    step >= 1 ? "top-full opacity-0" : "top-0 opacity-100 animate-[shimmer_1.5s_infinite]"
                  )} />
                  <div className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1.5 rounded-full border border-gray-200 text-gray-400 transition-all duration-500",
                    step === 1 ? "border-blue-500 text-blue-500 scale-110 shadow-md" : ""
                  )}>
                    <Activity className="h-4 w-4" />
                  </div>
                </div>

                {/* Stage 2: Identification Process */}
                <div className={cn(
                  "w-full bg-white rounded-xl border p-4 shadow-sm transition-all duration-700 ease-in-out transform",
                  step === 1
                    ? "border-blue-200 opacity-100 scale-100 translate-y-0 shadow-md" 
                    : "border-gray-100 opacity-40 scale-95 translate-y-4 blur-[1px]"
                )}>
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 relative overflow-hidden",
                      step === 1 ? "bg-blue-50 text-blue-600" : "bg-gray-50 text-gray-300"
                    )}>
                      <div className="absolute inset-0 bg-blue-200/20 animate-[spin_3s_linear_infinite]" />
                      <Target className="h-6 w-6 relative z-10" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">Matching IP...</span>
                        {step === 1 && <span className="flex gap-0.5">
                          <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" />
                          <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-100" />
                          <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-200" />
                        </span>}
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className={cn(
                          "h-full bg-blue-500 transition-all duration-[2500ms] ease-out",
                          step === 1 ? "w-full" : "w-0"
                        )} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Processing Arrow */}
                <div className="relative h-12 w-0.5 bg-gray-200 overflow-hidden">
                   <div className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1.5 rounded-full border border-gray-200 text-gray-400 transition-all duration-500",
                    step === 2 ? "border-green-500 text-green-500 scale-110 shadow-md" : ""
                  )}>
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>

                {/* Stage 3: Revealed Identity */}
                <div className={cn(
                  "w-full bg-white rounded-xl border p-4 shadow-lg transition-all duration-700 ease-in-out transform relative overflow-hidden",
                  step === 2
                    ? "border-green-200 opacity-100 scale-105 translate-y-0 ring-4 ring-green-500/5" 
                    : "border-gray-100 opacity-40 scale-95 translate-y-4 blur-[1px]"
                )}>
                  {step === 2 && <div className="absolute inset-0 bg-green-500/5 animate-pulse" />}
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#3875F6] flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-[#0F2043] text-lg">Stripe, Inc.</div>
                      <div className="text-sm text-[#3875F6] font-medium flex items-center gap-1">
                        <UserCheck className="h-3 w-3" />
                        High Intent • Pricing Page
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1 shadow-sm">
                      REVEALED
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default VisitorIntro;