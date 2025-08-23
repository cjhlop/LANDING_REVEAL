import React from "react";
import useInView from "@/hooks/use-in-view";

// Original artboard split is 250px (sidebar) and 1190px (main) => 250:1190 over 1440.
// To cover the full preview width (no gutters), use exact proportions:
// Sidebar width = 250 / 1440 ≈ 17.361111%
// Main starts immediately after sidebar and extends to the right edge.
const TOP = "0%";
const SIDEBAR_WIDTH = "17.361111%"; // 250 / 1440
const MAIN_LEFT = SIDEBAR_WIDTH; // no left gutter, main starts at sidebar edge

const LayeredPreview: React.FC = () => {
  // Sidebar visibility controls the staggered appearance of its inner buttons
  const { ref: sidebarRef, inView: sidebarVisible } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
    once: true,
  });

  // Main content group visibility
  const { ref: mainRef, inView: mainVisible } = useInView<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
    once: true,
  });

  // Sidebar buttons map (staggered)
  const sidebarButtons = React.useMemo(
    () => [
      { src: "/preview/Body_Sidebar_Button_Dashboard.png", alt: "Sidebar button — Dashboard" },
      { src: "/preview/Body_Sidebar_Button_Audience.png", alt: "Sidebar button — Audience" },
      { src: "/preview/Body_Sidebar_Button_Lists.png", alt: "Sidebar button — Lists" },
      { src: "/preview/Body_Sidebar_Button_CampaignManagement.png", alt: "Sidebar button — Campaign Management" },
      { src: "/preview/Body_Sidebar_Button_LinkedinAdsTuning.png", alt: "Sidebar button — Linkedin Ads Tuning" },
      { src: "/preview/Body_Sidebar_Button_Analytics.png", alt: "Sidebar button — Analytics" },
    ],
    [],
  );

  // Main content elements map (staggered)
  const mainItems = React.useMemo(
    () => [
      {
        key: "contact-1",
        src: "/preview/Body_ContactDetails1.png",
        alt: "Contact details 1",
        className: "col-span-2 flex flex-col gap-[5px]",
        inner: true,
      },
      {
        key: "contact-2",
        src: "/preview/Body_ContactDetails2.png",
        alt: "Contact details 2",
        className: "col-span-1",
      },
      {
        key: "seo",
        src: "/preview/Body_SEOinsights.png",
        alt: "SEO insights",
        className: "",
        innerOf: "contact-1",
      },
      {
        key: "activity",
        src: "/preview/Body_ActivityInsights.png",
        alt: "Activity insights",
        className: "col-span-3",
        fadeOnly: true,
      },
    ],
    [],
  );

  return (
    <div className="relative w-full h-full pointer-events-none select-none">
      {/* Base body fills the frame (no animation) */}
      <img
        src="/preview/Body.png"
        alt="Body background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Sidebar wrapper fills preview area */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
        <div
          className={`absolute reveal reveal-fade ${sidebarVisible ? "reveal-visible" : ""}`}
          ref={sidebarRef}
          style={{ top: TOP, left: "0%", width: SIDEBAR_WIDTH }}
        >
          <img
            src="/preview/Body_Sidebar.png"
            alt="Sidebar"
            className="block w-full h-auto"
            style={{ transitionDuration: "500ms" }}
          />
          {/* Buttons area inside the sidebar */}
          <div
            className="absolute left-[8%] right-[8%]"
            style={{ top: "10px", zIndex: 20 }}
          >
            <div className="flex flex-col gap-0">
              {sidebarButtons.map((btn, idx) => (
                <img
                  key={btn.alt}
                  src={btn.src}
                  alt={btn.alt}
                  className={`block w-full h-auto reveal reveal-left ${sidebarVisible ? "reveal-visible" : ""}`}
                  style={{
                    transitionDuration: "550ms",
                    transitionDelay: `${120 * idx + 100}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main content wrapper fills preview area */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 15 }}>
        <div
          className="absolute"
          style={{ top: TOP, left: MAIN_LEFT, right: "0%" }}
          ref={mainRef}
        >
          {/* Header (slides up in) */}
          <img
            src="/preview/Body_Header.png"
            alt="Header"
            className={`block w-full h-auto reveal reveal-up ${mainVisible ? "reveal-visible" : ""}`}
            style={{ transitionDuration: "500ms", transitionDelay: "80ms" }}
          />

          {/* Cards grid with strict 5px gaps, plus 5px indent from header (top) and sidebar (left) */}
          <div className="ml-[5px] mt-[5px]">
            <div className="grid grid-cols-3 gap-[5px]" style={{ zIndex: 30 }}>
              {/* Left column: contact-1 group with SEO insights stacked */}
              <div className="col-span-2 flex flex-col gap-[5px]">
                <img
                  src="/preview/Body_ContactDetails1.png"
                  alt="Contact details 1"
                  className={`block w-full h-auto reveal reveal-left ${mainVisible ? "reveal-visible" : ""}`}
                  style={{ transitionDuration: "600ms", transitionDelay: "140ms" }}
                />
                <img
                  src="/preview/Body_SEOinsights.png"
                  alt="SEO insights"
                  className={`block w-full h-auto reveal reveal-left ${mainVisible ? "reveal-visible" : ""}`}
                  style={{ transitionDuration: "600ms", transitionDelay: "260ms" }}
                />
              </div>

              {/* Right column: contact-2 */}
              <div className="col-span-1">
                <img
                  src="/preview/Body_ContactDetails2.png"
                  alt="Contact details 2"
                  className={`block w-full h-auto reveal reveal-left ${mainVisible ? "reveal-visible" : ""}`}
                  style={{ transitionDuration: "600ms", transitionDelay: "200ms" }}
                />
              </div>

              {/* Bottom full-width: activity insights */}
              <div className="col-span-3">
                <img
                  src="/preview/Body_ActivityInsights.png"
                  alt="Activity insights"
                  className={`block w-full h-auto reveal reveal-fade ${mainVisible ? "reveal-visible" : ""}`}
                  style={{ transitionDuration: "650ms", transitionDelay: "340ms" }}
                />
              </div>
            </div>
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