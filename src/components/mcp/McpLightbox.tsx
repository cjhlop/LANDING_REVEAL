"use client";

import * as React from "react";
import { X } from "lucide-react";

type McpLightboxProps = {
  open: boolean;
  alt: string;
  onClose: () => void;
};

const McpLightbox = ({ open, alt, onClose }: McpLightboxProps) => {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full report"
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0B1226]/85 cursor-zoom-out p-[4vh_4vw] animate-in fade-in duration-200"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-6 w-10 h-10 rounded-lg bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[min(1040px,96vw)] max-h-[92vh] w-full bg-slate-950 rounded-xl shadow-2xl overflow-hidden border border-slate-800"
      >
        <div
          className="w-full aspect-[16/11] flex items-center justify-center"
          role="img"
          aria-label={alt}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500 px-8 text-center">
            Screenshot
          </span>
        </div>
      </div>
    </div>
  );
};

export default McpLightbox;