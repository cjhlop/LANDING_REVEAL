import React from "react";
import DynamicBorderCard from "@/components/DynamicBorderCard";

const Showcase: React.FC = () => {
  return (
    <section
      id="showcase"
      className="w-full bg-[#101010] py-24 px-6 md:px-12 lg:px-16 xl:px-20"
      role="region"
      aria-labelledby="showcase-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex items-center justify-center">
          <DynamicBorderCard className="w-[300px] h-[400px] md:w-[360px] md:h-[460px]">
            <h2
              id="showcase-title"
              className="relative z-[3] text-white text-2xl font-semibold tracking-tight"
            >
              Dynamic-Border
            </h2>
          </DynamicBorderCard>
        </div>
      </div>
    </section>
  );
};

export default Showcase;