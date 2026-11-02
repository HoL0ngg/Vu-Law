import type { NextConfig } from "next";

/**
 * HTTP headers for every response. HSTS is already added by the host.
 *
 * A Content-Security-Policy is deliberately not set here: Next.js inlines scripts, so a
 * correct policy needs per-request nonces, and a wrong one would break the site.
 */
const config: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        ],
      },
      {
        // The pictures keep their file names when they are replaced, so they are cached for a
        // day and refreshed in the background for a week, not for a year.
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
};

export default config;
