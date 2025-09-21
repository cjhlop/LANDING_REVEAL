import * as React from "react";
import { cn } from "@/lib/utils";

type FeaturesProps = {
  className?: string;
};

const SectionHeader: React.FC<{
  title: string;
  eyebrow?: string;
  children?: React.ReactNode;
}> = ({ title, eyebrow, children }) => {
  return (
    <header className="max-w-3xl">
      {eyebrow ? (
        <p className="text-[12px] leading-5 tracking-[1.2px] uppercase text-[#7C7C7C] font-['DM Mono']">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-[32px] leading-[120%] tracking-[-0.9px] text-black font-medium">
        {title}
      </h2>
      {children}
    </header>
  );
};

/**
 * Features
 * Includes the "LinkedIn Ads Optimization" section with the phrase:
 * "Drive more results with precision timing" where "precision timing"
 * is styled using a linear gradient from blue (#3875F6) to light blue (#A3C7FF).
 */
export const Features: React.FC<FeaturesProps> = ({ className }) => {
  return (
    <section
      id="linkedin-ads"
      className={cn("w-full bg-white px-[112px] py-[64px]", className)}
      aria-labelledby="linkedin-ads-title"
    >
      <div className="max-w-[1216px] mx-auto">
        <SectionHeader eyebrow="LinkedIn Ads Optimization" title="Optimize what matters most" />
        <p className="mt-4 text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C] max-w-2xl">
          Drive more results with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3875F6] to-[#A3C7FF] font-semibold">
            precision timing
          </span>
          . Automatically schedule campaigns to run when your audience is most active,
          reduce waste during low-engagement hours, and protect your budget.
        </p>

        {/* Simple list to provide minimal supportive context (kept lightweight) */}
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-[14px] leading-[150%] tracking-[-0.2px]">
          <li className="rounded-xl border border-gray-200 p-4 bg-gray-50/60">
            Smart scheduling based on engagement patterns
          </li>
          <li className="rounded-xl border border-gray-200 p-4 bg-gray-50/60">
            Pause windows to protect budget off-hours
          </li>
          <li className="rounded-xl border border-gray-200 p-4 bg-gray-50/60">
            Time zone-aware delivery for global reach
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;