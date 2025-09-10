import React from 'react';
import { ArrowRight, Check, Circle } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';
import ButtonGroup from './ButtonGroup';
import { ContainerScroll } from './ui/container-scroll-animation';
import DynamicShadow from './DynamicShadow';

export const Hero: React.FC = () => {
  const titleComponent = (
    <div className="flex flex-col items-center text-center px-4">
      {/* Badge Group */}
      <div className="inline-flex items-center bg-gray-50 rounded-full p-1 mb-12 shadow-md" role="group" aria-label="Update notification">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
          <Circle className="h-3 w-3 text-green-500 fill-green-500 animate-pulse-soft" aria-hidden="true" />
          <span className="text-sm font-normal text-gray-900 tracking-tight">Update</span>
        </div>
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
      <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2" role="listitem">
          <Check className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
          <span className="tracking-tight">30 days free trial</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col overflow-hidden">
      <DynamicShadow variant="hero" />
      <ContainerScroll titleComponent={titleComponent}>
        <img
          src={`https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2069&auto-format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%DD%DD`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default Hero;