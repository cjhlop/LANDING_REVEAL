"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Zap,
  Target,
  MousePointer2,
  DollarSign,
  XCircle
} from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { Button } from "@/components/ui/button";

interface BenchmarkResultsScreenProps {
  userData: {
    industry: string;
    cpc: string;
    ctr: string;
    cpl?: string;
    spend?: string;
  };
  onReset: () => void;
}

const INDUSTRY_MEDIANS = {
  cpc: 8.40,
  ctr: 0.62,
  cpl: 210,
};

const TOP_PERFORMERS = {
  cpc: 4.90,
  ctr: 1.10,
  cpl: 95,
};

const BenchmarkResultsScreen: React.FC<BenchmarkResultsScreenProps> = ({ userData, onReset }) => {
  const userCpc = parseFloat(userData.cpc);
  const userCtr = parseFloat(userData.ctr);
  const userCpl = userData.cpl ? parseFloat(userData.cpl) : null;

  const calculateScore = () => {
    let score = 50;
    if (userCpc < INDUSTRY_MEDIANS.cpc) score += 15; else score -= 10;
    if (userCtr > INDUSTRY_MEDIANS.ctr) score += 15; else score -= 10;
    if (userCpl && userCpl < INDUSTRY_MEDIANS.cpl) score += 10;
    return Math.min(Math.max(score, 15), 98);
  };

  const score = calculateScore();

  const getScoreZone = (s: number) => {
    if (s < 40) return { label: "Poor", color: "text-red-500", bg: "bg-red-500" };
    if (s < 70) return { label: "Average", color: "text-orange-500", bg: "bg-orange-500" };
    if (s < 90) return { label: "Strong", color: "text-emerald-500", bg: "bg-emerald-500" };
    return { label: "Top Performer", color: "text-blue-600", bg: "bg-blue-600" };
  };

  const zone = getScoreZone(score);

  return (
    <div className="w-full bg-slate-50/50 min-h-screen py-16 lg:py-24 px-6">
      <div className="max-w-[1000px] mx-auto space-y-8">
        
        <div className="flex items-center justify-between mb-4">
          <SectionBadge icon={BarChart3} text={`${userData.industry.toUpperCase()} Performance Report`} />
          <button 
            onClick={onReset}
            className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors"
          >
            Edit Inputs
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Your LinkedIn Ads Benchmark Score</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-8xl font-black text-gray-900 tracking-tighter">{score}</span>
              <span className="text-2xl font-bold text-slate-300">/ 100</span>
            </div>
            <div className="w-full max-w-2xl space-y-4">
              <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden flex">
                <div className={cn("h-full transition-all duration-1000 ease-out", zone.bg)} style={{ width: `${score}%` }} />
              </div>
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                <span>Poor</span><span>Average</span><span>Strong</span><span>Top Performer</span>
              </div>
            </div>
            <p className="text-lg text-gray-600 font-medium">
              {score < 70 ? "Your campaigns are performing below the industry benchmark." : "Your campaigns are outperforming the industry median."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard 
            title="CPC"
            icon={DollarSign}
            userValue={`$${userCpc.toFixed(2)}`}
            median={`$${INDUSTRY_MEDIANS.cpc.toFixed(2)}`}
            top={`$${TOP_PERFORMERS.cpc.toFixed(2)}`}
            status={userCpc > INDUSTRY_MEDIANS.cpc ? "Above market cost" : "Below market cost"}
            isBetter={userCpc <= INDUSTRY_MEDIANS.cpc}
          />
          <MetricCard 
            title="CTR"
            icon={MousePointer2}
            userValue={`${userCtr.toFixed(2)}%`}
            median={`${INDUSTRY_MEDIANS.ctr.toFixed(2)}%`}
            top={`${TOP_PERFORMERS.ctr.toFixed(2)}%`}
            status={userCtr < INDUSTRY_MEDIANS.ctr ? "Creative underperforming" : "Strong engagement"}
            isBetter={userCtr >= INDUSTRY_MEDIANS.ctr}
          />
          <MetricCard 
            title="CPL"
            icon={Target}
            userValue={userCpl ? `$${userCpl.toFixed(0)}` : "N/A"}
            median={`$${INDUSTRY_MEDIANS.cpl}`}
            top={`$${TOP_PERFORMERS.cpl}`}
            status={!userCpl ? "No data provided" : userCpl > INDUSTRY_MEDIANS.cpl ? "High lead cost" : "Better than median"}
            isBetter={userCpl ? userCpl <= INDUSTRY_MEDIANS.cpl : null}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              What This Means
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Your <span className="font-bold">CPC is {userCpc > INDUSTRY_MEDIANS.cpc ? "higher" : "lower"}</span> than the industry benchmark. 
                  {userCpc > INDUSTRY_MEDIANS.cpc && " This usually happens when ad CTR is low or targeting is too narrow."}
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Improving creative performance could reduce your effective CPC by <span className="font-bold text-emerald-600">20–30%</span> based on top performer data.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-white space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Zap className="w-24 h-24" /></div>
            <h3 className="text-xl font-bold flex items-center gap-2 relative z-10">
              <Zap className="w-5 h-5 text-blue-400" />
              Quick Ways to Improve
            </h3>
            <ul className="space-y-4 relative z-10">
              {[
                "Test new ad creatives to improve CTR",
                "Broaden audience targeting to lower CPC",
                "Monitor competitor ads for messaging improvements"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-blue-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NEW SECTION: THE BENCHMARK PARADOX */}
        <div className="pt-12 border-t border-slate-200">
          <div className="bg-white rounded-3xl border border-slate-200 p-10 md:p-16 space-y-12 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent pointer-events-none" />
            
            <div className="text-center max-w-2xl mx-auto space-y-4 relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Sometimes the Best Campaign Looks Like the Worst One</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Benchmarks measure cost efficiency. But they don't reveal which campaigns actually generate pipeline and revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {/* Campaign A */}
              <div className="bg-slate-50 rounded-2xl border-2 border-blue-500 p-8 space-y-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                  The Real Winner
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-gray-900">Campaign A</h4>
                  <div className="flex items-center gap-1.5 text-orange-600 font-bold text-xs">
                    <XCircle className="w-4 h-4" />
                    "Poor" Benchmark
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-slate-500">CPL</span>
                    <span className="text-2xl font-bold text-gray-900">$420</span>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Pipeline Generated</div>
                    <div className="text-4xl font-black text-gray-900 tracking-tight">$120,000</div>
                  </div>
                </div>
              </div>

              {/* Campaign B */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6 opacity-60">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-gray-900">Campaign B</h4>
                  <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    "Top" Benchmark
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-slate-500">CPL</span>
                    <span className="text-2xl font-bold text-gray-900">$120</span>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pipeline Generated</div>
                    <div className="text-4xl font-black text-gray-900 tracking-tight">$8,000</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-8 relative z-10">
              <p className="text-lg font-medium text-slate-900 max-w-xl mx-auto">
                Without attribution, you might pause Campaign A to save budget—accidentally killing your best revenue source.
              </p>
              <Button 
                size="hero" 
                className="px-12 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                See Why This Happens
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const MetricCard = ({ title, icon: Icon, userValue, median, top, status, isBetter }: any) => (
  <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-slate-50 rounded-lg text-slate-400"><Icon className="w-4 h-4" /></div>
        <h4 className="font-bold text-gray-900">{title}</h4>
      </div>
      {isBetter !== null && (
        <div className={cn(
          "px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider",
          isBetter ? "bg-emerald-50 text-emerald-700" : "bg-orange-50 text-orange-700"
        )}>
          {status}
        </div>
      )}
    </div>
    <div className="space-y-4">
      <div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Your Value</div>
        <div className="text-2xl font-bold text-gray-900">{userValue}</div>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
        <div>
          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Industry Median</div>
          <div className="text-sm font-bold text-slate-600">{median}</div>
        </div>
        <div>
          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Top Performers</div>
          <div className="text-sm font-bold text-emerald-600">{top}</div>
        </div>
      </div>
    </div>
  </div>
);

export default BenchmarkResultsScreen;