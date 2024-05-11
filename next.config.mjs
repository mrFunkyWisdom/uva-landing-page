import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  publicRuntimeConfig: {
    SITE_URL: process.env.SITE_URL
  }
}

export default withContentlayer(nextConfig)
