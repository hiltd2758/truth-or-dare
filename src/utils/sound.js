export const SOUNDS = {
  click:   "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
  success: "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
  error:   "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
};

const audioCache = {};

export function playSound(soundType = "click") {
  try {
    const soundUrl = SOUNDS[soundType];
    if (!soundUrl) return;

    if (!audioCache[soundType]) {
      audioCache[soundType] = new Audio(soundUrl);
    }

    const audio = audioCache[soundType].cloneNode();
    audio.volume = 0.3;
    audio.play().catch(() => {});
  } catch {
    // Ignore audio errors
  }
}

export function playBackgroundMusic() {}
export function stopBackgroundMusic() {}