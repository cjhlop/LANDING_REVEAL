"use client";

import React, { useState, Suspense, useEffect, useMemo } from "react";
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
  Loader2,
  TrendingUp,
  AlertCircle,
  RefreshCw,
  EyeOff,
  DollarSign,
  Users
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
  const [step, setStep] = useState<"input" | "analyzing" | "result">("input");
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
    setStep("analyzing");
    setTimeout(() => {
      setStep("result");
    }, 2500);
  };

  // Calculation Logic for Screen 2
  const results = useMemo(() => {
    let visibilityScore = 85; // Base score
    
    // Deductions based on stack
    if (formData.stack.includes("form")) visibilityScore -= 25;
    if (formData.stack.includes("unsure")) visibilityScore -= 15;
    if (!formData.stack.includes("offline")) visibilityScore -= 10;
    
    // Deductions based on sales cycle
    if (formData.salesCycle === "3-6") visibilityScore -= 10;
    if (formData.salesCycle === "6+") visibilityScore -= 20;
    
    // Lead gen forms actually help visibility slightly
    if (formData.useLeadGenForms) visibilityScore += 5;

    const finalScore = Math.max(Math.min(visibilityScore, 95), 35);
    const gapPercentage = 100 - finalScore;
    
    // Estimate hidden pipeline: (Spend * 5 (estimated ROAS) * Gap%)
    const hiddenPipeline = (formData.spend * 12 * 5) * (gapPercentage / 100);

    return {
      score: finalScore,
      gap: gapPercentage,
      hiddenPipeline: hiddenPipeline
    };
  }, [formData]);

  return (
    <TooltipProvider>
      <Navbar />
      <main className="bg-white min-h-screen overflow-x-hidden">
        <section className="relative w-full pt-28 pb-24 px-6 overflow-hidden">
          <DynamicShadow variant="hero" />
          
          <div className="max-w-[1216px] mx-auto relative z-10">
            
            {/* --- SCREEN 1: INPUT --- */}
            {step === "input" && (
              <>
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

                <div className="max-w-3xl mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-300">
                  <div className="magic-border" style={{ "--magic-radius": "2rem" } as React.CSSProperties}>
                    <div className="bg-white rounded-[inherit] p-10 md:p-14 shadow-2xl border border-slate-100">
                      <div className="flex items-center gap-2 mb-10">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Step 1 · Tracking Setup</span>
                      </div>

                      <div className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-4">
                            <Label htmlFor="spend" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Monthly LinkedIn Spend</Label>
                            <div className="space-y-4">
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
                              <p className="text-[11px] text-gray-400 font-medium">Approximate values are fine.</p>
                              <div className="space-y-2">
                                <Slider 
                                  value={[formData.spend]} 
                                  min={1000} 
                                  max={200000} 
                                  step={1000}
                                  onValueChange={([val]) => setFormData({...formData, spend: val})}
                                />
                                <div className="flex justify-between text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
                                  <span>$1k</span><span>$10k</span><span>$50k</span><span>$100k</span><span>$200k</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <Label htmlFor="dealSize" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Average Deal Size (ACV)</Label>
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
                            <p className="text-[11px] text-gray-400 font-medium">Helps estimate potential hidden pipeline.</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Average Sales Cycle</Label>
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
                          <p className="text-[11px] text-gray-400 font-medium">Longer sales cycles increase attribution blind spots.</p>
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-1">
                            <Label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Current Attribution Stack</Label>
                            <p className="text-xs text-gray-400">Select what currently tracks your LinkedIn conversions.</p>
                          </div>
                          
                          <div className="space-y-6">
                            <div className="space-y-3">
                              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tracking Tools</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {TRACKING_TOOLS.map((item) => (
                                  <StackButton key={item.id} item={item} active={formData.stack.includes(item.id)} onClick={() => toggleStackItem(item.id)} />
                                ))}
                              </div>
                            </div>
                            <div className="space-y-3">
                              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tracking Depth</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {TRACKING_DEPTH.map((item) => (
                                  <StackButton key={item.id} item={item} active={formData.stack.includes(item.id)} onClick={() => toggleStackItem(item.id)} />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <button 
                          onClick={() => setFormData({...formData, useLeadGenForms: !formData.useLeadGenForms})}
                          className="w-full flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors text-left"
                        >
                          <div className="space-y-1">
                            <Label className="text-base font-bold text-gray-900 cursor-pointer">Do you run LinkedIn Lead Gen Form campaigns?</Label>
                            <p className="text-xs text-gray-500">This affects how much attribution visibility you currently have.</p>
                          </div>
                          <Switch checked={formData.useLeadGenForms} />
                        </button>

                        <div className="space-y-4">
                          <Button 
                            onClick={handleStartAnalysis}
                            disabled={formData.stack.length === 0}
                            className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-500/30 group transition-all"
                          >
                            Analyze My Attribution Gap
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <p className="text-center text-xs font-medium text-gray-400">
                            You’ll see an estimate of how much LinkedIn pipeline your current tracking may be missing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* --- ANALYZING STATE --- */}
            {step === "analyzing" && (
              <div className="max-w-3xl mx-auto py-20 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-500">
                <div className="relative">
                  <Loader2 className="h-20 w-20 text-blue-600 animate-spin stroke-[1.5px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-blue-400 animate-pulse" />
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Analyzing Attribution Visibility…</h2>
                  <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Calculating pipeline gap based on {formData.salesCycle} month cycle</p>
                </div>
                <div className="w-full max-w-md h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 animate-[progress_2.5s_ease-in-out]" />
                </div>
              </div>
            )}

            {/* --- SCREEN 2: RESULT --- */}
            {step === "result" && (
              <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="text-center mb-12 space-y-4">
                  <SectionBadge icon={BarChart3} text="Analysis Complete" />
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Your LinkedIn Attribution Visibility</h1>
                  <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    Based on your inputs, this is how much LinkedIn impact your tracking likely captures.
                  </p>
                </div>

                <div className="magic-border" style={{ "--magic-radius": "2.5rem" } as React.CSSProperties}>
                  <div className="bg-white rounded-[inherit] p-10 md:p-16 shadow-2xl border border-slate-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      
                      {/* Left: Score & Gauge */}
                      <div className="space-y-10">
                        <div className="space-y-2">
                          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Visibility Score</h3>
                          <div className="flex items-baseline gap-3">
                            <span className="text-7xl font-black text-gray-900 tracking-tighter">{results.score}%</span>
                            <span className={cn(
                              "px-3 py-1 rounded-full text-xs font-bold border",
                              results.score > 70 ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-orange-50 text-orange-700 border-orange-100"
                            )}>
                              {results.gap}% of LinkedIn impact is likely untracked
                            </span>
                          </div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated tracking coverage</p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                            <span className="text-blue-600">Tracked: {results.score}%</span>
                            <span className="text-slate-300">Untracked: {results.gap}%</span>
                          </div>
                          <div className="h-6 w-full bg-slate-100 rounded-full overflow-hidden flex">
                            <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${results.score}%` }} />
                            <div className="h-full bg-slate-200 transition-all duration-1000" style={{ width: `${results.gap}%` }} />
                          </div>
                        </div>

                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                          <div className="flex items-center gap-2 text-slate-500">
                            <EyeOff className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">Potential LinkedIn Pipeline Missing From Your Reports</span>
                          </div>
                          <div className="text-[2.75rem] font-black text-gray-900 leading-none">
                            ${Math.round(results.hiddenPipeline).toLocaleString()} <span className="text-lg font-medium text-slate-400">/ year</span>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed pt-2">
                            This represents the estimated value of high-intent accounts engaging with your ads that never trigger a tracked conversion.
                          </p>
                        </div>
                      </div>

                      {/* Right: Insights */}
                      <div className="space-y-8">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-slate-100 pb-4">Key Diagnostic Insights</h4>
                        <div className="space-y-8">
                          <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                              <TrendingUp className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 text-sm mb-1">Long sales cycles increase attribution loss</p>
                              <p className="text-xs text-gray-500 leading-relaxed">LinkedIn influence often happens months before conversion, exceeding standard tracking windows.</p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-600">
                              <Users className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 text-sm mb-1">Anonymous buyers are invisible</p>
                              <p className="text-xs text-gray-500 leading-relaxed">Most LinkedIn visitors never submit forms, meaning their influence is not captured.</p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600">
                              <Zap className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 text-sm mb-1">Last-click attribution distorts ROI</p>
                              <p className="text-xs text-gray-500 leading-relaxed">LinkedIn influence frequently appears as “organic” or “direct” traffic in analytics.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col items-center justify-center gap-6">
                      <div className="text-center space-y-4">
                        <p className="text-sm font-medium text-slate-600">DemandSense identifies these hidden interactions automatically.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                          <Button 
                            size="hero" 
                            className="px-10 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20"
                            onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
                          >
                            Recover This Lost Visibility
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="hero" 
                            className="px-10 border-slate-200 text-slate-600"
                            onClick={() => setStep("input")}
                          >
                            <RefreshCw className="mr-2 w-4 h-4" />
                            Run Another Analysis
                          </Button>
                        </div>
                      </div>
                      <button 
                        onClick={() => setStep("input")}
                        className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors"
                      >
                        Adjust inputs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Trust Signals */}
            <div className="mt-16 flex flex-wrap justify-center gap-10 text-sm text-gray-400 font-medium animate-in fade-in duration-1000 delay-500">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> No ad account access required</div>
              <div className="flex items-center gap-2"><Database className="w-4 h-4 text-blue-400" /> Built for LinkedIn Ads operators</div>
              <div className="flex items-center gap-2"><BarChart3 className="w-4 h-4 text-orange-400" /> Data-driven diagnostic</div>
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