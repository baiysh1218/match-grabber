import type { NextConfig } from "next";
import { Configuration as WebpackConfiguration } from "webpack";

const nextConfig: NextConfig = {
  webpack: (config: WebpackConfiguration) => {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
