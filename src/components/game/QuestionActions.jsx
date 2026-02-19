export function QuestionActions({ onDone, onSkip, onNextQuestion }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gap: "clamp(8px,1vw,14px)",
      }}
    >
      <button
        className="btn"
        style={{
          background: "var(--green)",
          color: "var(--black)",
          fontSize: "clamp(1.1rem,1.5vw,1.7rem)",
          padding: "clamp(12px,1.4vw,18px)",
        }}
        onClick={onDone}
      >
        XONG RỒI!
      </button>
      <button
        className="btn"
        style={{
          background: "var(--red)",
          color: "var(--white)",
          fontSize: "clamp(0.72rem,0.85vw,0.95rem)",
          padding: "clamp(10px,1.2vw,14px)",
        }}
        onClick={onSkip}
      >
        BỎ QUA
      </button>
      <button
        className="btn"
        style={{
          background: "var(--white)",
          color: "var(--black)",
          fontSize: "clamp(0.72rem,0.85vw,0.95rem)",
          padding: "clamp(10px,1.2vw,14px)",
        }}
        onClick={onNextQuestion}
      >
        CÂU KHÁC
      </button>
    </div>
  );
}
