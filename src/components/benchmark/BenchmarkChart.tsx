import * as React from "react";
import { cn } from "@/lib/utils";

type BenchmarkChartProps = {
  metric: string;
  industry: string;
};

// Sample data structure - in production, this would come from your API
const BENCHMARK_DATA: Record<string, Record<string, { benchmark: number; customer: number }[]>> = {
  cpc: {
    "Business Services/Consulting": [
      { benchmark: 7.8, customer: 3.52 },
      { benchmark: 8.21, customer: 3.53 },
      { benchmark: 8.61, customer: 4.71 },
      { benchmark: 7.83, customer: 5.95 },
      { benchmark: 7.37, customer: 6.58 },
      { benchmark: 6.89, customer: 5.3 },
      { benchmark: 7.88, customer: 5.1 },
      { benchmark: 8.83, customer: 7.34 },
      { benchmark: 6.29, customer: 8.93 },
      { benchmark: 6.06, customer: 8.19 },
      { benchmark: 7.21, customer: 7.77 },
      { benchmark: 9.74, customer: 9.87 },
      { benchmark: 10.33, customer: 9.49 },
    ],
    "SaaS": [
      { benchmark: 8.2, customer: 4.1 },
      { benchmark: 8.5, customer: 4.3 },
      { benchmark: 9.1, customer: 5.2 },
      { benchmark: 8.3, customer: 6.1 },
      { benchmark: 7.9, customer: 6.8 },
      { benchmark: 7.2, customer: 5.9 },
      { benchmark: 8.1, customer: 5.5 },
      { benchmark: 9.2, customer: 7.8 },
      { benchmark: 6.8, customer: 9.1 },
      { benchmark: 6.5, customer: 8.5 },
      { benchmark: 7.8, customer: 8.2 },
      { benchmark: 10.1, customer: 10.2 },
      { benchmark: 10.8, customer: 9.9 },
    ],
    "IT Services": [
      { benchmark: 7.5, customer: 3.8 },
      { benchmark: 7.9, customer: 4.1 },
      { benchmark: 8.3, customer: 4.9 },
      { benchmark: 7.6, customer: 5.7 },
      { benchmark: 7.1, customer: 6.2 },
      { benchmark: 6.7, customer: 5.5 },
      { benchmark: 7.5, customer: 5.3 },
      { benchmark: 8.5, customer: 7.1 },
      { benchmark: 6.1, customer: 8.5 },
      { benchmark: 5.9, customer: 7.9 },
      { benchmark: 7.0, customer: 7.5 },
      { benchmark: 9.3, customer: 9.5 },
      { benchmark: 9.9, customer: 9.2 },
    ],
    "Financial Services": [
      { benchmark: 9.2, customer: 4.5 },
      { benchmark: 9.5, customer: 4.8 },
      { benchmark: 10.1, customer: 5.9 },
      { benchmark: 9.3, customer: 6.8 },
      { benchmark: 8.8, customer: 7.2 },
      { benchmark: 8.2, customer: 6.5 },
      { benchmark: 9.1, customer: 6.2 },
      { benchmark: 10.2, customer: 8.5 },
      { benchmark: 7.5, customer: 9.8 },
      { benchmark: 7.2, customer: 9.1 },
      { benchmark: 8.5, customer: 8.9 },
      { benchmark: 11.2, customer: 11.1 },
      { benchmark: 11.8, customer: 10.8 },
    ],
    "Marketing Services": [
      { benchmark: 7.2, customer: 3.3 },
      { benchmark: 7.6, customer: 3.5 },
      { benchmark: 8.0, customer: 4.5 },
      { benchmark: 7.3, customer: 5.6 },
      { benchmark: 6.9, customer: 6.1 },
      { benchmark: 6.4, customer: 5.0 },
      { benchmark: 7.3, customer: 4.9 },
      { benchmark: 8.2, customer: 6.9 },
      { benchmark: 5.8, customer: 8.3 },
      { benchmark: 5.6, customer: 7.7 },
      { benchmark: 6.7, customer: 7.3 },
      { benchmark: 9.0, customer: 9.2 },
      { benchmark: 9.6, customer: 8.9 },
    ],
    "Other": [
      { benchmark: 7.9, customer: 3.7 },
      { benchmark: 8.3, customer: 3.9 },
      { benchmark: 8.7, customer: 5.0 },
      { benchmark: 7.9, customer: 6.2 },
      { benchmark: 7.5, customer: 6.7 },
      { benchmark: 7.0, customer: 5.6 },
      { benchmark: 8.0, customer: 5.4 },
      { benchmark: 9.0, customer: 7.6 },
      { benchmark: 6.5, customer: 9.2 },
      { benchmark: 6.3, customer: 8.5 },
      { benchmark: 7.5, customer: 8.1 },
      { benchmark: 10.0, customer: 10.1 },
      { benchmark: 10.6, customer: 9.7 },
    ],
  },
  cpl: {
    "Business Services/Consulting": [
      { benchmark: 45.2, customer: 28.5 },
      { benchmark: 47.8, customer: 29.1 },
      { benchmark: 49.3, customer: 32.4 },
      { benchmark: 46.1, customer: 35.8 },
      { benchmark: 44.5, customer: 38.2 },
      { benchmark: 42.8, customer: 34.9 },
      { benchmark: 46.9, customer: 33.7 },
      { benchmark: 51.2, customer: 41.5 },
      { benchmark: 39.8, customer: 48.3 },
      { benchmark: 38.5, customer: 45.2 },
      { benchmark: 43.7, customer: 43.8 },
      { benchmark: 55.8, customer: 52.1 },
      { benchmark: 58.4, customer: 49.8 },
    ],
    "SaaS": [
      { benchmark: 48.5, customer: 31.2 },
      { benchmark: 50.8, customer: 32.5 },
      { benchmark: 53.2, customer: 36.8 },
      { benchmark: 49.3, customer: 40.2 },
      { benchmark: 47.1, customer: 42.5 },
      { benchmark: 44.9, customer: 38.7 },
      { benchmark: 49.8, customer: 37.2 },
      { benchmark: 54.5, customer: 45.8 },
      { benchmark: 42.3, customer: 52.1 },
      { benchmark: 40.8, customer: 48.9 },
      { benchmark: 46.9, customer: 47.5 },
      { benchmark: 59.2, customer: 56.3 },
      { benchmark: 61.8, customer: 54.2 },
    ],
    "IT Services": [
      { benchmark: 43.8, customer: 27.1 },
      { benchmark: 46.2, customer: 28.3 },
      { benchmark: 48.5, customer: 31.9 },
      { benchmark: 44.9, customer: 35.1 },
      { benchmark: 43.1, customer: 37.2 },
      { benchmark: 41.2, customer: 33.8 },
      { benchmark: 45.3, customer: 32.5 },
      { benchmark: 49.8, customer: 40.2 },
      { benchmark: 38.2, customer: 46.8 },
      { benchmark: 36.9, customer: 43.5 },
      { benchmark: 42.1, customer: 42.1 },
      { benchmark: 53.9, customer: 50.3 },
      { benchmark: 56.2, customer: 48.1 },
    ],
    "Financial Services": [
      { benchmark: 52.8, customer: 35.2 },
      { benchmark: 55.3, customer: 36.8 },
      { benchmark: 58.1, customer: 41.5 },
      { benchmark: 53.9, customer: 45.8 },
      { benchmark: 51.5, customer: 48.2 },
      { benchmark: 49.2, customer: 43.9 },
      { benchmark: 54.2, customer: 42.1 },
      { benchmark: 59.8, customer: 51.2 },
      { benchmark: 46.5, customer: 58.3 },
      { benchmark: 44.8, customer: 54.5 },
      { benchmark: 51.2, customer: 53.1 },
      { benchmark: 65.8, customer: 62.8 },
      { benchmark: 68.9, customer: 60.2 },
    ],
    "Marketing Services": [
      { benchmark: 41.5, customer: 25.8 },
      { benchmark: 43.8, customer: 26.9 },
      { benchmark: 46.1, customer: 30.2 },
      { benchmark: 42.7, customer: 33.5 },
      { benchmark: 40.9, customer: 35.8 },
      { benchmark: 39.1, customer: 32.1 },
      { benchmark: 43.2, customer: 30.9 },
      { benchmark: 47.5, customer: 38.5 },
      { benchmark: 36.5, customer: 45.2 },
      { benchmark: 35.2, customer: 42.1 },
      { benchmark: 40.3, customer: 40.8 },
      { benchmark: 51.8, customer: 48.9 },
      { benchmark: 54.2, customer: 46.5 },
    ],
    "Other": [
      { benchmark: 46.8, customer: 29.8 },
      { benchmark: 49.2, customer: 31.2 },
      { benchmark: 51.5, customer: 34.8 },
      { benchmark: 47.8, customer: 38.5 },
      { benchmark: 45.8, customer: 40.8 },
      { benchmark: 43.8, customer: 36.9 },
      { benchmark: 48.2, customer: 35.5 },
      { benchmark: 52.8, customer: 43.8 },
      { benchmark: 40.8, customer: 50.8 },
      { benchmark: 39.2, customer: 47.2 },
      { benchmark: 44.8, customer: 45.8 },
      { benchmark: 57.5, customer: 54.2 },
      { benchmark: 60.2, customer: 51.8 },
    ],
  },
  ctr: {
    "Business Services/Consulting": [
      { benchmark: 0.52, customer: 0.68 },
      { benchmark: 0.54, customer: 0.71 },
      { benchmark: 0.56, customer: 0.75 },
      { benchmark: 0.53, customer: 0.79 },
      { benchmark: 0.51, customer: 0.82 },
      { benchmark: 0.49, customer: 0.77 },
      { benchmark: 0.54, customer: 0.74 },
      { benchmark: 0.58, customer: 0.85 },
      { benchmark: 0.47, customer: 0.91 },
      { benchmark: 0.46, customer: 0.88 },
      { benchmark: 0.52, customer: 0.86 },
      { benchmark: 0.61, customer: 0.95 },
      { benchmark: 0.64, customer: 0.92 },
    ],
    "SaaS": [
      { benchmark: 0.55, customer: 0.72 },
      { benchmark: 0.57, customer: 0.75 },
      { benchmark: 0.59, customer: 0.79 },
      { benchmark: 0.56, customer: 0.83 },
      { benchmark: 0.54, customer: 0.86 },
      { benchmark: 0.52, customer: 0.81 },
      { benchmark: 0.57, customer: 0.78 },
      { benchmark: 0.61, customer: 0.89 },
      { benchmark: 0.50, customer: 0.95 },
      { benchmark: 0.49, customer: 0.92 },
      { benchmark: 0.55, customer: 0.90 },
      { benchmark: 0.64, customer: 0.99 },
      { benchmark: 0.67, customer: 0.96 },
    ],
    "IT Services": [
      { benchmark: 0.50, customer: 0.65 },
      { benchmark: 0.52, customer: 0.68 },
      { benchmark: 0.54, customer: 0.72 },
      { benchmark: 0.51, customer: 0.76 },
      { benchmark: 0.49, customer: 0.79 },
      { benchmark: 0.47, customer: 0.74 },
      { benchmark: 0.52, customer: 0.71 },
      { benchmark: 0.56, customer: 0.82 },
      { benchmark: 0.45, customer: 0.88 },
      { benchmark: 0.44, customer: 0.85 },
      { benchmark: 0.50, customer: 0.83 },
      { benchmark: 0.59, customer: 0.92 },
      { benchmark: 0.62, customer: 0.89 },
    ],
    "Financial Services": [
      { benchmark: 0.48, customer: 0.62 },
      { benchmark: 0.50, customer: 0.65 },
      { benchmark: 0.52, customer: 0.69 },
      { benchmark: 0.49, customer: 0.73 },
      { benchmark: 0.47, customer: 0.76 },
      { benchmark: 0.45, customer: 0.71 },
      { benchmark: 0.50, customer: 0.68 },
      { benchmark: 0.54, customer: 0.79 },
      { benchmark: 0.43, customer: 0.85 },
      { benchmark: 0.42, customer: 0.82 },
      { benchmark: 0.48, customer: 0.80 },
      { benchmark: 0.57, customer: 0.89 },
      { benchmark: 0.60, customer: 0.86 },
    ],
    "Marketing Services": [
      { benchmark: 0.54, customer: 0.70 },
      { benchmark: 0.56, customer: 0.73 },
      { benchmark: 0.58, customer: 0.77 },
      { benchmark: 0.55, customer: 0.81 },
      { benchmark: 0.53, customer: 0.84 },
      { benchmark: 0.51, customer: 0.79 },
      { benchmark: 0.56, customer: 0.76 },
      { benchmark: 0.60, customer: 0.87 },
      { benchmark: 0.49, customer: 0.93 },
      { benchmark: 0.48, customer: 0.90 },
      { benchmark: 0.54, customer: 0.88 },
      { benchmark: 0.63, customer: 0.97 },
      { benchmark: 0.66, customer: 0.94 },
    ],
    "Other": [
      { benchmark: 0.51, customer: 0.67 },
      { benchmark: 0.53, customer: 0.70 },
      { benchmark: 0.55, customer: 0.74 },
      { benchmark: 0.52, customer: 0.78 },
      { benchmark: 0.50, customer: 0.81 },
      { benchmark: 0.48, customer: 0.76 },
      { benchmark: 0.53, customer: 0.73 },
      { benchmark: 0.57, customer: 0.84 },
      { benchmark: 0.46, customer: 0.90 },
      { benchmark: 0.45, customer: 0.87 },
      { benchmark: 0.51, customer: 0.85 },
      { benchmark: 0.60, customer: 0.94 },
      { benchmark: 0.63, customer: 0.91 },
    ],
  },
  cpm: {
    "Business Services/Consulting": [
      { benchmark: 42.5, customer: 28.3 },
      { benchmark: 44.8, customer: 29.5 },
      { benchmark: 46.9, customer: 32.8 },
      { benchmark: 43.2, customer: 36.2 },
      { benchmark: 41.5, customer: 38.9 },
      { benchmark: 39.8, customer: 35.1 },
      { benchmark: 43.9, customer: 33.8 },
      { benchmark: 48.2, customer: 41.2 },
      { benchmark: 37.5, customer: 47.8 },
      { benchmark: 36.2, customer: 44.5 },
      { benchmark: 41.8, customer: 43.1 },
      { benchmark: 52.1, customer: 51.2 },
      { benchmark: 54.8, customer: 48.9 },
    ],
    "SaaS": [
      { benchmark: 45.8, customer: 31.2 },
      { benchmark: 48.2, customer: 32.8 },
      { benchmark: 50.5, customer: 36.5 },
      { benchmark: 46.8, customer: 40.2 },
      { benchmark: 44.9, customer: 42.8 },
      { benchmark: 42.9, customer: 38.7 },
      { benchmark: 47.5, customer: 37.2 },
      { benchmark: 52.1, customer: 45.5 },
      { benchmark: 40.5, customer: 52.8 },
      { benchmark: 39.1, customer: 49.2 },
      { benchmark: 45.2, customer: 47.8 },
      { benchmark: 56.3, customer: 56.5 },
      { benchmark: 59.2, customer: 54.1 },
    ],
    "IT Services": [
      { benchmark: 41.2, customer: 26.8 },
      { benchmark: 43.5, customer: 28.1 },
      { benchmark: 45.6, customer: 31.5 },
      { benchmark: 42.1, customer: 34.8 },
      { benchmark: 40.3, customer: 37.2 },
      { benchmark: 38.5, customer: 33.5 },
      { benchmark: 42.8, customer: 32.1 },
      { benchmark: 47.1, customer: 39.8 },
      { benchmark: 36.2, customer: 46.2 },
      { benchmark: 34.9, customer: 42.9 },
      { benchmark: 40.5, customer: 41.5 },
      { benchmark: 50.5, customer: 49.5 },
      { benchmark: 53.1, customer: 47.2 },
    ],
    "Financial Services": [
      { benchmark: 49.8, customer: 34.5 },
      { benchmark: 52.3, customer: 36.2 },
      { benchmark: 54.8, customer: 40.2 },
      { benchmark: 50.8, customer: 44.5 },
      { benchmark: 48.7, customer: 47.2 },
      { benchmark: 46.5, customer: 42.8 },
      { benchmark: 51.2, customer: 41.2 },
      { benchmark: 56.3, customer: 50.5 },
      { benchmark: 43.8, customer: 57.8 },
      { benchmark: 42.2, customer: 53.9 },
      { benchmark: 48.9, customer: 52.5 },
      { benchmark: 61.2, customer: 61.8 },
      { benchmark: 64.3, customer: 59.2 },
    ],
    "Marketing Services": [
      { benchmark: 39.8, customer: 25.2 },
      { benchmark: 42.1, customer: 26.5 },
      { benchmark: 44.2, customer: 29.8 },
      { benchmark: 40.8, customer: 33.1 },
      { benchmark: 39.1, customer: 35.5 },
      { benchmark: 37.3, customer: 31.8 },
      { benchmark: 41.5, customer: 30.5 },
      { benchmark: 45.6, customer: 38.2 },
      { benchmark: 35.2, customer: 44.8 },
      { benchmark: 33.9, customer: 41.5 },
      { benchmark: 39.5, customer: 40.1 },
      { benchmark: 49.2, customer: 48.2 },
      { benchmark: 51.8, customer: 45.9 },
    ],
    "Other": [
      { benchmark: 43.8, customer: 29.2 },
      { benchmark: 46.2, customer: 30.8 },
      { benchmark: 48.5, customer: 34.2 },
      { benchmark: 44.9, customer: 37.8 },
      { benchmark: 43.1, customer: 40.2 },
      { benchmark: 41.2, customer: 36.5 },
      { benchmark: 45.5, customer: 35.1 },
      { benchmark: 50.1, customer: 43.2 },
      { benchmark: 38.9, customer: 50.2 },
      { benchmark: 37.5, customer: 46.8 },
      { benchmark: 43.5, customer: 45.2 },
      { benchmark: 54.2, customer: 53.8 },
      { benchmark: 57.1, customer: 51.2 },
    ],
  },
  cvr: {
    "Business Services/Consulting": [
      { benchmark: 2.8, customer: 4.2 },
      { benchmark: 2.9, customer: 4.5 },
      { benchmark: 3.1, customer: 4.8 },
      { benchmark: 2.9, customer: 5.2 },
      { benchmark: 2.7, customer: 5.5 },
      { benchmark: 2.6, customer: 5.1 },
      { benchmark: 2.9, customer: 4.9 },
      { benchmark: 3.2, customer: 5.8 },
      { benchmark: 2.5, customer: 6.3 },
      { benchmark: 2.4, customer: 6.0 },
      { benchmark: 2.8, customer: 5.8 },
      { benchmark: 3.4, customer: 6.7 },
      { benchmark: 3.6, customer: 6.5 },
    ],
    "SaaS": [
      { benchmark: 3.1, customer: 4.5 },
      { benchmark: 3.2, customer: 4.8 },
      { benchmark: 3.4, customer: 5.2 },
      { benchmark: 3.2, customer: 5.6 },
      { benchmark: 3.0, customer: 5.9 },
      { benchmark: 2.9, customer: 5.5 },
      { benchmark: 3.2, customer: 5.3 },
      { benchmark: 3.5, customer: 6.2 },
      { benchmark: 2.8, customer: 6.8 },
      { benchmark: 2.7, customer: 6.5 },
      { benchmark: 3.1, customer: 6.3 },
      { benchmark: 3.7, customer: 7.2 },
      { benchmark: 3.9, customer: 7.0 },
    ],
    "IT Services": [
      { benchmark: 2.6, customer: 3.9 },
      { benchmark: 2.7, customer: 4.2 },
      { benchmark: 2.9, customer: 4.5 },
      { benchmark: 2.7, customer: 4.9 },
      { benchmark: 2.5, customer: 5.2 },
      { benchmark: 2.4, customer: 4.8 },
      { benchmark: 2.7, customer: 4.6 },
      { benchmark: 3.0, customer: 5.5 },
      { benchmark: 2.3, customer: 6.0 },
      { benchmark: 2.2, customer: 5.7 },
      { benchmark: 2.6, customer: 5.5 },
      { benchmark: 3.2, customer: 6.4 },
      { benchmark: 3.4, customer: 6.2 },
    ],
    "Financial Services": [
      { benchmark: 2.4, customer: 3.6 },
      { benchmark: 2.5, customer: 3.9 },
      { benchmark: 2.7, customer: 4.2 },
      { benchmark: 2.5, customer: 4.6 },
      { benchmark: 2.3, customer: 4.9 },
      { benchmark: 2.2, customer: 4.5 },
      { benchmark: 2.5, customer: 4.3 },
      { benchmark: 2.8, customer: 5.2 },
      { benchmark: 2.1, customer: 5.7 },
      { benchmark: 2.0, customer: 5.4 },
      { benchmark: 2.4, customer: 5.2 },
      { benchmark: 3.0, customer: 6.1 },
      { benchmark: 3.2, customer: 5.9 },
    ],
    "Marketing Services": [
      { benchmark: 2.9, customer: 4.3 },
      { benchmark: 3.0, customer: 4.6 },
      { benchmark: 3.2, customer: 4.9 },
      { benchmark: 3.0, customer: 5.3 },
      { benchmark: 2.8, customer: 5.6 },
      { benchmark: 2.7, customer: 5.2 },
      { benchmark: 3.0, customer: 5.0 },
      { benchmark: 3.3, customer: 5.9 },
      { benchmark: 2.6, customer: 6.4 },
      { benchmark: 2.5, customer: 6.1 },
      { benchmark: 2.9, customer: 5.9 },
      { benchmark: 3.5, customer: 6.8 },
      { benchmark: 3.7, customer: 6.6 },
    ],
    "Other": [
      { benchmark: 2.7, customer: 4.0 },
      { benchmark: 2.8, customer: 4.3 },
      { benchmark: 3.0, customer: 4.6 },
      { benchmark: 2.8, customer: 5.0 },
      { benchmark: 2.6, customer: 5.3 },
      { benchmark: 2.5, customer: 4.9 },
      { benchmark: 2.8, customer: 4.7 },
      { benchmark: 3.1, customer: 5.6 },
      { benchmark: 2.4, customer: 6.1 },
      { benchmark: 2.3, customer: 5.8 },
      { benchmark: 2.7, customer: 5.6 },
      { benchmark: 3.3, customer: 6.5 },
      { benchmark: 3.5, customer: 6.3 },
    ],
  },
};

