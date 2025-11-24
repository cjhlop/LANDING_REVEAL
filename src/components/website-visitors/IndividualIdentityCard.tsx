import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Fingerprint } from "lucide-react";
import IdentityRevealCard from "./IdentityRevealCard";

const IndividualIdentityCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative min-h-[520px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
          <Fingerprint className="h-7 w-7" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Individual Identity</h3>
        <p className="text-lg text-gray-600 max-w-[100%] md:max-w-[50%] leading-relaxed">
          Stop guessing. See the exact names, job titles, and verified contact details of the people browsing your site right now.
        </p>
      </div>
      
      {/* Visual decoration */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Card Container */}
      <div className={cn(
        "absolute right-8 bottom-8 md:right-12 md:bottom-12 transition-all duration-500 ease-out z-20",
        isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <IdentityRevealCard active={isHovered} />
      </div>
    </div>
  );
};

export default IndividualIdentityCard;