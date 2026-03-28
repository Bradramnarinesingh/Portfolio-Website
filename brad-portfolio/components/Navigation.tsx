"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* Fixed nav bar */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(8, 8, 8, 0.9)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          transition: "background 0.4s ease, border-color 0.4s ease",
        }}
      >
        {/* Separate blur layer — avoids broken backdrop-filter transitions */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
          }}
        />

        <nav
          className="section-inner"
          style={{
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <a
            href="#home"
            onClick={closeMenu}
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

          {/* Desktop nav links */}
          <ul
            className="hidden sm:flex"
            style={{
              alignItems: "center",
              gap: "2rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
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

          {/* Desktop resume */}
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
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex sm:hidden"
            style={{
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              width: "40px",
              height: "40px",
              margin: "-8px -8px -8px 0",
              color: "var(--text-primary)",
              WebkitTapHighlightColor: "transparent",
              touchAction: "manipulation",
            }}
          >
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <line x1="1" y1="1" x2="17" y2="13" />
                  <line x1="1" y1="13" x2="17" y2="1" />
                </>
              ) : (
                <>
                  <line x1="0" y1="1" x2="18" y2="1" />
                  <line x1="0" y1="7" x2="18" y2="7" />
                  <line x1="0" y1="13" x2="18" y2="13" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen overlay — OUTSIDE header to avoid nested fixed bugs on iOS */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="flex sm:hidden"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "rgba(8, 8, 8, 0.98)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.75rem",
              paddingTop: "56px",
            }}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease, delay: 0.04 * i }}
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  letterSpacing: "-0.015em",
                  padding: "0.5rem 1rem",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease, delay: 0.04 * NAV_LINKS.length }}
              className="btn-ghost"
              style={{ fontSize: "0.875rem", marginTop: "0.75rem" }}
            >
              Resume ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
