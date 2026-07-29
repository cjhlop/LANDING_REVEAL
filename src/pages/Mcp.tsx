import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import McpHero from "@/components/mcp/McpHero";
import McpRealAnswers from "@/components/mcp/McpRealAnswers";

const Mcp = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main id="main">
        <McpHero />
        <McpRealAnswers />
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Mcp;
