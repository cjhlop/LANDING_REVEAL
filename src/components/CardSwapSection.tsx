import React from 'react';
import CardSwap, { Card } from './CardSwap';
import BrowserHeader from '@/components/BrowserHeader';
import FeatureItem from '@/components/features/FeatureItem';
import { CheckCircle2 } from 'lucide-react';

const CardSwapSection = () => {
  const featureDescription = (
    <div className="space-y-3">
      <p>Uncover who&apos;s engaging with your brand:</p>
      <ul className="space-y-2" role="list">
        <li className="flex items-start gap-2" role="listitem">
          <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
          <span>Unmask anonymous website visitors showing intent</span>
        </li>
        <li className="flex items-start gap-2" role="listitem">
          <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
          <span>Reveal companies demonstrating buying signals</span>
        </li>
        <li className="flex items-start gap-2" role="listitem">
          <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
          <span>Access decision-makers from companies showing intent</span>
        </li>
        <li className="flex items-start gap-2" role="listitem">
          <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
          <span>Track engagement across LinkedIn and your website</span>
        </li>
      </ul>
    </div>
  );

  return (
    <section className="bg-gray-50 relative overflow-hidden" style={{ minHeight: '900px' }}>
      <div className="max-w-[1216px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left block: FeatureItem content (no image) */}
          <div>
            <FeatureItem
              className="lg:grid-cols-1"
              label="demand"
              title="Sense Demand"
              description={featureDescription}
              imageSlot={<div className="hidden" aria-hidden="true" />}
              imagePosition="left"
            />
          </div>

          {/* Right block: CardSwap cards (as-is) */}
          <div className="relative" style={{ height: '800px' }}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSwapSection;