import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { 
  Users, Target, Database, 
  Bell, MessageSquare, Calendar, 
  Filter, Layers, Share2,
  RefreshCw, CheckCircle2, ArrowRight,
  Zap, Search, Building2, Mail, Globe
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";

// --- Visual Components for Each Use Case ---

const SalesVisual = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
    
    {/* Notification Stack */}
    <div className="relative z-10 w-full max-w-sm space-y-4">
      {/* Card 1: Slack Notification */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#4A154B] flex items-center justify-center flex-shrink-0 text-white">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-sm text-gray-900">New Hot Lead 🔥</span>
              <span className="text-[10px] text-gray-400">Just now</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">Microsoft</span> just visited the <span className="text-blue-600">Enterprise Pricing</span> page.
            </p>
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="outline" className="h-7 text-xs border-gray-200">View in CRM</Button>
              <Button size="sm" className="h-7 text-xs bg-blue-600 hover:bg-blue-700">Claim Lead</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Email Alert */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 opacity-0 fill-mode-forwards">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <div className="font-bold text-sm text-gray-900">Return Visitor Alert</div>
            <div className="text-xs text-gray-500">VP of Engineering @ Stripe is back</div>
          </div>
        </div>
      </div>
    </div>

    {/* Floating Badge */}
    <div className="absolute top-12 right-12 animate-bounce duration-[3000ms]">
      <Badge className="bg-green-500 hover:bg-green-600 text-white border-0 shadow-lg px-3 py-1">
        <Zap className="w-3 h-3 mr-1 fill-current" />
        High Intent
      </Badge>
    </div>
  </div>
);

const MarketingVisual = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent" />
    
    {/* Audience Builder UI */}
    <div className="relative z-10 w-full max-w-sm bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-in zoom-in-95 duration-700">
      <div className="bg-gray-50/80 border-b border-gray-100 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-purple-600" />
          <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Retargeting Audience</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        {/* Filter 1 */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-purple-50 border border-purple-100">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Industry</span>
          </div>
          <Badge variant="secondary" className="bg-white text-gray-600 text-[10px]">SaaS</Badge>
        </div>
        
        {/* Filter 2 */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-purple-50 border border-purple-100">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Company Size</span>
          </div>
          <Badge variant="secondary" className="bg-white text-gray-600 text-[10px]">500+ Employees</Badge>
        </div>

        {/* Match Count */}
        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
          <div className="text-xs text-gray-500 mb-1">Estimated Reach</div>
          <div className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
            12,450
            <span className="text-xs font-normal text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">+15%</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-3">
        <Button className="w-full bg-purple-600 hover:bg-purple-700 h-9 text-xs">
          Sync to LinkedIn Ads
        </Button>
      </div>
    </div>
  </div>
);

const RevOpsVisual = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent" />
    
    {/* Data Pipeline Visualization */}
    <div className="relative z-10 flex items-center gap-4">
      
      {/* Source */}
      <div className="flex flex-col items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-700">
        <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-gray-200 flex items-center justify-center">
          <Globe className="h-8 w-8 text-gray-400" />
        </div>
        <span className="text-xs font-medium text-gray-500">Website</span>
      </div>

      {/* Pipe */}
      <div className="flex-1 w-24 h-1 bg-gray-200 rounded-full relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-500 w-1/2 animate-[shimmer_1.5s_infinite_linear]" />
      </div>

      {/* Processor */}
      <div className="flex flex-col items-center gap-2 relative z-10">
        <div className="w-20 h-20 rounded-2xl bg-white shadow-xl border border-orange-100 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-orange-50 rounded-2xl animate-pulse" />
          <RefreshCw className="h-8 w-8 text-orange-600 relative z-10 animate-spin-slow" />
        </div>
        <span className="text-xs font-bold text-orange-600">Enriching...</span>
      </div>

      {/* Pipe */}
      <div className="flex-1 w-24 h-1 bg-gray-200 rounded-full relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-500 w-1/2 animate-[shimmer_1.5s_infinite_linear] delay-75" />
      </div>

      {/* Destination */}
      <div className="flex flex-col items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-700">
        <div className="w-16 h-16 rounded-2xl bg-[#00A1E0] shadow-lg flex items-center justify-center text-white">
          <Database className="h-8 w-8" />
        </div>
        <span className="text-xs font-medium text-gray-500">Salesforce</span>
      </div>

    </div>

    {/* Success Toast */}
    <div className="absolute bottom-12 bg-white rounded-full shadow-lg border border-green-100 px-4 py-2 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-1000 fill-mode-forwards opacity-0">
      <CheckCircle2 className="h-4 w-4 text-green-500" />
      <span className="text-xs font-medium text-gray-700">Record Updated</span>
    </div>
  </div>
);

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState<"sales" | "marketing" | "revops">("sales");
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveTab(current => {
        if (current === "sales") return "marketing";
        if (current === "marketing") return "revops";
        return "sales";
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleTabChange = (tab: "sales" | "marketing" | "revops") => {
    setActiveTab(tab);
    setAutoPlay(false); // Stop autoplay on user interaction
  };

  return (
    <section className="py-32 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center mb-8">
            <SectionBadge icon={Layers} text="Endless Applications" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            One Platform. <br />
            <span className="text-blue-600">Every Go-To-Market Team.</span>
          </h2>
          <p className="text-xl text-gray-600">
            WebID isn't just a tool; it's the intelligence layer that powers your entire revenue engine.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="bg-gray-50 rounded-3xl border border-gray-200 p-2 md:p-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              
              {/* Sales Tab */}
              <button
                onClick={() => handleTabChange("sales")}
                className={cn(
                  "text-left p-5 rounded-2xl transition-all duration-300 border-2 group relative overflow-hidden",
                  activeTab === "sales" 
                    ? "bg-white border-blue-600 shadow-lg" 
                    : "bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200"
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center transition-colors flex-shrink-0",
                      activeTab === "sales" ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-500 group-hover:bg-white group-hover:text-gray-700"
                    )}>
                      <Bell className="h-4 w-4" />
                    </div>
                    <h3 className={cn("text-lg font-bold", activeTab === "sales" ? "text-gray-900" : "text-gray-600")}>
                      For Sales Teams
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed pl-1">
                    Get alerted the moment a target account visits. Strike while the iron is hot.
                  </p>
                </div>
                {activeTab === "sales" && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10">
                    <Bell className="h-24 w-24" />
                  </div>
                )}
              </button>

              {/* Marketing Tab */}
              <button
                onClick={() => handleTabChange("marketing")}
                className={cn(
                  "text-left p-5 rounded-2xl transition-all duration-300 border-2 group relative overflow-hidden",
                  activeTab === "marketing" 
                    ? "bg-white border-purple-600 shadow-lg" 
                    : "bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200"
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center transition-colors flex-shrink-0",
                      activeTab === "marketing" ? "bg-purple-100 text-purple-600" : "bg-gray-200 text-gray-500 group-hover:bg-white group-hover:text-gray-700"
                    )}>
                      <Target className="h-4 w-4" />
                    </div>
                    <h3 className={cn("text-lg font-bold", activeTab === "marketing" ? "text-gray-900" : "text-gray-600")}>
                      For Marketers
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed pl-1">
                    Retarget high-intent visitors on LinkedIn who match your ICP but didn't convert.
                  </p>
                </div>
              </button>

              {/* RevOps Tab */}
              <button
                onClick={() => handleTabChange("revops")}
                className={cn(
                  "text-left p-5 rounded-2xl transition-all duration-300 border-2 group relative overflow-hidden",
                  activeTab === "revops" 
                    ? "bg-white border-orange-500 shadow-lg" 
                    : "bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200"
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center transition-colors flex-shrink-0",
                      activeTab === "revops" ? "bg-orange-100 text-orange-600" : "bg-gray-200 text-gray-500 group-hover:bg-white group-hover:text-gray-700"
                    )}>
                      <RefreshCw className="h-4 w-4" />
                    </div>
                    <h3 className={cn("text-lg font-bold", activeTab === "revops" ? "text-gray-900" : "text-gray-600")}>
                      For RevOps
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed pl-1">
                    Automatically enrich your CRM with fresh firmographic data. No manual entry.
                  </p>
                </div>
              </button>

            </div>

            {/* Visual Stage */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-200 shadow-inner overflow-hidden relative min-h-[500px]">
              {/* Grid Pattern Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Content Switcher */}
              <div className="absolute inset-0">
                {activeTab === "sales" && <SalesVisual />}
                {activeTab === "marketing" && <MarketingVisual />}
                {activeTab === "revops" && <RevOpsVisual />}
              </div>
            </div>

          </div>
        </div>

      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default UseCasesSection;