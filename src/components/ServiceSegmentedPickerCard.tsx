import React, { useState } from 'react';
import { FeatureCardWrapper } from './FeatureCardWrapper';
import { FeatureButton } from './FeatureButton';
import { Code, Palette, ShieldCheck, Globe, Users, Lock, Rocket, Maximize } from 'lucide-react';

export const ServiceSegmentedPickerCard: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Powerful APIs');

  const servicesTopRow = [
    { name: 'Powerful APIs', icon: Code },
    { name: 'For Design', icon: Palette },
    { name: 'Cybersecurity', icon: ShieldCheck },
    { name: 'Decentralized', icon: Globe },
  ];

  const servicesBottomRow = [
    { name: 'Collaborative teams', icon: Users },
    { name: 'Safe Space', icon: Lock },
    { name: 'Revolution', icon: Rocket },
    { name: 'Scalable', icon: Maximize },
  ];

  return (
    <FeatureCardWrapper
      title="Ready to go services"
      description="Streamlining solutions for swift success"
      className="lg:col-span-2 relative"
      gradientBg={true}
    >
      <div className="flex flex-wrap gap-3 mb-4">
        {servicesTopRow.map((service) => (
          <FeatureButton
            key={service.name}
            text={service.name}
            icon={service.icon}
            isSelected={selectedService === service.name}
            onClick={() => setSelectedService(service.name)}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {servicesBottomRow.map((service) => (
          <FeatureButton
            key={service.name}
            text={service.name}
            icon={service.icon}
            isSelected={selectedService === service.name}
            onClick={() => setSelectedService(service.name)}
          />
        ))}
      </div>
      {/* Placeholder for the 'bottom' vector graphic from Figma */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-feature-light-green/20 rounded-full blur-3xl -z-10" />
    </FeatureCardWrapper>
  );
};