"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { ScanFace, CheckCircle2, ArrowRight, Building2, UserCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionBadge from "./SectionBadge";

const WebIDSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [step, setStep] = React.useState(0);

  // Cycle through the identification steps for the visual demo
  React.useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section 
      ref={ref}
      className="w-full bg-white px-8 md:px-[112px] py-24 md:py-32 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div className="space-y-8">
          <div className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={ScanFace} text="WebID™ Technology" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Identify the <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Anonymous Visitors</span> Researching Your Brand
          </h2>

          <p className={cn(
            "text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Stop guessing who's on your site. WebID™ unmasks anonymous traffic, revealing the companies and decision-makers showing high buying intent—before they even fill out a form.
          </p>

          <ul className={cn(
            "space-y-4 transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {[
              "Identify 30-40% of anonymous B2B traffic",
              "See exact names, titles, and verified emails",
              "Sync high-intent leads directly to LinkedIn Ads",
              "GDPR & CCPA compliant identification"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button size="lg" className="group">
              Start Identifying Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right: The "Unmasking" Animation */}
        <div className={cn(
          "relative aspect-square bg-gray-50 rounded-[32px] border border-gray-200 p-8 md:p-12 flex flex-col justify-center items-center overflow-hidden transition-all duration-1000 delay-300",
          inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="w-full max-w-md space-y-8 relative z-10">
            
            {/* Stage 0: Anonymous */}
            <div className={cn(
              "w-full bg-white rounded-2xl border p-5 shadow-sm transition-all duration-700 ease-in-out",
              step === 0 ? "border-blue-200 ring-4 ring-blue-500/5 scale-105" : "opacity-40 scale-95 blur-[1px]"
            )}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 bg-gray-100 rounded animate-pulse" />
                  <div className="h-3 w-24 bg-gray-50 rounded" />
                </div>
                <Badge variant="outline" className="text-[10px] uppercase tracking-widest">Anonymous</Badge>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-px h-8 bg-gradient-to-b from-gray-200 to-blue-500" />
            </div>

            {/* Stage 1: Company Identified */}
            <div className={cn(
              "w-full bg-white rounded-2xl border p-5 shadow-md transition-all duration-700 ease-in-out",
              step === 1 ? "border-blue-400 ring-4 ring-blue-500/10 scale-105" : "opacity-40 scale-95 blur-[1px]"
            )}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Stripe, Inc.</div>
                  <div className="text-xs text-blue-600 font-medium">Fintech • 5,000+ Employees</div>
                </div>
                <Badge className="bg-blue-50 text-blue-700 border-blue-100">Company Match</Badge>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-emerald-500" />
            </div>

            {/* Stage 2: Person Identified */}
            <div className={cn(
              "w-full bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl border p-5 shadow-xl transition-all duration-700 ease-in-out",
              step === 2 ? "border-emerald-400 ring-4 ring-emerald-500/10 scale-105" : "opacity-40 scale-95 blur-[1px]"
            )}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg">
                  <UserCheck className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Sarah Jenkins</div>
                  <div className="text-xs text-emerald-600 font-medium">VP of Marketing • sarah@stripe.com</div>
                </div>
                <Badge className="bg-emerald-500 text-white border-0">Verified Lead</Badge>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WebIDSection;