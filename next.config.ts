import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Permite abrir o site em desenvolvimento por 192.168.56.1:3000 (sem isso o JS do carrossel não carrega)
  allowedDevOrigins: ["192.168.56.1"],
};

export default nextConfig;
