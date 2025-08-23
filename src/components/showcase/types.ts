export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

export interface Tag {
  label: string;
  variant?: 'default' | 'removable';
  onRemove?: () => void;
}

export interface ContactDetail {
  icon: React.ElementType;
  label: string;
  value: string;
  isLink?: boolean;
}

export interface MetricData {
  label: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative';
}

export interface ActivityMetric {
  label: string;
  value: string;
  sublabel?: string;
}

export interface SEOData {
  organicTraffic: MetricData;
  paidTraffic: MetricData;
  backlinks: string;
  referringDomains: string;
}

export interface CompanyProfile {
  name: string;
  description: string;
  tags: Tag[];
  score: number;
  avatar?: string;
  employeeSize: string;
  dateFounded: string;
  industry: string;
  accountType: string;
  dateAdded: string;
  dateLastModified: string;
  contactDetails: ContactDetail[];
  seoData: SEOData;
  activityMetrics: ActivityMetric[];
}