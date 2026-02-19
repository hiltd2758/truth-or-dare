export function GameHistory({ history }) {
  if (history.length === 0) return null;

  return (
    <div>
      <div className="section-label">LỊCH SỬ</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {history.slice(0, 6).map((h, i) => (
          <div
            key={i}
            style={{
              background: i === 0 ? "var(--black)" : "transparent",
              border: `2px solid ${i === 0 ? "var(--black)" : "#e0e0e0"}`,
              padding: "6px 10px",
              opacity: i === 0 ? 1 : 0.6,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 2,
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono',monospace",
                  fontSize: "clamp(0.5rem,0.56vw,0.62rem)",
                  fontWeight: 700,
                  color: i === 0 ? "var(--yellow)" : "#888",
                  letterSpacing: ".06em",
                }}
              >
                {h.player}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono',monospace",
                  fontSize: "clamp(0.45rem,0.5vw,0.56rem)",
                  color: i === 0 ? "rgba(255,255,255,.5)" : "#bbb",
                }}
              >
                {h.result === "done" ? "✓" : h.result}
              </span>
            </div>
            <div
              style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "clamp(0.5rem,0.56vw,0.62rem)",
                color: i === 0 ? "rgba(255,255,255,.7)" : "#666",
                lineHeight: 1.4,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "100%",
              }}
            >
              {h.q}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
