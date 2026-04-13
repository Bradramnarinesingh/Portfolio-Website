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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="site-header" data-scrolled={String(scrolled)}>
        {/* Separate blur div — avoids broken backdrop-filter transition in Firefox/Safari */}
        <div className="site-header__blur" aria-hidden="true" />

        <div className="site-header__inner section-inner">
          <a href="#home" className="nav-brand" onClick={close}>
            Brad.
          </a>

          {/* Desktop links */}
          <nav className="nav-desktop" aria-label="Site navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="nav-desktop__link">
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop resume */}
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost nav-resume"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>

          {/* Hamburger — three CSS spans, no unicode */}
          <button
            className="nav-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open ? "true" : "false"}
          >
            <span className="nav-toggle__bars" data-open={String(open)}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay — lives OUTSIDE header, never nested in fixed context */}
      <div
        className="nav-mobile"
        data-open={String(open)}
        aria-hidden={open ? "false" : "true"}
      >
        <nav className="nav-mobile__inner" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              className="nav-mobile__link"
              data-index={i}
              onClick={close}
            >
              {label}
            </a>
          ))}
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost nav-mobile__resume"
            onClick={close}
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </>
  );
}
