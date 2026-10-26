import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The atlas is the whole app.
  async redirects() {
    return [{ source: "/", destination: "/atlas", permanent: false }];
  },
};

export default nextConfig;
