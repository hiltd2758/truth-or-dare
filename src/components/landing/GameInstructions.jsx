export function GameInstructions() {
  return (
    <div
      style={{
        background: "var(--black)",
        border: "var(--b4)",
        boxShadow: "var(--sh2)",
        padding: "clamp(14px,1.5vw,22px)",
        maxWidth: "100%",
      }}
    >
      <div
        style={{
          fontFamily: "'Oswald',sans-serif",
          fontSize: "clamp(1rem,1.2vw,1.35rem)",
          color: "var(--yellow)",
          letterSpacing: ".08em",
          marginBottom: "clamp(10px,1vw,16px)",
        }}
      >
        CÁCH CHƠI
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(8px,0.9vw,12px)",
        }}
      >
        {[
          [
            "1",
            "var(--yellow)",
            "CHỌN THẬT HOẶC THÁCH",
            "Người chơi chọn Đỏ = Thật, Xanh = Thách.",
          ],
          [
            "2",
            "var(--red)",
            "LÀM HOẶC UỐNG",
            "Không dám? Uống để bỏ qua lượt.",
          ],
          [
            "3",
            "var(--blue)",
            "TIẾP TỤC ĐẾN KHI SAY",
            "Chuyển lượt cho đến khi không ai còn tỉnh.",
          ],
        ].map(([n, bg, title, desc]) => (
          <div
            key={n}
            style={{
              display: "flex",
              gap: "clamp(8px,0.9vw,12px)",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: bg,
                color: "var(--black)",
                border: "2px solid rgba(255,255,255,.2)",
                width: "clamp(26px,2.2vw,32px)",
                height: "clamp(26px,2.2vw,32px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontFamily: "'Oswald',sans-serif",
                fontSize: "clamp(0.85rem,0.95vw,1.1rem)",
              }}
            >
              {n}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Oswald',sans-serif",
                  fontSize: "clamp(0.8rem,0.9vw,1rem)",
                  color: "var(--white)",
                  letterSpacing: ".06em",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontFamily: "'Space Mono',monospace",
                  fontSize: "clamp(0.52rem,0.56vw,0.62rem)",
                  color: "rgba(255,255,255,.55)",
                  lineHeight: 1.5,
                }}
              >
                {desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
