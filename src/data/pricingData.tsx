import { CheckCircle2, XCircle } from 'lucide-react';
import React from 'react';

export interface Plan {
  id: 'basic' | 'advanced' | 'pro';
  name: string;
  price: number;
  description: string;
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
    name: 'Basic',
    price: 19,
    description: 'Perfect for individuals getting started',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: 29,
    description: 'Built for growing teams.',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49,
    description: 'Best for businesses.',
  },
];

export const featureCategories: FeatureCategory[] = [
  {
    name: 'Project',
    features: [
      { name: 'Project Slots', values: { basic: '10', advanced: '40', pro: 'Unlimited' } },
      { name: 'Team Collaboration', values: { basic: true, advanced: true, pro: true } },
      { name: 'File Exports', values: { basic: '10', advanced: '40', pro: 'Unlimited' } },
      { name: 'Custom Branding', values: { basic: true, advanced: false, pro: false } },
      { name: 'Version History', values: { basic: '10', advanced: '40', pro: 'Unlimited' } },
    ],
  },
  {
    name: 'Template',
    features: [
      { name: 'Templates access', values: { basic: '10', advanced: '40', pro: 'Unlimited' } },
      { name: 'Advanced permissions', values: { basic: true, advanced: true, pro: true } },
      { name: 'Asset library', values: { basic: '10', advanced: '40', pro: 'Unlimited' } },
      { name: 'Feedback tools', values: { basic: true, advanced: false, pro: false } },
      { name: 'Shared folders', values: { basic: '10', advanced: '40', pro: 'Unlimited' } },
    ],
  },
  {
    name: 'Analytics',
    features: [
      { name: 'Analytics', values: { basic: '10', advanced: '40', pro: 'Unlimited' } },
      { name: 'Custom Domains', values: { basic: true, advanced: true, pro: true } },
      { name: 'API Access', values: { basic: '10', advanced: '40', pro: 'Unlimited' } },
      { name: 'SSO Integration', values: { basic: true, advanced: false, pro: false } },
      { name: 'Automatic Workflows', values: { basic: '10', advanced: '40', pro: 'Unlimited' } },
    ],
  },
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