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
        destination: "https://keanx.yestech.co.za/:path*",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
