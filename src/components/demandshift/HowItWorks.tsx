import { Linkedin, Globe, GitMerge, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, Eyebrow, IconTile } from "./primitives";
import { useScrollReveal } from "./useScrollReveal";

type Tint = "blue" | "orange" | "green";

function Card({
  icon,
  tint,
  label,
  title,
  body,
  bullets,
}: {
  icon: LucideIcon;
  tint: Tint;
  label: string;
  title: string;
  body: string;
  bullets: string[];
}) {
  return (
    <div
      data-reveal
      className="relative flex h-full flex-col text-left"
      style={{
        background: "#ffffff",
        border: "1px solid #f1f5f9",
        borderRadius: 24,
        padding: 40,
        zIndex: 2,
      }}
    >
      <IconTile icon={icon} tint={tint} />
      <div
        className="uppercase"
        style={{
          marginTop: 16,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: "#3875f6",
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>
      <h3 className="ds-h3" style={{ marginTop: 10, color: "#122752" }}>
        {title}
      </h3>
      <p
        style={{
          marginTop: 12,
          fontSize: 16,
          lineHeight: 1.6,
          color: "#4b5675",
        }}
      >
        {body}
      </p>
      <div style={{ height: 1, background: "#f1f5f9", margin: "24px 0" }} />
      <ul className="flex flex-col" style={{ gap: 12 }}>
        {bullets.map((b) => (
          <li key={b} className="flex items-start" style={{ gap: 10 }}>
            <Check
              size={16}
              strokeWidth={2.5}
              color="#3875f6"
              className="shrink-0"
              style={{ marginTop: 3 }}
            />
            <span style={{ fontSize: 15, lineHeight: 1.5, color: "#4b5675" }}>
              {b}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HowItWorks() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section bg="tint" id="how-it-works">
      <div ref={revealRef} className="flex flex-col items-center">
        {/* Header */}
        <div data-reveal>
          <Eyebrow>How the system works</Eyebrow>
        </div>
        <h2
          data-reveal
          className="ds-h2 text-center"
          style={{ marginTop: 20, maxWidth: 900 }}
        >
          <span style={{ color: "#122752" }}>
            Your buyers leave signals long before
          </span>{" "}
          <span style={{ color: "#3875f6" }}>
            they ever become a conversion
          </span>
        </h2>
        <p
          data-reveal
          className="text-center"
          style={{
            marginTop: 20,
            maxWidth: 780,
            fontSize: 18,
            lineHeight: 1.6,
            color: "#4b5675",
          }}
        >
          The only LinkedIn-centric tool that combines LinkedIn Ads, CRM, and
          named website visitors in a single data layer, connected to your LLM.
        </p>

        {/* Cards + connecting line */}
        <div
          className="relative w-full"
          style={{ marginTop: 56, maxWidth: 1180 }}
        >
          {/* Connecting line (desktop only) */}
          <div
            className="ds-flow-line"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 40,
              left: "16.66%",
              right: "16.66%",
              height: 2,
              background: "#dbeafe",
              zIndex: 1,
            }}
          >
            <span className="ds-flow-dot" style={{ left: 0 }} />
            <span className="ds-flow-dot" style={{ left: "50%" }} />
            <span className="ds-flow-dot" style={{ left: "100%" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
            <Card
              icon={Linkedin}
              tint="blue"
              label="LinkedIn"
              title="See the accounts already warming up"
              body="Get deeper company activity across paid + organic LinkedIn."
              bullets={[
                "Find engaged accounts beyond your standard LinkedIn reports",
                "See paid + organic activity around the same company",
                "Spot interest before an account converts",
              ]}
            />
            <Card
              icon={Globe}
              tint="orange"
              label="Website ID"
              title="See who actually comes to your website"
              body="Connect that LinkedIn activity with the companies and people visiting your site."
              bullets={[
                "See when an engaged account visits",
                "Identify the actual people behind the visit",
                "Give sales someone they can actually follow up with",
              ]}
            />
            <Card
              icon={GitMerge}
              tint="green"
              label="CRM"
              title="Follow attention all the way into revenue"
              body="Connect HubSpot, Salesforce or Attio and see what happens next."
              bullets={[
                "See which accounts become opportunities",
                "Connect earlier engagement to pipeline and revenue",
                "Know which early signals actually led somewhere",
              ]}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
