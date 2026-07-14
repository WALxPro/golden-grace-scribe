import { useRef, useState, type ReactNode } from "react";

export default function AccordionItem({ q, children }: { q: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const height = open && contentRef.current ? contentRef.current.scrollHeight : 0;

  return (
    <div className={`accordion-item ${open ? "open" : ""}`}>
      <button className="accordion-header" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>{q}</span>
        <span className="accordion-icon">+</span>
      </button>
      <div className="accordion-content" style={{ maxHeight: height }}>
        <div className="accordion-body" ref={contentRef}>{children}</div>
      </div>
    </div>
  );
}
