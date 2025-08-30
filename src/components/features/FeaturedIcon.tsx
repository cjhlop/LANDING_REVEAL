import * as React from "react";
import { Mail, Zap, BarChart2, MessageSquare, Activity, Gauge, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeaturedIconName = "mail" | "zap" | "bar-chart-2" | "message-square" | "activity" | "gauge";

const ICON_MAP: Record<FeaturedIconName, LucideIcon> = {
  mail: Mail,
  zap: Zap,
  "bar-chart-2": BarChart2,
  "message-square": MessageSquare,
  activity: Activity,
  gauge: Gauge,
};

export type FeaturedIconProps = {
  name?: FeaturedIconName;
  className?: string;
  title?: string;
  "aria-hidden"?: boolean;
};

const pool: FeaturedIconName[] = ["mail", "zap", "bar-chart-2", "message-square", "activity", "gauge"];

const FeaturedIcon: React.FC<FeaturedIconProps> = ({ name, className, title, "aria-hidden": ariaHidden = true }) => {
  const chosen = React.useMemo<FeaturedIconName>(() => name ?? pool[Math.floor(Math.random() * pool.length)], [name]);
  const Icon = ICON_MAP[chosen];

  return (
    <div
      className={cn(
        "feature-icon h-12 w-12 rounded-xl flex items-center justify-center",
        "bg-[rgba(105,65,198,0.08)] ring-1 ring-[rgba(105,65,198,0.18)] shadow-[0_8px_20px_rgba(105,65,198,0.15)]",
        className,
      )}
      role="img"
      aria-label={title ?? chosen}
    >
      <Icon className="h-6 w-6 text-[#6941C6]" aria-hidden={ariaHidden} />
    </div>
  );
};

export default React.memo(FeaturedIcon);