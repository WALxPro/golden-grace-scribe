import type { MouseEvent } from "react";

function ripple(e: MouseEvent<HTMLAnchorElement>) {
  const target = e.currentTarget;
  const r = target.getBoundingClientRect();
  const span = document.createElement("span");
  const size = Math.max(r.width, r.height);
  span.className = "ripple";
  span.style.width = span.style.height = size + "px";
  span.style.left = (e.clientX - r.left - size / 2) + "px";
  span.style.top = (e.clientY - r.top - size / 2) + "px";
  target.appendChild(span);
  setTimeout(() => span.remove(), 700);
}

export default function BuyButtons() {
  return (
    <div className="btn-row">
      <a
        href="https://amazon.com"
        target="_blank"
        rel="noreferrer"
        className="btn btn-amazon"
        onClick={ripple}
      >
        Buy on Amazon
      </a>
      <a href="#buy-direct" className="btn btn-direct" onClick={ripple}>
        Buy Directly
      </a>
    </div>
  );
}
