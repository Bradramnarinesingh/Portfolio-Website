export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: "2rem",
        paddingBottom: "2.5rem",
      }}
    >
      <div
        className="section-inner"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            letterSpacing: "0.01em",
          }}
        >
          © {year} Brad Ramnarinesingh
        </span>
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            letterSpacing: "0.01em",
          }}
        >
          Built with Next.js · Deployed on Vercel
        </span>
      </div>
    </footer>
  );
}
