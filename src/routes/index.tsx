import { createFileRoute, Link } from "@tanstack/react-router";
import PageBanner from "../components/PageBanner";
import BuyButtons from "../components/BuyButtons";
import Book3DTilt from "../components/Book3DTilt";
import PlatformTicker from "../components/PlatformTicker";
import ScrollReveal from "../components/ScrollReveal";
import MessageFromAuthor from "../components/MessageFromAuthor";
import authorPhoto from "../assets/author-photo.jpeg";
import bookCover from "../assets/bookcover-front.png";
import oldBookCover from "../assets/book_image.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Janice Flowers | Life from the Mountain, a Christian Novel of Redemption" },
      { name: "description", content: "A heartfelt journey of faith, healing, and second chances by Christian author Janice Flowers. Read Life from the Mountain today." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: "✦", title: "A Story of Redemption", desc: "Two wounded lives quietly transformed by grace." },
  { icon: "✧", title: "Rooted in Faith", desc: "A gentle, honest exploration of God's healing power." },
  { icon: "▲", title: "Mountain Setting", desc: "The beauty and hardship of life among the ridgelines." },
  { icon: "❋", title: "Historical Fiction Woven In", desc: "A story grounded in time and place." },
  { icon: "♥", title: "Emotional Healing", desc: "A journey readers will feel in their own hearts." },
  { icon: "☀", title: "Hope for New Beginnings", desc: "A reminder that no life is beyond His purpose." },
];

const reviews = [
  { text: "A beautifully written story of grace that stayed with me long after I finished it.", name: "A Reader" },
  { text: "Janice writes with such honesty about pain and healing. This book is a gift.", name: "Book Club Reader" },
  { text: "A quiet, powerful reminder that God's grace reaches every corner of our lives.", name: "Early Reader Review" },
];

function HomePage() {
  return (
    <>
      {/* SECTION 1 - HERO */}
      <PageBanner
        full
        eyebrow="A Story of Redemption, Faith and New Beginnings"
        title="LIFE FROM THE MOUNTAIN"
      >
        <div className="hero-tagline">A heartfelt journey of faith, healing, and second chances.</div>
        <div className="hero-author">by Janice Flowers</div>
        <BuyButtons />
        <div className="scroll-indicator" aria-hidden>⌄</div>
      </PageBanner>

      {/* SECTION 2 - BOOK SHOWCASE */}
      <section className="section section-parchment">
        <div className="two-col">
          <ScrollReveal direction="left">
            <Book3DTilt />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="section-eyebrow">The Book</div>
            <h2 className="section-title">Life from the Mountain</h2>
            <span className="pill-badge">A Story of Redemption, Faith and New Beginnings</span>
            <p className="prose" style={{ marginTop: 16 }}>
              A story of redemption, weaving together Christian faith, historical fiction, and emotional healing against the beauty and challenge of mountain life. It follows two wounded people whose lives are quietly and powerfully transformed by God's grace.
            </p>
            <div className="genre-pills">
              <span className="genre-pill">Christian Fiction</span>
              <span className="genre-pill">Historical Fiction</span>
              <span className="genre-pill">Redemption and Healing</span>
              <span className="genre-pill">Faith-Based Storytelling</span>
            </div>
            <div className="stars">★★★★★</div>
            <BuyButtons />
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 - PLATFORMS */}
      <section className="section section-navy">
        <ScrollReveal>
          <h2 className="section-title section-center">Available on Your Favorite Platforms</h2>
          <p className="section-center" style={{ fontFamily: "var(--font-script)", color: "var(--gold-light)", fontSize: "2rem", marginBottom: 30 }}>
            Wherever your heart loves to read
          </p>
        </ScrollReveal>
        <PlatformTicker />
        <div className="stats-row">
          <ScrollReveal delay={1}><div className="stat-card"><div className="stat-icon">✦</div><div className="stat-label">Faith-Filled Story</div></div></ScrollReveal>
          <ScrollReveal delay={2}><div className="stat-card"><div className="stat-icon">☀</div><div className="stat-label">Redemption Journey</div></div></ScrollReveal>
          <ScrollReveal delay={3}><div className="stat-card"><div className="stat-icon">▲</div><div className="stat-label">Mountain Setting</div></div></ScrollReveal>
        </div>
      </section>

      {/* SECTION 4 - ABOUT AUTHOR PREVIEW */}
      <section className="section section-parchment-light">
        <div className="two-col">
          <ScrollReveal direction="left">
            <div className="author-photo-frame">
              <img src={authorPhoto} alt="Janice Flowers, Christian author" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="section-eyebrow">Meet the Author</div>
            <h2 className="author-name">Janice Flowers</h2>
            <div className="author-subtitle">Christian Author, Storyteller of Hope</div>
            <div className="prose">
              <p>Janice Flowers is a Christian author from Alabama with a heartfelt passion for sharing stories that point readers to God's faithfulness, hope, and redeeming love. Her writing carries the quiet conviction that no hurt is beyond God's healing and no life is beyond His purpose.</p>
              <p>Through every page, she invites readers into a deeper trust in grace, drawing on the beauty of mountain life and the resilience of the human heart.</p>
              <p>Her latest release, Life from the Mountain, reflects years of thoughtful storytelling rooted in faith, and she hopes every reader closes the book feeling a little more hopeful than when they opened it.</p>
            </div>
            <div style={{ marginTop: 28 }}>
              <Link to="/about-author" className="btn-ghost-gold">Read Full Bio</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5 - SYNOPSIS DEEP DIVE */}
      {/* <section className="section section-warm-gradient">
        <ScrollReveal>
          <div className="pull-quote">
            <div className="pull-quote-text">No hurt is beyond His healing.</div>
          </div>
        </ScrollReveal>
        <div className="synopsis-wrap">
          <div className="synopsis-sidelabel">Synopsis</div>
          <div>
            <ScrollReveal>
              <p className="synopsis-body">
                Life from the Mountain is a heartfelt story of redemption, weaving together Christian faith, historical fiction, and emotional healing set against the quiet beauty and hard realities of mountain life. It follows two wounded souls whose paths cross and whose lives are slowly, tenderly transformed by God's grace. Set among misty ridgelines and a weathered mountain home, this is a story about second chances, the courage to begin again, and the belief that no life is ever beyond His purpose.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="mini-cover"><img src={bookCover} alt="Life from the Mountain cover" /></div>
            </ScrollReveal>
          </div>
        </div>
      </section> */}

