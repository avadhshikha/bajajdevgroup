import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/factory-mess/", destination: "/", permanent: true },
      { source: "/bpo-service-in-khargone/", destination: "/", permanent: true },
      { source: "/prefabricated-structures/", destination: "/", permanent: true },
      {
        source: "/manufacturing-and-trading/",
        destination: "/services/",
        permanent: true,
      },
      { source: "/software-development/", destination: "/", permanent: true },
      {
        source: "/maintenance-and-repair/",
        destination: "/renovation-khargone/",
        permanent: true,
      },
      { source: "/home-furniture/", destination: "/", permanent: true },
      { source: "/elementor-:slug", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
