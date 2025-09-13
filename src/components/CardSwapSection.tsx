import React from 'react';
import CardSwap, { Card } from './CardSwap';
import BrowserHeader from '@/components/BrowserHeader';

const CardSwapSection = () => {
  return (
    <section className="bg-gray-50 relative overflow-hidden" style={{ height: '900px' }}>
      <CardSwap
        width={1000}
        height={800}
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
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
    </section>
  );
};

export default CardSwapSection;