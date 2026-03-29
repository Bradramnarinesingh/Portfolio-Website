"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease, delay: index * 0.08 }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="card"
        style={{
          display: "block",
          padding: "2rem",
          textDecoration: "none",
          position: "relative",
          overflow: "hidden",
          height: "100%",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        {/* Subtle top gradient per project */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: `linear-gradient(to right, transparent, ${project.accent}, transparent)`,
          }}
        />

        {/* Top row: number + external link */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.75rem" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
            }}
          >
            {project.id}
          </span>
          <span
            style={{
              fontSize: "0.8125rem",
              color: "var(--text-muted)",
              transition: "color 0.2s ease, transform 0.2s ease",
              display: "inline-block",
            }}
            className="link-indicator"
          >
            ↗
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
            fontWeight: 600,
            color: "var(--text-primary)",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            marginBottom: "0.875rem",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            marginBottom: "1.75rem",
          }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "auto" }}>
          {project.tech.map(t => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </a>
    </motion.div>
  );
}

export function Work() {
  return (
    <section id="work" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
      <div className="section-inner">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            marginBottom: "3.5rem",
          }}
        >
          <span className="section-label">Selected Work</span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to right, var(--border), rgba(120, 140, 255, 0.05), transparent)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              color: "var(--text-muted)",
            }}
          >
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </motion.div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "1rem",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
