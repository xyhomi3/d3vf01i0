import { ENV } from '@/lib/env/constants'
import { Metadata } from 'next'
import { unstable_setRequestLocale } from 'next-intl/server'
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

export default function Sound({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Sounds')
  return (
    <section className='h-dvh flex items-center justify-center flex-col'>
      <div className='relative text-center'>
        <p className='mt-6 text-base leading-7 text-wrap border w-[270px] rounded-md m-5 p-5'>{t('description')}</p>
      </div>
    </section>
  )
}
