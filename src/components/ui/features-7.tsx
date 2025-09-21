import React, { useState } from 'react';
import { Clock, Zap, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    id: 'smart-scheduling',
    name: 'Smart Ad Scheduling',
    icon: Clock,
    title: 'Smart Ad Scheduling',
    description: 'Optimize ad delivery timing based on audience activity patterns and engagement data for maximum impact.',
    benefits: ['Peak time optimization', 'Budget efficiency', 'Engagement boost'],
    cta: 'Optimize timing',
    image: '/media/ads-scheduling.webp'
  },
  {
    id: 'frequency-cap',
    name: 'Intelligent Frequency Cap',
    icon: Zap,
    title: 'Intelligent Frequency Cap',
    description: 'Dynamic frequency management that prevents ad fatigue while maintaining optimal exposure across your target audience.',
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
    description: 'AI-powered audience optimization that continuously refines targeting based on real-time performance data.',
    benefits: ['Behavioral analysis', 'Dynamic optimization', 'Performance tracking'],
    cta: 'Tune audience',
    image: '/media/audience-tuning.webp'
  },
  {
    id: 'account-exclusions',
    name: 'Strategic Account Exclusions',
    icon: Shield,
    title: 'Strategic Account Exclusions',
    description: 'Intelligent exclusion management to prevent budget waste on non-converting accounts and audiences.',
    benefits: ['Budget protection', 'Conversion focus', 'ROI optimization'],
    cta: 'Exclude accounts',
    image: '/media/audience-tuning-exclusion.webp'
  }
];

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState('frequency-cap');
  
  const currentFeature = features.find(f => f.id === activeFeature) || features[1];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1216px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            LinkedIn Ads Optimization
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
            Drive more results with <span className="text-blue-600">precision timing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Smart budget controls and optimal ad frequency powered by AI-driven insights.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isActive = activeFeature === feature.id;
            
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                {feature.name}
              </button>
            );
          })}
        </div>

        {/* Feature Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Dashboard Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentFeature.image}
                alt={`${currentFeature.title} dashboard`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Feature Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                {currentFeature.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentFeature.description}
              </p>
            </div>

            {/* Stats (for Frequency Cap) */}
            {currentFeature.stats && (
              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="text-4xl font-bold text-purple-600 mb-1">
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
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Key Benefits
              </h4>
              <ul className="space-y-2">
                {currentFeature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                Get started
              </Button>
              <Button variant="outline" className="px-6 py-2">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};