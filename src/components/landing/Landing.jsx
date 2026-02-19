import { useState, useEffect } from "react";
import { LandingHeader } from "./LandingHeader";
import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";
import { Ticker } from "../common/Ticker";
import { SetupModal } from "../modals/SetupModal";

export function Landing({ onStart }) {
  const [flip, setFlip] = useState("truth");
  const [key, setKey] = useState(0);
  const [setup, setSetup] = useState(null);

  useEffect(() => {
    const t = setInterval(() => {
      setFlip((f) => (f === "truth" ? "dare" : "truth"));
      setKey((k) => k + 1);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="landing-root">
      <LandingHeader />
      <div className="landing-hero">
        <HeroLeft />
        <HeroRight flip={flip} onSelectPack={setSetup} />
      </div>
      <Ticker />

      {setup && (
        <SetupModal
          selectedPackId={setup}
          onStart={onStart}
          onClose={() => setSetup(null)}
        />
      )}
    </div>
  );
}
