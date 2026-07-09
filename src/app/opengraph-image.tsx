import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = `${siteConfig.name} — ${siteConfig.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0f4f58 0%, #156570 50%, #1a7a87 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            BF
          </div>
          <span style={{ fontSize: "24px", opacity: 0.85 }}>Portfolio</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span style={{ fontSize: "72px", fontWeight: 700, lineHeight: 1.05 }}>
            {siteConfig.name}
          </span>
          <span style={{ fontSize: "36px", opacity: 0.9 }}>
            {siteConfig.jobTitle} · Backend · DevOps
          </span>
          <span style={{ fontSize: "24px", opacity: 0.75, maxWidth: "800px" }}>
            Building production-ready web apps with TypeScript, Node.js, React
            & Laravel
          </span>
        </div>

        <div style={{ display: "flex", gap: "24px", fontSize: "22px", opacity: 0.8 }}>
          <span>{siteConfig.location.city}, {siteConfig.location.country}</span>
          <span>·</span>
          <span>bariqfirjatullah.my.id</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
