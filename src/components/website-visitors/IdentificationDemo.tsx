import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Globe, Building2, ScanFace } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import DataPoint from "./DataPoint";

const IdentificationDemo = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[4/5] md:aspect-square bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="text-xs font-mono text-gray-400">visitor_session_id: 8x92...</div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Stage 1: The Visit */}
        <div className={cn("transition-opacity duration-500", step >= 0 ? "opacity-100" : "opacity-30")}>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Globe className="h-5 w-5" /></div>
            <div>
              <div className="text-sm font-bold text-gray-900">New Visit Detected</div>
              <div className="text-xs text-gray-500">IP: 66.249.70.12 • San Francisco, CA</div>
            </div>
          </div>
        </div>

        {/* Stage 2: The Company */}
        <div className={cn("transition-all duration-500 delay-100", step >= 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4")}>
          <div className="relative pl-4 border-l-2 border-blue-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><Building2 className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-bold text-gray-900">Company Matched</div>
                <div className="text-xs text-gray-500">Stripe, Inc. • SaaS • 5000+ Employees</div>
              </div>
            </div>
            {step >= 1 && (
              <div className="mt-3 bg-gray-50 rounded-lg p-3 space-y-2">
                <DataPoint label="Revenue" value="$10B+" delay={100} />
                <DataPoint label="Tech Stack" value="AWS, React, Salesforce" delay={300} />
              </div>
            )}
          </div>
        </div>

        {/* Stage 3: The Person */}
        <div className={cn("transition-all duration-500 delay-200", step >= 2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4")}>
          <div className="relative pl-4 border-l-2 border-purple-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-50 rounded-lg text-green-600"><ScanFace className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-bold text-gray-900">Profile Identified</div>
                <div className="text-xs text-gray-500">High Intent Signal • 3rd Visit</div>
              </div>
            </div>
            {step >= 2 && (
              <div className="mt-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-white shadow-lg transform transition-all hover:scale-105 cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg font-bold">
                      JD
                    </div>
                    <div>
                      <div className="font-bold">John Doe</div>
                      <div className="text-xs text-blue-100">VP of Engineering</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-400/20 text-green-100 hover:bg-green-400/30 border-0">
                    Decision Maker
                  </Badge>
                </div>
                <div className="space-y-2 text-sm text-blue-50">
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400" /> john.doe@stripe.com</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400" /> +1 (555) 012-3456</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400" /> linkedin.com/in/johndoe</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-300 ease-linear" style={{ width: `${((step + 1) / 3) * 100}%` }} />
    </div>
  );
};

export default IdentificationDemo;