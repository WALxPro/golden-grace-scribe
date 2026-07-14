import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import PageBanner from "../components/PageBanner";
import ScrollReveal from "../components/ScrollReveal";
import authorPhoto from "../assets/author-photo.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Janice Flowers | Christian Author" },
      { name: "description", content: "Reach out to Janice Flowers, Christian author of Life from the Mountain." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageBanner
        eyebrow="Let's Stay in Touch"
        title="Contact Janice"
        subtitle="For readers, book clubs, and fellow believers on the journey"
      />

      <section className="section section-parchment">
        <div className="contact-grid">
          <ScrollReveal direction="left">
            {sent ? (
              <div className="form-success">
                <h3 style={{ fontFamily: "var(--font-display)", color: "var(--navy-deep)", marginBottom: 10, fontSize: "1.6rem" }}>Thank you for reaching out.</h3>
                <p>Janice will read your message personally and respond as soon as she can.</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-amazon" style={{ width: "100%" }}>Send Message</button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="contact-info">
              <h3>Reach Out</h3>
              <p>Janice loves hearing from readers, book clubs, and fellow believers on the journey.</p>
              <a href="mailto:hello@janiceflowersbooks.com" className="contact-info-email">hello@janiceflowersbooks.com</a>
              <p style={{ color: "var(--navy-soft)", fontStyle: "italic" }}>
                Whether you want to share what a story meant to you, invite Janice into your book club conversation, or simply say hello, your note is warmly welcomed.
              </p>
              <div className="contact-mini-photo">
                <img src={authorPhoto} alt="Janice Flowers" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
