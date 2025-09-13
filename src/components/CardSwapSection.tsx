import React, { useState, useEffect } from 'react';
import CardSwap, { Card } from './CardSwap';
import BrowserHeader from '@/components/BrowserHeader';
import ButtonGroup from '@/components/ButtonGroup';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ClockIcon } from '@heroicons/react/20/solid';

const CardSwapSection = () => {
  // Track which card is currently in front (updated by CardSwap callback)
  const [frontCardIndex, setFrontCardIndex] = useState(0);

  // Debug logging
  useEffect(() => {
    console.log('CardSwapSection: Front card index changed to:', frontCardIndex);
  }, [frontCardIndex]);

  // Content blocks that sync with cards - EXACT order as cards appear
  const contentBlocks = [
    // Index 0 - "Ads Scheduling" (first card)
    {
      eyebrow: "Ads Scheduling",
      title: "Optimize Your Ad Timing",
      description: "Schedule your LinkedIn ads to run only when your audience is most active and engaged.",
      features: [
        {
          icon: ClockIcon,
          title: "Smart Scheduling.",
          description: "Automatically schedule ads based on audience activity patterns and engagement data."
        },
        {
          icon: CloudArrowUpIcon,
          title: "Time Zone Optimization.",
          description: "Optimize ad delivery across different time zones for maximum reach and impact."
        },
        {
          icon: LockClosedIcon,
          title: "Budget Protection.",
          description: "Prevent budget waste by pausing ads during low-engagement periods automatically."
        }
      ]
    },
    // Index 1 - "Frequency Capping" (second card)
    {
      eyebrow: "Frequency Capping",
      title: "Control Ad Exposure",
      description: "Prevent ad fatigue by controlling how often your audience sees your advertisements.",
      features: [
        {
          icon: ServerIcon,
          title: "Smart Frequency Control.",
          description: "Automatically limit ad exposure to prevent audience fatigue and improve engagement rates."
        },
        {
          icon: LockClosedIcon,
          title: "Audience Segmentation.",
          description: "Apply different frequency caps based on audience segments and engagement levels."
        },
        {
          icon: CloudArrowUpIcon,
          title: "Performance Monitoring.",
          description: "Track frequency impact on performance metrics and adjust caps automatically."
        }
      ]
    },
    // Index 2 - "Audience Tuning" (third card)
    {
      eyebrow: "Audience Tuning",
      title: "Perfect Your Targeting",
      description: "Fine-tune your audience targeting based on real engagement data and performance metrics.",
      features: [
        {
          icon: CloudArrowUpIcon,
          title: "Behavioral Analysis.",
          description: "Analyze audience behavior patterns to identify the most engaged segments for targeting."
        },
        {
          icon: ServerIcon,
          title: "Dynamic Optimization.",
          description: "Automatically adjust targeting parameters based on real-time performance data."
        },
        {
          icon: LockClosedIcon,
          title: "Lookalike Expansion.",
          description: "Expand your reach by finding similar audiences based on your best-performing segments."
        }
      ]
    },
    // Index 3 - "Budget Control" (fourth card)
    {
      eyebrow: "Budget Control",
      title: "Maximize Your ROI",
      description: "Intelligent budget allocation and control to ensure optimal spend across all campaigns.",
      features: [
        {
          icon: ServerIcon,
          title: "Smart Budget Allocation.",
          description: "Automatically distribute budget to the highest-performing campaigns and audiences."
        },
        {
          icon: ClockIcon,
          title: "Real-time Monitoring.",
          description: "Monitor spend in real-time and automatically pause underperforming campaigns."
        },
        {
          icon: CloudArrowUpIcon,
          title: "ROI Optimization.",
          description: "Continuously optimize budget allocation based on return on investment metrics."
        }
      ]
    }
  ];

  // Callback to receive updates from CardSwap about which card is in front
  const handleCardOrderChange = (newFrontCardIndex: number) => {
    console.log('CardSwapSection: CardSwap reported front card index:', newFrontCardIndex);
    setFrontCardIndex(newFrontCardIndex);
  };

  const activeContent = contentBlocks[frontCardIndex] || contentBlocks[0];

  return (
    <section className="bg-gray-50 relative overflow-hidden" style={{ height: '900px' }}>
      {/* Enhanced debug info */}
      <div className="absolute top-4 left-4 bg-black text-white p-2 rounded text-xs z-50 space-y-1">
        <div>Front Card: {frontCardIndex} - {activeContent.eyebrow}</div>
        <div>Time: {new Date().toLocaleTimeString()}</div>
      </div>

      {/* Left content block in a centered 1216px container */}
      <div className="absolute inset-y-0 left-0 right-0">
        <div className="relative h-full w-full max-w-[1216px] mx-auto flex items-center">
          <div className="px-6 md:px-12 max-w-[560px]">
            <p className="text-[12px] leading-5 tracking-[1.2px] uppercase text-[#7C7C7C] font-['DM Mono']">
              {activeContent.eyebrow}
            </p>
            <h3 className="mt-2 text-[32px] leading-[120%] tracking-[-0.9px] text-black font-medium">
              {activeContent.title}
            </h3>
            <p className="mt-4 text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C]">
              {activeContent.description}
            </p>

            <dl className="mt-6 space-y-6 text-[16px] leading-[150%]">
              {activeContent.features.map((feature, index) => (
                <div key={index} className="relative pl-9">
                  <dt className="inline font-medium text-gray-900">
                    <feature.icon aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-[#3875f6]" />
                    {feature.title}
                  </dt>{' '}
                  <dd className="inline text-[#7C7C7C]">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <ButtonGroup primaryLabel="Get started" secondaryLabel="Learn more" />
            </div>
          </div>
        </div>
      </div>

      {/* Right: Cards with 16:9 aspect ratio - reduced by 15% */}
      <CardSwap
        width={918}
        height={517}
        cardDistance={77}
        verticalDistance={89}
        delay={3000}
        pauseOnHover={false}
        onCardOrderChange={handleCardOrderChange}
      >
        {/* Card 0 - "Ads Scheduling" */}
        <Card className="bg-white text-black overflow-hidden shadow-lg flex flex-col">
          <BrowserHeader title="Ads Scheduling" />
          <div className="flex-1">
            <img
              src="/media/feature-share-smart.png"
              alt="Ads Scheduling - product preview"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Card>

        {/* Card 1 - "Frequency Capping" */}
        <Card className="bg-white text-black overflow-hidden shadow-lg flex flex-col">
          <BrowserHeader title="Frequency Capping" />
          <div className="flex-1">
            <img
              src="/media/feature-share-smart.png"
              alt="Frequency Capping - product preview"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Card>

        {/* Card 2 - "Audience Tuning" */}
        <Card className="bg-white text-black overflow-hidden shadow-lg flex flex-col">
          <BrowserHeader title="Audience Tuning" />
          <div className="flex-1">
            <img
              src="/media/feature-share-smart.png"
              alt="Audience Tuning - product preview"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Card>

        {/* Card 3 - "Budget Control" */}
        <Card className="bg-white text-black overflow-hidden shadow-lg flex flex-col">
          <BrowserHeader title="Budget Control" />
          <div className="flex-1">
            <img
              src="/media/feature-share-smart.png"
              alt="Budget Control - product preview"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Card>
      </CardSwap>
    </section>
  );
};

export default CardSwapSection;