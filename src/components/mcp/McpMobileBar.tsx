"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const EARLY_ACCESS_URL = "https://tally.so/r/Gx4O5O";

const McpMobileBar = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const anchor = document.getElementById("mbar-anchor");
    if (!anchor || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        setShow(e.boundingClientRect.top < 0);
      });
    });
    io.observe(anchor);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={cn(
        "fixed left-0 right-0 bottom-0 z-[60] md:hidden bg-white border-t border-gray-200 px-4 py-3 shadow-[0_-6px_20px_-12px_rgba(20,34,71,0.3)] transition-transform duration-300",
        "pb-[calc(0.75rem+env(safe-area-inset-bottom))]",
        show ? "translate-y-0" : "translate-y-full"
      )}
    >
      <Button variant="hero" className="w-full" asChild>
        <a href={EARLY_ACCESS_URL}>Request early access</a>
      </Button>
    </div>
  );
};

export default McpMobileBar;