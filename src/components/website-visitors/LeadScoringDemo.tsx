import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Building2, Zap, Flame, Activity } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const LeadScoringDemo = () => {
  const [fitScore, setFitScore] = useState(30);
  const [engagementScore, setEngagementScore] = useState(20);
  
  // Fit Controls
  const [isTargetIndustry, setIsTargetIndustry] = useState(false);
  const [isDecisionMaker, setIsDecisionMaker] = useState(false);
  const [isTargetSize, setIsTargetSize] = useState(false);

  // Engagement Controls
  const [visitedPricing, setVisitedPricing] = useState(false);
  const [downloadedEbook, setDownloadedEbook] = useState(false);
  const [returnVisitor, setReturnVisitor] = useState(false);

  useEffect(() => {
    let newFit = 30;
    if (isTargetIndustry) newFit += 25;
    if (isDecisionMaker) newFit += 30;
    if (isTargetSize) newFit += 15;
    setFitScore(Math.min(newFit, 100));

    let newEng = 20;
    if (visitedPricing) newEng += 35;
    if (downloadedEbook) newEng += 25;
    if (returnVisitor) newEng += 20;
    setEngagementScore(Math.min(newEng, 100));
  }, [isTargetIndustry, isDecisionMaker, isTargetSize, visitedPricing, downloadedEbook, returnVisitor]);

  const totalScore = Math.round((fitScore + engagementScore) / 2);
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-gray-400";
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left: Controls */}
        <div className="lg:col-span-7 p-8 border-b lg:border-b-0 lg:border-r border-gray-100 bg-gray-50/50">
          <div className="space-y-8">
            
            {/* Fit Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Building2 className="h-5 w-5" /></div>
                <h4 className="font-bold text-gray-900">Fit Scoring (Who they are)</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Industry Match (SaaS)</span>
                  <Switch checked={isTargetIndustry} onCheckedChange={setIsTargetIndustry} />
                </div>
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Decision Maker (VP+)</span>
                  <Switch checked={isDecisionMaker} onCheckedChange={setIsDecisionMaker} />
                </div>
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Company Size (500+)</span>
                  <Switch checked={isTargetSize} onCheckedChange={setIsTargetSize} />
                </div>
              </div>
            </div>

            {/* Engagement Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Zap className="h-5 w-5" /></div>
                <h4 className="font-bold text-gray-900">Engagement Scoring (What they do)</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Visited Pricing Page</span>
                  <Switch checked={visitedPricing} onCheckedChange={setVisitedPricing} />
                </div>
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Downloaded E-book</span>
                  <Switch checked={downloadedEbook} onCheckedChange={setDownloadedEbook} />
                </div>
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Return Visitor (3+ sessions)</span>
                  <Switch checked={returnVisitor} onCheckedChange={setReturnVisitor} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Score Output */}
        <div className="lg:col-span-5 p-8 flex flex-col items-center justify-center bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white opacity-50" />
          
          <div className="relative z-10 text-center space-y-8 w-full">
            
            {/* Total Score Circle */}
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-48 h-48 transform -rotate-90">
                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100" />
                <circle 
                  cx="96" cy="96" r="88" 
                  stroke="currentColor" strokeWidth="12" 
                  fill="transparent" 
                  strokeDasharray={552}
                  strokeDashoffset={552 - (552 * totalScore) / 100}
                  className={cn("transition-all duration-1000 ease-out", getScoreColor(totalScore))}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={cn("text-5xl font-bold transition-colors duration-300", getScoreColor(totalScore))}>
                  {totalScore}
                </span>
                <span className="text-sm text-gray-400 font-medium uppercase tracking-wider mt-1">Lead Score</span>
              </div>
            </div>

            {/* Breakdown Bars */}
            <div className="space-y-4 w-full max-w-[200px] mx-auto">
              <div>
                <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
                  <span>Fit</span>
                  <span>{fitScore}/100</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-500 ease-out" 
                    style={{ width: `${fitScore}%` }} 
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
                  <span>Engagement</span>
                  <span>{engagementScore}/100</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-orange-500 transition-all duration-500 ease-out" 
                    style={{ width: `${engagementScore}%` }} 
                  />
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300",
              totalScore >= 80 ? "bg-green-100 text-green-700" : 
              totalScore >= 50 ? "bg-yellow-100 text-yellow-700" : 
              "bg-gray-100 text-gray-600"
            )}>
              {totalScore >= 80 ? <Flame className="h-4 w-4" /> : <Activity className="h-4 w-4" />}
              {totalScore >= 80 ? "HOT LEAD" : totalScore >= 50 ? "WARM LEAD" : "COLD LEAD"}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LeadScoringDemo;