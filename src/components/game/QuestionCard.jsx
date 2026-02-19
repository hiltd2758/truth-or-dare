export function QuestionCard({ mode, question, qKey }) {
  return (
    <div
      key={qKey}
      className={`q-card bounce ${mode}`}
      style={{
        background: mode === "truth" ? "var(--red)" : "var(--blue)",
        color: "var(--white)",
      }}
    >
      <div style={{ width: "100%" }}>
        <div
          style={{
            fontFamily: "'Oswald',sans-serif",
            fontSize: "clamp(0.8rem,0.95vw,1.05rem)",
            opacity: 0.7,
            letterSpacing: ".14em",
            marginBottom: "clamp(8px,1vw,14px)",
          }}
        >
          {mode === "truth" ? "THẬT" : "THÁCH"}
        </div>
        <div
          style={{
            fontFamily: "'DM Serif Display',serif",
            fontSize: "clamp(1.1rem,1.6vw,1.75rem)",
            fontStyle: "italic",
            lineHeight: 1.55,
          }}
        >
          {question}
        </div>
      </div>
    </div>
  );
}
