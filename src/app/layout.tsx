import './globals.css'

import { NavbarMobile, NavbarProvider } from '@/components/organisms/navbar-mobile'

import { ENV } from '@/lib/constants'
import { Footer } from '@/components/organisms/footer'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Metadata } from 'next'
import { Navbar } from '@/components/organisms/navbar'
import { ResponsiveIndicator } from '@/components/atoms/responsive-indicator'
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
    "Explore my interactive devfolio, and a glimpse into my technical expertise. If you're seeking a Ux/Ui developer for your next project, feel free to get in touch!",
  openGraph: {
    title: 'D3vfo1io | 1ucien 1oua',
    description:
    "Explore my interactive devfolio, and a glimpse into my technical expertise. If you're seeking a Ux/Ui developer for your next project, feel free to get in touch!",
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
            <SpeedInsights />
        )}
      </body>
      <ResponsiveIndicator />
    </html>
  )
}
