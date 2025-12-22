import React from 'react';
import { ArrowRight, Check, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContainerScroll } from './ui/container-scroll-animation';

export const Hero: React.FC = () => {
  const titleComponent = (
    <div className="flex flex-col items-center text-center px-4" style={{ paddingTop: '250px' }}>
      {/* Badge Group */}
      <div className="inline-flex items-center bg-gray-50 rounded-full p-1 mb-12 shadow-md" role="group" aria-label="Update notification">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
          <Circle className="h-3 w-3 text-green-500 fill-green-500 animate-pulse-soft" aria-hidden="true" />
          <span className="text-sm font-normal text-gray-900 tracking-tight">New</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1">
          <span className="text-sm font-normal text-gray-900 tracking-tight">Influenced Revenue</span>
          <ArrowRight className="h-3.5 w-3.5 text-gray-600" aria-hidden="true" />
        </div>
      </div>

      {/* Animated Main Heading */}
      <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-12 max-w-5xl leading-tight tracking-tight">
        Sense Every <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Buyer Signal</span>.<br />
        Drive Every <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">B2B Sale</span>.
      </h1>

      {/* Hero Buttons */}
      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <Button 
          variant="hero" 
          size="hero"
          onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
        >
          Get started
        </Button>
        <Button 
          variant="hero-outline" 
          size="hero"
        >
          Contact us
        </Button>
      </div>

      {/* Checkmark Features */}
      <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-12">
        <div className="flex items-center gap-2" role="listitem">
          <Check className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
          <span className="tracking-tight">30 days free trial</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col overflow-hidden min-h-screen pb-32">
      {/* Dynamic animated shadows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Blue orb (#3875F6) */}
        <div
          className="absolute w-[60%] aspect-square rounded-full mix-blend-soft-light"
          style={{
            top: "-10%",
            left: "-10%",
            filter: "blur(48px)",
            background:
              "radial-gradient(circle at center, rgba(56,117,246,0.45) 0%, rgba(56,117,246,0.20) 35%, rgba(56,117,246,0) 70%)",
            animation: "orb-1 24s ease-in-out infinite alternate",
            willChange: "transform",
          }}
        />
        {/* Orange orb (#FA8C16) */}
        <div
          className="absolute w-[55%] aspect-square rounded-full mix-blend-soft-light"
          style={{
            bottom: "-15%",
            right: "-10%",
            filter: "blur(52px)",
            background:
              "radial-gradient(circle at center, rgba(250,140,22,0.40) 0%, rgba(250,140,22,0.18) 35%, rgba(250,140,22,0) 70%)",
            animation: "orb-2 30s ease-in-out infinite alternate",
            willChange: "transform",
          }}
        />
      </div>

      <ContainerScroll titleComponent={titleComponent}>
        <div className="w-full h-full" />
      </ContainerScroll>

      <style>{`
        @keyframes orb-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10%, -5%) scale(1.1); }
          66% { transform: translate(-5%, 10%) scale(0.9); }
        }
        
        @keyframes orb-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-8%, 8%) scale(1.05); }
          66% { transform: translate(12%, -6%) scale(0.95); }
        }
      `}</style>
    </div>
  );
};

export default Hero;