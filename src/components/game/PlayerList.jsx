import { PLAYER_COLORS } from "../../constants/data";

export function PlayerList({ players, currentPlayerIndex }) {
  return (
    <div>
      <div className="section-label">NGƯỜI CHƠI</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {players.map((p, i) => {
          const active = i === currentPlayerIndex;
          return (
            <div
              key={i}
              style={{
                background: active
                  ? PLAYER_COLORS[i % PLAYER_COLORS.length]
                  : "transparent",
                border: `3px solid ${active ? "var(--black)" : "#ddd"}`,
                boxShadow: active ? "4px 4px 0 var(--black)" : "none",
                padding: "7px 12px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transform: active ? "translate(-2px,-2px)" : "none",
                transition: "all .25s",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  background: "rgba(0,0,0,.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Oswald',sans-serif",
                  fontSize: "clamp(0.7rem,0.78vw,0.88rem)",
                  border: "2px solid rgba(0,0,0,.2)",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>
              <div
                style={{
                  fontFamily: "'Oswald',sans-serif",
                  fontSize: "clamp(0.85rem,0.95vw,1.05rem)",
                  letterSpacing: ".05em",
                  color: active
                    ? PLAYER_COLORS[i % PLAYER_COLORS.length] === "#FFE600"
                      ? "var(--black)"
                      : "var(--white)"
                    : "#aaa",
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {p}
              </div>
              {active && (
                <span
                  style={{
                    fontFamily: "'Space Mono',monospace",
                    fontSize: "clamp(0.45rem,0.5vw,0.58rem)",
                    color:
                      PLAYER_COLORS[i % PLAYER_COLORS.length] === "#FFE600"
                        ? "var(--black)"
                        : "rgba(255,255,255,.7)",
                    letterSpacing: ".1em",
                    flexShrink: 0,
                  }}
                >
                  LƯỢT
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
