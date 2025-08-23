import React from "react";
import { Button } from "@/components/ui/button";
import { usePreviewScale } from "./PreviewScaleContext";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const STEP = 0.1; // 10%
const MIN = 0.5; // 50%
const MAX = 2.0; // 200%

const ScaleControls: React.FC = () => {
  const { scale, setScale } = usePreviewScale();

  const decrease = () => setScale(clamp(Number((scale - STEP).toFixed(2)), MIN, MAX));
  const increase = () => setScale(clamp(Number((scale + STEP).toFixed(2)), MIN, MAX));
  const percent = Math.round(scale * 100);

  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-gray-200">
      <Button variant="outline" size="sm" onClick={decrease} className="h-7 px-2">
        −10%
      </Button>
      <div className="text-sm w-14 text-center tabular-nums">{percent}%</div>
      <Button variant="outline" size="sm" onClick={increase} className="h-7 px-2">
        +10%
      </Button>
    </div>
  );
};

export default ScaleControls;