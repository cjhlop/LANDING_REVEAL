import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ButtonGroup from "../ButtonGroup";

type FeatureTab = {
  title: string;
  description: string;
  skeleton: React.ReactNode;
  className: string;
  features: string[];
  metrics: Array<{ value: string; label: string }>;
};

const tabs: FeatureTab[] = [
  {
    title: "Sense Demand",
    description:
      "Identify high-intent buyers across LinkedIn and your website. Track engagement signals and buying behavior in real-time.",
    skeleton: (
      <div className="relative h-full w-full">
        <img
          src="/media/audience-tuning.webp"
          alt="Audience tuning interface"
          className="h-full w-full object-cover object-left-top rounded-xl"
        />
      </div>
    ),
    className: "col-span-1 lg:col-span-2",
    features: [
      "Website visitor identification",
      "LinkedIn engagement tracking",
      "Intent signal detection",
      "Real-time buyer alerts",
    ],
    metrics: [
      { value: "95%", label: "Match accuracy" },
      { value: "2.5x", label: "Lead quality" },
    ],
  },
  {
    title: "Segment Audiences",
    description:
      "Build precise audience segments based on firmographics, behavior, and engagement. Exclude customers and non-fit accounts automatically.",
    skeleton: (
      <div className="relative h-full w-full">
        <img
          src="/media/audience-tuning-exclusion.webp"
          alt="Audience exclusion settings"
          className="h-full w-full object-cover object-left-top rounded-xl"
        />
      </div>
    ),
    className: "col-span-1 lg:col-span-2",
    features: [
      "Smart audience builder",
      "Automatic exclusions",
      "Firmographic targeting",
      "Behavioral segmentation",
    ],
    metrics: [
      { value: "40%", label: "Cost reduction" },
      { value: "3x", label: "ROAS improvement" },
    ],
  },
  {
    title: "Optimize Spend",
    description:
      "Control ad frequency and schedule campaigns for peak engagement times. Set budget caps and prevent overspend automatically.",
    skeleton: (
      <div className="relative h-full w-full">
        <img
          src="/media/frequency-cap.webp"
          alt="Frequency cap controls"
          className="h-full w-full object-cover object-left-top rounded-xl"
        />
      </div>
    ),
    className: "col-span-1 lg:col-span-2",
    features: [
      "Frequency management",
      "Smart scheduling",
      "Budget controls",
      "Waste prevention",
    ],
    metrics: [
      { value: "35%", label: "Budget saved" },
      { value: "60%", label: "Better CPL" },
    ],
  },
  {
    title: "Activate Everywhere",
    description:
      "Sync audiences to LinkedIn, Google, Facebook, and your CRM. Keep data fresh with automated daily updates.",
    skeleton: (
      <div className="relative h-full w-full">
        <img
          src="/media/ads-scheduling.webp"
          alt="Ad scheduling calendar"
          className="h-full w-full object-cover object-left-top rounded-xl"
        />
      </div>
    ),
    className: "col-span-1 lg:col-span-2",
    features: [
      "Multi-platform sync",
      "CRM integration",
      "Daily data refresh",
      "Automated workflows",
    ],
    metrics: [
      { value: "10+", label: "Integrations" },
      { value: "24h", label: "Sync frequency" },
    ],
  },
];

export function Features() {
  const [activeTab, setActiveTab] = useState<FeatureTab>(tabs[0]);

  const handleGetStarted = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

  return (
    <section className="relative w-full bg-white px-6 md:px-[112px] py-[112px]">
      <div className="max-w-[1216px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            HOW IT WORKS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight">
            Four Steps to <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Better Results</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From identifying buyers to activating campaigns—streamline your entire B2B marketing workflow.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200",
                activeTab.title === tab.title
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content Grid: 40% content / 60% image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Content Block - 40% (2 columns) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-3xl font-semibold text-gray-900 tracking-tight">
                  {activeTab.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {activeTab.description}
                </p>
              </div>

              {/* Two Column Layout: Features List + Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {/* Column 1: Features List */}
                <div className="space-y-3">
                  {activeTab.features.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Column 2: Metrics Chips */}
                <div className="space-y-4">
                  {activeTab.metrics.map((metric, idx) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.15 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                      <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                          {metric.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-4">
                <ButtonGroup
                  primaryLabel="Get started"
                  secondaryLabel="Learn more"
                  onPrimaryClick={handleGetStarted}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image Block - 60% (3 columns) */}
          <div className="lg:col-span-3 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.title + "-image"}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
              >
                {activeTab.skeleton}
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}