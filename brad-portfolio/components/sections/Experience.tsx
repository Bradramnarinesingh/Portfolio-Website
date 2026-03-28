"use client";

import { motion } from "framer-motion";
import { experience, education, skills } from "@/lib/data";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function SectionRow({ label, children, delay = 0 }: { label: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease, delay }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1.5rem",
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        borderTop: "1px solid var(--border)",
      }}
      className="exp-row"
    >
      <span className="section-label" style={{ paddingTop: "0.25rem", minWidth: "fit-content" }}>
        {label}
      </span>
      <div>{children}</div>

      <style>{`
        @media (min-width: 768px) {
          .exp-row {
            grid-template-columns: 180px 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

function JobEntry({ job }: { job: (typeof experience)[number] }) {
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
        <div>
          <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em", marginBottom: "0.2rem" }}>
            {job.company}
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>
            {job.role}
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{job.location}</p>
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", whiteSpace: "nowrap", alignSelf: "flex-start" }}>
          {job.period}
        </span>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {job.bullets.map(bullet => (
          <li
            key={bullet}
            style={{
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              display: "flex",
              gap: "0.625rem",
            }}
          >
            <span style={{ color: "var(--text-muted)", marginTop: "0.5rem", flexShrink: 0, fontSize: "0.3rem" }}>●</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            marginBottom: "0",
          }}
        >
          <span className="section-label">Experience</span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </motion.div>

        <SectionRow label="Education" delay={0.05}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <div>
              <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em", marginBottom: "0.2rem" }}>
                {education.school}
              </p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>
                {education.degree}
              </p>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{education.location}</p>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", whiteSpace: "nowrap", alignSelf: "flex-start" }}>
              {education.period}
            </span>
          </div>
          <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
            {education.courses.map(c => (
              <span key={c} className="tag">{c}</span>
            ))}
          </div>
        </SectionRow>

        <SectionRow label="Work" delay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {experience.map(job => (
              <JobEntry key={job.company} job={job} />
            ))}
          </div>
        </SectionRow>

        <SectionRow label="Skills" delay={0.15}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p style={{ fontSize: "0.6875rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.625rem" }}>
                  {category}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {items.map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionRow>
      </div>
    </section>
  );
}
