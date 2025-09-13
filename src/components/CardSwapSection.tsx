import React from 'react';
import CardSwap, { Card } from './CardSwap';

const CardSwapSection = () => {
  return (
    <section className="bg-gray-50 relative overflow-hidden" style={{ height: '600px' }}>
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
      >
        <Card className="bg-white text-black p-8 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold mb-2">Uncover Buyer Intent</h3>
          <p className="text-gray-600">Identify anonymous website visitors and companies showing buying signals.</p>
        </Card>
        <Card className="bg-white text-black p-8 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold mb-2">Optimize Ad Spend</h3>
          <p className="text-gray-600">Automate LinkedIn ad scheduling and frequency capping to reduce wasted budget.</p>
        </Card>
        <Card className="bg-white text-black p-8 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold mb-2">Prove Marketing ROI</h3>
          <p className="text-gray-600">Connect marketing activities directly to influenced revenue and sales pipeline.</p>
        </Card>
      </CardSwap>
    </section>
  );
};

export default CardSwapSection;