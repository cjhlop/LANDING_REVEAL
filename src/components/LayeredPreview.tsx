import React from "react";
import { Reveal, RevealGroup } from "@/components/animate/Reveal";

// Original artboard split is 250px (sidebar) and 1190px (main) => 250:1190 over 1440.
// To cover the full preview width (no gutters), use exact proportions:
// Sidebar width = 250 / 1440 ≈ 17.361111%
// Main starts immediately after sidebar and extends to the right edge.
const TOP = "0%";
const SIDEBAR_WIDTH = "17.361111%"; // 250 / 1440
const MAIN_LEFT = SIDEBAR_WIDTH; // no left gutter, main starts at sidebar edge

const LayeredPreview: React.FC = () => {
  const [sidebarInView, setSidebarInView] = React.useState(false);

  return (
    <div className="relative w-full h-full pointer-events-none select-none">
      {/* Body element (no animation) */}
      <img
        src="/preview/Body.png"
        alt="Body background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Sidebar wrapper fills preview area */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
        <div
          className="absolute"
          style={{ top: TOP, left: "0%", width: SIDEBAR_WIDTH }}
        >
          {/* Sidebar fades in smoothly */}
          <Reveal
            as="div"
            variant="fade"
            onInView={(v) => v && setSidebarInView(true)}
          >
            <img
              src="/preview/Body_Sidebar.png"
              alt="Sidebar"
              className="block w-full h-auto"
            />
          </Reveal>

          {/* Buttons area inside the sidebar: stagger float-in from left after sidebar becomes visible */}
          <div
            className="absolute left-[8%] right-[8%]"
            style={{ top: "10px", zIndex: 20 }}
          >
            <RevealGroup
              variant="slide-left"
              active={sidebarInView}
              stepMs={90}
              startDelayMs={120}
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
            </RevealGroup>
          </div>
        </div>
      </div>

      {/* Main content wrapper fills preview area */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 15 }}>
        <div
          className="absolute"
          style={{ top: TOP, left: MAIN_LEFT, right: "0%" }}
        >
          {/* Header: subtle fade + slide-up */}
          <Reveal as="div" variant="slide-up">
            <img
              src="/preview/Body_Header.png"
              alt="Header"
              className="block w-full h-auto"
            />
          </Reveal>

          {/* Cards grid with strict 5px gaps, plus 5px indent from header (top) and sidebar (left) */}
          <div className="ml-[5px] mt-[5px]">
            {/* Stagger children gently from bottom */}
            <RevealGroup variant="slide-up" stepMs={90} startDelayMs={80}>
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
            </RevealGroup>
          </div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 w-full h-full opacity-5"
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