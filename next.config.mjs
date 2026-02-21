import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

// No remark/rehype plugins = serializable options, so Turbopack works.
// Add remarkGfm + rehypePrism back and use `next dev --webpack` / `next build --webpack` if you add MDX content that needs GFM (tables, etc.) or code highlighting.
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
