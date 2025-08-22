import React from 'react';
import { ServiceSegmentedPickerCard } from './ServiceSegmentedPickerCard';
import { InviteTeamCard } from './InviteTeamCard';
import { CodeSnippetCard } from './CodeSnippetCard';
import { BlockchainLogosCard } from './BlockchainLogosCard';
import { Web3TagsCard } from './Web3TagsCard';

export const Features: React.FC = () => {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-8 flex flex-col items-center">
        {/* Main Heading and Subtitle */}
        <div className="text-center max-w-2xl mb-16">
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-feature-dark-text leading-tight mb-4">
            Explore Our Feature
          </h2>
          <p className="font-dm-sans text-lg md:text-xl text-feature-gray-text leading-relaxed">
            Discover the powerful features that make our platform stand out
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {/* Top Row */}
          <ServiceSegmentedPickerCard />
          <InviteTeamCard />

          {/* Bottom Row */}
          <CodeSnippetCard />
          <BlockchainLogosCard />
          <Web3TagsCard />
        </div>
      </div>
    </section>
  );
};