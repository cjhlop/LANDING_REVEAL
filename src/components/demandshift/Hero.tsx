import {
  Database,
  UserSearch,
  Plug,
  Sparkles,
  Check,
  Users,
  Target,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Eyebrow, PrimaryButton, IconTile } from "./primitives";
import { LinkedInGlyph, CrmLogos, AiLogos } from "./BrandMarks";
import { useScrollReveal } from "./useScrollReveal";

/* ---------- Benefit card ---------- */
type Tint = "blue" | "orange" | "green";

function BenefitCard({
  icon,
  tint,
  label,
  children,
  extra,
}: {
  icon: LucideIcon;
  tint: Tint;
  label: ReactNode;
  children: ReactNode;
  extra?: ReactNode;
}) {
  return (
    <div
      data-reveal
      className="flex flex-col text-left"
      style={{
        background: "#f5f9ff",
        border: "1px solid #e5efff",
        borderRadius: 16,
        padding: 20,
      }}
    >
      <IconTile icon={icon} tint={tint} />
      <div
        className="uppercase"
        style={{
          marginTop: 14,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: "#3875f6",
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>
      <p
        style={{
          marginTop: 8,
          fontSize: 15,
          lineHeight: 1.5,
          color: "#4b5675",
        }}
      >
        {children}
      </p>
      {extra}
    </div>
  );
}

/* ---------- Floating stat card ---------- */
function StatCard({
  icon: Icon,
  tint,
  value,
  label,
  style,
  delay,
}: {
  icon: LucideIcon;
  tint: string;
  value: string;
  label: string;
  style: React.CSSProperties;
  delay: number;
}) {
  return (
    <div
      className="ds-float-card absolute"
      style={{
        ...style,
        animationDelay: `${delay}s`,
        background: "#ffffff",
        border: "1px solid #e5efff",
        borderRadius: 12,
        boxShadow: "0 2px 6px rgba(18,39,82,.14)",
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        zIndex: 5,
      }}
    >
      <span
        className="inline-flex items-center justify-center shrink-0"
        style={{ width: 38, height: 38, borderRadius: 10, background: tint }}
      >
        <Icon size={18} strokeWidth={2} color="#ffffff" />
      </span>
      <div className="text-left">
        <div style={{ fontSize: 18, fontWeight: 700, color: "#122752", lineHeight: 1.1 }}>
          {value}
        </div>
        <div
          className="uppercase"
          style={{ fontSize: 10, fontWeight: 600, color: "#6b7896", letterSpacing: "0.04em", marginTop: 2 }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      style={{
        position: "relative",
        background: "#ffffff",
        paddingTop: 200, // 128px + 72px header offset
        paddingBottom: 96,
        overflow: "hidden",
      }}
    >
      {/* Background grid + fade */}
      <div className="ds-hero-grid" />
      <div className="ds-hero-fade" />

      {/* Soft blurred blobs */}
      <div
        className="ds-hero-blob"
        style={{ width: 420, height: 420, background: "#3875f6", top: 120, left: "20%" }}
      />
      <div
        className="ds-hero-blob"
        style={{ width: 380, height: 380, background: "#f97316", top: 180, right: "18%" }}
      />

      {/* Floating stat cards (desktop only) */}
      <div className="ds-stat-cards">
        <div
          className="mx-auto"
          style={{ position: "relative", maxWidth: 1280, height: 0 }}
        >
          <StatCard
            icon={Users}
            tint="#3875f6"
            value="12,450"
            label="Visitors identified"
            delay={0}
            style={{ top: 40, left: 24 }}
          />
          <StatCard
            icon={Target}
            tint="#8b5cf6"
            value="94%"
            label="Match rate"
            delay={1.5}
            style={{ top: 40, right: 24 }}
          />
          <StatCard
            icon={DollarSign}
            tint="#f97316"
            value="$4,200"
            label="Monthly saved"
            delay={3}
            style={{ top: 360, left: 24 }}
          />
          <StatCard
            icon={TrendingUp}
            tint="#16a34a"
            value="5.8x"
            label="ROAS proven"
            delay={4.5}
            style={{ top: 360, right: 24 }}
          />
        </div>
      </div>

      <div
        ref={revealRef}
        className="relative mx-auto flex flex-col items-center"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24, zIndex: 2 }}
      >
        {/* Eyebrow */}
        <div data-reveal>
          <Eyebrow variant="orange">
            Limited offer for DemandShift event attendees
          </Eyebrow>
        </div>

        {/* Headline */}
        <h1
          data-reveal
          className="ds-h1 text-center"
          style={{ marginTop: 24, maxWidth: 900 }}
        >
          <span style={{ color: "#122752" }}>
            Finally connect every LinkedIn Ad signal to
          </span>{" "}
          <span style={{ color: "#3875f6" }}>
            the company, person and revenue behind it
          </span>
        </h1>

        {/* Subhead */}
        <p
          data-reveal
          className="text-center"
          style={{
            marginTop: 20,
            maxWidth: 720,
            fontSize: 18,
            lineHeight: 1.6,
            color: "#4b5675",
          }}
        >
          LinkedIn Ads generate far more buying signals than Campaign Manager
          lets you see. DemandSense pulls in deeper LinkedIn engagement so you
          can uncover the accounts already showing interest, including:
        </p>

        {/* Benefit grid */}
        <div
          data-reveal
          className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
          style={{ marginTop: 40, gap: 20, maxWidth: 1120 }}
        >
          <BenefitCard
            icon={Database}
            tint="blue"
            label={
              <>
                Deeper access to <LinkedInGlyph /> LinkedIn's API data
              </>
            }
          >
            Get every paid + organic company engagement buyer signals Campaign
            Manager doesn't show.
          </BenefitCard>

          <BenefitCard
            icon={UserSearch}
            tint="orange"
            label="Website visitors identification"
          >
            See which companies visit your website and the actual people behind
            those visits.
          </BenefitCard>

          <BenefitCard
            icon={Plug}
            tint="green"
            label="Native CRM integrations"
            extra={<CrmLogos />}
          >
            Connect HubSpot, Salesforce or Attio and match LinkedIn engagement
            with pipeline and revenue.
          </BenefitCard>

          <BenefitCard
            icon={Sparkles}
            tint="blue"
            label="Exclusive MCP early access"
            extra={<AiLogos />}
          >
            Ask Claude or ChatGPT what's happening across your data instead of
            digging through it.
          </BenefitCard>
        </div>

        {/* CTA block */}
        <div
          data-reveal
          className="flex flex-col items-center"
          style={{ marginTop: 40 }}
        >
          <PrimaryButton
            className="ds-hero-cta"
            children="GET MY FREE TRIAL NOW"
          />
          <div
            className="flex items-center gap-2"
            style={{ marginTop: 14, fontSize: 14, color: "#4b5675" }}
          >
            <Check size={16} strokeWidth={2.5} color="#16a34a" />
            <span>
              No credit card required. 30-day{" "}
              <strong style={{ color: "#122752" }}>UNLIMITED</strong> access
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
