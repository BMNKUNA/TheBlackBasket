/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: "/studio/:path*",
        destination: "https://the-black-basket-cms.vercel.app/:path*",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
