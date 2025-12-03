import React from "react";
import { cn } from "@/lib/utils";

export interface SectionBadgeProps {
  icon?: React.ElementType;
  text: React.ReactNode;
  variant?: "default" | "dark" | "outline";
  className?: string;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({ 
  icon: Icon, 
  text, 
  variant = "default",
  className 
}) => {
  const variants = {
    default: "bg-blue-50 text-blue-700 border-blue-100",
    dark: "bg-blue-950/50 text-blue-400 border-blue-800",
    outline: "bg-white text-gray-600 border-gray-200"
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-widest shadow-sm select-none",
      variants[variant],
      className
    )}>
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {text}
    </div>
  );
};

export default SectionBadge;