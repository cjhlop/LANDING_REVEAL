import { useEffect } from "react";
import {
  Target,
  Radar,
  DollarSign,
  Check,
  Zap,
  Link2,
  ShieldCheck,
  LineChart,
  Clock,
  Users,
  Eye,
  Filter,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import dsLogo from "@/assets/ds-logo.svg";
import { useScrollReveal } from "@/components/demandshift/useScrollReveal";
import {
  Eyebrow,
  PrimaryButton,
  Section,
  IconTile,
  TwoTone,
} from "@/components/demandshift/primitives";
import {
  DashboardMockup,
  VisitorsMockup,
  WasteMockup,
} from "@/components/demandshift/Mockups";

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        height: 72,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      <div
        className="mx-auto flex h-full items-center"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24 }}
      >
        <img src={dsLogo} alt="DemandSense" style={{ height: 22 }} />
      </div>
    </header>
  );
}

/* ---------------- Floating stat card ---------------- */
function StatCard({
  icon: Icon,
  tint,
  value,
  label,
  style,
}: {
  icon: LucideIcon;
  tint: "blue" | "orange" | "green";
  value: string;
  label: string;
  style?: React.CSSProperties;
}) {
  const bg = { blue: "#eff6ff", orange: "#fff3e8", green: "#eaf7ee" }[tint];
  const fg = { blue: "#3875f6", orange: "#f97316", green: "#16a34a" }[tint];
  return (
    <div
      className="absolute hidden md:flex items-center gap-3"
      style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 8px 30px rgba(15,23,42,0.08)",
        padding: "16px 20px",
        ...style,
      }}
    >
      <span
        className="inline-flex items-center justify-center shrink-0"
        style={{ width: 40, height: 40, borderRadius: 10, background: bg }}
      >
        <Icon size={20} strokeWidth={2} color={fg} />
      </span>
      <div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#0a0a0a", lineHeight: 1 }}>
          {value}
        </div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#50617a",
            marginTop: 4,
            letterSpacing: "0.04em",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden" style={{ background: "#ffffff" }}>
      {/* faint blue grid lines */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#eff6ff 1px, transparent 1px), linear-gradient(90deg, #eff6ff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(80% 70% at 50% 30%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(80% 70% at 50% 30%, #000 40%, transparent 100%)",
        }}
      />
      <div
        className="relative mx-auto"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24, paddingTop: 96, paddingBottom: 128 }}
      >
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* copy */}
          <div className="text-center lg:text-left">
            <div data-reveal className="flex justify-center lg:justify-start">
              <Eyebrow>The DemandShift Offer</Eyebrow>
            </div>
            <h1 data-reveal className="ds-h1 mt-6">
              <TwoTone
                lead="Stop guessing which ads drive pipeline. "
                accent="See the revenue"
                tail="."
              />
            </h1>
            <p
              data-reveal
              className="mt-6 mx-auto lg:mx-0"
              style={{ fontSize: 16, lineHeight: 1.5, color: "#50617a", maxWidth: 520 }}
            >
              DemandSense connects your ad spend to real revenue. Identify the
              companies on your site, kill the campaigns that waste budget, and
              prove exactly which ads close deals.
            </p>
            <div
              data-reveal
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <PrimaryButton />
              <span style={{ fontSize: 14, color: "#50617a" }}>
                No card required. 30-day free trial.
              </span>
            </div>
          </div>

          {/* mockup + floating cards */}
          <div data-reveal className="relative">
            <DashboardMockup />
            <StatCard
              icon={DollarSign}
              tint="green"
              value="+38.6%"
              label="Pipeline lift"
              style={{ top: -28, right: -8 }}
            />
            <StatCard
              icon={Radar}
              tint="blue"
              value="1,204"
              label="Accounts identified"
              style={{ bottom: -32, left: -24 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust strip ---------------- */
function TrustStrip() {
  const ref = useScrollReveal<HTMLDivElement>();
  const logos = ["Northwind", "Contoso", "Fabrikam", "Tailspin", "Adventure", "Proseware"];
  return (
    <Section bg="tint" tight>
      <div ref={ref} className="text-center">
        <p
          data-reveal
          style={{
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#50617a",
          }}
        >
          Trusted by revenue teams at fast-growing B2B companies
        </p>
        <div
          data-reveal
          className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {logos.map((l) => (
            <span
              key={l}
              style={{ fontSize: 22, fontWeight: 700, color: "#94a3b8", letterSpacing: "-0.02em" }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Problem (dark band) ---------------- */
function Problem() {
  const ref = useScrollReveal<HTMLDivElement>();
  const points = [
    "Half your ad budget drives pipeline. You cannot tell which half.",
    "Anonymous traffic leaves and you never learn who was in market.",
    "Attribution reports credit the last click, not the campaign that started the deal.",
  ];
  return (
    <Section bg="dark">
      <div ref={ref} className="max-w-[820px] mx-auto text-center">
        <div data-reveal className="flex justify-center">
          <Eyebrow>The problem</Eyebrow>
        </div>
        <h2 data-reveal className="ds-h2 ds-h2--xl mt-6" style={{ color: "#ffffff" }}>
          <span style={{ color: "#ffffff" }}>You are flying blind on </span>
          <span style={{ color: "#3875f6" }}>the spend that matters most</span>
          <span style={{ color: "#ffffff" }}>.</span>
        </h2>
        <div data-reveal className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {points.map((p) => (
            <div
              key={p}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <p style={{ fontSize: 16, lineHeight: 1.5, color: "#cbd5e1" }}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Feature split row ---------------- */
function FeatureRow({
  eyebrow,
  accentLead,
  accent,
  accentTail,
  body,
  bullets,
  bg,
  reverse,
  mockup,
}: {
  eyebrow: string;
  accentLead: string;
  accent: string;
  accentTail: string;
  body: string;
  bullets: string[];
  bg: "white" | "tint";
  reverse?: boolean;
  mockup: React.ReactNode;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <Section bg={bg}>
      <div
        ref={ref}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <div data-reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h2 data-reveal className="ds-h2 mt-6">
            <TwoTone lead={accentLead} accent={accent} tail={accentTail} />
          </h2>
          <p data-reveal className="mt-5" style={{ fontSize: 16, lineHeight: 1.5, color: "#50617a" }}>
            {body}
          </p>
          <ul data-reveal className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span
                  className="inline-flex items-center justify-center shrink-0"
                  style={{ width: 22, height: 22, borderRadius: 999, background: "#eaf7ee", marginTop: 1 }}
                >
                  <Check size={14} strokeWidth={3} color="#16a34a" />
                </span>
                <span style={{ fontSize: 16, lineHeight: 1.5, color: "#50617a" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal className="mt-4 lg:mt-0">
          {mockup}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Benefits grid ---------------- */
function Benefits() {
  const ref = useScrollReveal<HTMLDivElement>();
  const cards: {
    icon: LucideIcon;
    tint: "blue" | "orange" | "green";
    title: string;
    body: string;
  }[] = [
    { icon: Zap, tint: "blue", title: "Live in minutes", body: "Drop in one snippet and start identifying accounts the same day. No data team required." },
    { icon: Link2, tint: "orange", title: "Two-way CRM sync", body: "Push high-intent accounts into your CRM and pull deal outcomes back to prove ROI." },
    { icon: ShieldCheck, tint: "green", title: "Privacy first", body: "GDPR and CCPA compliant identity resolution built for regulated B2B teams." },
    { icon: LineChart, tint: "blue", title: "Revenue attribution", body: "Tie every campaign to closed-won pipeline, not vanity clicks and impressions." },
    { icon: Clock, tint: "orange", title: "Real-time signals", body: "Know the moment a target account visits so sales can reach out while intent is hot." },
    { icon: Users, tint: "green", title: "Account-level view", body: "See the companies behind anonymous traffic, not just cookies and sessions." },
  ];
  return (
    <Section bg="white">
      <div ref={ref}>
        <div className="text-center max-w-[720px] mx-auto">
          <div data-reveal className="flex justify-center">
            <Eyebrow>Why teams switch</Eyebrow>
          </div>
          <h2 data-reveal className="ds-h2 mt-6">
            <TwoTone lead="Everything you need to " accent="prove ad ROI" tail="." />
          </h2>
          <p data-reveal className="mt-5" style={{ fontSize: 16, lineHeight: 1.5, color: "#50617a" }}>
            One platform to identify buyers, cut wasted spend, and connect every
            dollar to revenue.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              data-reveal
              style={{
                background: "#fff",
                border: "1px solid #f1f5f9",
                borderRadius: 24,
                padding: 40,
              }}
            >
              <IconTile icon={c.icon} tint={c.tint} />
              <h3 className="mt-5" style={{ fontSize: 18, fontWeight: 700, color: "#0a0a0a" }}>
                {c.title}
              </h3>
              <p className="mt-3" style={{ fontSize: 16, lineHeight: 1.5, color: "#50617a" }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Stats band ---------------- */
function Stats() {
  const ref = useScrollReveal<HTMLDivElement>();
  const stats = [
    { icon: Eye, tint: "blue" as const, value: "68%", label: "of anonymous traffic identified" },
    { icon: DollarSign, tint: "orange" as const, value: "$61K", label: "average wasted spend recovered" },
    { icon: Target, tint: "green" as const, value: "3.4x", label: "pipeline from the same budget" },
    { icon: Filter, tint: "blue" as const, value: "12 min", label: "average time to first insight" },
  ];
  return (
    <Section bg="tint" tight>
      <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            data-reveal
            style={{
              background: "#f5f9ff",
              border: "1px solid #cfe0ff",
              borderRadius: 12,
              padding: 32,
            }}
          >
            <IconTile icon={s.icon} tint={s.tint} />
            <div className="mt-4" style={{ fontSize: 40, fontWeight: 700, color: "#0a0a0a", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
              {s.value}
            </div>
            <div className="mt-2" style={{ fontSize: 14, lineHeight: 1.4, color: "#50617a" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Testimonial ---------------- */
function Testimonial() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <Section bg="white">
      <div ref={ref} className="max-w-[860px] mx-auto text-center">
        <div data-reveal className="flex justify-center">
          <Eyebrow>What customers say</Eyebrow>
        </div>
        <p
          data-reveal
          className="mt-8"
          style={{ fontSize: 28, lineHeight: 1.35, fontWeight: 700, color: "#0a0a0a", letterSpacing: "-0.02em" }}
        >
          <span style={{ color: "#0a0a0a" }}>Within a month we cut </span>
          <span style={{ color: "#3875f6" }}>a third of our ad budget</span>
          <span style={{ color: "#0a0a0a" }}>
            {" "}and pipeline went up. DemandSense showed us exactly which
            campaigns were dead weight.
          </span>
        </p>
        <div data-reveal className="mt-8 flex items-center justify-center gap-3">
          <span
            className="inline-flex items-center justify-center"
            style={{ width: 40, height: 40, borderRadius: 999, background: "#eff6ff", color: "#3875f6", fontSize: 15, fontWeight: 700 }}
          >
            JM
          </span>
          <div className="text-left">
            <div style={{ fontSize: 14, fontWeight: 700, color: "#0a0a0a" }}>Jordan Meyer</div>
            <div style={{ fontSize: 13, color: "#50617a" }}>VP Marketing, Northwind Traders</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCta() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <Section bg="tint">
      <div ref={ref} className="max-w-[760px] mx-auto text-center">
        <div data-reveal className="flex justify-center">
          <Eyebrow>Claim your trial</Eyebrow>
        </div>
        <h2 data-reveal className="ds-h2 ds-h2--xl mt-6">
          <TwoTone lead="See your real ad ROI in " accent="under 15 minutes" tail="." />
        </h2>
        <p data-reveal className="mt-5" style={{ fontSize: 16, lineHeight: 1.5, color: "#50617a" }}>
          Start your 30-day free trial today. No credit card, no sales call, no
          risk. Just the truth about which ads drive revenue.
        </p>
        <div data-reveal className="mt-8 flex justify-center">
          <PrimaryButton />
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer style={{ background: "#0f0f13", padding: "48px 24px" }}>
      <div className="flex flex-col items-center gap-4 text-center">
        <img src={dsLogo} alt="DemandSense" style={{ height: 20, filter: "brightness(0) invert(1)" }} />
        <p style={{ fontSize: 13, color: "#64748b" }}>© DemandSense 2026</p>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */
const DemandShiftOffer = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "The DemandShift Offer | DemandSense";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif", background: "#fff", overflowX: "hidden" }}>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <FeatureRow
          eyebrow="Identify"
          accentLead="Turn anonymous traffic into "
          accent="named accounts"
          accentTail="."
          body="DemandSense reveals the companies visiting your site in real time, so your team can act on intent before the competition does."
          bullets={[
            "See company and person-level identity, not just cookies.",
            "Score accounts by real buying intent signals.",
            "Trigger alerts the moment a target account lands.",
          ]}
          bg="white"
          mockup={<VisitorsMockup />}
        />
        <FeatureRow
          eyebrow="Optimize"
          accentLead="Cut the spend that "
          accent="never drives pipeline"
          accentTail="."
          body="The waste detector flags overlapping audiences, dead campaigns, and duplicate targeting so you can reinvest budget where it works."
          bullets={[
            "Surface zero-pipeline campaigns automatically.",
            "Find audience overlap draining your budget.",
            "Reallocate spend to the ads that close deals.",
          ]}
          bg="tint"
          reverse
          mockup={<WasteMockup />}
        />
        <FeatureRow
          eyebrow="Attribute"
          accentLead="Connect every campaign to "
          accent="closed revenue"
          accentTail="."
          body="Stop trusting last-click reports. DemandSense ties each touch to pipeline and closed-won so you can prove ROI to the board."
          bullets={[
            "Multi-touch attribution across your full funnel.",
            "Pull deal outcomes back from your CRM.",
            "Report pipeline influenced, not vanity metrics.",
          ]}
          bg="white"
          mockup={<DashboardMockup />}
        />
        <Benefits />
        <Stats />
        <Testimonial />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default DemandShiftOffer;
