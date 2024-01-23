import { NavbarMobile, NavbarProvider } from '@/components/organisms/layouts/navbar/navbar-mobile'

import { Analytics } from '@vercel/analytics/react'
import { ENV } from '@/lib/env/constants'
import { Footer } from '@/components/organisms/layouts/footer/footer'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Metadata } from 'next'
import { Navbar } from '@/components/organisms/layouts/navbar/navbar'
import NextIntlProvider from '@/components/molecules/lang/LocaleClientProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeWrapper } from '@/components/atoms/theme-wrapper'
import type { Viewport } from 'next'
import { locales } from '@/config'
import { notFound } from 'next/navigation'
import { unstable_setRequestLocale } from 'next-intl/server'

// _viewport_________________________________________
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

// _metadata_________________________________________
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
    locale: 'en_US',
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

// _generateStaticParams______________________________
export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}
export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  let messages
  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-mono`}>
        <ThemeWrapper attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <main>
            <NextIntlProvider locale={locale} messages={messages}>
              <NavbarProvider>
                <Navbar />
                <NavbarMobile />
              </NavbarProvider>
              {children}
              <Footer />
            </NextIntlProvider>
          </main>
        </ThemeWrapper>

        {process.env.NODE_ENV === 'production' && <SpeedInsights /> && <Analytics />}
      </body>
      {/* <ResponsiveIndicator /> */}
    </html>
  )
}
