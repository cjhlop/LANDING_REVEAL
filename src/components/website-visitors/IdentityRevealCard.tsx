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
      {/* Card Container */}
      <div className={cn(
        "w-80 bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden transition-all duration-700 ease-out transform",
        active ? "translate-y-0 opacity-100 rotate-x-0" : "translate-y-8 opacity-0 rotate-x-6"
      )}>
        
        {/* Premium Header Background */}
        <div className="h-28 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
          {/* Decorative shapes */}
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute left-10 bottom-0 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        {/* Content Area */}
        <div className="px-6 pb-6 relative">
          
          {/* Avatar - Floating & Animated */}
          <div className="absolute -top-12 left-6">
            <div className={cn(
              "w-24 h-24 rounded-2xl bg-white p-1.5 shadow-xl transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)",
              stage >= 2 ? "scale-100 opacity-100 translate-y-0" : "scale-75 opacity-0 translate-y-4"
            )}>
              <div className="w-full h-full rounded-xl bg-gray-100 overflow-hidden relative group/avatar">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces&q=80" 
                  alt="Sarah Jenkins"
                  className="w-full h-full object-cover"
                />
                {/* Online Indicator */}
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-[3px] border-white rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>

          {/* Top Right: Verification Badge */}
          <div className="flex justify-end pt-4">
            <div className={cn(
              "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider shadow-sm transition-all duration-500 delay-300",
              stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            )}>
              <ShieldCheck className="w-3 h-3 fill-blue-100" /> 
              Verified Profile
            </div>
          </div>

          {/* Name & Role Section */}
          <div className="mt-5 space-y-1">
            <div className={cn("transition-all duration-500 delay-100", stage >= 2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4")}>
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                Sarah Jenkins
                <Linkedin className="w-4 h-4 text-[#0A66C2] fill-current opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              </h3>
            </div>
            
            <div className={cn("transition-all duration-500 delay-200", stage >= 2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4")}>
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <span className="text-blue-600">VP of Marketing</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-gray-400" /> TechFlow
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-5"></div>

          {/* Contact Details Grid */}
          <div className="space-y-2.5">
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

          {/* Bottom: Match Score Indicator */}
          <div className={cn(
            "mt-6 p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 flex items-center justify-between transition-all duration-700 delay-700 shadow-sm",
            stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path className="text-emerald-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path className="text-emerald-500 drop-shadow-sm" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <span className="absolute text-[10px] font-bold text-emerald-700">98</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">ICP Match</span>
                <span className="text-xs text-emerald-600 font-medium">Decision Maker</span>
              </div>
            </div>
            <div className="bg-white p-1.5 rounded-full shadow-sm">
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
      "flex items-center justify-between group/row p-2.5 rounded-lg transition-all duration-500 border border-transparent",
      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
      highlight ? "bg-blue-50/50 border-blue-100/50 hover:bg-blue-50 hover:border-blue-100" : "hover:bg-gray-50 hover:border-gray-100"
    )} 
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-3.5">
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
      <Copy className="w-3.5 h-3.5" />
    </button>
  </div>
);

export default IdentityRevealCard;