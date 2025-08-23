import React, { useEffect, useRef, useState } from "react";

const LayeredPreview: React.FC = () => {
  // Measure Analytics button height and use it for other sidebar items
  const analyticsRef = useRef<HTMLImageElement | null>(null);
  const [sidebarButtonHeight, setSidebarButtonHeight] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const img = analyticsRef.current;
    if (!img) return;

    const update = () => {
      const rect = img.getBoundingClientRect();
      if (rect.height > 0) setSidebarButtonHeight(rect.height);
    };

    if (img.complete) update();
    img.addEventListener("load", update);
    window.addEventListener("resize", update);

    return () => {
      img.removeEventListener("load", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {/* Base body */}
      <img
        src="/preview/Body.png"
        alt="Body background"
        className="absolute top-0 left-0 w-full"
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
            {/* Non-analytics buttons auto-fit to the analytics height */}
            {[
              {
                src: "/preview/Body_Sidebar_Button_Dashboard.png",
                alt: "Sidebar button — Dashboard",
              },
              {
                src: "/preview/Body_Sidebar_Button_Audience.png",
                alt: "Sidebar button — Audience",
              },
              {
                src: "/preview/Body_Sidebar_Button_Lists.png",
                alt: "Sidebar button — Lists",
              },
              {
                src: "/preview/Body_Sidebar_Button_CampaignManagement.png",
                alt: "Sidebar button — Campaign Management",
              },
              {
                src: "/preview/Body_Sidebar_Button_LinkedinAdsTuning.png",
                alt: "Sidebar button — Linkedin Ads Tuning",
              },
            ].map((btn) => (
              <div
                key={btn.alt}
                className="w-full"
                style={{
                  height:
                    sidebarButtonHeight !== null
                      ? `${sidebarButtonHeight}px`
                      : undefined,
                }}
              >
                <img
                  src={btn.src}
                  alt={btn.alt}
                  className="block w-full h-full object-contain"
                />
              </div>
            ))}

            {/* Analytics stays as-is; acts as the reference height */}
            <img
              ref={analyticsRef}
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

      {/* Subtle grid overlay */}
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