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

export default function BuyButtons({ link = "https://www.amazon.com/Life-Mountain-Story-Redemption-Beginnings/dp/B0HKV55BT9/ref=sr_1_1?crid=PWSNAC9WCJP1&dib=eyJ2IjoiMSJ9.paeEnPLu41z7Qj3rywXenNhRrA9OdFm-p0pjP_GHDtQ600ima8eLfbz5o-MNgQbWTM-15FkM_z8dbgg51E2IUDK9dryuJCVHKlWIrGgeQpKBGXER430M9-cF2eyHaHxE-AG2rqF-GwVpuf802XmDoHzYfmV3Gjt9eTp4bwuUpmBhdcESiP0r9xjoe2qxH79NRLqt33stQrHt5L5cJ1uOTlZGCjb_1DqI8TiJn8JF49s.iFRHjanaIsvCS4XOfoOYwauZb-1ovOBbXr2uUU3aqCE&dib_tag=se&keywords=life+from+the+mountain&qid=1790806471&s=books&sprefix=life+from+the+mountain%2Cstripbooks-intl-ship%2C348&sr=1-1" }: BuyButtonsProps) {
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