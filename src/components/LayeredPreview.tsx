import React from "react";
import { usePreviewScale } from "./PreviewScaleContext";

const TOP = "4%"; // Rule 1: Header and sidebar must always share the same top edge
const SIDEBAR_LEFT = "3%";
const SIDEBAR_WIDTH = "18%";
const MAIN_LEFT = `calc(${SIDEBAR_LEFT} + ${SIDEBAR_WIDTH})`; // Rule 2: Header's left edge snug against sidebar's right edge
const RIGHT_GUTTER = "3%";

const LayeredPreview: React.FC = () => {
  const { scale } = usePreviewScale();

  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {/* Scale wrapper: scales everything uniformly with origin at top-left to preserve alignment */}
      <div
        className="absolute inset-0"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {/* Base body fills the frame with no indents */}
        <img
          src="/preview/Body.png"
          alt="Body background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />

        {/* Sidebar with no spacing between items */}
        <div
          className="absolute"
          style={{ top: TOP, left: SIDEBAR_LEFT, width: SIDEBAR_WIDTH, zIndex: 10 }}
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

        {/* Main content area flush with the sidebar */}
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

          {/* Cards grid: no gaps and no top margin */}
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
    </div>
  );
};

export default LayeredPreview;