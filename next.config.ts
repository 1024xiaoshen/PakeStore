import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',
    distDir: 'dist',
    trailingSlash: true,
    images: {
        unoptimized: false,
    },
}

export default nextConfig
