import { PreviewCard } from "./PreviewCard";
import { PackCardSelector } from "./PackCardSelector";

export function HeroRight({ flip, onSelectPack }) {
  return (
    <div className="hero-right s2">
      <PreviewCard flip={flip} />
      <PackCardSelector onSelectPack={onSelectPack} />
    </div>
  );
}
