export function DrunkoMeter({ drinks, rounds }) {
  const meter = Math.min((drinks / Math.max(rounds * 2, 10)) * 100, 100);

  return (
    <div>
      <div className="section-label">DRUNK-O-METER</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "clamp(0.55rem,0.62vw,0.68rem)",
            fontWeight: 700,
          }}
        >
          {drinks} LY TỔNG
        </span>
        <span
          style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "clamp(0.55rem,0.62vw,0.68rem)",
          }}
        >
          {meter < 25
            ? "😊 tỉnh táo"
            : meter < 55
              ? "😅 hơi say"
              : meter < 80
                ? "🥴 khá phê"
                : "💀 tới bến!"}
        </span>
      </div>
      <div className="meter-track">
        <div className="meter-fill" style={{ width: `${meter}%` }} />
      </div>
    </div>
  );
}
