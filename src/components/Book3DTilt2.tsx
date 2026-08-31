import { useRef } from "react";
import type { MouseEvent } from "react";

import cover from "../assets/book_image.jpg";

type Book3DTilt2Props = {
  size?: number;
};

export default function Book3DTilt2({
  size = 360,
}: Book3DTilt2Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();

    const x =
      (e.clientX - r.left) / r.width - 0.5;

    const y =
      (e.clientY - r.top) / r.height - 0.5;

    el.style.transform = `
      rotateY(${x * 14}deg)
      rotateX(${-y * 14}deg)
      translateZ(0)
    `;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;

    el.style.transform =
      "rotateY(0deg) rotateX(0deg)";
  };

  const onTouch = () => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = "scale(1.03)";

    setTimeout(() => {
      if (ref.current) {
        ref.current.style.transform = "scale(1)";
      }
    }, 250);
  };

  return (
    <div
      className="book-tilt-wrap"
      style={{ maxWidth: `${size}px` }}
    >
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

        <span className="book-tilt-badge book-tilt-bagdge-avaliable">
          Avaliable Now
        </span>

        <div className="shimmer" />
      </div>
    </div>
  );
}