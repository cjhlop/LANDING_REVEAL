import React from "react";

type Variant = "preview" | "hero";

interface DynamicShadowProps {
  variant?: Variant;
}

const DynamicShadow: React.FC<DynamicShadowProps> = ({ variant = "preview" }) => {
  const zIndex = variant === "hero" ? 0 : 6;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex }}
      aria-hidden="true"
    >
      {/* Blue orb (#3875F6) */}
      <div
        className="absolute w-[60%] aspect-square rounded-full mix-blend-soft-light"
        style={{
          top: "-10%",
          left: "-10%",
          filter: "blur(48px)",
          background:
            "radial-gradient(circle at center, rgba(56,117,246,0.45) 0%, rgba(56,117,246,0.20) 35%, rgba(56,117,246,0) 70%)",
          animation: "orb-1 24s ease-in-out infinite alternate",
          willChange: "transform",
        }}
      />
      {/* Orange orb (#FA8C16) */}
      <div
        className="absolute w-[55%] aspect-square rounded-full mix-blend-soft-light"
        style={{
          bottom: "-15%",
          right: "-10%",
          filter: "blur(52px)",
          background:
            "radial-gradient(circle at center, rgba(250,140,22,0.40) 0%, rgba(250,140,22,0.18) 35%, rgba(250,140,22,0) 70%)",
          animation: "orb-2 30s ease-in-out infinite alternate",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default DynamicShadow;