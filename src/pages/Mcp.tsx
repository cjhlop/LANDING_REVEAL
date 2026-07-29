import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import McpHeader from "@/components/mcp/McpHeader";
import McpHero from "@/components/mcp/McpHero";
import McpRealAnswers from "@/components/mcp/McpRealAnswers";
import McpWhatElse from "@/components/mcp/McpWhatElse";
import McpWhoFor from "@/components/mcp/McpWhoFor";
import McpComparison from "@/components/mcp/McpComparison";
import McpJoin from "@/components/mcp/McpJoin";
import McpTrust from "@/components/mcp/McpTrust";
import McpFinalCta from "@/components/mcp/McpFinalCta";
import McpFaq from "@/components/mcp/McpFaq";
import McpLightbox from "@/components/mcp/McpLightbox";
import McpMobileBar from "@/components/mcp/McpMobileBar";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DemandSense MCP",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://demandsense.com",
  publisher: {
    "@type": "Organization",
    name: "DemandSense",
    url: "https://demandsense.com",
  },
  description:
    "DemandSense MCP joins LinkedIn ad exposure, person- and company-level website visitor identity, and CRM state into one dataset queryable from Claude, ChatGPT, and other MCP clients.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free during early access, included with a DemandSense install (free 30-day trial, no card required).",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is DemandSense MCP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DemandSense MCP joins LinkedIn ad exposure, person- and company-level visitor identity, and CRM state into one dataset you query from Claude, ChatGPT, or any MCP client. One record in, one answer out.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Out of the box you get identified website visitors matched to LinkedIn ad exposure, by name and company. Connecting a CRM adds the pipeline view: ICP-fit companies that saw your ads, visited your site, and are not in your CRM yet.",
      },
    },
    {
      "@type": "Question",
      name: "How is DemandSense different from IP-based visitor identification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DemandSense resolves website visitors at the person and company level, not only by reverse-IP company lookup, and matches that identity to impression-level LinkedIn ad engagement.",
      },
    },
    {
      "@type": "Question",
      name: "Does DemandSense MCP work with ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. DemandSense MCP works with Claude, ChatGPT, and other MCP-compatible AI assistants.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'LinkedIn Buyer Intelligence' mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn Buyer Intelligence is the practice of joining LinkedIn ad exposure data with website visitor identity and CRM records to see which buyers your ads actually reach. DemandSense MCP is a LinkedIn Buyer Intelligence tool.",
      },
    },
  ],
};

const Mcp = () => {
  const [lightbox, setLightbox] = React.useState<{ open: boolean; alt: string }>({
    open: false,
    alt: "",
  });

  const openLightbox = React.useCallback((alt: string) => {
    setLightbox({ open: true, alt });
  }, []);

  const closeLightbox = React.useCallback(() => {
    setLightbox((prev) => ({ ...prev, open: false }));
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Helmet>
        <title>
          DemandSense MCP: LinkedIn Buyer Intelligence for Claude and ChatGPT
        </title>
        <meta
          name="description"
          content="DemandSense MCP joins LinkedIn ad exposure, person- and company-level website visitor identity, and CRM state into one dataset queryable from Claude, ChatGPT, and other MCP clients."
        />
        <link rel="canonical" href="https://demandsense.com/mcp" />
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <McpHeader />
      <main id="main">
        <McpHero />
        <McpRealAnswers onOpenLightbox={openLightbox} />
        <McpWhatElse />
        <McpWhoFor />
        <McpComparison />
        <McpJoin />
        <McpTrust onOpenLightbox={openLightbox} />
        <McpFinalCta />
        <McpFaq />
      </main>

      <McpMobileBar />
      <McpLightbox
        open={lightbox.open}
        alt={lightbox.alt}
        onClose={closeLightbox}
      />

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Mcp;