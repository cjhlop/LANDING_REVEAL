import React from 'react';
import { plans, featureCategories, renderFeatureValue } from '@/data/pricingData.tsx';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PricingComparisonTable: React.FC = () => {
  return (
    <section className="pricing-section" aria-labelledby="pricing-heading">
      <div className="pricing-container">
        <h2 id="pricing-heading" className="sr-only">
          Pricing Plans Comparison
        </h2>

        {/* Top section with plan details */}
        <div className="pricing-plans-header">
          <div className="pricing-plans-spacer" />
          {plans.map((plan) => (
            <div key={plan.id} className={cn("pricing-plan-card", plan.popular && "popular")}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="pricing-plan-name">{plan.name}</h3>
              <div className="pricing-plan-price">
                {typeof plan.price === 'number' ? (
                  <>
                    <span className="pricing-plan-price-amount">${plan.price}</span>
                    <span className="pricing-plan-price-period">/mo</span>
                  </>
                ) : (
                  <span className="pricing-plan-price-custom">{plan.price}</span>
                )}
              </div>
              <p className="pricing-plan-description">{plan.description}</p>
              <Button className="pricing-plan-button">
                {plan.id === 'custom' ? 'Contact Sales' : 'Get started'}
              </Button>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="pricing-features-grid">
          {featureCategories.map((category) => (
            <div key={category.name} className="pricing-feature-category">
              <h4 className="pricing-category-title">{category.name}</h4>
              {category.features.map((feature) => (
                <div key={feature.name} className="pricing-feature-row">
                  <div className="pricing-feature-name-cell">
                    <p className="pricing-feature-name">{feature.name}</p>
                  </div>
                  {plans.map((plan) => (
                    <div key={plan.id} className="pricing-feature-value-cell">
                      {renderFeatureValue(feature.values[plan.id])}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Get Started Buttons */}
        <div className="pricing-bottom-buttons">
          <div className="pricing-plans-spacer" />
          {plans.map((plan) => (
            <div key={plan.id} className="pricing-bottom-button-cell">
               <Button className="pricing-plan-button">
                {plan.id === 'custom' ? 'Contact Sales' : 'Get started'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingComparisonTable;