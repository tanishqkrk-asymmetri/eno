import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  redirects: async function () {
    return [
      {
        source: "/",
        destination: "/stopMotion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
