import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Fingerprint } from "lucide-react";
import IdentityRevealCard from "./IdentityRevealCard";

const IndividualIdentityCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative min-h-[400px] flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text Content - Higher Z-Index to prevent being covered */}
      <div className="relative z-30 max-w-[40%] pointer-events-none">
        <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
          <Fingerprint className="h-7 w-7" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Individual Identity</h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Stop guessing. See the exact names, job titles, and verified contact details of the people browsing your site right now.
        </p>
      </div>
      
      {/* Visual decoration */}
      <div className="absolute right-0 bottom-0 w-2/3 h-full bg-gradient-to-l from-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Animated Card Container - Lower Z-Index, shifted right */}
      <div className={cn(
        "absolute right-[-4rem] top-1/2 -translate-y-1/2 transition-all duration-700 ease-out z-20",
        isHovered ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
      )}>
        <IdentityRevealCard active={isHovered} />
      </div>
    </div>
  );
};

export default IndividualIdentityCard;