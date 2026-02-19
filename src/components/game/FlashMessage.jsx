export function FlashMessage({ flash }) {
  if (!flash) return null;

  return (
    <div
      className="flash"
      style={{
        textAlign: "center",
        fontFamily: "'Oswald',sans-serif",
        fontSize: "clamp(2rem,3vw,3.2rem)",
        color: flash === "done" ? "var(--green)" : "var(--red)",
      }}
    >
      {flash === "done" ? "XONG!" : "UỐNG!"}
    </div>
  );
}
