"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import demandsenseLogo from "@/assets/ds-logo.svg";

const EARLY_ACCESS_URL = "https://tally.so/r/Gx4O5O";

const NAV_LINKS = [
  { label: "Real answers", id: "answers" },
  { label: "What you can ask", id: "ask" },
  { label: "Compare", id: "compare" },
  { label: "FAQ", id: "faq" },
];

const McpHeader = () => {
  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-[1216px] mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Logo + MCP tag */}
        <a
          href="https://demandsense.com"
          className="flex items-center gap-2.5 flex-shrink-0"
          aria-label="DemandSense home"
        >
          <img src={demandsenseLogo} alt="DemandSense" className="h-7 w-auto rounded" />
          <span className="inline-flex items-center rounded-md bg-blue-50 border border-blue-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-blue-600">
            MCP
          </span>
        </a>

        {/* Center: Nav links (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleScroll(link.id)}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA */}
        <Button asChild className="flex-shrink-0">
          <a href={EARLY_ACCESS_URL}>Get early access</a>
        </Button>
      </div>
    </header>
  );
};

export default McpHeader;