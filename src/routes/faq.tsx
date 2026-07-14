import { createFileRoute, Link } from "@tanstack/react-router";
import PageBanner from "../components/PageBanner";
import AccordionItem from "../components/AccordionItem";
import ScrollReveal from "../components/ScrollReveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Janice Flowers, Life from the Mountain" },
      { name: "description", content: "Answers to common questions about Janice Flowers and her Christian novel Life from the Mountain." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "Where can I buy the book?", a: "Life from the Mountain is available on Amazon Kindle, Barnes and Noble, Apple Books, Kobo, Google Play Books, and as a paperback edition. Direct purchase is also available through this site." },
  { q: "Is this book part of a series?", a: "Life from the Mountain is a standalone story, though it lives within Janice's broader body of work exploring themes of faith, healing, and grace." },
  { q: "What themes does the book explore?", a: "The book explores redemption, faith, emotional healing, second chances, God's grace, and the courage to begin again against the quiet backdrop of mountain life." },
  { q: "Is this book appropriate for a church book club?", a: "Yes. Life from the Mountain is written for adult readers and is especially well suited for Christian book clubs and small groups looking for reflective, faith-centered fiction." },
  { q: "Will there be a sequel?", a: "Janice is currently focused on new stories of faith and hope. Sign up for the newsletter to be the first to hear about future releases." },
  { q: "Is the book available in paperback?", a: "Yes. Life from the Mountain is available in both paperback and eBook formats." },
  { q: "Where can I leave a review?", a: "Reader reviews on Amazon and Barnes and Noble are deeply appreciated. Every review helps other readers discover the book." },
  { q: "How can I stay updated on new releases?", a: "Subscribe to the newsletter in the footer, or reach out through the Contact page. Janice loves staying connected with readers." },
];

function FAQPage() {
  return (
    <>
      <PageBanner
        eyebrow="Everything You Might Want to Know"
        title="Frequently Asked Questions"
        subtitle="Answers for readers, book clubs, and fellow believers on the journey"
      />

      <section className="section section-parchment-light">
        <div className="accordion">
          {faqs.map((f, i) => (
            <ScrollReveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <AccordionItem q={f.q}>{f.a}</AccordionItem>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="cta-card">
            <h3>Still have questions? Reach out directly.</h3>
            <p style={{ color: "var(--navy-soft)", marginBottom: 24 }}>
              Janice loves hearing from readers. Send a note anytime.
            </p>
            <Link to="/contact" className="btn-ghost-gold">Contact Janice</Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
