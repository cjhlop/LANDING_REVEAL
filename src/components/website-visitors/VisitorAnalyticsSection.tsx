import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  BarChart3, Users, Clock, Building2, ArrowUpRight, 
  Briefcase, LayoutDashboard, ArrowRight, MapPin
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie, Legend
} from "recharts";
import SectionBadge from "@/components/SectionBadge";
import { Button } from "@/components/ui/button";

// --- Mock Data ---

const OVERVIEW_DATA = [
  { name: "Mon", sessions: 4000, identified: 2400 },
  { name: "Tue", sessions: 3000, identified: 1398 },
  { name: "Wed", sessions: 2000, identified: 9800 },
  { name: "Thu", sessions: 2780, identified: 3908 },
  { name: "Fri", sessions: 1890, identified: 4800 },
  { name: "Sat", sessions: 2390, identified: 3800 },
  { name: "Sun", sessions: 3490, identified: 4300 },
];

const INDUSTRY_DATA = [
  { name: "SaaS / Tech", value: 45, color: "#3b82f6" },
  { name: "Marketing", value: 25, color: "#8b5cf6" },
  { name: "Finance", value: 15, color: "#f97316" },
  { name: "Healthcare", value: 10, color: "#10b981" },
  { name: "Other", value: 5, color: "#94a3b8" },
];

const SENIORITY_DATA = [
  { name: "C-Level / VP", value: 35, color: "#3b82f6" },
  { name: "Director", value: 25, color: "#6366f1" },
  { name: "Manager", value: 30, color: "#a855f7" },
  { name: "Individual", value: 10, color: "#e2e8f0" },
];

const TRAFFIC_SOURCES = [
  { name: "Direct", value: 42 },
  { name: "Organic Search", value: 31 },
  { name: "LinkedIn Ads", value: 18 },
  { name: "Referral", value: 9 },
];

const TOP_PAGES = [
  { path: "/pricing", visits: "12.5k", time: "3m 45s" },
  { path: "/blog/linkedin-ads", visits: "8.2k", time: "5m 12s" },
  { path: "/product/web-id", visits: "6.1k", time: "2m 30s" },
  { path: "/case-studies", visits: "4.3k", time: "4m 05s" },
];

// --- Components ---

