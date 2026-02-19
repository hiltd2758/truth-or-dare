import { useState } from "react";
import { PLAYER_COLORS } from "../../constants/data";

export function SetupModal({ selectedPackId, onStart, onClose }) {
  const [players, setPlayers] = useState(["", ""]);
  const update = (i, v) => {
    const a = [...players];
    a[i] = v;
    setPlayers(a);
  };
  const add = () => players.length < 8 && setPlayers([...players, ""]);
  const remove = (i) =>
    players.length > 2 && setPlayers(players.filter((_, j) => j !== i));
  const start = () => {
    const names = players.map((p, i) => p.trim() || `Người ${i + 1}`);
    onStart(names, selectedPackId);
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div
          style={{
            fontFamily: "'Oswald',sans-serif",
            fontSize: "2.4rem",
            letterSpacing: ".05em",
            borderBottom: "4px solid var(--black)",
            paddingBottom: 16,
            marginBottom: 28,
          }}
        >
          NHẬP TÊN NGƯỜI CHƠI
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: ".72rem",
              fontWeight: 700,
              letterSpacing: ".12em",
              textTransform: "uppercase",
            }}
          >
            NGƯỜI CHƠI ({players.length}/8)
          </span>
          <button
            className="btn"
            style={{
              background: "var(--black)",
              color: "var(--yellow)",
              fontSize: ".8rem",
              padding: "6px 18px",
            }}
            onClick={add}
          >
            + THÊM
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            marginBottom: 28,
          }}
        >
          {players.map((p, i) => (
            <div
              key={i}
              style={{ display: "flex", gap: 8, alignItems: "center" }}
            >
              <div
                style={{
                  background: PLAYER_COLORS[i % PLAYER_COLORS.length],
                  border: "2px solid var(--black)",
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Oswald',sans-serif",
                  fontSize: "1.1rem",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>
              <input
                className="neo-input"
                placeholder={`Người ${i + 1}`}
                value={p}
                onChange={(e) => update(i, e.target.value)}
                maxLength={16}
              />
              {players.length > 2 && (
                <button
                  onClick={() => remove(i)}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                    flexShrink: 0,
                    color: "var(--black)",
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          className="btn"
          style={{
            width: "100%",
            background: "var(--black)",
            color: "var(--yellow)",
            fontSize: "2rem",
            padding: "18px",
          }}
          onClick={start}
        >
          BẮT ĐẦU NGAY!
        </button>
      </div>
    </div>
  );
}
