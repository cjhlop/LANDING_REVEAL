"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Target, Users, Shield, ArrowRight, TrendingUp, DollarSign, Zap } from 'lucide-react';
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
    image: '/media/ads-scheduling.webp'
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
    image: '/media/frequency-cap.webp'
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
    image: '/media/audience-tuning.webp'
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
    image: '/media/audience-tuning-exclusion.webp'
  }
];

const FeatureCard = ({ feature, index, isActive, onHover, onLeave }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => onHover(feature.id)}
      onMouseLeave={onLeave}
      className={cn(
        "group relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer",
        isActive 
          ? "border-gray-300 shadow-2xl shadow-black/10 scale-[1.02]" 
          : "border-gray-200 hover:border-gray-300 hover:shadow-xl hover:shadow-black/5"
      )}
    >
      {/* Background gradient overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
        feature.color,
        isActive ? "opacity-5" : "group-hover:opacity-3"
      )} />
      
      {/* Content */}
      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={cn(
              "flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300",
              isActive ? feature.accentColor + " text-white shadow-lg" : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
            )}>
              <feature.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{feature.subtitle}</p>
            </div>
          </div>
          
          {/* Stats badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.7 }}
            className="text-right"
          >
            <div className="text-2xl font-bold text-gray-900">{feature.stats.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">{feature.stats.metric}</div>
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {feature.description}
        </p>

        {/* Outcome highlight */}
        <div className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
          isActive 
            ? feature.accentColor + " text-white shadow-lg" 
            : "bg-gray-100 text-gray-700 group-hover:bg-gray-200"
        )}>
          <TrendingUp className="w-4 h-4" />
          {feature.outcome}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r transition-opacity duration-300",
        feature.color,
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
      )} />
    </motion.div>
  );
};

const HeroVisual = ({ activeFeature }) => {
  const active = features.find(f => f.id === activeFeature) || features[0];
  
  return (
    <div className="relative">
      {/* Main visual container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
            )} />
          </motion.div>
        </AnimatePresence>

        {/* Floating stats card */}
        <motion.div
          key={`stats-${activeFeature}`}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
        >
          <div className="flex items-center gap-3">
            <div className={cn("w-3 h-3 rounded-full", active.accentColor)} />
            <div>
              <div className="text-2xl font-bold text-gray-900">{active.stats.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">{active.stats.metric}</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-3xl -z-10" />
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
    <section className="py-24 px-6 bg-white">
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
              Smart budget controls and optimal ad frequency powered by AI-driven insights that adapt to your audience behavior in real-time.
            </p>
          </motion.div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Features list */}
          <div className="space-y-6">
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
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-8"
            >
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Optimizing Your Ads
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Visual showcase */}
          <div className="lg:sticky lg:top-8">
            <HeroVisual activeFeature={activeFeature} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;