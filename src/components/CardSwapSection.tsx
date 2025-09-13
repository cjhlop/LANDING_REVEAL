import React from 'react';
import CardSwap, { Card } from './CardSwap';
import BrowserHeader from '@/components/BrowserHeader';
import ButtonGroup from '@/components/ButtonGroup';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

const panels = [
  {
    eyebrow: 'Deploy faster',
    title: 'A better workflow',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    bullets: [
      {
        icon: CloudArrowUpIcon,
        title: 'Push to deploy.',
        text:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      },
      {
        icon: LockClosedIcon,
        title: 'SSL certificates.',
        text: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      },
      {
        icon: ServerIcon,
        title: 'Database backups.',
        text: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      },
    ],
  },
  {
    eyebrow: 'Optimize spend',
    title: 'Spend smarter',
    description:
      'Reduce waste and increase performance by targeting the right audiences at the right time.',
    bullets: [
      {
        icon: CloudArrowUpIcon,
        title: 'Ad scheduling.',
        text: 'Pause during low-engagement hours and prioritize high-performing windows automatically.',
      },
      {
        icon: LockClosedIcon,
        title: 'Frequency cap.',
        text: 'Prevent ad fatigue by limiting repeated impressions to the same accounts.',
      },
      {
        icon: ServerIcon,
        title: 'Audience tuning.',
        text: 'Refine audiences continuously based on engagement and intent signals.',
      },
    ],
  },
  {
    eyebrow: 'Prove impact',
    title: 'Connect to revenue',
    description:
      'Measure true ROI with visibility across the entire journey—from first touch to revenue.',
    bullets: [
      {
        icon: CloudArrowUpIcon,
        title: 'Influenced revenue.',
        text: 'Show how campaigns contribute to pipeline and closed-won deals.',
      },
      {
        icon: LockClosedIcon,
        title: 'Full-journey insights.',
        text: 'Track engagement across LinkedIn and your website in one place.',
      },
      {
        icon: ServerIcon,
        title: 'Attribution made clear.',
        text: 'Explain marketing impact with transparent, easy-to-share reporting.',
      },
    ],
  },
];

const CardSwapSection = () => {
  const [active, setActive] = React.useState(0);
  const panel = panels[active % panels.length];

  return (
    <section
      className="bg-gray-50 relative overflow-hidden min-h-[780px] sm:min-h-[820px] md:min-h-[860px] lg:min-h-[900px]"
      aria-label="Animated product previews with synchronized content"
    >
      {/* Left content block in a centered 1216px container */}
      <div className="absolute inset-y-0 left-0 right-0">
        <div className="relative h-full w-full max-w-[1216px] mx-auto flex items-center">
          <div className="px-6 md:px-12 max-w-[560px]" aria-live="polite">
            <p className="text-[12px] leading-5 tracking-[1.2px] uppercase text-[#7C7C7C] font-['DM Mono']">
              {panel.eyebrow}
            </p>
            <h3 className="mt-2 text-[32px] leading-[120%] tracking-[-0.9px] text-black font-medium">
              {panel.title}
            </h3>
            <p className="mt-4 text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C]">
              {panel.description}
            </p>

            <dl className="mt-6 space-y-6 text-[16px] leading-[150%]">
              {panel.bullets.map((b, i) => (
                <div key={`${b.title}-${i}`} className="relative pl-9">
                  <dt className="inline font-medium text-gray-900">
                    <b.icon aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-[#3875f6]" />
                    {b.title}
                  </dt>{' '}
                  <dd className="inline text-[#7C7C7C]">{b.text}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <ButtonGroup primaryLabel="Get started" secondaryLabel="Learn more" />
            </div>
          </div>
        </div>
      </div>

      {/* Right: Cards (15% smaller, otherwise identical) */}
      <CardSwap
        width={850}       // 1000 -> 850 (15% smaller)
        height={680}      // 800  -> 680 (15% smaller)
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
        onActiveIndexChange={setActive}
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