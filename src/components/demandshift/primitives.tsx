import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/* ---------- Eyebrow pill ---------- */
const EYEBROW_VARIANTS = {
  blue: { background: "#eff6ff", color: "#2563eb", border: "1px solid #dbeafe" },
  orange: { background: "#fff3e8", color: "#c2410c", border: "1px solid #fed7aa" },
} as const;

export function Eyebrow({
  children,
  variant = "blue",
}: {
  children: ReactNode;
  variant?: keyof typeof EYEBROW_VARIANTS;
}) {
  const v = EYEBROW_VARIANTS[variant];
  return (
    <span
      className="inline-flex items-center rounded-full uppercase"
      style={{
        background: v.background,
        color: v.color,
        border: v.border,
        padding: "8px 14px",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.04em",
        lineHeight: 1,
      }}
    >
      {children}
    </span>
  );
}

/* ---------- Buttons ---------- */
const TRIAL_URL = "https://app.demandsense.com/signup";

export function PrimaryButton({
  children = "GET MY FREE TRIAL NOW",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={TRIAL_URL}
      className={`ds-primary-btn inline-flex items-center justify-center gap-2 ${className}`}
      style={{
        background: "#3875f6",
        color: "#ffffff",
        borderRadius: 4,
        padding: "11px 20px",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.2,
        transition: "background-color 150ms ease, transform 150ms ease",
      }}
    >
      {children}
      <ChevronRight size={18} strokeWidth={2} />
    </a>
  );
}

export function SecondaryButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center gap-2 ${className}`}
      style={{
        background: "#ffffff",
        color: "#3875f6",
        border: "1px solid #cfe0ff",
        borderRadius: 4,
        padding: "11px 20px",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.2,
      }}
    >
      {children}
    </span>
  );
}

/* ---------- Section wrapper ---------- */
export function Section({
  children,
  bg = "white",
  tight = false,
  className = "",
  id,
}: {
  children: ReactNode;
  bg?: "white" | "tint" | "dark";
  tight?: boolean;
  className?: string;
  id?: string;
}) {
  const background =
    bg === "white" ? "#ffffff" : bg === "tint" ? "#f5f9ff" : "#0f0f13";
  return (
    <section
      id={id}
      className={`ds-section ${tight ? "ds-section--tight" : ""} ${className}`}
      style={{ background }}
    >
      <div
        className="mx-auto w-full"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24 }}
      >
        {children}
      </div>
    </section>
  );
}

/* ---------- Icon tile ---------- */
type Tint = "blue" | "orange" | "green";
const TINT_BG: Record<Tint, string> = {
  blue: "#eff6ff",
  orange: "#fff3e8",
  green: "#eaf7ee",
};
const TINT_FG: Record<Tint, string> = {
  blue: "#3875f6",
  orange: "#f97316",
  green: "#16a34a",
};

export function IconTile({
  icon: Icon,
  tint = "blue",
}: {
  icon: LucideIcon;
  tint?: Tint;
}) {
  return (
    <span
      className="inline-flex items-center justify-center shrink-0"
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: TINT_BG[tint],
      }}
    >
      <Icon size={20} strokeWidth={2} color={TINT_FG[tint]} />
    </span>
  );
}

/* ---------- Two-tone heading ---------- */
export function TwoTone({
  lead,
  accent,
  tail,
}: {
  lead?: string;
  accent: string;
  tail?: string;
}) {
  return (
    <>
      {lead ? <span style={{ color: "#0a0a0a" }}>{lead}</span> : null}
      <span style={{ color: "#3875f6" }}>{accent}</span>
      {tail ? <span style={{ color: "#0a0a0a" }}>{tail}</span> : null}
    </>
  );
}
