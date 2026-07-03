import { ImageResponse } from "next/og";
import { WEBINAR_CONFIG } from "@/config/webinar";

// Shared by opengraph-image and twitter-image so the social card is defined once.
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = WEBINAR_CONFIG.meta.ogImageAlt;

const { brand, details, hero } = WEBINAR_CONFIG;

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f0f15",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row: org + free pill */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#c3bbf9",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 99, background: "#f2a33c" }} />
            {brand.org} · Live Webinar
          </div>
          <div
            style={{
              display: "flex",
              background: "#7c3aed",
              color: "#ffffff",
              fontSize: 26,
              fontWeight: 800,
              padding: "10px 26px",
              borderRadius: 99,
            }}
          >
            100% Free
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 118, fontWeight: 800, color: "#ffffff", lineHeight: 1 }}>
            {hero.titleTop}{" "}
            <span style={{ color: "#a855f7", marginLeft: 24 }}>{hero.titleBottom}</span>
          </div>
          <div style={{ display: "flex", marginTop: 34, fontSize: 40, fontWeight: 600, color: "#e5e0f7", maxWidth: 980 }}>
            {hero.punch}
          </div>
        </div>

        {/* footer: date/time */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 30,
            fontWeight: 700,
            color: "#ffffff",
            borderTop: "2px solid #2a2440",
            paddingTop: 28,
          }}
        >
          <span>{details.dateLabel}</span>
          <span style={{ color: "#6d28d9" }}>•</span>
          <span>{details.timeLabel}</span>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
