import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Brad Ramnarinesingh",
    short_name: "Brad",
    description:
      "Computer Science student portfolio. Building at the intersection of machine learning and clean interfaces.",
    start_url: "/",
    display: "standalone",
    background_color: "#050814",
    theme_color: "#050814",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "256x256",
        type: "image/x-icon",
      },
    ],
  };
}
