import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const savings = searchParams.get("savings") || "0";
    const score = searchParams.get("score") || "A";

    return new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            background: "#000",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
          }}
        >
          <div
            style={{
              fontSize: 42,
              letterSpacing: 8,
              marginBottom: 30,
            }}
          >
            SPENDLENS
          </div>

          <div
            style={{
              fontSize: 90,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            AI Spend Audit
          </div>

          <div
            style={{
              marginTop: 40,
              fontSize: 50,
              color: "#22c55e",
            }}
          >
            Save ${savings}/month
          </div>

          <div
            style={{
              marginTop: 20,
              fontSize: 34,
              color: "#999",
            }}
          >
            Efficiency Score: {score}
          </div>

          <div
            style={{
              marginTop: 60,
              fontSize: 28,
              color: "#777",
            }}
          >
            Find hidden AI subscription waste
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response("Failed to generate image", {
      status: 500,
    });
  }
}