const MetricCard = ({ title, value, change, icon: Icon, delay }: any) => (
  <div 
    className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards opacity-0"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
        <ArrowUpRight className="h-3 w-3" />
        {change}
      </div>
    </div>
    <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{title}</div>
  </div>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-100 shadow-xl rounded-lg text-xs">
        <p className="font-bold text-gray-900 mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-gray-600">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span>{entry.name}: {entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const VisitorAnalyticsSection = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "demographics">("overview");

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-8">
            <SectionBadge icon={BarChart3} text="Full Visibility" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Analytics That Actually <br />
            <span className="text-blue-600">Tell a Story</span>
          </h2>
          <p className="text-xl text-gray-600">
            Go beyond vanity metrics. Understand exactly who is visiting, where they come from, and if they fit your Ideal Customer Profile.
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden ring-1 ring-gray-900/5">
          
          {/* Dashboard Header / Tabs */}
          <div className="border-b border-gray-100 bg-gray-50/50 p-2 flex items-center justify-between">
            <div className="flex items-center gap-2 px-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="h-4 w-px bg-gray-300 mx-2" />
              <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                <LayoutDashboard className="h-3 w-3" />
                Analytics / Website Visitors
              </span>
            </div>

            <div className="flex bg-gray-200/50 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("overview")}
                className={cn(
                  "px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                  activeTab === "overview" 
                    ? "bg-white text-gray-900 shadow-sm" 
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("demographics")}
                className={cn(
                  "px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                  activeTab === "demographics" 
                    ? "bg-white text-gray-900 shadow-sm" 
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                Prospect Demographics
              </button>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 md:p-8 min-h-[600px] bg-gray-50/30">
            
            {activeTab === "overview" ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Metrics Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <MetricCard title="Total Sessions" value="12,450" change="+12%" icon={Users} delay={0} />
                  <MetricCard title="Identified Companies" value="843" change="+24%" icon={Building2} delay={100} />
                  <MetricCard title="Identified Profiles" value="1,205" change="+18%" icon={Briefcase} delay={200} />
                  <MetricCard title="Avg. Time on Site" value="4m 12s" change="+5%" icon={Clock} delay={300} />
                </div>

                {/* Main Chart Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Traffic Chart */}
                  <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-bold text-gray-900">Traffic & Identification</h3>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span className="text-gray-500">Total Sessions</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-purple-500" />
                          <span className="text-gray-500">Identified</span>
                        </div>
                      </div>
                    </div>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={OVERVIEW_DATA}>
                          <defs>
                            <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorIdentified" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} dy={10} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                          <Tooltip content={<CustomTooltip />} />
                          <Area type="monotone" dataKey="sessions" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorSessions)" />
                          <Area type="monotone" dataKey="identified" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorIdentified)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Traffic Sources */}
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                    <h3 className="font-bold text-gray-900 mb-6">Traffic Sources</h3>
                    <div className="flex-1 flex flex-col justify-center space-y-6">
                      {TRAFFIC_SOURCES.map((source, i) => (
                        <div key={source.name}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600 font-medium">{source.name}</span>
                            <span className="text-gray-900 font-bold">{source.value}%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" 
                              style={{ width: `${source.value}%`, transitionDelay: `${i * 100}ms` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Pages */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Top Performing Pages</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-gray-500 uppercase bg-gray-50/50 border-b border-gray-100">
                        <tr>
                          <th className="px-4 py-3 font-medium">Page Path</th>
                          <th className="px-4 py-3 font-medium">Visits</th>
                          <th className="px-4 py-3 font-medium">Avg. Time</th>
                          <th className="px-4 py-3 font-medium text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {TOP_PAGES.map((page, i) => (
                          <tr key={page.path} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                            <td className="px-4 py-3 font-medium text-blue-600">{page.path}</td>
                            <td className="px-4 py-3 text-gray-600">{page.visits}</td>
                            <td className="px-4 py-3 text-gray-600">{page.time}</td>
                            <td className="px-4 py-3 text-right">
                              <button className="text-xs font-medium text-gray-400 hover:text-blue-600 flex items-center justify-end gap-1 ml-auto">
                                View Details <ArrowRight className="h-3 w-3" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Demographics Header */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Industry Breakdown */}
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="p-1.5 bg-blue-100 rounded-md text-blue-600"><Building2 className="h-4 w-4" /></div>
                      <h3 className="font-bold text-gray-900">Industry</h3>
                    </div>
                    <div className="h-[250px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={INDUSTRY_DATA} margin={{ left: 40 }}>
                          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                          <XAxis type="number" hide />
                          <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 11, fill: '#64748b'}} axisLine={false} tickLine={false} />
                          <Tooltip cursor={{fill: '#f8fafc'}} content={<CustomTooltip />} />
                          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                            {INDUSTRY_DATA.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Seniority Breakdown */}
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="p-1.5 bg-purple-100 rounded-md text-purple-600"><Briefcase className="h-4 w-4" /></div>
                      <h3 className="font-bold text-gray-900">Seniority Level</h3>
                    </div>
                    <div className="h-[250px] w-full relative">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={SENIORITY_DATA}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {SENIORITY_DATA.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip content={<CustomTooltip />} />
                          <Legend verticalAlign="bottom" height={36} iconType="circle" iconSize={8} wrapperStyle={{fontSize: '12px'}} />
                        </PieChart>
                      </ResponsiveContainer>
                      {/* Center Text */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center -mt-4">
                        <div className="text-2xl font-bold text-gray-900">35%</div>
                        <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Decision<br/>Makers</div>
                      </div>
                    </div>
                  </div>

                  {/* Location Map Placeholder */}
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="p-1.5 bg-orange-100 rounded-md text-orange-600"><MapPin className="h-4 w-4" /></div>
                      <h3 className="font-bold text-gray-900">Top Locations</h3>
                    </div>
                    <div className="flex-1 space-y-4">
                      {[
                        { country: "United States", percent: 62, flag: "🇺🇸" },
                        { country: "United Kingdom", percent: 15, flag: "🇬🇧" },
                        { country: "Canada", percent: 8, flag: "🇨🇦" },
                        { country: "Germany", percent: 5, flag: "🇩🇪" },
                        { country: "Australia", percent: 4, flag: "🇦🇺" },
                      ].map((loc) => (
                        <div key={loc.country} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{loc.flag}</span>
                            <span className="text-sm font-medium text-gray-700">{loc.country}</span>
                          </div>
                          <div className="flex items-center gap-3 w-1/2">
                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-orange-500 rounded-full" style={{ width: `${loc.percent}%` }} />
                            </div>
                            <span className="text-xs font-bold text-gray-900 w-8 text-right">{loc.percent}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* ICP Match Banner */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="h-6 w-6 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">ICP Match Score: 85/100</h3>
                      <p className="text-blue-100 text-sm">Your traffic is highly aligned with your target audience settings.</p>
                    </div>
                  </div>
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 border-0">
                    Adjust ICP Settings
                  </Button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default VisitorAnalyticsSection;