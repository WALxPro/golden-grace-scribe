import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import logo from "../assets/logo.png";
import bookCover from "../assets/bookcover-front.png";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo"><img src={logo} alt="Janice Flowers" /></div>
          <p className="footer-tagline">Stories of faith, healing, and new beginnings.</p>
          <p>Janice Flowers writes heartfelt Christian fiction that points readers to God's grace and the hope of second chances.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home <span className="arrow">›</span></Link></li>
            <li><Link to="/about-author">About the Author <span className="arrow">›</span></Link></li>
            <li><Link to="/about-book">About the Book <span className="arrow">›</span></Link></li>
            <li><Link to="/faq">FAQ <span className="arrow">›</span></Link></li>
            <li><Link to="/contact">Contact <span className="arrow">›</span></Link></li>
          </ul>
        </div>

        <div>
          <h4>The Book</h4>
          <p style={{ fontFamily: "var(--font-display)", color: "var(--gold-light)", fontSize: "1.1rem", marginBottom: 4 }}>Life from the Mountain</p>
          <p style={{ fontStyle: "italic", fontSize: ".88rem" }}>A Story of Redemption, Faith and New Beginnings</p>
          <img src={bookCover} alt="Life from the Mountain book cover" className="footer-book-thumb" />
          <ul style={{ marginTop: 14 }}>
            <li><a href="https://amazon.com" target="_blank" rel="noreferrer">Buy on Amazon <span className="arrow">›</span></a></li>
            <li><a href="#buy-direct">Buy Directly <span className="arrow">›</span></a></li>
          </ul>
        </div>

        <div>
          <h4>Stay Connected</h4>
          <p>Get updates on new releases and reflections on faith.</p>
          <form className="subscribe-form" onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
          {subscribed && <p className="subscribe-success">Thank you, you're on the list.</p>}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Janice Flowers. Life from the Mountain. All rights reserved.</span>
        <span className="credit">Website designed and developed by Chicagowrite</span>
      </div>
    </footer>
  );
}
