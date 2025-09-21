"use client";
import React from "react";
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