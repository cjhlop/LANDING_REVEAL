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
      {/* Card Container - Significantly Wider (w-[480px]) */}
      <div className={cn(
        "w-80 md:w-[480px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden transition-all duration-700 ease-out transform",
        active ? "translate-y-0 opacity-100 rotate-x-0" : "translate-y-8 opacity-0 rotate-x-6"
      )}>
        
        {/* Premium Header */}
        <div className="h-24 bg-[#0F172A] relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>

        {/* Content Area */}
        <div className="px-6 pb-6 relative">
          
          {/* Avatar */}
          <div className="absolute -top-10 left-6">
            <div className={cn(
              "w-20 h-20 rounded-xl bg-white p-1 shadow-lg transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)",
              stage >= 2 ? "scale-100 opacity-100 translate-y-0" : "scale-75 opacity-0 translate-y-4"
            )}>
              <div className="w-full h-full rounded-lg bg-gray-100 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces&q=80" 
                  alt="Sarah Jenkins"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Status Dot */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>

          {/* Top Right: Verification Badge */}
          <div className="flex justify-end pt-3">
            <div className={cn(
              "flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-[10px] font-semibold uppercase tracking-wide transition-all duration-500 delay-300",
              stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            )}>
              <ShieldCheck className="w-3.5 h-3.5" /> 
              Verified Profile
            </div>
          </div>

          {/* Name & Role Section */}
          <div className="mt-4">
            <div className={cn("transition-all duration-500 delay-100", stage >= 2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4")}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Sarah Jenkins</h3>
                <Linkedin className="w-5 h-5 text-[#0A66C2] cursor-pointer hover:opacity-80 transition-opacity" />
              </div>
            </div>
            
            <div className={cn("transition-all duration-500 delay-200", stage >= 2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4")}>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <span className="font-medium text-blue-600">VP of Marketing</span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-gray-400" /> TechFlow
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gray-100 my-5"></div>

          {/* Contact Details Grid */}
          <div className="space-y-2">
            <ContactRow 
              icon={Mail} 
              label="Work Email" 
              value="sarah.j@techflow.io" 
              delay={300} 
              visible={stage >= 3} 
              highlight
            />
            <ContactRow 
              icon={Phone} 
              label="Direct Phone" 
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
            "mt-5 pt-4 border-t border-gray-100 flex items-center justify-between transition-all duration-700 delay-700",
            stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ICP Match Score</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-gray-900">98</span>
                <span className="text-sm text-gray-500 font-medium">/ 100</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
               <div className="h-2.5 w-32 bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-emerald-500 w-[98%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
               </div>
               <CheckCircle2 className="w-6 h-6 text-emerald-500" />
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
      "flex items-center justify-between group/row py-2 px-3 rounded-lg transition-all duration-500",
      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
      highlight ? "bg-blue-50/60" : "hover:bg-gray-50"
    )} 
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-4">
      <div className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
        highlight ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500 group-hover/row:bg-white group-hover/row:shadow-sm group-hover/row:text-gray-700"
      )}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider leading-tight">{label}</span>
        <span className={cn("text-sm font-medium leading-tight", highlight ? "text-blue-900" : "text-gray-700")}>{value}</span>
      </div>
    </div>
    <button className="opacity-0 group-hover/row:opacity-100 text-gray-400 hover:text-blue-600 transition-all transform scale-90 group-hover/row:scale-100">
      <Copy className="w-4 h-4" />
    </button>
  </div>
);

export default IdentityRevealCard;