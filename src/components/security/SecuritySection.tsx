"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const SecuritySection: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section
      className={cn("w-full bg-[#C7DCE6]", className)}
      style={{ paddingBlock: "64px", paddingInline: "6%" }}
    >
      <div className="md:!py-24 grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 md:gap-20 items-start">
        {/* LEFT COLUMN */}
        <div className="text-left">
          <h2
            className="text-[40px] md:text-[64px] font-extrabold text-[#111827]"
            style={{ lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Your data.
            <br />
            Private and secure.
          </h2>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/AICPA_SOC_logo.png/480px-AICPA_SOC_logo.png"
            alt="AICPA SOC certification"
            className="mt-12 w-[140px] md:w-[200px] h-auto"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="text-left">
          <div className="flex flex-col gap-10">
            {/* Block 1 */}
            <div className="flex flex-col gap-2">
              <p className="text-[20px] md:text-[22px] font-bold text-[#111827]">
                SOC 2 Certified
              </p>
              <p className="text-[17px] md:text-[19px] font-normal text-[#111827] leading-[1.5]">
                DemandSense is SOC 2 Type II certified - we always handle your data securely and responsibly.
              </p>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col gap-2">
              <p className="text-[20px] md:text-[22px] font-bold text-[#111827]">
                GDPR compliant
              </p>
              <p className="text-[17px] md:text-[19px] font-normal text-[#111827] leading-[1.5]">
                Our Data is only persistent in European data centres unless the customer requests data to be replicated into a region of their choice.
              </p>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col gap-2">
              <p className="text-[20px] md:text-[22px] font-bold text-[#111827]">
                Google Cloud Based
              </p>
              <p className="text-[17px] md:text-[19px] font-normal text-[#111827] leading-[1.5]">
                DemandSense uses Google Cloud Platform as its data centres. For more information about how Google manages security read{" "}
                <a
                  href="https://cloud.google.com/security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#111827]"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>

          {/* CLOSING LINK */}
          <div className="mt-20">
            <a
              href="#"
              className="text-[22px] font-bold text-[#111827] underline"
            >
              DemandSense Security Portal →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SecuritySection);