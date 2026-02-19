export const GLOBAL_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:     #F2EDE4;
  --black:  #111111;
  --red:    #FF3300;
  --blue:   #0033FF;
  --yellow: #FFE600;
  --green:  #00C44F;
  --white:  #FFFFFF;
  --b3: 3px solid var(--black);
  --b4: 4px solid var(--black);
  --sh:  4px 4px 0 var(--black);
  --sh2: 6px 6px 0 var(--black);
  --sh3: 8px 8px 0 var(--black);
  --space-xs:  clamp(0.5rem,  0.4vw, 0.75rem);
  --space-sm:  clamp(0.75rem, 0.8vw, 1.25rem);
  --space-md:  clamp(1rem,    1.2vw, 1.75rem);
  --space-lg:  clamp(1.5rem,  2vw,   2.5rem);
  --space-xl:  clamp(2rem,    2.5vw, 3.5rem);
  --sidebar-w: clamp(260px, 22%, 320px);
}

html, body {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  max-width: 100vw;
}
#root {
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  background: var(--bg);
  font-family: 'Space Mono', monospace;
  -webkit-font-smoothing: antialiased;
  font-size: clamp(13px, 1vw, 16px);
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--black); border: 2px solid var(--bg); }

.ticker-wrap {
  overflow: hidden;
  border-top: var(--b4);
  border-bottom: var(--b4);
  background: var(--yellow);
  padding: 10px 0;
  white-space: nowrap;
  width: 100%;
}
.ticker-track {
  display: inline-flex;
  gap: 48px;
  animation: ticker 28s linear infinite;
}
.ticker-item {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(0.75rem, 0.9vw, 1rem);
  letter-spacing: .12em;
  color: var(--black);
  flex-shrink: 0;
}
@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }

.pack-card {
  border: var(--b4);
  box-shadow: var(--sh2);
  position: relative;
  overflow: hidden;
  background: var(--white);
  transition: transform .12s, box-shadow .12s;
}
.pack-card:hover  { transform: translate(-3px,-3px); box-shadow: var(--sh3); }
.pack-card:active { transform: translate(3px,3px);   box-shadow: 2px 2px 0 var(--black); }

.btn {
  display: inline-flex; align-items: center; justify-content: center;
  border: var(--b3); box-shadow: var(--sh);
  font-family: 'Oswald', sans-serif;
  letter-spacing: .06em; cursor: pointer;
  transition: transform .1s, box-shadow .1s;
  background: none; border-radius: 0;
}
.btn:hover  { transform: translate(-2px,-2px); box-shadow: var(--sh2); }
.btn:active { transform: translate(3px,3px);  box-shadow: 2px 2px 0 var(--black); }

.action-btn {
  flex: 1;
  min-height: clamp(80px, 10vh, 120px);
  font-family: 'Oswald', sans-serif;
  font-size: clamp(1.8rem, 2.5vw, 2.8rem);
  letter-spacing: .04em;
  border: var(--b4); box-shadow: var(--sh2);
  cursor: pointer; border-radius: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 4px;
  transition: transform .1s, box-shadow .1s;
}
.action-btn .sub {
  font-family:'Space Mono',monospace;
  font-size: clamp(0.5rem, 0.55vw, 0.65rem);
  letter-spacing:.18em; opacity:.75;
}
.action-btn:hover  { transform: translate(-3px,-3px); box-shadow: 10px 10px 0 var(--black); }
.action-btn:active { transform: translate(4px,4px);   box-shadow: 1px 1px 0 var(--black); }

.meter-track {
  width: 100%; height: 18px;
  background: var(--white);
  border: var(--b3); box-shadow: 3px 3px 0 var(--black);
  overflow: hidden;
}
.meter-fill {
  height: 100%;
  background: repeating-linear-gradient(90deg, var(--red) 0 14px, var(--yellow) 14px 28px);
  transition: width .6s cubic-bezier(.34,1.56,.64,1);
  border-right: 3px solid var(--black);
}

.q-card {
  border: var(--b4); box-shadow: var(--sh2);
  min-height: clamp(140px, 20vh, 220px);
  padding: var(--space-lg) var(--space-md);
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
  text-align: center; width: 100%;
}
.q-card::before {
  content:''; position:absolute;
  top:0; left:0; right:0; height:6px;
}
.q-card.truth::before { background: var(--red); }
.q-card.dare::before  { background: var(--blue); }

