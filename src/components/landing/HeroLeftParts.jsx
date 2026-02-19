export function HeroTitle() {
  return (
    <div
      style={{
        fontFamily: "'Oswald',sans-serif",
        fontSize: "clamp(2.8rem,4.5vw,5.5rem)",
        lineHeight: 0.95,
        letterSpacing: ".01em",
        marginBottom: "clamp(16px,2vw,28px)",
        display: "inline-flex",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          background: "var(--black)",
          color: "var(--white)",
          padding: "2px 16px",
        }}
      >
        TRUTH
      </span>
      <span
        style={{
          background: "var(--red)",
          color: "var(--white)",
          padding: "2px 16px",
          borderTop: "4px solid var(--black)",
          borderBottom: "4px solid var(--black)",
        }}
      >
        OR
      </span>
      <span
        style={{
          background: "var(--blue)",
          color: "var(--white)",
          padding: "2px 16px",
        }}
      >
        DARE
      </span>
    </div>
  );
}

export function HeroSubtitle() {
  return (
    <p
      style={{
        fontFamily: "'Space Mono',monospace",
        fontSize: "clamp(0.68rem,0.75vw,0.85rem)",
        color: "#444",
        lineHeight: 1.85,
        maxWidth: "90%",
        marginBottom: "clamp(16px,2vw,28px)",
      }}
    >
      Không có câu hỏi nhẹ nhàng ở đây. Chỉ có những câu hỏi, thách thức táo
      bạo, và rất nhiều rượu. Mỗi pack có 100 câu.
    </p>
  );
}

export function HeroFeatures() {
  return (
    <div
      style={{
        display: "flex",
        gap: "clamp(12px,1.5vw,20px)",
        marginBottom: "clamp(16px,2.2vw,32px)",
        flexWrap: "wrap",
      }}
    >
      {["2–8 NGƯỜI CHƠI", "3 CẤP ĐỘ", "KHÔNG GIỚI HẠN VUI"].map((t) => (
        <div
          key={t}
          style={{
            borderLeft: "4px solid var(--black)",
            paddingLeft: "clamp(8px,0.9vw,14px)",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "clamp(0.52rem,0.58vw,0.65rem)",
              fontWeight: 700,
              color: "var(--black)",
              letterSpacing: ".06em",
            }}
          >
            {t}
          </div>
        </div>
      ))}
    </div>
  );
}

export function HeroTag() {
  return (
    <div style={{ marginBottom: "clamp(10px,1.2vw,20px)" }}>
      <span
        style={{
          background: "var(--black)",
          color: "var(--yellow)",
          fontFamily: "'Space Mono',monospace",
          fontSize: "clamp(0.6rem,0.65vw,0.75rem)",
          fontWeight: 700,
          letterSpacing: ".14em",
          padding: "5px 12px",
          textTransform: "uppercase",
        }}
      >
        GAME NHẬU #1
      </span>
    </div>
  );
}
