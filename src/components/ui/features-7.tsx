"use client";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

// Icon components defined first
const IconTablerBrandTabler = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 6L12 18"></path>
      <path d="M6 12L18 12"></path>
    </svg>
  );
};

const IconTablerEaseInOut = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3 20C3 20 7 16 12 16C17 16 21 20 21 20"></path>
      <path d="M3 4C3 4 7 8 12 8C17 8 21 4 21 4"></path>
    </svg>
  );
};

const IconTablerCurrencyDollar = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M16.7 8A3 3 0 0 0 14 6H10A3 3 0 0 0 10 12H14A3 3 0 0 1 14 18H10A3 3 0 0 1 7.3 16"></path>
      <path d="M12 3V6M12 18V21"></path>
    </svg>
  );
};

const IconTablerCloud = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M17.5 19H9A7 7 0 1 1 6.71 6.86A4.5 4.5 0 0 1 17.5 19Z"></path>
    </svg>
  );
};

const IconTablerRouteAltLeft = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M8 3H16A2 2 0 0 1 18 5V7A2 2 0 0 1 16 9H11L8 12L11 15H16A2 2 0 0 1 18 17V19A2 2 0 0 1 16 21H8"></path>
      <path d="M8 12H3"></path>
    </svg>
  );
};

const IconTablerHeadset = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3 11V15A6 6 0 0 0 9 21H10"></path>
      <path d="M21 11V15A6 6 0 0 1 15 21H14"></path>
      <path d="M19 14M19 11A7 7 0 1 0 5 11V14A1 1 0 0 0 6 15H8A1 1 0 0 0 9 14V12A1 1 0 0 0 8 11H6A1 1 0 0 0 5 12"></path>
      <path d="M19 14V12A1 1 0 0 0 18 11H16A1 1 0 0 0 15 12V14A1 1 0 0 0 16 15H18A1 1 0 0 0 19 14Z"></path>
    </svg>
  );
};

const IconTablerAdjustmentsBolt = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4 10A2 2 0 1 0 4 6A2 2 0 0 0 4 10Z"></path>
      <path d="M6 4V2M6 18V8M14 8A2 2 0 1 0 14 12A2 2 0 0 0 14 8Z"></path>
      <path d="M12 6V2M12 22V14M20 16A2 2 0 1 0 20 20A2 2 0 0 0 20 16Z"></path>
      <path d="M18 14V2M18 22V20"></path>
    </svg>
  );
};

const IconTablerHeart = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04 21.54 5.75 20.73 4.74C19.92 3.74 18.69 3.25 17.5 3.25C15.55 3.25 14.04 4.46 13 6.06C11.96 4.46 10.45 3.25 8.5 3.25C7.31 3.25 6.08 3.74 5.27 4.74C4.46 5.75 4 7.04 4 8.5C4 10.79 5.51 12.54 7 14L12 21L19 14Z"></path>
    </svg>
  );
};

// Features array now references the components defined above
const features = [
  {
    title: "Built for developers",
    description:
      "Built for engineers, developers, dreamers, thinkers and doers.",
    icon: IconTablerBrandTabler,
  },
  {
    title: "Ease of use",
    description:
      "It's as easy as using an Apple, and as expensive as buying one.",
    icon: IconTablerEaseInOut,
  },
  {
    title: "Pricing like no other",
    description:
      "Our prices are best in the market. No cap, no lock, no credit card required.",
    icon: IconTablerCurrencyDollar,
  },
  {
    title: "100% Uptime guarantee",
    description: "We just cannot be taken down by anyone.",
    icon: IconTablerCloud,
  },
  {
    title: "Multi-tenant Architecture",
    description: "You can simply share passwords instead of buying new seats",
    icon: IconTablerRouteAltLeft,
  },
  {
    title: "24/7 Customer Support",
    description:
      "We are available a 100% of the time. Atleast our AI Agents are.",
    icon: IconTablerHeadset,
  },
  {
    title: "Money back guarantee",
    description:
      "If you donot like EveryAI, we will convince you to like us.",
    icon: IconTablerAdjustmentsBolt,
  },
  {
    title: "And everything else",
    description: "I just ran out of copy ideas. Accept my sincere apologies",
    icon: IconTablerHeart,
  },
];

export const Features = () => {
  return (
    <div className="py-20 lg:py-40">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Drive more results with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">
            precision timing
          </span>
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mx-auto">
          We&apos;ve got everything you need to launch and grow your business
        </p>
      </div>
      <div className="relative z-10 py-10 max-w-7xl mx-auto">
        <div className="px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} className="group">
                <div className="mb-4 relative z-10">
                  <feature.icon className="w-10 h-10 origin-left transform-gpu text-neutral-700 dark:text-neutral-300 transition-all duration-300 ease-in-out group-hover:scale-75" />
                </div>
                <div className="text-lg font-bold mb-2 relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-100 dark:from-neutral-900 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
                  <span className="relative inline-block text-neutral-800 dark:text-neutral-100">
                    {feature.title}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs relative z-10">
                  {feature.description}
                </p>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: {
    currentTarget: EventTarget;
    clientX: number;
    clientY: number;
  }) {
    let { left, top } = (
      currentTarget as Element
    ).getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "p-4 relative overflow-hidden bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white border border-neutral-200 dark:border-neutral-800 rounded-3xl h-full",
        className
      )}
      onMouseMove={onMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none" />
      <div className="relative z-20">{children}</div>
      <Highlight className="absolute inset-0 opacity-0 group-hover:opacity-100" />
    </div>
  );
};

const Highlight = ({ className }: { className?: string }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: {
    currentTarget: EventTarget;
    clientX: number;
    clientY: number;
  }) {
    let { left, top } = (
      currentTarget as Element
    ).getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <motion.div
      className={cn(
        "pointer-events-none bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent opacity-0 transition duration-300 absolute inset-0 z-30 rounded-3xl",
        className
      )}
      style={{
        background: useMotionTemplate`
        radial-gradient(
          400px circle at ${mouseX}px ${mouseY}px,
          rgba(14, 165, 233, 0.15),
          transparent 80%
        )
      `,
      }}
      onMouseMove={onMouseMove}
    />
  );
};