import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

// ── Route segment config ─────────────────────────────
export const runtime = "edge";
export const alt = `${siteConfig.name} — Aprenda Python do zero com IA`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ── The image ────────────────────────────────────────
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #080e1a 0%, #0d1425 50%, #080e1a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* ── Top: logo + badge ───────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Wordmark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 900,
                color: "#080e1a",
              }}
            >
              A
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.1,
              }}
            >
              <span
                style={{ fontSize: "24px", fontWeight: 700, color: "#ffffff" }}
              >
                Asimov
              </span>
              <span
                style={{ fontSize: "16px", fontWeight: 400, color: "#94a3b8" }}
              >
                Academy
              </span>
            </div>
          </div>

          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "999px",
              background: "rgba(6, 182, 212, 0.1)",
              border: "1px solid rgba(6, 182, 212, 0.25)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                background: "#22d3ee",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#22d3ee",
                letterSpacing: "0.02em",
              }}
            >
              Novo curso disponível
            </span>
          </div>
        </div>

        {/* ── Middle: headline ───────────────────────────── */}
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
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                maxWidth: "960px",
            }}
            >
            <span style={{ display: "flex" }}>Aprenda</span>
            <span style={{ display: "flex", color: "#f97316" }}>Python</span>
            <span style={{ display: "flex" }}>do zero</span>
            <span style={{ display: "flex" }}>e construa</span>
            <span style={{ display: "flex" }}>projetos reais</span>
            <span style={{ display: "flex" }}>com</span>
            <span style={{ display: "flex", color: "#f97316" }}>IA</span>
            </div>

          <p
            style={{
              fontSize: "28px",
              lineHeight: 1.4,
              color: "#94a3b8",
              margin: 0,
              maxWidth: "800px",
            }}
          >
            O curso mais prático do Brasil para quem quer entrar em tecnologia
            sem enrolação.
          </p>
        </div>

        {/* ── Bottom: features strip ─────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {[
            "+40h de conteúdo",
            "Projetos com IA",
            "+20.000 alunos",
            "Certificado",
          ].map((text) => (
            <span
              key={text}
              style={{
                fontSize: "22px",
                fontWeight: 500,
                color: "#cbd5e1",
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}