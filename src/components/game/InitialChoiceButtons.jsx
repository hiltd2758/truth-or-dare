import { playSound } from "../../utils/sound";

export function InitialChoiceButtons({
  onChooseTruth,
  onChooseDare,
  onRandom,
}) {
  const handleTruth = () => {
    playSound("click");
    onChooseTruth();
  };

  const handleDare = () => {
    playSound("click");
    onChooseDare();
  };

  const handleRandom = () => {
    playSound("click");
    onRandom();
  };

  return (
    <>
      <div style={{ display: "flex", gap: "clamp(10px,1.2vw,18px)" }}>
        <button
          className="action-btn"
          style={{ background: "var(--red)", color: "var(--white)" }}
          onClick={handleTruth}
        >
          THẬT
        </button>
        <button
          className="action-btn"
          style={{ background: "var(--blue)", color: "var(--white)" }}
          onClick={handleDare}
        >
          THÁCH
        </button>
      </div>
      <button
        className="btn"
        style={{
          background: "var(--yellow)",
          color: "var(--black)",
          fontSize: "clamp(0.85rem,1vw,1.1rem)",
          padding: "clamp(10px,1.2vw,14px)",
          width: "100%",
        }}
        onClick={handleRandom}
      >
        RANDOM CHO TÔI
      </button>
    </>
  );
}
