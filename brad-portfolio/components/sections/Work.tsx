"use client";

import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease, delay: index * 0.1 }}
      style={featured ? { gridColumn: "1 / -1" } : undefined}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="card"
        style={{
          display: "grid",
          gridTemplateColumns: featured ? "1fr" : "1fr",
          padding: featured ? "2.5rem" : "2rem",
          textDecoration: "none",
          position: "relative",
          overflow: "hidden",
          height: "100%",
          transition: "transform 0.35s ease, border-color 0.35s ease, background 0.35s ease, box-shadow 0.35s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        {/* Accent glow on hover */}
        <div
          className="project-glow"
          aria-hidden="true"
          style={{
            background: `linear-gradient(180deg, ${project.accentFrom}, ${project.accentTo})`,
          }}
        />

        {/* Top row: number + external link */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: featured ? "2rem" : "1.5rem" }}>
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
          <motion.span
            style={{
              fontSize: "0.875rem",
              color: "var(--text-muted)",
              display: "inline-block",
            }}
            whileHover={{ x: 2, y: -2, color: "var(--text-primary)" }}
            transition={{ duration: 0.2 }}
          >
            ↗
          </motion.span>
        </div>

        {/* Title + subtitle */}
        <div style={{ marginBottom: "1rem" }}>
          <h3
            style={{
              fontSize: featured ? "clamp(1.35rem, 2.8vw, 1.75rem)" : "clamp(1.1rem, 2.2vw, 1.35rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              marginBottom: "0.375rem",
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontSize: "0.8125rem",
              color: "var(--text-muted)",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            {project.subtitle}
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            marginBottom: "1.75rem",
            maxWidth: featured ? "600px" : undefined,
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
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
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

        {/* Project layout: first card featured full-width, rest in 2-col */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
          }}
          className="project-grid"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured={i === 0} />
          ))}
        </div>

        <style>{`
          @media (min-width: 768px) {
            .project-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
