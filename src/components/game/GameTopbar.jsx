export function GameTopbar({ pack, rounds, drinks, onBack }) {
  return (
    <div className="game-topbar">
      <button
        className="btn"
        style={{
          background: "none",
          fontSize: "clamp(0.65rem,0.75vw,0.82rem)",
          padding: "5px 12px",
          color: "#888"
        }}
        onClick={onBack}
      >
        VỀ TRANG CHỦ
      </button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(8px,1vw,16px)",
        }}
      >
        <div
          style={{
            background: pack.accent,
            border: "var(--b3)",
            padding: "4px clamp(10px,1.2vw,18px)",
            fontFamily: "'Oswald',sans-serif",
            fontSize: "clamp(0.85rem,1vw,1.15rem)",
            letterSpacing: ".08em",
            color: pack.accentText,
            boxShadow: "var(--sh)",
          }}
        >
          {pack.icon} {pack.name} — {pack.level}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "clamp(8px,1vw,16px)",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "clamp(0.58rem,0.65vw,0.72rem)",
            color: "#888",
          }}
        >
          VÒNG #{rounds + 1}
        </div>
        <div className="stag">{drinks} LY</div>
      </div>
    </div>
  );
}
