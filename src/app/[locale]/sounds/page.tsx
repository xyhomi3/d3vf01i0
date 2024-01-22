import { ENV } from '@/lib/env/constants'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
const title = 'Music'
const description = 'S00n...'
const url = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/music`

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url
  },
  twitter: {
    title,
    description
  }
}

export default function Music() {
  const t = useTranslations('Sounds')
  return (
    <section className='h-dvh flex items-center justify-center flex-col'>
      <div className='relative text-center'>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl'>{`>_ ${t('soon')}_<3`}</h1>
        <p className='mt-6 text-base leading-7 text-wrap border rounded-md m-5 p-5'>{t('description')}</p>
        <div className='absolute w-full h-full bg-secondary blur-2xl top-0 left-0 -z-10 rounded-full' />
      </div>
    </section>
  )
}
