import React from 'react';
import { ArrowRight, Check, Circle, Wifi, Signal, Battery } from 'lucide-react';
import ButtonGroup from './ButtonGroup';
import { ContainerScroll } from './ui/container-scroll-animation';
import { fallbackCustomerLogos } from '@/data/customerLogos';
import DynamicShadow from './DynamicShadow';

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
    
    // Simulate page load time (realistic browser behavior)
    setTimeout(() => {
      setActiveTab(tabId);
      setImageKey(prev => prev + 1);
      
      // Hide loading indicator after image transition starts
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }, 400);
  };

  // Create a continuous scrolling array of logos
  const scrollingLogos = React.useMemo(() => {
    const selectedLogos = fallbackCustomerLogos.slice(0, 8);
    return [...selectedLogos, ...selectedLogos];
  }, []);

  const titleComponent = (
    <div className="flex flex-col items-center text-center px-4 relative" style={{ paddingTop: '300px' }}>
      {/* Dynamic Shadows in Background */}
      <DynamicShadow variant="hero" />
      
      {/* Badge Group */}
      <div className="inline-flex items-center bg-gray-50 rounded-full p-1 mb-12 shadow-md relative z-10" role="group" aria-label="Update notification">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
          <Circle className="h-3 w-3 text-green-500 fill-green-500 animate-pulse-soft" aria-hidden="true" />
          <span className="text-sm font-normal text-gray-900 tracking-tight">New</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1">
          <span className="text-sm font-normal text-gray-900 tracking-tight">Influenced Revenue</span>
          <ArrowRight className="h-3.5 w-3.5 text-gray-600" aria-hidden="true" />
        </div>
      </div>

      {/* Animated Main Heading */}
      <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-12 max-w-5xl leading-tight tracking-tight relative z-10">
        Sense Every <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Buyer Signal</span>.<br />
        Drive Every <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">B2B Sale</span>.
      </h1>

      {/* Button Group */}
      <div className="mb-6 relative z-10">
        <ButtonGroup primaryLabel="Get started" secondaryLabel="Contact us" />
      </div>

      {/* Checkmark Features */}
      <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-12 relative z-10">
        <div className="flex items-center gap-2" role="listitem">
          <Check className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
          <span className="tracking-tight">30 days free trial</span>
        </div>
      </div>

      {/* Brand Logos Line */}
      <div className="w-full max-w-3xl mx-auto mb-8 relative z-10">
        <div className="overflow-hidden">
          <div className="flex items-center animate-scroll-left" style={{ width: 'fit-content' }}>
            {scrollingLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ minWidth: `${logo.width}px`, height: '32px' }}
              >
                {logo.logoSrc ? (
                  <img
                    src={logo.logoSrc}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    className="opacity-40 hover:opacity-60 transition-opacity duration-300 object-contain"
                    style={{ filter: 'grayscale(100%)' }}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="flex items-center justify-center text-gray-400 text-sm font-medium opacity-40 hover:opacity-60 transition-opacity duration-300"
                    style={{ width: `${logo.width}px`, height: '32px' }}
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
    <div className="relative flex flex-col overflow-hidden min-h-screen pb-32">
      <ContainerScroll titleComponent={titleComponent}>
        {/* Premium Browser Window */}
        <div className="magic-border relative mx-auto max-w-[1600px] w-full scale-110 mt-16 mb-40">
          {/* Browser Chrome */}
          <div className="relative bg-white rounded-t-xl shadow-2xl border border-gray-200/60 overflow-hidden">
            {/* Top Bar with macOS-style design */}
            <div className="relative bg-gradient-to-b from-gray-50 to-gray-100/80 border-b border-gray-200/60 px-4 py-3">
              {/* Traffic Lights */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-red-400 to-red-500 shadow-sm ring-1 ring-red-300/50 hover:from-red-500 hover:to-red-600 transition-all duration-200 cursor-pointer" />
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-sm ring-1 ring-yellow-300/50 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 cursor-pointer" />
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-400 to-green-500 shadow-sm ring-1 ring-green-300/50 hover:from-green-500 hover:to-green-600 transition-all duration-200 cursor-pointer" />
              </div>

              {/* Address Bar */}
              <div className="max-w-xl mx-auto">
                <div className="relative bg-white rounded-md border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center px-3 py-2">
                    {/* Lock Icon */}
                    <div className="flex items-center gap-1.5 mr-2 text-green-600">
                      <div className="w-3 h-3 rounded-sm bg-green-100 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-sm" />
                      </div>
                      <span className="text-xs font-medium">Secure</span>
                    </div>
                    
                    {/* URL - updates based on active tab */}
                    <div className="flex-1 text-gray-700 font-mono text-xs">
                      {activeTabData.url}
                    </div>
                    
                    {/* Loading Spinner - shows during tab transition */}
                    {isLoading && (
                      <div className="ml-2 flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                      </div>
                    )}
                    
                    {/* Bookmark Star */}
                    {!isLoading && (
                      <div className="ml-2 text-gray-400 hover:text-yellow-500 transition-colors duration-200 cursor-pointer">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side Controls */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-500">
                <Wifi className="w-3 h-3" />
                <Signal className="w-3 h-3" />
                <Battery className="w-3 h-3" />
                <div className="text-xs font-medium">2:47 PM</div>
              </div>
            </div>

            {/* Tab Bar - Interactive Tabs */}
            <div className="bg-gradient-to-b from-gray-100/80 to-gray-50 border-b border-gray-200/60 px-4 py-1.5">
              <div className="flex items-center gap-1">
                {/* Tabs */}
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`
                      px-3 py-1.5 rounded-t-md border-t border-l border-r transition-all duration-200
                      ${activeTab === tab.id 
                        ? 'bg-white border-gray-200/60 shadow-sm' 
                        : 'bg-transparent border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50/50'
                      }
                    `}
                    aria-label={`Switch to ${tab.label} tab`}
                    aria-current={activeTab === tab.id ? 'page' : undefined}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className={`w-3 h-3 rounded flex items-center justify-center ${
                        activeTab === tab.id 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                          : 'bg-gray-300'
                      }`}>
                        {activeTab === tab.id && (
                          <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                        )}
                      </div>
                      <span className={`text-xs font-medium ${
                        activeTab === tab.id ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {tab.label}
                      </span>
                      {activeTab === tab.id && (
                        <div className="w-3 h-3 text-gray-400 hover:text-gray-600 cursor-pointer text-xs">×</div>
                      )}
                    </div>
                  </button>
                ))}
                
                {/* New Tab Button */}
                <div className="ml-1.5 w-6 h-6 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center cursor-pointer transition-colors duration-200">
                  <span className="text-gray-500 text-sm">+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content - Image changes based on active tab */}
          <div className="relative bg-white rounded-b-xl shadow-2xl border-l border-r border-b border-gray-200/60 overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-transparent pointer-events-none" />
            
            {/* Loading overlay */}
            {isLoading && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-3 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
                  <span className="text-sm text-gray-600 font-medium">Loading...</span>
                </div>
              </div>
            )}
            
            {/* Image with fade transition */}
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
            
            {/* Bottom gradient overlay for depth */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/10 via-gray-900/5 to-transparent pointer-events-none" />
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