import { createFileRoute } from "@tanstack/react-router";
import PageBanner from "../components/PageBanner";
import Book3DTilt from "../components/Book3DTilt";
import BuyButtons from "../components/BuyButtons";
import PlatformTicker from "../components/PlatformTicker";
import ScrollReveal from "../components/ScrollReveal";
import bookCover from "../assets/bookcover-front.png";

export const Route = createFileRoute("/about-book")({
  head: () => ({
    meta: [
      { title: "Life from the Mountain | Christian Novel by Janice Flowers" },
      { name: "description", content: "About Life from the Mountain, a story of redemption, faith, and new beginnings. Discover the themes, setting, and where to buy." },
    ],
  }),
  component: AboutBookPage,
});

const details = [
  { k: "Genre", v: "Christian Fiction, Historical Fiction" },
  { k: "Themes", v: "Redemption, Faith, Healing, New Beginnings" },
  { k: "Setting", v: "A mountain community, a weathered log home, misty ridgelines" },
  { k: "Tone", v: "Heartfelt, reflective, hopeful" },
  { k: "Format", v: "Paperback and eBook" },
  { k: "Perfect For", v: "Readers of faith-based and inspirational fiction" },
];

const themes = [
  { icon: "✝", title: "Faith and God's Grace", desc: "A quiet, honest look at God's presence in every season of life." },
  { icon: "☀", title: "Redemption and Second Chances", desc: "Every heart, no matter how wounded, can begin again." },
  { icon: "♥", title: "Emotional Healing", desc: "A tender exploration of grief, trust, and being made new." },
  { icon: "✦", title: "New Beginnings", desc: "The courage to walk into what God is quietly building." },
];

const reviews = [
  { text: "A beautifully written story of grace that stayed with me long after I finished it.", name: "A Reader" },
  { text: "Janice writes with such honesty about pain and healing. This book is a gift.", name: "Book Club Reader" },
  { text: "A quiet, powerful reminder that God's grace reaches every corner of our lives.", name: "Early Reader Review" },
  { text: "The mountain setting and the faith woven through every chapter made me feel at home.", name: "Verified Reader" },
];

function AboutBookPage() {
  return (
    <>
      <PageBanner
        eyebrow="A Story of Redemption, Faith and New Beginnings"
        title="LIFE FROM THE MOUNTAIN"
      >
        <div style={{ margin: "10px 0 30px", display: "flex", justifyContent: "center" }}>
          <Book3DTilt size={280} />
        </div>
        <BuyButtons />
      </PageBanner>

      <section className="section section-parchment">
        <div className="two-col">
          <ScrollReveal direction="left">
            <div className="section-eyebrow">Full Synopsis</div>
            <h2 className="section-title">The Story</h2>
            <div className="genre-pills">
              <span className="genre-pill">Christian Fiction</span>
              <span className="genre-pill">Historical Fiction</span>
              <span className="genre-pill">Redemption and Healing</span>
              <span className="genre-pill">Faith-Based Storytelling</span>
            </div>
            <p className="prose">
              Life from the Mountain is a heartfelt story of redemption, weaving together Christian faith, historical fiction, and emotional healing set against the quiet beauty and hard realities of mountain life. It follows two wounded souls whose paths cross and whose lives are slowly, tenderly transformed by God's grace. Set among misty ridgelines and a weathered mountain home, this is a story about second chances, the courage to begin again, and the belief that no life is ever beyond His purpose.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="mini-cover" style={{ width: "min(320px, 80%)", margin: "0 auto" }}>
              <img src={bookCover} alt="Life from the Mountain cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-parchment-light">
        <ScrollReveal>
          <div className="section-center">
            <div className="section-eyebrow">Book Details</div>
            <h2 className="section-title">Between These Pages</h2>
          </div>
        </ScrollReveal>
        <div className="feature-grid">
          {details.map((d, i) => (
            <ScrollReveal key={d.k} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="feature-card">
                <div className="section-eyebrow" style={{ marginBottom: 8 }}>{d.k}</div>
                <p className="feature-desc" style={{ fontSize: "1.05rem", color: "var(--navy-deep)" }}>{d.v}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section section-warm-gradient">
        <ScrollReveal>
          <div className="section-center">
            <div className="section-eyebrow">Themes of the Story</div>
            <h2 className="section-title">Threads Woven Through the Pages</h2>
          </div>
        </ScrollReveal>
        <div className="themes-grid">
          {themes.map((t, i) => (
            <ScrollReveal key={t.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="theme-pillar">
                <div className="theme-icon">{t.icon}</div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section section-parchment">
        <ScrollReveal>
          <div className="section-center">
            <div className="section-eyebrow">Reader Reviews</div>
            <h2 className="section-title">Voices from Readers</h2>
          </div>
        </ScrollReveal>
        <div className="reviews-row four">
          {reviews.map((r, i) => (
            <ScrollReveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="review-card">
                <span className="review-quote">“</span>
                <p className="review-text">{r.text}</p>
                <div className="review-name">{r.name}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section section-navy" id="buy-direct">
        <ScrollReveal>
          <div className="section-center">
            <div className="section-eyebrow">Get Your Copy Today</div>
            <h2 className="section-title">Where to Buy</h2>
          </div>
        </ScrollReveal>
        <PlatformTicker />
        <div className="section-center" style={{ marginTop: 40 }}>
          <BuyButtons />
          <p style={{ marginTop: 18, color: "var(--parchment)", fontStyle: "italic", opacity: .8 }}>
            Available in paperback and eBook formats
          </p>
        </div>
      </section>
    </>
  );
}