<section className="section section-warm-gradient">

  <ScrollReveal>
    <div className="pull-quote">
      <div className="pull-quote-text">
        No hurt is beyond His healing.
      </div>
    </div>
  </ScrollReveal>

  <div className="synopsis-wrap">
    <div className="synopsis-sidelabel">Synopsis</div>

    <div>
      <ScrollReveal>
        <p className="synopsis-body">
          Life from the Mountain is a heartfelt story of redemption,
          weaving together Christian faith, historical fiction, and
          emotional healing set against the quiet beauty and hard
          realities of mountain life. It follows two wounded souls whose
          paths cross and whose lives are slowly, tenderly transformed by
          God's grace. Set among misty ridgelines and a weathered mountain
          home, this is a story about second chances, the courage to begin
          again, and the belief that no life is ever beyond His purpose.
        </p>
      </ScrollReveal>
    </div>
  </div>

  {/* ===== Books by Janice Flowers ===== */}
  <ScrollReveal delay={1}>
    <div className="author-books">

      <div className="author-books-header">
        <span className="author-books-eyebrow">
          Books by Janice Flowers
        </span>

        <h3 className="author-books-heading">
          Stories of Faith, Hope & Redemption
        </h3>

        <p className="author-books-subtitle">
          Discover Janice Flowers&apos; published work and her upcoming novel.
        </p>
      </div>

      <div className="author-books-row">

        {/* A Time With No End */}
        <article className="author-book-card">
          <a
            href="https://www.amazon.com/Time-No-End-Janice-Flowers-ebook/dp/B096X745J8"
            target="_blank"
            rel="noopener noreferrer"
            className="author-book-cover-link"
            aria-label="View A Time With No End on Amazon"
          >
            <div className="author-book-cover">
              <img
                src={oldBookCover}
                alt="A Time With No End by Janice Flowers"
                loading="lazy"
              />

              <span className="book-status available">
                Available Now
              </span>
            </div>
          </a>

          <div className="author-book-info">
            <h4>A Time With No End</h4>

            <p className="author-book-description">
              A story of faith tested through life&apos;s hardest moments,
              discovering the strength to trust God and believe in His
              timeless promises.
            </p>

            <a
              href="https://www.amazon.com/Time-No-End-Janice-Flowers-ebook/dp/B096X745J8"
              target="_blank"
              rel="noopener noreferrer"
              className="book-amazon-link"
            >
              View on Amazon
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </article>


        {/* Life from the Mountain */}
        <article className="author-book-card featured-book">
          <div className="author-book-cover">
            <img
              src={bookCover}
              alt="Life from the Mountain by Janice Flowers"
              loading="lazy"
            />

            <span className="book-status coming-soon">
              Coming Soon
            </span>
          </div>

          <div className="author-book-info">
            <h4>Life from the Mountain</h4>

            <p className="author-book-description">
              A heartfelt story of redemption, second chances, Christian
              faith, and healing amid the quiet beauty of mountain life.
            </p>

            <span className="book-coming-text">
              Coming Soon
            </span>
          </div>
        </article>

      </div>
    </div>
  </ScrollReveal>

</section>


      {/* SECTION 6 - MESSAGE FROM JANICE */}
      <MessageFromAuthor />

      {/* SECTION 7 - FEATURE GRID */}
      <section className="section section-parchment-light">
        <ScrollReveal>
          <div className="section-center">
            <div className="section-eyebrow">Why This Story Touches Hearts</div>
            <h2 className="section-title">Why Readers Love This Book</h2>
          </div>
        </ScrollReveal>
        <div className="feature-grid">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SECTION 8 - READER PRAISE */}
      <section className="section section-parchment">
        <ScrollReveal>
          <div className="section-center">
            <div className="section-eyebrow">Reader Praise</div>
            <h2 className="section-title">What Readers Are Saying</h2>
          </div>
        </ScrollReveal>
        <div className="reviews-row">
          {reviews.map((r, i) => (
            <ScrollReveal key={i} delay={((i + 1) as 1 | 2 | 3)}>
              <div className="review-card">
                <span className="review-quote">“</span>
                <p className="review-text">{r.text}</p>
                <div className="review-name">{r.name}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SECTION 9 - CTA */}
      <section className="section section-sunset" id="buy-direct">
        <ScrollReveal>
          <div className="section-center">
            <h2 className="section-title" style={{ color: "var(--parchment-light)", textShadow: "0 0 30px rgba(251,243,231,.5)" }}>
              Begin Your Own Journey of Grace
            </h2>
            <p style={{ maxWidth: 640, margin: "16px auto 34px", fontSize: "1.15rem", color: "var(--parchment-light)" }}>
              Grab your copy today and step into a story of faith, healing, and new beginnings.
            </p>
            <BuyButtons />
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
