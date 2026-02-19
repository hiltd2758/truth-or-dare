import { useEffect, useReducer, useState } from "react";
import { getTenorGIF, getGifTag } from "../../utils/giphy";
import { playSound } from "../../utils/sound";

// Gộp gif + loading vào một reducer — tránh 2 setState riêng lẻ
function gifReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { gif: null, loading: true };
    case "FETCH_DONE":
      return { gif: action.url, loading: false };
    default:
      return state;
  }
}

export function QuestionCard({ mode, question, qKey }) {
  const [{ gif, loading }, dispatch] = useReducer(gifReducer, {
    gif: null,
    loading: true,
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    dispatch({ type: "FETCH_START" });

    (async () => {
      const tag = getGifTag(question, mode === "truth");
      const url = await getTenorGIF(tag);
      if (!cancelled) dispatch({ type: "FETCH_DONE", url });
    })();

    return () => {
      cancelled = true;
    };
  }, [qKey, question, mode]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(question)
      .then(() => {
        playSound("success");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        playSound("error");
      });
  };

  return (
    <div
      className={`q-card bounce ${mode}`}
      style={{
        background: mode === "truth" ? "var(--red)" : "var(--blue)",
        color: "var(--white)",
        display: "flex",
        flexDirection: "column",
        gap: "clamp(8px,1vw,16px)",
      }}
    >
      {loading && (
        <div
          style={{
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.6,
            fontSize: "clamp(0.65rem,0.75vw,0.85rem)",
            letterSpacing: ".1em",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          LOADING GIF...
        </div>
      )}

      {!loading && gif && (
        <div
          style={{
            width: "100%",
            maxHeight: 280,
            overflow: "hidden",
            border: "2px solid rgba(255,255,255,0.25)",
            borderRadius: 2,
          }}
        >
          <img
            src={gif}
            alt=""
            style={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      )}

      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "clamp(4px,0.5vw,8px)",
            marginBottom: "clamp(8px,1vw,14px)",
          }}
        >
          <div
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(0.8rem,0.95vw,1.05rem)",
              opacity: 0.7,
              letterSpacing: ".14em",
            }}
          >
            {mode === "truth" ? "THẬT" : "THÁCH"}
          </div>
          <button
            onClick={handleCopy}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "var(--white)",
              padding: "4px 8px",
              fontSize: "clamp(0.6rem,0.7vw,0.8rem)",
              cursor: "pointer",
              fontFamily: "'Space Mono', monospace",
              borderRadius: "2px",
              transition: "all 0.2s",
              opacity: copied ? 1 : 0.6,
              backgroundColor: copied
                ? "rgba(0,196,79,0.3)"
                : "rgba(255,255,255,0.1)",
            }}
            title="Copy question"
          >
            {copied ? "✓ COPIED" : "COPY"}
          </button>
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.1rem,1.6vw,1.75rem)",
            fontStyle: "italic",
            lineHeight: 1.55,
          }}
        >
          {question}
        </div>
      </div>
    </div>
  );
}
