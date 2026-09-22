import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const C = {
  ink:   "#151513",
  paper: "#F4F1E9",
  wine:  "#B02038",
  muted: "#706C63",
  faint: "#2C2C2A",
} as const;

const SPLIT_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];
const REVEAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
type Phase = "loading" | "splitting" | "done";
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

const Letter: React.FC<{
  char: string; color: string; delay: number; show: boolean; size: string;
}> = ({ char, color, delay, show, size }) => (
  <span style={{ display: "inline-block", overflow: "hidden", lineHeight: 0.88 }}>
    <motion.span
      initial={{ y: "110%" }}
      animate={{ y: show ? "0%" : "110%" }}
      transition={{ duration: 0.75, ease: REVEAL_EASE, delay }}
      style={{
        display: "block",
        fontFamily: "'Big Shoulders Display', sans-serif",
        fontWeight: 900,
        fontSize: size,
        color,
        letterSpacing: "0.01em",
        lineHeight: 0.86,
        textTransform: "uppercase" as const,
        userSelect: "none",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  </span>
);

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const DURATION = 2200;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      setCount(Math.floor(easeOutQuart(t) * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("splitting"), 300);
        setTimeout(() => {
          setPhase("done");
          document.body.style.overflow = "";
          onComplete();
        }, 1150);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  if (phase === "done") return null;

  const pad = (n: number) => String(n).padStart(2, "0");
  const NAME_SIZE = "clamp(4.5rem, 16vw, 13.5rem)";
  const hitesh = "HITESH".split("");
  const kumar  = "KUMAR.".split("");

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999 }} aria-hidden="true">

      <AnimatePresence>
        {phase === "loading" && (
          <motion.div
            key="pl-body"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
            style={{
              position: "absolute", inset: 0,
              background: C.ink,
              display: "flex", flexDirection: "column",
              padding: "clamp(1.5rem, 4vw, 2.75rem)",
              boxSizing: "border-box",
            }}
          >
            {/* Top bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: C.paper, letterSpacing: "-0.01em" }}>
                  Hitesh Kumar
                </span>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.wine, display: "block", flexShrink: 0 }} />
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: C.muted, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>
                {new Date().getFullYear()}
              </span>
            </div>

            {/* Center headline */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              {/* Progress bar */}
              <div style={{ width: "100%", height: 1, background: C.faint, marginBottom: "clamp(2rem, 5vw, 4rem)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: "0 auto 0 0", width: `${count}%`, background: C.wine, transition: "width 20ms linear" }} />
              </div>

              {/* HITESH */}
              <div style={{ display: "flex", gap: "0.02em" }}>
                {hitesh.map((ch, i) => (
                  <Letter key={i} char={ch} color={C.paper} delay={i * 0.06} show={count >= 20} size={NAME_SIZE} />
                ))}
              </div>

              {/* KUMAR. */}
              <div style={{ display: "flex", gap: "0.01em", marginLeft: "clamp(2rem, 6vw, 6rem)", marginTop: "-0.04em" }}>
                {kumar.map((ch, i) => (
                  <Letter key={i} char={ch} color={C.wine} delay={i * 0.06} show={count >= 50} size={NAME_SIZE} />
                ))}
              </div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: count >= 78 ? 1 : 0, y: count >= 78 ? 0 : 10 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ display: "flex", alignItems: "center", gap: "clamp(0.75rem, 2vw, 1.5rem)", marginTop: "clamp(1.5rem, 3.5vw, 3rem)" }}
              >
                <div style={{ width: 28, height: 1, background: C.wine, flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(9px, 1vw, 11px)", letterSpacing: "0.2em", color: C.muted, textTransform: "uppercase" as const }}>
                  Full Stack Engineer · Open Source · AI
                </span>
              </motion.div>
            </div>

            {/* Bottom: counter only — clean, no clutter */}
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  fontSize: "clamp(3rem, 8vw, 6.5rem)",
                  color: C.paper,
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                  textShadow: count >= 95 ? `0 0 40px ${C.wine}66` : "none",
                  transition: "text-shadow 0.3s ease",
                }}>
                  {pad(count)}
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(0.85rem, 2vw, 1.5rem)", color: C.muted, lineHeight: 1, marginBottom: "0.12em", letterSpacing: "-0.02em" }}>
                  %
                </span>
              </div>
            </div>

            {/* Bottom wine sweep line at 98% */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count >= 98 ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0, 0, 1] }}
              style={{ height: 1, background: `linear-gradient(90deg, ${C.wine}, transparent)`, transformOrigin: "left center", marginTop: "clamp(0.75rem, 2vw, 1.25rem)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Split exit panels */}
      <AnimatePresence>
        {phase === "splitting" && (
          <>
            <motion.div
              key="top-panel"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 0.75, ease: SPLIT_EASE }}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%", background: C.ink }}
            />
            <motion.div
              key="bottom-panel"
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 0.75, ease: SPLIT_EASE }}
              style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "50%", background: C.ink }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
