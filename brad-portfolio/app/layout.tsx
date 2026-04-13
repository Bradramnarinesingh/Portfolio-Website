import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { MotionRoot } from "@/components/MotionRoot";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  // Tells iOS 26 Safari's browser chrome (and Android Chrome) what colour to
  // use for its own UI area. Matches --bg so there is no visible seam between
  // the page and the system chrome at the top safe area.
  themeColor: "#08080b",
};

export const metadata: Metadata = {
  title: "Brad Ramnarinesingh",
  description:
    "Computer Science student at the University of Toronto. Building at the intersection of machine learning and clean interfaces.",
  keywords: ["Brad Ramnarinesingh", "portfolio", "CS", "machine learning", "web development", "University of Toronto"],
  authors: [{ name: "Brad Ramnarinesingh" }],
  metadataBase: new URL("https://brad1.dev"),
  alternates: { canonical: "/" },
  verification: { google: "Jnqi6GitWUP8saB4joeHa-1chcYZcy7rYg73UcaXO70" },
  openGraph: {
    title: "Brad Ramnarinesingh",
    description:
      "Computer Science student at the University of Toronto. Building at the intersection of machine learning and clean interfaces.",
    type: "website",
    url: "https://brad1.dev",
  },
  twitter: {
    card: "summary",
    title: "Brad Ramnarinesingh",
    description:
      "Computer Science student at the University of Toronto. Building at the intersection of machine learning and clean interfaces.",
    creator: "@b_ramnarine",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <MotionRoot>{children}</MotionRoot>
        <Analytics />
      </body>
    </html>
  );
}
