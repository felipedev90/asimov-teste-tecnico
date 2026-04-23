import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = "Positivus — Navigating the digital landscape for success";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      {/* Top: logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            background: "#191A23",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#B9FF66",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          ★
        </div>
        <span
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#191A23",
          }}
        >
          {siteConfig.name}
        </span>
      </div>

      {/* Middle: headline */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px 24px",
            fontSize: "80px",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#191A23",
            maxWidth: "960px",
          }}
        >
          <span style={{ display: "flex" }}>Navigating</span>
          <span style={{ display: "flex" }}>the</span>
          <span style={{ display: "flex" }}>digital</span>
          <span style={{ display: "flex" }}>landscape</span>
          <span style={{ display: "flex" }}>for</span>
          <span
            style={{
              display: "flex",
              background: "#B9FF66",
              padding: "0 16px",
              borderRadius: "8px",
            }}
          >
            success
          </span>
        </div>

        <p
          style={{
            fontSize: "28px",
            lineHeight: 1.4,
            color: "#4B5563",
            margin: 0,
            maxWidth: "800px",
          }}
        >
          Digital marketing agency helping businesses grow online through SEO,
          PPC, social media, and content.
        </p>
      </div>

      {/* Bottom: services strip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          paddingTop: "32px",
          borderTop: "1px solid #E5E7EB",
        }}
      >
        {["SEO", "PPC", "Social Media", "Content"].map((text) => (
          <span
            key={text}
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#191A23",
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
