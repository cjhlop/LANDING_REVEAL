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
  X,
} from 'lucide-react';

export const HeroSectionShowcase: React.FC = () => {
  return (
    <div className="w-full h-[714px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200" role="main">
      <div className="h-full flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-blue-900 text-white flex flex-col">
          {/* Logo */}
          <div className="p-6">
            <div className="text-xl font-bold">IMPACTABLE</div>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3 px-3 py-2 text-blue-200">
                <div className="w-5 h-5 bg-blue-200 rounded"></div>
                <span className="text-sm">Dashboard</span>
              </div>
              
              <div className="flex items-center gap-3 px-3 py-2 text-blue-200">
                <div className="w-5 h-5 bg-blue-200 rounded"></div>
                <span className="text-sm">Audiences</span>
                <div className="ml-auto w-4 h-4 bg-blue-200 rounded"></div>
              </div>
              
              <div className="flex items-center gap-3 px-3 py-2 text-blue-200">
                <div className="w-5 h-5 bg-blue-200 rounded"></div>
                <span className="text-sm">Lists</span>
              </div>
              
              <div className="flex items-center gap-3 px-3 py-2 text-blue-200">
                <div className="w-5 h-5 bg-blue-200 rounded"></div>
                <span className="text-sm">Campaign Management</span>
                <div className="ml-auto w-4 h-4 bg-blue-200 rounded"></div>
              </div>
              
              <div className="flex items-center gap-3 px-3 py-2 text-blue-200">
                <div className="w-5 h-5 bg-blue-200 rounded"></div>
                <span className="text-sm">LinkedIn Ads Tuning</span>
                <div className="ml-auto w-4 h-4 bg-blue-200 rounded"></div>
              </div>
              
              <div className="flex items-center gap-3 px-3 py-2 text-blue-200">
                <div className="w-5 h-5 bg-blue-200 rounded"></div>
                <span className="text-sm">Analytics</span>
                <div className="ml-auto w-4 h-4 bg-blue-200 rounded"></div>
              </div>
              
              {/* Sub-items */}
              <div className="ml-8 space-y-1">
                <div className="px-3 py-1 text-sm text-blue-300">Outreach Campaigns</div>
                <div className="px-3 py-1 text-sm text-blue-300">LinkedIn Ads Budget Rep...</div>
                <div className="px-3 py-1 text-sm text-blue-300">Hour-by-hour Reporting</div>
                <div className="px-3 py-1 text-sm text-blue-300">LinkedIn Ads</div>
                <div className="px-3 py-1 text-sm text-blue-300">Ads Hub (beta)</div>
                <div className="px-3 py-1 text-sm text-blue-300 bg-blue-800 rounded">Website Visitors</div>
              </div>
            </div>
          </nav>
          
          {/* Bottom items */}
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-3 px-3 py-2 text-blue-200">
              <div className="w-5 h-5 bg-blue-200 rounded"></div>
              <span className="text-sm">Report issue</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-blue-200">
              <div className="w-5 h-5 bg-blue-200 rounded"></div>
              <span className="text-sm">Settings</span>
              <div className="ml-auto w-4 h-4 bg-blue-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-blue-600">Audiences</span>
                <span>/</span>
                <span className="text-blue-600">Website visitors</span>
                <span>/</span>
                <span>Microsoft</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span className="text-sm font-medium">Robert Fox</span>
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Page Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
              <h1 className="text-xl font-semibold text-gray-900">Company profile</h1>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            <div className="grid grid-cols-12 gap-6 p-6">
              {/* Left Column */}
              <div className="col-span-8 space-y-6">
                {/* Contact Details Card */}
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Contact details</h2>
                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                      <Edit className="h-4 w-4" />
                      Edit
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start gap-6 mb-6">
                      {/* Microsoft Logo */}
                      <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-0.5">
                          <div className="w-3 h-3 bg-red-500"></div>
                          <div className="w-3 h-3 bg-green-500"></div>
                          <div className="w-3 h-3 bg-blue-500"></div>
                          <div className="w-3 h-3 bg-yellow-500"></div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Microsoft corp.</h3>
                        <div className="flex flex-wrap gap-2">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                            <span>Sales Lead</span>
                            <X className="h-3 w-3 cursor-pointer" />
                          </div>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                            <span>Competitive</span>
                            <X className="h-3 w-3 cursor-pointer" />
                          </div>
                          <div className="inline-flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-700">
                            <span>+</span>
                            <span>New Tag</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm text-gray-600 mb-2">Description</h4>
                      <p className="text-sm text-gray-900 leading-relaxed">
                        Microsoft is the largest vendor of computer software in the world. It is also a leading provider of cloud computing services, video games, computer and gaming hardware, search and other online services.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <span className="text-sm text-gray-600">Employee size</span>
                        <p className="text-sm font-medium text-gray-900">51-100</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Date founded</span>
                        <p className="text-sm font-medium text-gray-900">1975</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Industry</span>
                        <p className="text-sm font-medium text-gray-900">Technology</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Account type</span>
                        <p className="text-sm font-medium text-gray-900">Public</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Date added</span>
                        <p className="text-sm font-medium text-gray-900">2020-05-01, 6:05 AM</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Date last modified</span>
                        <p className="text-sm font-medium text-gray-900">2023-05-01, 3:05 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SEO Insights */}
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">SEO insights</h2>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-8">
                      {/* Donut Chart */}
                      <div className="relative w-24 h-24">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                          <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="100 251" />
                          <circle cx="50" cy="50" r="40" stroke="#f97316" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="120 251" strokeDashoffset="-100" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xs text-gray-600">Organic / Paid ratio</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 grid grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Organic traffic</span>
                          </div>
                          <div className="text-2xl font-semibold text-gray-900">~15K</div>
                          <div className="text-sm text-red-500">-22% ↓</div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Paid traffic</span>
                          </div>
                          <div className="text-2xl font-semibold text-gray-900">~22K</div>
                          <div className="text-sm text-green-500">+24% ↑</div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <span className="text-sm text-gray-600">Backlinks</span>
                          <p className="text-2xl font-semibold text-gray-900">15,452</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Referring domains</span>
                          <p className="text-2xl font-semibold text-gray-900">~15K</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activity Insights */}
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Activity insights</h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-4 gap-6 mb-6">
                      <div className="text-center">
                        <span className="text-sm text-gray-600">Number of visits</span>
                        <p className="text-3xl font-semibold text-gray-900 mt-1">5</p>
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-gray-600">Number of visited pages</span>
                        <p className="text-3xl font-semibold text-gray-900 mt-1">12</p>
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-gray-600">First visit</span>
                        <p className="text-xl font-semibold text-gray-900 mt-1">Dec 1, 2022</p>
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-gray-600">Last visit</span>
                        <p className="text-xl font-semibold text-gray-900 mt-1">Yesterday</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <span className="text-sm text-gray-600">General time on site</span>
                        <p className="text-xl font-semibold text-gray-900 mt-1">25 min</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">First page visited</span>
                        <p className="text-sm text-blue-600 mt-1">blog/are-linkedin-ads-expensive</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Last page visited</span>
                        <p className="text-sm text-blue-600 mt-1">/packages</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <span className="text-sm text-gray-600">First referrer</span>
                      <p className="text-sm text-blue-600 mt-1">www.neil.patel.com/top-ads-agencies</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="col-span-4">
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Contact details</h2>
                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                      <Edit className="h-4 w-4" />
                      Edit
                    </button>
                  </div>

                  <div className="p-4">
                    {/* Score Section */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative w-20 h-20">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                          <circle cx="50" cy="50" r="40" stroke="#22c55e" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="170 251" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-xl font-semibold text-gray-900">68</span>
                          <span className="text-xs text-gray-600">Score</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600 mb-2">Rate Account:</p>
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <ThumbsUp className="h-5 w-5 text-green-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <ThumbsDown className="h-5 w-5 text-gray-400" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-blue-600" />
                          <span className="text-sm text-gray-600">Email</span>
                        </div>
                        <span className="text-sm text-blue-600">contact@microsoft.com</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-blue-600" />
                          <span className="text-sm text-gray-600">Direct line</span>
                        </div>
                        <span className="text-sm text-gray-900">+1 (877) 532 - 2739</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-blue-600" />
                          <span className="text-sm text-gray-600">Office phone</span>
                        </div>
                        <span className="text-sm text-gray-900">+1 (877) 532 - 2739</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Globe className="h-5 w-5 text-blue-600" />
                          <span className="text-sm text-gray-600">Website</span>
                        </div>
                        <span className="text-sm text-blue-600">www.microsoft.com</span>
                      </div>
                      
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                          <span className="text-sm text-gray-600">Headquarters</span>
                        </div>
                        <span className="text-sm text-gray-900 text-right max-w-[180px]">One Microsoft Way, Redmond, WA 98052, USA</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200">
                      <Facebook className="h-5 w-5 text-blue-600 cursor-pointer" />
                      <Linkedin className="h-5 w-5 text-blue-600 cursor-pointer" />
                      <Twitter className="h-5 w-5 text-blue-600 cursor-pointer" />
                    </div>
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