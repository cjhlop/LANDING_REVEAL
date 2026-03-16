"use client";

import React, { Suspense, useState } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import BenchmarkInputScreen from "@/components/benchmark-checker/BenchmarkInputScreen";

const BenchmarkChecker = () => {
  const [step, setStep] = useState<"input" | "results">("input");
  const [userData, setUserData] = useState<any>(null);

  const handleCompare = (data: any) => {
    setUserData(data);
    setStep("results");
    // Scroll to top when transitioning
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {step === "input" ? (
          <BenchmarkInputScreen onCompare={handleCompare} />
        ) : (
          <div className="py-32 text-center">
            <Loader />
            <p className="mt-4 text-gray-500">Calculating benchmarks for {userData?.industry}...</p>
            {/* Screen 2 will be implemented here */}
          </div>
        )}
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default BenchmarkChecker;