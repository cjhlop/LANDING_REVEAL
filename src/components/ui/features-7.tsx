import React, { useState } from 'react';
import { Clock, Zap, Users, Shield, ArrowRight, TrendingUp, Target, DollarSign, Timer, Crosshair } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'smart-scheduling',
    name: 'Smart Ad Scheduling',
    icon: Clock,
    title: 'Smart Ad Scheduling',
    description: 'Optimize ad delivery timing based on audience activity patterns and engagement data for maximum impact.',
    benefits: ['Peak time optimization', 'Budget efficiency', 'Engagement boost'],
    badge: { icon: Clock, text: 'Time Optimization', gradient: 'bg-gradient-to-r from-emerald-500 to-emerald-600' },
    stats: '42%',
    statsLabel: 'Cost Reduction',
    statsSubtext: 'Through optimal timing',
    statsIcon: Timer,
    statsColor: 'emerald',
    hoverColor: 'hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700',
    image: '/media/ads-scheduling.webp'
  },
  {
    id: 'frequency-cap',
    name: 'Intelligent Frequency Cap',
    icon: Zap,
    title: 'Intelligent Frequency Cap',
    description: 'Dynamic frequency management that prevents ad fatigue while maintaining optimal exposure across your target audience.',
    benefits: ['Ad fatigue prevention', 'Optimal exposure control', 'Audience engagement boost'],
    stats: '35%',
    statsLabel: 'CTR Increase',
    statsSubtext: 'Average improvement',
    statsIcon: TrendingUp,
    statsColor: 'purple',
    hoverColor: 'hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700',
    badge: { icon: TrendingUp, text: 'Performance Boost', gradient: 'bg-gradient-to-r from-purple-500 to-purple-600' },
    image: '/media/frequency-cap.webp'
  },
  {
    id: 'audience-tuning',
    name: 'Smart Audience Tuning',
    icon: Users,
    title: 'Smart Audience Tuning',
    description: 'AI-powered audience optimization that continuously refines targeting based on real-time performance data.',
    benefits: ['Behavioral analysis', 'Dynamic optimization', 'Performance tracking'],
    badge: { icon: Target, text: 'AI Targeting', gradient: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    stats: '58%',
    statsLabel: 'Targeting Accuracy',
    statsSubtext: 'AI-powered precision',
    statsIcon: Crosshair,
    statsColor: 'blue',
    hoverColor: 'hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700',
    image: '/media/audience-tuning.webp'
  },
  {
    id: 'account-exclusions',
    name: 'Strategic Account Exclusions',
    icon: Shield,
    title: 'Strategic Account Exclusions',
    description: 'Intelligent exclusion management to prevent budget waste on non-converting accounts and audiences.',
    benefits: ['Budget protection', 'Conversion focus', 'ROI optimization'],
    badge: { icon: DollarSign, text: 'Budget Shield', gradient: 'bg-gradient-to-r from-orange-500 to-orange-600' },
    stats: '67%',
    statsLabel: 'Budget Saved',
    statsSubtext: 'From smart exclusions',
    statsIcon: DollarSign,
    statsColor: 'orange',
    hoverColor: 'hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700',
    image: '/media/audience-tuning-exclusion.webp'
  }
];

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState('frequency-cap');
  
  const currentFeature = features.find(f => f.id === activeFeature) || features[1];

  const getStatsColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        bg: 'from-emerald-50 to-emerald-100/50',
        border: 'border-emerald-200/50',
        text: 'from-emerald-600 to-emerald-700',
        icon: 'text-emerald-500'
      },
      purple: {
        bg: 'from-purple-50 to-purple-100/50',
        border: 'border-purple-200/50',
        text: 'from-purple-600 to-purple-700',
        icon: 'text-purple-500'
      },
      blue: {
        bg: 'from-blue-50 to-blue-100/50',
        border: 'border-blue-200/50',
        text: 'from-blue-600 to-blue-700',
        icon: 'text-blue-500'
      },
      orange: {
        bg: 'from-orange-50 to-orange-100/50',
        border: 'border-orange-200/50',
        text: 'from-orange-600 to-orange-700',
        icon: 'text-orange-500'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 pointer-events-none" />
      
      <div className="max-w-[1216px] mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
            <Zap className="h-4 w-4" />
            LinkedIn Ads Optimization
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tight">
            Drive more results with <span className="text-blue-600">precision timing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Smart budget controls and optimal ad frequency powered by AI-driven insights.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isActive = activeFeature === feature.id;
            
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={cn(
                  "group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25'
                    : `bg-white text-gray-600 border border-gray-200 hover:shadow-md ${feature.hoverColor}`
                )}
              >
                <Icon className="h-4 w-4 transition-colors duration-300" />
                {feature.name}
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 opacity-20 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feature Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Dashboard Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              {/* Browser header */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-white px-3 py-1 rounded-md text-xs text-gray-600 inline-block border">
                    {currentFeature.title}
                  </div>
                </div>
              </div>
              
              {/* Image container with fixed aspect ratio */}
              <div className="relative w-full h-[400px] bg-gray-50 overflow-hidden">
                <img
                  key={currentFeature.id}
                  src={currentFeature.image}
                  alt={`${currentFeature.title} dashboard`}
                  className="w-full h-full object-cover object-top transition-all duration-700 ease-out transform hover:scale-105"
                  loading="lazy"
                />
                
                {/* Animated overlay on image change */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right: Feature Details */}
          <div className="space-y-8">
            {/* Premium badge - Fixed with proper Tailwind classes */}
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg transition-all duration-300",
              currentFeature.badge.gradient
            )}>
              <currentFeature.badge.icon className="h-4 w-4" />
              {currentFeature.badge.text}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
                  {currentFeature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {currentFeature.description}
                </p>
              </div>

              {/* Two-column layout: Key Benefits + Stats */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Column 1: Key Benefits */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {currentFeature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-sm transition-colors duration-200" />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Stats */}
                <div className={cn(
                  "relative bg-gradient-to-br rounded-2xl p-6 border shadow-sm",
                  `bg-gradient-to-br ${getStatsColorClasses(currentFeature.statsColor).bg}`,
                  getStatsColorClasses(currentFeature.statsColor).border
                )}>
                  <div className="absolute top-4 right-4">
                    <currentFeature.statsIcon className={cn("h-5 w-5", getStatsColorClasses(currentFeature.statsColor).icon)} />
                  </div>
                  <div className={cn(
                    "text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-1",
                    `bg-gradient-to-r ${getStatsColorClasses(currentFeature.statsColor).text}`
                  )}>
                    {currentFeature.stats}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {currentFeature.statsLabel}
                  </div>
                  <div className="text-sm text-gray-600">
                    {currentFeature.statsSubtext}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-6">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center gap-2">
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="px-8 py-3 rounded-lg border-2 hover:border-gray-400 hover:shadow-md transition-all duration-200">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};