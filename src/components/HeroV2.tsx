import React from 'react';
import { ArrowRight, Check, Circle } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';
import LayeredPreview from './LayeredPreview';
import DynamicShadow from './DynamicShadow';
import ButtonGroup from './ButtonGroup';

export const HeroV2: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-white pt-40 py-32 px-6 md:px-12 lg:px-24 xl:px-40 overflow-hidden" role="banner">
      {/* Dynamic shadow across the whole hero (clipped to top half) */}
      <DynamicShadow variant="hero" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Main Content Container */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Badge Group */}
          <div className="inline-flex items-center bg-gray-50 rounded-full p-1 mb-12" role="group" aria-label="Update notification">
            {/* Update Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
              <Circle className="h-3 w-3 text-green-500 fill-green-500 animate-pulse-soft" aria-hidden="true" />
              <span className="text-sm font-normal text-gray-900 tracking-tight">Update</span>
            </div>
            
            {/* Influenced Revenue text with arrow */}
            <div className="flex items-center gap-2 px-3 py-1">
              <span className="text-sm font-normal text-gray-900 tracking-tight">Influenced Revenue</span>
              <ArrowRight className="h-3.5 w-3.5 text-gray-600" aria-hidden="true" />
            </div>
          </div>

          {/* Animated Main Heading */}
          <AnimatedTitle 
            text="Sense Every Buyer Signal. Drive Every B2B Sale."
            className="text-5xl md:text-6xl font-medium leading-tight tracking-tight mb-12 max-w-5xl"
          />

          {/* Button Group */}
          <div className="mb-6">
            <ButtonGroup primaryLabel="Get started" secondaryLabel="Contact us" />
          </div>

          {/* Checkmark Features */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2" role="listitem">
              <Check className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
              <span className="tracking-tight">30 days free trial</span>
            </div>
          </div>
        </div>

        {/* Image Preview Area with layered composition + animated border and glow */}
        <div className="relative w-full h-[520px] md:h-[714px] magic-border">
          <div className="relative z-[1] w-full h-full bg-gray-50" role="img" aria-label="DemandSense interface preview">
            <LayeredPreview />
          </div>
        </div>
      </div>
    </section>
  );
};