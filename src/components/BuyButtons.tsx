import type { MouseEvent } from "react";

interface BuyButtonsProps {
  link?: string;
}

function ripple(e: MouseEvent<HTMLAnchorElement>) {
  const target = e.currentTarget;
  const r = target.getBoundingClientRect();

  const span = document.createElement("span");
  const size = Math.max(r.width, r.height);

  span.className = "ripple";
  span.style.width = `${size}px`;
  span.style.height = `${size}px`;
  span.style.left = `${e.clientX - r.left - size / 2}px`;
  span.style.top = `${e.clientY - r.top - size / 2}px`;

  target.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 700);
}

export default function BuyButtons({ link }: BuyButtonsProps) {
  return (
    <div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-amazon"
          onClick={ripple}
        >
          Buy on Amazon
        </a>
      ) : (
        <button
          className="btn btn-amazon"
          disabled
        >
          Coming Soon
        </button>
      )}
    </div>
  );
}