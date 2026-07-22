"use client";

import IntegrationsSection from "@/components/integrations/IntegrationsSection";
import SecuritySection from "@/components/security/SecuritySection";

// NOTE: This is a placeholder wrapper. If the home page already exists with more sections,
// please share it so I can insert SecuritySection in the correct position.
const Index = () => {
  return (
    <div>
      <IntegrationsSection />
      <SecuritySection />
    </div>
  );
};

export default Index;