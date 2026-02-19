export function Logo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "clamp(8px,1vw,16px)",
      }}
    >
      <div
        style={{
          background: "var(--red)",
          border: "var(--b4)",
          width: "clamp(34px,3.2vw,46px)",
          height: "clamp(34px,3.2vw,46px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "clamp(1.1rem,1.6vw,1.7rem)",
          boxShadow: "var(--sh)",
          flexShrink: 0,
        }}
      >
        T
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Oswald',sans-serif",
            fontSize: "clamp(1rem,1.4vw,1.55rem)",
            letterSpacing: ".1em",
            lineHeight: 1,
            color: "red",
          }}
        >
          Thôi Thách Thì Thật
        </div>
        <div
          style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "clamp(0.48rem,0.52vw,0.6rem)",
            color: "#888",
            letterSpacing: ".1em",
            textTransform: "uppercase",
          }}
        >
          TRUTH OR DARE — VIETNAM EDITION
        </div>
      </div>
    </div>
  );
}
