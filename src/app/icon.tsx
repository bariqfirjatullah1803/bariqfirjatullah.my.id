import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#156570",
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          borderRadius: "8px",
        }}
      >
        B
      </div>
    ),
    { ...size },
  );
}
