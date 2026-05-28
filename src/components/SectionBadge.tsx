import React from "react";
import { cn } from "@/lib/utils";

export interface SectionBadgeProps {
  icon?: React.ElementType;
  text: React.ReactNode;
  variant?: "default" | "dark" | "outline" | "blue" | "orange" | "emerald" | "cyan" | "rose" | "purple";
  className?: string;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({ 
  icon: Icon, 
  text, 
  variant = "default",
  className 
}) => {
  const variants: Record<string, string> = {
    default: "bg-blue-50 text-blue-700 border-blue-100",
    dark: "bg-blue-950/50 text-blue-400 border-blue-800",
    outline: "bg-white text-gray-600 border-gray-200",
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    orange: "bg-orange-50 text-orange-600 border-orange-200",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-200",
    cyan: "bg-cyan-50 text-cyan-600 border-cyan-200",
    rose: "bg-rose-50 text-rose-600 border-rose-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
  };

  const currentVariant = variants[variant as keyof typeof variants] || variants.default;

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-widest shadow-sm select-none",
      currentVariant,
      className
    )}>
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {text}
    </div>
  );
};

export default SectionBadge;