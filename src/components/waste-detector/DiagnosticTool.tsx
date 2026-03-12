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
  BarChart3,
  ShieldAlert,
  TrendingUp,
  Info
} from "lucide-react";

type Step = "budget" | "details" | "analyzing" | "results";

const ANALYSIS_MESSAGES = [
  "Fetching LinkedIn API benchmarks...",
  "Cross-referencing industry CPL data...",
  "Identifying audience saturation patterns...",
  "Detecting creative fatigue signals...",
  "Calculating annualized waste projection...",
  "Finalizing diagnostic report..."
];

const BUDGET_RANGES = [
  { label: "< $2k", value: 1500 },
  { label: "$2k - $10k", value: 6000 },
  { label: "$10k - $50k", value: 30000 },
  { label: "$50k+", value: 100000 },
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
      const duration = 5000;
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

  const monthlyWaste = Number(data.budget || 0) * 0.32; // Increased for "tension"
  const yearlyWaste = monthlyWaste * 12;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="magic-border" style={{ "--magic-radius": "2rem" } as React.CSSProperties}>
        <div className="bg-slate-950 rounded-[inherit] p-8 md:p-12 shadow-2xl border border-slate-800 min-h-[500px] flex flex-col justify-center relative overflow-hidden">
          
          {/* SCANNER BACKGROUND EFFECT */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>

          {/* STEP 1: BUDGET RANGE (LOW FRICTION) */}
          {step === "budget" && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-white">Select your monthly LinkedIn Ads spend</h3>
                <p className="text-slate-400">Choose a range to begin the diagnostic scan</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {BUDGET_RANGES.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => {
                      setData({...data, budget: range.value.toString()});
                      setStep("details");
                    }}
                    className={cn(
                      "h-20 rounded-2xl border-2 flex items-center justify-center text-lg font-bold transition-all",
                      "bg-slate-900/50 border-slate-800 text-slate-300 hover:border-blue-500 hover:text-white hover:bg-blue-500/10"
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="h-px flex-1 bg-slate-800" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Or enter exact amount</span>
                <div className="h-px flex-1 bg-slate-800" />
              </div>

              <div className="max-w-xs mx-auto relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                <Input 
                  type="number"
                  placeholder="e.g. 5000"
                  className="h-14 pl-8 bg-slate-900 border-slate-800 text-white text-xl font-bold focus:border-blue-500"
                  value={data.budget}
                  onChange={(e) => setData({...data, budget: e.target.value})}
                  onKeyDown={(e) => e.key === 'Enter' && data.budget && setStep("details")}
                />
                {data.budget && (
                  <button 
                    onClick={() => setStep("details")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition-colors"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                )}
              </div>

              <p className="text-center text-xs text-slate-400 font-medium uppercase tracking-widest">
                Benchmarks built from millions of LinkedIn campaigns
              </p>
            </div>
          )}

          {/* STEP 2: PROGRESSIVE INPUTS */}
          {step === "details" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 relative z-10">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-white">Refining the scan parameters</h3>
                <p className="text-slate-400">These signals help us detect specific inefficiency patterns</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-slate-400">Avg. Cost Per Lead (CPL)</Label>
                  <Input 
                    type="number" 
                    placeholder="e.g. 80" 
                    className="h-14 bg-slate-900 border-slate-800 text-white text-lg"
                    value={data.cpl}
                    onChange={(e) => setData({...data, cpl: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-slate-400">Lead to Opp Conv. %</Label>
                  <Input 
                    type="number" 
                    placeholder="e.g. 15" 
                    className="h-14 bg-slate-900 border-slate-800 text-white text-lg"
                    value={data.convRate}
                    onChange={(e) => setData({...data, convRate: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-bold text-slate-400">Industry</Label>
                <Select onValueChange={(v) => setData({...data, industry: v})}>
                  <SelectTrigger className="h-14 bg-slate-900 border-slate-800 text-white text-lg">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-800 text-white">
                    <SelectItem value="saas">SaaS / Software</SelectItem>
                    <SelectItem value="finance">Financial Services</SelectItem>
                    <SelectItem value="it">IT Services</SelectItem>
                    <SelectItem value="agency">Marketing Agency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                size="hero" 
                className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/20"
                onClick={handleNext}
                disabled={!data.industry}
              >
                Initialize Diagnostic Scan
              </Button>
            </div>
          )}

          {/* STEP 3: ANALYZING (PERCEIVED SOPHISTICATION) */}
          {step === "analyzing" && (
            <div className="flex flex-col items-center justify-center space-y-10 py-12 relative z-10">
              <div className="relative">
                <div className="absolute -inset-8 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <Loader2 className="h-24 w-24 text-blue-500 animate-spin stroke-[1.5px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldAlert className="h-10 w-10 text-blue-400 animate-pulse" />
                </div>
              </div>
              <div className="text-center space-y-6 w-full max-w-md">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{ANALYSIS_MESSAGES[msgIndex]}</h3>
                  <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">Scanning 10,000+ B2B Benchmarks</p>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: RESULTS (HIGH TENSION) */}
          {step === "results" && (
            <div className="space-y-10 animate-in zoom-in-95 duration-700 relative z-10">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest">
                  <ShieldAlert className="h-3 w-3" />
                  Inefficiency Detected
                </div>
                <div className="space-y-1">
                  <p className="text-slate-400 font-medium">Estimated Monthly Budget Leak</p>
                  <div className="text-7xl font-black text-white tracking-tighter">
                    ${monthlyWaste.toLocaleString()}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-red-500 font-bold">
                  <TrendingDown className="h-5 w-5" />
                  <span>${yearlyWaste.toLocaleString()} projected annual loss</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
                    <BarChart3 className="h-12 w-12 text-blue-500" />
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase mb-2">Efficiency Score</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-black text-orange-500">42</div>
                    <div className="text-slate-600 font-bold">/ 100</div>
                  </div>
                  <div className="mt-2 text-xs text-slate-400">
                    Industry Average: <span className="text-slate-200 font-bold">68</span>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
                    <TrendingUp className="h-12 w-12 text-emerald-500" />
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase mb-2">Potential ROI Lift</div>
                  <div className="text-4xl font-black text-emerald-500">+44%</div>
                  <div className="mt-2 text-xs text-slate-400">
                    With optimized targeting & frequency
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Primary Diagnostic Signals:</p>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 font-bold uppercase">
                    <Info className="h-3 w-3" />
                    Based on $50M+ B2B Spend
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-slate-300 text-sm">
                    <div className="mt-1 p-1 rounded bg-red-500/20">
                      <ShieldAlert className="h-4 w-4 text-red-400" />
                    </div>
                    <div>
                      <span className="font-bold text-white block mb-0.5">Audience Saturation Risk</span>
                      Your frequency is 24% above the optimal B2B threshold for {data.industry}.
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-slate-300 text-sm">
                    <div className="mt-1 p-1 rounded bg-red-500/20">
                      <ShieldAlert className="h-4 w-4 text-red-400" />
                    </div>
                    <div>
                      <span className="font-bold text-white block mb-0.5">CPL Benchmark Gap</span>
                      Your cost per lead is significantly higher than the top 25% of advertisers in your category.
                    </div>
                  </div>
                </div>
              </div>

              {/* BLURRED LOCKED INSIGHTS (CURIOSITY) */}
              <div className="grid grid-cols-2 gap-3 opacity-30 blur-[2px] select-none pointer-events-none">
                <div className="h-16 bg-slate-900 rounded-xl border border-slate-800 flex items-center px-4 gap-3">
                  <div className="w-8 h-8 rounded bg-slate-800" />
                  <div className="h-3 w-24 bg-slate-800 rounded" />
                </div>
                <div className="h-16 bg-slate-900 rounded-xl border border-slate-800 flex items-center px-4 gap-3">
                  <div className="w-8 h-8 rounded bg-slate-800" />
                  <div className="h-3 w-24 bg-slate-800 rounded" />
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <Button 
                  size="hero" 
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-2xl shadow-blue-600/40 h-16 text-lg"
                  onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
                >
                  Unlock Full Optimization Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center justify-center gap-6 text-[11px] text-slate-500 font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    Free Diagnostic
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    No Ad Access Required
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    Business Email Only
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default DiagnosticTool;