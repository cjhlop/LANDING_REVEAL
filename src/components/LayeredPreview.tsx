import React from "react";

// Keep the existing layout but enforce proportional scaling between sidebar and main.
// We assume the original artboard split is 250px (sidebar) and 1190px (main) => 250:1190.
// With the current gutters (left/right = 3%), the content width is 94%.
// Sidebar width should be (250 / (250 + 1190)) * contentWidth = (250/1440) * 94% ≈ 16.319%.
// This ensures the main area is the complementary width and preserves the original ratio.

const TOP = "4%";
const LEFT_GUTTER = "3%";
const RIGHT_GUTTER = "3%";
const SIDEBAR_WIDTH = "16.319%"; // derived from 94% * (250/1440)
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
        {/* Header */}
        <img
          src="/preview/Body_Header.png"
          alt="Header"
          className="block w-full h-auto"
        />

        {/* Cards grid */}
        <div className="grid grid-cols-3 gap-0 mt-0" style={{ zIndex: 30 }}>
          <div className="col-span-2 flex flex-col gap-0">
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