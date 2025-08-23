import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Edit,
  ThumbsUp,
  ThumbsDown,
  ChevronLeft,
} from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';
import { TagComponent } from './TagComponent';
import { ScoreCircle } from './ScoreCircle';
import { ContactDetailItem } from './ContactDetailItem';
import { MetricCard } from './MetricCard';
import { DonutChart } from './DonutChart';
import { CompanyProfile } from './types';

const mockData: CompanyProfile = {
  name: 'Microsoft corp.',
  description: 'Microsoft is the largest vendor of computer software in the world. It is also a leading provider of cloud computing services, video games, computer and gaming hardware, search and other online services.',
  tags: [
    { label: 'Sales Lead', variant: 'removable' },
    { label: 'Competitive', variant: 'removable' },
    { label: 'New Tag', variant: 'default' },
  ],
  score: 68,
  employeeSize: '51-100',
  dateFounded: '1975',
  industry: 'Technology',
  accountType: 'Public',
  dateAdded: '2020-05-01, 6:05 AM',
  dateLastModified: '2023-05-01, 3:05 PM',
  contactDetails: [
    { icon: Mail, label: 'Email', value: 'contact@microsoft.com', isLink: true },
    { icon: Phone, label: 'Direct line', value: '+1 (877) 532 - 2739' },
    { icon: Phone, label: 'Office phone', value: '+1 (877) 532 - 2739' },
    { icon: Globe, label: 'Website', value: 'www.microsoft.com', isLink: true },
    { icon: MapPin, label: 'Headquarters', value: 'One Microsoft Way, Redmond, WA 98052, USA' },
  ],
  seoData: {
    organicTraffic: { label: 'Organic traffic', value: '~15K', change: '-22%', changeType: 'negative' },
    paidTraffic: { label: 'Paid traffic', value: '~22K', change: '+24%', changeType: 'positive' },
    backlinks: '15,452',
    referringDomains: '~15K',
  },
  activityMetrics: [
    { label: 'Number of visits', value: '5' },
    { label: 'Number of visited pages', value: '12' },
    { label: 'General time on site', value: '25 min' },
    { label: 'First visit', value: 'Dec 1, 2022' },
    { label: 'Last visit', value: 'Yesterday' },
    { label: 'First page visited', value: 'blog/are-linkedin-ads-expensive', sublabel: 'Link' },
    { label: 'First referrer', value: 'www.neil.patel.com/top-ads-agencies', sublabel: 'Link' },
    { label: 'Last page visited', value: '/packages', sublabel: 'Link' },
  ],
};

