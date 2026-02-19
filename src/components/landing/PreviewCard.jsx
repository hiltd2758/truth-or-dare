export function PreviewCard({ flip }) {
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
        XEM TRƯỚC
      </div>
      <div
        className={`q-card flip ${flip}`}
        style={{
          background: flip === "truth" ? "var(--red)" : "var(--blue)",
          color: "var(--white)",
          border: "var(--b4)",
          boxShadow: "6px 6px 0 rgba(255,255,255,.12)",
        }}
      >
        <div style={{ width: "100%" }}>
          <div
            style={{
              fontFamily: "'Oswald',sans-serif",
              fontSize: "clamp(0.7rem,0.85vw,1rem)",
              opacity: 0.7,
              letterSpacing: ".12em",
              marginBottom: "clamp(8px,1vw,14px)",
            }}
          >
            {flip === "truth" ? "CÂU HỎI MẪU" : "THÁCH THỨC MẪU"}
          </div>
          <div
            style={{
              fontFamily: "Playfair Display",
              fontSize: "clamp(1rem,1.3vw,1.45rem)",
              fontStyle: "italic",
              lineHeight: 1.65,
              color: "var(--white)",
            }}
          >
            {flip === "truth"
              ? "Bạn đã từng nói dối bạn bè về điều gì lớn nhất chưa?"
              : 'Gọi cho người yêu cũ và nói "tôi nhớ anh/chị"'}
          </div>
        </div>
      </div>
    </div>
  );
}
