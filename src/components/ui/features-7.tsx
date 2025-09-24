"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Zap } from "lucide-react";

const features = [
  {
    id: "ads-scheduling",
    title: "Ads Scheduling",
    description: "Schedule your LinkedIn ads to run only when your audience is most active and engaged.",
    image: "/media/ads-scheduling.webp",
    details: [
      "Automatically schedule ads based on audience activity patterns",
      "Optimize ad delivery across different time zones",
      "Prevent budget waste during low-engagement periods",
      "Smart pause/resume functionality based on performance data"
    ]
  },
  {
    id: "frequency-cap",
    title: "Frequency Capping",
    description: "Control how often your audience sees your advertisements to prevent ad fatigue.",
    image: "/media/frequency-cap.webp",
    details: [
      "Set intelligent frequency limits per audience segment",
      "Prevent ad fatigue with smart exposure controls",
      "Monitor frequency impact on engagement rates",
      "Automatic adjustment based on performance metrics"
    ]
  },
  {
    id: "audience-tuning",
    title: "Audience Tuning",
    description: "Fine-tune your audience targeting based on real engagement data and performance metrics.",
    image: "/media/audience-tuning.webp",
    details: [
      "Analyze audience behavior patterns for better targeting",
      "Dynamic optimization based on real-time data",
      "Expand reach with lookalike audience creation",
      "Advanced demographic and firmographic filtering"
    ]
  },
  {
    id: "audience-exclusion",
    title: "Audience Exclusion",
    description: "Exclude audiences that aren't converting to optimize your ad spend and improve ROI.",
    image: "/media/audience-tuning-exclusion.webp",
    details: [
      "Smart exclusion of non-converting audience segments",
      "Automatic blacklist creation based on performance",
      "Budget optimization through strategic exclusions",
      "Real-time audience quality scoring and filtering"
    ]
  }
];

export function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Scroll animations
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });
  
  const [chipsRef, chipsInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.5,
    rootMargin: "0px 0px -10% 0px",
  });
  
  const [contentRef, contentInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -10% 0px",
  });

  // Auto-switching logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    intervalRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 10000); // 10 seconds
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Handle manual chip selection
  const handleChipClick = (index: number) => {
    setActiveFeature(index);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    
    // Resume auto-play after 30 seconds of inactivity
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 30000);
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 10000);
    }
  };

  return (
    <section 
      className="w-full bg-white px-6 md:px-10 lg:px-[112px] py-16 md:py-20 lg:py-[112px] relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header */}
      <div ref={headerRef} className="text-center mb-16">
        <div 
          className={cn(
            "inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100 transition-all duration-700 ease-out",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Zap className="h-4 w-4" />
          LINKEDIN ADS OPTIMIZATION
        </div>
        
        <h2 
          className={cn(
            "text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight transition-all duration-700 ease-out",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: headerInView ? '200ms' : '0ms' }}
        >
          Advanced <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">LinkedIn Ads</span> Control
        </h2>
        
        <p 
          className={cn(
            "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: headerInView ? '400ms' : '0ms' }}
        >
          Take complete control of your LinkedIn advertising with advanced scheduling, frequency management, and audience optimization tools.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Feature Chips */}
        <div ref={chipsRef} className="flex flex-wrap justify-center gap-3 mb-12">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => handleChipClick(index)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ease-out relative overflow-hidden",
                "transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                activeFeature === index
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900",
                // Staggered entrance animation
                chipsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ 
                transitionDelay: chipsInView ? `${index * 100 + 600}ms` : '0ms' 
              }}
            >
              {/* Active chip progress indicator */}
              {activeFeature === index && isAutoPlaying && (
                <div 
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-300 animate-progress-bar"
                  style={{ 
                    animation: 'progress-bar 10s linear infinite',
                    width: '100%'
                  }}
                />
              )}
              {feature.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <div 
              key={`content-${activeFeature}`}
              className={cn(
                "space-y-6 transition-all duration-700 ease-out",
                contentInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              )}
              style={{ transitionDelay: contentInView ? '800ms' : '0ms' }}
            >
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
                  {features[activeFeature].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {features[activeFeature].description}
                </p>
              </div>
              
              <ul className="space-y-3">
                {features[activeFeature].details.map((detail, index) => (
                  <li 
                    key={index}
                    className={cn(
                      "flex items-start gap-3 transition-all duration-500 ease-out",
                      contentInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    )}
                    style={{ 
                      transitionDelay: contentInView ? `${1000 + index * 100}ms` : '0ms' 
                    }}
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2.5" />
                    <span className="text-gray-700 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div 
              className={cn(
                "relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-out",
                contentInView ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
              )}
              style={{ transitionDelay: contentInView ? '1000ms' : '0ms' }}
            >
              {/* Image with smooth transition */}
              <div className="relative aspect-[4/3] bg-gray-100">
                {features.map((feature, index) => (
                  <img
                    key={feature.id}
                    src={feature.image}
                    alt={`${feature.title} interface`}
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
                      activeFeature === index 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-105"
                    )}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ))}
                
                {/* Subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
              
              {/* Feature indicator */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <span className="text-sm font-medium text-gray-900">
                  {features[activeFeature].title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}