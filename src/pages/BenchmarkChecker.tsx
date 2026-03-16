"use client";

import React, { Suspense, useState } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import BenchmarkInputScreen from "@/components/benchmark-checker/BenchmarkInputScreen";
import BenchmarkResultsScreen from "@/components/benchmark-checker/BenchmarkResultsScreen";

const BenchmarkChecker = () => {
  const [step, setStep] = useState<"input" | "analyzing" | "results">("input");
  const [userData, setUserData] = useState<any>(null);

  const handleCompare = (data: any) => {
    setUserData(data);
    setStep("analyzing");
    
    // Simulate analysis delay for perceived sophistication
    setTimeout(() => {
      setStep("results");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const handleReset = () => {
    setStep("input");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {step === "input" && (
          <BenchmarkInputScreen onCompare={handleCompare} />
        )}

        {step === "analyzing" && (
          <div className="py-40 flex flex-col items-center justify-center space-y-6">
            <Loader />
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold text-gray-900">Analyzing Performance Data</h2>
              <p className="text-sm text-gray-500">Comparing your metrics against {userData?.industry} benchmarks...</p>
            </div>
          </div>
        )}

        {step === "results" && userData && (
          <BenchmarkResultsScreen userData={userData} onReset={handleReset} />
        )}
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default BenchmarkChecker;