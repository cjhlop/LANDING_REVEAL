import React from 'react';
import { ArrowRight, Check, Play, Sparkles, Lock } from 'lucide-react';
import { ContainerScroll } from './ui/container-scroll-animation';
import { Button } from "@/components/ui/button";
import { fallbackCustomerLogos } from '@/data/customerLogos';
import { cn } from "@/lib/utils";

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
    url: 'demandsense.com/app',
    imageSrc: '/media/feature-share-smart.png',
  },
  {
    id: 'ai-copilot',
    label: 'AI Co-Pilot',
    url: 'demandsense.com/ai',
    imageSrc: '/media/feature-share-smart.png',
  },
  {
    id: 'visitors',
    label: 'Visitors',
    url: 'demandsense.com/visitors',
    imageSrc: '/media/feature-share-smart.png',
  },
  {
    id: 'reports',
    label: 'Reports',
    url: 'demandsense.com/analytics',
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
    return [...selectedLogos, ...selectedLogos, ...selectedLogos];
  }, []);

  const titleComponent = (
    <div className="flex flex-col items-center text-center px-4 relative z-10 pt-12 md:pt-20 pb-8">
      {/* Brand Badge: Using #EBF3FF (Very Light Blue) background and #3875F6 (Primary) text */}
      <div className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF]/80 backdrop-blur-md border border-[#3875F6]/20 shadow-[0_2px_10px_-2px_rgba(56,117,246,0.2)] hover:shadow-[0_4px_20px_-4px_rgba(56,117,246,0.3)] hover:border-[#3875F6]/40 transition-all duration-300 cursor-pointer mb-8">
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EBF3FF] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3875F6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3875F6]"></span>
            </span>
            <span className="text-sm font-medium text-[#3875F6] group-hover:text-[#1A3F89] transition-colors">
                New: Influenced Revenue Attribution
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-[#3875F6]/70 group-hover:text-[#3875F6] group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>

      {/* Headline: Using #0F2043 (Very Dark Blue) for main text */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F2043] mb-6 max-w-5xl leading-[1.1] tracking-tighter">
        Sense Every <span className="relative inline-block">
            <span className="absolute -inset-4 bg-[#3875F6]/10 blur-2xl rounded-full pointer-events-none"></span>
            {/* Gradient: Primary #3875F6 to Integration Purple #722ED1 */}
            <span className="relative bg-gradient-to-r from-[#3875F6] to-[#722ED1] bg-clip-text text-transparent">Buyer Signal</span>
        </span>.
        <br />
        Drive Every <span className="bg-gradient-to-r from-[#3875F6] to-[#FA8C16] bg-clip-text text-transparent">B2B Sale</span>.
      </h1>

      {/* Subtext: Using #7486AA (Grey Blue) */}
      <p className="text-lg md:text-xl text-[#7486AA] max-w-2xl mb-10 leading-relaxed tracking-tight">
        The only platform that unifies LinkedIn ads, website intent, and revenue data to show you exactly what's working.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
        <Button 
            size="lg" 
            className="h-12 px-8 rounded-full bg-[#3875F6] hover:bg-[#1A3F89] text-white text-base font-medium shadow-[0_8px_30px_-4px_rgba(56,117,246,0.4)] hover:shadow-[0_12px_40px_-4px_rgba(56,117,246,0.5)] transition-all duration-300 hover:-translate-y-1"
            onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
        >
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button 
            size="lg" 
            variant="outline"
            className="h-12 px-8 rounded-full border-[#DEE8FC] bg-white/80 backdrop-blur-sm hover:bg-white text-[#0F2043] text-base font-medium hover:border-[#3875F6]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
            <Play className="mr-2 h-4 w-4 fill-current text-[#FA8C16]" />
            Watch Demo
        </Button>
      </div>

      {/* Trust Indicators: Using #7486AA for text and #3875F6 for icons */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-[#7486AA] mb-16">
        {['No credit card required', '14-day free trial', 'SOC2 Compliant'].map((item) => (
            <div key={item} className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EBF3FF] text-[#3875F6] ring-1 ring-[#DEE8FC]">
                    <Check className="h-3 w-3" />
                </div>
                {item}
            </div>
        ))}
      </div>

      {/* Brand Logos Line */}
      <div className="w-full max-w-4xl mx-auto mb-4 relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="overflow-hidden">
          <div className="flex items-center animate-scroll-left" style={{ width: 'fit-content' }}>
            {scrollingLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                style={{ minWidth: `${logo.width}px`, height: '32px' }}
              >
                {logo.logoSrc ? (
                  <img
                    src={logo.logoSrc}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-[#0F2043] font-bold text-lg">{logo.name}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col overflow-hidden min-h-screen pb-32 bg-white pt-20">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Dynamic animated shadows - Updated to Brand Colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Primary Blue Orb #3875F6 */}
        <div
          className="absolute w-[60%] aspect-square rounded-full mix-blend-multiply opacity-15"
          style={{
            top: "-10%",
            left: "-10%",
            filter: "blur(80px)",
            background: "radial-gradient(circle at center, #3875F6, transparent 70%)",
            animation: "orb-1 20s ease-in-out infinite alternate",
          }}
        />
        {/* Secondary Orange Orb #FA8C16 */}
        <div
          className="absolute w-[50%] aspect-square rounded-full mix-blend-multiply opacity-15"
          style={{
            top: "10%",
            right: "-10%",
            filter: "blur(80px)",
            background: "radial-gradient(circle at center, #FA8C16, transparent 70%)",
            animation: "orb-2 25s ease-in-out infinite alternate",
          }}
        />
      </div>

      <ContainerScroll titleComponent={titleComponent}>
        {/* Premium Browser Window */}
        <div className="relative mx-auto max-w-[1400px] w-full mt-8 mb-40">
          {/* Browser Chrome */}
          <div className="relative bg-white rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_20px_50px_-10px_rgba(0,0,0,0.15)] overflow-hidden ring-1 ring-[#0F2043]/5">
            
            {/* Top Bar */}
            <div className="relative bg-white/80 backdrop-blur-xl border-b border-[#DEE8FC] px-4 h-14 flex items-center justify-between z-20">
              {/* Window Controls */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#DEE8FC]" />
                <div className="w-3 h-3 rounded-full bg-[#DEE8FC]" />
                <div className="w-3 h-3 rounded-full bg-[#DEE8FC]" />
              </div>

              {/* Address Bar */}
              <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-md">
                <div className="bg-[#F5F9FF]/50 hover:bg-[#EBF3FF]/50 transition-colors rounded-lg border border-[#DEE8FC]/50 px-3 py-1.5 flex items-center justify-center gap-2 text-xs text-[#7486AA] font-medium">
                  <Lock className="w-3 h-3 text-[#7486AA]" />
                  {activeTabData.url}
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F5F9FF] flex items-center justify-center text-xs font-bold text-[#1A3F89]">
                    DS
                </div>
              </div>
            </div>

            {/* Floating Tab Bar */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur-md border border-[#DEE8FC]/60 shadow-sm rounded-full p-1.5 flex items-center gap-1">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activeTab === tab.id 
                        ? "bg-[#0F2043] text-white shadow-md" 
                        : "text-[#7486AA] hover:text-[#0F2043] hover:bg-[#F5F9FF]"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="relative bg-[#F5F9FF]/50 min-h-[600px] md:min-h-[800px] w-full overflow-hidden group">
                {/* Loading State */}
                {isLoading && (
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-30 flex items-center justify-center">
                        <div className="w-10 h-10 border-4 border-[#EBF3FF] border-t-[#3875F6] rounded-full animate-spin" />
                    </div>
                )}

                {/* Image Container */}
                <div className="relative w-full h-full pt-16 px-4 pb-4">
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm border border-[#DEE8FC]/60 bg-white transition-transform duration-700 group-hover:scale-[1.01]">
                        <img
                            key={imageKey}
                            src={activeTabData.imageSrc}
                            alt={`${activeTabData.label} preview`}
                            className="w-full h-full object-cover object-top animate-in fade-in zoom-in-95 duration-500"
                            loading="eager"
                        />
                        
                        {/* Gradient Overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </ContainerScroll>

      <style>{`
        @keyframes orb-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10%, -5%) scale(1.1); }
          66% { transform: translate(-5%, 10%) scale(0.9); }
        }
        
        @keyframes orb-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-8%, 8%) scale(1.05); }
          66% { transform: translate(12%, -6%) scale(0.95); }
        }
      `}</style>
    </div>
  );
};

export default Hero;