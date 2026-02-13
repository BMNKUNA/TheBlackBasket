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
        destination: "https://tw25u6efuvr5307kqmmxgs0l.sanity.studio/:path*",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
