import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Play, Search, Bell, Menu, BarChart2, Users, Globe, Zap, Settings, ChevronDown, MoreHorizontal } from 'lucide-react';
import { ContainerScroll } from './ui/container-scroll-animation';
import { Button } from './ui/button';
import { fallbackCustomerLogos } from '@/data/customerLogos';
import { cn } from '@/lib/utils';

// --- Dashboard Mockup Components ---

const SidebarItem = ({ icon: Icon, active = false }: { icon: any, active?: boolean }) => (
  <div className={cn(
    "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer group relative",
    active ? "bg-[#3875F6] text-white shadow-lg shadow-blue-900/20" : "text-slate-400 hover:bg-white/10 hover:text-white"
  )}>
    <Icon className="w-5 h-5" />
    {active && <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-4 bg-white/20 rounded-l-full" />}
  </div>
);

const StatCard = ({ title, value, trend, trendUp, delay }: any) => (
  <div 
    className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm animate-in fade-in zoom-in-95 duration-700 fill-mode-forwards opacity-0"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="text-xs font-medium text-slate-500 mb-1">{title}</div>
    <div className="flex items-end justify-between">
      <div className="text-2xl font-bold text-[#0F2043]">{value}</div>
      <div className={cn("text-xs font-medium px-1.5 py-0.5 rounded-md", trendUp ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600")}>
        {trend}
      </div>
    </div>
  </div>
);

const VisitorRow = ({ company, logo, time, score, delay }: any) => (
  <div 
    className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group animate-in slide-in-from-bottom-4 fade-in duration-700 fill-mode-forwards opacity-0"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center shadow-sm text-lg font-bold text-[#0F2043]">
        {logo}
      </div>
      <div>
        <div className="text-sm font-bold text-[#0F2043]">{company}</div>
        <div className="text-xs text-slate-500 flex items-center gap-1">
          <Globe className="w-3 h-3" /> Website Visit • {time}
        </div>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <div className="text-right">
        <div className="text-xs font-bold text-[#0F2043]">{score}</div>
        <div className="text-[10px] text-slate-400 uppercase tracking-wider">Intent</div>
      </div>
      <div className="w-1.5 h-8 bg-slate-100 rounded-full overflow-hidden">
        <div 
          className="w-full bg-gradient-to-t from-[#FA8C16] to-[#3875F6] rounded-full" 
          style={{ height: `${score}%` }} 
        />
      </div>
    </div>
  </div>
);

const DashboardMockup = () => {
  return (
    <div className="w-full h-full bg-[#F5F9FF] flex overflow-hidden rounded-xl">
      {/* Sidebar - Dark Navy Brand Color */}
      <div className="w-20 bg-[#0F2043] flex flex-col items-center py-6 gap-6 flex-shrink-0 z-20">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3875F6] to-[#1A3F89] flex items-center justify-center shadow-lg shadow-blue-900/50">
          <Zap className="w-6 h-6 text-white fill-white" />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <SidebarItem icon={BarChart2} active />
          <SidebarItem icon={Users} />
          <SidebarItem icon={Globe} />
          <SidebarItem icon={Bell} />
        </div>
        <div className="mt-auto">
          <SidebarItem icon={Settings} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#F5F9FF]">
        {/* Header */}
        <div className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-2 text-[#0F2043] font-bold text-lg">
            Dashboard
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search companies..." 
                className="h-9 pl-9 pr-4 rounded-full bg-slate-100 border-none text-sm focus:ring-2 focus:ring-[#3875F6] w-64 transition-all"
              />
            </div>
            <div className="w-9 h-9 rounded-full bg-[#DEE8FC] flex items-center justify-center text-[#1A3F89] font-bold border border-[#EBF3FF]">
              JD
            </div>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="p-6 overflow-hidden flex-1 flex flex-col gap-6">
          
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4">
            <StatCard title="Active Visitors" value="1,248" trend="+12%" trendUp delay={100} />
            <StatCard title="Identified Companies" value="843" trend="+24%" trendUp delay={200} />
            <StatCard title="High Intent Leads" value="156" trend="+8%" trendUp delay={300} />
            <StatCard title="Pipeline Value" value="$1.2M" trend="+15%" trendUp delay={400} />
          </div>

          <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
            {/* Main Chart Area */}
            <div className="col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-forwards opacity-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-[#0F2043]">Traffic Quality</h3>
                  <p className="text-xs text-slate-500">Identified vs Anonymous over time</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-[#3875F6]" /> Identified
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-slate-200" /> Anonymous
                  </div>
                </div>
              </div>
              
              {/* CSS Chart Visualization */}
              <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2">
                {[45, 60, 55, 70, 65, 80, 75, 90, 85, 95, 80, 70].map((h, i) => (
                  <div key={i} className="w-full bg-slate-100 rounded-t-sm relative group h-full">
                    <div 
                      className="absolute bottom-0 left-0 w-full bg-[#3875F6] rounded-t-sm transition-all duration-1000 ease-out"
                      style={{ height: `${h}%`, opacity: 0.1 + (i * 0.05) }}
                    />
                    <div 
                      className="absolute bottom-0 left-0 w-full bg-[#FA8C16] rounded-t-sm transition-all duration-1000 ease-out delay-300"
                      style={{ height: `${h * 0.4}%`, opacity: 0.8 }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Live Feed */}
            <div className="bg-white rounded-2xl border border-slate-100 p-0 shadow-sm flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-forwards opacity-0">
              <div className="p-4 border-b border-slate-50 flex items-center justify-between">
                <h3 className="font-bold text-[#0F2043] text-sm">Live Feed</h3>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div className="flex-1 overflow-hidden p-2 space-y-1">
                <VisitorRow company="Stripe" logo="S" time="2m ago" score={98} delay={800} />
                <VisitorRow company="Airbnb" logo="A" time="5m ago" score={92} delay={900} />
                <VisitorRow company="Figma" logo="F" time="12m ago" score={88} delay={1000} />
                <VisitorRow company="Vercel" logo="V" time="18m ago" score={85} delay={1100} />
                <VisitorRow company="Notion" logo="N" time="24m ago" score={76} delay={1200} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Main Hero Component ---

export const Hero: React.FC = () => {
  // Scrolling logos logic
  const scrollingLogos = React.useMemo(() => {
    const selectedLogos = fallbackCustomerLogos.slice(0, 8);
    return [...selectedLogos, ...selectedLogos];
  }, []);

  const titleComponent = (
    <div className="flex flex-col items-center text-center px-4 pt-20 md:pt-32 pb-12 relative z-10">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#DEE8FC] rounded-full p-1 pr-4 mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="bg-[#3875F6] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</div>
        <span className="text-sm font-medium text-[#1A3F89]">The Future of B2B Intelligence</span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-bold text-[#0F2043] mb-8 max-w-5xl leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
        Turn Anonymous Traffic <br />
        into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3875F6] to-[#FA8C16]">Revenue Pipeline.</span>
      </h1>

      {/* Subheadline */}
      <p className="text-xl text-[#7486AA] max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
        Identify companies. Reveal decision makers. Automate outreach. <br className="hidden md:block" />
        The all-in-one platform for modern go-to-market teams.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <Button 
          size="lg" 
          className="h-14 px-8 rounded-full bg-[#3875F6] hover:bg-[#1A3F89] text-white text-lg font-medium shadow-xl shadow-blue-500/20 transition-all hover:scale-105"
          onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
        >
          Start Free Trial
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="h-14 px-8 rounded-full border-slate-200 text-[#0F2043] hover:bg-slate-50 text-lg font-medium transition-all"
        >
          <Play className="w-4 h-4 mr-2 fill-current" /> Watch Demo
        </Button>
      </div>

      {/* Social Proof */}
      <div className="w-full max-w-4xl mx-auto animate-in fade-in duration-1000 delay-500">
        <p className="text-sm font-medium text-[#7486AA] mb-6 uppercase tracking-widest">Trusted by 1,000+ Growth Teams</p>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F5F9FF] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F9FF] to-transparent z-10" />
          
          <div className="flex items-center animate-scroll-left w-max">
            {scrollingLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-8 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                {logo.logoSrc ? (
                  <img
                    src={logo.logoSrc}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    className="h-8 w-auto object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-lg font-bold text-[#1A3F89]">{logo.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col overflow-hidden bg-[#F5F9FF]">
      {/* Dynamic Background - Brand Colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#3875F6]/10 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FA8C16]/10 rounded-full blur-[120px] animate-pulse-soft delay-1000" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40%] h-[40%] bg-white/60 rounded-full blur-[100px]" />
      </div>

      {/* 3D Scroll Container with Live Dashboard */}
      <ContainerScroll titleComponent={titleComponent}>
        <DashboardMockup />
      </ContainerScroll>
    </div>
  );
};

export default Hero;