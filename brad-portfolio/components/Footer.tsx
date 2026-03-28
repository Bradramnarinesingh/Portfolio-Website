export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: "1.5rem",
        paddingBottom: "2rem",
      }}
    >
      <div
        className="section-inner"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", letterSpacing: "0.01em" }}>
          © {year} Brad Ramnarinesingh
        </span>
        <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", letterSpacing: "0.01em" }}>
          Built with Next.js · Deployed on Vercel
        </span>
      </div>
    </footer>
  );
}
