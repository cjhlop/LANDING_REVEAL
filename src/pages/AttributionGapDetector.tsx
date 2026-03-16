"use client";

import React, { useState, Suspense, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import DynamicShadow from "@/components/DynamicShadow";
import SectionBadge from "@/components/SectionBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { 
  Search, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2,
  Database,
  BarChart3,
  Info,
  Loader2
} from "lucide-react";

const TRACKING_TOOLS = [
  { id: "li", label: "LinkedIn Conversion Tracking", tip: "LinkedIn’s native conversion tracking installed on your website." },
  { id: "ga4", label: "GA4 Attribution", tip: "Google Analytics 4 event and conversion tracking." },
  { id: "hs", label: "HubSpot Attribution", tip: "HubSpot's built-in multi-touch attribution reporting." },
  { id: "sf", label: "Salesforce Attribution", tip: "Salesforce Campaign Influence or standard attribution models." },
];

const TRACKING_DEPTH = [
  { id: "offline", label: "Offline Conversion Tracking", tip: "Syncing CRM deal stages back to LinkedIn Ads." },
  { id: "form", label: "Form-fill tracking only", tip: "Only tracking users who complete a lead form." },
  { id: "unsure", label: "Unsure / Not fully configured", tip: "Tracking is partially set up or results are inconsistent." },
];

