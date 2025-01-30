// # next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No basePath needed for subdomain approach!
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig