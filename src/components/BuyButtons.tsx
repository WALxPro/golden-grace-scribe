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
    <div className="">
      <a
        href="https://www.amazon.com/Time-No-End-Janice-Flowers-ebook/dp/B096X745J8/ref=sr_1_1?crid=38GJ6RNCC7YZF&dib=eyJ2IjoiMSJ9.CSilix9fwAHEpTLLT0NZkQ.8_Fq1judwXL4sp6hb0GhKEuGoJwts7E4GTzgh_rqsLg&dib_tag=se&keywords=A+time+with+no+end+janice+flowers&qid=1787678178&s=books&sprefix=a+time+with+no+end+janice+flowers%2Cstripbooks-intl-ship%2C356&sr=1-1"
        target="_blank"
        rel="noreferrer"
        className="btn btn-amazon"
        onClick={ripple}
      >
        Buy on Amazon
      </a>
     
    </div>
  );
}
