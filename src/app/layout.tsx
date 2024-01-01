import './globals.css'

import { NavbarMobile, NavbarProvider } from '@/components/organisms/navbar-mobile'

import { ENV } from '@/lib/constants'
import { Footer } from '@/components/organisms/footer'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Metadata } from 'next'
import { Navbar } from '@/components/organisms/navbar'
import { ResponsiveIndicator } from '@/components/atoms/responsive-indicator'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeWrapper } from '@/components/atoms/theme-wrapper'

export const metadata: Metadata = {
  metadataBase: new URL(ENV.NEXT_PUBLIC_WEBSITE_URL),
  title: {
    default: 'D3vf01i0',
    template: '%s | D3vf01i0'
  },
  icons: {
    icon: '/favicon.svg',
  },
  description:
    "Get to know me, 1uci3n 1oua, through this devfolio! I'm a passionate Ux/Ui developer and sound designer. Explore my interactive projects, clean portfolio, and a glimpse into my technical expertise. If you're seeking a Ux/Ui developer for your next project or simply looking for inspiration, feel free to get in touch!",
  openGraph: {
    title: 'D3vfo1io',
    description:
      "Get to know me, 1uci3n 1oua, through this devfolio! I'm a passionate Ux/Ui developer and sound designer. Explore my interactive projects, clean portfolio, and a glimpse into my technical expertise. If you're seeking a Ux/Ui developer for your next project or simply looking for inspiration, feel free to get in touch!",
    url: ENV.NEXT_PUBLIC_WEBSITE_URL,
    siteName: 'D3vfo1io',
    locale: 'fr_FR',
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
    title: 'D3vfo1io',
    card: 'summary_large_image'
  },
  verification: {
    google: ENV.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr' suppressHydrationWarning>
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
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script async src='https://umami.wiscaksono.com/script.js' data-website-id='1f3b0505-7366-47bd-8757-95ad25395088' />
            <SpeedInsights />
          </>
        )}
      </body>
      <ResponsiveIndicator />
    </html>
  )
}
