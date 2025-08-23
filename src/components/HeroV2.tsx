import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Circle } from 'lucide-react';

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

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-medium text-gray-900 leading-tight tracking-tight mb-12 max-w-5xl">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              PalmUI: Your go-to toolkit for building websites—faster and easier.
            </span>
          </h1>

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

        {/* Image Placeholder Area */}
        <div className="relative w-full h-[714px] bg-gray-50 rounded-2xl overflow-hidden" role="img" aria-label="PalmUI interface preview">
          {/* Centered placeholder elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
            {/* Circle placeholder */}
            <div className="w-14 h-14 bg-gray-300 rounded-full" aria-hidden="true" />
            
            {/* Wavy line placeholder */}
            <svg 
              width="65" 
              height="56" 
              viewBox="0 0 65 56" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-300"
              aria-hidden="true"
            >
              <path 
                d="M2 28C8 12, 20 12, 32 28C44 44, 56 44, 63 28" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
              />
            </svg>
            
            {/* Rectangle placeholder */}
            <div className="w-14 h-14 bg-gray-300 rounded-lg" aria-hidden="true" />
          </div>

          {/* Optional: Add subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};