import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about-author", label: "About the Author" },
  { to: "/about-book", label: "About the Book" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label="Janice Flowers home">
            <img src={logo} alt="Janice Flowers logo" />
          </Link>
          <div className="nav-links">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className={`nav-link ${path === l.to ? "active" : ""}`}>
                {l.label}
              </Link>
            ))}
          </div>
          <button
            className={`hamburger ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="nav-link" onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
