import React from 'react';
import { FeatureCardWrapper } from './FeatureCardWrapper';
import { Bitcoin, Circle, DollarSign, Wallet, Sun, Shapes } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlockchainLogoProps {
  icon: React.ElementType;
  bgColor: string;
  className?: string;
}

const BlockchainLogo: React.FC<BlockchainLogoProps> = ({ icon: Icon, bgColor, className }) => (
  <div className={cn("flex items-center justify-center w-12 h-12 rounded-full shadow-md", bgColor, className)}>
    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
  </div>
);

export const BlockchainLogosCard: React.FC = () => {
  return (
    <FeatureCardWrapper
      title="The best blockchains out there"
      description="Pioneering paths in decentralized solutions"
      className="relative"
    >
      <div className="grid grid-cols-3 gap-4 justify-items-center items-center mt-4">
        <BlockchainLogo icon={Bitcoin} bgColor="bg-feature-yellow" className="col-start-2" />
        <BlockchainLogo icon={Circle} bgColor="bg-feature-blue" className="col-start-3 row-start-1" /> {/* Replaced Ethereum with Circle */}
        <BlockchainLogo icon={DollarSign} bgColor="bg-gray-400" className="col-start-1 row-start-2" /> {/* Replaced Litecoin with DollarSign */}
        <BlockchainLogo icon={Wallet} bgColor="bg-feature-orange" className="col-start-2 row-start-3" /> {/* Replaced Binance with Wallet */}
        <BlockchainLogo icon={Sun} bgColor="bg-feature-purple" className="col-start-1 row-start-3" /> {/* Replaced Solana with Sun */}
        <BlockchainLogo icon={Shapes} bgColor="bg-feature-teal" className="col-start-3 row-start-2" /> {/* Replaced Polygon with Shapes */}
      </div>
    </FeatureCardWrapper>
  );
};