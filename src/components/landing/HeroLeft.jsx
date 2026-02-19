import {
  HeroTag,
  HeroTitle,
  HeroSubtitle,
  HeroFeatures,
} from "./HeroLeftParts";
import { GameInstructions } from "./GameInstructions";

export function HeroLeft() {
  return (
    <div className="hero-left s1">
      <HeroTag />
      <HeroTitle />
      <HeroSubtitle />
      <HeroFeatures />
      <GameInstructions />
    </div>
  );
}
