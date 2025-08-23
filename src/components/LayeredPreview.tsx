import React from "react";

// Ensure internal Body elements fill the entire Body plane (no outer gaps).
// Keep header snug to the sidebar.
// Maintain a strict 5px indent for the card grid from both the sidebar (left) and the header (top).
// Preserve sidebar:main proportion from original artboard (250:1190) without gutters.
// Sidebar width = 250 / 1440 ≈ 17.361%

const TOP = "0";
const LEFT_GUTTER = "0";
const RIGHT_GUTTER = "0";
const SIDEBAR_WIDTH = "17.361%";
const MAIN_LEFT = `calc(${LEFT_GUTTER} + ${SIDEBAR_WIDTH})`;

const LayeredPreview: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {/* Base body fills the frame */}
      <img
        src="/preview/Body.png"
        alt="Body background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Sidebar */}
      <div
        className="absolute"
        style={{ top: TOP, left: LEFT_GUTTER, width: SIDEBAR_WIDTH, zIndex: 10 }}
      >
        <img
          src="/preview/Body_Sidebar.png"
          alt="Sidebar"
          className="block w-full h-auto"
        />
        {/* Buttons area inside the sidebar */}
        <div
          className="absolute left-[8%] right-[8%]"
          style={{ top: "12%", zIndex: 20 }}
        >
          <div className="flex flex-col gap-0">
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

      {/* Main content area */}
      <div
        className="absolute"
        style={{ top: TOP, left: MAIN_LEFT, right: RIGHT_GUTTER, zIndex: 15 }}
      >
        {/* Header (snug against the sidebar) */}
        <img
          src="/preview/Body_Header.png"
          alt="Header"
          className="block w-full h-auto"
        />

        {/* Cards grid with strict 5px gaps, plus 5px indent from header (top) and sidebar (left) */}
        <div className="ml-[5px] mt-[5px]">
          <div className="grid grid-cols-3 gap-[5px]" style={{ zIndex: 30 }}>
            <div className="col-span-2 flex flex-col gap-[5px]">
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