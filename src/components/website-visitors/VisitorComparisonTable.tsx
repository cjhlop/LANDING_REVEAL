import React from "react";
import { Check, X, Minus } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { BarChart3 } from "lucide-react";

const VisitorComparisonTable = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <SectionBadge icon={BarChart3} text="Why DemandSense" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2043] mb-6">
            What Makes DemandSense Different From Other Website Visitor Tracking Tools
          </h2>
          <p className="text-gray-600 text-lg">
            See why growth teams choose DemandSense for accurate B2B identification and intent data.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
            <thead>
              <tr className="bg-[#0F2043] text-white">
                <th className="p-6 text-left font-semibold w-1/3">Feature</th>
                <th className="p-6 text-center font-bold text-blue-400 w-1/3 text-lg">DemandSense</th>
                <th className="p-6 text-center font-semibold text-gray-400 w-1/3">Standard Analytics</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { feature: "Company Identification", us: true, them: false },
                { feature: "Real-Time Intent Scoring", us: true, them: false },
                { feature: "CRM Integration (2-way)", us: true, them: "limited" },
                { feature: "Individual Contact Reveal", us: true, them: false },
                { feature: "B2B Filter (ISP Removal)", us: true, them: false },
                { feature: "Account Buying Stage", us: true, them: false },
                { feature: "GDPR Compliant Tracking", us: true, them: true },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-6 text-gray-900 font-medium">{row.feature}</td>
                  <td className="p-6 text-center bg-blue-50/30">
                    <div className="flex justify-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Check className="h-5 w-5" />
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex justify-center">
                      {row.them === true ? (
                        <Check className="h-5 w-5 text-gray-400" />
                      ) : row.them === "limited" ? (
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
      </div>
    </section>
  );
};

export default VisitorComparisonTable;