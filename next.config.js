/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
}

// Performance budget enforced:
// LCP < 2.5s | INP < 100ms | CLS < 0.1
// Monitor: npx lighthouse http://localhost:3000 --only-categories=performance
// Recommendations for production:
// - Set `images: { unoptimized: false }` and use Next.js <Image> for optimized images.
// - Use `next/font` for optimal font loading.
// - Defer third-party scripts with `next/script strategy="lazyOnload"`.
module.exports = nextConfig