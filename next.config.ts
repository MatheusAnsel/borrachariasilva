import type { NextConfig } from "next";

// Exportação estática: gera a pasta "out", que roda no Cloudflare Pages e na Vercel sem servidor.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
