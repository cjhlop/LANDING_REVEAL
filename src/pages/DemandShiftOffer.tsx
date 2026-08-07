import { useEffect } from "react";
import dsLogo from "@/assets/ds-logo.svg";
import Hero from "@/components/demandshift/Hero";
import HowItWorks from "@/components/demandshift/HowItWorks";
import UseCasesIntro from "@/components/demandshift/UseCasesIntro";
import UseCaseEngagedAccounts from "@/components/demandshift/usecases/UseCaseEngagedAccounts";
import UseCaseRevenueAttribution from "@/components/demandshift/usecases/UseCaseRevenueAttribution";
import UseCaseAdOptimization from "@/components/demandshift/usecases/UseCaseAdOptimization";
import McpEarlyAccess from "@/components/demandshift/McpEarlyAccess";
import FinalCta from "@/components/demandshift/FinalCta";

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        height: 72,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      <div
        className="mx-auto flex h-full items-center"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24 }}
      >
        <img src={dsLogo} alt="DemandSense" style={{ height: 22 }} />
      </div>
    </header>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer style={{ background: "#0f0f13", padding: "48px 24px" }}>
      <div className="flex flex-col items-center gap-4 text-center">
        <img
          src={dsLogo}
          alt="DemandSense"
          style={{ height: 20, filter: "brightness(0) invert(1)" }}
        />
        <p style={{ fontSize: 13, color: "#64748b" }}>© DemandSense 2026</p>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */
const DemandShiftOffer = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "The DemandShift Offer | DemandSense";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        background: "#fff",
        overflowX: "hidden",
      }}
    >
      <Header />
      <main>
        {/* Section 1 — Hero */}
        <Hero />
        {/* Section 2 — How the system works */}
        <HowItWorks />
        {/* Section 3 — Use cases (intro header; blocks continue in same section) */}
        <UseCasesIntro />
        {/* Use case 1 — Engaged account visibility */}
        <UseCaseEngagedAccounts />
        {/* Use case 2 — Revenue attribution */}
        <UseCaseRevenueAttribution />
        {/* Use case 3 — Ad optimization */}
        <UseCaseAdOptimization />
        {/* Section — MCP early access (dark band) */}
        <McpEarlyAccess />
        {/* Section 8 — Final CTA */}
        <FinalCta />
        {/* Further sections are added one at a time from exact copy provided by
            the client. No headline, paragraph, stat, company name, person name,
            or number is written here without being supplied verbatim. */}
      </main>
      <Footer />
    </div>
  );
};

export default DemandShiftOffer;
