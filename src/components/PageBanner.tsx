import type { ReactNode } from "react";
import ParticleCanvas from "./ParticleCanvas";
import RidgeDivider from "./RidgeDivider";

interface Props {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  full?: boolean;
}

export default function PageBanner({ eyebrow, title, subtitle, children, full }: Props) {
  return (
    <section className={`banner ${full ? "hero-full" : ""}`}>
      <div className="sunburst" />
      <div className="sun-rays" />
      <ParticleCanvas density={full ? 40 : 24} />
      <RidgeDivider />
      <div className="banner-inner">
        {eyebrow && <div className="banner-eyebrow">{eyebrow}</div>}
        <h1 className="banner-title">{title}</h1>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}
        <div className="gold-divider"><span className="dot" /></div>
        {children}
      </div>
    </section>
  );
}
