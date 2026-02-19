export function PartyFlashOverlay() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(255,230,0,.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 800,
        animation: "bounceIn .3s ease",
      }}
    >
      <div
        style={{
          fontFamily: "'Oswald',sans-serif",
          fontSize: "clamp(2.5rem,5vw,4.5rem)",
          textAlign: "center",
          color: "var(--black)",
          lineHeight: 1.1,
        }}
      >
        TẤT CẢ
        <br />
        UỐNG!
      </div>
    </div>
  );
}
