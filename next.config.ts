import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Danger: disables type errors from failing the build; keep local typechecking via scripts
    ignoreBuildErrors: true,
  },
  eslint: {
    // Prevent ESLint errors from failing production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
