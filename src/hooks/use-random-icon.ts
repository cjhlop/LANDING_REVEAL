import { useMemo } from "react";
import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  List,
  Megaphone,
  Linkedin,
  BarChart3,
  AlertCircle,
  Settings,
  Layers,
  Folder,
  Grid2x2,
  SquarePen,
  Rocket,
  ChartLine,
  FileDigit,
  Target,
} from "lucide-react";

const ICON_POOL: LucideIcon[] = [
  LayoutDashboard,
  Users,
  List,
  Megaphone,
  Linkedin,
  BarChart3,
  AlertCircle,
  Settings,
  Layers,
  Folder,
  Grid2x2,
  SquarePen,
  Rocket,
  ChartLine,
  FileDigit,
  Target,
];

function hashStringToIndex(seed: string, modulo: number) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash) % modulo;
}

/**
 * Returns a stable "random" icon from the pool based on the provided seed.
 * If no seed is provided, falls back to a default.
 */
export function useRandomIcon(seed?: string): LucideIcon {
  return useMemo(() => {
    const index = hashStringToIndex(seed ?? "default-seed", ICON_POOL.length);
    return ICON_POOL[index] ?? LayoutDashboard;
  }, [seed]);
}