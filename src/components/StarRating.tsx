"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type StarRatingProps = {
  count?: number;
  className?: string;
  starClassName?: string;
};

const StarRating: React.FC<StarRatingProps> = ({
  count = 5,
  className,
  starClassName,
}) => {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={cn("h-4 w-4 fill-[#A3C7FF]", starClassName)}
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 2.5z" />
        </svg>
      ))}
    </span>
  );
};

export default StarRating;