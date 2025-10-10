import React from 'react';
import { ArrowRight, Check, Circle, Sparkles, TrendingUp, Zap } from 'lucide-react';
import ButtonGroup from './ButtonGroup';
import { ContainerScroll } from './ui/container-scroll-animation';
import DynamicShadow from './DynamicShadow';
import { fallbackCustomerLogos } from '@/data/customerLogos';

type TabId = 'dashboard' | 'ai-copilot' | 'visitors' | 'reports';

type Tab = {
  id: TabId;
  label: string;
  url: string;
  imageSrc: string;
};

const TABS: Tab[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    url: 'https://app.demandsense.com/dashboard',
    imageSrc: '/media/feature-share-smart.png',
  },
  {
    id: 'ai-copilot',
    label: 'AI Co-Pilot',
    url: 'https://app.demandsense.com/ai-copilot',
    imageSrc: '/media/feature-share-smart.png',
  },
  {
    id: 'visitors',
    label: 'Website Visitors',
    url: 'https://app.demandsense.com/visitors',
    imageSrc: '/media/feature-share-smart.png',
  },
  {
    id: 'reports',
    label: 'Reports',
    url: 'https://app.demandsense.com/reports',
    imageSrc: '/media/feature-share-smart.png',
  },
];

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<TabId>('dashboard');
  const [isLoading, setIsLoading] = React.useState(false);
  const [imageKey, setImageKey] = React.useState(0);

  const activeTabData = TABS.find(tab => tab.id === activeTab) || TABS[0];

  const handleTabClick = (tabId: TabId) => {
    if (tabId === activeTab) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      setActiveTab(tabId);
      setImageKey(prev => prev + 1);
      
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }, 400);
  };

  const scrollingLogos = React.useMemo(() => {
    const selectedLogos = fallbackCustomerLogos.slice(0, 8);
    return [...selectedLogos, ...selectedLogos];
  }, []);

  const titleComponent = (
    <div className="flex flex-col items-center text-center px-4 pt-32 md:pt-40 lg:pt-48">
      {/* Premium Badge with Glassmorphism */}
      <div 
        className="inline-flex items-center backdrop-blur-xl bg-white/60 rounded-full p-1 mb-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105" 
        role="group" 
        aria-label="Update notification"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full px-4 py-2 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-white animate-pulse" aria-hidden="true" />
          <span className="text-sm font-semibold text-white tracking-tight">New Feature</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2">
          <span className="text-sm font-medium text-gray-700 tracking-tight">Influenced Revenue Tracking</span>
          <ArrowRight className="h-4 w-4 text-gray-600" aria-hidden="true" />
        </div>
      </div>

      {/* Hero Headline - More dramatic spacing and sizing */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 max-w-6xl leading-[1.1] tracking-tight">
        Sense Every{" "}
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Buyer Signal
          </span>
          <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.5C50 2.5 100 1 150 2.5C200 4 250 5.5 299 5.5" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <br />
        Drive Every{" "}
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            B2B Sale
          </span>
          <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.5C50 2.5 100 1 150 2.5C200 4 250 5.5 299 5.5" stroke="url(#gradient2)" strokeWidth="3" strokeLinecap="round"/>
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#F97316" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#F97316" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </h1>

      {/* Subheadline - Better hierarchy */}
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
        The only LinkedIn-centric platform that identifies anonymous buyers, 
        tracks their journey, and proves marketing's revenue impact.
      </p>

      {/* CTA Buttons - More premium styling */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
          className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-2">
            Start Free Trial
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
        
        <button
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-gray-700 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
        >
          <TrendingUp className="h-5 w-5 text-blue-600" />
          View Live Demo
        </button>
      </div>

      {/* Trust Indicators - More refined */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-12">
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
          <Check className="h-4 w-4 text-green-600" />
          <span className="font-medium">No credit card required</span>
        </div>
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
          <Check className="h-4 w-4 text-green-600" />
          <span className="font-medium">Setup in 5 minutes</span>
        </div>
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
          <Check className="h-4 w-4 text-green-600" />
          <span className="font-medium">Cancel anytime</span>
        </div>
      </div>

      {/* Social Proof - Premium treatment */}
      <div className="w-full max-w-4xl mx-auto mb-16">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
          Trusted by leading B2B companies
        </p>
        <div className="relative overflow-hidden">
          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex items-center animate-scroll-left" style={{ width: 'fit-content' }}>
            {scrollingLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                style={{ minWidth: `${logo.width}px`, height: '36px' }}
              >
                {logo.logoSrc ? (
                  <img
                    src={logo.logoSrc}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    className="opacity-50 hover:opacity-100 transition-opacity duration-300 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="flex items-center justify-center text-gray-400 text-sm font-medium opacity-50 hover:opacity-100 transition-opacity duration-300"
                    style={{ width: `${logo.width}px`, height: '36px' }}
                  >
                    {logo.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col overflow-hidden min-h-screen pb-20">
      <DynamicShadow variant="hero" />
      <ContainerScroll titleComponent={titleComponent}>
        {/* Premium Browser Window with Glassmorphism */}
        <div className="relative mx-auto max-w-[1600px] w-full scale-110 mt-8 mb-32">
          {/* Ambient glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-3xl opacity-30" />
          
          {/* Browser Chrome with Glassmorphism */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Top Bar - More refined */}
            <div className="relative bg-gradient-to-b from-gray-50/80 to-gray-100/60 backdrop-blur-sm border-b border-gray-200/60 px-4 py-3.5">
              {/* Traffic Lights - macOS style */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-500 shadow-sm ring-1 ring-red-300/50 hover:from-red-500 hover:to-red-600 transition-all duration-200 cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-sm ring-1 ring-yellow-300/50 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-500 shadow-sm ring-1 ring-green-300/50 hover:from-green-500 hover:to-green-600 transition-all duration-200 cursor-pointer" />
              </div>

              {/* Address Bar - Premium styling */}
              <div className="max-w-2xl mx-auto">
                <div className="relative bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center px-4 py-2.5">
                    {/* Lock Icon */}
                    <div className="flex items-center gap-2 mr-3 text-green-600">
                      <div className="w-4 h-4 rounded-sm bg-green-100 flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-600 rounded-sm" />
                      </div>
                      <span className="text-xs font-semibold">Secure</span>
                    </div>
                    
                    {/* URL */}
                    <div className="flex-1 text-gray-700 font-mono text-sm">
                      {activeTabData.url}
                    </div>
                    
                    {/* Loading Spinner */}
                    {isLoading && (
                      <div className="ml-3 flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                      </div>
                    )}
                    
                    {/* Bookmark Star */}
                    {!isLoading && (
                      <div className="ml-3 text-gray-400 hover:text-yellow-500 transition-colors duration-200 cursor-pointer">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Bar - Interactive Tabs with better styling */}
            <div className="bg-gradient-to-b from-gray-100/60 to-gray-50/60 backdrop-blur-sm border-b border-gray-200/60 px-4 py-2">
              <div className="flex items-center gap-1">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`
                      px-4 py-2 rounded-t-lg border-t border-l border-r transition-all duration-200
                      ${activeTab === tab.id 
                        ? 'bg-white/90 backdrop-blur-sm border-gray-200/60 shadow-sm -mb-px' 
                        : 'bg-transparent border-transparent text-gray-500 hover:text-gray-700 hover:bg-white/40'
                      }
                    `}
                    aria-label={`Switch to ${tab.label} tab`}
                    aria-current={activeTab === tab.id ? 'page' : undefined}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded flex items-center justify-center transition-all duration-200 ${
                        activeTab === tab.id 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm' 
                          : 'bg-gray-300'
                      }`}>
                        {activeTab === tab.id && (
                          <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                        )}
                      </div>
                      <span className={`text-sm font-medium transition-colors ${
                        activeTab === tab.id ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {tab.label}
                      </span>
                      {activeTab === tab.id && (
                        <div className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer text-xs flex items-center justify-center">×</div>
                      )}
                    </div>
                  </button>
                ))}
                
                {/* New Tab Button */}
                <div className="ml-2 w-7 h-7 rounded-md bg-gray-100/60 hover:bg-gray-200/60 flex items-center justify-center cursor-pointer transition-colors duration-200">
                  <span className="text-gray-500 text-sm font-light">+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content - Premium treatment */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-b-2xl shadow-2xl border-l border-r border-b border-gray-200/60 overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-transparent to-transparent pointer-events-none" />
            
            {/* Loading overlay with blur */}
            {isLoading && (
              <div className="absolute inset-0 bg-white/70 backdrop-blur-md z-10 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
                  <span className="text-sm text-gray-600 font-medium">Loading...</span>
                </div>
              </div>
            )}
            
            {/* Image with smooth transition */}
            <div className="relative">
              <img
                key={imageKey}
                src={activeTabData.imageSrc}
                alt={`${activeTabData.label} preview`}
                className="w-full h-auto object-contain transition-opacity duration-300"
                style={{
                  animation: 'fadeIn 300ms ease-out',
                }}
                draggable={false}
                loading="eager"
              />
            </div>
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/5 via-gray-900/2 to-transparent pointer-events-none" />
          </div>
        </div>
      </ContainerScroll>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;