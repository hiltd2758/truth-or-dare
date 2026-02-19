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
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--black)",
          border: "4px solid var(--yellow)",
          boxShadow: "10px 10px 0 var(--yellow)",
        }}
      >
        <div
          style={{
            fontFamily: "'Oswald',sans-serif",
            fontSize: "2.4rem",
            letterSpacing: ".05em",
            borderBottom: "4px solid var(--yellow)",
            paddingBottom: 16,
            marginBottom: 28,
            color: "var(--yellow)",
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
              color: "rgba(255,255,255,.5)",
            }}
          >
            NGƯỜI CHƠI ({players.length}/8)
          </span>
          <button
            className="btn"
            style={{
              background: "var(--yellow)",
              color: "var(--black)",
              fontSize: ".8rem",
              padding: "6px 18px",
              border: "2px solid var(--yellow)",
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
                  border: "2px solid var(--yellow)",
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Oswald',sans-serif",
                  fontSize: "1.1rem",
                  flexShrink: 0,
                  color: "var(--black)",
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
                style={{
                  background: "rgba(255,255,255,.08)",
                  border: "2px solid rgba(255,255,255,.2)",
                  color: "var(--white)",
                  boxShadow: "none",
                }}
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
                    color: "rgba(255,255,255,.4)",
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
            background: "var(--red)",
            color: "var(--white)",
            fontSize: "2rem",
            padding: "18px",
            border: "3px solid var(--red)",
            boxShadow: "6px 6px 0 var(--yellow)",
          }}
          onClick={start}
        >
          BẮT ĐẦU NGAY!
        </button>
      </div>
    </div>
  );
}
