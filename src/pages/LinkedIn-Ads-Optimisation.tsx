"use client";

import React from 'react';
import LogoTicker from '@/components/LogoTicker';

const LinkedInAdsOptimisation = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-12 max-w-[1216px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          LinkedIn Ads <span className="text-[#3875F6]">Optimisation</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Stop wasting budget on unqualified clicks. We help you target the right decision-makers and scale your LinkedIn campaigns profitably.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#3875F6] text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
            Get a Free Audit
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors">
            View Case Studies
          </button>
        </div>
      </section>

      {/* Social Proof Section */}
      <LogoTicker variant="dark" />

      {/* Rest of the page content */}
      <section className="py-20 px-6 md:px-12 max-w-[1216px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why LinkedIn Ads?</h2>
            <p className="text-gray-600 mb-4">
              LinkedIn is the world's largest professional network, making it the premier platform for B2B lead generation and brand building.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-1 rounded-full">
                  <div className="w-2 h-2 bg-[#3875F6] rounded-full"></div>
                </div>
                <span>Precise professional targeting by job title, industry, and company size.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-1 rounded-full">
                  <div className="w-2 h-2 bg-[#3875F6] rounded-full"></div>
                </div>
                <span>High-intent audience ready for business conversations.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-1 rounded-full">
                  <div className="w-2 h-2 bg-[#3875F6] rounded-full"></div>
                </div>
                <span>Advanced retargeting capabilities to nurture leads through the funnel.</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center">
            <span className="text-gray-400 font-medium">Platform Visual Placeholder</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkedInAdsOptimisation;