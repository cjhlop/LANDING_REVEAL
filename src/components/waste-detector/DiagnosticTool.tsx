"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Zap, 
  Loader2, 
  TrendingDown, 
  AlertCircle, 
  Lock, 
  ArrowRight,
  CheckCircle2,
  DollarSign,
  BarChart3
} from "lucide-react";
import { showSuccess } from "@/utils/toast";

type Step = "budget" | "details" | "analyzing" | "results";

const ANALYSIS_MESSAGES = [
  "Analyzing LinkedIn ad benchmarks...",
  "Comparing campaigns with similar spend...",
  "Detecting audience inefficiencies...",
  "Calculating optimization potential...",
  "Finalizing waste report..."
];

const DiagnosticTool = () => {
  const [step, setStep] = React.useState<Step>("budget");
  const [progress, setProgress] = React.useState(0);
  const [msgIndex, setMsgIndex] = React.useState(0);
  
  const [data, setData] = React.useState({
    budget: "",
    cpl: "",
    convRate: "",
    industry: ""
  });

  // Handle Analysis Stage
  React.useEffect(() => {
    if (step === "analyzing") {
      const duration = 4000;
      const interval = 50;
      const steps = duration / interval;
      let current = 0;

      const timer = setInterval(() => {
        current++;
        const p = (current / steps) * 100;
        setProgress(p);
        
        // Update messages
        const msgStep = 100 / ANALYSIS_MESSAGES.length;
        setMsgIndex(Math.min(Math.floor(p / msgStep), ANALYSIS_MESSAGES.length - 1));

        if (current >= steps) {
          clearInterval(timer);
          setStep("results");
        }
      }, interval);
      return () => clearInterval(timer);
    }
  }, [step]);

  const handleNext = () => {
    if (step === "budget") setStep("details");
    else if (step === "details") setStep("analyzing");
  };

  const wastedAmount = Number(data.budget || 0) * 0.28; // Mock calculation

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="magic-border" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
        <div className="bg-white rounded-[inherit] p-8 md:p-12 shadow-2xl border border-slate-100 min-h-[400px] flex flex-col justify-center">
          
          {/* STEP 1: BUDGET */}
          {step === "budget" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-lg font-bold text-slate-900">Monthly LinkedIn Ads budget</Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <Input 
                    id="budget"
                    type="number"
                    placeholder="5000"
                    className="h-16 pl-8 text-2xl font-bold border-2 focus:border-blue-500 transition-all"
                    value={data.budget}
                    onChange={(e) => setData({...data, budget: e.target.value})}
                  />
                </div>
              </div>
              <Button 
                size="hero" 
                className="w-full group" 
                disabled={!data.budget}
                onClick={handleNext}
              >
                Analyze my campaigns
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-center text-xs text-slate-400 font-medium uppercase tracking-widest">
                Benchmarks built from thousands of LinkedIn campaigns
              </p>
            </div>
          )}

          {/* STEP 2: PROGRESSIVE INPUTS */}
          {step === "details" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-slate-700">Avg. Cost Per Lead (CPL)</Label>
                  <Input 
                    type="number" 
                    placeholder="80" 
                    className="h-12"
                    value={data.cpl}
                    onChange={(e) => setData({...data, cpl: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-slate-700">Lead to Opp Conv. %</Label>
                  <Input 
                    type="number" 
                    placeholder="15" 
                    className="h-12"
                    value={data.convRate}
                    onChange={(e) => setData({...data, convRate: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-bold text-slate-700">Industry</Label>
                <Select onValueChange={(v) => setData({...data, industry: v})}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saas">SaaS / Software</SelectItem>
                    <SelectItem value="finance">Financial Services</SelectItem>
                    <SelectItem value="it">IT Services</SelectItem>
                    <SelectItem value="agency">Marketing Agency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                size="hero" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={handleNext}
                disabled={!data.industry}
              >
                Run waste analysis
              </Button>
            </div>
          )}

          {/* STEP 3: ANALYZING */}
          {step === "analyzing" && (
            <div className="flex flex-col items-center justify-center space-y-8 py-12">
              <div className="relative">
                <Loader2 className="h-20 w-20 text-blue-600 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-blue-400 animate-pulse" />
                </div>
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-slate-900">{ANALYSIS_MESSAGES[msgIndex]}</h3>
                <div className="w-64 h-2 bg-slate-100 rounded-full overflow-hidden mx-auto">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: RESULTS */}
          {step === "results" && (
            <div className="space-y-8 animate-in zoom-in-95 duration-700">
              <div className="text-center space-y-2">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Estimated monthly wasted budget</p>
                <div className="text-6xl font-black text-red-600 tracking-tight">
                  ${wastedAmount.toLocaleString()}
                </div>
                <p className="text-slate-500 text-sm">Based on {data.industry} industry benchmarks</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Efficiency Score</div>
                  <div className="text-3xl font-black text-orange-500">47<span className="text-lg text-slate-300">/100</span></div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Potential ROI Lift</div>
                  <div className="text-3xl font-black text-emerald-500">+34%</div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Inefficiency signals detected:</p>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm font-medium">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  Audience overlap across 3+ campaigns
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm font-medium">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  CPL is 22% above industry average
                </div>
              </div>

              {/* BLURRED INSIGHTS */}
              <div className="relative">
                <div className="space-y-3 opacity-20 blur-sm select-none pointer-events-none">
                  <div className="h-12 bg-slate-100 rounded-xl" />
                  <div className="h-12 bg-slate-100 rounded-xl" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
                    <Lock className="h-3 w-3 text-slate-400" />
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">4 More Insights Locked</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  size="hero" 
                  className="w-full shadow-xl shadow-blue-500/20"
                  onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
                >
                  Unlock Full Optimization Report
                </Button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  Free account required. No credit card needed.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default DiagnosticTool;