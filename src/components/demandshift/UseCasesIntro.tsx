import { Eyebrow } from "./primitives";
import { useScrollReveal } from "./useScrollReveal";

export default function UseCasesIntro() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="use-cases"
      className="ds-usecases-intro"
      style={{ background: "#ffffff" }}
    >
      <div
        ref={revealRef}
        className="mx-auto flex flex-col items-center"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24 }}
      >
        <div data-reveal>
          <Eyebrow>Use cases</Eyebrow>
        </div>
        <h2
          data-reveal
          className="ds-h2 ds-h2--xl text-center"
          style={{ marginTop: 20, maxWidth: 960 }}
        >
          <span style={{ color: "#122752" }}>
            Once you can see the full account journey,
          </span>{" "}
          <span style={{ color: "#3875f6" }}>
            LinkedIn Ads gets a lot easier to manage
          </span>
        </h2>
        <p
          data-reveal
          className="text-center"
          style={{
            marginTop: 20,
            maxWidth: 800,
            fontSize: 18,
            lineHeight: 1.6,
            color: "#4b5675",
          }}
        >
          <strong style={{ color: "#122752", fontWeight: 700 }}>
            The signals are already there.
          </strong>{" "}
          DemandSense gives you enough context to see who is paying attention,
          what that attention turns into and where your budget should go next.
        </p>
      </div>
    </section>
  );
}
