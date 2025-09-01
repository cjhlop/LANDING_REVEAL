import { CheckCircle2, XCircle } from 'lucide-react';
import React from 'react';

export interface Plan {
  id: 'basic' | 'plus' | 'pro' | 'custom';
  name: string;
  price: number | string;
  description: string;
  popular?: boolean;
}

export interface Feature {
  name: string;
  values: {
    [key in Plan['id']]: string | boolean;
  };
}

export interface FeatureCategory {
  name: string;
  features: Feature[];
}

export const plans: Plan[] = [
  {
    id: 'basic',
    name: 'DemandSense Basic',
    price: 99,
    description: 'For single ad accounts getting started with optimization.',
  },
  {
    id: 'plus',
    name: 'DemandSense Plus',
    price: 149,
    description: 'For growing teams managing multiple ad accounts.',
    popular: true,
  },
  {
    id: 'pro',
    name: 'DemandSense Pro',
    price: 249,
    description: 'For businesses that need advanced features and faster support.',
  },
  {
    id: 'custom',
    name: 'DemandSense Custom',
    price: 'Custom',
    description: 'For large enterprises with unique requirements.',
  },
];

export const featureCategories: FeatureCategory[] = [
    {
        name: 'Seats Included (Ad Accounts)',
        features: [
            { name: 'Ad Accounts', values: { basic: '1', plus: '3', pro: '5', custom: 'Custom' } },
        ]
    },
    {
        name: 'LinkedIn Ads Optimization',
        features: [
            { name: 'Ads Scheduling', values: { basic: true, plus: true, pro: true, custom: true } },
            { name: 'Frequency Cap', values: { basic: true, plus: true, pro: true, custom: true } },
            { name: 'Audience Tuning', values: { basic: true, plus: true, pro: true, custom: true } },
            { name: 'Budget Control', values: { basic: true, plus: true, pro: true, custom: true } },
            { name: 'Influenced Revenue', values: { basic: false, plus: false, pro: true, custom: true } },
        ],
    },
    {
        name: 'Core Features',
        features: [
            { name: 'AI Co-pilot', values: { basic: '100', plus: '250', pro: '500', custom: 'Custom' } },
            { name: 'Ad-Hoc Reports (Dashboard No.)', values: { basic: '5', plus: '10', pro: '15', custom: 'Custom' } },
        ]
    },
    {
        name: 'Website Visitor',
        features: [
            { name: 'Companies', values: { basic: '250', plus: '500', pro: '1000', custom: 'Custom' } },
            { name: 'Individual Contacts', values: { basic: '150', plus: '250', pro: '500', custom: 'Custom' } },
        ],
    },
    {
        name: 'Reports',
        features: [
            { name: 'Linkedin Ads Reports', values: { basic: true, plus: true, pro: true, custom: true } },
            { name: 'Website Visitor Reports', values: { basic: true, plus: true, pro: true, custom: true } },
            { name: 'Multichannel Reporting', values: { basic: true, plus: true, pro: true, custom: true } },
        ],
    },
    {
        name: 'Add-ons & Support',
        features: [
            { name: 'Prospector', values: { basic: '0', plus: '1000', pro: '2500', custom: 'Custom' } },
            { name: 'Data Sync Cycle†', values: { basic: 'Every 24 h', plus: 'Every 24 h', pro: 'Every 24 h', custom: 'Configurable' } },
            { name: 'Support', values: { basic: '24 h SLA', plus: '24 h SLA', pro: '12 h SLA', custom: 'Dedicated TAM' } },
        ]
    }
];

export const renderFeatureValue = (value: string | boolean) => {
  if (typeof value === 'boolean') {
    return value ? (
      <CheckCircle2 className="h-6 w-6 text-gray-800" />
    ) : (
      <XCircle className="h-6 w-6 text-gray-400" />
    );
  }
  return <p className="pricing-feature-value-text">{value}</p>;
};