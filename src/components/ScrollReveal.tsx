import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  direction?: "up" | "left" | "right";
  as?: keyof HTMLElementTagNameMap;
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, direction = "up", as = "div", className = "" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dirCls = direction === "left" ? "from-left" : direction === "right" ? "from-right" : "";
  const delayCls = delay ? `delay-${delay}` : "";
  const Tag = as as any;
  return (
    <Tag ref={ref as any} className={`reveal ${dirCls} ${delayCls} ${className}`}>
      {children}
    </Tag>
  );
}
