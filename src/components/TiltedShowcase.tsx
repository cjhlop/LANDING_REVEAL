import React from "react";
import LayeredPreview from "./LayeredPreview";

const TiltedShowcase: React.FC = () => {
  return (
    <div className="relative w-full h-[520px] md:h-[720px] overflow-visible">
      {/* Grounding shadow under the card */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[120%] h-24 pointer-events-none"
        style={{
          filter: "blur(24px)",
          background:
            "radial-gradient(70% 100% at 50% 0%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.08) 60%, rgba(0,0,0,0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Tilted container */}
      <div
        className="absolute inset-x-0 bottom-0 origin-[10%_100%] -rotate-[8deg] scale-[1.08]"
        style={{
          perspective: "1200px",
        }}
      >
        {/* Showcase frame with soft edge fade using mask to avoid hard edges */}
        <div
          className="relative w-full h-[420px] md:h-[620px] rounded-2xl bg-gray-50 ring-1 ring-black/5 overflow-hidden shadow-2xl"
          style={{
            WebkitMaskImage:
              "radial-gradient(130% 100% at 85% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.75) 78%, rgba(0,0,0,0) 100%)",
            maskImage:
              "radial-gradient(130% 100% at 85% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.75) 78%, rgba(0,0,0,0) 100%)",
          }}
          role="img"
          aria-label="PalmUI interface preview, angled"
        >
          <LayeredPreview />

          {/* Subtle vignette to mimic lighting falloff */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(110% 120% at 80% 40%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 90%)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default TiltedShowcase;