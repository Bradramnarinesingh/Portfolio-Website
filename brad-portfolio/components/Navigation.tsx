"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      style={{ display: "block" }}
    >
      <motion.line
        x1="3" x2="17"
        animate={open ? { y1: 10, y2: 10, rotate: 45 } : { y1: 5, y2: 5, rotate: 0 }}
        transition={{ duration: 0.3, ease }}
        style={{ transformOrigin: "center" }}
      />
      <motion.line
        x1="3" y1="10" x2="17" y2="10"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.line
        x1="3" x2="17"
        animate={open ? { y1: 10, y2: 10, rotate: -45 } : { y1: 15, y2: 15, rotate: 0 }}
        transition={{ duration: 0.3, ease }}
        style={{ transformOrigin: "center" }}
      />
    </svg>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease",
        background: scrolled ? "rgba(8, 8, 8, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <nav
        className="section-inner"
        style={{
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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

        {/* Desktop nav */}
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
                className="nav-link"
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
            padding: "6px",
            color: "var(--text-secondary)",
            zIndex: 52,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(8,8,8,0.98)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              zIndex: 51,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              padding: "2rem",
              paddingTop: "5rem",
            }}
            className="sm:hidden"
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease, delay: 0.06 * i }}
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                }}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease, delay: 0.06 * NAV_LINKS.length }}
              className="btn-ghost"
              style={{ fontSize: "0.9375rem", marginTop: "0.5rem" }}
            >
              Resume ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
