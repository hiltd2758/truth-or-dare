import { PACKS } from "../../constants/data";

export function PackCardSelector({ onSelectPack }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: "clamp(0.52rem,0.58vw,0.65rem)",
          fontWeight: 700,
          color: "#888",
          letterSpacing: ".14em",
          textTransform: "uppercase",
          marginBottom: "clamp(6px,0.8vw,12px)",
        }}
      >
        CHỌN CẤP ĐỘ
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          border: "var(--b4)",
          overflow: "hidden",
          boxShadow: "6px 6px 0 rgba(255,255,255,.08)",
        }}
      >
        {PACKS.map((pack, idx) => (
          <div
            key={pack.id}
            style={{
              borderBottom:
                idx < PACKS.length - 1 ? "4px solid var(--black)" : undefined,
            }}
          >
            <div
              style={{
                background: pack.accent,
                padding: "clamp(8px,0.9vw,12px) clamp(12px,1.2vw,18px)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "3px solid var(--black)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(6px,0.8vw,10px)",
                }}
              >
                <span style={{ fontSize: "clamp(0.9rem,1.1vw,1.2rem)" }}>
                  {pack.icon}
                </span>
                <div
                  style={{
                    fontFamily: "'Oswald',sans-serif",
                    fontSize: "clamp(1rem,1.25vw,1.4rem)",
                    letterSpacing: ".06em",
                    color: pack.accentText,
                  }}
                >
                  {pack.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono',monospace",
                    fontSize: "clamp(0.5rem,0.55vw,0.62rem)",
                    fontWeight: 700,
                    color: pack.accentText,
                    opacity: 0.7,
                    letterSpacing: ".1em",
                  }}
                >
                  {pack.level}
                </div>
              </div>
              <span
                style={{
                  background: "var(--black)",
                  color: pack.accent,
                  fontFamily: "'Space Mono',monospace",
                  fontSize: "clamp(0.5rem,0.55vw,0.62rem)",
                  fontWeight: 700,
                  padding: "2px 8px",
                  letterSpacing: ".1em",
                }}
              >
                {pack.tag}
              </span>
            </div>
            <div
              style={{
                background: "var(--white)",
                padding: "clamp(8px,0.9vw,14px) clamp(12px,1.2vw,18px)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "clamp(10px,1vw,16px)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Mono',monospace",
                  fontSize: "clamp(0.58rem,0.65vw,0.72rem)",
                  color: "#444",
                  lineHeight: 1.55,
                  flex: 1,
                }}
              >
                {pack.desc}
              </p>
              <button
                className="btn"
                style={{
                  background: pack.btnBg,
                  color: pack.btnText,
                  fontSize: "clamp(0.8rem,0.95vw,1.1rem)",
                  padding: "clamp(8px,0.9vw,12px) clamp(14px,1.5vw,22px)",
                  flexShrink: 0,
                  letterSpacing: ".1em",
                }}
                onClick={() => onSelectPack(pack.id)}
              >
                CHỌN
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
