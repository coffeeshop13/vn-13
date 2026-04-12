import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: 'houseofvalerie.com' },
      { protocol: 'https', hostname: 'decemberthieves.com' },
      { protocol: 'https', hostname: 'shoto.it' },
      { protocol: 'https', hostname: 'postandcoshop.com' },
      { protocol: 'https', hostname: 'wovenstore.com' },
      { protocol: 'https', hostname: 'cordeliajames.com' },
      { protocol: 'https', hostname: 'allstyleclothing.com.au' },
      { protocol: 'https', hostname: 'thedesign.pt' },
    ],
  },
};

export default nextConfig;
