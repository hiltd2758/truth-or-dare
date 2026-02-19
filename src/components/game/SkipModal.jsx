export function SkipModal({ currentPlayer, onSkipWithDrinks, onCancel }) {
  return (
    <div className="overlay">
      <div className="modal" style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'Oswald',sans-serif",
            fontSize: "clamp(1.4rem,1.8vw,2rem)",
            marginBottom: 16,
          }}
        >
          BỎ QUA = UỐNG PHẠT
        </div>
        <div
          style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "clamp(0.62rem,0.7vw,0.78rem)",
            color: "#555",
            marginBottom: "clamp(16px,2vw,24px)",
            lineHeight: 1.7,
          }}
        >
          <strong>{currentPlayer}</strong> chọn bỏ qua.
          <br />
          Uống bao nhiêu ly?
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(8px,1vw,12px)",
            marginBottom: "clamp(8px,1vw,12px)",
          }}
        >
          {[1, 2, 3, 4].map((n) => (
            <button
              key={n}
              className="btn"
              style={{
                background: "var(--red)",
                color: "var(--white)",
                fontSize: "clamp(1rem,1.4vw,1.5rem)",
                padding: "clamp(10px,1.2vw,14px)",
                justifyContent: "center",
              }}
              onClick={() => onSkipWithDrinks(n)}
            >
              ×{n}
            </button>
          ))}
        </div>
        <button
          className="btn"
          style={{
            width: "100%",
            background: "var(--white)",
            color: "var(--black)",
            fontSize: "clamp(0.7rem,0.8vw,0.88rem)",
            padding: "clamp(8px,1vw,12px)",
            justifyContent: "center",
          }}
          onClick={onCancel}
        >
          THÔI KHÔNG BỎ QUA
        </button>
      </div>
    </div>
  );
}
