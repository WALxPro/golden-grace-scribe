import { createFileRoute, Link } from "@tanstack/react-router";
import PageBanner from "../components/PageBanner";
import ScrollReveal from "../components/ScrollReveal";
import authorPhoto from "../assets/author-photo.jpeg";

export const Route = createFileRoute("/about-author")({
  head: () => ({
    meta: [
      { title: "About Janice Flowers | Christian Author from Alabama" },
      { name: "description", content: "Meet Janice Flowers, a Christian author from Alabama writing heartfelt stories of faith, hope, and redeeming love." },
    ],
  }),
  component: AboutAuthorPage,
});

function AboutAuthorPage() {
  return (
    <>
      <PageBanner
        eyebrow="Author of Life from the Mountain"
        title="Janice Flowers"
        subtitle="Christian Author, Storyteller of Hope"
      />

      <section className="section section-parchment">
        <div className="two-col">
          <ScrollReveal direction="left">
            <div className="author-photo-frame">
              <img src={authorPhoto} alt="Janice Flowers portrait" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="section-eyebrow">Full Bio</div>
            <h2 className="section-title">A Heart for Stories of Grace</h2>
            <div className="prose">
              <p>Janice Flowers is a Christian author from Alabama who has a passion for sharing stories that point readers to God's faithfulness, hope, and redeeming love. Through her writing, she seeks to remind others that no hurt is beyond God's healing and no life is beyond His purpose.</p>
              <p>Her latest release, Life from the Mountain, weaves together faith, history, and emotional healing into a story readers will carry with them long after the final page.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-warm-gradient">
        <div className="two-col">
          <ScrollReveal direction="left">
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--navy-deep)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.4, position: "relative", padding: "20px 40px" }}>
                <span style={{ color: "var(--gold-amber)", fontSize: 60, position: "absolute", top: -6, left: 0, fontFamily: "var(--font-display)" }}>“</span>
                Every story of healing begins with grace.
                <span style={{ color: "var(--gold-amber)", fontSize: 60, position: "absolute", bottom: -30, right: 0, fontFamily: "var(--font-display)" }}>”</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="feature-card" style={{ borderTop: "3px solid var(--gold-amber)" }}>
              <div className="section-eyebrow">Where the Story Comes From</div>
              <p className="prose">
                Raised in Alabama with a deep love for the land and for Scripture, Janice has always been drawn to the quiet strength found in ordinary lives lifted by extraordinary grace. Her Southern roots and her heart for faith-centered storytelling shape every page she writes, offering readers hope, honesty, and the reminder that God is present in every season.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-parchment-light">
        <ScrollReveal>
          <div className="section-center">
            <div className="section-eyebrow">Writing Journey</div>
            <h2 className="section-title">Milestones Along the Path</h2>
          </div>
        </ScrollReveal>
        <div className="timeline">
          <ScrollReveal direction="left">
            <div className="timeline-item left">
              <h3 className="timeline-title">Alabama Roots</h3>
              <p className="timeline-desc">Raised with a heart for faith and storytelling.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="timeline-item right">
              <h3 className="timeline-title">A Calling to Write</h3>
              <p className="timeline-desc">Drawn to stories of grace, hope, and redemption.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="timeline-item left">
              <h3 className="timeline-title">Life from the Mountain</h3>
              <p className="timeline-desc">Her latest release, a story of faith and new beginnings.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-navy section-center">
        <ScrollReveal>
          <div className="section-eyebrow">Stay Connected</div>
          <h2 className="section-title">Follow Janice's Journey</h2>
          <p style={{ maxWidth: 620, margin: "16px auto 30px", color: "var(--parchment)" }}>
            Follow Janice for updates on new releases, reflections on faith, and more.
          </p>
          <Link to="/contact" className="btn btn-amazon">Contact Janice</Link>
        </ScrollReveal>
      </section>
    </>
  );
}
