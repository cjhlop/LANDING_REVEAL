/**
 * Small inline brand marks rendered as SVG/text so no external assets are
 * needed and the production build stays clean. These are simplified wordmarks
 * used at small sizes as supporting cues, not full official logo lockups.
 */

/* LinkedIn "in" glyph in official brand blue */
export function LinkedInGlyph({ size = 16 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center align-middle"
      style={{
        width: size,
        height: size,
        borderRadius: 3,
        background: "#0a66c2",
        color: "#ffffff",
        fontSize: size * 0.62,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
      aria-label="LinkedIn"
    >
      in
    </span>
  );
}

/* Grayscale text wordmark used for CRM logos row */
function GrayWordmark({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: 13,
        fontWeight: 700,
        color: "#94a3b8",
        letterSpacing: "-0.01em",
        lineHeight: 1,
      }}
    >
      {label}
    </span>
  );
}

export function CrmLogos() {
  return (
    <div className="flex items-center gap-3" style={{ marginTop: 12 }}>
      <GrayWordmark label="HubSpot" />
      <span style={{ color: "#e2e8f0" }}>·</span>
      <GrayWordmark label="Salesforce" />
      <span style={{ color: "#e2e8f0" }}>·</span>
      <GrayWordmark label="Attio" />
    </div>
  );
}

export function AiLogos() {
  return (
    <div className="flex items-center gap-3" style={{ marginTop: 12 }}>
      <span className="inline-flex items-center gap-1.5">
        <span
          className="inline-flex items-center justify-center"
          style={{
            width: 18,
            height: 18,
            borderRadius: 4,
            background: "#d97757",
            color: "#fff",
            fontSize: 11,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          C
        </span>
        <GrayWordmark label="Claude" />
      </span>
      <span style={{ color: "#e2e8f0" }}>·</span>
      <span className="inline-flex items-center gap-1.5">
        <span
          className="inline-flex items-center justify-center"
          style={{
            width: 18,
            height: 18,
            borderRadius: 999,
            background: "#10a37f",
            color: "#fff",
            fontSize: 11,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          G
        </span>
        <GrayWordmark label="ChatGPT" />
      </span>
    </div>
  );
}
