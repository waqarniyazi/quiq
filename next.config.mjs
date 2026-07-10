import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      // Redirect Vercel preview URLs to canonical domain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?!quiqhealth\\.in).*\\.vercel\\.app',
          },
        ],
        destination: 'https://quiqhealth.in/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ['remark-frontmatter'],
      ['remark-mdx-frontmatter'],
    ],
  },
})

export default withMDX(nextConfig)
