import React from "react";
import { Check, X, Minus, ArrowRight } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const VisitorComparisonTable = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <SectionBadge icon={BarChart3} text="Why DemandSense" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight">
            What Makes <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">DemandSense Different</span> From Other Website Visitor Tracking Tools
          </h2>
          <p className="text-gray-600 text-lg">
            See why growth teams choose DemandSense for accurate B2B identification and intent data.
          </p>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="w-full min-w-[900px] border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
            <thead>
              <tr className="bg-[#0F2043] text-white">
                <th className="p-6 text-left font-semibold w-1/4">Feature</th>
                <th className="p-6 text-center font-bold text-blue-400 w-1/4 text-lg border-r border-white/10">DemandSense</th>
                <th className="p-6 text-center font-semibold text-gray-300 w-1/4 border-r border-white/10">Standard Analytics</th>
                <th className="p-6 text-center font-semibold text-gray-300 w-1/4">Other Tools</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { feature: "Company Identification", us: true, standard: false, other: true },
                { feature: "Individual Identification", us: true, standard: false, other: false },
                { feature: "Real-Time Intent Scoring", us: true, standard: false, other: "limited" },
                { feature: "CRM Integration (2-way)", us: true, standard: "limited", other: "limited" },
                { feature: "Individual Contact Reveal", us: true, standard: false, other: false },
                { feature: "B2B Filter (ISP Removal)", us: true, standard: false, other: true },
                { feature: "Account Buying Stage", us: true, standard: false, other: "limited" },
                { feature: "GDPR Compliant Tracking", us: true, standard: true, other: true },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-6 text-gray-900 font-medium">{row.feature}</td>
                  <td className="p-6 text-center bg-blue-50/30 border-r border-gray-100">
                    <div className="flex justify-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Check className="h-5 w-5" />
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center border-r border-gray-100">
                    <div className="flex justify-center">
                      {row.standard === true ? (
                        <Check className="h-5 w-5 text-gray-400" />
                      ) : row.standard === "limited" ? (
                        <span className="text-sm text-gray-400 font-medium">Limited</span>
                      ) : (
                        <X className="h-5 w-5 text-gray-300" />
                      )}
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex justify-center">
                      {row.other === true ? (
                        <Check className="h-5 w-5 text-gray-400" />
                      ) : row.other === "limited" ? (
                        <span className="text-sm text-gray-400 font-medium">Limited</span>
                      ) : (
                        <X className="h-5 w-5 text-gray-300" />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="h-12 px-8 rounded-full bg-[#3875F6] hover:bg-[#1A3F89] text-white font-medium shadow-lg hover:shadow-blue-500/20 transition-all group"
          >
            Compare Plans
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisitorComparisonTable;