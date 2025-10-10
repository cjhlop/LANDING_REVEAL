import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Zap, Target, TrendingUp, Shield, Sparkles } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "LinkedIn Ads Optimization",
      description:
        "Automate campaign management with smart scheduling, frequency caps, and budget controls that LinkedIn doesn't provide.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-gray-200/60",
      icon: Zap,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Website Visitor Intelligence",
      description:
        "Identify anonymous visitors, track their behavior, and understand buying intent before they fill out a form.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-gray-200/60",
      icon: Target,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Revenue Attribution",
      description:
        "Connect every touchpoint to revenue. See which campaigns, channels, and content actually drive deals.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r border-gray-200/60",
      icon: TrendingUp,
      gradient: "from-orange-500 to-orange-600",
    },
    {
      title: "Audience Sync & Activation",
      description:
        "Build audiences once, activate everywhere. Sync to LinkedIn, Google, Meta, and your CRM automatically.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none border-gray-200/60",
      icon: Shield,
      gradient: "from-green-500 to-green-600",
    },
  ];

  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white px-6 md:px-16 lg:px-24 xl:px-32 py-24 md:py-32 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-4 py-2 rounded-full text-xs font-medium mb-8 shadow-sm border border-blue-100/50 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            PLATFORM CAPABILITIES
          </div>

          <h2
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1] transition-opacity duration-700",
              headerInView ? "opacity-100" : "opacity-0"
            )}
          >
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Dominate B2B Marketing
            </span>
          </h2>

          <p
            className={cn(
              "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-opacity duration-700",
              headerInView ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: headerInView ? "200ms" : "0ms" }}
          >
            From LinkedIn optimization to revenue attribution, get the complete toolkit
            for modern B2B growth teams.
          </p>
        </div>

        {/* Features Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-6 mt-12 border border-gray-200/60 rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm shadow-xl">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  title,
  description,
  skeleton,
  className,
  icon: Icon,
  gradient,
  index,
}: {
  title: string;
  description: string;
  skeleton: React.ReactNode;
  className: string;
  icon: any;
  gradient: string;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const [cardRef, cardInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <div
      ref={cardRef}
      className={cn("relative p-8 md:p-10 group/feature", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover gradient overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover/feature:opacity-5 transition-opacity duration-500",
          `from-${gradient.split(" ")[1].replace("to-", "")} to-transparent`
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 shadow-lg transition-all duration-500",
            "bg-gradient-to-br",
            gradient,
            "group-hover/feature:scale-110 group-hover/feature:rotate-3",
            cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: cardInView ? `${index * 100}ms` : "0ms" }}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>

        {/* Title */}
        <h3
          className={cn(
            "text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight transition-all duration-700",
            "group-hover/feature:text-gray-900",
            cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: cardInView ? `${index * 100 + 100}ms` : "0ms" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "text-base md:text-lg text-gray-600 leading-relaxed mb-8 transition-all duration-700",
            cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: cardInView ? `${index * 100 + 200}ms` : "0ms" }}
        >
          {description}
        </p>

        {/* Skeleton/Visual */}
        <div
          className={cn(
            "transition-all duration-700",
            cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: cardInView ? `${index * 100 + 300}ms` : "0ms" }}
        >
          {skeleton}
        </div>
      </div>

      {/* Hover border effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500 pointer-events-none",
          "bg-gradient-to-br from-transparent via-transparent to-gray-100/50"
        )}
      />
    </div>
  );
};

const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full group">
      <div className="w-full p-6 mx-auto bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-gray-200/60 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="h-3 w-32 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full mb-2" />
              <div className="h-2 w-24 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" />
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-md" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60">
              <div className="h-2 w-16 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full mb-3" />
              <div className="h-6 w-20 bg-gradient-to-r from-blue-200 to-blue-100 rounded-lg mb-2" />
              <div className="h-2 w-12 bg-gradient-to-r from-green-200 to-green-100 rounded-full" />
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="h-32 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100/50 p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
          <div className="relative flex items-end justify-between h-full gap-2">
            {[40, 70, 45, 80, 60, 90, 55, 75].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg shadow-lg transition-all duration-500 hover:from-blue-600 hover:to-blue-500"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="relative flex flex-col items-start p-8 mx-auto bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-gray-200/60 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 w-full pb-4 border-b border-gray-200/60">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
          <Target className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="h-3 w-40 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full mb-2" />
          <div className="h-2 w-32 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />
        </div>
      </div>

      {/* Visitor Cards */}
      <div className="space-y-3 w-full">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 hover:border-purple-200 transition-all duration-300 hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 shadow-md" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-32 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full" />
              <div className="h-2 w-24 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />
            </div>
            <div className="flex gap-2">
              <div className="w-16 h-6 rounded-full bg-gradient-to-r from-green-100 to-green-50 border border-green-200" />
              <div className="w-8 h-6 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="flex gap-4 mt-6 w-full pt-4 border-t border-gray-200/60">
        <div className="flex-1 text-center p-3 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100/50">
          <div className="h-6 w-12 bg-gradient-to-r from-purple-300 to-purple-200 rounded-lg mx-auto mb-2" />
          <div className="h-2 w-16 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full mx-auto" />
        </div>
        <div className="flex-1 text-center p-3 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100/50">
          <div className="h-6 w-12 bg-gradient-to-r from-blue-300 to-blue-200 rounded-lg mx-auto mb-2" />
          <div className="h-2 w-16 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10 h-full group">
      <div className="w-full p-6 mx-auto bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-gray-200/60 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="h-3 w-36 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full mb-2" />
              <div className="h-2 w-28 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />
            </div>
          </div>
          <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-100 to-green-50 border border-green-200">
            <div className="h-2 w-16 bg-gradient-to-r from-green-400 to-green-300 rounded-full" />
          </div>
        </div>

        {/* Revenue Funnel */}
        <div className="space-y-3">
          {[
            { width: "100%", color: "from-blue-500 to-blue-400", label: "Impressions" },
            { width: "75%", color: "from-purple-500 to-purple-400", label: "Clicks" },
            { width: "45%", color: "from-orange-500 to-orange-400", label: "Leads" },
            { width: "20%", color: "from-green-500 to-green-400", label: "Deals" },
          ].map((stage, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="h-2 w-20 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />
                <div className="h-2 w-12 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />
              </div>
              <div className="h-12 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 overflow-hidden">
                <div
                  className={cn(
                    "h-full bg-gradient-to-r shadow-lg transition-all duration-500 hover:shadow-xl",
                    stage.color
                  )}
                  style={{ width: stage.width }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-200/60">
          <div className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100/50">
            <div className="h-2 w-16 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full mb-3" />
            <div className="h-8 w-24 bg-gradient-to-r from-orange-300 to-orange-200 rounded-lg" />
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100/50">
            <div className="h-2 w-16 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full mb-3" />
            <div className="h-8 w-24 bg-gradient-to-r from-green-300 to-green-200 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="relative flex gap-10 h-full group">
      <div className="w-full p-6 mx-auto bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-gray-200/60 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="h-3 w-32 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full mb-2" />
              <div className="h-2 w-24 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />
            </div>
          </div>
        </div>

        {/* Audience Source */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-md" />
            <div className="h-3 w-32 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full" />
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
          </div>
        </div>

        {/* Sync Destinations */}
        <div className="space-y-3">
          {[
            { color: "from-purple-500 to-purple-600", name: "LinkedIn" },
            { color: "from-red-500 to-red-600", name: "Google Ads" },
            { color: "from-blue-500 to-blue-600", name: "Meta Ads" },
          ].map((dest, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 hover:border-green-200 transition-all duration-300 hover:shadow-md"
            >
              <div className={cn("w-10 h-10 rounded-lg bg-gradient-to-br shadow-md", dest.color)} />
              <div className="flex-1">
                <div className="h-3 w-28 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full mb-2" />
                <div className="h-2 w-20 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div className="h-2 w-12 bg-gradient-to-r from-green-200 to-green-100 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between">
          <div className="h-2 w-32 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />
          <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-100 to-green-50 border border-green-200">
            <div className="h-2 w-16 bg-gradient-to-r from-green-400 to-green-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { SkeletonOne, SkeletonTwo, SkeletonThree, SkeletonFour };