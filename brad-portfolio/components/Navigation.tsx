"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: scrolled ? "rgba(8, 8, 8, 0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
      }}
    >
      <nav
        className="section-inner"
        style={{ height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontSize: "0.9375rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--text-primary)",
            textDecoration: "none",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Brad.
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden sm:flex"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href={siteConfig.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost hidden sm:inline-flex"
        >
          Resume
          <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>↗</span>
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          className="sm:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "var(--text-secondary)",
          }}
        >
          <span style={{ fontSize: "1.25rem" }}>{menuOpen ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(8,8,8,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: "1px solid var(--border)",
            padding: "1.5rem",
          }}
          className="sm:hidden"
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ width: "fit-content" }}
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
