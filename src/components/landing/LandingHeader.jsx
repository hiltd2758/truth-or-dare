import { Logo } from "./Logo";

export function LandingHeader() {
  return (
    <div className="landing-header s1">
      <Logo />
      <div style={{ display: "flex", gap: 6 }}>
        {[
          { c: "var(--yellow)", l: "LV.1" },
          { c: "var(--red)", l: "LV.2" },
          { c: "var(--blue)", l: "LV.3" },
        ].map(({ c, l }) => (
          <div
            key={l}
            style={{
              background: c,
              border: "var(--b3)",
              padding: "4px 10px",
              fontFamily: "'Oswald',sans-serif",
              fontSize: "clamp(0.7rem,0.75vw,0.9rem)",
              letterSpacing: ".1em",
              boxShadow: "var(--sh)",
            }}
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
