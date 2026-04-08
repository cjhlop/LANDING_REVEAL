import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomeNew from "./pages/HomeNew";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BenchmarkReport from "./pages/BenchmarkReport";
import WebsiteVisitors from "./pages/WebsiteVisitors";
import LinkedInAttribution from "./pages/LinkedInAttribution";
import LinkedInAdsOptimizationPage from "./pages/LinkedInAdsOptimizationPage";
import WasteDetector from "./pages/WasteDetector";
import AttributionGapDetector from "./pages/AttributionGapDetector";
import BenchmarkChecker from "./pages/BenchmarkChecker";
import RevenueAttribution from "./pages/RevenueAttribution";
import LinkedInReportingOffer from "./pages/LinkedInReportingOffer";
import CompetitorAnalyzer from "./pages/CompetitorAnalyzer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home-new" element={<HomeNew />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/benchmark" element={<BenchmarkReport />} />
          <Route path="/website-visitors" element={<WebsiteVisitors />} />
          <Route path="/best-linkedin-attribution-tools" element={<LinkedInAttribution />} />
          <Route path="/linkedin-ads-optimization" element={<LinkedInAdsOptimizationPage />} />
          <Route path="/linkedin-ads-waste-detector" element={<WasteDetector />} />
          <Route path="/attribution-gap-detector" element={<AttributionGapDetector />} />
          <Route path="/linkedin-benchmark-checker" element={<BenchmarkChecker />} />
          <Route path="/revenue-attribution" element={<RevenueAttribution />} />
          <Route path="/linkedin-reporting-offer" element={<LinkedInReportingOffer />} />
          <Route path="/competitor-analyzer" element={<CompetitorAnalyzer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;