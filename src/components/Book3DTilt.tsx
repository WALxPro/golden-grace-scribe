import { useRef, type MouseEvent } from "react";
import cover from "../assets/bookcover-front.png";

export default function Book3DTilt({ size = 360 }: { size?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;

    el.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(0)`;
  };

  const onLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "rotateY(0) rotateX(0)";
    }
  };

  const onTouch = () => {
    if (!ref.current) return;

    ref.current.style.transform = "scale(1.03)";

    setTimeout(() => {
      if (ref.current) {
        ref.current.style.transform = "scale(1)";
      }
    }, 250);
  };

  return (
    <div className="book-tilt-wrap" style={{ maxWidth: size }}>
      <div
        className="book-tilt"
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onTouchStart={onTouch}
      >
        <img
          src={cover}
          alt="Life from the Mountain book cover"
        />

       <span className="book-status available">
                Available Now
              </span>

        <div className="shimmer" />
      </div>
    </div>
  );
}