const AttributionGapDetector = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [formData, setFormData] = useState({
    spend: 10000,
    dealSize: 25000,
    salesCycle: "1-3",
    stack: [] as string[],
    useLeadGenForms: false
  });

  const toggleStackItem = (id: string) => {
    setFormData(prev => ({
      ...prev,
      stack: prev.stack.includes(id) 
        ? prev.stack.filter(i => i !== id)
        : [...prev.stack, id]
    }));
  };

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate analysis time
    setTimeout(() => {
      setIsAnalyzing(false);
      // In a real app, we would navigate to Screen 2 here
    }, 2000);
  };

  return (
    <TooltipProvider>
      <Navbar />
      <main className="bg-white min-h-screen overflow-x-hidden">
        <section className="relative w-full pt-28 pb-24 px-6 overflow-hidden">
          <DynamicShadow variant="hero" />
          
          <div className="max-w-[1216px] mx-auto relative z-10">
            {/* Header Area - Slightly smaller to prioritize the tool */}
            <div className="text-center mb-10 space-y-4">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <SectionBadge icon={Search} text="Pipeline Visibility Audit" />
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                Detect Your <span className="text-blue-600">Attribution Gap</span>
              </h1>

              <p className="text-lg text-gray-500 max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                Discover how much of your LinkedIn Ads impact is invisible to your current tracking setup.
              </p>
            </div>

            {/* Diagnostic Card - More dominant */}
            <div className="max-w-3xl mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-300">
              <div className="magic-border" style={{ "--magic-radius": "2rem" } as React.CSSProperties}>
                <div className="bg-white rounded-[inherit] p-10 md:p-14 shadow-2xl border border-slate-100">
                  
                  {/* Step Indicator */}
                  <div className="flex items-center gap-2 mb-10">
                    <div className="px-2 py-1 rounded bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest">Step 1</div>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Tracking Setup</span>
                  </div>

                  <div className="space-y-12">
                    
                    {/* Spend & Deal Size */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <div className="flex justify-between items-end">
                          <Label htmlFor="spend" className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                            Monthly LinkedIn Spend
                          </Label>
                          <span className="text-xs text-gray-400">Approximate is fine</span>
                        </div>
                        <div className="space-y-6">
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                            <Input 
                              id="spend"
                              type="number"
                              className="h-14 pl-8 bg-gray-50 border-gray-200 text-lg font-semibold focus:ring-blue-500"
                              value={formData.spend}
                              onChange={(e) => setFormData({...formData, spend: Number(e.target.value)})}
                            />
                          </div>
                          <Slider 
                            value={[formData.spend]} 
                            min={1000} 
                            max={200000} 
                            step={1000}
                            onValueChange={([val]) => setFormData({...formData, spend: val})}
                            className="py-2"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Label htmlFor="dealSize" className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Average Deal Size (ACV)
                        </Label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                          <Input 
                            id="dealSize"
                            type="number"
                            className="h-14 pl-8 bg-gray-50 border-gray-200 text-lg font-semibold focus:ring-blue-500"
                            value={formData.dealSize}
                            onChange={(e) => setFormData({...formData, dealSize: Number(e.target.value)})}
                          />
                        </div>
                        <p className="text-[11px] text-gray-400">Used to calculate potential hidden pipeline value.</p>
                      </div>
                    </div>

                    {/* Sales Cycle */}
                    <div className="space-y-4">
                      <Label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Average Sales Cycle
                      </Label>
                      <Select value={formData.salesCycle} onValueChange={(v) => setFormData({...formData, salesCycle: v})}>
                        <SelectTrigger className="h-14 bg-gray-50 border-gray-200 text-base">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">Less than 30 days</SelectItem>
                          <SelectItem value="1-3">1–3 months</SelectItem>
                          <SelectItem value="3-6">3–6 months</SelectItem>
                          <SelectItem value="6+">6+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Attribution Stack */}
                    <div className="space-y-6">
                      <Label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Current Attribution Stack
                      </Label>
                      
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tracking Tools</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {TRACKING_TOOLS.map((item) => (
                              <StackButton 
                                key={item.id} 
                                item={item} 
                                active={formData.stack.includes(item.id)} 
                                onClick={() => toggleStackItem(item.id)} 
                              />
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tracking Depth</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {TRACKING_DEPTH.map((item) => (
                              <StackButton 
                                key={item.id} 
                                item={item} 
                                active={formData.stack.includes(item.id)} 
                                onClick={() => toggleStackItem(item.id)} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Lead Gen Toggle */}
                    <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="space-y-1">
                        <Label className="text-base font-bold text-gray-900">Do you run LinkedIn Lead Gen Form campaigns?</Label>
                        <p className="text-xs text-gray-500">This affects how much attribution visibility you currently have.</p>
                      </div>
                      <Switch 
                        checked={formData.useLeadGenForms}
                        onCheckedChange={(val) => setFormData({...formData, useLeadGenForms: val})}
                      />
                    </div>

                    {/* CTA Area */}
                    <div className="space-y-4">
                      <Button 
                        onClick={handleStartAnalysis}
                        disabled={isAnalyzing || formData.stack.length === 0}
                        className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-500/20 group transition-all relative overflow-hidden"
                      >
                        {isAnalyzing ? (
                          <span className="flex items-center gap-3">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Analyzing Attribution Visibility…
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Analyze My Attribution Gap
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        )}
                        {isAnalyzing && (
                          <div className="absolute bottom-0 left-0 h-1 bg-blue-400 animate-[progress_2s_ease-in-out]" style={{ width: '100%' }} />
                        )}
                      </Button>
                      <p className="text-center text-sm text-gray-500">
                        You’ll see an estimate of how much LinkedIn pipeline your current tracking may be missing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mt-16 flex flex-wrap justify-center gap-10 text-sm text-gray-400 font-medium animate-in fade-in duration-1000 delay-500">
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

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </TooltipProvider>
  );
};

const StackButton = ({ item, active, onClick }: { item: any, active: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center justify-between p-4 rounded-xl border text-left text-sm transition-all duration-200 group",
      active
        ? "bg-blue-50 border-blue-500 text-blue-700 shadow-sm"
        : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
    )}
  >
    <div className="flex items-center gap-3">
      <div className={cn(
        "w-5 h-5 rounded border flex items-center justify-center transition-colors",
        active ? "bg-blue-600 border-blue-600" : "bg-white border-gray-300"
      )}>
        {active && <CheckCircle2 className="w-4 h-4 text-white" />}
      </div>
      {item.label}
    </div>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="p-1 rounded-full hover:bg-gray-100 text-gray-300 hover:text-gray-500 transition-colors">
          <Info className="w-3.5 h-3.5" />
        </div>
      </TooltipTrigger>
      <TooltipContent className="max-w-[200px] text-xs">
        {item.tip}
      </TooltipContent>
    </Tooltip>
  </button>
);

export default AttributionGapDetector;