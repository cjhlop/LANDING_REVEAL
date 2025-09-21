import React from 'react';
import { ArrowRight, Check, Circle, Wifi, Signal, Battery } from 'lucide-react';
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
    <div className="flex flex-col items-center text-center px-4" style={{ paddingTop: '100px' }}>
      {/* Badge Group - 100px top spacing for 1920x1080 */}
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
      <div className="w-full max-w-3xl mx-auto mb-8">
        <div className="overflow-hidden">
          {/* Scrolling logos without any fade effects */}
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
    <div className="relative flex flex-col overflow-hidden min-h-screen pb-32">
      <DynamicShadow variant="hero" />
      <ContainerScroll titleComponent={titleComponent}>
        {/* Premium Browser Window - Keep same positioning, just ensure shadow space */}
        <div className="relative mx-auto max-w-[1600px] w-full scale-110 mt-16 mb-40">
          {/* Browser Chrome */}
          <div className="relative bg-white rounded-t-xl shadow-2xl border border-gray-200/60 overflow-hidden">
            {/* Top Bar with macOS-style design - 25% smaller */}
            <div className="relative bg-gradient-to-b from-gray-50 to-gray-100/80 border-b border-gray-200/60 px-4 py-3">
              {/* Traffic Lights - 25% smaller */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-red-400 to-red-500 shadow-sm ring-1 ring-red-300/50 hover:from-red-500 hover:to-red-600 transition-all duration-200 cursor-pointer" />
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-sm ring-1 ring-yellow-300/50 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 cursor-pointer" />
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-400 to-green-500 shadow-sm ring-1 ring-green-300/50 hover:from-green-500 hover:to-green-600 transition-all duration-200 cursor-pointer" />
              </div>

              {/* Address Bar - 25% smaller */}
              <div className="max-w-xl mx-auto">
                <div className="relative bg-white rounded-md border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center px-3 py-2">
                    {/* Lock Icon - 25% smaller */}
                    <div className="flex items-center gap-1.5 mr-2 text-green-600">
                      <div className="w-3 h-3 rounded-sm bg-green-100 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-sm" />
                      </div>
                      <span className="text-xs font-medium">Secure</span>
                    </div>
                    
                    {/* URL - 25% smaller */}
                    <div className="flex-1 text-gray-700 font-mono text-xs">
                      https://app.demandsense.com/dashboard
                    </div>
                    
                    {/* Bookmark Star - 25% smaller */}
                    <div className="ml-2 text-gray-400 hover:text-yellow-500 transition-colors duration-200 cursor-pointer">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Controls - 25% smaller */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-500">
                <Wifi className="w-3 h-3" />
                <Signal className="w-3 h-3" />
                <Battery className="w-3 h-3" />
                <div className="text-xs font-medium">2:47 PM</div>
              </div>
            </div>

            {/* Tab Bar - 25% smaller */}
            <div className="bg-gradient-to-b from-gray-100/80 to-gray-50 border-b border-gray-200/60 px-4 py-1.5">
              <div className="flex items-center gap-1">
                {/* Active Tab - 25% smaller */}
                <div className="bg-white rounded-t-md px-3 py-1.5 border-t border-l border-r border-gray-200/60 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                    </div>
                    <span className="text-xs font-medium text-gray-900">DemandSense Dashboard</span>
                    <div className="w-3 h-3 text-gray-400 hover:text-gray-600 cursor-pointer text-xs">×</div>
                  </div>
                </div>
                
                {/* Inactive Tab - 25% smaller */}
                <div className="px-3 py-1.5 text-gray-500 hover:text-gray-700 transition-colors duration-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-gray-300" />
                    <span className="text-xs">Analytics</span>
                  </div>
                </div>
                
                {/* New Tab Button - 25% smaller */}
                <div className="ml-1.5 w-6 h-6 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center cursor-pointer transition-colors duration-200">
                  <span className="text-gray-500 text-sm">+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content - Ensure full image visibility */}
          <div className="relative bg-white rounded-b-xl shadow-2xl border-l border-r border-b border-gray-200/60 overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative">
              <img
                src="/media/feature-share-smart.png"
                alt="DemandSense dashboard preview"
                className="w-full h-auto object-contain"
                draggable={false}
                loading="eager"
              />
            </div>
            
            {/* Bottom gradient overlay for depth */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/10 via-gray-900/5 to-transparent pointer-events-none" />
          </div>

          {/* Floating Elements for Premium Feel */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg opacity-20 animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </ContainerScroll>
    </div>
  );
};

export default Hero;