"use client";

import React, { useState, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import DynamicShadow from "@/components/DynamicShadow";
import SectionBadge from "@/components/SectionBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { 
  Search, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2,
  Database,
  BarChart3
} from "lucide-react";

const ATTRIBUTION_STACK = [
  "LinkedIn Conversion Tracking",
  "HubSpot Attribution",
  "Salesforce Attribution",
  "GA4 Attribution",
  "Form-fill tracking only",
  "Offline conversion tracking",
  "Unsure / Not configured"
];

const AttributionGapDetector = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    spend: "",
    dealSize: "",
    stack: [] as string[],
    useLeadGenForms: false
  });

  const toggleStackItem = (item: string) => {
    setFormData(prev => ({
      ...prev,
      stack: prev.stack.includes(item) 
        ? prev.stack.filter(i => i !== item)
        : [...prev.stack, item]
    }));
  };

  const handleStartAnalysis = () => {
    // Logic for moving to Screen 2 will go here
    console.log("Starting analysis with:", formData);
    setStep(2);
  };

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen overflow-x-hidden">
        {/* HERO / TOOL ENTRY */}
        <section className="relative w-full pt-32 pb-24 px-6 overflow-hidden">
          <DynamicShadow variant="hero" />
          
          <div className="max-w-[1216px] mx-auto relative z-10">
            {/* Header Area */}
            <div className="text-center mb-12 space-y-6">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <SectionBadge icon={Search} text="Pipeline Visibility Audit" />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                Detect Your <span className="text-blue-600">Attribution Gap</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                Discover how much of your LinkedIn Ads impact is invisible to your current tracking setup.
              </p>
            </div>

            {/* Diagnostic Card */}
            <div className="max-w-3xl mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-300">
              <div className="magic-border" style={{ "--magic-radius": "2rem" } as React.CSSProperties}>
                <div className="bg-white rounded-[inherit] p-8 md:p-12 shadow-2xl border border-slate-100">
                  <div className="space-y-10">
                    
                    {/* Input Group 1 & 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="spend" className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Monthly LinkedIn Spend
                        </Label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                          <Input 
                            id="spend"
                            type="number"
                            placeholder="e.g. 10,000"
                            className="h-14 pl-8 bg-gray-50 border-gray-200 text-lg font-semibold focus:ring-blue-500"
                            value={formData.spend}
                            onChange={(e) => setFormData({...formData, spend: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="dealSize" className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Avg. Deal Size (ACV)
                        </Label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                          <Input 
                            id="dealSize"
                            type="number"
                            placeholder="e.g. 25,000"
                            className="h-14 pl-8 bg-gray-50 border-gray-200 text-lg font-semibold focus:ring-blue-500"
                            value={formData.dealSize}
                            onChange={(e) => setFormData({...formData, dealSize: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Input Group 3: Stack Selection */}
                    <div className="space-y-4">
                      <Label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Current Attribution Stack
                      </Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {ATTRIBUTION_STACK.map((item) => (
                          <button
                            key={item}
                            onClick={() => toggleStackItem(item)}
                            className={cn(
                              "flex items-center gap-3 p-4 rounded-xl border text-left text-sm transition-all duration-200",
                              formData.stack.includes(item)
                                ? "bg-blue-50 border-blue-500 text-blue-700 shadow-sm"
                                : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                            )}
                          >
                            <div className={cn(
                              "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                              formData.stack.includes(item) ? "bg-blue-600 border-blue-600" : "bg-white border-gray-300"
                            )}>
                              {formData.stack.includes(item) && <CheckCircle2 className="w-4 h-4 text-white" />}
                            </div>
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Toggle Option */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="space-y-0.5">
                        <Label className="text-base font-bold text-gray-900">LinkedIn Lead Gen Forms</Label>
                        <p className="text-sm text-gray-500">We use native LinkedIn forms for lead capture</p>
                      </div>
                      <Switch 
                        checked={formData.useLeadGenForms}
                        onCheckedChange={(val) => setFormData({...formData, useLeadGenForms: val})}
                      />
                    </div>

                    {/* CTA */}
                    <Button 
                      onClick={handleStartAnalysis}
                      disabled={!formData.spend || !formData.dealSize || formData.stack.length === 0}
                      className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-500/20 group transition-all"
                    >
                      Detect My Attribution Gap
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400 font-medium animate-in fade-in duration-1000 delay-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                No ad account access required
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-400" />
                Built for LinkedIn Ads operators
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-orange-400" />
                Data-driven diagnostic
              </div>
            </div>
          </div>
        </section>
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default AttributionGapDetector;