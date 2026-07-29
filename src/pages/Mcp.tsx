import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import McpHero from "@/components/mcp/McpHero";
import McpRealAnswers from "@/components/mcp/McpRealAnswers";
import McpWhatElse from "@/components/mcp/McpWhatElse";
import McpWhoFor from "@/components/mcp/McpWhoFor";
import McpCtaBand from "@/components/mcp/McpCtaBand";
import McpComparison from "@/components/mcp/McpComparison";

const Mcp = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main id="main">
        <McpHero />
        <McpRealAnswers />
        <McpWhatElse />
        <McpWhoFor />
        <McpCtaBand />
        <McpComparison />
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Mcp;