.overlay {
  position: fixed; inset: 0;
  background: rgba(17,17,17,.75);
  z-index: 900; display: flex;
  align-items: center; justify-content: center;
  padding: 20px;
}
.modal {
  background: var(--bg);
  border: var(--b4); box-shadow: 10px 10px 0 var(--black);
  width: 100%; max-width: min(480px, 90vw);
  padding: clamp(20px, 2.5vw, 36px);
  animation: bounceIn .4s cubic-bezier(.175,.885,.32,1.275);
}

.neo-input {
  border: var(--b3); box-shadow: 3px 3px 0 var(--black);
  background: var(--white); border-radius: 0;
  font-family: 'Space Mono', monospace;
  font-size: clamp(0.7rem, 0.75vw, 0.85rem);
  padding: 9px 12px; width: 100%; outline: none;
  transition: box-shadow .1s;
}
.neo-input:focus { box-shadow: 5px 5px 0 var(--black); }

@keyframes slideUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
@keyframes flipIn    { from{opacity:0;transform:rotateY(90deg)}    to{opacity:1;transform:rotateY(0)} }
@keyframes bounceIn  { 0%{transform:scale(.3);opacity:0} 55%{transform:scale(1.07)} 80%{transform:scale(.96)} 100%{transform:scale(1);opacity:1} }
@keyframes pulse     { 0%,100%{box-shadow:var(--sh2)} 50%{box-shadow:10px 10px 0 var(--black)} }
@keyframes flashBig  { 0%{opacity:0;transform:scale(.4)} 60%{transform:scale(1.1)} 100%{opacity:1;transform:scale(1)} }

.s1{animation:slideUp .45s .05s both}
.s2{animation:slideUp .45s .15s both}
.s3{animation:slideUp .45s .25s both}
.s4{animation:slideUp .45s .35s both}
.s5{animation:slideUp .45s .45s both}
.flip{animation:flipIn .38s ease both}
.bounce{animation:bounceIn .45s cubic-bezier(.175,.885,.32,1.275) both}
.pulse{animation:pulse 2s ease infinite}
.flash{animation:flashBig .4s ease both}

.stripe {
  background: repeating-linear-gradient(-45deg, transparent 0 8px, rgba(0,0,0,.03) 8px 16px);
}

.stag {
  background: var(--yellow); border: 2px solid var(--black);
  font-family: 'Space Mono', monospace;
  font-size: clamp(0.6rem, 0.65vw, 0.75rem);
  font-weight: 700;
  padding: 3px 10px;
}

.landing-root {
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.landing-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(12px, 1.2vw, 20px) clamp(16px, 2.5vw, 40px);
  border-bottom: var(--b4);
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 100;
}

.landing-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  border-bottom: var(--b4);
}
@media (max-width: 800px) {
  .landing-hero { grid-template-columns: 1fr; }
  .hero-right { border-left: none; border-top: var(--b4); }
}

.hero-left {
  padding: clamp(28px, 4vw, 56px) clamp(20px, 4vw, 40px);
  border-right: var(--b4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
.hero-right {
  padding: clamp(24px, 3.5vw, 48px) clamp(20px, 3.5vw, 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(16px, 2vw, 28px);
  background: var(--black);
  overflow: hidden;
}

.game-wrapper {
  display: grid;
  grid-template-columns: var(--sidebar-w) 1fr;
  grid-template-rows: auto 1fr;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

.game-topbar {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: clamp(10px, 1vw, 16px) clamp(16px, 2vw, 32px);
  border-bottom: var(--b4);
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 100;
  flex-wrap: wrap;
}

.game-sidebar {
  border-right: var(--b4);
  padding: clamp(16px, 1.8vw, 28px) clamp(14px, 1.5vw, 24px);
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 1.5vw, 22px);
  background: var(--white);
  overflow-y: auto;
  height: calc(100vh - 53px);
  position: sticky;
  top: 53px;
}

.game-main {
  padding: clamp(20px, 3vw, 44px) clamp(24px, 4vw, 48px);
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 1.8vw, 24px);
  overflow-x: hidden;
}

.section-label {
  font-family: 'Space Mono', monospace;
  font-size: clamp(0.55rem, 0.6vw, 0.68rem);
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 8px;
}
`;
