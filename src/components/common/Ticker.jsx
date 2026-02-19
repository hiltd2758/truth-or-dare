import { TICKER } from "../../constants/data";

export function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {TICKER.map((t, i) => (
          <span key={i} className="ticker-item">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
