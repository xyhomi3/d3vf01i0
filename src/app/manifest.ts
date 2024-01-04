import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '1UCiEN 1OUA',
    short_name: '1UCiEN',
    description: "Explore my interactive Devfolio to get a glimpse of my technical expertise. If you're looking for a UX/UI developer for your next project, feel free to get in touch!",
    start_url: '/',
    display: 'fullscreen',
    background_color: '#00000c',
    theme_color: '#00000c',
    icons: [
      {
        src: '/favicons/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        type: 'image/png',
        sizes: '32x32',
        src: '/favicons/favicon-32x32.png'
      },
      {
        src: 'public/favicons/mstile-70x70.png',
        sizes: '70x70',
        type: 'image/png'
      },
      {
        src: '/favicons/mstile-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: '/favicons/mstile-150x150.png',
        sizes: '150x150',
        type: 'image/png'
      },
      {
        src: '/favicons/mstile-310x150.png',
        sizes: '310x150',
        type: 'image/png'
      },
      {
        src: '/favicons/mstile-310x310.png',
        sizes: '310x310',
        type: 'image/png'
      },
      {
        src: '/favicons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: '/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },

      {
        src: '/favicons/safari-pinned-tab.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable'
      },
    ]
  }
}
