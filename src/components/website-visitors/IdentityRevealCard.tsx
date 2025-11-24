import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin } from "lucide-react";

const IdentityRevealCard = ({ active }: { active: boolean }) => {
  const [stage, setStage] = useState(0);
  const [typedName, setTypedName] = useState("");
  const fullName = "Sarah Jenkins";

  useEffect(() => {
    if (active) {
      // Reset
      setStage(1);
      setTypedName("");
      
      // Sequence
      const t1 = setTimeout(() => setStage(2), 400); // Avatar pop
      
      // Typing effect
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex <= fullName.length) {
          setTypedName(fullName.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setStage(3); // Job title fade in
        }
      }, 50); // Speed of typing

      // Details slide in
      const t2 = setTimeout(() => setStage(4), 1400);

      return () => {
        clearTimeout(t1);
        clearInterval(typeInterval);
        clearTimeout(t2);
      };
    } else {
      setStage(0);
      setTypedName("");
    }
  }, [active]);

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-xl p-5 w-80 transform transition-all duration-500 text-white border border-blue-500/50">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className={cn(
            "w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg transition-all duration-500 shadow-inner border border-white/10",
            stage >= 2 ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}>
            SJ
          </div>
          
          <div>
            {/* Name */}
            <div className="h-6 flex items-center">
              <span className="font-bold text-white text-lg leading-none tracking-tight">
                {typedName}
                {stage === 2 && <span className="animate-pulse text-blue-300 ml-0.5">|</span>}
              </span>
            </div>
            {/* Job Title */}
            <div className={cn(
              "text-sm text-blue-100 font-medium transition-all duration-500 mt-1",
              stage >= 3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            )}>
              VP of Marketing
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className={cn(
            "transition-all duration-500 delay-500",
            stage >= 4 ? "opacity-100 scale-100" : "opacity-0 scale-0"
        )}>
             <Badge variant="secondary" className="bg-green-400/20 text-green-100 hover:bg-green-400/30 border-0 text-[10px] font-semibold px-2 py-0.5">
                Decision Maker
            </Badge>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 text-sm text-blue-50">
        <div className={cn(
          "flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 transition-all duration-500 delay-0 hover:bg-white/10",
          stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Mail className="h-4 w-4 text-blue-200" />
          <span className="truncate font-medium">sarah.j@techflow.io</span>
        </div>
        
        <div className={cn(
          "flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 transition-all duration-500 delay-100 hover:bg-white/10",
          stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Phone className="h-4 w-4 text-blue-200" />
          <span className="font-medium">+1 (555) 019-2834</span>
        </div>

        <div className={cn(
          "flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 transition-all duration-500 delay-200 hover:bg-white/10",
          stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Linkedin className="h-4 w-4 text-blue-200" />
          <span className="font-medium<think>[REDACTED]</think>">linkedin.com/in/sarahj</span>
        </div>
      </div>
    </div>
  );
};

export default IdentityRevealCard;