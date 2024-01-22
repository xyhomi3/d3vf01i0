
/**
 * @type {import('next').NextConfig}
 */




const { withContentlayer } = require('next-contentlayer')
const withNextIntl = require('next-intl/plugin')();
const withPWA = require("next-pwa")({
  dest: ".next/public",
  register: true,
  skipWaiting: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
});
const nextConfig = withPWA(
  {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    experimental: {
      webpackBuildWorker: true,
      serverActions: {
        enabled: true
      }
    },
    logging: {
      fetches: {
        fullUrl: true
      }
    },
    transpilePackages: ["lucide-react"],
    redirects() {
      return [
        {
          source: '/about',
          destination: '/about/personal.ts',
          permanent: true
        }
      ]
    }
  }
)

module.exports = withNextIntl(withContentlayer(nextConfig));
