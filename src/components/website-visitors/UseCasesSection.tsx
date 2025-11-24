import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Users, Target, BarChart3, Zap, CheckCircle2, Linkedin, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionBadge from "./SectionBadge";

const UseCasesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const DURATION = 10000; // 10 seconds
  const UPDATE_INTERVAL = 50; // Update every 50ms for smooth bar

  const cases = [
    {
      id: "sales",
      title: "For Sales",
      description: "Stop cold calling. Reach out to prospects who just visited your pricing page with perfect timing.",
      icon: Users,
      color: "blue",
      image: "/media/ads-scheduling-list.png",
      floating: (
        <>
          {/* Floating Card 1 - Left */}
          <div 
            className="absolute -left-12 top-1/3 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-64 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-forwards z-20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">High Intent Alert</div>
                <div className="text-xs text-gray-500">Microsoft • Pricing Page</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="default" className="w-full h-8 text-xs bg-blue-600 hover:bg-blue-700">Sync to CRM</Button>
            </div>
          </div>

          {/* Floating Card 2 - Bottom Right */}
          <div 
            className="absolute -right-8 -bottom-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-56 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-forwards z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Lead Qualified</div>
                <div className="text-xs text-gray-500">Score: 92/100</div>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: "marketing",
      title: "For Marketing",
      description: "Retarget high-intent visitors on LinkedIn and verify if your campaigns are reaching the right ICP.",
      icon: Target,
      color: "purple",
      image: "/media/audience-tuning.webp",
      floating: (
        <>
          {/* Floating Card 1 - Top Right */}
          <div 
            className="absolute -right-12 top-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-64 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-forwards z-20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Audience Match</div>
                <div className="text-xs text-gray-500">ICP: SaaS &gt; 500 Employees</div>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
              <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <div className="text-xs text-right text-purple-600 font-medium">85% Match Rate</div>
          </div>

          {/* Floating Card 2 - Bottom Left */}
          <div 
            className="absolute -left-8 bottom-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-60 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-forwards z-20"
          >
            <div className="flex items-center gap-3">
              
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Retargeting Active</div>
                <div className="text-xs text-gray-500">Campaign: Q3 Nurture</div>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: "revops",
      title: "For RevOps",
      description: "Enrich your CRM automatically. Push clean, verified data directly into Salesforce or HubSpot.",
      icon: BarChart3,
      color: "orange",
      image: "/media/feature-share-smart.png",
      floating: (
        <>
          {/* Floating Card 1 - Center */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-xl shadow-2xl border border-gray-100 w-72 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-forwards z-30"
          >
            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-orange-600" />
                <span className="font-bold text-gray-900 text-sm">CRM Enrichment</span>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-[10px]">Live</Badge>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">New Accounts</span>
                <span className="font-medium text-gray-900">+124</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Contacts Enriched</span>
                <span className="font-medium text-gray-900">+850</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Data Accuracy</span>
                <span className="font-medium text-green-600">99.8%</span>
              </div>
            </div>
          </div>
        </>
      )
    }
  ];

  useEffect(() => {
    setProgress(0);
    
    progressInterval.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActiveIndex(current => (current + 1) % cases.length);
          return 0;
        }
        return prev + (100 / (DURATION / UPDATE_INTERVAL));
      });
    }, UPDATE_INTERVAL);

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [activeIndex]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const activeCase = cases[activeIndex];

  return (
    <section className="py-32 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1216px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-8">
            <SectionBadge icon={Target} text="Limitless Applications" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            One Platform, <br />
            <span className="text-blue-600">Endless Applications</span>
          </h2>
          <p className="text-xl text-gray-600">
            WebID isn't just a tool; it's the engine that powers your entire go-to-market strategy.
          </p>
        </div>

        {/* Selector Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cases.map((item, index) => {
            const isActive = index === activeIndex;
            const Icon = item.icon;
            
            return (
              <div 
                key={item.id}
                onClick={() => handleManualSelect(index)}
                className={cn(
                  "relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden group",
                  isActive 
                    ? "bg-white border-blue-200 shadow-lg scale-[1.02]" 
                    : "bg-gray-50 border-transparent hover:bg-white hover:border-gray-200"
                )}
              >
                {/* Progress Bar for Active Item */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 h-1 bg-blue-100 w-full">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                <div className="flex items-center gap-3 mb-3">
                  <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    isActive ? `bg-${item.color}-100 text-${item.color}-600` : "bg-gray-200 text-gray-500 group-hover:bg-gray-300"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={cn(
                    "font-bold text-lg transition-colors",
                    isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"
                  )}>
                    {item.title}
                  </h3>
                </div>
                <p className={cn(
                  "text-sm leading-relaxed transition-colors",
                  isActive ? "text-gray-600" : "text-gray-500"
                )}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Area - Flat, no 3D */}
        <div className="relative h-[600px] w-full flex items-center justify-center mt-10">
          
          {/* Container */}
          <div className="relative w-full max-w-[900px]">
            {/* Main Image Card - No Shadow, No Border */}
            <div className="relative rounded-2xl overflow-hidden shadow-none border-none bg-white">
              <img 
                key={activeCase.image} // Key change triggers animation
                src={activeCase.image} 
                alt={`${activeCase.title} Interface`} 
                className="w-full h-auto object-cover animate-in fade-in zoom-in-95 duration-500"
              />
              
              {/* Reflection/Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>

            {/* Dynamic Floating Elements */}
            <div key={`floating-${activeCase.id}`} className="absolute inset-0 pointer-events-none">
              {activeCase.floating}
            </div>
            
          </div>
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-orange-500/5 blur-3xl -z-10" />
        </div>

      </div>
    </section>
  );
};

export default UseCasesSection;