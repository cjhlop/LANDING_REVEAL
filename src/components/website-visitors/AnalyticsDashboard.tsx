import React, { useState } from "react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from "recharts";
import { 
  Calendar, Filter, Share2, MoreVertical, ArrowUpRight, 
  Globe, MapPin, Briefcase, Users, Building, BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// --- Mock Data ---

const sessionData = [
  { date: "01 Jul", sessions: 480, previous: 400 },
  { date: "02 Jul", sessions: 380, previous: 420 },
  { date: "03 Jul", sessions: 450, previous: 380 },
  { date: "04 Jul", sessions: 410, previous: 390 },
  { date: "05 Jul", sessions: 320, previous: 220 },
  { date: "06 Jul", sessions: 350, previous: 230 },
  { date: "07 Jul", sessions: 490, previous: 450 },
];

const sourceData = [
  { name: "Google", value: 45, color: "#1e3a8a" }, // blue-900
  { name: "Direct", value: 25, color: "#3b82f6" }, // blue-500
  { name: "LinkedIn", value: 20, color: "#60a5fa" }, // blue-400
  { name: "Referral", value: 10, color: "#93c5fd" }, // blue-300
];

const pagesData = [
  { path: "/pricing", views: 975, unique: 912, time: "00:00:56", entrances: 181, bounce: "42%" },
  { path: "/blog/linkedin-ads", views: 843, unique: 756, time: "00:02:14", entrances: 523, bounce: "65%" },
  { path: "/product/web-id", views: 621, unique: 580, time: "00:01:32", entrances: 120, bounce: "38%" },
  { path: "/case-studies", views: 412, unique: 390, time: "00:01:45", entrances: 45, bounce: "25%" },
];

const usLocationData = [
  { name: "CA", value: 82 },
  { name: "NY", value: 65 },
  { name: "TX", value: 52 },
  { name: "FL", value: 38 },
  { name: "IL", value: 30 },
  { name: "WA", value: 25 },
];

const industryData = [
  { name: "Software", value: 45 },
  { name: "Finance", value: 30 },
  { name: "Healthcare", value: 25 },
  { name: "Education", value: 20 },
  { name: "Retail", value: 15 },
];

const seniorityData = [
  { name: "Manager", value: 80 },
  { name: "Senior", value: 60 },
  { name: "CxO", value: 30 },
  { name: "Director", value: 25 },
  { name: "VP", value: 15 },
];

const functionData = [
  { name: "Admin", value: 28 },
  { name: "Bus. Dev", value: 22 },
  { name: "Healthcare", value: 18 },
  { name: "Education", value: 16 },
  { name: "Info Tech", value: 15 },
  { name: "Marketing", value: 15 },
  { name: "Sales", value: 14 },
  { name: "Engineering", value: 10 },
];

// --- Components ---

const MetricCard = ({ title, value, icon: Icon }: { title: string, value: string, icon?: React.ElementType }) => (
  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <MoreVertical className="h-4 w-4 text-gray-400 cursor-pointer" />
    </div>
    <div className="flex items-end justify-between">
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      {Icon && <Icon className="h-5 w-5 text-blue-500 mb-1" />}
    </div>
  </div>
);

const AnalyticsDashboard = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Turn Traffic into <span className="text-blue-600">Intelligence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the actual dashboard you'll use to uncover who is visiting your site and what they're interested in.
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          
          {/* Top Bar */}
          <div className="border-b border-gray-200 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-gray-900 text-lg">Website Visitors</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>Jul 1, 2025 - Jul 8, 2025</span>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" /> Filters
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 bg-gray-50/50 min-h-[800px]">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="bg-white border border-gray-200 p-1 mb-6 h-auto rounded-lg">
                <TabsTrigger value="overview" className="px-6 py-2 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">Overview</TabsTrigger>
                <TabsTrigger value="demographics" className="px-6 py-2 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">Prospect Demographics</TabsTrigger>
              </TabsList>

              {/* OVERVIEW TAB */}
              <TabsContent value="overview" className="space-y-6 mt-0">
                {/* Metrics Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <MetricCard title="Sessions" value="2,828" />
                  <MetricCard title="US Sessions" value="1,297" icon={MapPin} />
                  <MetricCard title="Company Visitors" value="526" icon={Building} />
                  <MetricCard title="Individual Visitors" value="337" icon={Users} />
                  <MetricCard title="Avg Time On Page" value="01:07" />
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Line Chart */}
                  <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-gray-900">Sessions</h3>
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={sessionData}>
                          <defs>
                            <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                          <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="sessions" 
                            stroke="#2563eb" 
                            strokeWidth={2} 
                            fillOpacity={1} 
                            fill="url(#colorSessions)" 
                          />
                          <Area 
                            type="monotone" 
                            dataKey="previous" 
                            stroke="#94a3b8" 
                            strokeWidth={2} 
                            strokeDasharray="5 5" 
                            fill="none" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Donut Chart */}
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-gray-900">Sessions By Source</h3>
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="h-[200px] w-full relative">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={sourceData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {sourceData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      {/* Center Text */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">2.8k</div>
                          <div className="text-xs text-gray-500">Total</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      {sourceData.map((item) => (
                        <div key={item.name} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-gray-600">{item.name}</span>
                          </div>
                          <span className="font-medium text-gray-900">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Table Row */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-gray-900">Top Pages</h3>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">View All</Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50 text-gray-500 font-medium">
                        <tr>
                          <th className="px-6 py-3">Page Path</th>
                          <th className="px-6 py-3 text-right">Page Views</th>
                          <th className="px-6 py-3 text-right">Unique</th>
                          <th className="px-6 py-3 text-right">Avg Time</th>
                          <th className="px-6 py-3 text-right">Entrances</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {pagesData.map((page, i) => (
                          <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-blue-600 flex items-center gap-2">
                              {page.path}
                              <ArrowUpRight className="h-3 w-3 text-gray-400" />
                            </td>
                            <td className="px-6 py-4 text-right text-gray-900">{page.views}</td>
                            <td className="px-6 py-4 text-right text-gray-600">{page.unique}</td>
                            <td className="px-6 py-4 text-right text-gray-600">{page.time}</td>
                            <td className="px-6 py-4 text-right text-gray-600">{page.entrances}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              {/* DEMOGRAPHICS TAB */}
              <TabsContent value="demographics" className="space-y-6 mt-0">
                {/* Row 1: Map & Location */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* World Map Placeholder */}
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm min-h-[400px] flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-gray-900">World Map</h3>
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="flex-1 bg-blue-50/30 rounded-lg border border-blue-100 border-dashed flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                        <Globe className="h-64 w-64 text-blue-600" />
                      </div>
                      <div className="text-center relative z-10">
                        <p className="text-blue-900 font-medium mb-2">Interactive Map Visualization</p>
                        <p className="text-sm text-blue-700/60">Shows density of identified companies globally</p>
                      </div>
                    </div>
                  </div>

                  {/* US Location Bar Chart */}
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-gray-900">US Location</h3>
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="h-[320px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={usLocationData} margin={{ left: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                          <XAxis type="number" hide />
                          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} width={30} />
                          <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                          <Bar dataKey="value" fill="#1e40af" radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Row 2: Employees & Industries */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-gray-900">Industries</h3>
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="h-[250px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={industryData} margin={{ left: 40 }}>
                          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                          <XAxis type="number" hide />
                          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} width={80} />
                          <Tooltip cursor={{fill: '#f8fafc'}} />
                          <Bar dataKey="value" fill="#1e3a8a" radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-gray-900">Seniorities</h3>
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="h-[250px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={seniorityData} margin={{ left: 40 }}>
                          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                          <XAxis type="number" hide />
                          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} width={60} />
                          <Tooltip cursor={{fill: '#f8fafc'}} />
                          <Bar dataKey="value" fill="#0f172a" radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Row 3: Job Functions */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900">Job Functions</h3>
                    <MoreVertical className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart layout="vertical" data={functionData} margin={{ left: 60 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} width={100} />
                        <Tooltip cursor={{fill: '#f8fafc'}} />
                        <Bar dataKey="value" fill="#1d4ed8" radius={[0, 4, 4, 0]} barSize={16} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;