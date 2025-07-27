import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 10;
const DELAY = 0.2;
const TAIL_EMOJI = "⭐"; // Golden Star

const EmojiTrail = () => {
  const spans = useRef<HTMLSpanElement[]>([]);
  const positions = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
  );
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafRef = useRef<number>();

  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable on mobile

    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      let prev = mouse.current;
      for (let i = 0; i < TRAIL_LENGTH; i++) {
        const pos = positions.current[i];
        pos.x += (prev.x - pos.x) * DELAY;
        pos.y += (prev.y - pos.y) * DELAY;
        const el = spans.current[i];
        if (el) {
          el.style.left = `${pos.x}px`;
          el.style.top = `${pos.y}px`;
          el.style.opacity = `${1 - i * 0.08}`; // fading tail
          el.style.filter = `blur(${i * 1.5}px)`; // glow blur
        }
        prev = pos;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`body { cursor: none; }`}</style>

      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) spans.current[i] = el;
          }}
          style={{
            position: "fixed",
            pointerEvents: "none",
            fontSize: "20px",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            color: "gold",
            transition: "none",
          }}
        >
          {TAIL_EMOJI}
        </span>
      ))}
    </>
  );
};

export default EmojiTrail;