export const HeroSectionShowcase: React.FC = () => {
  const [data] = useState<CompanyProfile>(mockData);

  const breadcrumbItems = [
    { label: 'Audiences', href: '#' },
    { label: 'Website visitors', href: '#' },
    { label: 'Microsoft', isActive: true },
  ];

  return (
    <div className="w-full h-[714px] bg-showcase-bg rounded-2xl overflow-hidden" role="main">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-showcase-border">
          <Breadcrumb items={breadcrumbItems} />
          <div className="flex items-center gap-3 mt-4">
            <button
              className="p-2 hover:bg-showcase-hover rounded-lg transition-colors"
              aria-label="Go back"
            >
              <ChevronLeft className="h-5 w-5 text-showcase-icon" />
            </button>
            <h1 className="text-xl font-semibold text-showcase-text-primary">Company profile</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="grid grid-cols-12 gap-6 p-6 h-full">
            {/* Main Content */}
            <div className="col-span-8 space-y-6">
              {/* Company Profile Card */}
              <div className="bg-white rounded-lg border border-showcase-border">
                <div className="flex items-center justify-between p-4 border-b border-showcase-border">
                  <h2 className="text-lg font-semibold text-showcase-text-primary">Contact details</h2>
                  <button className="flex items-center gap-2 text-sm text-showcase-text-secondary hover:text-showcase-text-primary transition-colors">
                    <Edit className="h-4 w-4" />
                    Edit
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-showcase-avatar rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-red-500 rounded"></div>
                      <div className="w-8 h-8 bg-green-500 rounded ml-1"></div>
                      <div className="w-8 h-8 bg-blue-500 rounded ml-1"></div>
                      <div className="w-8 h-8 bg-yellow-500 rounded ml-1"></div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-showcase-text-primary mb-2">
                        {data.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {data.tags.map((tag, index) => (
                          <TagComponent key={index} {...tag} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm text-showcase-text-secondary mb-2">Description</h4>
                    <p className="text-sm text-showcase-text-primary leading-relaxed">
                      {data.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <span className="text-sm text-showcase-text-secondary">Employee size</span>
                      <p className="text-sm font-medium text-showcase-text-primary">{data.employeeSize}</p>
                    </div>
                    <div>
                      <span className="text-sm text-showcase-text-secondary">Date founded</span>
                      <p className="text-sm font-medium text-showcase-text-primary">{data.dateFounded}</p>
                    </div>
                    <div>
                      <span className="text-sm text-showcase-text-secondary">Industry</span>
                      <p className="text-sm font-medium text-showcase-text-primary">{data.industry}</p>
                    </div>
                    <div>
                      <span className="text-sm text-showcase-text-secondary">Account type</span>
                      <p className="text-sm font-medium text-showcase-text-primary">{data.accountType}</p>
                    </div>
                    <div>
                      <span className="text-sm text-showcase-text-secondary">Date added</span>
                      <p className="text-sm font-medium text-showcase-text-primary">{data.dateAdded}</p>
                    </div>
                    <div>
                      <span className="text-sm text-showcase-text-secondary">Date last modified</span>
                      <p className="text-sm font-medium text-showcase-text-primary">{data.dateLastModified}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO Insights */}
              <div className="bg-white rounded-lg border border-showcase-border">
                <div className="p-4 border-b border-showcase-border">
                  <h2 className="text-lg font-semibold text-showcase-text-primary">SEO insights</h2>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-8">
                    <DonutChart organicValue={15} paidValue={22} />
                    <div className="flex-1 grid grid-cols-2 gap-6">
                      <MetricCard {...data.seoData.organicTraffic} />
                      <MetricCard {...data.seoData.paidTraffic} />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <span className="text-sm text-showcase-text-secondary">Backlinks</span>
                        <p className="text-2xl font-semibold text-showcase-text-primary">{data.seoData.backlinks}</p>
                      </div>
                      <div>
                        <span className="text-sm text-showcase-text-secondary">Referring domains</span>
                        <p className="text-2xl font-semibold text-showcase-text-primary">{data.seoData.referringDomains}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Insights */}
              <div className="bg-white rounded-lg border border-showcase-border">
                <div className="p-4 border-b border-showcase-border">
                  <h2 className="text-lg font-semibold text-showcase-text-primary">Activity insights</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-6">
                    {data.activityMetrics.slice(0, 4).map((metric, index) => (
                      <div key={index} className="text-center">
                        <span className="text-sm text-showcase-text-secondary">{metric.label}</span>
                        <p className="text-2xl font-semibold text-showcase-text-primary mt-1">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-6 mt-6">
                    {data.activityMetrics.slice(4).map((metric, index) => (
                      <div key={index}>
                        <span className="text-sm text-showcase-text-secondary">{metric.label}</span>
                        <p className={`text-sm mt-1 ${metric.sublabel ? 'text-showcase-link' : 'text-showcase-text-primary font-medium'}`}>
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-4">
              <div className="bg-white rounded-lg border border-showcase-border h-full">
                <div className="flex items-center justify-between p-4 border-b border-showcase-border">
                  <h2 className="text-lg font-semibold text-showcase-text-primary">Contact details</h2>
                  <button className="flex items-center gap-2 text-sm text-showcase-text-secondary hover:text-showcase-text-primary transition-colors">
                    <Edit className="h-4 w-4" />
                    Edit
                  </button>
                </div>

                <div className="p-4">
                  {/* Score Section */}
                  <div className="flex items-center justify-between mb-6">
                    <ScoreCircle score={data.score} />
                    <div className="text-right">
                      <p className="text-sm text-showcase-text-secondary mb-2">Rate Account:</p>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-showcase-hover rounded-lg transition-colors">
                          <ThumbsUp className="h-5 w-5 text-showcase-icon" />
                        </button>
                        <button className="p-2 hover:bg-showcase-hover rounded-lg transition-colors">
                          <ThumbsDown className="h-5 w-5 text-showcase-icon" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-1">
                    {data.contactDetails.map((detail, index) => (
                      <ContactDetailItem key={index} {...detail} />
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 mt-6 pt-4 border-t border-showcase-border">
                    <Facebook className="h-5 w-5 text-showcase-icon hover:text-showcase-link cursor-pointer transition-colors" />
                    <Linkedin className="h-5 w-5 text-showcase-icon hover:text-showcase-link cursor-pointer transition-colors" />
                    <Twitter className="h-5 w-5 text-showcase-icon hover:text-showcase-link cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};