const MONTHS = [
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
];

const METRIC_LABELS: Record<string, string> = {
  cpc: "CPC (Cost Per Click)",
  cpl: "CPL (Cost Per Lead)",
  ctr: "CTR (Click-Through Rate)",
  cpm: "CPM (Cost Per Mille)",
  cvr: "CVR (Conversion Rate)",
};

const INDUSTRIES = [
  "Business Services/Consulting",
  "Financial Services",
  "IT Services",
  "Marketing Services",
  "SaaS",
  "Other",
];

const METRICS = ["cpc", "cpl", "ctr", "cpm", "cvr"];

const BenchmarkChart: React.FC<BenchmarkChartProps> = ({ metric: initialMetric, industry: initialIndustry }) => {
  const [currentMetric, setCurrentMetric] = React.useState(initialMetric);
  const [currentIndustry, setCurrentIndustry] = React.useState(initialIndustry);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);
  
  // Detect screen size
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Get data for selected metric and industry
  const getData = (metric: string, industry: string) => {
    const metricData = BENCHMARK_DATA[metric] || BENCHMARK_DATA.cpc;
    return metricData[industry] || metricData["Business Services/Consulting"];
  };

  const [animatedData, setAnimatedData] = React.useState<{ benchmark: number; customer: number }[]>(getData(currentMetric, currentIndustry));
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Auto-cycle through metrics and industries
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric(prev => {
        const currentIndex = METRICS.indexOf(prev);
        const nextIndex = (currentIndex + 1) % METRICS.length;
        return METRICS[nextIndex];
      });
      
      setCurrentIndustry(prev => {
        const currentIndex = INDUSTRIES.indexOf(prev);
        const nextIndex = (currentIndex + 1) % INDUSTRIES.length;
        return INDUSTRIES[nextIndex];
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Animate data change
  React.useEffect(() => {
    setIsAnimating(true);
    const targetData = getData(currentMetric, currentIndustry);
    const startData = animatedData;

    // Animate from current to target values
    const steps = 30;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // Ease out cubic for smooth deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const interpolatedData = targetData.map((point, index) => {
        const currentPoint = startData[index] || { benchmark: 0, customer: 0 };
        return {
          benchmark: currentPoint.benchmark + (point.benchmark - currentPoint.benchmark) * easeProgress,
          customer: currentPoint.customer + (point.customer - currentPoint.customer) * easeProgress,
        };
      });

      setAnimatedData(interpolatedData);

      if (currentStep >= steps) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [currentMetric, currentIndustry]);

  // Slice data based on screen size
  const displayData = React.useMemo(() => {
    if (isMobile) {
      // Show last 3 months on mobile
      return animatedData.slice(-3);
    } else if (isTablet) {
      // Show last 6 months on tablet
      return animatedData.slice(-6);
    }
    // Show all 13 months on desktop
    return animatedData;
  }, [animatedData, isMobile, isTablet]);

  const displayMonths = React.useMemo(() => {
    if (isMobile) {
      return MONTHS.slice(-3);
    } else if (isTablet) {
      return MONTHS.slice(-6);
    }
    return MONTHS;
  }, [isMobile, isTablet]);

  // Calculate max value for scaling
  const maxValue = Math.max(
    ...displayData.flatMap((d) => [d.benchmark, d.customer]),
    1
  );

  // Calculate bar heights as percentages
  const getBarHeight = (value: number) => {
    return Math.max((value / maxValue) * 100, 0);
  };

  // Format value based on metric type
  const formatValue = (value: number, metric: string) => {
    if (metric === 'ctr' || metric === 'cvr') {
      return `${value.toFixed(2)}%`;
    }
    return `$${value.toFixed(2)}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
      {/* Chart Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2">
            Performance Benchmarking
          </h3>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-900">{METRIC_LABELS[currentMetric]}</span>
            {" • "}
            <span className="font-medium text-gray-900">{currentIndustry}</span>
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#1e3a5f]" />
            <span className="text-sm text-gray-600">Benchmark</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#3875F6]" />
            <span className="text-sm text-gray-600">Customer Value</span>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative w-full" style={{ height: "400px", paddingLeft: "50px", paddingBottom: "40px", paddingTop: "40px" }}>
        {/* Y-axis */}
        <div className="absolute left-0 top-10 bottom-10 w-12 flex flex-col justify-between text-right pr-2">
          {[100, 80, 60, 40, 20, 0].map((percent) => {
            const value = (maxValue * percent) / 100;
            return (
              <span key={percent} className="text-xs text-gray-500">
                {currentMetric === 'ctr' || currentMetric === 'cvr' 
                  ? `${value.toFixed(1)}%` 
                  : `$${value.toFixed(0)}`}
              </span>
            );
          })}
        </div>

        {/* Grid lines */}
        <div className="absolute left-12 right-0 top-10 bottom-10 flex flex-col justify-between">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="border-t border-gray-100" />
          ))}
        </div>

        {/* Bars container */}
        <div className="absolute left-12 right-0 top-10 bottom-10 flex items-end justify-between gap-1">
          {displayData.map((data, index) => (
            <div key={index} className="flex-1 flex items-end justify-center gap-1 h-full relative">
              {/* Benchmark bar */}
              <div className="relative flex-1 max-w-[28px] h-full flex flex-col items-center group">
                {/* Value label above bar - positioned relative to bar height */}
                <div 
                  className="absolute text-[10px] font-medium text-gray-700 whitespace-nowrap pointer-events-none"
                  style={{
                    bottom: `calc(${getBarHeight(data.benchmark)}% + 5px)`,
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  {formatValue(data.benchmark, currentMetric)}
                </div>
                
                {/* Bar */}
                <div className="w-full h-full flex items-end">
                  <div
                    className={cn(
                      "w-full bg-[#1e3a5f] rounded-t hover:bg-[#2a4a7f] transition-all duration-300",
                      isAnimating && "transition-all duration-500"
                    )}
                    style={{
                      height: `${getBarHeight(data.benchmark)}%`,
                      minHeight: data.benchmark > 0 ? '3px' : '0px'
                    }}
                  >
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                      <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                        {formatValue(data.benchmark, currentMetric)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer bar */}
              <div className="relative flex-1 max-w-[28px] h-full flex flex-col items-center group">
                {/* Value label above bar - positioned relative to bar height */}
                <div 
                  className="absolute text-[10px] font-medium text-gray-700 whitespace-nowrap pointer-events-none"
                  style={{
                    bottom: `calc(${getBarHeight(data.customer)}% + 5px)`,
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  {formatValue(data.customer, currentMetric)}
                </div>
                
                {/* Bar */}
                <div className="w-full h-full flex items-end">
                  <div
                    className={cn(
                      "w-full bg-[#3875F6] rounded-t hover:bg-[#2c5cc5] transition-all duration-300",
                      isAnimating && "transition-all duration-500"
                    )}
                    style={{
                      height: `${getBarHeight(data.customer)}%`,
                      minHeight: data.customer > 0 ? '3px' : '0px'
                    }}
                  >
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                      <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                        {formatValue(data.customer, currentMetric)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* X-axis labels */}
        <div className="absolute left-12 right-0 bottom-0 h-10 flex items-center justify-between">
          {displayMonths.map((month, index) => (
            <div key={index} className="flex-1 text-center text-xs text-gray-500">
              {month}
            </div>
          ))}
        </div>
      </div>

      {/* Chart Footer - Insights */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Your Average</div>
            <div className="text-2xl font-bold text-blue-600">
              {formatValue(displayData.reduce((sum, d) => sum + d.customer, 0) / displayData.length, currentMetric)}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Industry Average</div>
            <div className="text-2xl font-bold text-gray-900">
              {formatValue(displayData.reduce((sum, d) => sum + d.benchmark, 0) / displayData.length, currentMetric)}
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Your Performance</div>
            <div className="text-2xl font-bold text-green-600">
              {(() => {
                const avgCustomer = displayData.reduce((sum, d) => sum + d.customer, 0) / displayData.length;
                const avgBenchmark = displayData.reduce((sum, d) => sum + d.benchmark, 0) / displayData.length;
                const diff = ((avgBenchmark - avgCustomer) / avgBenchmark * 100);
                return diff > 0 ? `${diff.toFixed(0)}% Better` : `${Math.abs(diff).toFixed(0)}% Below`;
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BenchmarkChart);