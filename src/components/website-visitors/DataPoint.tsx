import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const DataPoint = ({ label, value, delay }: { label: string, value: string, delay: number }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn(
      "flex items-center justify-between py-2 border-b border-gray-100 last:border-0 transition-all duration-500",
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
    )}>
      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</span>
      <span className="text-sm font-semibold text-gray-900">{value}</span>
    </div>
  );
};

export default DataPoint;