import React, { useState } from 'react';
import { Clock, Zap, Users, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import RandomIcon from '@/components/navbar/RandomIcon';

const features = [
  {
    id: 'smart-scheduling',
    name: 'Smart Ad Scheduling',
    icon: Clock,
    title: 'Smart Ad Scheduling',
    description: 'Optimize ad delivery timing based on audience activity patterns and engagement data for maximum impact and budget efficiency.',
    benefits: ['Peak time optimization', 'Budget efficiency', 'Engagement boost'],
    cta: 'Optimize timing',
    image: '/media/ads-scheduling.webp'
  },
  {
    id: 'frequency-cap',
    name: 'Intelligent Frequency Cap',
    icon: Zap,
    title: 'Intelligent Frequency Cap',
    description: 'Dynamic frequency management that prevents ad fatigue while maintaining optimal exposure across your target audience segments.',
    benefits: ['Ad fatigue prevention', 'Optimal exposure control', 'Audience engagement boost'],
    cta: 'Boost CTR by 35%',
    stats: '35%',
    statsLabel: 'CTR Increase',
    statsSubtext: 'Average improvement',
    image: '/media/frequency-cap.webp'
  },
  {
    id: 'audience-tuning',
    name: 'Smart Audience Tuning',
    icon: Users,
    title: 'Smart Audience Tuning',
    description: 'AI-powered audience optimization that continuously refines targeting based on real-time performance data and behavioral insights.',
    benefits: ['Behavioral analysis', 'Dynamic optimization', 'Performance tracking'],
    cta: 'Tune audience',
    image: '/media/audience-tuning.webp'
  },
  {
    id: 'account-exclusions',
    name: 'Strategic Account Exclusions',
    icon: Shield,
    title: 'Strategic Account Exclusions',
    description: 'Intelligent exclusion management to prevent budget waste on non-converting accounts and audiences with advanced filtering.',
    benefits: ['Budget protection', 'Conversion focus', 'ROI optimization'],
    cta: 'Exclude accounts',
    image: '/media/audience-tuning-exclusion.webp'
  }
];

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState('frequency-cap');
  
  const currentFeature = features.find(f => f.id === activeFeature) || features[1];

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20" />
      
      <div className="max-w-[1216px] mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Zap className="h-4 w-4" />
            LinkedIn Ads Optimization
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
            Drive more results with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              precision timing
            </span>
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
                  "group relative inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105",
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25'
                    : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 hover:shadow-lg'
                )}
              >
                <Icon className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  isActive ? "scale-110" : "group-hover:scale-105"
                )} />
                {feature.name}
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feature Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Dashboard Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              {/* Browser header */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-block bg-white px-3 py-1 rounded-md text-xs text-gray-600 border">
                    {currentFeature.title}
                  </div>
                </div>
              </div>
              
              {/* Image container with consistent aspect ratio */}
              <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
                <img
                  key={currentFeature.id}
                  src={currentFeature.image}
                  alt={`${currentFeature.title} dashboard`}
                  className="w-full h-full object-cover transition-all duration-500 ease-out transform hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Feature Details */}
          <div className="space-y-8">
            {/* Feature badge */}
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
              <RandomIcon className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Premium Feature</span>
            </div>

            <div key={currentFeature.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4 leading-tight">
                {currentFeature.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentFeature.description}
              </p>
            </div>

            {/* Stats (for Frequency Cap) */}
            {currentFeature.stats && (
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100 shadow-sm">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {currentFeature.stats}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {currentFeature.statsLabel}
                </div>
                <div className="text-sm text-gray-600">
                  {currentFeature.statsSubtext}
                </div>
              </div>
            )}

            {/* Key Benefits */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <RandomIcon className="h-5 w-5 text-gray-600" />
                Key Benefits
              </h4>
              <ul className="space-y-3">
                {currentFeature.benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-6">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get started
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 rounded-lg font-medium border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};