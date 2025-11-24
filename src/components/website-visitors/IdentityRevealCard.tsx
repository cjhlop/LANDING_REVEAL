import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Mail, Phone, Linkedin, CheckCircle2 } from "lucide-react";

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
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-5 w-72 transform transition-all duration-500">
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar */}
        <div className={cn(
          "w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md transition-all duration-500",
          stage >= 2 ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}>
          SJ
        </div>
        
        <div>
          {/* Name */}
          <div className="h-6 flex items-center">
            <span className="font-bold text-gray-900 text-lg leading-none">
              {typedName}
              {stage === 2 && <span className="animate-pulse text-blue-500">|</span>}
            </span>
          </div>
          {/* Job Title */}
          <div className={cn(
            "text-sm text-blue-600 font-medium transition-all duration-500",
            stage >= 3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          )}>
            VP of Marketing
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3">
        <div className={cn(
          "flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg transition-all duration-500 delay-0",
          stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Mail className="h-4 w-4 text-gray-400" />
          <span className="truncate">sarah.j@techflow.io</span>
          <CheckCircle2 className="h-3 w-3 text-green-500 ml-auto" />
        </div>
        
        <div className={cn(
          "flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg transition-all duration-500 delay-100",
          stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Phone className="h-4 w-4 text-gray-400" />
          <span>+1 (555) 019-2834</span>
        </div>

        <div className={cn(
          "flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg transition-all duration-500 delay-200",
          stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Linkedin className="h-4 w-4 text-[#0A66C2]" />
          <span className="text-blue-600">/in/sarahjenkins</span>
        </div>
      </div>
      
      {/* Match Badge */}
      <div className={cn(
        "absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg transition-all duration-500 delay-500",
        stage >= 4 ? "scale-100 opacity-100" : "scale-0 opacity-0"
      )}>
        100% MATCH
      </div>
    </div>
  );
};

export default IdentityRevealCard;