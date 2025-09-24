"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const features = [
  {
    id: "ads-scheduling",
    title: "Ads Scheduling",
    description: "Schedule your LinkedIn ads to run only when your audience is most active and engaged.",
    image: "/media/ads-scheduling.webp",
  },
  {
    id: "frequency-cap",
    title: "Frequency Capping",
    description: "Prevent ad fatigue by controlling how often your audience sees your advertisements.",
    image: "/media/frequency-cap.webp",
  },
  {
    id: "audience-tuning",
    title: "Audience Tuning",
    description: "Fine-tune your audience targeting based on real engagement data and performance metrics.",
    image: "/media/audience-tuning.webp",
  },
  {
    id: "audience-exclusion",
    title: "Audience Exclusion",
    description: "Automatically exclude converted prospects and low-quality audiences from your campaigns.",
    image: "/media/audience-tuning-exclusion.webp",
  },
];

export function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [imageKey, setImageKey] = useState(0); // Force image re-render for animations

  // Scroll-in animations
  const [sectionRef, sectionInView] = useInViewOnce<HTMLElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -15% 0px",
  });

  const [chipsRef, chipsInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  const [contentRef, contentInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  // Auto-switching logic
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveFeature((prev) => {
        const next = (prev + 1) % features.length;
        setImageKey(k => k + 1); // Trigger image animation
        return next;
      });
    }, 10000); // 10 seconds
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Start auto-play when section comes into view
  useEffect(() => {
    if (sectionInView && isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [sectionInView, isAutoPlaying]);

  // Handle manual chip click
  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setImageKey(k => k + 1); // Trigger image animation
    
    // Temporarily stop auto-play, then resume
    setIsAutoPlaying(false);
    stopAutoPlay();
    
    // Resume auto-play after 15 seconds of user interaction
    setTimeout(() => {
      setIsAutoPlaying(true);
      if (sectionInView) startAutoPlay();
    }, 15000);
  };

  // Pause on hover, resume on leave
  const handleMouseEnter = () => {
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    if (isAutoPlaying && sectionInView) {
      startAutoPlay();
    }
  };

  return (
    <section
      ref={sectionRef}
      className={cn(
        "w-full bg-white px-[112px] py-[112px] transition-all duration-1000 ease-out",
        sectionInView ? "opacity-100" : "opacity-0"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-labelledby="features-heading"
    >
      <div className="max-w-[1216px] mx-auto">
        {/* Header with scroll-in animation */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-800 ease-out",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            LINKEDIN ADS OPTIMIZATION
          </div>
          
          <h2 
            id="features-heading"
            className={cn(
              "text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight transition-all duration-800 ease-out delay-200",
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Smart Budget Controls & <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Optimal Ad Frequency</span>
          </h2>
          
          <p className={cn(
            "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-800 ease-out delay-400",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            AI-driven insights for maximum LinkedIn performance and ROI optimization.
          </p>
        </div>

        {/* Feature Chips with staggered animations */}
        <div 
          ref={chipsRef}
          className={cn(
            "flex flex-wrap justify-center gap-3 mb-12 transition-all duration-800 ease-out delay-600",
            chipsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          role="tablist"
          aria-label="LinkedIn Ads Optimization features"
        >
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => handleFeatureClick(index)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                activeFeature === index
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900",
                chipsInView ? `opacity-100 translate-y-0 delay-[${600 + index * 100}ms]` : "opacity-0 translate-y-4"
              )}
              role="tab"
              aria-selected={activeFeature === index}
              aria-controls={`feature-panel-${feature.id}`}
              style={{
                transitionDelay: chipsInView ? `${600 + index * 100}ms` : '0ms'
              }}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* Content Area with smooth transitions */}
        <div 
          ref={contentRef}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-800 ease-out delay-800",
            contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Left: Content */}
          <div className="space-y-6">
            <div
              key={`content-${activeFeature}`}
              className="features7-fade-in-up"
              role="tabpanel"
              id={`feature-panel-${features[activeFeature].id}`}
              aria-labelledby={`feature-tab-${features[activeFeature].id}`}
            >
              <h3 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
                {features[activeFeature].title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {features[activeFeature].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Get Started
              </button>
              <button className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </button>
            </div>
          </div>

          {/* Right: Image with smooth transitions */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl">
              {/* Progress indicator */}
              <div className="absolute top-4 right-4 flex gap-1">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      activeFeature === index ? "bg-blue-600" : "bg-blue-200"
                    )}
                  />
                ))}
              </div>

              {/* Image with smooth transitions */}
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                <img
                  key={`${activeFeature}-${imageKey}`}
                  src={features[activeFeature].image}
                  alt={`${features[activeFeature].title} interface preview`}
                  className="w-full h-auto object-cover features7-fade-in-scale"
                  loading="lazy"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-orange-400 rounded-full opacity-60" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}