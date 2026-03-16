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
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  Target, 
  Zap,
  Info
} from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface BenchmarkInputScreenProps {
  onCompare: (data: any) => void;
}

const BenchmarkInputScreen: React.FC<BenchmarkInputScreenProps> = ({ onCompare }) => {
  const [formData, setFormData] = React.useState({
    industry: "",
    companySize: "",
    cpc: "",
    ctr: "",
    cpl: "",
    spend: ""
  });

  const isReady = formData.industry && formData.cpc && formData.ctr;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isReady) {
      onCompare(formData);
    }
  };

  return (
    <section className="w-full bg-white py-20 lg:py-32 px-6">
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT SIDE: Value Proposition */}
        <div className="lg:col-span-6 space-y-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <SectionBadge icon={BarChart3} text="Performance Diagnostic" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Are Your LinkedIn Ads Performing <span className="text-blue-600">Above or Below Market?</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Instantly compare your campaign performance with industry benchmarks used by high-performing B2B teams.
          </p>

          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {[
              "See how your CPC, CTR, and CPL compare to your industry",
              "Understand what “good performance” actually looks like",
              "Identify where your campaigns are underperforming",
              "Get practical suggestions for improvement"
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 animate-in fade-in duration-700 delay-500">
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <Info className="size-4 text-blue-400" />
              Benchmarks based on aggregated LinkedIn campaign performance across B2B SaaS advertisers.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Input Tool */}
        <div className="lg:col-span-6 animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <div className="magic-border" style={{ "--magic-radius": "2rem" } as React.CSSProperties}>
            <div className="bg-white rounded-[inherit] p-8 md:p-10 shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Check Your Performance</h2>
                <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
                  Free Tool
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Industry</Label>
                    <Select onValueChange={(v) => setFormData({...formData, industry: v})}>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="saas">SaaS / Software</SelectItem>
                        <SelectItem value="finance">Financial Services</SelectItem>
                        <SelectItem value="it">IT Services</SelectItem>
                        <SelectItem value="agency">Marketing Agency</SelectItem>
                        <SelectItem value="other">Other B2B</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company Size (Optional)</Label>
                    <Select onValueChange={(v) => setFormData({...formData, companySize: v})}>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-1000">201-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Average CPC ($)</Label>
                    <Input 
                      type="number" 
                      step="0.01"
                      placeholder="e.g. 8.50" 
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.cpc}
                      onChange={(e) => setFormData({...formData, cpc: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Average CTR (%)</Label>
                    <Input 
                      type="number" 
                      step="0.01"
                      placeholder="e.g. 0.45" 
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.ctr}
                      onChange={(e) => setFormData({...formData, ctr: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Average CPL (Optional)</Label>
                    <Input 
                      type="number" 
                      placeholder="e.g. 120" 
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.cpl}
                      onChange={(e) => setFormData({...formData, cpl: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Monthly Spend (Optional)</Label>
                    <Input 
                      type="number" 
                      placeholder="e.g. 5000" 
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.spend}
                      onChange={(e) => setFormData({...formData, spend: e.target.value})}
                    />
                  </div>
                </div>

                <div className="pt-4 space-y-4">
                  <Button 
                    type="submit"
                    disabled={!isReady}
                    className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl shadow-xl shadow-blue-500/20 group transition-all"
                  >
                    Compare My Performance
                    <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-center text-xs font-medium text-gray-400">
                    Takes 10 seconds. No signup required.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenchmarkInputScreen;