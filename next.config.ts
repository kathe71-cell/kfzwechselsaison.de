import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // Redirect kfz-wechselsaison.de → kfzwechselsaison.de (fallback)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "kfz-wechselsaison.de",
          },
        ],
        destination: "https://kfzwechselsaison.de/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
