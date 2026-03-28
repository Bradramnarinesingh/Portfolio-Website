"use client";

import { motion } from "framer-motion";
import { experience, education, skills } from "@/lib/data";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function SectionRow({ label, children, delay = 0 }: { label: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease, delay }}
      className="exp-row"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1.25rem",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <span className="section-label" style={{ paddingTop: "0.125rem" }}>
        {label}
      </span>
      <div>{children}</div>
    </motion.div>
  );
}

function JobEntry({ job }: { job: (typeof experience)[number] }) {
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.375rem", marginBottom: "0.875rem" }}>
        <div>
          <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em", marginBottom: "0.15rem" }}>
            {job.company}
          </p>
          <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginBottom: "0.125rem" }}>
            {job.role}
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{job.location}</p>
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--text-muted)", whiteSpace: "nowrap", alignSelf: "flex-start" }}>
          {job.period}
        </span>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.375rem" }}>
        {job.bullets.map(bullet => (
          <li
            key={bullet}
            style={{
              fontSize: "0.8125rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <span style={{ color: "var(--text-muted)", marginTop: "0.5rem", flexShrink: 0, fontSize: "0.25rem" }}>●</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
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
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.375rem", marginBottom: "0.75rem" }}>
            <div>
              <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em", marginBottom: "0.15rem" }}>
                {education.school}
              </p>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginBottom: "0.125rem" }}>
                {education.degree}
              </p>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{education.location}</p>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--text-muted)", whiteSpace: "nowrap", alignSelf: "flex-start" }}>
              {education.period}
            </span>
          </div>
          <div style={{ marginTop: "0.75rem", display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
            {education.courses.map(c => (
              <span key={c} className="tag">{c}</span>
            ))}
          </div>
        </SectionRow>

        <SectionRow label="Work" delay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {experience.map(job => (
              <JobEntry key={job.company} job={job} />
            ))}
          </div>
        </SectionRow>

        <SectionRow label="Skills" delay={0.15}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p style={{ fontSize: "0.625rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
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
