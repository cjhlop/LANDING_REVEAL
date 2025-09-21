"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import CardSwapSection from "@/components/CardSwapSection";

export function Features() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="mb-4">
            LinkedIn Ads Optimization
          </Badge>
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Stop wasting ad budget with{" "}
            <span
              className="bg-gradient-to-r from-[#3875F6] to-[#A3C7FF] bg-clip-text text-transparent"
            >
              precision timing
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            LinkedIn advertisers waste 40-60% of their budget on poorly timed ads. 
            DemandSense automatically schedules your campaigns when your audience is most engaged.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
      
      <CardSwapSection />
    </section>
  );
}