import React, { useState } from 'react';
import CardSwap, { Card } from './CardSwap';
import BrowserHeader from '@/components/BrowserHeader';
import ButtonGroup from '@/components/ButtonGroup';
import { CheckCircle2 } from 'lucide-react';

const cardContent = [
  {
    eyebrow: "SENSE DEMAND",
    title: "Uncover Every Buyer Signal",
    description: "Identify anonymous website visitors and track engagement across all your channels to discover high-intent accounts before your competitors do.",
    features: [
      "Unmask anonymous website visitors",
      "Reveal companies showing buying signals",
      "Track engagement across LinkedIn and your website",
    ],
  },
  {
    eyebrow: "MAXIMIZE ROI",
    title: "Optimize Ad Spend Intelligently",
    description: "Stop wasting budget. Our tools help you schedule ads for peak engagement, cap frequency to avoid ad fatigue, and tune audiences for maximum impact.",
    features: [
      "Automated ad scheduling for peak hours",
      "Advanced frequency capping to prevent overexposure",
      "Granular audience tuning and segmentation",
    ],
  },
  {
    eyebrow: "MEASURE IMPACT",
    title: "Prove Your Marketing's ROI",
    description: "Connect your marketing activities directly to revenue. Our comprehensive reporting gives you clear insights into what's working and why.",
    features: [
      "Connect campaigns directly to influenced revenue",
      "Multi-channel reporting in a single dashboard",
      "Track full-journey customer insights",
    ],
  },
];

const DynamicContent = ({ content }) => (
  <>
    <p className="text-[12px] leading-5 tracking-[1.2px] uppercase text-[#7C7C7C] font-['DM Mono']">
      {content.eyebrow}
    </p>
    <h3 className="mt-2 text-[32px] leading-[120%] tracking-[-0.9px] text-black font-medium">
      {content.title}
    </h3>
    <p className="mt-4 text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C]">
      {content.description}
    </p>
    <dl className="mt-6 space-y-4 text-[16px] leading-[150%]">
      {content.features.map((feature, index) => (
        <div key={index} className="relative pl-9">
          <dt className="inline font-medium text-gray-900">
            <CheckCircle2 aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-[#3875f6]" />
            {feature}
          </dt>
        </div>
      ))}
    </dl>
    <div className="mt-8">
      <ButtonGroup primaryLabel="Get started" secondaryLabel="Learn more" />
    </div>
  </>
);

const CardSwapSection = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleSwap = (newIndex) => {
    if (newIndex === contentIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setContentIndex(newIndex);
      setIsFading(false);
    }, 200);
  };

  return (
    <section className="bg-gray-50 relative overflow-hidden">
      <div className="w-full max-w-[1216px] mx-auto px-6 md:px-12 py-16 lg:py-0 lg:h-[900px] flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 lg:max-w-[560px] z-10">
          <div className={`transition-opacity duration-200 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            <DynamicContent content={cardContent[contentIndex]} />
          </div>
        </div>

        {/* Right: Cards */}
        <div className="w-full h-[600px] lg:h-full lg:flex-1 relative">
          <CardSwap
            width={850}
            height={680}
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={true}
            onSwap={handleSwap}
          >
            <Card className="bg-white text-black overflow-hidden shadow-lg flex flex-col">
              <BrowserHeader title="Uncover Buyer Intent" />
              <div className="flex-1">
                <img
                  src="/media/feature-share-smart.png"
                  alt="Uncover Buyer Intent - product preview"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Card>
            <Card className="bg-white text-black overflow-hidden shadow-lg flex flex-col">
              <BrowserHeader title="Optimize Ad Spend" />
              <div className="flex-1">
                <img
                  src="/media/feature-share-smart.png"
                  alt="Optimize Ad Spend - product preview"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Card>
            <Card className="bg-white text-black overflow-hidden shadow-lg flex flex-col">
              <BrowserHeader title="Prove Marketing ROI" />
              <div className="flex-1">
                <img
                  src="/media/feature-share-smart.png"
                  alt="Prove Marketing ROI - product preview"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default CardSwapSection;