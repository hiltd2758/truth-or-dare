import { DrunkoMeter } from "./DrunkoMeter";
import { PlayerList } from "./PlayerList";
import { GameHistory } from "./GameHistory";

export function GameSidebar({
  drinks,
  rounds,
  players,
  currentPlayerIndex,
  history,
  onPartyDrink,
}) {
  return (
    <div className="game-sidebar">
      <DrunkoMeter drinks={drinks} rounds={rounds} />
      <PlayerList players={players} currentPlayerIndex={currentPlayerIndex} />
      <GameHistory history={history} />
      <button
        className="btn"
        style={{
          background: "var(--black)",
          color: "var(--yellow)",
          fontSize: "clamp(0.7rem,0.85vw,0.95rem)",
          padding: "clamp(8px,1vw,12px)",
          marginTop: "auto",
          width: "100%",
        }}
        onClick={onPartyDrink}
      >
        TẤT CẢ UỐNG 1 LY
      </button>
    </div>
  );
}
