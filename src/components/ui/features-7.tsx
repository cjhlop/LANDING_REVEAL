"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Target, Users, Shield, ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useInViewOnce } from '@/hooks/use-in-view-once';

const features = [
  {
    id: 'scheduling',
    icon: Clock,
    title: 'Smart Ad Scheduling',
    subtitle: 'Precision Timing',
    description: 'AI-powered scheduling that identifies peak engagement windows and automatically optimizes ad delivery.',
    outcome: 'Reduce wasted spend by 40%',
    color: 'from-blue-500 to-cyan-400',
    accentColor: 'bg-blue-500',
    stats: { metric: 'CPM Reduction', value: '40%' },
    image: '/media/ads-scheduling.webp'
  },
  {
    id: 'frequency',
    icon: Target,
    title: 'Intelligent Frequency Cap',
    subtitle: 'Smart Controls',
    description: 'Dynamic frequency management that prevents ad fatigue while maintaining optimal exposure.',
    outcome: 'Boost CTR by 35%',
    color: 'from-purple-500 to-pink-400',
    accentColor: 'bg-purple-500',
    stats: { metric: 'CTR Increase', value: '35%' },
    image: '/media/frequency-cap.webp'
  },
  {
    id: 'tuning',
    icon: Users,
    title: 'Smart Audience Tuning',
    subtitle: 'Precision Targeting',
    description: 'Advanced audience optimization that continuously refines targeting based on engagement patterns.',
    outcome: 'Improve conversion rate by 50%',
    color: 'from-emerald-500 to-teal-400',
    accentColor: 'bg-emerald-500',
    stats: { metric: 'Conversion Lift', value: '50%' },
    image: '/media/audience-tuning.webp'
  },
  {
    id: 'exclusions',
    icon: Shield,
    title: 'Strategic Account Exclusions',
    subtitle: 'Budget Protection',
    description: 'Intelligent exclusion system that identifies and removes non-converting accounts.',
    outcome: 'Increase ROAS by 60%',
    color: 'from-orange-500 to-red-400',
    accentColor: 'bg-orange-500',
    stats: { metric: 'ROAS Boost', value: '60%' },
    image: '/media/audience-tuning-exclusion.webp'
  }
];

const FeatureCard = ({ feature, index, isActive, onHover, onLeave }) => {
  const [cardRef, cardInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -12% 0px",
  });

  const revealClass = `reveal reveal-fade-up ${cardInView ? 'is-inview' : ''}`;

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => onHover(feature.id)}
      onMouseLeave={onLeave}
      className={cn(
        "group relative overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer h-full",
        revealClass,
        isActive 
          ? "border-gray-300 shadow-lg bg-white" 
          : "border-gray-200 hover:border-gray-300 hover:shadow-md bg-white hover:bg-gray-50/50"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background gradient overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300",
        feature.color,
        isActive ? "opacity-5" : "group-hover:opacity-3"
      )} />
      
      {/* Content */}
      <div className="relative p-6 h-full flex flex-col">
        {/* Icon */}
        <div className={cn(
          "flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 mb-4",
          isActive ? feature.accentColor + " text-white shadow-md" : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
        )}>
          <feature.icon className="w-5 h-5" />
        </div>

        {/* Title and subtitle */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">{feature.title}</h3>
          <p className="text-sm text-gray-500 font-medium">{feature.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
          {feature.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between">
          <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300",
            isActive 
              ? feature.accentColor + " text-white" 
              : "bg-gray-100 text-gray-700 group-hover:bg-gray-200"
          )}>
            <TrendingUp className="w-3 h-3" />
            {feature.outcome}
          </div>
          
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900">{feature.stats.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">{feature.stats.metric}</div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r transition-opacity duration-300",
        feature.color,
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
      )} />
    </motion.div>
  );
};

const HeroVisual = ({ activeFeature }) => {
  const active = features.find(f => f.id === activeFeature) || features[0];
  
  const [imgRef, imgInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -12% 0px",
  });

  const imgReveal = `reveal reveal-fade-left ${imgInView ? 'is-inview' : ''}`;
  
  return (
    <div ref={imgRef} className={cn("relative", imgReveal)}>
      {/* Main visual container - oversized like in Features section */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 magic-border">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Floating stats card */}
        <motion.div
          key={`stats-${activeFeature}`}
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20"
        >
          <div className="flex items-center gap-2">
            <div className={cn("w-2 h-2 rounded-full", active.accentColor)} />
            <div>
              <div className="text-lg font-bold text-gray-900">{active.stats.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">{active.stats.metric}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  // Auto-rotate through features
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveFeature(current => {
        const currentIndex = features.findIndex(f => f.id === current);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleFeatureHover = (featureId) => {
    setIsAutoPlaying(false);
    setActiveFeature(featureId);
  };

  const handleFeatureLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="w-full bg-white px-[112px] py-[112px]">
      <div className="max-w-[1216px] mx-auto">
        {/* Section header - matching Features section style */}
        <div ref={headerRef} className="mb-16 text-center">
          <p className={cn(
            "text-[14px] leading-5 tracking-[1.3px] uppercase text-[#ABABAB] font-['DM Mono'] reveal reveal-fade-up",
            headerInView ? "is-inview" : ""
          )}>
            LinkedIn Ads Optimization
          </p>
          
          <h2 className={cn(
            "mt-3 text-[40px] leading-[120%] tracking-[-1.5px] text-black font-medium font-['Inter'] transition-opacity duration-700",
            headerInView ? "opacity-100" : "opacity-0"
          )}>
            Drive more results with precision timing
          </h2>
          
          <p className={cn(
            "mt-4 text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C] font-['Inter'] max-w-2xl mx-auto transition-opacity duration-700",
            headerInView ? "opacity-100" : "opacity-0"
          )}>
            Smart budget controls and optimal ad frequency powered by AI-driven insights that adapt to your audience behavior in real-time.
          </p>
        </div>

        {/* Main content grid - matching Features section layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: 2x2 Feature Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  index={index}
                  isActive={activeFeature === feature.id}
                  onHover={handleFeatureHover}
                  onLeave={handleFeatureLeave}
                />
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="group bg-[#3875F6] hover:bg-[#2c5cc5] text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Start Optimizing Your Ads
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right: Large Visual - matching Features section image treatment */}
          <div className="relative">
            <HeroVisual activeFeature={activeFeature} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;