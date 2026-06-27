/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",       // ← export estático
  trailingSlash: true,    // ← compatibilidade com Vercel/CDN
  images: {
    unoptimized: true,    // ← necessário no export estático
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
