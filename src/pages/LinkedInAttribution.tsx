"use client";

import React, { Suspense, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Zap, 
  Target, 
  BarChart3, 
  ShieldCheck, 
  Search, 
  Users, 
  AlertCircle,
  TrendingUp,
  DollarSign,
  Layers,
  HelpCircle,
  ArrowRightLeft,
  Maximize2,
  Star,
  ClipboardCheck,
  ChevronRight,
  CheckCircle2,
  Info,
  FileText,
  MousePointer2,
  UserCheck,
  RefreshCw,
  ChevronDown,
  ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import SectionBadge from "@/components/SectionBadge";
import DynamicShadow from "@/components/DynamicShadow";

// --- Animation Component ---

const AttributionLoopAnimation = () => {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev % 3) + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <div className="relative h-48 flex items-center justify-between">
        
        {/* Node 1: LinkedIn Ads */}
        <div className="flex flex-col items-center gap-3 z-10">
          <div className={cn(
            "w-14 h-14 rounded-xl border flex items-center justify-center transition-all duration-700",
            phase >= 1 ? "bg-white border-blue-200 shadow-sm text-blue-600" : "bg-slate-50 border-slate-100 text-slate-300"
          )}>
            <Zap className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">LinkedIn Ads</span>
        </div>

        {/* Connector 1 */}
        <div className="flex-1 h-px relative mx-2">
          <div className={cn(
            "absolute inset-0 transition-all duration-1000",
            phase >= 1 ? "bg-blue-200" : "bg-slate-100"
          )} />
          {phase >= 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-flow-1" />
          )}
        </div>

        {/* Node 2: Engagement (Clicks/Leads) */}
        <div className="flex flex-col items-center gap-3 z-10">
          <div className={cn(
            "w-14 h-14 rounded-xl border flex items-center justify-center transition-all duration-700",
            phase >= 1 ? "bg-white border-blue-200 shadow-sm text-blue-600" : "bg-slate-50 border-slate-100 text-slate-300"
          )}>
            <MousePointer2 className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Engagement</span>
        </div>

        {/* Connector 2: The "Broken" part */}
        <div className="flex-1 h-px relative mx-2">
          <div className={cn(
            "absolute inset-0 transition-all duration-1000",
            phase === 1 ? "bg-dashed-fade" : phase >= 2 ? "bg-blue-200" : "bg-slate-100"
          )} />
          {phase >= 2 && (
            <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-flow-2" />
          )}
        </div>

        {/* Node 3: Identity (The Bridge) */}
        <div className={cn(
          "flex flex-col items-center gap-3 z-10 transition-all duration-1000",
          phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <div className="w-14 h-14 rounded-xl border bg-blue-600 border-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <UserCheck className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Identity</span>
        </div>

        {/* Connector 3 */}
        <div className="flex-1 h-px relative mx-2">
          <div className={cn(
            "absolute inset-0 transition-all duration-1000",
            phase >= 2 ? "bg-blue-200" : "bg-slate-100"
          )} />
          {phase >= 2 && (
            <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-flow-3" />
          )}
        </div>

        {/* Node 4: CRM Revenue */}
        <div className="flex flex-col items-center gap-3 z-10">
          <div className={cn(
            "w-14 h-14 rounded-xl border flex items-center justify-center transition-all duration-700",
            phase >= 2 ? "bg-white border-emerald-200 shadow-sm text-emerald-600" : "bg-slate-50 border-slate-100 text-slate-300"
          )}>
            <DollarSign className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CRM Revenue</span>
        </div>

        {/* Phase 3: The Return Loop */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <path
            d="M 850,120 C 850,220 100,220 100,120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className={cn(
              "text-blue-500 transition-all duration-1000",
              phase === 3 ? "opacity-40" : "opacity-0"
            )}
          />
          {phase === 3 && (
            <circle r="3" fill="#3b82f6" className="animate-loop-particle">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M 850,120 C 850,220 100,220 100,120"
              />
            </circle>
          )}
        </svg>

        {/* Optimization Label */}
        <div className={cn(
          "absolute bottom-[-10px] left-1/2 -translate-x-1/2 transition-all duration-1000 flex items-center gap-2",
          phase === 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <RefreshCw className="w-3 h-3 text-blue-500 animate-spin-slow" />
          <span className="text-[9px] font-bold text-blue-500 uppercase tracking-[0.2em]">Closed-Loop Optimization</span>
        </div>

      </div>

      <style>{`
        .bg-dashed-fade {
          background-image: linear-gradient(to right, #e2e8f0 50%, transparent 50%);
          background-size: 8px 1px;
          background-repeat: repeat-x;
          opacity: 0.5;
        }
        @keyframes flow {
          0% { left: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-flow-1 { animation: flow 2s infinite linear; }
        .animate-flow-2 { animation: flow 2s infinite linear; animation-delay: 0.5s; }
        .animate-flow-3 { animation: flow 2s infinite linear; animation-delay: 1s; }
        .animate-loop-particle { filter: drop-shadow(0 0 4px #3b82f6); }
        .animate-spin-slow { animation: spin 4s linear infinite; }
      `}</style>
    </div>
  );
};

// --- Rest of the Page Data ---

const TOOLS_DATA = [
  { 
    name: "DemandSense", 
    id: "demandsense",
    optimization: "LinkedIn-native optimization", 
    crm: "Multi-touch + influenced revenue", 
    identity: "Company + Person-level", 
    benchmark: "LinkedIn-specific benchmarks", 
    loop: "Closed-loop CRM sync",
    price: "$99/mo" 
  },
  { 
    name: "Dreamdata", 
    id: "dreamdata",
    optimization: "Not LinkedIn-specific", 
    crm: "Advanced multi-touch attribution", 
    identity: "Company-level", 
    benchmark: "Not Included", 
    loop: "Not Supported",
    price: "~$999/mo" 
  },
  { 
    name: "HockeyStack", 
    id: "hockeystack",
    optimization: "Not LinkedIn-specific", 
    crm: "Advanced multi-touch + custom modeling", 
    identity: "Company-level", 
    benchmark: "Not Included", 
    loop: "Not Supported",
    price: "Custom" 
  },
  { 
    name: "Factors.ai", 
    id: "factors-ai",
    optimization: "Not LinkedIn-specific", 
    crm: "Multi-touch attribution", 
    identity: "Company-level", 
    benchmark: "Not Included", 
    loop: "Not Supported",
    price: "~$399/mo" 
  },
  { 
    name: "Cometly", 
    id: "cometly",
    optimization: "Not LinkedIn-specific", 
    crm: "Basic multi-touch attribution", 
    identity: "Limited (cookie-based)", 
    benchmark: "Not Included", 
    loop: "Not Supported",
    price: "~$197/mo" 
  },
  { 
    name: "Fibbler", 
    id: "fibbler",
    optimization: "Limited LinkedIn reporting", 
    crm: "Limited LinkedIn attribution", 
    identity: "Company-level", 
    benchmark: "Not Included", 
    loop: "Not Supported",
    price: "~$299/mo" 
  },
  { 
    name: "ZenABM", 
    id: "zenabm",
    optimization: "No campaign optimization", 
    crm: "Account-based reporting", 
    identity: "Account-level", 
    benchmark: "Not Included", 
    loop: "Not Supported",
    price: "Custom" 
  },
  { 
    name: "6sense", 
    id: "6sense",
    optimization: "No direct LinkedIn optimization", 
    crm: "Enterprise revenue attribution", 
    identity: "Account-level intent", 
    benchmark: "Not Included", 
    loop: "Limited (via ABM orchestration)",
    price: "Enterprise" 
  },
];

const DEMANDSENSE_INTERFACES = [
  {
    title: "LinkedIn Campaign Optimization Dashboard",
    description: "The interface supports schedule control and performance-based campaign state adjustments. It provides granular visibility into hourly performance metrics and automated state management.",
    criterion: "LinkedIn-Specific Capability",
    image: "/media/ads-scheduling-interface.png",
    alt: "DemandSense LinkedIn campaign optimization dashboard showing scheduling and frequency controls"
  },
  {
    title: "Identity Resolution Interface",
    description: "This view displays the results of the identity resolution process, matching anonymous website traffic to specific professional profiles and companies via a proprietary identity graph (WebID™).",
    criterion: "Identity Resolution",
    image: "/media/feature-share-smart.png",
    alt: "DemandSense identity resolution interface showing identified companies and professional profiles"
  },
  {
    title: "CRM Revenue Attribution View",
    description: "The attribution module connects LinkedIn campaign engagement directly to CRM deal stages. It visualizes the multi-touch journey from initial ad exposure to closed-won revenue, providing a view of influenced pipeline.",
    criterion: "CRM Attribution Depth",
    image: "/media/card3.png",
    alt: "DemandSense CRM revenue attribution view showing the connection between ads and pipeline revenue"
  },
  {
    title: "LinkedIn Benchmarking Module",
    description: "The benchmarking tool provides industry-specific performance baselines for LinkedIn metrics. It allows teams to compare their CPC, CTR, and CVR against anonymized data from similar B2B organizations.",
    criterion: "Benchmarking & Context",
    image: "/media/card4.png",
    alt: "DemandSense LinkedIn benchmarking module showing industry performance comparisons"
  }
];

const DREAMDATA_INTERFACES = [
  {
    title: "Multi-Channel Journey Mapping",
    description: "The interface visualizes the complete B2B customer journey across multiple touchpoints, including LinkedIn, Google, and direct traffic, mapped to CRM deal stages.",
    criterion: "CRM Attribution Depth",
    image: "/media/audience-tuning.webp",
    alt: "Dreamdata multi-channel journey mapping interface"
  },
  {
    title: "Revenue Attribution Dashboard",
    description: "Centralized reporting view showing revenue and pipeline impact across all marketing channels using various attribution models (First Touch, Last Touch, Linear).",
    criterion: "CRM Attribution Depth",
    image: "/media/ads-scheduling.webp",
    alt: "Dreamdata revenue attribution dashboard"
  }
];

const HOCKEYSTACK_INTERFACES = [
  {
    title: "Multi-Channel Attribution Dashboard",
    description: "Displays multi-touch revenue attribution across paid and organic channels. Enables custom attribution modeling and pipeline reporting.",
    criterion: "CRM Attribution Depth",
    image: "/media/audience-tuning-exclusion.webp",
    alt: "HockeyStack multi-touch attribution dashboard connecting marketing channels to revenue"
  },
  {
    title: "Journey Analytics View",
    description: "Visualizes customer journeys across marketing and product touchpoints, supporting strategic revenue analysis rather than campaign-level optimization.",
    criterion: "CRM Attribution Depth",
    image: "/media/frequency-cap.webp",
    alt: "HockeyStack customer journey analytics visualization for B2B SaaS"
  },
  {
    title: "Marketing Analytics Reporting Interface",
    description: "Provides customizable reporting and performance dashboards across multiple channels, including LinkedIn data ingestion.",
    criterion: "LinkedIn-Specific Capability",
    image: "/media/ads-scheduling-list.png",
    alt: "HockeyStack marketing analytics reporting interface with LinkedIn data integration"
  }
];

const FACTORS_INTERFACES = [
  {
    title: "Marketing Performance Dashboard",
    description: "Displays unified campaign metrics across multiple channels, including LinkedIn, connected to pipeline and revenue reporting.",
    criterion: "CRM Attribution Depth",
    image: "/media/card3.png",
    alt: "Factors.ai marketing performance dashboard with multi-channel attribution reporting"
  },
  {
    title: "Account-Level Attribution View",
    description: "Provides account-based attribution insights linking website and advertising engagement to CRM opportunities.",
    criterion: "Identity Resolution",
    image: "/media/audience-tuning.webp",
    alt: "Factors.ai account-level attribution dashboard connected to CRM pipeline"
  },
  {
    title: "Campaign Reporting Interface",
    description: "Offers performance breakdown and channel comparison views for strategic analysis rather than campaign-level execution control.",
    criterion: "LinkedIn-Specific Capability",
    image: "/media/ads-scheduling.webp",
    alt: "Factors.ai campaign reporting interface with LinkedIn data integration"
  }
];

const FIBBLER_INTERFACES = [
  {
    title: "LinkedIn Campaign Performance Dashboard",
    description: "Displays detailed campaign metrics and diagnostic breakdowns within LinkedIn Ads data. Focused on identifying inefficiencies and performance gaps.",
    criterion: "LinkedIn-Specific Capability",
    image: "/media/frequency-cap.png",
    alt: "Fibbler LinkedIn campaign analytics dashboard showing performance breakdowns"
  },
  {
    title: "Performance Diagnostic View",
    description: "Highlights underperforming segments and surfaces optimization suggestions based on LinkedIn engagement metrics.",
    criterion: "Optimization Feedback Loop",
    image: "/media/audience-tuning.webp",
    alt: "Fibbler LinkedIn performance diagnostics interface"
  },
  {
    title: "Reporting & Breakdown Interface",
    description: "Provides extended reporting views beyond LinkedIn’s native dashboard, supporting campaign-level analysis.",
    criterion: "LinkedIn-Specific Capability",
    image: "/media/ads-scheduling.webp",
    alt: "Fibbler LinkedIn reporting interface with campaign breakdown analytics"
  }
];

const SIXSENSE_INTERFACES = [
  {
    title: "Account Intent Dashboard",
    description: "Displays account-level intent signals and predictive engagement scoring across marketing channels.",
    criterion: "Identity Resolution",
    image: "/media/audience-tuning.webp",
    alt: "6sense account-level intent dashboard showing predictive engagement signals"
  },
  {
    title: "Revenue Intelligence View",
    description: "Provides opportunity modeling and pipeline forecasting based on account engagement data.",
    criterion: "CRM Attribution Depth",
    image: "/media/card3.png",
    alt: "6sense revenue intelligence dashboard connected to CRM pipeline"
  },
  {
    title: "ABM Campaign Orchestration Interface",
    description: "Coordinates multi-channel account-based marketing campaigns including LinkedIn within a broader ABM strategy.",
    criterion: "LinkedIn-Specific Capability",
    image: "/media/ads-scheduling.webp",
    alt: "6sense ABM campaign orchestration interface with LinkedIn integration"
  }
];

const ZENABM_INTERFACES = [
  {
    title: "Account Targeting Dashboard",
    description: "Displays account list segmentation and campaign activation controls for targeted outreach execution.",
    criterion: "Identity Resolution",
    image: "/media/audience-tuning.webp",
    alt: "ZenABM account targeting dashboard showing segmented ABM lists"
  },
  {
    title: "Campaign Orchestration Interface",
    description: "Coordinates account-based campaigns across LinkedIn and other channels within a unified workflow.",
    criterion: "LinkedIn-Specific Capability",
    image: "/media/ads-scheduling.webp",
    alt: "ZenABM campaign orchestration interface with LinkedIn integration"
  },
  {
    title: "CRM-Connected Account Reporting",
    description: "Provides account-level engagement tracking connected to CRM records.",
    criterion: "CRM Attribution Depth",
    image: "/media/card3.png",
    alt: "ZenABM CRM-connected account reporting interface"
  }
];

const COMETLY_INTERFACES = [
  {
    title: "Paid Ads Attribution Dashboard",
    description: "Displays attribution reporting across paid channels, linking campaign performance to conversions and revenue outcomes.",
    criterion: "CRM Attribution Depth",
    image: "/media/card3.png",
    alt: "Cometly paid ads attribution dashboard showing revenue tracking"
  },
  {
    title: "Revenue Reporting Interface",
    description: "Shows conversion and revenue attribution views used to understand paid campaign ROI.",
    criterion: "CRM Attribution Depth",
    image: "/media/audience-tuning.webp",
    alt: "Cometly revenue reporting interface for ad-to-revenue attribution"
  },
  {
    title: "Channel Performance Reporting",
    description: "Provides paid channel breakdown reporting, including LinkedIn ingestion where connected, for attribution visibility rather than optimization.",
    criterion: "LinkedIn-Specific Capability",
    image: "/media/ads-scheduling.webp",
    alt: "Cometly channel performance reporting interface with LinkedIn data integration"
  }
];

const FAQ_GROUPS = [
  {
    title: "LinkedIn Attribution Fundamentals",
    items: [
      {
        q: "What is the difference between LinkedIn native attribution and third-party attribution tools?",
        a: "LinkedIn native attribution relies on the Insight Tag to track conversions within a specific lookback window, typically defaulting to a last-touch model. While useful for basic reporting, it often fails to account for the complex, multi-stakeholder journeys typical of B2B sales. Third-party attribution tools utilize the LinkedIn Ads API to ingest granular campaign data and correlate it with external data sources, such as CRM synchronization. This allows for a more comprehensive view of influenced revenue and account-based engagement. Unlike native reporting, third-party systems can track view-through conversions across multiple sessions and devices, providing a defensible link between ad exposure and pipeline generation. Furthermore, third-party tools can bypass the limitations of cookie-based tracking by using identity resolution to map anonymous traffic to specific business entities, offering a level of transparency that native dashboards cannot provide."
      },
      {
        q: "Do I need multi-touch attribution for LinkedIn campaigns?",
        a: "Multi-touch attribution (MTA) is essential for B2B LinkedIn campaigns due to the extended nature of the sales cycle and the high cost-per-click (CPC) environment. In B2B, a single conversion is rarely the result of one interaction; instead, it is the culmination of multiple touchpoints across various channels. MTA models assign fractional credit to each interaction, such as an initial awareness ad, a middle-funnel whitepaper download, and a final demo request. This provides a more accurate representation of how LinkedIn contributes to influenced revenue. Without MTA, marketers risk overvaluing last-click channels like direct search while undervaluing the top-of-funnel demand generation driven by LinkedIn. By implementing multi-touch modeling, teams can identify which specific creatives and audiences are most effective at moving accounts through the funnel, allowing for more strategic budget allocation and improved return on ad spend (ROAS)."
      },
      {
        q: "Is LinkedIn view-through attribution reliable?",
        a: "View-through attribution (VTA) measures conversions that occur after a user sees an ad but does not click on it. In the context of LinkedIn, where B2B buyers often consume content passively before performing a direct search or visiting the site later, VTA is a critical metric for understanding top-of-funnel impact. However, its reliability depends on the tracking infrastructure. Native LinkedIn VTA can sometimes be inflated if lookback windows are too broad or if the system cannot distinguish between incidental exposure and genuine intent. Advanced third-party tools improve VTA reliability by using identity resolution to confirm that the person or account exposed to the ad is the same one that later engaged with the website. This provides a more rigorous link between passive ad consumption and active research behavior, helping marketers prove the value of brand awareness campaigns that don't result in immediate clicks."
      },
      {
        q: "How does LinkedIn attribution differ from Google Ads attribution?",
        a: "LinkedIn attribution is fundamentally account-based, whereas Google Ads attribution is often more keyword or intent-driven. Google Ads typically captures users at the moment of active search, making last-click models more viable for measuring immediate intent. LinkedIn, conversely, is a demand generation platform where ads are served based on professional firmographics and job titles. This necessitates a focus on influenced revenue and account-level engagement rather than just individual conversion events. Additionally, LinkedIn's high CPCs and longer conversion paths mean that attribution must account for multiple stakeholders within a single organization. While Google Ads can often rely on browser-level tracking, effective LinkedIn attribution requires identity resolution to connect disparate sessions from different employees at the same target account into a unified journey, providing a holistic view of the account's buying readiness."
      }
    ]
  },
  {
    title: "Tool Selection & Comparison",
    items: [
      {
        q: "When does a LinkedIn attribution tool become necessary?",
        a: "A specialized LinkedIn attribution tool becomes necessary when an organization's monthly ad spend reaches a threshold where native reporting gaps lead to significant budget waste—typically around $5,000 to $10,000 per month. At this scale, the inability to see which ads are driving CRM deal stages (rather than just lead form fills) results in inefficient scaling. Furthermore, if your B2B sales cycle exceeds 30 days, LinkedIn's standard lookback windows will lose the connection between early-stage awareness and late-stage revenue. Organizations running account-based marketing (ABM) strategies also require these tools to verify that their target account lists are actually engaging with their campaigns. When leadership requires proof of influenced pipeline or exact ROI to justify further investment, the transition from basic reporting to a dedicated attribution and optimization system is required to maintain a defensible marketing strategy."
      },
      {
        q: "Can attribution tools reduce wasted LinkedIn ad spend?",
        a: "Yes, attribution tools reduce wasted spend by enabling closed-loop optimization. By connecting LinkedIn campaign data to CRM outcomes, these tools identify 'dead-end' audiences and creatives that generate clicks or leads but never progress to qualified opportunities or revenue. Marketers can then suppress these segments, redirecting budget toward high-intent audiences. Additionally, features like automated ad scheduling allow teams to pause campaigns during low-engagement periods, such as weekends or non-business hours, which can reduce waste by up to 40%. Advanced tools also provide frequency capping to prevent audience fatigue, ensuring that budget isn't spent over-exposing ads to the same individuals without incremental gain. By providing a clear view of which touchpoints actually contribute to influenced revenue, attribution tools allow for granular performance tuning that is impossible with native LinkedIn reporting alone."
      },
      {
        q: "What’s the difference between reporting tools and optimization systems?",
        a: "Reporting tools are primarily retrospective; they ingest data from sources like the LinkedIn Ads API and CRM to visualize historical performance and attribution models. Their goal is to provide visibility into what happened in the past. Optimization systems, however, are prospective and actionable. They use attribution data as a feedback loop to trigger real-time changes in campaign execution. For example, an optimization system might automatically adjust a campaign's bid or schedule based on the quality of traffic identified via identity resolution. While a reporting tool tells you that a specific audience has a high CPL, an optimization system can automatically suppress that audience or refine the targeting criteria in a closed-loop workflow. For B2B teams, reporting provides the 'why,' but optimization systems provide the 'how' for improving performance and scaling revenue-generating campaigns."
      }
    ]
  },
  {
    title: "Implementation & Compliance",
    items: [
      {
        q: "Can LinkedIn data be synced directly to Salesforce or HubSpot?",
        a: "Direct synchronization between LinkedIn and CRMs like Salesforce or HubSpot is possible through native integrations, but these are often limited to basic lead gen form data. To achieve true revenue attribution, a third-party middleware or attribution platform is required to facilitate bidirectional CRM synchronization. This process involves pulling deal stage and revenue data from the CRM and matching it against LinkedIn campaign engagement IDs. This allows marketers to see exactly which ads influenced a specific deal. Furthermore, advanced integrations can push identified visitor data and intent signals back into CRM contact records, alerting sales teams when a target account is showing high buying readiness. This closed-loop synchronization ensures that both marketing and sales are working from a unified dataset, enabling more effective account-based marketing orchestration and accurate reporting of influenced pipeline."
      },
      {
        q: "What is closed-loop LinkedIn optimization?",
        a: "Closed-loop LinkedIn optimization is a methodology where attribution data from the CRM is fed back into the LinkedIn Ads platform to automate and refine campaign performance. In a standard 'open-loop' setup, marketing data flows in one direction (Ad -> Website -> CRM), and adjustments are made manually based on periodic reports. In a closed-loop system, the attribution tool identifies which specific campaign parameters—such as job titles, industries, or creative types—are resulting in actual revenue. This insight is then used to programmatically update LinkedIn targeting, schedules, and budgets. For instance, if the system detects that a specific audience segment is generating high-intent website traffic but zero CRM opportunities, it can automatically reduce spend on that segment. This continuous feedback loop ensures that LinkedIn campaigns are always aligned with bottom-line revenue goals rather than just top-of-funnel engagement metrics."
      },
      {
        q: "Are person-level identification tools GDPR compliant?",
        a: "Person-level identification in a B2B context can be GDPR compliant if the tool is designed to identify professional personas and business entities using publicly available or verified B2B data. Compliance hinges on the 'Legitimate Interest' provision of GDPR, which allows for the processing of professional data for B2B marketing purposes, provided that privacy rights are respected and opt-out mechanisms are available. Reputable tools do not track personal private browsing habits or sensitive personal information; instead, they focus on firmographic data and professional identifiers like job titles and work emails. It is essential for organizations to update their privacy policies to disclose the use of such tracking technologies and to ensure their vendors have robust data processing agreements (DPAs) in place. When implemented correctly, these tools provide the transparency needed for B2B growth without infringing on individual consumer privacy."
      }
    ]
  }
];

const LinkedInAttribution = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });
  const [tableRef, tableInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_GROUPS.flatMap(group => 
      group.items.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    )
  };

  const anchorLinks = [
    { label: "TL;DR Picks", id: "tldr" },
    { label: "Detailed Comparison Table", id: "comparison-table" },
    { label: "Evaluation Framework", id: "methodology" },
    { label: "In-Depth Tool Reviews", id: "tool-reviews" },
    { label: "Platform Selection Guide", id: "selection-guide" },
    { label: "Frequently Asked Questions", id: "faq" }
  ];

  return (
    <TooltipProvider>
      <Navbar />
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <main className="bg-white">
        
        {/* 1. Redesigned Hero Section */}
        <section ref={heroRef} className="relative w-full pt-32 pb-20 px-6 overflow-hidden">
          <DynamicShadow variant="hero" />
          <div className="max-w-[1216px] mx-auto text-center relative z-10">
            <div className={cn(
              "transition-all duration-700",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">
                2026 LinkedIn Attribution Comparison
              </div>
            </div>

            <h1 className={cn(
              "text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Best LinkedIn Ads <br />
              Attribution Tools (2026)
            </h1>

            <p className={cn(
              "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Compare LinkedIn attribution platforms based on CRM revenue tracking, identity resolution, benchmarking, and optimization depth.
            </p>

            {/* Authority Signals */}
            <div className={cn(
              "flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-12 transition-all duration-700 delay-300",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Updated May 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Framework-based evaluation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Reviewed by LinkedIn-certified specialists</span>
              </div>
            </div>

            <div className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <Button variant="hero" size="hero" className="px-10" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                Start Measuring ROI
              </Button>
              <Button variant="hero-outline" size="hero" className="px-10" onClick={() => document.getElementById('comparison-table')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Full Comparison
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Structural Orientation (Table of Contents) */}
        <section className="py-12 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-[1216px] mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">On This Page</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
                {/* Left Column */}
                <div className="space-y-4">
                  {anchorLinks.slice(0, 3).map((link) => (
                    <button
                      key={link.id}
                      onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex items-center justify-between w-full group text-left py-2 border-b border-slate-200/60 hover:border-blue-400 transition-colors"
                    >
                      <span className="text-base font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
                
                {/* Right Column */}
                <div className="space-y-4">
                  {anchorLinks.slice(3).map((link) => (
                    <button
                      key={link.id}
                      onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex items-center justify-between w-full group text-left py-2 border-b border-slate-200/60 hover:border-blue-400 transition-colors"
                    >
                      <span className="text-base font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TL;DR Section */}
        <section id="tldr" className="py-24 px-6 bg-white">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Recommendations by LinkedIn Attribution Scenario</h2>
              <p className="text-sm text-slate-500 max-w-2xl mx-auto">
                These selections reflect the strongest fit across common B2B LinkedIn attribution use cases. The full comparison table below includes additional platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  label: "Best All-in-One LinkedIn Platform", 
                  tool: "DemandSense", 
                  desc: "Unified LinkedIn Performance OS combining optimization, identity visibility, benchmarking, and CRM revenue attribution.",
                  anchor: "tool-reviews"
                },
                { 
                  label: "Best Enterprise ABM Suite", 
                  tool: "6sense", 
                  desc: "Full-scale ABM + predictive revenue modeling for large organizations.",
                  anchor: "tool-reviews"
                },
                { 
                  label: "Best Advanced Attribution Tool", 
                  tool: "Dreamdata", 
                  desc: "Advanced B2B journey mapping across multiple channels.",
                  anchor: "tool-reviews"
                },
                { 
                  label: "Best BI-Style Attribution", 
                  tool: "HockeyStack", 
                  desc: "Flexible BI-style attribution for marketing and RevOps teams.",
                  anchor: "tool-reviews"
                },
                { 
                  label: "Best Lightweight Attribution", 
                  tool: "Cometly", 
                  desc: "Simplified paid-ad revenue tracking without optimization depth.",
                  anchor: "tool-reviews"
                },
                { 
                  label: "Best LinkedIn Analytics Alternative", 
                  tool: "Fibbler", 
                  desc: "Campaign-level performance insights without deep revenue visibility.",
                  anchor: "tool-reviews"
                }
              ].map((item, i) => (
                <button 
                  key={i} 
                  onClick={() => document.getElementById(item.anchor)?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex flex-col p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-400 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all text-left group"
                >
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">{item.label}</span>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-gray-900">{item.tool}</span>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <span className="text-sm text-gray-600 leading-relaxed">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Comparison Table */}
        <section id="comparison-table" ref={tableRef} className="py-24 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <SectionBadge icon={Layers} text="Feature Matrix" />
              <h2 className="text-4xl font-bold text-gray-900 mt-6">Detailed Comparison</h2>
            </div>
            
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
              <Table className="min-w-[1100px]">
                <TableHeader className="bg-slate-50">
                  <TableRow className="hover:bg-slate-50 border-gray-200">
                    <TableHead className="text-slate-900 font-bold py-6 w-[160px]">Tool</TableHead>
                    <TableHead className="text-slate-900 font-bold w-[140px]">
                      <div className="flex items-center gap-1.5">
                        LinkedIn Optimization
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[240px] text-xs leading-relaxed">
                            Indicates whether the platform provides native LinkedIn Ads API-level optimization controls or only ingests performance data for reporting.
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TableHead>
                    <TableHead className="text-slate-900 font-bold w-[180px]">
                      <div className="flex items-center gap-1.5">
                        CRM Attribution Depth
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[240px] text-xs leading-relaxed">
                            Measures the platform’s ability to connect LinkedIn campaign engagement to CRM pipeline and revenue outcomes using multi-touch modeling.
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TableHead>
                    <TableHead className="text-slate-900 font-bold w-[160px]">
                      <div className="flex items-center gap-1.5">
                        Identity Resolution
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[240px] text-xs leading-relaxed">
                            Indicates whether the tool identifies traffic at the company level, person level, or account level for targeting and reporting.
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TableHead>
                    <TableHead className="text-slate-900 font-bold text-center w-[110px]">
                      <div className="flex items-center justify-center gap-1.5">
                        Benchmarking
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[240px] text-xs leading-relaxed">
                            Indicates whether the platform provides LinkedIn-specific industry or peer performance baselines.
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TableHead>
                    <TableHead className="text-slate-900 font-bold text-center w-[110px]">
                      <div className="flex items-center justify-center gap-1.5">
                        Optimization Loop
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[240px] text-xs leading-relaxed">
                            Describes whether CRM revenue outcomes can be fed back into LinkedIn to refine targeting, suppression, or campaign controls.
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TableHead>
                    <TableHead className="text-slate-900 font-bold w-[110px]">
                      <div className="flex items-center gap-1.5">
                        Starting Price
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[240px] text-xs leading-relaxed">
                            Reflects publicly available entry-level pricing where disclosed. Enterprise tiers may vary.
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {TOOLS_DATA.map((tool, i) => (
                    <TableRow key={i} className="hover:bg-gray-50 transition-colors border-gray-100">
                      <TableCell className="font-bold text-gray-900 py-6">
                        <button 
                          onClick={() => document.getElementById('tool-reviews')?.scrollIntoView({ behavior: 'smooth' })}
                          className="text-blue-600 hover:underline text-left"
                        >
                          {tool.name}
                        </button>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {tool.optimization}
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {tool.crm}
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {tool.identity}
                      </TableCell>
                      <TableCell className="text-sm text-gray-600 text-center">
                        {tool.benchmark}
                      </TableCell>
                      <TableCell className="text-sm text-gray-600 text-center">
                        {tool.loop}
                      </TableCell>
                      <TableCell className="text-sm font-medium text-gray-900">
                        {tool.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="mt-6 text-xs text-slate-400 text-center italic">
              Data based on publicly available documentation, vendor materials, and feature descriptions as of May 2026. Pricing reflects publicly listed entry-level tiers where available.
            </p>
          </div>
        </section>

        {/* 5. Methodology Section */}
        <section id="methodology" className="py-24 px-6 bg-white">
          <div className="max-w-[1216px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <SectionBadge icon={Search} text="Evaluation Framework" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-6 tracking-tight">
                    How We Evaluated These Tools
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    This evaluation focuses on B2B teams using LinkedIn as a primary acquisition channel. Criteria reflect the technical requirements of high-spend advertisers managing complex sales cycles.
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-4">Reviewed by multiple LinkedIn-certified ad specialists.</p>
                  
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Evaluation Inputs</h4>
                    <ul className="space-y-2">
                      {[
                        "Public product documentation and feature descriptions",
                        "LinkedIn Ads API capability analysis",
                        "CRM integration and attribution modeling review",
                        "Publicly available pricing disclosures",
                        "User feedback from third-party review platforms (where available)"
                      ].map((input, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 flex-shrink-0" />
                          {input}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* High-Visibility Animated Flow Diagram */}
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="flex flex-col gap-8 relative z-10">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>Input</span>
                      <span>Processing</span>
                      <span>Output</span>
                    </div>
                    
                    <div className="flex items-center justify-between gap-2 relative">
                      {/* Stage 1: LinkedIn Ads */}
                      <div className="flex flex-col items-center gap-2 flex-1">
                        <div className="w-full h-12 rounded-lg border border-slate-100 bg-white flex items-center justify-center text-[11px] font-bold text-slate-500 transition-all duration-500 animate-active-node-1 relative overflow-hidden">
                          <div className="absolute inset-0 bg-blue-400/20 blur-xl opacity-0 animate-shining-light-1" />
                          LinkedIn Ads
                        </div>
                      </div>

                      {/* Arrow 1 */}
                      <div className="relative w-6 h-px bg-slate-200">
                        <div className="absolute inset-0 bg-blue-500 shadow-[0_0_8px_#3b82f6] animate-pulse-line-1" />
                        <ArrowRight className="absolute -right-1.5 -top-2 w-4 h-4 text-slate-300" />
                      </div>

                      {/* Stage 2: Identity */}
                      <div className="flex flex-col items-center gap-2 flex-1">
                        <div className="w-full h-12 rounded-lg border border-slate-100 bg-white flex items-center justify-center text-[11px] font-bold text-slate-500 transition-all duration-500 animate-active-node-2 relative overflow-hidden">
                          <div className="absolute inset-0 bg-blue-400/20 blur-xl opacity-0 animate-shining-light-2" />
                          Identity
                        </div>
                      </div>

                      {/* Arrow 2 */}
                      <div className="relative w-6 h-px bg-slate-200">
                        <div className="absolute inset-0 bg-blue-500 shadow-[0_0_8px_#3b82f6] animate-pulse-line-2" />
                        <ArrowRight className="absolute -right-1.5 -top-2 w-4 h-4 text-slate-300" />
                      </div>

                      {/* Stage 3: CRM Revenue */}
                      <div className="flex flex-col items-center gap-2 flex-1">
                        <div className="w-full h-12 rounded-lg border border-slate-100 bg-white flex items-center justify-center text-[11px] font-bold text-slate-500 transition-all duration-500 animate-active-node-3 relative overflow-hidden">
                          <div className="absolute inset-0 bg-blue-400/20 blur-xl opacity-0 animate-shining-light-3" />
                          CRM Revenue
                        </div>
                      </div>
                    </div>

                    {/* Optimization Loop */}
                    <div className="flex justify-center relative">
                      <div className="px-6 py-3 rounded-full border border-slate-100 bg-white flex items-center gap-2 text-[10px] font-bold text-slate-400 transition-all duration-500 uppercase tracking-wider animate-active-node-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-blue-400/20 blur-xl opacity-0 animate-shining-light-4" />
                        <ArrowRightLeft className="w-3.5 h-3.5" />
                        Optimization Loop
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Pricing and feature availability are reviewed quarterly. Significant platform changes are reflected after verification.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-10">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-baseline gap-3">
                    <span className="text-slate-300 font-mono text-2xl">01</span>
                    LinkedIn-Specific Capability
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-10">
                    Evaluates native API depth, campaign-level granularity, and the ability to handle LinkedIn-specific data structures beyond standard click tracking.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-baseline gap-3">
                    <span className="text-slate-300 font-mono text-2xl">02</span>
                    CRM Attribution Depth
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-10">
                    Assesses multi-touch modeling and influenced revenue tracking through bidirectional synchronization with Salesforce, HubSpot, and Marketo.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-baseline gap-3">
                    <span className="text-slate-300 font-mono text-2xl">03</span>
                    Identity Resolution
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-10">
                    Measures the ability to match anonymous traffic to professional personas, including both person-level and company-level identification.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-baseline gap-3">
                    <span className="text-slate-300 font-mono text-2xl">04</span>
                    Optimization Feedback Loop
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-10">
                    Determines if attribution insights can be fed back into LinkedIn to improve targeting and audience refinement based on CRM outcomes.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-baseline gap-3">
                    <span className="text-slate-300 font-mono text-2xl">05</span>
                    Benchmarking & Context
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-10">
                    Evaluates the availability of industry performance benchmarks and historical context to provide a baseline for evaluating campaign efficiency.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. Why LinkedIn Attribution Requires a Different Approach */}
        <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <SectionBadge icon={AlertCircle} text="The Challenge" />
              <h2 className="text-4xl font-bold text-gray-900 mt-6 mb-6">Why LinkedIn Attribution Requires a Different Approach</h2>
              <div className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed space-y-1">
                <p>LinkedIn influences revenue earlier in the B2B buying cycle.</p>
                <p>Native reporting focuses on engagement — not CRM revenue.</p>
                <p>True accountability requires CRM sync and multi-touch attribution.</p>
              </div>
            </div>

            {/* Animation Block */}
            <div className="mb-20">
              <AttributionLoopAnimation />
            </div>

            {/* Contrast Sentence */}
            <p className="text-center text-lg font-medium text-slate-900 mb-16 max-w-4xl mx-auto">
              Unlike high-intent Google search campaigns, LinkedIn advertising often influences pipeline earlier in the buying cycle, making multi-touch revenue attribution more relevant than last-click measurement.
            </p>

            {/* Strategic Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">High CPC Stakes</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Clicks often cost $10–$20+. You can’t wait 90 days to learn if campaigns are working.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Multi-Touch B2B Journeys</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  B2B buyers engage multiple times before converting. Last-click reporting distorts LinkedIn’s real influence.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">The CRM Gap</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  LinkedIn reporting stops at lead capture. Revenue visibility requires CRM integration.
                </p>
              </div>
            </div>

            {/* Common Mistakes Block */}
            <div className="max-w-2xl mx-auto p-8 bg-slate-100/40 rounded-2xl border border-slate-200/50 mb-12">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 text-center">Common LinkedIn Attribution Mistakes</h3>
              <ul className="space-y-3 max-w-md mx-auto">
                <li className="text-sm text-slate-700 flex items-start gap-3">
                  <span className="text-slate-400">•</span>
                  Relying on last-click inside Campaign Manager
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-3">
                  <span className="text-slate-400">•</span>
                  Optimizing for click volume instead of pipeline quality
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-3">
                  <span className="text-slate-400">•</span>
                  Failing to sync CRM outcomes back into targeting
                </li>
              </ul>
            </div>

            <p className="text-center text-lg font-bold text-slate-900">
              Effective LinkedIn attribution connects campaign engagement to CRM revenue — and feeds that signal back into optimization.
            </p>
          </div>
        </section>

        {/* 7. In-Depth Tool Reviews */}
        <section id="tool-reviews" className="py-24 px-6 bg-white">
          <div className="max-w-[1216px] mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">In-Depth Tool Reviews</h2>
            
            <div className="space-y-24">
              {/* DemandSense Review Section */}
              <div id="demandsense" className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                  <div>
                    <img src="/logo.svg" alt="DemandSense Logo" className="h-12 w-auto mb-6" />
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">DemandSense</h3>
                    <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                      Category: Full-Funnel LinkedIn Performance OS
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Evaluation Summary:</span>
                    <span className="text-sm font-bold text-slate-600">Strong LinkedIn-Specific Capability</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                  <div className="lg:col-span-5">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Overview</h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          DemandSense is a LinkedIn-focused performance system designed for B2B teams that treat LinkedIn as a primary revenue channel. Effective LinkedIn attribution requires native API depth to capture granular engagement signals that standard multi-channel platforms often aggregate or omit. 
                        </p>
                        <p className="text-sm mt-4">
                          <strong>Primary differentiator: LinkedIn-native closed-loop revenue optimization architecture.</strong>
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed mt-4">
                          Unlike general attribution tools, DemandSense prioritizes the specific data structures of the LinkedIn Campaign Manager, allowing for more precise mapping of ad exposure to CRM outcomes. In B2B revenue tracking, closed-loop optimization is critical; it ensures that attribution data is not just a reporting output but an active input for refining campaign targeting and budget allocation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">LinkedIn Capability</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Native API depth enables campaign-level granularity beyond standard click reporting.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">CRM Attribution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Multi-touch modeling and influenced revenue tracking via bidirectional CRM sync.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Identity Resolution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Matches traffic to company and person-level professional identities via a proprietary identity graph (WebID™).</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Optimization Loop</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Attribution data feeds back into LinkedIn to refine targeting and schedules.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrated Product Interface Examples - Always Expanded for DemandSense */}
                <div className="pt-12 border-t border-slate-100">
                  <div className="mb-12">
                    <h4 className="text-xl font-bold text-gray-900">Product Interface Examples</h4>
                    <p className="text-sm text-slate-500 mt-2">Visualizing core capabilities within the evaluation framework.</p>
                  </div>
                  
                  <div className="space-y-20">
                    {DEMANDSENSE_INTERFACES.map((example, i) => (
                      <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className={cn("order-1", i % 2 !== 0 && "lg:order-2")}>
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className="relative group cursor-zoom-in rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                                <img 
                                  src={example.image} 
                                  alt={example.alt} 
                                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                                  <div className="bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize2 className="w-5 h-5 text-gray-900" />
                                  </div>
                                </div>
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none">
                              <div className="relative w-full h-full flex items-center justify-center">
                                <img 
                                  src={example.image} 
                                  alt={example.alt} 
                                  className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                        
                        <div className={cn("space-y-4 order-2", i % 2 !== 0 && "lg:order-1")}>
                          <h4 className="text-xl font-bold text-gray-900">{example.title}</h4>
                          <p className="text-base text-gray-600 leading-relaxed">
                            {example.description}
                          </p>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                            Criterion: {example.criterion}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-4">Implementation Considerations</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Requires LinkedIn Ads API access.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Works best with CRM integration enabled.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Designed for teams with defined revenue tracking processes.
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Best Fit</h4>
                    <p className="text-sm text-gray-600">B2B teams where LinkedIn is a primary paid channel and performance must tie to CRM revenue.</p>
                  </div>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                    Try DemandSense Free
                  </Button>
                </div>
                <p className="mt-8 text-xs text-slate-400 text-center">
                  Closest alternatives: Dreamdata, HockeyStack
                </p>
              </div>

              {/* Dreamdata Review Section */}
              <div id="dreamdata" className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                  <div>
                    <div className="h-12 w-auto mb-6 flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">D</div>
                      <span className="text-2xl font-bold text-gray-900 tracking-tight">Dreamdata</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Dreamdata</h3>
                    <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                      Category: Multi-Channel B2B Revenue Attribution
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Evaluation Summary:</span>
                    <span className="text-sm font-bold text-slate-600">Advanced Multi-Channel Infrastructure</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                  <div className="lg:col-span-5">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Overview</h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Dreamdata is a multi-channel B2B revenue attribution platform designed for organizations operating across several paid and organic channels. It focuses on mapping complex customer journeys and connecting marketing touchpoints to pipeline and revenue outcomes.
                        </p>
                        <p className="text-sm mt-4">
                          <strong>Primary differentiator: Cross-channel multi-touch revenue attribution modeling.</strong>
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed mt-4">
                          Dreamdata is architected as a cross-channel attribution infrastructure layer. Its primary value lies in modeling revenue influence across multiple marketing and sales touchpoints rather than controlling channel-native execution.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">LinkedIn Capability</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Ingests LinkedIn Ads data for reporting and attribution purposes, but does not provide native campaign management or optimization controls within LinkedIn.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">CRM Attribution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Advanced multi-touch revenue attribution with strong CRM synchronization capabilities.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Identity Resolution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Primarily operates at the account/company level using CRM and firmographic matching. Person-level professional identity resolution is not its core design focus.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Optimization Loop</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Attribution insights are intended for reporting and strategic analysis. Automated, programmatic feedback into LinkedIn campaign controls is not a native capability.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrated Product Interface Examples - Collapsible */}
                <div className="pt-12 border-t border-slate-100">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <button className="flex items-center justify-between w-full group py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-50 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                            <ImageIcon className="w-5 h-5" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Product Interface Examples</h4>
                        </div>
                        <ChevronDown className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-all" />
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-8 space-y-20">
                      {DREAMDATA_INTERFACES.map((example, i) => (
                        <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                          <div className={cn("order-1", i % 2 !== 0 && "lg:order-2")}>
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="relative group cursor-zoom-in rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                                    <div className="bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                      <Maximize2 className="w-5 h-5 text-gray-900" />
                                    </div>
                                  </div>
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none">
                                <div className="relative w-full h-full flex items-center justify-center">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                                  />
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                          
                          <div className={cn("space-y-4 order-2", i % 2 !== 0 && "lg:order-1")}>
                            <h4 className="text-xl font-bold text-gray-900">{example.title}</h4>
                            <p className="text-base text-gray-600 leading-relaxed">
                              {example.description}
                            </p>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                              Criterion: {example.criterion}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-slate-100">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Strengths</h4>
                    <ul className="space-y-2">
                      {["Strong multi-channel attribution modeling", "Robust CRM integration", "Designed for complex B2B revenue reporting", "Suitable for organizations with longer sales cycles"].map((s, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Trade-Offs</h4>
                    <ul className="space-y-2">
                      {["Limited LinkedIn-native optimization capabilities", "No direct closed-loop feedback into LinkedIn Ads", "Typically positioned at mid-market and enterprise pricing tiers."].map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-4">Implementation Considerations</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Requires structured CRM data and consistent tracking configuration.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Best suited for organizations running multiple acquisition channels.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Typically implemented by RevOps or marketing operations teams.
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Best Fit</h4>
                    <p className="text-sm text-gray-600">Mid-market to enterprise B2B organizations seeking cross-channel revenue attribution and centralized marketing performance reporting.</p>
                  </div>
                  <Button variant="outline" size="lg" className="px-8 border-slate-200 text-slate-600 hover:bg-slate-50">
                    Visit Dreamdata
                  </Button>
                </div>
                <p className="mt-8 text-xs text-slate-400 text-center">
                  Closest alternatives: HockeyStack, DemandSense
                </p>
              </div>

              {/* HockeyStack Review Section */}
              <div id="hockeystack" className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                  <div>
                    <div className="h-12 w-auto mb-6 flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">H</div>
                      <span className="text-2xl font-bold text-gray-900 tracking-tight">HockeyStack</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">HockeyStack</h3>
                    <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                      Category: Multi-Channel Revenue Attribution Platform
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Evaluation Summary:</span>
                    <span className="text-sm font-bold text-slate-600">Flexible Multi-Channel Analytics</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                  <div className="lg:col-span-5">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Overview</h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          HockeyStack is a multi-channel revenue attribution and marketing analytics platform designed primarily for B2B SaaS organizations. It focuses on connecting marketing touchpoints to pipeline and revenue through customizable attribution models and advanced reporting capabilities.
                        </p>
                        <p className="text-sm mt-4">
                          <strong>Primary differentiator: Customizable SaaS-focused marketing analytics and attribution.</strong>
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed mt-4">
                          Unlike LinkedIn-specialized systems, HockeyStack positions itself as a centralized analytics layer rather than a campaign-native optimization tool.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">LinkedIn Capability</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Ingests LinkedIn Ads performance data but does not provide LinkedIn-native campaign optimization controls or API-level targeting adjustments.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">CRM Attribution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Supports advanced multi-touch attribution modeling with CRM integration and customizable revenue attribution logic.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Identity Resolution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Primarily company-level and account-based identification derived from CRM and tracking data. Does not focus on professional person-level identity resolution.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Optimization Loop</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Attribution insights are used for reporting and strategic decision-making. Direct closed-loop feedback into LinkedIn targeting is not a native capability.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrated Product Interface Examples - Collapsible */}
                <div className="pt-12 border-t border-slate-100">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <button className="flex items-center justify-between w-full group py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-50 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                            <ImageIcon className="w-5 h-5" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Product Interface Examples</h4>
                        </div>
                        <ChevronDown className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-all" />
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-8 space-y-20">
                      {HOCKEYSTACK_INTERFACES.map((example, i) => (
                        <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                          <div className={cn("order-1", i % 2 !== 0 && "lg:order-2")}>
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="relative group cursor-zoom-in rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                                    <div className="bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                      <Maximize2 className="w-5 h-5 text-gray-900" />
                                    </div>
                                  </div>
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none">
                                <div className="relative w-full h-full flex items-center justify-center">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                                  />
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                          
                          <div className={cn("space-y-4 order-2", i % 2 !== 0 && "lg:order-1")}>
                            <h4 className="text-xl font-bold text-gray-900">{example.title}</h4>
                            <p className="text-base text-gray-600 leading-relaxed">
                              {example.description}
                            </p>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                              Criterion: {example.criterion}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-slate-100">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Strengths</h4>
                    <ul className="space-y-2">
                      {["Flexible attribution modeling", "Customizable reporting", "Strong SaaS-focused analytics", "Suitable for RevOps and analytics-driven teams"].map((s, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Trade-Offs</h4>
                    <ul className="space-y-2">
                      {["Not specialized for LinkedIn-native optimization", "No automated audience refinement based on CRM outcomes", "Requires internal analytics maturity"].map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-4">Implementation Considerations</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Requires structured CRM and tracking setup.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Best suited for teams with dedicated analytics or RevOps resources.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Custom attribution models increase configuration complexity.
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Best Fit</h4>
                    <p className="text-sm text-gray-600">B2B SaaS organizations seeking flexible multi-channel revenue attribution and advanced marketing analytics.</p>
                  </div>
                  <Button variant="outline" size="lg" className="px-8 border-slate-200 text-slate-600 hover:bg-slate-50">
                    Visit HockeyStack
                  </Button>
                </div>
                <p className="mt-8 text-xs text-slate-400 text-center">
                  Closest alternatives: Dreamdata, DemandSense
                </p>
              </div>

              {/* Factors.ai Review Section */}
              <div id="factors-ai" className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                  <div>
                    <div className="h-12 w-auto mb-6 flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">F</div>
                      <span className="text-2xl font-bold text-gray-900 tracking-tight">Factors.ai</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Factors.ai</h3>
                    <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                      Category: B2B Marketing Analytics & Attribution Platform
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Evaluation Summary:</span>
                    <span className="text-sm font-bold text-slate-600">Mid-Market Analytics Layer</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                  <div className="lg:col-span-5">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Overview</h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Factors.ai is a B2B marketing analytics and attribution platform focused on connecting advertising performance, website engagement, and CRM data into unified reporting dashboards. It emphasizes campaign analytics and attribution visibility across multiple channels.
                        </p>
                        <p className="text-sm mt-4">
                          <strong>Primary differentiator: Unified B2B marketing analytics with account-level attribution visibility.</strong>
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed mt-4">
                          The platform positions itself as a marketing analytics layer rather than a channel-native optimization system. It centralizes reporting but does not operate as a campaign execution or API-level optimization tool.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">LinkedIn Capability</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Ingests LinkedIn Ads data for reporting and attribution purposes. Does not provide LinkedIn-native campaign optimization controls.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">CRM Attribution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Supports multi-touch attribution modeling with CRM integration and pipeline reporting.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Identity Resolution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Primarily account-level and company-level identification derived from website and CRM data. Does not focus on professional person-level identity resolution.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Optimization Loop</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Attribution insights inform strategic decisions but do not directly automate LinkedIn audience refinement or suppression workflows.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrated Product Interface Examples - Collapsible */}
                <div className="pt-12 border-t border-slate-100">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <button className="flex items-center justify-between w-full group py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-50 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                            <ImageIcon className="w-5 h-5" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Product Interface Examples</h4>
                        </div>
                        <ChevronDown className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-all" />
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-8 space-y-20">
                      {FACTORS_INTERFACES.map((example, i) => (
                        <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                          <div className={cn("order-1", i % 2 !== 0 && "lg:order-2")}>
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="relative group cursor-zoom-in rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                                    <div className="bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                      <Maximize2 className="w-5 h-5 text-gray-900" />
                                    </div>
                                  </div>
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none">
                                <div className="relative w-full h-full flex items-center justify-center">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                                  />
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                          
                          <div className={cn("space-y-4 order-2", i % 2 !== 0 && "lg:order-1")}>
                            <h4 className="text-xl font-bold text-gray-900">{example.title}</h4>
                            <p className="text-base text-gray-600 leading-relaxed">
                              {example.description}
                            </p>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                              Criterion: {example.criterion}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-slate-100">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Strengths</h4>
                    <ul className="space-y-2">
                      {["Unified marketing analytics across channels", "CRM-connected revenue reporting", "Account-based visibility", "Suitable for mid-market B2B teams"].map((s, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Trade-Offs</h4>
                    <ul className="space-y-2">
                      {["Not specialized for LinkedIn-native optimization", "No automated closed-loop targeting adjustments", "Limited benchmarking context"].map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-4">Implementation Considerations</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Requires CRM and ad platform integration.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Best utilized by marketing operations teams.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Attribution accuracy depends on tracking configuration quality.
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Best Fit</h4>
                    <p className="text-sm text-gray-600">Mid-market B2B organizations seeking consolidated marketing analytics and multi-channel attribution visibility.</p>
                  </div>
                  <Button variant="outline" size="lg" className="px-8 border-slate-200 text-slate-600 hover:bg-slate-50">
                    Visit Factors.ai
                  </Button>
                </div>
                <p className="mt-8 text-xs text-slate-400 text-center">
                  Closest alternatives: Dreamdata, HockeyStack
                </p>
              </div>

              {/* Fibbler Review Section */}
              <div id="fibbler" className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                  <div>
                    <div className="h-12 w-auto mb-6 flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">F</div>
                      <span className="text-2xl font-bold text-gray-900 tracking-tight">Fibbler</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Fibbler</h3>
                    <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                      Category: LinkedIn Performance Analytics Add-On
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Evaluation Summary:</span>
                    <span className="text-sm font-bold text-slate-600">LinkedIn-Focused Analytics Enhancement</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                  <div className="lg:col-span-5">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Overview</h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Fibbler is a LinkedIn-focused analytics platform designed to enhance visibility into campaign performance beyond LinkedIn’s native reporting. It emphasizes performance diagnostics and campaign analysis rather than multi-channel attribution or CRM-driven optimization.
                        </p>
                        <p className="text-sm mt-4">
                          <strong>Primary differentiator: LinkedIn-specific performance diagnostics and reporting enhancements.</strong>
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed mt-4">
                          The platform is positioned as an analytics enhancement layer for LinkedIn advertisers seeking more granular reporting insights.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">LinkedIn Capability</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Provides LinkedIn-focused reporting enhancements and campaign diagnostics. Does not offer native API-level optimization controls beyond LinkedIn’s standard capabilities.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">CRM Attribution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Offers limited attribution context. Does not provide advanced multi-touch revenue attribution modeling or deep CRM synchronization.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Identity Resolution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Does not provide person-level or company-level visitor identification beyond LinkedIn campaign engagement data.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Optimization Loop</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Provides performance insights and recommendations. Does not automate CRM-driven suppression or targeting refinement within LinkedIn.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrated Product Interface Examples - Collapsible */}
                <div className="pt-12 border-t border-slate-100">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <button className="flex items-center justify-between w-full group py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-50 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                            <ImageIcon className="w-5 h-5" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Product Interface Examples</h4>
                        </div>
                        <ChevronDown className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-all" />
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-8 space-y-20">
                      {FIBBLER_INTERFACES.map((example, i) => (
                        <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                          <div className={cn("order-1", i % 2 !== 0 && "lg:order-2")}>
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="relative group cursor-zoom-in rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                                    <div className="bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                      <Maximize2 className="w-5 h-5 text-gray-900" />
                                    </div>
                                  </div>
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none">
                                <div className="relative w-full h-full flex items-center justify-center">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                                  />
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                          
                          <div className={cn("space-y-4 order-2", i % 2 !== 0 && "lg:order-1")}>
                            <h4 className="text-xl font-bold text-gray-900">{example.title}</h4>
                            <p className="text-base text-gray-600 leading-relaxed">
                              {example.description}
                            </p>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                              Criterion: {example.criterion}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-slate-100">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Strengths</h4>
                    <ul className="space-y-2">
                      {["LinkedIn-specific analytics focus", "Simpler setup compared to multi-channel attribution tools", "Designed specifically for LinkedIn campaign visibility"].map((s, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Trade-Offs</h4>
                    <ul className="space-y-2">
                      {["Limited CRM integration", "No identity resolution layer", "No closed-loop revenue feedback system", "Primarily reporting-focused rather than optimization-native"].map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-4">Implementation Considerations</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Requires LinkedIn Ads account connection.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Best suited for teams focused exclusively on LinkedIn reporting.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Does not replace CRM-based attribution infrastructure.
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Best Fit</h4>
                    <p className="text-sm text-gray-600">LinkedIn advertisers seeking enhanced campaign reporting and diagnostic visibility without implementing a broader attribution or CRM-linked system.</p>
                  </div>
                  <Button variant="outline" size="lg" className="px-8 border-slate-200 text-slate-600 hover:bg-slate-50">
                    Visit Fibbler
                  </Button>
                </div>
                <p className="mt-8 text-xs text-slate-400 text-center">
                  Closest alternatives: Cometly, DemandSense
                </p>
              </div>

              {/* Cometly Review Section */}
              <div id="cometly" className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                  <div>
                    <div className="h-12 w-auto mb-6 flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">C</div>
                      <span className="text-2xl font-bold text-gray-900 tracking-tight">Cometly</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Cometly</h3>
                    <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                      Category: Paid Ads Attribution & Revenue Tracking Tool
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Evaluation Summary:</span>
                    <span className="text-sm font-bold text-slate-600">Lightweight Attribution Layer</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                  <div className="lg:col-span-5">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Overview</h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Cometly is an ad attribution and revenue tracking platform focused on connecting paid advertising activity to pipeline and revenue outcomes. It is positioned as a lightweight attribution layer for teams that want clearer ad-to-revenue visibility without implementing a full enterprise analytics stack.
                        </p>
                        <p className="text-sm mt-4">
                          <strong>Primary differentiator: Lightweight paid ads revenue attribution tracking.</strong>
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed mt-4">
                          Compared to LinkedIn-specialized performance systems, Cometly functions primarily as an attribution and reporting tool rather than an optimization platform.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">LinkedIn Capability</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Can ingest LinkedIn Ads data for reporting purposes. Does not provide LinkedIn-native campaign optimization controls or API-level targeting adjustments.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">CRM Attribution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Supports revenue tracking and attribution visibility with CRM integration. Generally oriented toward simpler attribution and reporting rather than advanced multi-touch modeling.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Identity Resolution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Does not focus on person-level or company-level visitor identification. Attribution is primarily based on tracking and conversion event data.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Optimization Loop</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Provides attribution insights for decision-making but does not automate audience refinement, suppression, or closed-loop targeting feedback inside LinkedIn.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrated Product Interface Examples - Collapsible */}
                <div className="pt-12 border-t border-slate-100">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <button className="flex items-center justify-between w-full group py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-50 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                            <ImageIcon className="w-5 h-5" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Product Interface Examples</h4>
                        </div>
                        <ChevronDown className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-all" />
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-8 space-y-20">
                      {COMETLY_INTERFACES.map((example, i) => (
                        <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                          <div className={cn("order-1", i % 2 !== 0 && "lg:order-2")}>
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="relative group cursor-zoom-in rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                                    <div className="bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                      <Maximize2 className="w-5 h-5 text-gray-900" />
                                    </div>
                                  </div>
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none">
                                <div className="relative w-full h-full flex items-center justify-center">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                                  />
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                          
                          <div className={cn("space-y-4 order-2", i % 2 !== 0 && "lg:order-1")}>
                            <h4 className="text-xl font-bold text-gray-900">{example.title}</h4>
                            <p className="text-base text-gray-600 leading-relaxed">
                              {example.description}
                            </p>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                              Criterion: {example.criterion}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-slate-100">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Strengths</h4>
                    <ul className="space-y-2">
                      {["Simpler setup compared to enterprise attribution stacks", "Focused on paid ads revenue visibility", "Useful for teams needing quick attribution reporting"].map((s, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Trade-Offs</h4>
                    <ul className="space-y-2">
                      {["Not specialized for LinkedIn-native optimization", "Limited identity resolution depth", "No benchmark context for LinkedIn performance", "Less suited for complex B2B multi-touch journeys"].map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-4">Implementation Considerations</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Requires tracking configuration discipline to maintain attribution accuracy.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      CRM integration improves revenue visibility but may require setup effort.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Better suited for simpler attribution needs vs. complex enterprise modeling.
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Best Fit</h4>
                    <p className="text-sm text-gray-600">Teams running paid acquisition who need straightforward ad-to-revenue reporting without advanced optimization workflows or enterprise ABM infrastructure.</p>
                  </div>
                  <Button variant="outline" size="lg" className="px-8 border-slate-200 text-slate-600 hover:bg-slate-50">
                    Visit Cometly
                  </Button>
                </div>
                <p className="mt-8 text-xs text-slate-400 text-center">
                  Closest alternatives: Fibbler, HockeyStack
                </p>
              </div>

              {/* 6sense Review Section */}
              <div id="6sense" className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                  <div>
                    <div className="h-12 w-auto mb-6 flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">6</div>
                      <span className="text-2xl font-bold text-gray-900 tracking-tight">6sense</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">6sense</h3>
                    <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                      Category: Enterprise ABM & Intent Platform
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Evaluation Summary:</span>
                    <span className="text-sm font-bold text-slate-600">Enterprise ABM Orchestration</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                  <div className="lg:col-span-5">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Overview</h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          6sense is an enterprise-grade account-based marketing (ABM) and revenue intelligence platform designed for large B2B organizations. It focuses on account-level intent detection, predictive modeling, and sales orchestration across multiple channels.
                        </p>
                        <p className="text-sm mt-4">
                          <strong>Primary differentiator: Enterprise-level account-based intent intelligence and orchestration.</strong>
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed mt-4">
                          The platform is built for enterprise revenue teams managing complex ABM strategies rather than channel-specific campaign optimization.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">LinkedIn Capability</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Supports LinkedIn campaign integration within broader ABM orchestration. Does not provide LinkedIn-native API-level campaign optimization controls focused on performance tuning.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">CRM Attribution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Enterprise-level revenue intelligence with deep CRM integration and account-based opportunity modeling.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Identity Resolution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Account-level intent detection based on predictive modeling and third-party data sources. Not focused on person-level professional identity resolution within LinkedIn traffic.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Optimization Loop</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Supports ABM-driven campaign coordination across channels. Does not operate as a closed-loop LinkedIn performance optimization system tied directly to campaign-level adjustments.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrated Product Interface Examples - Collapsible */}
                <div className="pt-12 border-t border-slate-100">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <button className="flex items-center justify-between w-full group py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-50 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                            <ImageIcon className="w-5 h-5" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Product Interface Examples</h4>
                        </div>
                        <ChevronDown className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-all" />
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-8 space-y-20">
                      {SIXSENSE_INTERFACES.map((example, i) => (
                        <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                          <div className={cn("order-1", i % 2 !== 0 && "lg:order-2")}>
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="relative group cursor-zoom-in rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                                    <div className="bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                      <Maximize2 className="w-5 h-5 text-gray-900" />
                                    </div>
                                  </div>
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none">
                                <div className="relative w-full h-full flex items-center justify-center">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                                  />
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                          
                          <div className={cn("space-y-4 order-2", i % 2 !== 0 && "lg:order-1")}>
                            <h4 className="text-xl font-bold text-gray-900">{example.title}</h4>
                            <p className="text-base text-gray-600 leading-relaxed">
                              {example.description}
                            </p>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                              Criterion: {example.criterion}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-slate-100">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Strengths</h4>
                    <ul className="space-y-2">
                      {["Advanced account-based intent modeling", "Enterprise CRM integration", "Predictive revenue intelligence", "Designed for large ABM teams"].map((s, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Trade-Offs</h4>
                    <ul className="space-y-2">
                      {["Enterprise pricing and implementation complexity", "Not specialized for LinkedIn performance optimization", "Overpowered for small and mid-sized LinkedIn-focused teams", "Longer deployment cycles"].map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-4">Implementation Considerations</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Requires structured CRM and marketing automation stack.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Implementation typically involves technical onboarding and sales alignment.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Designed for large teams with established ABM processes.
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Best Fit</h4>
                    <p className="text-sm text-gray-600">Enterprise B2B organizations running structured ABM programs across multiple channels with dedicated RevOps and sales alignment teams.</p>
                  </div>
                  <Button variant="outline" size="lg" className="px-8 border-slate-200 text-slate-600 hover:bg-slate-50">
                    Visit 6sense
                  </Button>
                </div>
                <p className="mt-8 text-xs text-slate-400 text-center">
                  Closest alternatives: ZenABM, DemandSense
                </p>
              </div>

              {/* ZenABM Review Section */}
              <div id="zenabm" className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                  <div>
                    <div className="h-12 w-auto mb-6 flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">Z</div>
                      <span className="text-2xl font-bold text-gray-900 tracking-tight">ZenABM</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">ZenABM</h3>
                    <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                      Category: Account-Based Marketing Execution Platform
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Evaluation Summary:</span>
                    <span className="text-sm font-bold text-slate-600">ABM Execution Workflow</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                  <div className="lg:col-span-5">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Overview</h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          ZenABM is an account-based marketing (ABM) execution platform designed to help B2B teams orchestrate targeted outreach campaigns toward predefined account lists. It focuses on account-level engagement coordination rather than revenue attribution or channel-native campaign optimization.
                        </p>
                        <p className="text-sm mt-4">
                          <strong>Primary differentiator: Structured account-based campaign execution workflows.</strong>
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed mt-4">
                          The platform is positioned as an ABM workflow tool rather than a marketing analytics or LinkedIn performance system.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">LinkedIn Capability</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Supports LinkedIn campaign activation within ABM workflows. Does not provide LinkedIn-native performance optimization or API-level campaign control for granular tuning.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">CRM Attribution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Provides account-level reporting tied to CRM records. Does not offer advanced multi-touch attribution modeling or detailed revenue impact analysis.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Identity Resolution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Focused on account-level targeting and engagement. Does not emphasize person-level professional identity resolution from LinkedIn traffic.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight border-b border-slate-100 pb-2">Optimization Loop</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Campaign adjustments are driven by ABM strategy rather than revenue-based automated targeting refinement inside LinkedIn.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrated Product Interface Examples - Collapsible */}
                <div className="pt-12 border-t border-slate-100">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <button className="flex items-center justify-between w-full group py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-50 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                            <ImageIcon className="w-5 h-5" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Product Interface Examples</h4>
                        </div>
                        <ChevronDown className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-all" />
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-8 space-y-20">
                      {ZENABM_INTERFACES.map((example, i) => (
                        <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                          <div className={cn("order-1", i % 2 !== 0 && "lg:order-2")}>
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="relative group cursor-zoom-in rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                                    <div className="bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                      <Maximize2 className="w-5 h-5 text-gray-900" />
                                    </div>
                                  </div>
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none">
                                <div className="relative w-full h-full flex items-center justify-center">
                                  <img 
                                    src={example.image} 
                                    alt={example.alt} 
                                    className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                                  />
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                          
                          <div className={cn("space-y-4 order-2", i % 2 !== 0 && "lg:order-1")}>
                            <h4 className="text-xl font-bold text-gray-900">{example.title}</h4>
                            <p className="text-base text-gray-600 leading-relaxed">
                              {example.description}
                            </p>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                              Criterion: {example.criterion}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-slate-100">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Strengths</h4>
                    <ul className="space-y-2">
                      {["Designed for structured ABM execution", "Account-based targeting coordination", "CRM-aligned outreach workflows", "Suitable for sales and marketing alignment"].map((s, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Trade-Offs</h4>
                    <ul className="space-y-2">
                      {["Not built for LinkedIn-native performance optimization", "Limited attribution modeling depth", "No closed-loop revenue feedback system", "Less relevant for campaign-level optimization teams"].map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-4">Implementation Considerations</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Requires defined account lists and CRM alignment.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Best suited for teams with active ABM strategy.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      Does not replace attribution or analytics infrastructure.
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight">Best Fit</h4>
                    <p className="text-sm text-gray-600">B2B organizations running structured account-based marketing programs focused on targeted outreach rather than channel-level performance optimization.</p>
                  </div>
                  <Button variant="outline" size="lg" className="px-8 border-slate-200 text-slate-600 hover:bg-slate-50">
                    Visit ZenABM
                  </Button>
                </div>
                <p className="mt-8 text-xs text-slate-400 text-center">
                  Closest alternatives: 6sense, DemandSense
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Platform Selection Guide */}
        <section id="selection-guide" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-[1216px] mx-auto">
            <div className="bg-slate-900 rounded-[32px] p-12 md:p-20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
                <SectionBadge icon={ClipboardCheck} text="Selection Framework" variant="dark" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">Platform Selection Guide</h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  The right platform depends on channel focus, attribution depth, and operational complexity. Below is a simplified decision framework based on the evaluation criteria used in this comparison.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {[
                  { 
                    situation: "LinkedIn is the primary paid acquisition channel and requires campaign-level performance tuning.", 
                    factor: "Closed-loop LinkedIn revenue optimization.",
                    platform: "DemandSense",
                    rationale: "Provides native API-level optimization controls and person-level identity resolution specifically architected for LinkedIn's data structures.",
                    anchor: "demandsense"
                  },
                  { 
                    situation: "Requires complex revenue modeling across multiple paid and organic channels simultaneously.", 
                    factor: "Multi-touch revenue modeling across channels.",
                    platform: "Dreamdata / HockeyStack",
                    rationale: "Offers advanced multi-channel infrastructure and customizable attribution models designed for cross-functional RevOps analysis.",
                    anchor: "dreamdata"
                  },
                  { 
                    situation: "Managing large-scale enterprise ABM programs with a focus on predictive account intent.", 
                    factor: "Account-based orchestration and intent intelligence.",
                    platform: "6sense",
                    rationale: "Delivers enterprise-grade predictive modeling and account-based orchestration for organizations with high operational complexity.",
                    anchor: "6sense"
                  },
                  { 
                    situation: "Needs lightweight reporting and basic ad-to-revenue visibility without optimization depth.", 
                    factor: "Simplified ad-to-revenue visibility.",
                    platform: "Fibbler / Cometly",
                    rationale: "Focuses on simplified attribution reporting and campaign diagnostics for teams prioritizing ease of implementation over technical depth.",
                    anchor: "fibbler"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col">
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-3">Situation</div>
                    <div className="text-base text-white font-medium mb-2 leading-relaxed">{item.situation}</div>
                    <div className="text-xs text-slate-300 mb-6">
                      <strong>Primary decision factor:</strong> {item.factor}
                    </div>
                    
                    <div className="mt-auto">
                      <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-3">Recommended Platform</div>
                      <div className="text-xl font-bold text-white mb-3">{item.platform}</div>
                      <div className="text-sm text-slate-400 leading-relaxed mb-6">{item.rationale}</div>
                      <button 
                        onClick={() => document.getElementById(item.anchor)?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                      >
                        See detailed review <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section id="faq" className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <SectionBadge icon={HelpCircle} text="Technical FAQ" />
              <h2 className="text-4xl font-bold text-gray-900 mt-6 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                This section addresses common technical inquiries regarding LinkedIn attribution methodologies, CRM synchronization, and multi-touch revenue modeling.
              </p>
            </div>
            
            <div className="space-y-16">
              {FAQ_GROUPS.map((group, groupIdx) => (
                <div key={groupIdx} className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4">{group.title}</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {group.items.map((item, i) => (
                      <AccordionItem key={i} value={`item-${groupIdx}-${i}`} className="border-slate-200">
                        <AccordionTrigger className="text-left font-bold text-gray-900 py-6 hover:text-blue-600 transition-colors">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-8 text-base">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-[1216px] mx-auto">
            <div className="bg-slate-900 rounded-[32px] p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <div className="relative z-10">
                <div className="text-sm font-medium text-slate-400 mb-4">For teams running LinkedIn as a primary B2B growth channel</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Prove Your LinkedIn Revenue Impact</h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Connect LinkedIn campaign engagement directly to CRM pipeline and revenue outcomes — and enable optimization based on real closed-loop performance data.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="hero" size="hero" className="bg-blue-600 hover:bg-blue-700 border-none px-10" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                    Start Measuring ROI
                  </Button>
                  <Button variant="hero-outline" size="hero" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-10" onClick={() => document.getElementById('comparison-table')?.scrollIntoView({ behavior: 'smooth' })}>
                    Explore Full Comparison
                  </Button>
                </div>
                <div className="mt-8 text-xs text-slate-500">
                  Works with Salesforce, HubSpot, LinkedIn Ads, and custom webhook integrations.
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>

      <style>{`
        @keyframes active-node {
          0%, 100% { background-color: #ffffff; border-color: #f1f5f9; color: #94a3b8; }
          50% { background-color: #ffedd5; border-color: #f97316; color: #9a3412; box-shadow: 0 4px 20px rgba(249, 115, 22, 0.15); }
        }
        @keyframes shining-light {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes pulse-line {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-active-node-1 { animation: active-node 8s infinite; animation-delay: 0s; }
        .animate-active-node-2 { animation: active-node 8s infinite; animation-delay: 2s; }
        .animate-active-node-3 { animation: active-node 8s infinite; animation-delay: 4s; }
        .animate-active-node-4 { animation: active-node 8s infinite; animation-delay: 6s; }
        
        .animate-shining-light-1 { animation: shining-light 8s infinite; animation-delay: 0s; }
        .animate-shining-light-2 { animation: shining-light 8s infinite; animation-delay: 2s; }
        .animate-shining-light-3 { animation: shining-light 8s infinite; animation-delay: 4s; }
        .animate-shining-light-4 { animation: shining-light 8s infinite; animation-delay: 6s; }

        .animate-pulse-line-1 { animation: pulse-line 8s infinite linear; animation-delay: 1s; }
        .animate-pulse-line-2 { animation: pulse-line 8s infinite linear; animation-delay: 3s; }
      `}</style>
    </TooltipProvider>
  );
};

export default LinkedInAttribution;