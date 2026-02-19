import { useState, useCallback } from "react";
import { PACKS } from "../../constants/data";
import { GameTopbar } from "./GameTopbar";
import { GameSidebar } from "./GameSidebar";
import { GameMain } from "./GameMain";
import { SkipModal } from "./SkipModal";
import { PartyFlashOverlay } from "./PartyFlashOverlay";

export function Game({ players, packId, onBack }) {
  const pack = PACKS.find((p) => p.id === packId) || PACKS[0];

  const [pidx, setPidx] = useState(0);
  const [mode, setMode] = useState(null);
  const [q, setQ] = useState(null);
  const [qKey, setQKey] = useState(0);
  const [drinks, setDrinks] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [usedT, setUsedT] = useState([]);
  const [usedD, setUsedD] = useState([]);
  const [flash, setFlash] = useState(null);
  const [skipMod, setSkipMod] = useState(false);
  const [partyFlash, setPartyFlash] = useState(false);
  const [history, setHistory] = useState([]);

  const pick = useCallback(
    (type) => {
      const pool = type === "truth" ? pack.truth : pack.dare;
      const used = type === "truth" ? usedT : usedD;
      const avail = pool.filter((x) => !used.includes(x));
      const src = avail.length ? avail : pool;
      const chosen = src[Math.floor(Math.random() * src.length)];
      if (type === "truth")
        setUsedT((prev) => [...prev.slice(-(pool.length - 1)), chosen]);
      else setUsedD((prev) => [...prev.slice(-(pool.length - 1)), chosen]);
      return chosen;
    },
    [pack, usedT, usedD],
  );

  const choose = (type) => {
    const chosen = pick(type);
    setMode(type);
    setQ(chosen);
    setQKey((k) => k + 1);
    setFlash(null);
  };

  const done = () => {
    setHistory((h) =>
      [{ player: players[pidx], type: mode, q, result: "done" }, ...h].slice(
        0,
        12,
      ),
    );
    setFlash("done");
    setTimeout(() => {
      setMode(null);
      setQ(null);
      setFlash(null);
      setPidx((i) => (i + 1) % players.length);
      setRounds((r) => r + 1);
    }, 900);
  };

  const confirmSkip = (n) => {
    setHistory((h) =>
      [
        { player: players[pidx], type: mode, q, result: `skip×${n}` },
        ...h,
      ].slice(0, 12),
    );
    setDrinks((d) => d + n);
    setSkipMod(false);
    setFlash("skip");
    setTimeout(() => {
      setMode(null);
      setQ(null);
      setFlash(null);
      setPidx((i) => (i + 1) % players.length);
      setRounds((r) => r + 1);
    }, 900);
  };

  const partyDrink = () => {
    setDrinks((d) => d + players.length);
    setPartyFlash(true);
    setTimeout(() => setPartyFlash(false), 1200);
  };

  const cur = players[pidx];

  return (
    <div className="game-wrapper">
      <GameTopbar pack={pack} rounds={rounds} drinks={drinks} onBack={onBack} />
      <GameSidebar
        drinks={drinks}
        rounds={rounds}
        players={players}
        currentPlayerIndex={pidx}
        history={history}
        onPartyDrink={partyDrink}
      />
      <GameMain
        mode={mode}
        question={q}
        qKey={qKey}
        flash={flash}
        currentPlayer={cur}
        onChooseTruth={() => choose("truth")}
        onChooseDare={() => choose("dare")}
        onRandom={() => choose(Math.random() > 0.5 ? "truth" : "dare")}
        onDone={done}
        onSkip={() => setSkipMod(true)}
        onNextQuestion={() => {
          setQ(pick(mode));
          setQKey((k) => k + 1);
        }}
      />

      {partyFlash && <PartyFlashOverlay />}

      {skipMod && (
        <SkipModal
          currentPlayer={cur}
          onSkipWithDrinks={confirmSkip}
          onCancel={() => setSkipMod(false)}
        />
      )}
    </div>
  );
}
