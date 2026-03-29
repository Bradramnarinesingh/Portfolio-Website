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
      <div className="section-inner">
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            letterSpacing: "0.01em",
          }}
        >
          © {year} Brad Ramnarinesingh
        </span>
      </div>
    </footer>
  );
}
