import React from "react";
import "@/styles/ui.css";

type Props = {
  src?: string;
  poster?: string;
  title?: string;
  subtitle?: string;
};

export function VideoHero({
  src = "https://www.pexels.com/es-es/download/video/5192719/",
  poster,
  title = "Hotel buena vida ",
  subtitle = "lo mejor te espera",
}: Props) {
  return (
    <section
      id="video"
      className="container"
      style={{ display: "grid", gap: 12, paddingTop: 16,}}
    >
      <h2 style={{ margin: 0 }}>{title}</h2>
      <p style={{ marginTop: 0, color: "#667280" }}>{subtitle}</p>

      <video
        src={src}
        poster={poster}
        muted
        autoPlay
        style={{ width: "100%", borderRadius: 8 }}
      />
    </section>
  );
}