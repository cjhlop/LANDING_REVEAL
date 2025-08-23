import React, { useEffect, useMemo, useRef, useState } from "react";

const BODY_SRC = "/preview/Body.png";

type Size = { w: number; h: number };

const useNaturalImageSize = (src: string) => {
  const [size, setSize] = useState<Size | null>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setSize({ w: img.naturalWidth, h: img.naturalHeight });
    img.src = src;
    return () => {
      // no cleanup needed for simple image load
    };
  }, [src]);

  return size;
};

const useElementSize = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState<Size>({ w: 0, h: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        setSize({ w: cr.width, h: cr.height });
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return { ref, size };
};

const LayeredPreview: React.FC = () => {
  const { ref: containerRef, size: container } = useElementSize<HTMLDivElement>();
  const natural = useNaturalImageSize(BODY_SRC);

  // Compute cover-fit transform so canvas fills the container without indents
  const transform = useMemo(() => {
    if (!natural || container.w === 0 || container.h === 0) {
      return { scale: 1, dx: 0, dy: 0 };
    }
    const scale = Math.max(container.w / natural.w, container.h / natural.h);
    const displayedW = natural.w * scale;
    const displayedH = natural.h * scale;
    const dx = (container.w - displayedW) / 2;
    const dy = (container.h - displayedH) / 2;
    return { scale, dx, dy };
  }, [natural, container.w, container.h]);

  // Fallback: until we know the natural size, fill with just the base image
  const notReady = !natural;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      {notReady ? (
        <img
          src={BODY_SRC}
          alt="Body background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
      ) : (
        // Canvas: positioned in natural pixel space then scaled/translated to cover
        <div
          className="relative"
          style={{
            width: natural.w,
            height: natural.h,
            transform: `translate(${transform.dx}px, ${transform.dy}px) scale(${transform.scale})`,
            transformOrigin: "top left",
          }}
        >
          {/* Base body (no rounding, covers the canvas exactly) */}
          <img
            src={BODY_SRC}
            alt="Body background"
            className="absolute top-0 left-0 w-full h-full"
            style={{ zIndex: 0 }}
          />

          {/* Sidebar with 5px vertical spacing for items */}
          <div
            className="absolute"
            style={{ top: "4%", left: "3%", width: "18%", zIndex: 10 }}
          >
            <img
              src="/preview/Body_Sidebar.png"
              alt="Sidebar"
              className="block w-full h-auto"
            />
            {/* Buttons area inside the sidebar */}
            <div
              className="absolute left-[8%] right-[8%]"
              style={{ top: "14%", zIndex: 20 }}
            >
              <div className="flex flex-col gap-[5px]">
                <img
                  src="/preview/Body_Sidebar_Button_Dashboard.png"
                  alt="Sidebar button — Dashboard"
                  className="block w-full h-auto"
                />
                <img
                  src="/preview/Body_Sidebar_Button_Audience.png"
                  alt="Sidebar button — Audience"
                  className="block w-full h-auto"
                />
                <img
                  src="/preview/Body_Sidebar_Button_Lists.png"
                  alt="Sidebar button — Lists"
                  className="block w-full h-auto"
                />
                <img
                  src="/preview/Body_Sidebar_Button_CampaignManagement.png"
                  alt="Sidebar button — Campaign Management"
                  className="block w-full h-auto"
                />
                <img
                  src="/preview/Body_Sidebar_Button_LinkedinAdsTuning.png"
                  alt="Sidebar button — Linkedin Ads Tuning"
                  className="block w-full h-auto"
                />
                <img
                  src="/preview/Body_Sidebar_Button_Analytics.png"
                  alt="Sidebar button — Analytics"
                  className="block w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Main content area laid out with grid to prevent overlap */}
          <div
            className="absolute"
            style={{ top: "6%", left: "25%", right: "3%", zIndex: 15 }}
          >
            {/* Header */}
            <img
              src="/preview/Body_Header.png"
              alt="Header"
              className="block w-full h-auto"
            />

            {/* Cards grid: left column (2/3), right column (1/3), full-width bottom */}
            <div className="grid grid-cols-3 gap-3 mt-3" style={{ zIndex: 30 }}>
              <div className="col-span-2 flex flex-col gap-3">
                <img
                  src="/preview/Body_ContactDetails1.png"
                  alt="Contact details 1"
                  className="block w-full h-auto"
                />
                <img
                  src="/preview/Body_SEOinsights.png"
                  alt="SEO insights"
                  className="block w-full h-auto"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/preview/Body_ContactDetails2.png"
                  alt="Contact details 2"
                  className="block w-full h-auto"
                />
              </div>
              <div className="col-span-3">
                <img
                  src="/preview/Body_ActivityInsights.png"
                  alt="Activity insights"
                  className="block w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subtle grid overlay (covers the whole workspace without adding indents) */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          zIndex: 5,
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default LayeredPreview;