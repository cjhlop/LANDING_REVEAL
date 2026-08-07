import type { ReactNode } from "react";
import { useScrollReveal } from "./useScrollReveal";

/**
 * Alternating 50/50 use-case block. Text on one side, visual on the other.
 * `reverse` puts the visual on the left. 80px vertical padding, 64px gap,
 * vertically centered.
 */
export default function SplitBlock({
  children,
  visual,
  reverse = false,
  background = "#ffffff",
}: {
  children: ReactNode;
  visual: ReactNode;
  reverse?: boolean;
  background?: string;
}) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div style={{ background }}>
      <div
        ref={revealRef}
        className="mx-auto grid grid-cols-1 items-center lg:grid-cols-2"
        style={{
          maxWidth: 1180,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 80,
          paddingBottom: 80,
          columnGap: 64,
          rowGap: 40,
        }}
      >
        <div
          data-reveal
          style={{ order: reverse ? 2 : 1 }}
          className={reverse ? "lg:order-2" : "lg:order-1"}
        >
          {children}
        </div>
        <div
          data-reveal
          style={{ order: reverse ? 1 : 2 }}
          className={reverse ? "lg:order-1" : "lg:order-2"}
        >
          {visual}
        </div>
      </div>
    </div>
  );
}
