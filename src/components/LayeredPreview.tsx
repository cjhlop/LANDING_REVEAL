import React from "react";

type Layer = {
  id: string;
  src: string;
  alt: string;
  z: number;
  top: string; // percentage string e.g. "16%"
  left: string; // percentage string
  width: string; // percentage string relative to container width
};

const layers: Layer[] = [
  // Base canvas
  {
    id: "Body",
    src: "/preview/Body.png",
    alt: "Body background",
    z: 0,
    top: "0%",
    left: "0%",
    width: "100%",
  },
  // Sidebar
  {
    id: "Sidebar",
    src: "/preview/Body_Sidebar.png",
    alt: "Sidebar",
    z: 10,
    top: "4%",
    left: "3%",
    width: "18%",
  },
  // Sidebar buttons (stacked within sidebar)
  {
    id: "Button_Dashboard",
    src: "/preview/Body_Sidebar_Button_Dashboard.png",
    alt: "Sidebar button — Dashboard",
    z: 20,
    top: "12%",
    left: "6%",
    width: "13%",
  },
  {
    id: "Button_Audience",
    src: "/preview/Body_Sidebar_Button_Audience.png",
    alt: "Sidebar button — Audience",
    z: 20,
    top: "19%",
    left: "6%",
    width: "13%",
  },
  {
    id: "Button_Lists",
    src: "/preview/Body_Sidebar_Button_Lists.png",
    alt: "Sidebar button — Lists",
    z: 20,
    top: "26%",
    left: "6%",
    width: "13%",
  },
  {
    id: "Button_CampaignManagement",
    src: "/preview/Body_Sidebar_Button_CampaignManagement.png",
    alt: "Sidebar button — Campaign Management",
    z: 20,
    top: "33%",
    left: "6%",
    width: "13%",
  },
  {
    id: "Button_LinkedinAdsTuning",
    src: "/preview/Body_Sidebar_Button_LinkedinAdsTuning.png",
    alt: "Sidebar button — Linkedin Ads Tuning",
    z: 20,
    top: "40%",
    left: "6%",
    width: "13%",
  },
  {
    id: "Button_Analytics",
    src: "/preview/Body_Sidebar_Button_Analytics.png",
    alt: "Sidebar button — Analytics",
    z: 20,
    top: "47%",
    left: "6%",
    width: "13%",
  },
  // Header
  {
    id: "Header",
    src: "/preview/Body_Header.png",
    alt: "Header",
    z: 15,
    top: "6%",
    left: "25%",
    width: "70%",
  },
  // Main cards
  {
    id: "ContactDetails1",
    src: "/preview/Body_ContactDetails1.png",
    alt: "Contact details 1",
    z: 30,
    top: "16%",
    left: "25%",
    width: "48%",
  },
  {
    id: "SEOinsights",
    src: "/preview/Body_SEOinsights.png",
    alt: "SEO insights",
    z: 30,
    top: "40%",
    left: "25%",
    width: "48%",
  },
  {
    id: "ContactDetails2",
    src: "/preview/Body_ContactDetails2.png",
    alt: "Contact details 2",
    z: 35,
    top: "16%",
    left: "75%",
    width: "22%",
  },
  {
    id: "ActivityInsights",
    src: "/preview/Body_ActivityInsights.png",
    alt: "Activity insights",
    z: 35,
    top: "64%",
    left: "25%",
    width: "72%",
  },
];

const LayeredPreview: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {layers.map((layer) => (
        <img
          key={layer.id}
          src={layer.src}
          alt={layer.alt}
          loading="lazy"
          className="absolute will-change-transform"
          style={{
            top: layer.top,
            left: layer.left,
            width: layer.width,
            zIndex: layer.z,
            filter:
              layer.id === "Body"
                ? "none"
                : "drop-shadow(0 4px 16px rgba(0,0,0,0.12))",
          }}
        />
      ))}
      {/* Subtle grid on top to blend with hero background */}
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