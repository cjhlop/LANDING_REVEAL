import React from 'react';
import CardSwap, { Card } from './CardSwap';
import BrowserHeader from '@/components/BrowserHeader';
import ButtonGroup from '@/components/ButtonGroup';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

const CardSwapSection = () => {
  return (
    <section className="bg-gray-50 relative overflow-hidden" style={{ height: '900px' }}>
      {/* Left content block in a centered 1216px container */}
      <div className="absolute inset-y-0 left-0 right-0">
        <div className="relative h-full w-full max-w-[1216px] mx-auto flex items-center">
          <div className="px-6 md:px-12 max-w-[560px]">
            <p className="text-[12px] leading-5 tracking-[1.2px] uppercase text-[#7C7C7C] font-['DM Mono']">
              Deploy faster
            </p>
            <h3 className="mt-2 text-[32px] leading-[120%] tracking-[-0.9px] text-black font-medium">
              A better workflow
            </h3>
            <p className="mt-4 text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
              iste dolor cupiditate blanditiis ratione.
            </p>

            <dl className="mt-6 space-y-6 text-[16px] leading-[150%]">
              <div className="relative pl-9">
                <dt className="inline font-medium text-gray-900">
                  <CloudArrowUpIcon aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-[#3875f6]" />
                  Push to deploy.
                </dt>{' '}
                <dd className="inline text-[#7C7C7C]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                  iste dolor cupiditate blanditiis ratione.
                </dd>
              </div>
              <div className="relative pl-9">
                <dt className="inline font-medium text-gray-900">
                  <LockClosedIcon aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-[#3875f6]" />
                  SSL certificates.
                </dt>{' '}
                <dd className="inline text-[#7C7C7C]">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </dd>
              </div>
              <div className="relative pl-9">
                <dt className="inline font-medium text-gray-900">
                  <ServerIcon aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-[#3875f6]" />
                  Database backups.
                </dt>{' '}
                <dd className="inline text-[#7C7C7C]">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </dd>
              </div>
            </dl>

            <div className="mt-8">
              <ButtonGroup primaryLabel="Get started" secondaryLabel="Learn more" />
            </div>
          </div>
        </div>
      </div>

      {/* Right: Cards (kept exactly as they are now) */}
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