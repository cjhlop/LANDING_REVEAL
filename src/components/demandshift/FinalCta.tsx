import { Check, CheckCircle2 } from "lucide-react";
import { Eyebrow, PrimaryButton } from "./primitives";
import { useScrollReveal } from "./useScrollReveal";

const CHECKLIST = [
  "Reveal hidden LinkedIn Ads engagement",
  "Identify companies + website visitors",
  "Connect engagement to pipeline + revenue",
  "Ask AI across all your DemandSense data",
];

export default function FinalCta() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section style={{ background: "#f5f9ff", paddingTop: 128, paddingBottom: 128 }}>
      <div
        className="mx-auto"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24 }}
      >
        <div
          ref={revealRef}
          className="relative mx-auto"
          style={{ maxWidth: 900 }}
        >
          {/* Soft blue glow around the card */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: -40,
              background: "#3875f6",
              filter: "blur(90px)",
              opacity: 0.12,
              borderRadius: 40,
              zIndex: 0,
            }}
          />

          {/* Card */}
          <div
            data-reveal
            className="relative flex flex-col items-center text-center"
            style={{
              zIndex: 1,
              background: "#ffffff",
              border: "1px solid #cfe0ff",
              borderRadius: 24,
              padding: 64,
              overflow: "hidden",
            }}
          >
            {/* Faint grid background inside card */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(to right, rgba(56,117,246,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,117,246,0.06) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                pointerEvents: "none",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle, transparent 20%, #ffffff 95%)",
                pointerEvents: "none",
              }}
            />

            <div className="relative flex flex-col items-center" style={{ zIndex: 1, width: "100%" }}>
              <Eyebrow variant="orange">
                Limited DemandShift attendee offer
              </Eyebrow>

              <h2
                className="ds-h2 text-center"
                style={{ marginTop: 20, maxWidth: 760 }}
              >
                <span style={{ color: "#122752" }}>
                  Your LinkedIn Ads are doing much more than Campaign Manager can
                  show.
                </span>{" "}
                <span style={{ color: "#3875f6" }}>Now you can prove it</span>
              </h2>

              <div
                style={{
                  marginTop: 32,
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#122752",
                }}
              >
                Everything is included from day one:
              </div>

              {/* Checklist 2x2 */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 text-left"
                style={{ marginTop: 20, gap: "14px 40px", maxWidth: 620 }}
              >
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex items-start" style={{ gap: 10 }}>
                    <CheckCircle2
                      size={18}
                      strokeWidth={2}
                      color="#16a34a"
                      className="shrink-0"
                      style={{ marginTop: 2 }}
                    />
                    <span style={{ fontSize: 16, lineHeight: 1.5, color: "#122752" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ marginTop: 36 }}>
                <PrimaryButton className="ds-hero-cta">
                  GET MY FREE TRIAL NOW
                </PrimaryButton>
              </div>

              {/* Reassurance */}
              <div
                className="flex items-center"
                style={{ marginTop: 16, gap: 8, fontSize: 14, color: "#4b5675" }}
              >
                <Check size={16} strokeWidth={2.5} color="#16a34a" />
                <span>
                  No credit card required. 30-day{" "}
                  <strong style={{ color: "#122752" }}>UNLIMITED</strong> access
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}