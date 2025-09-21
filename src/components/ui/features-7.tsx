"use client";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";
import CardSwapSection from "@/components/CardSwapSection";

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
      <div className="relative">
        <CardSwapSection />
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