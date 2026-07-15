import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        // Prefer AVIF (≈30% smaller than WebP for photos), fall back to WebP.
        formats: ["image/avif", "image/webp"],
    },
};

export default nextConfig;
