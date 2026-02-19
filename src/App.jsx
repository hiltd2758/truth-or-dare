import { useState } from "react";
import { GLOBAL_STYLES } from "./constants/styles";
import { Landing } from "./components/landing/Landing";
import { Game } from "./components/game/Game";

export default function App() {
  const [screen, setScreen] = useState("landing");
  const [players, setPlayers] = useState([]);
  const [packId, setPackId] = useState(null);

  const handleStart = (names, id) => {
    setPlayers(names);
    setPackId(id);
    setScreen("game");
  };

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      {screen === "game" ? (
        <Game
          players={players}
          packId={packId}
          onBack={() => setScreen("landing")}
        />
      ) : (
        <Landing onStart={handleStart} />
      )}
    </>
  );
}
