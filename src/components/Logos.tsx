import React from 'react';

const VertexLogo = () => (
  <div className="flex items-center justify-center gap-3 text-gray-500 hover:text-gray-900 transition-colors" role="img" aria-label="Vertex logo">
    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L23.2583 19.5H0.74167L12 0Z" fill="currentColor"/>
    </svg>
    <span className="font-sans text-2xl font-bold tracking-tight">Vertex</span>
  </div>
);

const AmazonLogo = () => (
    <div className="flex items-center justify-center gap-2 text-gray-500 hover:text-gray-900 transition-colors" role="img" aria-label="Amazon.com logo">
        <span className="font-sans text-3xl font-bold">amazon</span>
    </div>
);

const WebflowLogo = () => (
    <div className="flex items-center justify-center gap-2 text-gray-500 hover:text-gray-900 transition-colors" role="img" aria-label="Webflow logo">
        <span className="font-sans text-3xl font-bold">Webflow</span>
    </div>
);

const MartinoLogo = () => (
  <div className="flex items-center justify-center gap-3 text-gray-500 hover:text-gray-900 transition-colors" role="img" aria-label="Martino logo">
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1.07324L14.835 8.91699H23.021L16.093 13.7598L18.928 21.6035L12 16.7607L5.07202 21.6035L7.90702 13.7598L0.979021 8.91699H9.16502L12 1.07324Z" fill="currentColor"/>
    </svg>
    <span className="font-sans text-2xl font-bold tracking-tight">martino</span>
  </div>
);

export const Logos = () => {
  return (
    <section aria-label="Brands that trust us" className="bg-white py-20">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12">
          <h2 className="text-xl font-semibold text-[#12141D]/70 text-center lg:text-left whitespace-nowrap">
            1000+ Big brands trust us
          </h2>
          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-10 items-center">
            <VertexLogo />
            <AmazonLogo />
            <WebflowLogo />
            <MartinoLogo />
          </div>
        </div>
      </div>
    </section>
  );
};