"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Zap, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Globe, 
  ShieldCheck,
  Terminal
} from "lucide-react";
import SectionBadge from "../SectionBadge";
import { Button } from "@/components/ui/button";

const INTEGRATIONS = [
  { 
    id: "linkedin",
    name: "LinkedIn Ads", 
    logo: "https://cdn.simpleicons.org/linkedin/0A66C2", 
    color: "#0A66C2",
    description: "Sync audiences and automate campaign scheduling.",
    code: `// LinkedIn Sync Config
{
  "platform": "linkedin_ads",
  "sync_mode": "real_time",
  "audience_id": "aud_89234",
  "auto_schedule": true
}`
  },
  { 
    id: "salesforce",
    name: "Salesforce", 
    logo: "https://cdn.simpleicons.org/salesforce/00A1E0", 
    color: "#00A1E0",
    description: "Push identified accounts directly to your CRM.",
    code: `// Salesforce CRM Push
{
  "object": "Lead",
  "mapping": {
    "company": "Company",
    "intent_score": "Rating",
    "web_id": "External_ID__c"
  }
}`
  },
  { 
    id: "hubspot",
    name: "HubSpot", 
    logo: "https://cdn.simpleicons.org/hubspot/FF7A59", 
    color: "#FF7A59",
    description: "Trigger workflows based on website intent signals.",
    code: `// HubSpot Workflow Trigger
{
  "portal_id": "441290",
  "event": "high_intent_visit",
  "properties": ["industry", "revenue"]
}`
  },
  { 
    id: "google",
    name: "Google Ads", 
    logo: "https://cdn.simpleicons.org/googleads/4285F4", 
    color: "#4285F4",
    description: "Optimize search bidding with first-party intent data.",
    code: `// Google Ads Optimization
{
  "conversion_id": "conv_9921",
  "value_tracking": "enabled",
  "attribution": "multi_touch"
}`
  },
];

const IntegrationsSection: React.FC<{ className?: string }> = ({ className }) => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.3 });
  const [visualRef, visualInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });
  const [activeId, setActiveId] = React.useState("linkedin");
  const [isProcessing, setIsProcessing] = React.useState(false);

  const activeIntegration = INTEGRATIONS.find(i => i.id === activeId) || INTEGRATIONS[0];

  const handleSwitch = (id: string) => {
    if (id === activeId) return;
    setIsProcessing(true);
    setActiveId(id);
    setTimeout(() => setIsProcessing(false), 600);
  };

  return (
    <section className={cn("relative w-full bg-white px-6 sm:px-12 md:px-[112px] py-24 lg:py-40 overflow-hidden", className)}>
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-50/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1216px] mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Zap} text="Ecosystem & Connectivity" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            The Central Hub for <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">B2B Data Activation</span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-opacity duration-700 delay-200",
            headerInView ? "opacity-100" : "opacity-0"
          )}>
            DemandSense doesn't just collect data—it pipes it instantly into the tools your team uses every day.
          </p>
        </div>

        <div ref={visualRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Integration Selector */}
          <div className="lg:col-span-4 space-y-4">
            {INTEGRATIONS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleSwitch(item.id)}
                className={cn(
                  "w-full text-left p-5 rounded-2xl border transition-all duration-300 group relative overflow-hidden",
                  activeId === item.id 
                    ? "bg-white border-blue-200 shadow-xl ring-1 ring-blue-50" 
                    : "bg-gray-50/50 border-transparent hover:bg-white hover:border-gray-200"
                )}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 shadow-sm",
                    activeId === item.id ? "bg-white" : "bg-gray-100 grayscale group-hover:grayscale-0"
                  )}>
                    <img src={item.logo} alt={item.name} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-bold transition-colors",
                      activeId === item.id ? "text-gray-900" : "text-gray-500 group-hover:text-gray-700"
                    )}>{item.name}</h3>
                    <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{item.description}</p>
                  </div>
                </div>
                {activeId === item.id && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 animate-in fade-in slide-in-from-left-2">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </button>
            ))}

            <div className="pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-gray-500 font-medium px-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>50+ Native Integrations</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 font-medium px-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Real-time Webhook Support</span>
              </div>
              <Button variant="outline" className="w-full mt-2 h-12 rounded-xl border-gray-200 hover:bg-gray-50">
                View All Integrations
              </Button>
            </div>
          </div>

          {/* Right: Advanced Pipeline Visual */}
          <div className="lg:col-span-8 relative">
            <div className="magic-border" style={{ "--magic-radius": "2rem" } as React.CSSProperties}>
              <div className="bg-slate-900 rounded-[inherit] overflow-hidden h-[550px] flex flex-col">
                
                {/* Visual Pipeline Header */}
                <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <div className="h-4 w-px bg-slate-800 mx-2" />
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <Terminal className="w-3 h-3" />
                      <span>pipeline_monitor.sh</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full bg-blue-500 transition-all duration-300",
                      isProcessing ? "animate-ping" : "opacity-50"
                    )} />
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                      {isProcessing ? "Syncing Data..." : "System Idle"}
                    </span>
                  </div>
                </div>

                {/* The Pipeline Stage */}
                <div className="flex-1 relative bg-[#0B0F19] flex items-center justify-center overflow-hidden">
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-20" 
                       style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                  
                  {/* Animated Data Beams */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
                    <defs>
                      <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#3875F6" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    
                    {/* Source to Hub */}
                    <path d="M 150 200 L 350 200" stroke="rgba(56,117,246,0.1)" strokeWidth="2" fill="none" />
                    <circle r="3" fill="#3875F6" className="animate-pipeline-flow">
                      <animateMotion dur="2s" repeatCount="indefinite" path="M 150 200 L 350 200" />
                    </circle>

                    {/* Hub to Destination */}
                    <path d="M 450 200 L 650 200" stroke="rgba(56,117,246,0.1)" strokeWidth="2" fill="none" />
                    <circle r="3" fill={activeIntegration.color} className="animate-pipeline-flow">
                      <animateMotion dur="1.5s" repeatCount="indefinite" path="M 450 200 L 650 200" />
                    </circle>
                  </svg>

                  <div className="relative z-10 flex items-center justify-between w-full max-w-2xl px-12">
                    
                    {/* Source: DemandSense */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-900/50 border border-blue-400/30 relative group">
                        <Database className="w-10 h-10 text-white" />
                        <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">DemandSense</span>
                    </div>

                    {/* Central Processing Hub */}
                    <div className="relative">
                      <div className={cn(
                        "w-24 h-24 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center transition-all duration-500",
                        isProcessing ? "scale-110 border-blue-500 shadow-[0_0_30px_rgba(56,117,246,0.3)]" : ""
                      )}>
                        <Cpu className={cn(
                          "w-10 h-10 text-slate-500 transition-all duration-500",
                          isProcessing ? "text-blue-400 rotate-180" : ""
                        )} />
                        
                        {/* Orbiting Rings */}
                        <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute -inset-4 border border-slate-700/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Logic Engine</span>
                      </div>
                    </div>

                    {/* Destination: Active Integration */}
                    <div className="flex flex-col items-center gap-4">
                      <div 
                        className={cn(
                          "w-20 h-20 rounded-3xl bg-white flex items-center justify-center shadow-2xl transition-all duration-700 border border-slate-200 relative",
                          isProcessing ? "scale-95 opacity-50" : "scale-100 opacity-100"
                        )}
                      >
                        <img src={activeIntegration.logo} alt={activeIntegration.name} className="w-10 h-10" />
                        <div 
                          className="absolute -inset-1 rounded-[inherit] blur-md opacity-20 transition-all duration-700"
                          style={{ backgroundColor: activeIntegration.color }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{activeIntegration.name}</span>
                    </div>

                  </div>
                </div>

                {/* Code Preview Footer */}
                <div className="h-48 bg-slate-950 border-t border-slate-800 p-6 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-4 text-blue-400">
                    <Code2 className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Payload Preview</span>
                  </div>
                  <pre className={cn(
                    "font-mono text-sm text-blue-100/80 transition-all duration-500",
                    isProcessing ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  )}>
                    <code>{activeIntegration.code}</code>
                  </pre>
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-4 right-6 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase">AES-256 Encrypted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-blue-500" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase">Global Edge Sync</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pipeline-flow {
          0% { opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-pipeline-flow {
          animation: pipeline-flow linear infinite;
        }
      `}</style>
    </section>
  );
};

export default React.memo(IntegrationsSection);