import ParticleCanvas from "./ParticleCanvas";
import ScrollReveal from "./ScrollReveal";

export default function MessageFromAuthor() {
  return (
    <section className="message-section">
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <ParticleCanvas density={22} />
      </div>
      <div className="message-inner">
        <ScrollReveal delay={1}>
          <div className="message-quote-icon">“</div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="message-text">
            I wrote this story for anyone who has ever wondered if they are too broken, too far gone, or too late for a new beginning. I promise you, grace reaches every mountain.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={3}>
          <div className="message-signature">With love, Janice</div>
        </ScrollReveal>
        <div className="gold-divider"><span className="dot" /></div>
      </div>
    </section>
  );
}
