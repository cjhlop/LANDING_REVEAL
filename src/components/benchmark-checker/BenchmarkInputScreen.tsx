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
  Info,
  TrendingUp,
  TrendingDown,
  Linkedin,
  MousePointer2,
  DollarSign
} from "lucide-react";
import SectionBadge from "@/components/SectionBadge";

interface BenchmarkInputScreenProps {
  onCompare: (data: any) => void;
}

const BenchmarkInputScreen: React.FC<BenchmarkInputScreenProps> = ({ onCompare }) => {
  const [formData, setFormData] = React.useState({
    industry: "",
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
    <section className="w-full bg-white py-16 lg:py-24 px-6">
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* LEFT SIDE: Educational + Benchmark Preview */}
        <div className="lg:col-span-6 space-y-10">
          <div className="space-y-6">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <SectionBadge icon={BarChart3} text="LinkedIn Ads Benchmark Tool" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              How Do Your LinkedIn Ads Compare to Top B2B Advertisers?
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Instantly benchmark your CPC, CTR, and CPL against real LinkedIn Ads performance data.
            </p>
          </div>

          {/* Benchmark Snapshot Table */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Typical LinkedIn Ads Benchmarks (B2B SaaS)</h3>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 font-bold text-slate-500 uppercase text-[10px]">Metric</th>
                    <th className="px-4 py-3 font-bold text-slate-500 uppercase text-[10px]">Median</th>
                    <th className="px-4 py-3 font-bold text-slate-500 uppercase text-[10px]">Top Performers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">CPC</td>
                    <td className="px-4 py-3 text-gray-600">$8.40</td>
                    <td className="px-4 py-3 text-emerald-600 font-bold">$4.90</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">CTR</td>
                    <td className="px-4 py-3 text-gray-600">0.62%</td>
                    <td className="px-4 py-3 text-emerald-600 font-bold">1.10%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">CPL</td>
                    <td className="px-4 py-3 text-gray-600">$210</td>
                    <td className="px-4 py-3 text-emerald-600 font-bold">$95</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">
              Benchmarks based on aggregated LinkedIn campaign performance across B2B advertisers.
            </p>
          </div>

          {/* Result Preview Card */}
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              <Zap className="w-3 h-3 fill-current" />
              Example Output
            </div>
            <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-5 flex items-start gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="space-y-3 flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Your CPC</div>
                    <div className="text-lg font-bold text-gray-900">$11.20</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Industry Median</div>
                    <div className="text-lg font-bold text-gray-900">$8.40</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-md w-fit">
                  <TrendingDown className="w-3 h-3" />
                  Above market cost
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-bold text-slate-700">Suggested action:</span> Improve ad CTR or broaden targeting to lower your effective CPC.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Input Tool */}
        <div className="lg:col-span-6 animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <div className="magic-border" style={{ "--magic-radius": "2rem" } as React.CSSProperties}>
            <div className="bg-white rounded-[inherit] p-8 md:p-10 shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Check Your Performance</h2>
                <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
                  Interactive
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Industry</Label>
                  <Select onValueChange={(v) => setFormData({...formData, industry: v})}>
                    <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:ring-blue-500">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Average CPC ($)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input 
                        type="number" 
                        step="0.01"
                        placeholder="8.50" 
                        className="h-12 pl-9 bg-gray-50 border-gray-200 focus:ring-blue-500"
                        value={formData.cpc}
                        onChange={(e) => setFormData({...formData, cpc: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Average CTR (%)</Label>
                    <div className="relative">
                      <MousePointer2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input 
                        type="number" 
                        step="0.01"
                        placeholder="0.45" 
                        className="h-12 pl-9 bg-gray-50 border-gray-200 focus:ring-blue-500"
                        value={formData.ctr}
                        onChange={(e) => setFormData({...formData, ctr: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Average CPL (Optional)</Label>
                    <Input 
                      type="number" 
                      placeholder="120" 
                      className="h-12 bg-gray-50 border-gray-200 focus:ring-blue-500"
                      value={formData.cpl}
                      onChange={(e) => setFormData({...formData, cpl: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Monthly Spend (Optional)</Label>
                    <Input 
                      type="number" 
                      placeholder="5000" 
                      className="h-12 bg-gray-50 border-gray-200 focus:ring-blue-500"
                      value={formData.spend}
                      onChange={(e) => setFormData({...formData, spend: e.target.value})}
                    />
                  </div>
                </div>

                <div className="pt-4 space-y-6">
                  <div className="space-y-3">
                    <Button 
                      type="submit"
                      disabled={!isReady}
                      className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl shadow-xl shadow-blue-500/20 group transition-all"
                    >
                      Analyze My LinkedIn Ads
                      <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      10-second analysis. No signup required.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                    <div className="relative flex justify-center text-[10px] uppercase font-bold"><span className="bg-white px-2 text-slate-300">Or</span></div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      type="button"
                      variant="outline"
                      className="w-full h-14 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                    >
                      <Linkedin className="w-5 h-5 text-[#0A66C2] fill-current" />
                      Connect LinkedIn Ads Account
                    </Button>
                    <p className="text-center text-[10px] font-medium text-slate-400">
                      Import last 30 days automatically.
                    </p>
                  </div>
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