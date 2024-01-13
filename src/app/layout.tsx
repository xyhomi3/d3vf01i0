import './globals.css'

import { NavbarMobile, NavbarProvider } from '@/components/organisms/layouts/navbar/navbar-mobile'

import { Analytics } from '@vercel/analytics/react';
import { ENV } from '@/lib/env/constants'
import { Footer } from '@/components/organisms/layouts/footer/footer'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Metadata } from 'next'
import { Navbar } from '@/components/organisms/layouts/navbar/navbar'
import { ResponsiveIndicator } from '@/components/atoms/responsive-indicator'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeWrapper } from '@/components/atoms/theme-wrapper'
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fffcf7' },
    { media: '(prefers-color-scheme: dark)', color: '#00000c' }
  ]
}
export const metadata: Metadata = {
  metadataBase: new URL(ENV.NEXT_PUBLIC_WEBSITE_URL),
  title: {
    default: 'D3vf01i0',
    template: '%s | D3vf01i0'
  },
  icons: {
    icon: ['/favicons/favicon.ico'],
    shortcut: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png'
  },
  referrer: 'origin-when-cross-origin',
  keywords: ['Ux', 'Ui', 'Developer', 'Web', 'Designer', 'Guinea', 'Senegal', 'JavaScript', 'TypeScript', 'Web3', 'Solana', 'Bitcoin', 'Finance'],
  category: 'portfolio',
  appLinks: {
    web: {
      url: 'https://0000.codes',
      should_fallback: true
    }
  },
  description:
    "Explore my interactive Devfolio to get a glimpse of my technical expertise. If you're looking for a UX/UI developer for your next project, feel free to get in touch!",
  openGraph: {
    title: 'D3vfo1io | 1ucien 1oua',
    description:
      "Explore my interactive Devfolio to get a glimpse of my technical expertise. If you're looking for a UX/UI developer for your next project, feel free to get in touch!",
    url: ENV.NEXT_PUBLIC_WEBSITE_URL,
    siteName: 'Devfolio',
    locale: 'en_EN',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'D3vfo1io | 1ucien 1oua',
    card: 'summary_large_image'
  },
  verification: {
    google: ENV.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-mono`}>
        <ThemeWrapper attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <main>
            <NavbarProvider>
              <Navbar />
              <NavbarMobile />
            </NavbarProvider>
            {children}
            <Footer />
          </main>
        </ThemeWrapper>
        {process.env.NODE_ENV === 'production' && <SpeedInsights /> && <Analytics/>}
      </body>
      <ResponsiveIndicator />
    </html>
  )
}
