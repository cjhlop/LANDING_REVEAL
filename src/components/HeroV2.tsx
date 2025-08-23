import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Circle } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';
import { HeroSectionShowcase } from './showcase/HeroSectionShowcase';

export const HeroV2: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-white py-32 px-40" role="banner">
      <div className="container mx-auto max-w-7xl">
        {/* Main Content Container */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Badge Group */}
          <div className="inline-flex items-center bg-gray-50 rounded-full p-1 mb-12" role="group" aria-label="Update notification">
            {/* Update Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
              <Circle className="h-3 w-3 text-green-500 fill-green-500" aria-hidden="true" />
              <span className="text-sm font-normal text-gray-900 tracking-tight">Update</span>
            </div>
            
            {/* Browse new layouts text with arrow */}
            <div className="flex items-center gap-2 px-3 py-1">
              <span className="text-sm font-normal text-gray-900 tracking-tight">Browse new layouts</span>
              <ArrowRight className="h-3.5 w-3.5 text-gray-600" aria-hidden="true" />
            </div>
          </div>

          {/* Animated Main Heading */}
          <AnimatedTitle 
            text="PalmUI: Your go-to toolkit for building websites—faster and easier."
            className="text-5xl md:text-6xl font-medium leading-tight tracking-tight mb-12 max-w-5xl"
          />

          {/* Button Group */}
          <div className="flex items-center gap-2 mb-6">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg font-medium tracking-tight"
              aria-label="Get started with PalmUI"
            >
              Get started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-200 text-gray-900 hover:bg-gray-50 px-5 py-2.5 rounded-lg font-medium tracking-tight"
              aria-label="Contact us for more information"
            >
              Contact us
            </Button>
          </div>

          {/* Checkmark Features */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2" role="listitem">
              <Check className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
              <span className="tracking-tight">30 days free trial</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <Check className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
              <span className="tracking-tight">3k+ sections</span>
            </div>
          </div>
        </div>

        {/* Hero Section Showcase */}
        <HeroSectionShowcase />
      </div>
    </section>
  );
};