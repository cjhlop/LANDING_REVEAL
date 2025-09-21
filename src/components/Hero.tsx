import React from 'react';
import { ArrowRight, Check, Circle } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';
import ButtonGroup from './ButtonGroup';
import { ContainerScroll } from './ui/container-scroll-animation';
import DynamicShadow from './DynamicShadow';
import { fallbackCustomerLogos } from '@/data/customerLogos';

export const Hero: React.FC = () => {
  // Create a continuous scrolling array of logos
  const scrollingLogos = React.useMemo(() => {
    // Take first 8 logos and duplicate them for seamless scrolling
    const selectedLogos = fallbackCustomerLogos.slice(0, 8);
    return [...selectedLogos, ...selectedLogos];
  }, []);

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
        text={["Sense Every Buyer Signal.", "Drive Every B2B Sale."]}
        className="text-5xl md:text-6xl font-medium leading-tight tracking-tight mb-12 max-w-5xl"
      />

      {/* Button Group */}
      <div className="mb-6">
        <ButtonGroup primaryLabel="Get started" secondaryLabel="Contact us" />
      </div>

      {/* Checkmark Features */}
      <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-12">
        <div className="flex items-center gap-2" role="listitem">
          <Check className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
          <span className="tracking-tight">30 days free trial</span>
        </div>
      </div>

      {/* Brand Logos Line */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative overflow-hidden">
          {/* Transparent fade edges that work with any background */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.3) 70%, transparent 100%)'
            }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.3) 70%, transparent 100%)'
            }}
          />
          
          {/* Scrolling logos */}
          <div className="flex items-center animate-scroll-left" style={{ width: 'fit-content' }}>
            {scrollingLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ minWidth: `${logo.width}px`, height: '32px' }}
              >
                {logo.logoSrc ? (
                  <img
                    src={logo.logoSrc}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    className="opacity-40 hover:opacity-60 transition-opacity duration-300 object-contain"
                    style={{ filter: 'grayscale(100%)' }}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="flex items-center justify-center text-gray-400 text-sm font-medium opacity-40 hover:opacity-60 transition-opacity duration-300"
                    style={{ width: `${logo.width}px`, height: '32px' }}
                  >
                    {logo.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col overflow-hidden">
      <DynamicShadow variant="hero" />
      <ContainerScroll titleComponent={titleComponent}>
        <img
          src="/media/feature-share-smart.png"
          alt="DemandSense dashboard preview"
          height={720}
          width={1400}
          className="mx-auto object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default Hero;