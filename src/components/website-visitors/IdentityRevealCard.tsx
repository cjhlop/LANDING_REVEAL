import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Mail, Phone, Linkedin, CheckCircle2, MapPin, Copy, ShieldCheck, Building2 } from "lucide-react";

const IdentityRevealCard = ({ active }: { active: boolean }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (active) {
      setStage(1); // Start
      const t1 = setTimeout(() => setStage(2), 400); // Reveal Header
      const t2 = setTimeout(() => setStage(3), 1000); // Reveal Details
      return () => { clearTimeout(t1); clearTimeout(t2); };
    } else {
      setStage(0);
    }
  }, [active]);

  return (
    <div className="relative group perspective-1000 z-50">
      {/* Card Container - Width w-[350px] */}
      <div className={cn(
        "w-[350px] bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden transition-all duration-700 ease-out transform",
        active ? "translate-y-0 opacity-100 rotate-x-0" : "translate-y-8 opacity-0 rotate-x-6"
      )}>
        
        {/* Content Area - Increased padding for balance without header */}
        <div className="p-6 relative">
          
          {/* Top Row: Name & Badge */}
          <div className="flex justify-between items-start">
            {/* Name & Role */}
            <div className={cn("transition-all duration-500 delay-100", stage >= 2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4")}>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-900">Sarah Jenkins</h3>
                <Linkedin className="w-4 h-4 text-[#0A66C2] cursor-pointer hover:opacity-80" />
              </div>
              
              <div className={cn("flex items-center gap-2 text-xs text-gray-500 mt-1 transition-all duration-500 delay-200", stage >= 2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4")}>
                <span className="font-medium text-blue-600">VP of Marketing</span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-3 h-3" /> TechFlow
                </span>
              </div>
            </div>

            {/* Verification Badge */}
            <div className={cn(
              "flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[9px] font-bold uppercase tracking-wider transition-all duration-500 delay-300",
              stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            )}>
              <ShieldCheck className="w-3 h-3" /> 
              Verified
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gray-100 my-4"></div>

          {/* Contact Details Grid */}
          <div className="space-y-1">
            <ContactRow 
              icon={Mail} 
              label="Email" 
              value="sarah.j@techflow.io" 
              delay={300} 
              visible={stage >= 3} 
              highlight
            />
            <ContactRow 
              icon={Phone} 
              label="Phone" 
              value="+1 (555) 019-2834" 
              delay={400} 
              visible={stage >= 3} 
            />
            <ContactRow 
              icon={MapPin} 
              label="Location" 
              value="San Francisco, CA" 
              delay={500} 
              visible={stage >= 3} 
            />
          </div>

          {/* Bottom: Match Score */}
          <div className={cn(
            "mt-4 pt-3 border-t border-gray-100 flex items-center justify-between transition-all duration-700 delay-700",
            stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">ICP Match Score</span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-gray-900">98</span>
                <span className="text-xs text-gray-500">/ 100</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
               <div className="h-1.5 w-20 bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-emerald-500 w-[98%] rounded-full"></div>
               </div>
               <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const ContactRow = ({ icon: Icon, label, value, delay, visible, highlight }: any) => (
  <div 
    className={cn(
      "flex items-center justify-between group/row py-1.5 px-2 rounded-md transition-all duration-500",
      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
      highlight ? "bg-blue-50/60" : "hover:bg-gray-50"
    )} 
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-3">
      <Icon className={cn("w-3.5 h-3.5", highlight ? "text-blue-600" : "text-gray-400")} />
      <span className={cn("text-xs", highlight ? "font-medium text-gray-900" : "text-gray-600")}>{value}</span>
    </div>
    <button className="opacity-0 group-hover/row:opacity-100 text-gray-400 hover:text-blue-600 transition-all">
      <Copy className="w-3 h-3" />
    </button>
  </div>
);

export default IdentityRevealCard;