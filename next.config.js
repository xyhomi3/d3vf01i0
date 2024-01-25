
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
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/sounds/', // Directorio de salida para los archivos de audio
            publicPath: '/_next/static/sounds/', // URL pública para acceder a los archivos de audio
          },
        },
      });
  
      return config;
    },
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
