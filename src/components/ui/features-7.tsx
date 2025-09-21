"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Target, Users, Shield, ArrowRight, TrendingUp, DollarSign, Zap, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const features = [
  {
    id: 'scheduling',
    icon: Clock,
    title: 'Smart Ad Scheduling',
    subtitle: 'Precision Timing',
    description: 'AI-powered scheduling that identifies peak engagement windows and automatically optimizes ad delivery for maximum impact.',
    outcome: 'Reduce wasted spend by 40%',
    color: 'from-blue-500 to-cyan-400',
    accentColor: 'bg-blue-500',
    stats: { metric: 'CPM Reduction', value: '40%' },
    image: '/media/ads-scheduling.webp',
    benefits: ['Peak engagement detection', 'Automatic optimization', 'Budget waste prevention']
  },
  {
    id: 'frequency',
    icon: Target,
    title: 'Intelligent Frequency Cap',
    subtitle: 'Smart Controls',
    description: 'Dynamic frequency management that prevents ad fatigue while maintaining optimal exposure across your target audience.',
    outcome: 'Boost CTR by 35%',
    color: 'from-purple-500 to-pink-400',
    accentColor: 'bg-purple-500',
    stats: { metric: 'CTR Increase', value: '35%' },
    image: '/media/frequency-cap.webp',
    benefits: ['Ad fatigue prevention', 'Optimal exposure control', 'Audience engagement boost']
  },
  {
    id: 'tuning',
    icon: Users,
    title: 'Smart Audience Tuning',
    subtitle: 'Precision Targeting',
    description: 'Advanced audience optimization that continuously refines targeting based on engagement patterns and conversion data.',
    outcome: 'Improve conversion rate by 50%',
    color: 'from-emerald-500 to-teal-400',
    accentColor: 'bg-emerald-500',
    stats: { metric: 'Conversion Lift', value: '50%' },
    image: '/media/audience-tuning.webp',
    benefits: ['Continuous refinement', 'Pattern recognition', 'Conversion optimization']
  },
  {
    id: 'exclusions',
    icon: Shield,
    title: 'Strategic Account Exclusions',
    subtitle: 'Budget Protection',
    description: 'Intelligent exclusion system that identifies and removes non-converting accounts to maximize budget efficiency.',
    outcome: 'Increase ROAS by 60%',
    color: 'from-orange-500 to-red-400',
    accentColor: 'bg-orange-500',
    stats: { metric: 'ROAS Boost', value: '60%' },
    image: '/media/audience-tuning-exclusion.webp',
    benefits: ['Non-converter identification', 'Budget efficiency', 'ROI maximization']
  }
];

const FeatureTab = ({ feature, isActive, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative"
    >
      <div className={cn(
        "relative rounded-xl transition-all duration-300",
        isActive && "magic-border shadow-xl shadow-black/12"
      )}>
        <button
          onClick={() => onClick(feature.id)}
          className={cn(
            "group relative w-full text-left p-6 rounded-xl border transition-all duration-300 hover:shadow-md bg-white",
            isActive 
              ? "border-transparent" 
              : "border-gray-200 bg-gray-50/50 hover:bg-white hover:border-gray-300"
          )}
        >
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className={cn(
              "flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300",
              isActive 
                ? feature.accentColor + " text-white shadow-md" 
                : "bg-gray-200 text-gray-600 group-hover:bg-gray-300"
            )}>
              <feature.icon className="w-5 h-5" />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className={cn(
                "font-semibold text-base mb-1 transition-colors duration-300",
                isActive ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
              )}>
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{feature.subtitle}</p>
              
              {/* Stats badge */}
              <div className={cn(
                "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all duration-300",
                isActive 
                  ? feature.accentColor + " text-white" 
                  : "bg-gray-200 text-gray-600 group-hover:bg-gray-300"
              )}>
                <TrendingUp className="w-3 h-3" />
                {feature.stats.value} {feature.stats.metric.toLowerCase()}
              </div>
            </div>
          </div>
        </button>
      </div>
    </motion.div>
  );
};

const VisualShowcase = ({ activeFeature }) => {
  const active = features.find(f => f.id === activeFeature) || features[0];
  
  return (
    <div className="relative h-full">
      {/* Main visual container - much larger now */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
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

        {/* Play button overlay for interactivity */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-colors cursor-pointer group">
            <Play className="w-8 h-8 text-gray-700 group-hover:text-gray-900 ml-1" />
          </div>
        </motion.div>
      </div>

      {/* Feature details panel */}
      <motion.div
        key={`details-${activeFeature}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{active.title}</h3>
            <p className="text-gray-600 leading-relaxed">{active.description}</p>
          </div>
          
          {/* Large stats display */}
          <div className="text-right ml-6">
            <div className={cn(
              "text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
              active.color
            )}>
              {active.stats.value}
            </div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              {active.stats.metric}
            </div>
          </div>
        </div>

        {/* Benefits list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          {active.benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <div className={cn("w-2 h-2 rounded-full", active.accentColor)} />
              {benefit}
            </motion.div>
          ))}
        </div>

        {/* Outcome highlight */}
        <div className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mt-4 bg-gradient-to-r text-white shadow-md",
          active.color
        )}>
          <TrendingUp className="w-4 h-4" />
          {active.outcome}
        </div>
      </motion.div>
    </div>
  );
};

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate through features
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveFeature(current => {
        const currentIndex = features.findIndex(f => f.id === current);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleFeatureClick = (featureId) => {
    setIsAutoPlaying(false);
    setActiveFeature(featureId);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              LinkedIn Ads Optimization
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Drive more results with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> precision timing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Smart budget controls and optimal ad frequency powered by AI-driven insights.
            </p>
          </motion.div>
        </div>

        {/* Main content - better proportions */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
          {/* Compact feature tabs */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <FeatureTab
                key={feature.id}
                feature={feature}
                index={index}
                isActive={activeFeature === feature.id}
                onClick={handleFeatureClick}
              />
            ))}
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-6"
            >
              <Button 
                size="lg" 
                className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Optimizing Your Ads
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Large visual showcase */}
          <div className="lg:sticky lg:top-8">
            <VisualShowcase activeFeature={activeFeature} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;