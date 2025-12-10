import React from "react";
import { cn } from "@/lib/utils";
import { Fingerprint } from "lucide-react";
import IdentityRevealCard from "./IdentityRevealCard";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const IndividualIdentityCard = () => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.4, // Trigger when 40% visible
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <div 
      ref={ref}
      className="md:col-span-2 bg-[#0F2043] rounded-3xl p-8 md:px-12 md:py-10 border border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative min-h-[340px]"
    >
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 max-w-[45%]">
        <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-900/50">
          <Fingerprint className="h-7 w-7" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-3">Individual Identity</h3>
        <p className="text-lg text-blue-200 leading-relaxed">
          Stop guessing. See the exact names, job titles, and verified contact details of the people browsing your site right now.
        </p>
      </div>
      
      {/* Visual decoration */}
      <div className="absolute right-0 bottom-0 w-2/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Card Container */}
      <div className={cn(
        "absolute right-6 bottom-6 transition-all duration-700 ease-out z-20",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}>
        <IdentityRevealCard active={inView} />
      </div>
    </div>
  );
};

export default IndividualIdentityCard;